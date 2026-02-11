import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { ChevronRight, CheckCircle, Coffee, TrendingUp, Zap } from "lucide-react";

export default function Dental() {
    const IMAGES = {
        logo: "/images/mini-logo.jpg",
        hero: "/images/dental/hero_v2.png",
        type1: "/images/dental/general_v2.png",
        type2: "/images/dental/lab_v2.png",
        type3: "/images/dental/surgery_v2.png",
        product: "/images/ミニ斜め背景カット.png"
    };

    const TARGET_LP_URL = "https://v0-air-future-mini-design.vercel.app/";
    const TARGET_APPLY_URL = "https://x-autoup.vercel.app/apply.html";

    const handleCTAClick = (pid = 'dental_hero') => {
        const trackingUrl = `/api/log_click?pid=${pid}&lp=dental`;
        if (navigator.sendBeacon) {
            navigator.sendBeacon(trackingUrl);
        } else {
            fetch(trackingUrl, { mode: 'no-cors' });
        }
        window.location.href = `${TARGET_LP_URL}?utm_source=dental&lp=dental&pid=${pid}`;
    };

    const trackBuy = (pid) => {
        const trackingUrl = `/api/log_click?pid=${pid}&lp=dental`;
        if (navigator.sendBeacon) {
            navigator.sendBeacon(trackingUrl);
        } else {
            fetch(trackingUrl, { mode: 'no-cors' });
        }
        window.location.href = `${TARGET_APPLY_URL}?lp=dental&pid=${pid}&utm_source=dental`;
    };

    return (
        <main className="min-h-screen bg-white text-gray-900 overflow-x-hidden font-sans">
            <style>{`
                @keyframes fade-in-up {
                    from { opacity: 0; transform: translateY(20px); filter: blur(10px); }
                    to { opacity: 1; transform: translateY(0); filter: blur(0); }
                }
                .animate-fade-blur {
                    animation: fade-in-up 1s ease-out forwards;
                }
            `}</style>

            <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <img src={IMAGES.logo} alt="AirFuture mini" className="h-8 md:h-10 object-contain" />
                    <Button onClick={() => handleCTAClick('header_nav')} className="text-xs md:text-sm font-bold text-gray-600 hover:text-blue-600 transition-colors">
                        製品詳細 <ChevronRight className="w-3 h-3 ml-1" />
                    </Button>
                </div>
            </header>

            <div className="fixed bottom-6 right-6 z-50 animate-bounce shadow-xl rounded-full">
                <Button onClick={() => handleCTAClick('floating_cta')} className="bg-blue-600 text-white px-6 py-3 text-sm md:text-base rounded-full shadow-lg hover:bg-blue-700 font-bold">
                    詳細を見る <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
            </div>

            <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-white overflow-hidden pt-20">
                <div className="container mx-auto px-4 z-10 relative text-center animate-fade-blur">
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-600 text-white text-[10px] md:text-xs font-black mb-4 uppercase tracking-[0.2em]">
                        FOR DENTAL PROFESSIONAL
                    </span>
                    <h1 className="text-4xl md:text-7xl font-bold mb-6 text-slate-900 leading-tight">
                        院内環境は、<br />医院の<span className="text-blue-600">「信用力」</span>を決める。
                    </h1>
                    <p className="text-base md:text-2xl text-slate-600 font-medium mb-10 max-w-3xl mx-auto">
                        快適性・安全性・信頼性。<br />すべては、空気から始まります。
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
                        <Button onClick={() => handleCTAClick('hero_detail')} className="w-full md:w-auto bg-white text-slate-900 border-2 border-slate-900 px-8 py-4 text-lg rounded-full shadow-sm hover:bg-slate-50 transition-all font-bold">
                            AirFuture mini の詳細を見る
                        </Button>
                        <Button onClick={() => trackBuy('hero_order')} className="w-full md:w-auto bg-blue-600 text-white hover:bg-blue-700 px-8 py-4 text-lg rounded-full shadow-lg transition-all font-bold">
                            今すぐ導入を検討する
                        </Button>
                    </div>
                    <div className="max-w-5xl mx-auto relative group">
                        <img src={IMAGES.hero} alt="AirFuture mini in Dental Clinic" className="relative z-10 w-full rounded-3xl shadow-2xl border border-white" />
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-16 underline decoration-blue-500 decoration-4 underline-offset-8">
                        診療スタイルで選ぶ対策
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
                        <div className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all group">
                            <div className="h-48 bg-slate-200 overflow-hidden"><img src={IMAGES.type1} alt="General" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /></div>
                            <div className="p-8">
                                <div className="bg-blue-600 text-white text-[10px] font-bold py-1 px-3 rounded-full w-fit mb-4">TYPE 01</div>
                                <h3 className="text-xl font-bold mb-4 text-slate-900 md:h-14">一般診療中心<br />（快適性・印象改善）</h3>
                                <p className="text-sm text-slate-600 mb-6">独特の薬品臭を「ハガキサイズ」で強力分解。患者様がリラックスできるクリーンな空間を実現。</p>
                                <Button onClick={() => handleCTAClick('type1_more')} className="w-full bg-white border border-slate-200 py-3 rounded-xl font-bold text-sm hover:bg-slate-100">詳しく見る</Button>
                            </div>
                        </div>
                        <div className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all group">
                            <div className="h-48 bg-slate-200 overflow-hidden"><img src={IMAGES.type2} alt="Lab" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /></div>
                            <div className="p-8">
                                <div className="bg-emerald-600 text-white text-[10px] font-bold py-1 px-3 rounded-full w-fit mb-4">TYPE 02</div>
                                <h3 className="text-xl font-bold mb-4 text-slate-900 md:h-14">技工室・3Dプリンタあり<br />（有害物質・効率改善）</h3>
                                <p className="text-sm text-slate-600 mb-6">レジン臭やVOCなどの有害物質を分子レベルで分解。スタッフの健康を守り、作業効率アップに貢献。</p>
                                <Button onClick={() => handleCTAClick('type2_more')} className="w-full bg-white border border-slate-200 py-3 rounded-xl font-bold text-sm hover:bg-slate-100">詳しく見る</Button>
                            </div>
                        </div>
                        <div className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all group">
                            <div className="h-48 bg-slate-200 overflow-hidden"><img src={IMAGES.type3} alt="Surgery" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /></div>
                            <div className="p-8">
                                <div className="bg-rose-600 text-white text-[10px] font-bold py-1 px-3 rounded-full w-fit mb-4">TYPE 03</div>
                                <h3 className="text-xl font-bold mb-4 text-slate-900 md:h-14">外科・インプラント対応<br />（無菌環境・リスク対策）</h3>
                                <p className="text-sm text-slate-600 mb-6">高濃度イオンクラスターが飛沫核を即座に不活化。手術室レベルの清浄度をユニット周辺に構築。</p>
                                <Button onClick={() => handleCTAClick('type3_more')} className="w-full bg-white border border-slate-200 py-3 rounded-xl font-bold text-sm hover:bg-slate-100">詳しく見る</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-slate-900 text-white">
                <div className="container mx-auto px-4 max-w-5xl text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-12">「空気への投資」は、最短で回収できる。</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div><Coffee className="text-blue-400 w-12 h-12 mx-auto mb-4" /><p className="text-xl font-bold">Coffee 1 Cup</p><p className="text-sm text-slate-400">1日あたりのコストは<br />コーヒー1杯分以下。</p></div>
                        <div><TrendingUp className="text-blue-400 w-12 h-12 mx-auto mb-4" /><p className="text-xl font-bold">Recall Rate</p><p className="text-sm text-slate-400">不快臭の消失により、<br />再診率が改善。</p></div>
                        <div><Zap className="text-blue-400 w-12 h-12 mx-auto mb-4" /><p className="text-xl font-bold">No Space</p><p className="text-sm text-slate-400">ハガキサイズなので、<br />ユニット配置も自由自在。</p></div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">FAQ</h2>
                    <div className="space-y-8">
                        <div><p className="font-bold mb-2">Q1：一般的な空気清浄機との違いは何ですか？</p><p className="text-slate-600 text-sm">従来の清浄機は「待ち」ですが、AirFuture miniは「攻めの空気中分解」方式です。</p></div>
                        <div><p className="font-bold mb-2">Q2：レジンの臭いにも対応していますか？</p><p className="text-slate-600 text-sm">はい。VOCを分子レベルで分解し、無臭化します。</p></div>
                        <div><p className="font-bold mb-2">Q3：効果への不安</p><p className="text-slate-600 text-sm">世界各国の実績と多くの歯科医院様で実証されています。</p></div>
                        <div><p className="font-bold mb-2">Q4：多用途使用</p><p className="text-slate-600 text-sm">待合室やスタッフルームでもお使いいただけます。</p></div>
                    </div>
                </div>
            </section>

            <section className="py-20 md:py-32 bg-slate-900 text-center relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <h2 className="text-3xl md:text-6xl font-bold text-white mb-12">その一室を、<br />最高レベルの衛生空間へ。</h2>
                    <div className="flex flex-col md:flex-row gap-6 justify-center">
                        <Button onClick={() => handleCTAClick('footer_all')} className="bg-white text-slate-900 px-10 py-5 text-xl rounded-full font-black shadow-xl">全性能を見る</Button>
                        <Button onClick={() => trackBuy('footer_buy')} className="bg-blue-600 text-white px-10 py-5 text-xl rounded-full font-black shadow-2xl">購入・見積もりを依頼する</Button>
                    </div>
                </div>
            </section>

            <footer className="py-12 bg-black text-slate-600 text-center"><p className="text-xs">© 2026 AirFuture. All Rights Reserved.</p></footer>
        </main>
    );
}
