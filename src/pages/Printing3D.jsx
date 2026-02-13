import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { ChevronRight, CheckCircle, Zap, Coffee, TrendingUp, Shield, AlertTriangle, Factory, GraduationCap, Building2, Stethoscope } from "lucide-react";

export default function Printing3D() {
    const IMAGES = {
        logo: "/images/mini-logo.jpg",
        hero: "/images/hero/3dprinter.png",
        problem: "/images/3dprinter/problem_v2.png",
        solution: "/images/3dprinter/solution_v2.png",
        lifestyle: "/images/3dprinter/lifestyle_v2.png",
        product: "/images/ミニ斜め背景カット.png"
    };

    const TARGET_LP_URL = "https://v0-air-future-mini-design.vercel.app/";
    const TARGET_APPLY_URL = "https://airfuture.vercel.app/apply";

    const handleCTAClick = (pid = '3dprinter_hero') => {
        const trackingUrl = `/api/log_click?pid=${pid}&lp=3dprinter`;
        if (navigator.sendBeacon) {
            navigator.sendBeacon(trackingUrl);
        } else {
            fetch(trackingUrl, { mode: 'no-cors' });
        }
        window.location.href = `${TARGET_LP_URL}?utm_source=3dprinter&lp=3dprinter&pid=${pid}`;
    };

    const trackBuy = (pid) => {
        const trackingUrl = `/api/log_click?pid=${pid}&lp=3dprinter`;
        if (navigator.sendBeacon) {
            navigator.sendBeacon(trackingUrl);
        } else {
            fetch(trackingUrl, { mode: 'no-cors' });
        }
        window.location.href = `${TARGET_APPLY_URL}?lp=3dprinter&pid=${pid}&utm_source=3dprinter`;
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

            <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <img src={IMAGES.logo} alt="AirFuture mini" className="h-8 md:h-10 object-contain brightness-0 invert" />
                    <Button onClick={() => handleCTAClick('header_nav')} className="text-xs md:text-sm font-bold text-gray-300 hover:text-purple-400 transition-colors">
                        製品詳細 <ChevronRight className="w-3 h-3 ml-1" />
                    </Button>
                </div>
            </header>

            {/* Floating CTA */}
            <div className="floating-cta-container">
                <Button onClick={() => trackBuy('floating_cta')} className="clean-button px-6 py-3 text-sm md:text-base rounded-full border border-purple-200 bg-purple-600 text-white hover:bg-purple-700">
                    今すぐ購入する
                    <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
            </div>

            {/* Hero Section */}
            <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-black overflow-hidden pt-20">
                <div className="container mx-auto px-4 z-10 relative text-center animate-fade-blur">
                    <span className="inline-block py-1 px-3 rounded-full bg-purple-600 text-white text-[10px] md:text-xs font-black mb-4 uppercase tracking-[0.2em]">
                        FOR 3D PRINTING PROFESSIONALS
                    </span>
                    <h1 className="text-3xl md:text-7xl font-bold mb-6 text-white leading-tight">
                        開発スピードの裏で、<br />健康を<span className="text-purple-400">削って<br className="md:hidden" />いませんか？</span>
                    </h1>
                    <p className="text-base md:text-2xl text-gray-300 font-medium mb-10 max-w-3xl mx-auto px-4">
                        レジン臭・VOC・有害ガス対策。<br />
                        創作活動を守る、<br className="md:hidden" />次世代の空気清浄。
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
                        <Button onClick={() => handleCTAClick('hero_detail')} className="w-full md:w-auto bg-white text-slate-900 border-2 border-white px-8 py-4 text-lg rounded-full shadow-sm hover:bg-gray-100 transition-all font-bold">
                            詳細を見る
                        </Button>
                        <Button onClick={() => trackBuy('hero_order')} className="w-full md:w-auto bg-purple-600 text-white hover:bg-purple-700 px-8 py-4 text-lg rounded-full shadow-lg transition-all font-bold">
                            導入を検討する
                        </Button>
                    </div>
                    <div className="max-w-5xl mx-auto relative group">
                        <img src={IMAGES.hero} alt="AirFuture mini in 3D Printer Workshop" className="relative z-10 w-full rounded-3xl shadow-2xl border border-white/10" />
                    </div>
                </div>
            </section>

            {/* 共感ゾーン - チェックリスト */}
            <section className="py-20 bg-slate-900 text-white">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-12">こんなお悩み、ありませんか？</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                        <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                            <AlertTriangle className="text-yellow-400 mb-3" />
                            <p className="font-bold mb-2">作業後の頭痛</p>
                            <p className="text-sm text-gray-400">長時間の造形作業で頭が重くなる</p>
                        </div>
                        <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                            <AlertTriangle className="text-yellow-400 mb-3" />
                            <p className="font-bold mb-2">独特の刺激臭</p>
                            <p className="text-sm text-gray-400">レジンや樹脂の臭いが部屋に充満</p>
                        </div>
                        <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                            <AlertTriangle className="text-yellow-400 mb-3" />
                            <p className="font-bold mb-2">疲労の蓄積</p>
                            <p className="text-sm text-gray-400">換気しても取れない倦怠感</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 問題説明 */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center gap-16 max-w-6xl mx-auto text-left">
                        <div className="w-full md:w-1/2">
                            <h2 className="text-3xl md:text-6xl font-black mb-8 leading-tight">
                                換気だけでは、<br />
                                <span className="text-orange-500">健康は守れない</span>
                            </h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                3Dプリンタ（FDM・SLA方式）から発生する超微粒子（UFP）や揮発性有機化合物（VOC）は、目に見えず、換気だけでは完全に除去できません。<br /><br />
                                長時間の造形作業では、この「見えないリスク」が蓄積。呼吸器系への影響、集中力の低下、慢性疲労の原因となります。
                            </p>
                            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                                <p className="text-sm font-bold text-slate-900 mb-2">⚠️ 主な健康リスク</p>
                                <ul className="text-sm text-slate-600 space-y-1">
                                    <li>• 呼吸器系への刺激（咳、のどの痛み）</li>
                                    <li>• 頭痛・めまい・吐き気</li>
                                    <li>• 長期曝露による慢性疾患リスク</li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <img src={IMAGES.problem} alt="3D Printer VOC Problem" className="w-full rounded-3xl shadow-2xl" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 用途別対応 */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-16 text-slate-900">
                        あらゆる現場に対応
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        <div className="bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-all">
                            <Factory className="text-purple-600 w-12 h-12 mx-auto mb-4" />
                            <h3 className="text-xl font-bold mb-3 text-slate-900">製造業</h3>
                            <p className="text-sm text-slate-600">試作品製作時のVOC対策に</p>
                        </div>
                        <div className="bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-all">
                            <Stethoscope className="text-purple-600 w-12 h-12 mx-auto mb-4" />
                            <h3 className="text-xl font-bold mb-3 text-slate-900">医療機関</h3>
                            <p className="text-sm text-slate-600">医療器具製作時の安全確保</p>
                        </div>
                        <div className="bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-all">
                            <Building2 className="text-purple-600 w-12 h-12 mx-auto mb-4" />
                            <h3 className="text-xl font-bold mb-3 text-slate-900">建築・設計</h3>
                            <p className="text-sm text-slate-600">模型製作スペースの環境改善</p>
                        </div>
                        <div className="bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-all">
                            <GraduationCap className="text-purple-600 w-12 h-12 mx-auto mb-4" />
                            <h3 className="text-xl font-bold mb-3 text-slate-900">教育機関</h3>
                            <p className="text-sm text-slate-600">学生の安全な学習環境を実現</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 解決策 */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center gap-16 max-w-6xl mx-auto text-left">
                        <div className="w-full md:w-1/2 order-2 md:order-1">
                            <img src={IMAGES.solution} alt="Ion Cluster Solution" className="w-full rounded-3xl shadow-2xl border border-purple-50" />
                        </div>
                        <div className="w-full md:w-1/2 order-1 md:order-2">
                            <span className="text-purple-600 font-bold tracking-widest text-xs mb-4 block uppercase leading-none">The Ultimate Solution</span>
                            <h2 className="text-3xl md:text-6xl font-black mb-8 leading-tight">
                                攻めの<br />
                                <span className="text-purple-600">「イオンバリア」</span>
                            </h2>
                            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                                AirFuture mini から放出される<strong>毎秒3,000万個以上の高濃度イオン</strong>。これらが作業空間全体に広がり、VOCや超微粒子を<strong>分子レベルで攻撃・分解</strong>します。<br /><br />
                                換気に頼るのではなく、発生した瞬間に無害化する。これが、創作活動を健康的に続ける最善の方法です。
                            </p>
                            <ul className="space-y-4 font-bold text-slate-800">
                                <li className="flex items-center"><CheckCircle className="text-purple-600 mr-3 shrink-0" /> VOC・超微粒子を空中で分解</li>
                                <li className="flex items-center"><CheckCircle className="text-purple-600 mr-3 shrink-0" /> レジン特有の刺激臭も徹底消臭</li>
                                <li className="flex items-center"><CheckCircle className="text-purple-600 mr-3 shrink-0" /> メンテナンスは2年に1度の素子交換のみ</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 作業効率・生産性改善 */}
            <section className="py-20 bg-purple-900 text-white">
                <div className="container mx-auto px-4 max-w-5xl text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-12">健康な空気が、生産性を上げる。</h2>
                    <p className="text-lg text-purple-100 mb-12 leading-relaxed max-w-3xl mx-auto">
                        VOC除去により、スタッフの集中力が向上。頭痛や疲労が軽減され、長時間の作業でもパフォーマンスを維持できます。
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-purple-800/50 p-8 rounded-2xl">
                            <Zap className="text-purple-300 w-12 h-12 mx-auto mb-4" />
                            <p className="text-2xl font-bold mb-2">集中力UP</p>
                            <p className="text-sm text-purple-200">クリーンな空気で作業効率が向上</p>
                        </div>
                        <div className="bg-purple-800/50 p-8 rounded-2xl">
                            <Shield className="text-purple-300 w-12 h-12 mx-auto mb-4" />
                            <p className="text-2xl font-bold mb-2">健康維持</p>
                            <p className="text-sm text-purple-200">長期的な健康リスクを低減</p>
                        </div>
                        <div className="bg-purple-800/50 p-8 rounded-2xl">
                            <TrendingUp className="text-purple-300 w-12 h-12 mx-auto mb-4" />
                            <p className="text-2xl font-bold mb-2">離職率低下</p>
                            <p className="text-sm text-purple-200">快適な職場環境で定着率向上</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 実績・将来性 */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-slate-900">導入実績と将来性</h2>
                    <div className="bg-white p-10 rounded-3xl shadow-xl border border-slate-100">
                        <h3 className="text-2xl font-bold mb-6 text-slate-900">🏍️ モーターサイクル・自動車業界での実績</h3>
                        <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                            AirFutureシリーズは、バイク・車業界の試作開発現場で導入実績があります。塗装ブース、樹脂加工エリア、3Dプリンタ運用スペースなど、VOC発生が避けられない環境での空気質改善に貢献しています。
                        </p>
                        <div className="bg-purple-50 p-6 rounded-2xl border border-purple-100">
                            <p className="text-sm font-bold text-purple-900 mb-2">📌 導入効果</p>
                            <ul className="text-sm text-slate-700 space-y-2">
                                <li>✅ 作業員の体調不良による欠勤が大幅減少</li>
                                <li>✅ 長時間作業時の集中力維持が可能に</li>
                                <li>✅ 法令順守（労働安全衛生法）への対応</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* コスト価値 */}
            <section className="py-20 bg-slate-900 text-white">
                <div className="container mx-auto px-4 max-w-5xl text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-12">「安全への投資」は、最短で回収できる。</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div><Coffee className="text-purple-400 w-12 h-12 mx-auto mb-4" /><p className="text-xl font-bold">Coffee 1 Cup</p><p className="text-sm text-slate-400">1日あたりのコストは<br />コーヒー1杯分以下。</p></div>
                        <div><TrendingUp className="text-purple-400 w-12 h-12 mx-auto mb-4" /><p className="text-xl font-bold">生産性向上</p><p className="text-sm text-slate-400">健康な空気で<br />作業効率が改善。</p></div>
                        <div><Shield className="text-purple-400 w-12 h-12 mx-auto mb-4" /><p className="text-xl font-bold">リスク回避</p><p className="text-sm text-slate-400">健康被害による<br />訴訟リスクを低減。</p></div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">FAQ</h2>
                    <div className="space-y-8">
                        <div className="bg-slate-50 p-8 rounded-2xl">
                            <p className="font-bold mb-3 text-lg">Q1：換気だけでは不十分ですか？</p>
                            <p className="text-slate-600 leading-relaxed">はい。換気は外部への排出ですが、AirFuture miniは空中で有害物質を分解・無害化します。併用することで、より安全な環境を実現できます。</p>
                        </div>
                        <div className="bg-slate-50 p-8 rounded-2xl">
                            <p className="font-bold mb-3 text-lg">Q2：レジン臭にも効果がありますか？</p>
                            <p className="text-slate-600 leading-relaxed">はい。レジンから発生するVOCを分子レベルで分解し、無臭化します。SLA方式の3Dプリンタ使用環境でも高い効果を発揮します。</p>
                        </div>
                        <div className="bg-slate-50 p-8 rounded-2xl">
                            <p className="font-bold mb-3 text-lg">Q3：工場規模の導入は可能ですか？</p>
                            <p className="text-slate-600 leading-relaxed">ミニモデルは個人〜小規模スペース向けですが、大型モデル「AirFuture」もございます。ご相談ください。</p>
                        </div>
                        <div className="bg-slate-50 p-8 rounded-2xl">
                            <p className="font-bold mb-3 text-lg">Q4：メンテナンスは必要ですか？</p>
                            <p className="text-slate-600 leading-relaxed">フィルター交換不要。2年に1度の素子交換のみで、ランニングコストを最小限に抑えられます。</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 md:py-32 bg-slate-900 text-center relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <h2 className="text-3xl md:text-6xl font-bold text-white mb-12">創作活動を、<br />健康的に続けるために。</h2>
                    <div className="flex flex-col md:flex-row gap-6 justify-center">
                        <Button onClick={() => handleCTAClick('footer_all')} className="bg-white text-slate-900 px-10 py-5 text-xl rounded-full font-black shadow-xl">全性能を見る</Button>
                        <Button onClick={() => trackBuy('footer_buy')} className="bg-purple-600 text-white px-10 py-5 text-xl rounded-full font-black shadow-2xl">購入・見積もりを依頼する</Button>
                    </div>
                </div>
            </section>

            <footer className="py-12 bg-black text-slate-600 text-center"><p className="text-xs">© 2026 AirFuture. All Rights Reserved.</p></footer>
        </main>
    );
}
