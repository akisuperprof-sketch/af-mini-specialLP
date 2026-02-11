const cron = require('node-cron');
const dataService = require('./data_service');
const xService = require('./x_service');
const contentGeneratorService = require('./content_generator_service');
const logger = require('../utils/logger');
const axios = require('axios');
const env = require('../config/env');

class SchedulerService {
    constructor() {
        this.consecutiveFailures = 0;
        this.CIRCUIT_BREAKER_THRESHOLD = 5;
    }

    start() {
        if (process.env.RUN_MODE === 'local') {
            logger.info('Starting local scheduler (node-cron)...');
            // Process Scheduled Posts (Every 5 minutes for safety in local)
            cron.schedule('*/5 * * * *', async () => {
                await this.runCronSequence('scheduled_post');
            });

            // Generate Daily Drafts (Every day at 23:00 UTC = 08:00 JST)
            cron.schedule('0 23 * * *', async () => {
                await this.runCronSequence('generate_drafts');
            });

            // Metrics Check (Every hour)
            cron.schedule('30 * * * *', async () => {
                await this.runCronSequence('check_metrics');
            });
        } else {
            logger.info('Scheduler started in production mode (Vercel Cron expected).');
        }
    }

    /**
     * Unified entry point for cron tasks with locking and logging
     */
    async runCronSequence(action) {
        const lockKey = `cron_${action}`;
        const hasLock = await dataService.acquireLock(lockKey, 600);
        if (!hasLock) return;

        const startTime = Date.now();
        let stats = { processed_count: 0, success_count: 0, failed_count: 0, skipped_count: 0 };

        try {
            logger.info(`[CRON] Starting action: ${action}`);

            if (action === 'scheduled_post') {
                stats = await this.processScheduledPosts();
            } else if (action === 'generate_drafts') {
                stats = await this.generateDailyDrafts();
            } else if (action === 'check_metrics') {
                stats = await this.checkMetrics();
            }

            await dataService.addCronLog({
                action,
                status: 'success',
                duration_ms: Date.now() - startTime,
                ...stats
            });
        } catch (error) {
            logger.error(`[CRON] Fatal error in ${action}`, error);
            await dataService.addCronLog({
                action,
                status: 'fatal_error',
                duration_ms: Date.now() - startTime,
                error: error.message
            });
            await this.notifyWebhook(`🚨 Cron Fatal Error: ${action}\n${error.message}`);
        } finally {
            await dataService.releaseLock(lockKey);
        }
    }

    async processScheduledPosts() {
        if (this.consecutiveFailures >= this.CIRCUIT_BREAKER_THRESHOLD) {
            logger.warn('Circuit breaker active. Skipping posting.');
            return { skipped_count: 1, reason: 'circuit_breaker' };
        }

        const stats = { processed_count: 0, success_count: 0, failed_count: 0, skipped_count: 0 };
        const posts = await dataService.getPosts();
        const now = new Date();

        // Filter posts to be posted
        const toPost = posts.filter(p => {
            if (!p.scheduled_at) return false;
            
            // Robust Date Parsing: Handle variations like "2026/2/10" vs "2026/02/10"
            // We normalize the string to YYYY-MM-DD for reliable Date object creation across environments
            const normalizedDateStr = p.scheduled_at.trim().replace(/\//g, '-');
            const scheduledDate = new Date(normalizedDateStr);
            
            const isDue = (p.status === 'scheduled' || p.status === 'retry') &&
                         scheduledDate <= now &&
                         (p.retry_count || 0) < 3;
            
            return isDue;
        }).slice(0, 3); // Safety: max 3 per run

        stats.processed_count = toPost.length;

        if (toPost.length === 0) {
            const currentHour = now.getHours();
            if ([8, 12, 20].includes(currentHour)) {
                logger.warn(`[EMERGENCY] No posts found for ${currentHour}:00 slot. Generating on the fly...`);

                try {
                    await dataService.init();
                    const dictionaries = await dataService.getDictionaries();
                    const dayOfWeek = now.getDay();
                    const stage = ['S5', 'S1', 'S2', 'S3', 'S1', 'S2', 'S4'][dayOfWeek];

                    const context = {
                        season: this._getSeason(now),
                        trend: 'Emergency Failover Posting',
                        count: 1,
                        targetStage: stage,
                        productMentionAllowed: true
                    };

                    const drafts = await contentGeneratorService.generateDrafts(context, dictionaries);
                    if (drafts && drafts.length > 0) {
                        const emergencyPost = drafts[0];
                        logger.info(`[EMERGENCY] Posting newly generated content: ${emergencyPost.draft.substring(0, 20)}...`);

                        const result = await xService.postTweet(emergencyPost.draft);

                        await dataService.addPost({
                            ...emergencyPost,
                            status: 'posted',
                            tweet_id: result.id,
                            posted_at: now.toISOString(),
                            scheduled_at: now.toISOString().split('T')[0].replace(/-/g, '/') + ` ${currentHour}:00:00`
                        });

                        await this.notifyWebhook(`🚨 【緊急自動生成】\n${currentHour}時用の予約がなかったため、AIがその場で記事を生成して投稿を完了しました。`);
                        stats.success_count++;
                        return stats;
                    }
                } catch (genError) {
                    logger.error('[EMERGENCY] Failed to generate failover post', genError);
                    await this.notifyWebhook(`🛑 【緊急自動生成失敗】\n${currentHour}時の投稿が不能です。手動での対応をお願いします。\nError: ${genError.message}`);
                }
            }
        }

        for (const post of toPost) {
            try {
                // Safety: Daily limit check (hard limit 5)
                const todayPosts = posts.filter(p => p.status === 'posted' && p.posted_at && p.posted_at.startsWith(now.toISOString().split('T')[0]));
                if (todayPosts.length >= 5) {
                    logger.warn('Daily post limit reached. Skipping.');
                    stats.skipped_count++;
                    continue;
                }

                logger.info(`Posting tweet ID: ${post.id}`);
                const result = await xService.postTweet(post.draft);

                await dataService.updatePost(post.id, {
                    status: 'posted',
                    tweet_id: result.id,
                    posted_at: new Date().toISOString(),
                    last_error: ''
                });

                this.consecutiveFailures = 0;
                stats.success_count++;
            } catch (error) {
                this.consecutiveFailures++;
                stats.failed_count++;
                const newRetryCount = (post.retry_count || 0) + 1;
                const nextStatus = newRetryCount >= 3 ? 'failed' : 'retry';

                await dataService.updatePost(post.id, {
                    status: nextStatus,
                    retry_count: newRetryCount,
                    last_error: error.message
                });

                if (this.consecutiveFailures >= this.CIRCUIT_BREAKER_THRESHOLD) {
                    await this.notifyWebhook(`🛑 Circuit Breaker Active! Consecutive failures: ${this.consecutiveFailures}`);
                }
            }
        }
        return stats;
    }

    async generateDailyDrafts(count = 3) {
        const stats = { processed_count: 0, success_count: 0, failed_count: 0 };
        try {
            await dataService.init();
            const dictionaries = await dataService.getDictionaries();
            const templates = await dataService.getContentTemplates();
            const patterns = await dataService.getPostPatterns();
            const posts = await dataService.getPosts();

            // Look ahead for Today (D+0), Tomorrow (D+1) and Day after tomorrow (D+2)
            const targetDays = [0, 1, 2];
            const timeSlots = ['08:00:00', '12:00:00', '20:00:00'];
            const stages = ['S1', 'S2', 'S3', 'S1', 'S2', 'S4']; // Stage rotation candidates

            for (const offset of targetDays) {
                const targetDate = new Date();
                targetDate.setDate(targetDate.getDate() + offset);
                const targetStr = targetDate.toISOString().split('T')[0].replace(/-/g, '/');

                // Check if posts already exist for this day
                const existing = posts.filter(p => p.scheduled_at && p.scheduled_at.startsWith(targetStr));

                if (existing.length === 0) {
                    logger.info(`[AUTO-GEN] No posts found for ${targetStr}. Generating backup drafts...`);
                    await this.notifyWebhook(`⚡ 【セーフティネット稼働】\n${targetStr}の投稿予定が空だったため、AIがバックアップ記事（3件）を自動生成しました。`);

                    const dayOfWeek = targetDate.getDay();
                    const baseStage = ['S5', 'S1', 'S2', 'S3', 'S1', 'S2', 'S4'][dayOfWeek];

                    const context = {
                        season: this._getSeason(targetDate),
                        trend: 'Automated Daily Backup',
                        count: count,
                        targetStage: baseStage,
                        productMentionAllowed: true
                    };

                    const drafts = await contentGeneratorService.generateDrafts(context, { ...dictionaries, templates, patterns });

                    for (let i = 0; i < drafts.length; i++) {
                        const time = timeSlots[i] || '12:00:00';
                        const rotatedStage = stages[(dayOfWeek + i) % stages.length];
                        const abVersion = i === 0 ? 'A' : (i === 1 ? 'B' : 'A');

                        const result = await dataService.addPost({
                            ...drafts[i],
                            status: 'scheduled',
                            scheduled_at: `${targetStr} ${time}`,
                            stage: drafts[i].stage || rotatedStage,
                            ab_version: drafts[i].ab_version || abVersion
                        });
                        if (result && result.success) stats.success_count++;
                    }
                    stats.processed_count += drafts.length;
                } else {
                    logger.info(`[AUTO-GEN] Posts already exist for ${targetStr}. Skipping.`);
                }
            }

            // Stock Check Alert
            const remainingCount = posts.filter(p => p.status === 'scheduled' || p.status === 'draft_ai').length;
            if (remainingCount < 6) { // Less than 2 days
                await this.notifyWebhook(`⚠️ 【記事在庫アラート】\n予約リストの残りが${remainingCount}件（約2日分以下）です。新しく記事を生成するか、トピックを指定して補充してください。`);
            }
        } catch (error) {
            logger.error('Error in generating drafts', error);
            stats.failed_count = 1;
        }
        return stats;
    }

    async checkMetrics() {
        const stats = { processed_count: 0, success_count: 0, failed_count: 0 };
        const posts = await dataService.getPosts();
        const now = new Date();

        // Check posts from last 48 hours that are posted but missing 24h metrics
        const candidates = posts.filter(p =>
            p.status === 'posted' &&
            p.tweet_id &&
            (!p.metrics_checked_at_24h)
        );

        for (const post of candidates) {
            const postedAt = new Date(post.posted_at);
            const ageHours = (now - postedAt) / 3600000;

            let update = null;
            if (ageHours >= 24) {
                logger.info(`Checking 24h metrics for ${post.tweet_id}`);
                const data = await xService.getTweetMetrics(post.tweet_id);
                if (data && data.public_metrics) {
                    update = {
                        metrics_like: data.public_metrics.like_count,
                        metrics_rt: data.public_metrics.retweet_count,
                        metrics_reply: data.public_metrics.reply_count,
                        metrics_checked_at_24h: now.toISOString()
                    };
                }
            } else if (ageHours >= 1 && !post.metrics_checked_at_1h) {
                logger.info(`Checking 1h metrics for ${post.tweet_id}`);
                const data = await xService.getTweetMetrics(post.tweet_id);
                if (data && data.public_metrics) {
                    update = {
                        metrics_like: data.public_metrics.like_count,
                        metrics_rt: data.public_metrics.retweet_count,
                        metrics_reply: data.public_metrics.reply_count,
                        metrics_checked_at_1h: now.toISOString()
                    };
                }
            }

            if (update) {
                await dataService.updatePost(post.id, update);
                stats.success_count++;
            }
            stats.processed_count++;
        }
        return stats;
    }

    async notifyWebhook(message) {
        if (!env.WEBHOOK_URL) return;
        try {
            await axios.post(env.WEBHOOK_URL, { text: message });
        } catch (e) {
            logger.error('Webhook notification failed', e.message);
        }
    }

    _getSeason(date) {
        const month = date.getMonth() + 1;
        if (month >= 3 && month <= 5) return 'Spring';
        if (month >= 6 && month <= 8) return 'Summer';
        if (month >= 9 && month <= 11) return 'Autumn';
        return 'Winter';
    }
}

module.exports = new SchedulerService();
