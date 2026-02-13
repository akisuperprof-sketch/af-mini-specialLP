import React from 'react';
import { Shield, Zap, Wind, Sparkles, CheckCircle, Info, Thermometer, Clock, CreditCard } from 'lucide-react';

const DeepScienceSection = () => {
    return (
        <section className="py-24 bg-slate-900 text-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-24 fade-in">
                        <span className="text-indigo-400 font-bold tracking-widest text-xs mb-4 block uppercase">The Science of Air Future</span>
                        <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                            なぜAir Futureの空気は<br />
                            こんなに特別な時間を作るのか
                        </h2>
                        <div className="h-1 w-24 bg-indigo-500 mx-auto rounded-full"></div>
                    </div>

                    {/* Feature 1: Medical Grade with Pure Product Visualization */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-40 fade-in">
                        <div className="order-2 md:order-1">
                            <div className="relative group">
                                <div className="absolute -inset-6 bg-indigo-500/10 rounded-[2rem] blur-3xl opacity-75 group-hover:opacity-100 transition-opacity"></div>
                                <img
                                    src="/images/medical_grade_actual_product_v2.png"
                                    alt="Medical Grade Cleanroom with AirFuture mini"
                                    className="relative rounded-3xl w-full aspect-square object-cover border border-white/10 shadow-2xl"
                                />
                            </div>
                        </div>
                        <div className="order-1 md:order-2">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-14 h-14 rounded-2xl bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30">
                                    <Shield className="w-7 h-7 text-indigo-400" />
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-white">医療グレードが支える、<br />究極の安全性。</h3>
                            </div>
                            <p className="text-gray-300 leading-relaxed text-lg mb-8">
                                Air Futureは、病院の手術室や高い基準が求められるクリーンルームなど、一滴の妥協も許されないプロフェッショナルの現場で採用されているシステムと同じ技術を搭載しています。
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3 text-gray-400">
                                    <CheckCircle className="w-5 h-5 text-indigo-400 shrink-0 mt-1" />
                                    <span>国内・国外の専門機関での厳しい実証試験をクリア</span>
                                </li>
                                <li className="flex items-start gap-3 text-gray-400">
                                    <CheckCircle className="w-5 h-5 text-indigo-400 shrink-0 mt-1" />
                                    <span>菌やウイルスの侵入をブロックし、聖域のような空間へ</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Feature 2: Thunder System - Science Meets Nature */}
                    <div className="mb-40 fade-in">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-16">
                            <div>
                                <div className="inline-flex items-center gap-3 mb-8 px-5 py-2.5 rounded-full bg-amber-500/10 border border-amber-500/20">
                                    <Zap className="w-5 h-5 text-amber-500" />
                                    <span className="text-amber-500 font-bold text-sm tracking-widest uppercase">The Power of Lightning</span>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">自然の自浄作用「雷」を、<br />あなたのデスクの上に。</h3>
                                <p className="text-gray-300 leading-relaxed text-lg italic mb-10">
                                    「雷の後、空気が澄んでいる」と感じたことはありませんか？
                                </p>
                                <p className="text-gray-400 leading-relaxed">
                                    地球の壮大な自浄システムの一つは「雷」による強力な放電です。このとき発生するプラスとマイナスのイオンが大気を根本から洗い流します。Air Futureはこの「大自然の雷」の仕組みをナノスケールで再現。人工的な香りでごまかさない、真の清浄を届けます。
                                </p>
                            </div>
                            <div className="relative group">
                                <div className="absolute -inset-6 bg-amber-500/5 rounded-[2rem] blur-3xl"></div>
                                <img
                                    src="/images/lightning_air_actual_product_v2.png"
                                    alt="Ion generation inspired by lightning"
                                    className="relative rounded-3xl w-full aspect-square object-cover border border-white/10 shadow-2xl"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center pt-8">
                            <div className="group p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-amber-500/30 transition-all">
                                <p className="text-4xl font-black text-white mb-3 group-hover:scale-110 transition-transform">3,000万個</p>
                                <p className="text-[10px] text-gray-500 font-black uppercase tracking-[0.2em] mb-4">放出されるイオン（毎秒）</p>
                                <p className="text-xs text-indigo-300 leading-relaxed">圧倒的なイオン放出量により、空間の隅々まで素早く浄化能力を浸透させます。</p>
                            </div>
                            <div className="group p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-indigo-500/30 transition-all ring-1 ring-white/5">
                                <p className="text-4xl font-black text-indigo-400 mb-3 group-hover:scale-110 transition-transform">0.002ppm</p>
                                <p className="text-[10px] text-gray-500 font-black uppercase tracking-[0.2em] mb-4">安全な極微量オゾン</p>
                                <p className="text-xs text-indigo-300 leading-relaxed">WHO基準値（0.05ppm）を遥かに下回る、赤ちゃんやペットにも安心な設計です。</p>
                            </div>
                            <div className="group p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-emerald-500/30 transition-all">
                                <p className="text-4xl font-black text-white mb-3 group-hover:scale-110 transition-transform">98％以上</p>
                                <p className="text-[10px] text-gray-500 font-black uppercase tracking-[0.2em] mb-4">VOC・化学物質の除去率</p>
                                <p className="text-xs text-indigo-300 leading-relaxed">現代人を悩ませるシックハウスの原因物質を、速やかに分解・無害化します。</p>
                            </div>
                        </div>
                    </div>

                    {/* Feature 3: Technology vs Tradition */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-stretch mb-32 fade-in">
                        <div className="p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/10 flex flex-col">
                            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-4">
                                <CreditCard className="w-7 h-7 text-emerald-400" /> 日々の使い心地の「贅沢」
                            </h3>
                            <div className="space-y-10 flex-1">
                                <div className="flex gap-6">
                                    <div className="shrink-0 w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                                        <Thermometer className="w-6 h-6 text-emerald-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white text-lg mb-2 text-left">静寂へのこだわり</h4>
                                        <p className="text-gray-400 text-sm leading-relaxed text-left">図書館の静けさ（40dB）を下回る最小32dB。寝室や仕事場でも、あなたの集中を妨げません。</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="shrink-0 w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                                        <Clock className="w-6 h-6 text-blue-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white text-lg mb-2 text-left">究極のランニングコスト</h4>
                                        <p className="text-gray-400 text-sm leading-relaxed text-left">年間の電気代はわずか1,500円程度（弱モード）。フィルター交換の手間も費用もかかりません。</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-10 rounded-[2.5rem] bg-indigo-500/[0.07] border border-indigo-500/20 flex flex-col justify-between">
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-10 flex items-center gap-4">
                                    <Sparkles className="w-7 h-7 text-indigo-400" /> なぜ「放出式」なのか？
                                </h3>
                                <div className="space-y-8">
                                    <div className="relative pl-12">
                                        <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-xs font-bold ring-1 ring-white/10">吸</div>
                                        <p className="font-bold text-gray-400 text-sm mb-2 text-left">従来の吸引式空気清浄機</p>
                                        <p className="text-gray-500 text-xs text-left leading-relaxed">本体に吸い込まれた空気しか綺麗にできません。壁や床に付着した菌、衣服のニオイ、部屋の隅にある汚れには手が届きませんでした。</p>
                                    </div>
                                    <div className="relative pl-12 bg-white/5 p-6 rounded-2xl border border-white/5">
                                        <div className="absolute left-6 top-6 w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-xs font-bold ring-2 ring-indigo-500/30">放</div>
                                        <p className="font-bold text-white text-sm mb-2 text-left">Air Future（アクティブ放出式）</p>
                                        <p className="text-indigo-100 text-xs text-left leading-relaxed">大量のイオンを能動的に空間へ放出。空気だけでなく、ソファや壁に染み付いた菌やVOCまで直接アタックし、空間全体をまるごと洗い流します。</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8 flex items-center gap-3 text-indigo-400 text-xs font-black tracking-widest uppercase italic">
                                <span>Advanced Ion Technology</span>
                                <div className="h-px flex-1 bg-indigo-400/20"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DeepScienceSection;
