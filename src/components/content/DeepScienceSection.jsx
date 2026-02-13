import React from 'react';
import { Shield, Zap, Wind, Sparkles, CheckCircle } from 'lucide-react';

const DeepScienceSection = () => {
    return (
        <section className="py-24 bg-slate-900 text-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-20 fade-in">
                        <span className="text-indigo-400 font-bold tracking-widest text-xs mb-4 block uppercase leading-none">Why it feels so good</span>
                        <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                            なぜAir Futureの空気は<br />
                            こんなに気持ちいいの？
                        </h2>
                        <div className="h-1 w-20 bg-indigo-500 mx-auto rounded-full"></div>
                    </div>

                    {/* Section 1: Medical Grade */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32 fade-in">
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30">
                                    <Shield className="w-5 h-5 text-indigo-400" />
                                </div>
                                <h3 className="text-xl font-bold text-indigo-300">医療グレードだから効果が違う</h3>
                            </div>
                            <p className="text-gray-300 leading-relaxed text-lg">
                                Air Futureは医療グレードであり、病院の手術室やクリーンルームなど、一切の菌やウイルスの侵入も許されない空間で使われているレベルのものです。
                            </p>
                        </div>
                        <div className="relative">
                            <div className="absolute -inset-4 bg-indigo-500/10 rounded-3xl blur-2xl"></div>
                            <img src="/images/mini-logo.jpg" alt="Medical Grade" className="relative rounded-2xl w-full h-48 object-cover border border-white/10" />
                        </div>
                    </div>

                    {/* Section 2: Thunder System */}
                    <div className="mb-32 fade-in">
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20">
                                <Zap className="w-5 h-5 text-amber-500" />
                                <span className="text-amber-500 font-bold text-sm">地球の浄化システムと同じ</span>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold mb-6">安心・安全な空気清浄システム</h3>
                            <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
                                地球の自然の空気清浄システムの一つは「雷」です。雷が発生するとプラスとマイナスのイオンが発生し、大気の汚れが分解されます。Air Futureはこの素晴らしい自然の浄化の仕組みを再現しています。
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                            <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
                                <p className="text-3xl font-black text-white mb-2">100回</p>
                                <p className="text-xs text-gray-400 uppercase tracking-widest">1秒間あたりの雷の数</p>
                            </div>
                            <div className="p-8 rounded-2xl bg-white/5 border border-indigo-500/30 ring-1 ring-indigo-500/20">
                                <p className="text-3xl font-black text-indigo-400 mb-2">3,000万個</p>
                                <p className="text-xs text-gray-400 uppercase tracking-widest">放出されるイオン（毎秒）</p>
                            </div>
                            <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
                                <p className="text-3xl font-black text-white mb-2">0.002ppm</p>
                                <p className="text-xs text-gray-400 uppercase tracking-widest">安全な極微量オゾン</p>
                            </div>
                        </div>
                    </div>

                    {/* Section 3: VOC / Breath Quality */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start fade-in">
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-xl font-bold text-emerald-400 mb-4 flex items-center gap-2">
                                    <Wind className="w-5 h-5" /> VOC対策にも高い効果
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    壁紙の接着剤、塗料、香料、柔軟剤。現代の室内は「見えない化学物質」で溢れています。Air Futureはホルムアルデヒド除去率98％、トルエン除去率98％を実証。シックハウス症候群などのリスクから家族を守ります。
                                </p>
                            </div>
                            <div className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/10">
                                <h4 className="text-white font-bold mb-2">人は1日に2万回呼吸する</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    都会のビルの一室なのに、大自然の中の早朝のような清々しさ。思考をクリアにし、リラックスを深める「呼吸の質」への投資。
                                </p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-xl font-bold text-indigo-400 mb-6 flex items-center gap-2">
                                <Sparkles className="w-5 h-5" /> 一般的な空気清浄機との違い
                            </h3>
                            <div className="space-y-4">
                                <div className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                                    <div className="shrink-0 w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-xs font-bold">吸</div>
                                    <div>
                                        <p className="font-bold text-indigo-300 text-sm mb-1 text-left">一般的な空気清浄機（吸引式）</p>
                                        <p className="text-gray-400 text-xs text-left">本体に吸い込んだ空気しかろ過できない。壁や床に付着した菌は吸えない。</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-4 rounded-xl bg-indigo-500/10 border border-indigo-500/20">
                                    <div className="shrink-0 w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-xs font-bold italic">放</div>
                                    <div>
                                        <p className="font-bold text-white text-sm mb-1 text-left">Air Future（放出式）</p>
                                        <p className="text-gray-300 text-xs text-left">大量のイオンを放出し、モノに付着した有害物質まで不活性化。フィルター不要で性能が落ちません。</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DeepScienceSection;
