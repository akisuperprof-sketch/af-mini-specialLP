import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { ChevronRight, CheckCircle, Heart, TrendingUp, Zap, AlertTriangle, Shield } from "lucide-react";

export default function Dental() {
    // Refs for smooth scrolling
    const type1Ref = useRef(null);
    const type2Ref = useRef(null);
    const type3Ref = useRef(null);

    const IMAGES = {
        logo: "/images/mini-logo.jpg",
        hero: "/images/hero/dental.png",
        type1: "/images/dental/general.png",
        type2: "/images/dental/lab.png",
        type3: "/images/dental/surgery.png",
        product: "/images/ミニ斜め背景カット.png"
    };

    const TARGET_LP_URL = "https://v0-air-future-mini-design.vercel.app/";
    const TARGET_APPLY_URL = "https://airfuture.vercel.app/apply";

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

    const scrollToSection = (ref) => {
        ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
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

            {/* Floating CTA */}
            <div className="floating-cta-container">
                <Button onClick={() => trackBuy('floating_cta')} className="clean-button px-6 py-3 text-sm md:text-base rounded-full border border-blue-200 bg-blue-600 text-white hover:bg-blue-700">
                    今すぐ購入する
                    <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
            </div>

            {/* Hero Section */}
            <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-white overflow-hidden pt-20">
                {/* Floating Clean Particles */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{
                                x: Math.random() * 100 + "%",
                                y: Math.random() * 100 + "%",
                                opacity: 0
                            }}
                            animate={{
                                y: [null, (Math.random() - 0.5) * 50 + "%"],
                                x: [null, (Math.random() - 0.5) * 50 + "%"],
                                opacity: [0, 0.3, 0]
                            }}
                            transition={{
                                duration: Math.random() * 15 + 10,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            className={`absolute rounded-full blur-[1px] ${i % 2 === 0 ? 'w-1 h-1 bg-blue-400/20' : 'w-2 h-2 bg-blue-200/20'}`}
                        />
                    ))}
                </div>

                <div className="container mx-auto px-4 z-10 relative text-center animate-fade-blur">
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-600 text-white text-[10px] md:text-xs font-black mb-4 uppercase tracking-[0.2em]">
                        FOR DENTAL PROFESSIONAL
                    </span>
                    <h1 className="text-3xl md:text-7xl font-bold mb-6 text-slate-900 leading-tight">
                        院内環境は、<br className="md:hidden" />医院の<span className="text-blue-600">「信用力」</span>を<br className="md:hidden" />決める。
                    </h1>
                    <p className="text-base md:text-2xl text-slate-600 font-medium mb-10 max-w-3xl mx-auto px-4">
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

            {/* タイプ分類セクション */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-8 text-slate-900">あなたの医院は、<br className="md:hidden" />どのタイプですか？</h2>
                    <p className="text-lg text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed px-4">
                        歯科医院の空気環境は、<br />
                        診療スタイルによって<br className="md:hidden" />課題が異なります。<br /><br />
                        AirFuture miniは、<br className="md:hidden" />
                        すべてのタイプに対応できます。
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <button onClick={() => scrollToSection(type1Ref)} className="bg-white rounded-3xl overflow-hidden border-2 border-blue-100 hover:shadow-xl hover:border-blue-300 transition-all text-left group cursor-pointer">
                            <div className="h-48 bg-slate-200 overflow-hidden"><img src={IMAGES.type1} alt="General Clinic" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /></div>
                            <div className="p-8">
                                <div className="bg-blue-600 text-white text-[10px] font-bold py-1 px-3 rounded-full w-fit mb-4">TYPE 01</div>
                                <h3 className="text-xl font-bold mb-4 text-slate-900">一般診療中心の歯科医院</h3>
                                <p className="text-sm text-slate-600 mb-4">快適性・印象改善</p>
                                <div className="flex items-center text-blue-600 font-bold text-sm">
                                    詳しく見る <ChevronRight className="w-4 h-4 ml-1" />
                                </div>
                            </div>
                        </button>
                        <button onClick={() => scrollToSection(type2Ref)} className="bg-white rounded-3xl overflow-hidden border-2 border-emerald-100 hover:shadow-xl hover:border-emerald-300 transition-all text-left group cursor-pointer">
                            <div className="h-48 bg-slate-200 overflow-hidden"><img src={IMAGES.type2} alt="Lab Clinic" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /></div>
                            <div className="p-8">
                                <div className="bg-emerald-600 text-white text-[10px] font-bold py-1 px-3 rounded-full w-fit mb-4">TYPE 02</div>
                                <h3 className="text-xl font-bold mb-4 text-slate-900">技工室・3Dプリンタ併設医院</h3>
                                <p className="text-sm text-slate-600 mb-4">有害物質・作業効率改善</p>
                                <div className="flex items-center text-emerald-600 font-bold text-sm">
                                    詳しく見る <ChevronRight className="w-4 h-4 ml-1" />
                                </div>
                            </div>
                        </button>
                        <button onClick={() => scrollToSection(type3Ref)} className="bg-white rounded-3xl overflow-hidden border-2 border-rose-100 hover:shadow-xl hover:border-rose-300 transition-all text-left group cursor-pointer">
                            <div className="h-48 bg-slate-200 overflow-hidden"><img src={IMAGES.type3} alt="Surgery Clinic" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /></div>
                            <div className="p-8">
                                <div className="bg-rose-600 text-white text-[10px] font-bold py-1 px-3 rounded-full w-fit mb-4">TYPE 03</div>
                                <h3 className="text-xl font-bold mb-4 text-slate-900">オペ対応・外科処置医院</h3>
                                <p className="text-sm text-slate-600 mb-4">無菌環境・医療リスク対策</p>
                                <div className="flex items-center text-rose-600 font-bold text-sm">
                                    詳しく見る <ChevronRight className="w-4 h-4 ml-1" />
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </section>

            {/* Type1: 一般歯科向け */}
            <section ref={type1Ref} className="py-24 bg-white scroll-mt-20">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="bg-blue-50 rounded-[40px] p-12 md:p-20">
                        <div className="bg-blue-600 text-white text-xs font-bold py-1 px-4 rounded-full w-fit mb-6">TYPE 01</div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-slate-900 leading-tight">
                            「選ばれる医院」は、<br className="md:hidden" />空気が違う
                        </h2>
                        <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                            一般診療中心の医院では、<br className="md:hidden" />患者満足度が重要です。
                        </p>
                        <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                            患者は、無意識に<br className="md:hidden" />
                            <strong>「空気の印象」</strong>で<br className="md:hidden" />
                            医院を評価しています。
                        </p>
                        <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                            薬品臭・粉塵・空気の重さは、<br className="md:hidden" />
                            不安や不信感を生みます。
                        </p>
                        <div className="bg-blue-600 text-white p-8 rounded-2xl">
                            <p className="text-2xl font-bold">AirFuture miniは、<br />安心できる診療空間をつくります。</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Type2: 技工室・3Dプリンタ併設型 */}
            <section ref={type2Ref} className="py-24 bg-slate-50 scroll-mt-20">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="bg-emerald-50 rounded-[40px] p-12 md:p-20">
                        <div className="bg-emerald-600 text-white text-xs font-bold py-1 px-4 rounded-full w-fit mb-6">TYPE 02</div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-slate-900 leading-tight">
                            レジン環境を、放置していませんか？
                        </h2>
                        <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                            技工室では、
                        </p>
                        <ul className="text-lg text-slate-700 mb-6 space-y-2">
                            <li>• レジン臭</li>
                            <li>• 洗浄臭</li>
                            <li>• 有害物質</li>
                            <li>• 換気不足</li>
                        </ul>
                        <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                            が、日常的に発生します。
                        </p>
                        <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                            さらに、
                        </p>
                        <ul className="text-lg text-slate-700 mb-6 space-y-2">
                            <li>• 適合不良</li>
                            <li>• 色や形態のズレ</li>
                            <li>• 納期遅延</li>
                            <li>• 情報不足</li>
                        </ul>
                        <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                            が重なり、<br />長時間労働と過労につながります。
                        </p>
                        <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                            <strong>空気環境の悪化は、<br />作業効率と品質を下げます。</strong>
                        </p>
                        <div className="bg-emerald-600 text-white p-8 rounded-2xl">
                            <p className="text-2xl font-bold">AirFuture miniは、<br />レジン環境の根本対策として機能します。</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Type3: オペ対応・外科処置型 */}
            <section ref={type3Ref} className="py-24 bg-white scroll-mt-20">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="bg-rose-50 rounded-[40px] p-12 md:p-20">
                        <div className="bg-rose-600 text-white text-xs font-bold py-1 px-4 rounded-full w-fit mb-6">TYPE 03</div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-slate-900 leading-tight">
                            無菌環境は、最大のリスク対策
                        </h2>
                        <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                            オペ対応医院では、
                        </p>
                        <ul className="text-lg text-slate-700 mb-6 space-y-2">
                            <li>• 感染リスク</li>
                            <li>• 偶発症</li>
                            <li>• 合併症</li>
                            <li>• 医療事故</li>
                        </ul>
                        <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                            が常に存在します。
                        </p>
                        <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                            一度の事故は、
                        </p>
                        <ul className="text-lg text-slate-700 mb-6 space-y-2">
                            <li>• 訴訟</li>
                            <li>• 損害賠償</li>
                            <li>• 評判低下</li>
                            <li>• 閉院リスク</li>
                        </ul>
                        <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                            につながります。<br /><br />
                            <strong>空気環境は、<br />安全管理の基盤です。</strong>
                        </p>
                        <div className="bg-rose-600 text-white p-8 rounded-2xl">
                            <p className="text-2xl font-bold">AirFuture miniは、<br />無菌環境維持を支援します。</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 統合価値ゾーン */}
            <section className="py-20 bg-slate-900 text-white">
                <div className="container mx-auto px-4 max-w-5xl text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-12">どのタイプでも、答えは「空気管理」</h2>
                    <p className="text-lg text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
                        AirFuture miniは、
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-12">
                        <div className="bg-slate-800 p-8 rounded-2xl text-left">
                            <CheckCircle className="text-blue-400 w-10 h-10 mb-4" />
                            <p className="text-xl font-bold mb-2">微細粒子分解</p>
                            <p className="text-sm text-gray-400">空気中の微細な粒子を分解</p>
                        </div>
                        <div className="bg-slate-800 p-8 rounded-2xl text-left">
                            <CheckCircle className="text-blue-400 w-10 h-10 mb-4" />
                            <p className="text-xl font-bold mb-2">臭気分解</p>
                            <p className="text-sm text-gray-400">薬品臭やレジン臭を根本から分解</p>
                        </div>
                        <div className="bg-slate-800 p-8 rounded-2xl text-left">
                            <CheckCircle className="text-blue-400 w-10 h-10 mb-4" />
                            <p className="text-xl font-bold mb-2">24時間稼働</p>
                            <p className="text-sm text-gray-400">常に清浄な空気を維持</p>
                        </div>
                        <div className="bg-slate-800 p-8 rounded-2xl text-left">
                            <CheckCircle className="text-blue-400 w-10 h-10 mb-4" />
                            <p className="text-xl font-bold mb-2">静音設計</p>
                            <p className="text-sm text-gray-400">診療の妨げにならない</p>
                        </div>
                    </div>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        により、<br />診療環境を根本から改善します。<br /><br />
                        一般的な清浄機とは異なり、<br /><strong className="text-white">空気そのものに作用します。</strong>
                    </p>
                </div>
            </section>

            {/* 経営価値ゾーン */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-5xl text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-12 text-slate-900">空気は「コスト」ではなく「資産」</h2>
                    <p className="text-lg text-slate-600 mb-12 leading-relaxed">
                        導入コストは、<br /><br />
                        <strong className="text-2xl text-slate-900">2〜3年使用で<br />1日あたりコーヒー1杯以下。</strong>
                    </p>
                    <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                        その一方で、
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                        <div className="bg-slate-50 p-8 rounded-2xl">
                            <TrendingUp className="text-blue-600 w-10 h-10 mx-auto mb-4" />
                            <p className="text-xl font-bold mb-2 text-slate-900">再診率向上</p>
                            <p className="text-sm text-slate-600">快適な空間が患者の定着を促進</p>
                        </div>
                        <div className="bg-slate-50 p-8 rounded-2xl">
                            <TrendingUp className="text-blue-600 w-10 h-10 mx-auto mb-4" />
                            <p className="text-xl font-bold mb-2 text-slate-900">自費率改善</p>
                            <p className="text-sm text-slate-600">信頼感が高額治療の受け入れを促す</p>
                        </div>
                        <div className="bg-slate-50 p-8 rounded-2xl">
                            <Heart className="text-blue-600 w-10 h-10 mx-auto mb-4" />
                            <p className="text-xl font-bold mb-2 text-slate-900">口コミ評価向上</p>
                            <p className="text-sm text-slate-600">清潔な環境が好評価につながる</p>
                        </div>
                        <div className="bg-slate-50 p-8 rounded-2xl">
                            <Heart className="text-blue-600 w-10 h-10 mx-auto mb-4" />
                            <p className="text-xl font-bold mb-2 text-slate-900">紹介増加</p>
                            <p className="text-sm text-slate-600">患者満足度が新規患者を呼ぶ</p>
                        </div>
                    </div>
                    <p className="text-lg text-slate-600 mt-12 leading-relaxed">
                        につながります。
                    </p>
                </div>
            </section>

            {/* 導入実績・信頼ゾーン */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-12 text-slate-900">すでに、選ばれています</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <p className="text-4xl font-black text-blue-600 mb-4">✓</p>
                            <p className="text-lg font-bold text-slate-900 mb-2">レジン臭が消えた</p>
                            <p className="text-sm text-slate-600">技工室の環境が劇的に改善</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <p className="text-4xl font-black text-blue-600 mb-4">✓</p>
                            <p className="text-lg font-bold text-slate-900 mb-2">オペ後の炎症の引きが早い</p>
                            <p className="text-sm text-slate-600">無菌環境の効果を実感</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm">
                            <p className="text-4xl font-black text-blue-600 mb-4">✓</p>
                            <p className="text-lg font-bold text-slate-900 mb-2">現場負担が減った</p>
                            <p className="text-sm text-slate-600">スタッフの作業環境が向上</p>
                        </div>
                    </div>
                    <p className="text-lg text-slate-600 mt-12 leading-relaxed">
                        多くの医院で、<br />実感されています。
                    </p>
                </div>
            </section>

            {/* 統合CTA */}
            <section className="py-20 md:py-32 bg-slate-900 text-center relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <h2 className="text-3xl md:text-6xl font-bold text-white mb-12">その一室を、<br />最高レベルの衛生空間へ。</h2>
                    <div className="flex flex-col md:flex-row gap-6 justify-center">
                        <Button onClick={() => handleCTAClick('footer_all')} className="bg-white text-slate-900 px-10 py-5 text-xl rounded-full font-black shadow-xl">AirFuture mini の全性能を見る</Button>
                        <Button onClick={() => trackBuy('footer_buy')} className="bg-blue-600 text-white px-10 py-5 text-xl rounded-full font-black shadow-2xl">公式ページで購入する</Button>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">FAQ</h2>
                    <div className="space-y-8">
                        <div className="bg-slate-50 p-8 rounded-2xl">
                            <p className="font-bold mb-3 text-lg">Q1. 一般的な空気清浄機との違いは？</p>
                            <p className="text-slate-600 leading-relaxed">多くの空気清浄機は、吸引＋フィルター方式です。<br /><br />歯科医院の複合的な臭気・粉塵・微粒子をリアルタイムで管理するには限界があります。<br /><br />AirFuture miniは、イオン放出による空気分解方式です。<br /><br />空間全体に作用します。</p>
                        </div>
                        <div className="bg-slate-50 p-8 rounded-2xl">
                            <p className="font-bold mb-3 text-lg">Q2. レジン臭や薬品臭にも効果がありますか？</p>
                            <p className="text-slate-600 leading-relaxed">はい。微細な臭気成分や有害物質にも作用し、技工室・診療室双方で効果を発揮します。</p>
                        </div>
                        <div className="bg-slate-50 p-8 rounded-2xl">
                            <p className="font-bold mb-3 text-lg">Q3. 導入が不安です。効果は本当にありますか？</p>
                            <p className="text-slate-600 leading-relaxed">多くの医院で実感されています。<br /><br />一般清浄機とは仕組みが異なるため、導入後の変化を感じやすい設計です。</p>
                        </div>
                        <div className="bg-slate-50 p-8 rounded-2xl">
                            <p className="font-bold mb-3 text-lg">Q4. 診療以外の部屋でも使えますか？</p>
                            <p className="text-slate-600 leading-relaxed">はい。待合室・技工室・休憩室などにも使用可能です。</p>
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
