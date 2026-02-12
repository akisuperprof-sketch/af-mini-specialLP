import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { ChevronRight, Wind, Shield, CheckCircle, XCircle } from "lucide-react";

export default function HayFever() {
    const IMAGES = {
        logo: "/images/mini-logo.jpg",
        hero: "/images/hayfever/hero_v2.png",
        problem: "/images/hayfever/problem_v2.png",
        solution: "/images/hayfever/solution_v2.png",
        lifestyle: "/images/hayfever/lifestyle_v2.png",
        product: "/images/ミニ斜め背景カット.png"
    };

    const TARGET_LP_URL = "https://v0-air-future-mini-design.vercel.app/";
    const TARGET_APPLY_URL = "https://airfuture.vercel.app/apply";

    const handleCTAClick = (pid = 'hayfever_hero') => {
        const trackingUrl = `/api/log_click?pid=${pid}&lp=hayfever`;
        if (navigator.sendBeacon) {
            navigator.sendBeacon(trackingUrl);
        } else {
            fetch(trackingUrl, { mode: 'no-cors' });
        }
        window.location.href = `${TARGET_LP_URL}?utm_source=hayfever&lp=hayfever&pid=${pid}`;
    };

    const trackBuy = (pid) => {
        const trackingUrl = `/api/log_click?pid=${pid}&lp=hayfever`;
        if (navigator.sendBeacon) {
            navigator.sendBeacon(trackingUrl);
        } else {
            fetch(trackingUrl, { mode: 'no-cors' });
        }
        window.location.href = `${TARGET_APPLY_URL}?lp=hayfever&pid=${pid}&utm_source=hayfever`;
    };

    return (
        <main className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
            <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <img src={IMAGES.logo} alt="AirFuture mini" className="h-8 md:h-10 object-contain" />
                    <Button onClick={() => handleCTAClick('header_nav')} className="text-xs md:text-sm font-bold text-gray-600 hover:text-blue-600 transition-colors">
                        製品詳細 <ChevronRight className="w-3 h-3 ml-1" />
                    </Button>
                </div>
            </header>

            {/* Floating CTA */}
            <div className="floating-cta-container">
                <Button onClick={() => trackBuy('floating_cta')} className="clean-button px-6 py-3 text-sm md:text-base rounded-full border border-blue-200 bg-blue-600 text-white hover:bg-blue-700">
                    今すぐ購入する
                    <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
            </div>

            <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-white pt-20">
                <div className="container mx-auto px-4 z-10 relative text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-blue-600 text-white text-[10px] md:text-xs font-black mb-4 uppercase tracking-widest">
                            POLLEN DEFENSE SOLUTION
                        </span>
                        <h1 className="text-4xl md:text-8xl font-black mb-6 text-slate-900 leading-tight tracking-tighter">
                            花粉の季節を、<br />
                            <span className="text-blue-600">「最高の季節」</span>に変える。
                        </h1>
                        <p className="text-base md:text-2xl text-slate-600 font-medium mb-10 max-w-4xl mx-auto">
                            ハガキサイズの革新。高濃度イオンクラスターが、<br className="hidden md:block" />
                            室内の花粉を根本から不活化し、クリーンな生活空間を提供します。
                        </p>
                    </motion.div>

                    <div className="flex flex-col md:flex-row gap-4 justify-center mb-16">
                        <Button onClick={() => handleCTAClick('hero_detail')} className="w-full md:w-auto bg-white text-slate-900 border-2 border-slate-900 px-10 py-5 text-xl rounded-full font-black shadow-sm hover:bg-slate-50 transition-all">
                            AirFuture mini を詳しく見る
                        </Button>
                        <Button onClick={() => trackBuy('hero_order')} className="w-full md:w-auto bg-blue-600 text-white hover:bg-blue-700 px-10 py-5 text-xl rounded-full font-black shadow-lg transition-all">
                            今すぐ購入する
                        </Button>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 1 }}
                        className="max-w-6xl mx-auto relative group"
                    >
                        <img src={IMAGES.hero} alt="AirFuture mini Pollen Hero" className="relative z-10 w-full rounded-3xl shadow-2xl border border-white" />
                    </motion.div>
                </div>
            </section>

            <section className="py-24 bg-slate-50 overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center gap-16 max-w-6xl mx-auto text-left">
                        <div className="w-full md:w-1/2">
                            <h2 className="text-3xl md:text-6xl font-black mb-8 leading-tight">
                                なぜ、<br />
                                <span className="text-red-500">空気清浄機</span>だけでは<br />不十分なのか？
                            </h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                従来型のフィルター式は、浮遊している花粉を吸い込むのを待つだけです。<br /><br />
                                しかし、人の動きやドアの開閉で舞い上がる花粉、衣類に付着した花粉には対応できません。本当に対策すべきは、吸い込む前の「空気そのもの」の改質です。
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                                    <XCircle className="text-red-500 mb-2" />
                                    <p className="text-xs font-bold">付着花粉への<br />無力さ</p>
                                </div>
                                <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                                    <XCircle className="text-red-500 mb-2" />
                                    <p className="text-xs font-bold">舞い上がりへの<br />対応遅れ</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <img src={IMAGES.problem} alt="Air Purifier Limitation" className="w-full rounded-3xl shadow-2xl" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center gap-16 max-w-6xl mx-auto text-left">
                        <div className="w-full md:w-1/2 order-2 md:order-1">
                            <img src={IMAGES.solution} alt="Ion Cluster Solution" className="w-full rounded-3xl shadow-2xl border border-blue-50" />
                        </div>
                        <div className="w-full md:w-1/2 order-1 md:order-2">
                            <span className="text-blue-600 font-bold tracking-widest text-xs mb-4 block uppercase leading-none">The Ultimate Solution</span>
                            <h2 className="text-3xl md:text-6xl font-black mb-8 leading-tight">
                                攻めの<br />
                                <span className="text-blue-600">「イオンバリア」</span>
                            </h2>
                            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                                AirFuture mini から放出される毎秒3,000万個以上の高濃度イオン。これらが室内全体に広がり、花粉やダニの排泄物を分子レベルで攻撃・不活化します。<br /><br />
                                吸い込むのを待つのではなく、その場で無害化する。これが、最先端の衛生管理です。
                            </p>
                            <ul className="space-y-4 font-bold text-slate-800">
                                <li className="flex items-center"><CheckCircle className="text-blue-600 mr-3 shrink-0" /> 浮遊花粉を不活化</li>
                                <li className="flex items-center"><CheckCircle className="text-blue-600 mr-3 shrink-0" /> 衣類の付着菌、ニオイも徹底消臭</li>
                                <li className="flex items-center"><CheckCircle className="text-blue-600 mr-3 shrink-0" /> メンテナンスは2年に1度の素子交換のみ</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-slate-900 text-white text-center">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl md:text-6xl font-black mb-12">花粉に振り回される日は、<br />今日で終わり。</h2>
                    <div className="flex flex-col md:flex-row gap-6 justify-center">
                        <Button onClick={() => handleCTAClick('mid_detail')} className="bg-white text-slate-900 px-10 py-5 text-xl rounded-full font-black shadow-xl">全機能を見る</Button>
                        <Button onClick={() => trackBuy('mid_order')} className="bg-blue-600 text-white px-10 py-5 text-xl rounded-full font-black shadow-2xl">購入・見積依頼</Button>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white relative overflow-hidden">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="bg-slate-50 rounded-[40px] overflow-hidden flex flex-col md:flex-row items-stretch">
                        <div className="w-full md:w-1/2 p-12 md:p-20 flex flex-col justify-center text-left">
                            <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">
                                家族の健康を、<br />ハガキサイズが守る。
                            </h2>
                            <p className="text-lg text-slate-600 mb-12">
                                寝室、リビング、玄関。どこにでも置けるコンパクトさは、生活のあらゆるシーンに「最高の空気」を運びます。
                            </p>
                            <Button onClick={() => trackBuy('lifestyle_order')} className="w-fit bg-slate-900 text-white px-8 py-4 text-lg rounded-full font-bold shadow-lg">導入を検討する</Button>
                        </div>
                        <div className="w-full md:w-1/2">
                            <img src={IMAGES.lifestyle} alt="Family Lifestyle" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </section>

            <footer className="py-12 bg-black text-slate-600 text-center">
                <p className="text-xs">© 2026 AirFuture. All Rights Reserved.</p>
            </footer>
        </main>
    );
}
