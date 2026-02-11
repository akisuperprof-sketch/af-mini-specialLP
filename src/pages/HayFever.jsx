import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Button from '../components/Button';
import { ChevronRight, Wind, Shield, CheckCircle, XCircle, AlertTriangle, Smile } from "lucide-react";

export default function HayFever() {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

    const handleCTAClick = () => {
        try {
            fetch('/api/log_click?pid=hayfever_hero&lp=hayfever', { mode: 'no-cors' });
        } catch (e) { console.error('Tracking failed', e); }
        window.location.href = "/?utm_source=hayfever&lp=hayfever";
    };

    const trackBuy = (position) => {
        try {
            fetch(`/api/log_click?pid=hayfever_buy_${position}&lp=hayfever`, { mode: 'no-cors' });
        } catch (e) {
            console.error('Tracking failed', e);
        }
        window.location.href = `/apply?lp=hayfever&pid=hayfever_buy_${position}&utm_source=hayfever`;
    };

    return (
        <main className="min-h-screen bg-white text-gray-900 overflow-x-hidden font-sans">
            <style>{`
                @keyframes float-pollen {
                    0% { transform: translate(0, 0) rotate(0deg); opacity: 0.6; }
                    50% { transform: translate(20px, -20px) rotate(180deg); opacity: 0.8; }
                    100% { transform: translate(-10px, 40px) rotate(360deg); opacity: 0.6; }
                }
                .pollen-particle {
                    position: absolute;
                    width: 8px;
                    height: 8px;
                    background: #f59e0b;
                    border-radius: 50%;
                    filter: blur(1px);
                    pointer-events: none;
                }
            `}</style>

            {/* Floating CTA */}
            <div className="fixed bottom-6 right-6 z-50 animate-bounce shadow-xl rounded-full">
                <Button onClick={handleCTAClick} className="bg-white/90 backdrop-blur-sm text-gray-900 px-6 py-3 text-sm md:text-base rounded-full border border-gray-100 shadow-lg hover:bg-white">
                    AirFuture mini の詳細を見る
                    <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
            </div>

            {/* Hero Section */}
            <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-yellow-50 to-white overflow-hidden py-10 md:py-0">
                {/* Floating Pollen Effect */}
                {[...Array(20)].map((_, i) => (
                    <div key={i} className="pollen-particle" style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animation: `float-pollen ${3 + Math.random() * 5}s infinite linear`
                    }}></div>
                ))}

                <div className="container mx-auto px-4 z-10 relative text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-6 md:mb-8"
                    >
                        <h1 className="text-3xl md:text-7xl font-bold mb-4 md:mb-6 text-gray-900 tracking-tight leading-tight md:leading-none">
                            家に帰っても、<br />
                            <span className="text-yellow-600">つらい春</span>へ。
                        </h1>
                        <p className="text-base md:text-2xl text-gray-700 font-medium mb-6 md:mb-8">
                            それ、本当に対策できていますか？
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="mb-8 md:mb-12 max-w-4xl mx-auto"
                    >
                        <img
                            src="/images/hayfever/gross_pollen.png"
                            alt="Microscopic Pollen"
                            className="w-full h-48 md:h-80 object-cover rounded-3xl shadow-2xl opacity-90 hover:scale-105 transition-transform duration-700"
                        />
                        <p className="mt-2 md:mt-4 text-xs text-gray-400">※花粉の電子顕微鏡イメージ</p>
                    </motion.div>

                    <div className="flex flex-col md:flex-row gap-4 justify-center px-4 md:px-0">
                        <Button onClick={handleCTAClick} className="w-full md:w-auto bg-white text-gray-900 border border-gray-200 px-6 py-3 md:px-8 md:py-4 text-base md:text-lg rounded-full shadow-sm hover:shadow-md transition-all">
                            AirFuture mini の詳細を見る
                            <ChevronRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                        </Button>
                        <Button onClick={() => trackBuy('hero')} className="w-full md:w-auto bg-black text-white hover:bg-gray-800 px-6 py-3 md:px-8 md:py-4 text-base md:text-lg rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center">
                            今すぐ購入する
                            <ChevronRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                        </Button>
                    </div>
                </div>
            </section>

            {/* Problem Section (Re-diffusion) */}
            <section className="py-12 md:py-24 bg-white relative">
                <div className="container mx-auto px-6 md:px-4">
                    <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 max-w-6xl mx-auto">
                        <div className="w-full md:w-1/2 order-2 md:order-1">
                            <h2 className="text-2xl md:text-5xl font-bold mb-4 md:mb-8 leading-tight text-gray-900">
                                実は恐ろしい、<br />
                                <span className="text-red-500">「室内再拡散」</span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6">
                                外から持ち込まれた花粉は、床や家具、カーペットに付着します。<br />
                                人が動くたび、ドアを開けるたび、それらは再び舞い上がり、あなたを苦しめます。
                            </p>
                            <div className="p-5 md:p-6 bg-red-50 rounded-xl border border-red-100">
                                <AlertTriangle className="text-red-500 w-6 h-6 md:w-8 md:h-8 mb-2 md:mb-4" />
                                <p className="font-bold text-red-700 text-sm md:text-base">一般的な空気清浄機の弱点</p>
                                <p className="text-red-600 text-xs md:text-sm mt-2">
                                    吸い込むのを待っている間にも、花粉は室内を漂い続けています。
                                </p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 order-1 md:order-2">
                            <img
                                src="/images/hayfever/problem.png"
                                alt="室内の花粉再拡散イメージ"
                                className="w-full rounded-2xl shadow-xl hover:translate-y-[-10px] transition-transform duration-500"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Solution Section (Shield) */}
            <section className="py-12 md:py-24 bg-gray-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/hayfever/shield_mini.png"
                        alt="Ion Shield Protection"
                        className="w-full h-full object-cover opacity-40 mix-blend-screen"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent"></div>
                </div>

                <div className="container mx-auto px-6 md:px-4 relative z-10">
                    <div className="max-w-xl">
                        <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 text-blue-300 text-[10px] md:text-xs font-bold mb-4 md:mb-6 border border-blue-500/30">
                            AIO-2 ION CLUSTER TECHNOLOGY
                        </span>
                        <h2 className="text-3xl md:text-6xl font-bold mb-6 md:mb-8 leading-tight">
                            「吸う」から<br />
                            <span className="text-blue-400">「分解・除去」</span>へ。
                        </h2>
                        <p className="text-base md:text-xl text-gray-300 mb-8 md:mb-12 leading-relaxed">
                            AirFuture mini は、待ち伏せしません。<br />
                            高濃度イオンを部屋中に放出し、<br />
                            花粉のタンパク質を直接分解・不活化。<br />
                            これからの時代の「攻め」の空気清浄です。
                        </p>

                        <div className="grid grid-cols-2 gap-4 md:gap-6">
                            <div className="bg-white/10 backdrop-blur p-4 rounded-xl border border-white/10 text-center">
                                <Shield className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-2 text-blue-400" />
                                <p className="font-bold text-sm md:text-base">シールド効果</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur p-4 rounded-xl border border-white/10 text-center">
                                <XCircle className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-2 text-blue-400" />
                                <p className="font-bold text-sm md:text-base">付着菌も除去</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Showcase Section */}
            <section className="py-12 md:py-24 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-2xl md:text-5xl font-bold mb-10 md:mb-16 text-gray-900">
                        このサイズに、<br />革命的な清浄力を。
                    </h2>

                    <div className="max-w-4xl mx-auto relative group px-4 md:px-0">
                        <div className="absolute inset-0 bg-blue-100 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
                        <img
                            src="/images/hero-flyer.png"
                            alt="AirFuture Mini Product"
                            className="relative z-10 w-full rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-700"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16 max-w-5xl mx-auto px-4 md:px-0">
                        <div className="p-6 md:p-8 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300">
                            <h3 className="text-lg md:text-xl font-bold mb-2">超小型・軽量</h3>
                            <p className="text-sm md:text-base text-gray-600">わずか750g。デスクや枕元、どこでも置けるハガキサイズ。</p>
                        </div>
                        <div className="p-6 md:p-8 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300">
                            <h3 className="text-lg md:text-xl font-bold mb-2">フィルター交換不要</h3>
                            <p className="text-sm md:text-base text-gray-600">面倒な掃除や交換コストはゼロ。ずっと清潔に使えます。</p>
                        </div>
                        <div className="p-6 md:p-8 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300">
                            <h3 className="text-lg md:text-xl font-bold mb-2">静音設計</h3>
                            <p className="text-sm md:text-base text-gray-600">眠りを妨げない静けさで、24時間あなたを守り続けます。</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Integration Section */}
            <section className="py-16 md:py-24 bg-gray-900 text-white text-center">
                <div className="container mx-auto px-6 md:px-4">
                    <h2 className="text-2xl md:text-5xl font-light mb-8 md:mb-12">
                        この春は、<br />
                        家の空気で深呼吸。
                    </h2>
                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center">
                        <Button onClick={handleCTAClick} className="w-full md:w-auto bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 md:px-10 md:py-5 text-lg md:text-xl rounded-full transition-colors">
                            AirFuture mini の全性能を見る
                        </Button>
                        <Button onClick={() => trackBuy('footer')} className="w-full md:w-auto bg-blue-600 text-white hover:bg-blue-500 px-8 py-4 md:px-10 md:py-5 text-lg md:text-xl rounded-full transition-colors">
                            公式ページで購入する
                        </Button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 bg-black text-gray-500 text-center border-t border-gray-800">
                <div className="container mx-auto px-4">
                    <p className="text-sm">© 2026 AirFuture. All Rights Reserved.</p>
                </div>
            </footer>
        </main>
    );
}
