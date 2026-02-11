import React, { useEffect, useState } from 'react';
import LuxuryBackground from '../components/LuxuryBackground';
import Button from '../components/Button';
import { ChevronRight, Wind, Shield, CheckCircle, XCircle, AlertTriangle, Smile } from "lucide-react";

export default function HayFever() {
    const [showIntro, setShowIntro] = useState(true);

    // Intersection Observer for fade-in/out animations
    useEffect(() => {
        const timer = setTimeout(() => setShowIntro(false), 2000);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                    } else {
                        // Optional: Keep it visible once loaded for smoother reading, 
                        // or toggle like Home.jsx (entry.target.classList.remove("visible"))
                        // keeping consistent with Home.jsx behavior as requested
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: "0px"
            }
        );

        const fadeElements = document.querySelectorAll(".fade-in");
        fadeElements.forEach((el) => observer.observe(el));

        return () => {
            clearTimeout(timer);
            fadeElements.forEach((el) => observer.unobserve(el));
        };
    }, []);

    const handleCTAClick = () => {
        // Tracking
        try {
            // Assuming x-autoup is deployed at the same domain or configured via proxy
            // If cross-domain, standard fetch might fail due to CORS unless configured
            // Using no-cors mode to at least attempt the request
            fetch('/api/log_click?pid=hayfever_hero&lp=hayfever', { mode: 'no-cors' });
        } catch (e) { console.error('Tracking failed', e); }

        // Redirect
        window.location.href = "/?utm_source=hayfever";
    };

    const trackBuy = (position) => {
        try {
            fetch(`/api/log_click?pid=hayfever_buy_${position}&lp=hayfever`, { mode: 'no-cors' });
        } catch (e) {
            console.error('Tracking failed', e);
        }
        window.open("https://airfuture.vercel.app/apply?utm_source=hayfever", "_blank");
    };

    return (
        <main className="min-h-screen bg-white text-gray-900 overflow-x-hidden font-sans">
            {/* Floating CTA */}
            <div className="floating-cta-container">
                <Button onClick={handleCTAClick} className="clean-button px-6 py-3 text-sm md:text-base rounded-full border border-gray-100">
                    AirFuture mini の詳細を見る
                    <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
            </div>

            {/* Hero Section */}
            <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-20 bg-white overflow-hidden">
                <LuxuryBackground />

                <div className="container mx-auto px-4 z-10 relative text-center">
                    <div className="fade-in mb-8">
                        <h1 className="text-3xl md:text-6xl font-bold mb-6 clean-title text-gray-900 tracking-wide leading-tight">
                            家に帰っても、<br />つらい春へ。
                        </h1>
                        <p className="text-lg md:text-2xl text-gray-700 font-medium mb-8">
                            それ、本当に対策できていますか？
                        </p>
                    </div>

                    <div className="fade-in mb-12 max-w-2xl mx-auto bg-white/80 backdrop-blur-sm p-8 rounded-xl border border-gray-100 shadow-sm">
                        <p className="text-gray-600 leading-relaxed mb-6">
                            服をはたく。すぐシャワー。<br />
                            空気清浄機MAX。<br />
                            <span className="font-bold text-gray-900">それでも苦しいあなたへ。</span>
                        </p>
                        <div className="flex flex-col md:flex-row gap-4 justify-center">
                            <Button onClick={handleCTAClick} className="clean-button px-8 py-4 text-lg rounded-full">
                                AirFuture mini の詳細を見る
                                <ChevronRight className="ml-2 h-5 w-5" />
                            </Button>
                            <Button onClick={() => trackBuy('hero')} className="bg-gray-900 text-white hover:bg-gray-800 px-8 py-4 text-lg rounded-full transition-colors flex items-center justify-center">
                                今すぐ購入する
                                <ChevronRight className="ml-2 h-5 w-5" />
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Empathy Section (Checklist) */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto fade-in">
                        <h2 className="text-2xl md:text-4xl font-light mb-12 text-center text-gray-900">
                            こんな対策、していませんか？
                        </h2>
                        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
                            <ul className="space-y-6">
                                {[
                                    "外出後すぐシャワーを浴びている",
                                    "玄関前で服をはたき、部屋に持ち込まない",
                                    "空気清浄機を常に強運転にしている",
                                    "薬に頼ってなんとか過ごしている",
                                    "それでも、家の中で鼻が止まらない"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start gap-4">
                                        <div className="mt-1 min-w-[24px]">
                                            <CheckCircle className="w-6 h-6 text-blue-500" />
                                        </div>
                                        <span className="text-lg text-gray-800">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Problem Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center gap-16 max-w-6xl mx-auto">
                        <div className="w-full md:w-1/2 fade-in">
                            <h2 className="text-3xl md:text-5xl font-light mb-8 leading-tight text-gray-900">
                                実は恐ろしい、<br />
                                <span className="font-bold">「室内再拡散」</span>
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                外から持ち込まれた花粉は、床や家具、カーペットに付着します。<br />
                                人が動くたび、ドアを開けるたび、それらは再び舞い上がり、あなたを苦しめます。
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                一般的な空気清浄機が「吸い込む」のを待っている間にも、<br />
                                花粉は室内を漂い続けているのです。
                            </p>
                        </div>
                        <div className="w-full md:w-1/2 fade-in flex justify-center">
                            <div className="w-full max-w-lg aspect-square relative rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src="/images/hayfever/problem.png"
                                    alt="室内の花粉再拡散イメージ"
                                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                                    <p className="text-white font-bold text-xl flex items-center gap-2">
                                        <AlertTriangle className="text-red-500 w-6 h-6" />
                                        見えない脅威「再拡散」
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Solution Section */}
            <section className="py-24 bg-clean-gray text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gray-900 z-0">
                    <img
                        src="/images/hayfever/solution.png"
                        alt="Ion Decomposition Technology"
                        className="w-full h-full object-cover opacity-20 mix-blend-screen"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-transparent to-gray-900"></div>
                </div>
                {/* Optional: Add a subtle overlay or image here */}

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h2 className="text-3xl md:text-5xl font-light mb-16 fade-in text-white">
                        「吸う」から「分解する」へ。<br />
                        AirFuture mini の革新。
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: <Wind className="w-10 h-10 text-blue-300" />,
                                title: "イオン放出",
                                desc: "部屋中に高濃度イオンを放出。待ち構えるのではなく、攻めの空気清浄。"
                            },
                            {
                                icon: <Shield className="w-10 h-10 text-blue-300" />,
                                title: "微粒子分解",
                                desc: "花粉のタンパク質を直接分解・不活化。ただ集めるだけではありません。"
                            },
                            {
                                icon: <XCircle className="w-10 h-10 text-blue-300" />,
                                title: "再拡散抑制",
                                desc: "床や壁に付着した花粉にも作用し、舞い上がりによる再拡散を防ぎます。"
                            },
                            {
                                icon: <CheckCircle className="w-10 h-10 text-blue-300" />,
                                title: "24時間稼働",
                                desc: "静音・省エネ設計だから、寝ている間もずっとあなたを守り続けます。"
                            },
                        ].map((feature, idx) => (
                            <div key={idx} className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/10 fade-in hover:bg-white/20 transition-all">
                                <div className="mb-6 flex justify-center">{feature.icon}</div>
                                <h3 className="text-xl font-bold mb-4 text-blue-100">{feature.title}</h3>
                                <p className="text-gray-300 text-sm leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Medicine Problem Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <div className="max-w-4xl mx-auto fade-in">
                        <h2 className="text-3xl md:text-4xl font-light mb-8 text-gray-900">
                            薬に頼らない毎日を。
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-12">
                            花粉症の薬による眠気、集中力の低下。<br />
                            仕事や勉強のパフォーマンスが落ちてしまうことに、悩んでいませんか？<br />
                            AirFuture mini は、薬に頼らずとも快適に過ごせる「清浄空間」を作り出します。
                        </p>
                    </div>
                </div>
            </section>

            {/* Family Value Section */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-16">
                        <div className="w-full md:w-1/2 fade-in">
                            <h2 className="text-3xl md:text-5xl font-light mb-8 leading-tight text-gray-900">
                                大切な家族の<br />
                                時間を守る。
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                受験勉強に励むお子様。<br />
                                自宅で集中して働きたいあなた。<br />
                                抵抗力の弱い小さなお子様や高齢のご家族。
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                家の中だけは、花粉を忘れて心から安らげる場所に。<br />
                                AirFuture mini が、家族全員の健やかな生活をサポートします。
                            </p>
                        </div>
                        <div className="w-full md:w-1/2 fade-in">
                            <div className="bg-white p-2 rounded-2xl shadow-xl border border-gray-100 aspect-video overflow-hidden relative group">
                                <img
                                    src="/images/hayfever/family.png"
                                    alt="快適なリビングでくつろぐ家族"
                                    className="w-full h-full object-cover rounded-xl transform group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 shadow-sm">
                                    <Smile className="w-5 h-5 text-blue-500" />
                                    <span className="text-gray-800 text-sm font-bold">安心の空間</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h2 className="text-3xl md:text-4xl font-light mb-16 text-center text-gray-900 fade-in">
                        よくあるご質問
                    </h2>

                    <div className="space-y-8 fade-in">
                        {[
                            {
                                q: "Q1. 市販の空気清浄機との違いは何ですか？",
                                a: "一般的な空気清浄機は、空気を吸引してフィルターでろ過する方式です。そのため、部屋の隅々まで清浄するのに時間がかかります。AirFuture miniは、イオンを放出して空気中の花粉を直接分解・除去するアクティブな方式を採用しており、部屋全体の空気を素早く清浄します。"
                            },
                            {
                                q: "Q2. 強運転しても効果を感じないことがあるのはなぜですか？",
                                a: "吸引式の空気清浄機の場合、床や壁に付着した花粉が舞い上がる「再拡散」が原因で、空気が汚れ続けることがあります。AirFuture miniはイオンが空間全体に行き渡り、付着した花粉にも作用するため、再拡散のリスクを大幅に抑制できます。"
                            },
                            {
                                q: "Q3. 寝室でも使えますか？",
                                a: "はい、お使いいただけます。静音設計となっているため、就寝中も音を気にせず稼働させることができます。快適な睡眠環境をサポートします。"
                            },
                            {
                                q: "Q4. 安全性は大丈夫ですか？",
                                a: "人体やペット、小さなお子様、ご高齢の方にも優しい設計となっております。オゾン濃度なども安全基準を満たしておりますので、安心して24時間ご使用いただけます。"
                            }
                        ].map((faq, idx) => (
                            <div key={idx} className="bg-gray-50 p-8 rounded-xl">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">{faq.q}</h3>
                                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Integration Section */}
            <section className="py-24 bg-gray-900 text-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-5xl font-light mb-12 fade-in">
                        この春は、<br />
                        家の空気で深呼吸。
                    </h2>
                    <div className="flex flex-col md:flex-row gap-6 justify-center fade-in">
                        <Button onClick={handleCTAClick} className="bg-white text-gray-900 hover:bg-gray-100 px-10 py-5 text-xl rounded-full transition-colors">
                            AirFuture mini の全性能を見る
                        </Button>
                        <Button onClick={() => trackBuy('footer')} className="bg-blue-600 text-white hover:bg-blue-500 px-10 py-5 text-xl rounded-full transition-colors">
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
