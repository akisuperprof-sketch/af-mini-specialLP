import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { ChevronRight, CheckCircle, AlertTriangle, Heart, Shield, Home, Star } from "lucide-react";

export default function Pet() {
    const IMAGES = {
        logo: "/images/mini-logo.jpg",
        hero: "/images/pet/hero_v2.png",
        problem: "/images/pet/problem_v2.png",
        solution: "/images/pet/solution_v2.png",
        lifestyle: "/images/pet/lifestyle_v2.png",
        product: "/images/ミニ斜め背景カット.png"
    };

    const TARGET_LP_URL = "https://v0-air-future-mini-design.vercel.app/";
    const TARGET_APPLY_URL = "https://airfuture.vercel.app/apply";

    const handleCTAClick = (pid = 'pet_hero') => {
        const trackingUrl = `/api/log_click?pid=${pid}&lp=pet`;
        if (navigator.sendBeacon) {
            navigator.sendBeacon(trackingUrl);
        } else {
            fetch(trackingUrl, { mode: 'no-cors' });
        }
        window.location.href = `${TARGET_LP_URL}?utm_source=pet&lp=pet&pid=${pid}`;
    };

    const trackBuy = (pid) => {
        const trackingUrl = `/api/log_click?pid=${pid}&lp=pet`;
        if (navigator.sendBeacon) {
            navigator.sendBeacon(trackingUrl);
        } else {
            fetch(trackingUrl, { mode: 'no-cors' });
        }
        window.location.href = `${TARGET_APPLY_URL}?lp=pet&pid=${pid}&utm_source=pet`;
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
                    <Button onClick={() => handleCTAClick('header_nav')} className="text-xs md:text-sm font-bold text-gray-600 hover:text-emerald-600 transition-colors">
                        製品詳細 <ChevronRight className="w-3 h-3 ml-1" />
                    </Button>
                </div>
            </header>

            <div className="fixed bottom-6 right-6 z-50 animate-bounce shadow-xl rounded-full">
                <Button onClick={() => handleCTAClick('floating_cta')} className="bg-emerald-600 text-white px-6 py-3 text-sm md:text-base rounded-full shadow-lg hover:bg-emerald-700 font-bold">
                    詳細を見る <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
            </div>

            {/* Hero Section */}
            <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-emerald-50 to-white overflow-hidden pt-20">
                <div className="container mx-auto px-4 z-10 relative text-center animate-fade-blur">
                    <span className="inline-block py-1 px-3 rounded-full bg-emerald-600 text-white text-[10px] md:text-xs font-black mb-4 uppercase tracking-[0.2em]">
                        FOR PET LOVERS
                    </span>
                    <h1 className="text-4xl md:text-7xl font-bold mb-6 text-slate-900 leading-tight">
                        「慣れているのは、あなただけ。」<br />
                        <span className="text-emerald-600">来客は、すぐに気づいています。</span>
                    </h1>
                    <p className="text-base md:text-2xl text-slate-600 font-medium mb-10 max-w-3xl mx-auto">
                        ペット臭・トイレ臭・生活臭。<br />
                        家族の空間を、もっと安心できる場所へ。
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
                        <Button onClick={() => handleCTAClick('hero_detail')} className="w-full md:w-auto bg-white text-slate-900 border-2 border-slate-900 px-8 py-4 text-lg rounded-full shadow-sm hover:bg-slate-50 transition-all font-bold">
                            AirFuture mini の詳細を見る
                        </Button>
                        <Button onClick={() => trackBuy('hero_order')} className="w-full md:w-auto bg-emerald-600 text-white hover:bg-emerald-700 px-8 py-4 text-lg rounded-full shadow-lg transition-all font-bold">
                            今すぐ導入を検討する
                        </Button>
                    </div>
                    <div className="max-w-5xl mx-auto relative group">
                        <img src={IMAGES.hero} alt="AirFuture mini Pet Hero" className="relative z-10 w-full rounded-3xl shadow-2xl border border-white" />
                    </div>
                </div>
            </section>

            {/* 共感導入ゾーン */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-12 text-slate-900">こんな不安、ありませんか？</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-12">
                        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                            <AlertTriangle className="text-amber-500 mb-3" />
                            <p className="font-bold text-slate-900">来客前に必ず換気する</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                            <AlertTriangle className="text-amber-500 mb-3" />
                            <p className="font-bold text-slate-900">消臭スプレーが手放せない</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                            <AlertTriangle className="text-amber-500 mb-3" />
                            <p className="font-bold text-slate-900">自分では匂いがわからない</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                            <AlertTriangle className="text-amber-500 mb-3" />
                            <p className="font-bold text-slate-900">カーペットやソファが心配</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm col-span-1 md:col-span-2">
                            <AlertTriangle className="text-amber-500 mb-3" />
                            <p className="font-bold text-slate-900">トイレ臭が残る</p>
                        </div>
                    </div>
                    <div className="bg-amber-50 p-8 rounded-3xl border-2 border-amber-200">
                        <p className="text-lg font-bold text-amber-900 mb-2">ひとつでも当てはまれば、</p>
                        <p className="text-xl font-black text-amber-900">「嗅覚麻痺」が起きている可能性があります。</p>
                    </div>
                </div>
            </section>

            {/* 問題の本質ゾーン */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center gap-16 max-w-6xl mx-auto text-left">
                        <div className="w-full md:w-1/2">
                            <h2 className="text-3xl md:text-6xl font-black mb-8 leading-tight">
                                なぜ、消臭しても<br />
                                <span className="text-orange-500">臭いが戻るのか？</span>
                            </h2>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                多くの消臭対策は、
                            </p>
                            <ul className="text-lg text-slate-600 mb-6 space-y-2">
                                <li>• 匂いを隠す</li>
                                <li>• 別の香りでごまかす</li>
                            </ul>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                だけです。
                            </p>
                            <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                                しかし、
                            </p>
                            <ul className="text-lg text-slate-600 mb-6 space-y-2">
                                <li>• 床</li>
                                <li>• 布製品</li>
                                <li>• ケージ</li>
                                <li>• 壁紙</li>
                            </ul>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                に染み込んだ臭い成分は、<br />時間とともに再放出されます。
                            </p>
                            <div className="bg-slate-900 text-white p-6 rounded-2xl">
                                <p className="text-xl font-black">これが「何度も戻る臭い」の正体です。</p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <img src={IMAGES.problem} alt="Pet Odor Problem" className="w-full rounded-3xl shadow-2xl" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 解決ゾーン */}
            <section className="py-24 bg-emerald-50">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center gap-16 max-w-6xl mx-auto text-left">
                        <div className="w-full md:w-1/2 order-2 md:order-1">
                            <img src={IMAGES.solution} alt="Ion Cluster Solution" className="w-full rounded-3xl shadow-2xl border border-emerald-100" />
                        </div>
                        <div className="w-full md:w-1/2 order-1 md:order-2">
                            <span className="text-emerald-600 font-bold tracking-widest text-xs mb-4 block uppercase leading-none">The Ultimate Solution</span>
                            <h2 className="text-3xl md:text-6xl font-black mb-8 leading-tight">
                                隠さない。<br />
                                <span className="text-emerald-600">分解する。</span>
                            </h2>
                            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                                AirFuture miniは、
                            </p>
                            <ul className="space-y-4 font-bold text-slate-800 mb-10">
                                <li className="flex items-center"><CheckCircle className="text-emerald-600 mr-3 shrink-0" /> イオン放出</li>
                                <li className="flex items-center"><CheckCircle className="text-emerald-600 mr-3 shrink-0" /> 臭気分子分解</li>
                                <li className="flex items-center"><CheckCircle className="text-emerald-600 mr-3 shrink-0" /> 雑菌抑制</li>
                                <li className="flex items-center"><CheckCircle className="text-emerald-600 mr-3 shrink-0" /> 再発防止</li>
                            </ul>
                            <p className="text-lg text-slate-700 leading-relaxed">
                                により、<br />臭いの根本から対処します。
                            </p>
                            <div className="bg-emerald-600 text-white p-6 rounded-2xl mt-8">
                                <p className="text-xl font-black">芳香剤とは、仕組みが違います。</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 安心・安全ゾーン */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-5xl text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-12 text-slate-900">ペットにも、人にもやさしい空気</h2>
                    <p className="text-lg text-slate-600 mb-12 leading-relaxed max-w-3xl mx-auto">
                        強い薬剤や香料は使いません。
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                        <div className="bg-slate-50 p-6 rounded-2xl">
                            <Shield className="text-emerald-600 w-10 h-10 mx-auto mb-3" />
                            <p className="font-bold text-slate-900">犬</p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-2xl">
                            <Shield className="text-emerald-600 w-10 h-10 mx-auto mb-3" />
                            <p className="font-bold text-slate-900">猫</p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-2xl">
                            <Shield className="text-emerald-600 w-10 h-10 mx-auto mb-3" />
                            <p className="font-bold text-slate-900">小動物</p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-2xl">
                            <Shield className="text-emerald-600 w-10 h-10 mx-auto mb-3" />
                            <p className="font-bold text-slate-900">子ども</p>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-2xl">
                            <Shield className="text-emerald-600 w-10 h-10 mx-auto mb-3" />
                            <p className="font-bold text-slate-900">高齢者</p>
                        </div>
                    </div>
                    <p className="text-lg text-slate-600 mt-12 leading-relaxed">
                        がいる家庭でも、<br />安心して使用できます。
                    </p>
                </div>
            </section>

            {/* 生活品質ゾーン */}
            <section className="py-20 bg-emerald-900 text-white">
                <div className="container mx-auto px-4 max-w-5xl text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-12">家の印象が、変わる</h2>
                    <p className="text-lg text-emerald-100 mb-12 leading-relaxed">
                        空気が変わると、
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                        <div className="bg-emerald-800/50 p-8 rounded-2xl text-left">
                            <Heart className="text-emerald-300 w-10 h-10 mb-4" />
                            <p className="text-xl font-bold mb-2">来客への不安が消える</p>
                            <p className="text-sm text-emerald-200">いつでも安心して人を招ける</p>
                        </div>
                        <div className="bg-emerald-800/50 p-8 rounded-2xl text-left">
                            <CheckCircle className="text-emerald-300 w-10 h-10 mb-4" />
                            <p className="text-xl font-bold mb-2">掃除のストレスが減る</p>
                            <p className="text-sm text-emerald-200">臭い対策に追われない日々</p>
                        </div>
                        <div className="bg-emerald-800/50 p-8 rounded-2xl text-left">
                            <Shield className="text-emerald-300 w-10 h-10 mb-4" />
                            <p className="text-xl font-bold mb-2">リラックスできる</p>
                            <p className="text-sm text-emerald-200">心地よい空間で過ごせる</p>
                        </div>
                        <div className="bg-emerald-800/50 p-8 rounded-2xl text-left">
                            <Home className="text-emerald-300 w-10 h-10 mb-4" />
                            <p className="text-xl font-bold mb-2">家に自信が持てる</p>
                            <p className="text-sm text-emerald-200">住環境そのものが向上</p>
                        </div>
                    </div>
                    <p className="text-lg text-emerald-100 mt-12 leading-relaxed font-bold">
                        住環境そのものが変わります。
                    </p>
                </div>
            </section>

            {/* ホテル品質ゾーン */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="bg-slate-900 text-white rounded-[40px] overflow-hidden flex flex-col md:flex-row items-stretch">
                        <div className="w-full md:w-1/2 p-12 md:p-20 flex flex-col justify-center text-left">
                            <Star className="text-yellow-400 w-12 h-12 mb-6" />
                            <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">
                                理想は<br />「ホテルのような<br />管理空間」
                            </h2>
                            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                                無臭で、清潔で、快適。
                            </p>
                            <p className="text-xl text-white font-bold">
                                AirFuture miniは、<br />家庭を「管理された空間」に変えます。
                            </p>
                        </div>
                        <div className="w-full md:w-1/2">
                            <img src={IMAGES.lifestyle} alt="Pet Lifestyle" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 統合CTA */}
            <section className="py-20 md:py-32 bg-slate-900 text-center relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <h2 className="text-3xl md:text-6xl font-bold text-white mb-12">ペットとの暮らしを、<br />もっと自信を持って。</h2>
                    <div className="flex flex-col md:flex-row gap-6 justify-center">
                        <Button onClick={() => handleCTAClick('footer_all')} className="bg-white text-slate-900 px-10 py-5 text-xl rounded-full font-black shadow-xl">AirFuture mini の全性能を見る</Button>
                        <Button onClick={() => trackBuy('footer_buy')} className="bg-emerald-600 text-white px-10 py-5 text-xl rounded-full font-black shadow-2xl">公式ページで購入する</Button>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">FAQ</h2>
                    <div className="space-y-8">
                        <div className="bg-slate-50 p-8 rounded-2xl">
                            <p className="font-bold mb-3 text-lg">Q1. 市販の消臭剤と何が違うのですか？</p>
                            <p className="text-slate-600 leading-relaxed">消臭剤は匂いを覆い隠すだけです。<br /><br />AirFuture miniは、臭い分子そのものを分解します。</p>
                        </div>
                        <div className="bg-slate-50 p-8 rounded-2xl">
                            <p className="font-bold mb-3 text-lg">Q2. 多頭飼いでも効果がありますか？</p>
                            <p className="text-slate-600 leading-relaxed">はい。複数の臭い源がある環境でも、空間全体に作用します。</p>
                        </div>
                        <div className="bg-slate-50 p-8 rounded-2xl">
                            <p className="font-bold mb-3 text-lg">Q3. ペットに影響はありませんか？</p>
                            <p className="text-slate-600 leading-relaxed">ありません。薬品を使わない設計です。</p>
                        </div>
                        <div className="bg-slate-50 p-8 rounded-2xl">
                            <p className="font-bold mb-3 text-lg">Q4. どのくらいで効果を感じますか？</p>
                            <p className="text-slate-600 leading-relaxed">環境にもよりますが、多くの場合、数日以内に変化を実感されます。</p>
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
