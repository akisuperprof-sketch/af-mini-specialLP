import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Button from '../components/Button';
import { ChevronRight, Wind, Shield, CheckCircle, XCircle, AlertTriangle, Smile, Activity, Users } from "lucide-react";

export default function Dental() {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

    const handleCTAClick = () => {
        try {
            fetch('/api/log_click?pid=dental_hero&lp=dental', { mode: 'no-cors' });
        } catch (e) { console.error('Tracking failed', e); }
        window.location.href = "/?utm_source=dental&lp=dental";
    };

    const trackBuy = (position) => {
        try {
            fetch(`/api/log_click?pid=dental_buy_${position}&lp=dental`, { mode: 'no-cors' });
        } catch (e) {
            console.error('Tracking failed', e);
        }
        window.location.href = `/apply?lp=dental&pid=dental_buy_${position}&utm_source=dental`;
    };

    return (
        <main className="min-h-screen bg-white text-gray-900 overflow-x-hidden font-sans">
            <style>{`
                @keyframes float-clean {
                    0% { transform: translate(0, 0); opacity: 0.3; }
                    50% { transform: translate(10px, -10px); opacity: 0.5; }
                    100% { transform: translate(-5px, 5px); opacity: 0.3; }
                }
                .clean-particle {
                    position: absolute;
                    width: 4px;
                    height: 4px;
                    background: #60a5fa;
                    border-radius: 50%;
                    filter: blur(1px);
                    pointer-events: none;
                }
            `}</style>

            {/* Floating CTA */}
            <div className="fixed bottom-6 right-6 z-50 animate-bounce shadow-xl rounded-full">
                <Button onClick={handleCTAClick} className="bg-white/90 backdrop-blur-sm text-blue-600 px-6 py-3 text-sm md:text-base rounded-full border border-blue-100 shadow-lg hover:bg-white font-bold">
                    AirFuture mini の詳細を見る
                    <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
            </div>

            {/* Hero Section */}
            <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-white overflow-hidden py-10 md:py-0">
                {/* Floating Clean Particles */}
                {[...Array(15)].map((_, i) => (
                    <div key={i} className="clean-particle" style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animation: `float-clean ${4 + Math.random() * 6}s infinite linear`
                    }}></div>
                ))}

                <div className="container mx-auto px-4 z-10 relative text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-6 md:mb-8"
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-blue-600 text-white text-[10px] md:text-xs font-black mb-4 uppercase tracking-[0.2em] shadow-sm">
                            FOR DENTAL PROFESSIONAL
                        </span>
                        <h1 className="text-3xl md:text-7xl font-bold mb-4 md:mb-6 text-slate-900 tracking-tight leading-tight md:leading-none">
                            信頼を、<br />
                            <span className="text-blue-600">空気</span>からデザインする。
                        </h1>
                        <p className="text-base md:text-2xl text-slate-600 font-medium mb-6 md:mb-8 max-w-3xl mx-auto">
                            ハガキサイズの革新。歯科医院特有の「課題」を、<br className="hidden md:block" />
                            高濃度イオンクラスターが解決します。
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 1 }}
                        className="mb-8 md:mb-12 max-w-5xl mx-auto"
                    >
                        <img
                            src="/images/dental/hero.png"
                            alt="AirFuture mini in Dental Clinic"
                            className="w-full rounded-3xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)] border border-white"
                        />
                    </motion.div>

                    <div className="flex flex-col md:flex-row gap-4 justify-center px-4 md:px-0">
                        <Button onClick={handleCTAClick} className="w-full md:w-auto bg-white text-slate-900 border border-slate-200 px-6 py-3 md:px-8 md:py-4 text-base md:text-lg rounded-full shadow-sm hover:shadow-md transition-all font-bold">
                            歯科導入のメリットを見る
                            <ChevronRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                        </Button>
                        <Button onClick={() => trackBuy('hero')} className="w-full md:w-auto bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 md:px-8 md:py-4 text-base md:text-lg rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center font-bold">
                            今すぐ導入を検討する
                            <ChevronRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                        </Button>
                    </div>
                </div>
            </section>

            {/* Problem Section (Aerosol) */}
            <section className="py-16 md:py-24 bg-slate-50 relative overflow-hidden">
                <div className="container mx-auto px-6 md:px-4">
                    <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 max-w-6xl mx-auto">
                        <div className="w-full md:w-1/2 order-1">
                            <img
                                src="/images/dental/problem.png"
                                alt="Dental Aerosol Problem"
                                className="w-full rounded-2xl shadow-2xl"
                            />
                        </div>
                        <div className="w-full md:w-1/2 order-2">
                            <h2 className="text-2xl md:text-5xl font-bold mb-4 md:mb-8 leading-tight text-slate-900">
                                目に見えない<br />
                                <span className="text-red-500">「飛沫・エアロゾル」</span>の脅威
                            </h2>
                            <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-6">
                                タービンやスケーラーの使用時に発生する大量の飛沫。これらは目に見えない微細なエアロゾルとして室内を長時間漂い続けます。<br /><br />
                                バキュームだけでは防ぎきれない、ユニット周りの衛生管理。それは患者様だけでなく、働くスタッフの皆様を守るためにも極めて重要です。
                            </p>
                            <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-200">
                                <AlertTriangle className="text-red-500 w-8 h-8 shrink-0" />
                                <p className="text-xs md:text-sm text-slate-500 font-medium">
                                    口腔内の付着菌を含むエアロゾルは、数分間空気中に滞留することが報告されています。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Solution Section (Ion Cluster) */}
            <section className="py-16 md:py-24 bg-white relative">
                <div className="container mx-auto px-6 md:px-4">
                    <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 max-w-6xl mx-auto">
                        <div className="w-full md:w-1/2 order-2 md:order-1">
                            <span className="text-blue-600 font-black text-xs uppercase tracking-widest mb-4 block">ACTIVE STERILIZATION</span>
                            <h2 className="text-3xl md:text-6xl font-bold mb-6 md:mb-8 leading-tight text-slate-900">
                                攻めの<br />
                                <span className="text-blue-600">「除菌シールド」</span>
                            </h2>
                            <p className="text-base md:text-xl text-slate-600 mb-8 md:mb-10 leading-relaxed">
                                吸い込むのを待つ従来の清浄機とは一線を画します。<br />
                                AirFuture mini は、高濃度のイオンクラスターをユニット周辺に放出。空気中の飛沫核や付着菌をその場で不活化し、クリーンな施術空間を維持します。
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start gap-4 p-4 rounded-xl bg-blue-50 border border-blue-100">
                                    <Shield className="text-blue-600 w-6 h-6 mt-1" />
                                    <div>
                                        <p className="font-bold text-slate-900">10畳対応のパワフル性能</p>
                                        <p className="text-xs text-slate-500">診療室全体をカバーする高い清浄能力。</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 p-4 rounded-xl bg-blue-50 border border-blue-100">
                                    <CheckCircle className="text-blue-600 w-6 h-6 mt-1" />
                                    <div>
                                        <p className="font-bold text-slate-900">圧倒的な脱臭力</p>
                                        <p className="text-xs text-slate-500">歯科特有の薬品臭も強力に分解。快適な診療環境へ。</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 order-1 md:order-2">
                            <img
                                src="/images/dental/solution.png"
                                alt="Ion Shield Solution"
                                className="w-full rounded-2xl shadow-2xl border border-blue-100"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Waiting Room Section */}
            <section className="py-16 md:py-24 bg-slate-900 text-white">
                <div className="container mx-auto px-6 md:px-4">
                    <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 max-w-6xl mx-auto">
                        <div className="w-full md:w-1/2">
                            <img
                                src="/images/dental/waiting_room.png"
                                alt="Dental Waiting Room"
                                className="w-full rounded-2xl shadow-2xl opacity-90"
                            />
                        </div>
                        <div className="w-full md:w-1/2">
                            <h2 className="text-2xl md:text-5xl font-bold mb-6 md:mb-8 text-white">
                                患者様の「安心」を<br />見える化する
                            </h2>
                            <p className="text-base md:text-lg text-slate-400 mb-8 leading-relaxed">
                                待合室は、初めて来院された患者様が最初に「安心」を感じる場所です。<br /><br />
                                AirFuture mini の洗練されたデザインは、高い技術力を備えた医院であることを印象づけ、青いイオンの光は「清浄な空間」であることを視覚的に伝えます。
                            </p>
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <p className="text-2xl md:text-3xl font-black text-blue-400">750g</p>
                                    <p className="text-[10px] text-slate-500 uppercase font-bold mt-1">Lightweight</p>
                                    <p className="text-xs mt-2">受付や棚に置ける軽量設計</p>
                                </div>
                                <div>
                                    <p className="text-2xl md:text-3xl font-black text-blue-400">Silent</p>
                                    <p className="text-[10px] text-slate-500 uppercase font-bold mt-1">Quiet Operation</p>
                                    <p className="text-xs mt-2">診察を妨げない静音性</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technical Detail Section */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-2xl md:text-5xl font-bold mb-10 md:mb-16">
                        歯科医院のための、<br className="md:hidden" />究極のスペック
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 max-w-5xl mx-auto">
                        <div className="p-8 bg-slate-50 rounded-2xl">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                                <Activity className="text-blue-600" />
                            </div>
                            <h4 className="font-bold text-lg mb-4">AIO-2素子搭載</h4>
                            <p className="text-sm text-slate-500">世界最先端のイオンクラスター技術。フィルターでは不可能な極小粒子にもアプローチ。</p>
                        </div>
                        <div className="p-8 bg-slate-50 rounded-2xl">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                                <Users className="text-blue-600" />
                            </div>
                            <h4 className="font-bold text-lg mb-4">信頼の実績</h4>
                            <p className="text-sm text-slate-500">医療機関や公共施設など、高い衛生基準が求められる現場で選ばれています。</p>
                        </div>
                        <div className="p-8 bg-slate-50 rounded-2xl">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                                <CheckCircle className="text-blue-600" />
                            </div>
                            <h4 className="font-bold text-lg mb-4">メンテフリー</h4>
                            <p className="text-sm text-slate-500">忙しい診療の合間に手間はかけさせません。素子の定期交換のみで性能を維持。</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Footer Section */}
            <section className="py-20 md:py-32 bg-slate-900 relative overflow-hidden text-center">
                <div className="container mx-auto px-6 relative z-10">
                    <h2 className="text-3xl md:text-6xl font-bold text-white mb-8 md:mb-12 tracking-tight">
                        その一室を、<br />
                        最高レベルの衛生空間へ。
                    </h2>
                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center">
                        <Button onClick={handleCTAClick} className="w-full md:w-auto bg-white text-slate-900 hover:bg-slate-100 px-10 py-5 text-lg md:text-xl rounded-full transition-all font-black">
                            製品詳細・導入実績を見る
                        </Button>
                        <Button onClick={() => trackBuy('footer')} className="w-full md:w-auto bg-blue-600 text-white hover:bg-blue-500 px-10 py-5 text-lg md:text-xl rounded-full transition-all font-black shadow-[0_20px_40px_-10px_rgba(37,99,235,0.4)]">
                            導入・見積もりを依頼する
                        </Button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 bg-black text-slate-600 text-center">
                <div className="container mx-auto px-4">
                    <div className="flex justify-center items-center gap-2 mb-6">
                        <div className="w-6 h-6 rounded-full border border-slate-800"></div>
                        <span className="text-sm font-bold uppercase tracking-widest">AirFuture mini</span>
                    </div>
                    <p className="text-xs">© 2026 AirFuture. All Rights Reserved.</p>
                </div>
            </footer>
        </main>
    );
}
