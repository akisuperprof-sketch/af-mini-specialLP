import React, { useEffect, useState } from 'react';
import LuxuryBackground from './components/LuxuryBackground';
import { ChevronRight, Shirt, Wind, Shield, CheckCircle, Dog, Sun, Moon, Car } from "lucide-react";

// Button Component
const Button = ({ children, onClick, className }) => (
  <button
    onClick={onClick}
    className={`flex items-center justify-center font-medium transition-all duration-300 ${className}`}
  >
    {children}
  </button>
);

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  // Intersection Observer for fade-in animations
  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 2000);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const fadeElements = document.querySelectorAll(".fade-in");
    fadeElements.forEach((el) => observer.observe(el));

    return () => {
      clearTimeout(timer);
      fadeElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const handleCTAClick = () => {
    window.open("https://forms.gle/yqDXi3TGwy4y3Qrg6", "_blank");
  };

  return (
    <main className="min-h-screen bg-white text-gray-900 overflow-x-hidden font-sans">
      {/* Floating CTA */}
      <div className="floating-cta-container">
        <Button onClick={handleCTAClick} className="clean-button px-6 py-3 text-sm md:text-base rounded-full border border-gray-100">
          ご購入・お問い合わせ
          <ChevronRight className="ml-1 h-4 w-4" />
        </Button>
      </div>

      {/* Hero Section (Flyer Style) */}
      <section className="relative min-h-screen flex flex-col items-center pt-32 pb-20 bg-white overflow-hidden">
        <LuxuryBackground />

        {/* Logo positioned absolute top-left of the section */}
        <div className="absolute top-6 left-6 z-50">
          <img src="/images/logo.jpg" alt="AirFuture mini" className="h-10 md:h-14 w-auto object-contain" />
        </div>

        <div className="container mx-auto px-4 z-10 relative pt-12 md:pt-0">
          {/* Header / Title Area */}
          <div className="text-center mb-12 fade-in">

            <h1 className="text-3xl md:text-6xl font-bold mb-6 clean-title text-gray-900 tracking-wide leading-tight mt-12 md:mt-0">
              空気を選ぶという、贅沢
            </h1>
            <p className="text-lg md:text-xl text-gray-700 font-medium">
              ハガキサイズで、空間の質を変える<br />AirFuture mini
            </p>
          </div>

          {/* Main Visual */}
          <div className="flex justify-center mb-16 fade-in">
            <img
              src="/images/hero-flyer.png"
              alt="AirFuture mini in a living room"
              className="w-full max-w-4xl shadow-2xl rounded-sm object-cover"
            />
          </div>

          {/* Four Key Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto fade-in">
            {/* Feature 1: Compact Design */}
            <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  </svg>
                </div>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">超小型<br />デザイン</h3>
              <p className="text-xs text-gray-600 text-left">デスクや棚に置けるコンパクトサイズ。<br />場所を選ばず設定可能。</p>
            </div>

            {/* Feature 2: Silent Design */}
            <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <Moon className="h-6 w-6 text-gray-700" />
                </div>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">静音<br />設計</h3>
              <p className="text-xs text-gray-600 text-left">寝室でも気にならない静音設計。<br />快適な睡眠環境を守ります。</p>
            </div>

            {/* Feature 3: Simple Operation */}
            <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <CheckCircle className="h-6 w-6 text-gray-700" />
                </div>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">簡単<br />操作</h3>
              <p className="text-xs text-gray-600 text-left">シンプルな操作パネルで、どなたでも直感的に使えます。</p>
            </div>

            {/* Feature 4: Simple Maintenance */}
            <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <Shield className="h-6 w-6 text-gray-700" />
                </div>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">簡単<br />メンテ</h3>
              <p className="text-xs text-gray-600 text-left">フィルター交換不要。<br />お手入れは簡単で、長く清潔に使えます。</p>
            </div>
          </div>

          <div className="text-center mt-12 fade-in">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 px-4">
              <span className="inline-block">あなたのパーソナルスペースに、</span>
              <span className="inline-block">常に整った空気を</span>
            </h3>
            <p className="text-sm text-gray-500 text-right max-w-4xl mx-auto">
              ※効果は使用環境により異なります。
            </p>
          </div>

        </div>
      </section>

      {/* Product Concept */}
      <section className="py-24 bg-clean-gray">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-16">
            <div className="w-full md:w-1/2 fade-in">
              <h2 className="text-4xl md:text-5xl font-light mb-10 tracking-wide text-gray-900 leading-tight">
                贅沢な空気を、<br />もっと美しく。
              </h2>
              <p className="text-lg mb-8 leading-relaxed text-gray-600">
                コンパクトなAirFutureが、<br className="hidden md:inline" />
                さらに小さくなりました。<br className="hidden md:inline" />
                750gの軽量で、<br className="hidden md:inline" />
                どこへでも持ち運び可能です。<br className="hidden md:inline" />
                ハガキサイズながら最大10畳に対応し、<br className="hidden md:inline" />
                家庭空間をクリーンルーム級の<br className="hidden md:inline" />
                空気環境に整えます。
              </p>
            </div>
            <div className="w-full md:w-1/2 fade-in text-center">
              <img src="/images/product-angle-cutout.png" alt="AirFuture MINI Angle" className="product-shadow mx-auto max-w-sm w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Scene: Pet (Living Room) */}
      <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <img
            src="/images/pet-scene.png"
            alt="Living room with pet"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/80 via-black/40 to-transparent z-0"></div>
        </div>
        <div className="container mx-auto px-4 relative z-20 flex flex-col justify-end h-full md:block pb-12 md:pb-0">
          <div className="max-w-xl text-white fade-in">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                <Dog className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-blue-100">大切な家族との時間</h3>
            </div>
            <h2 className="text-2xl md:text-5xl font-light mb-8 leading-tight tracking-wide">
              匂いも、不安も。<br />消え去る心地よさ。
            </h2>
            <p className="text-lg text-gray-200 leading-relaxed mb-8">
              愛犬や愛猫と過ごすリビング。<br className="hidden md:inline" />
              気になるペットの臭いをイオンクラスターが元から分解。<br className="hidden md:inline" />
              大切なお客様や家族だからこそ、<br className="hidden md:inline" />
              最上級の空気環境を用意したい。
            </p>
          </div>
        </div>
      </section>

      {/* Scene: Luxury Closet */}
      <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <img
            src="/images/closet-scene.png"
            alt="Luxury closet"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/80 via-black/40 to-transparent z-0"></div>
        </div>
        <div className="container mx-auto px-4 relative z-20 flex flex-col justify-end h-full md:block pb-12 md:pb-0">
          <div className="max-w-xl text-white fade-in">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-blue-100">資産を守る</h3>
            </div>
            <h2 className="text-2xl md:text-5xl font-light mb-8 leading-tight tracking-wide">
              美しさを、<br />永遠に保つために。
            </h2>
            <p className="text-lg text-gray-200 leading-relaxed mb-8">
              ウォークインクローゼットの大切なコレクション。<br className="hidden md:inline" />
              湿気やカビ、特有の臭いから貴方の資産を守ります。<br className="hidden md:inline" />
              置く場所を選ばないコンパクトさが、<br className="hidden md:inline" />
              美観を損なわず静かに寄り添います。
            </p>
          </div>
        </div>
      </section>

      {/* Scene: Luxury Car (Mobility) */}
      <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/car-interior-v2.png"
            alt="Luxury Car Interior with AirFuture Mini"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/80 via-black/40 to-transparent z-0"></div>
        </div>

        {/* Content Overlay */}
        <div className="container mx-auto px-4 relative z-20 flex flex-col justify-end h-full md:block pb-12 md:pb-0">
          <div className="max-w-xl text-white fade-in">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                <Car className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-blue-100">移動を極上の時間に</h3>
            </div>
            <h2 className="text-2xl md:text-5xl font-light mb-8 leading-tight tracking-wide">
              密閉された空間こそ、<br />最上の空気を。
            </h2>
            <p className="text-lg text-gray-200 leading-relaxed mb-8">
              車内のニオイや外気からの汚染物質をシャットアウト。<br className="hidden md:inline" />
              高級車の静寂な空間を、<br className="hidden md:inline" />
              森林のような清々しい空気で満たします。<br className="hidden md:inline" />
              移動時間さえも、リフレッシュのための<br className="hidden md:inline" />
              贅沢なひとときに変わります。
            </p>
          </div>
        </div>
      </section>

      {/* Scene: Bedroom (Sleeping) */}
      <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <img
            src="/images/bedroom-scene.png"
            alt="Sleeping woman with blue ions"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/80 via-black/40 to-transparent z-0"></div>
        </div>
        <div className="container mx-auto px-4 relative z-20 flex flex-col justify-end h-full md:block pb-12 md:pb-0">
          <div className="max-w-xl text-white fade-in ml-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                <Moon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-blue-100">極上の睡眠</h3>
            </div>
            <h2 className="text-2xl md:text-5xl font-light mb-8 leading-tight tracking-wide">
              目覚めるたび、<br />生まれ変わる。
            </h2>
            <p className="text-lg text-gray-200 leading-relaxed mb-8">
              寝室の空気質は、睡眠の質そのもの。<br className="hidden md:inline" />
              枕元に置いても気にならない静音設計。<br className="hidden md:inline" />
              青いイオンの光とともに、<br className="hidden md:inline" />
              深い安らぎへといざないます。<br className="hidden md:inline" />
              朝、澄み切った空気で目覚める贅沢を。
            </p>
          </div>
        </div>
      </section>

      {/* Scene: Pollen (Window) */}
      <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <img
            src="/images/pollen-scene.png"
            alt="Woman enjoying spring view free of pollen"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/80 via-black/40 to-transparent z-0"></div>
        </div>
        <div className="container mx-auto px-4 relative z-20 flex flex-col justify-end h-full md:block pb-12 md:pb-0">
          <div className="max-w-xl text-white fade-in">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                <Sun className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-blue-100">季節を愉しむ</h3>
            </div>
            <h2 className="text-2xl md:text-5xl font-light mb-8 leading-tight tracking-wide">
              もう、<br />季節に怯えない。
            </h2>
            <p className="text-lg text-gray-200 leading-relaxed mb-8">
              窓の外がどんな季節でも、<br className="hidden md:inline" />
              室内は常に聖域（サンクチュアリ）。<br className="hidden md:inline" />
              花粉や有害物質を強力に除去し、<br className="hidden md:inline" />
              深呼吸できる空間を作り出します。<br className="hidden md:inline" />
              春の陽射しを、心から楽しめる毎日へ。
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-light mb-16 text-center tracking-wide text-gray-900 leading-tight fade-in">
            「日々の生活に、<br />
            静かに寄り添う清浄力。」
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center fade-in p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white shadow-md">
                  <Shirt className="h-8 w-8 text-gray-800" />
                </div>
              </div>
              <h3 className="text-lg mb-4 font-bold text-gray-900">
                クローゼット・靴箱のカビ臭除去
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                大切な衣類や靴を臭いやカビから守ります。<br />
                ハガキサイズのコンパクトさで、<br />
                どんな場所にも設置可能です。
              </p>
            </div>

            <div className="text-center fade-in p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white shadow-md">
                  <Wind className="h-8 w-8 text-gray-800" />
                </div>
              </div>
              <h3 className="text-lg mb-4 font-bold text-gray-900">
                ペット臭への対応
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                ペットと快適に暮らすための空間づくりをサポートします。<br />
                イオンクラスター技術で臭いの元から分解します。
              </p>
            </div>

            <div className="text-center fade-in p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white shadow-md">
                  <Shield className="h-8 w-8 text-gray-800" />
                </div>
              </div>
              <h3 className="text-lg mb-4 font-bold text-gray-900">
                アレルギー・<br className="md:hidden" />家庭内クラスター対策
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                花粉やハウスダストなどのアレルゲンを軽減し、<br />
                ご家庭でのクラスター感染リスクを低減します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-24 bg-clean-gray">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-light mb-16 text-center tracking-wide text-gray-900 fade-in">
            製品仕様
          </h2>

          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl fade-in overflow-hidden border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 border-b md:border-r border-gray-100">
                <p className="text-sm text-gray-500 mb-2 font-bold uppercase tracking-wider">搭載素子</p>
                <p className="text-gray-900 font-medium">AIO-2 イオンクラスター発生素子（1本）</p>
              </div>
              <div className="p-8 border-b border-gray-100">
                <p className="text-sm text-gray-500 mb-2 font-bold uppercase tracking-wider">消費電力</p>
                <p className="text-gray-900 font-medium">3W（弱）/ 4W（中）/ 6W（強）</p>
              </div>
              <div className="p-8 border-b md:border-r border-gray-100">
                <p className="text-sm text-gray-500 mb-2 font-bold uppercase tracking-wider">適用床面積</p>
                <p className="text-gray-900 font-medium">
                  約10畳（約18㎡）<br />
                  <span className="text-xs text-gray-400 font-normal">※使用環境により異なる場合があります。</span>
                </p>
              </div>
              <div className="p-8 border-b border-gray-100">
                <p className="text-sm text-gray-500 mb-2 font-bold uppercase tracking-wider">重量</p>
                <p className="text-gray-900 font-medium">約750g</p>
              </div>
              <div className="p-8 border-b md:border-b-0 md:border-r border-gray-100">
                <p className="text-sm text-gray-500 mb-2 font-bold uppercase tracking-wider">使用電源</p>
                <p className="text-gray-900 font-medium">DC12V ACアダプター</p>
              </div>
              <div className="p-8">
                <p className="text-sm text-gray-500 mb-2 font-bold uppercase tracking-wider">寸法</p>
                <p className="text-gray-900 font-medium">高160mm × 幅120mm × 奥行76mm</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-12 tracking-wide text-gray-900 fade-in">
            お問い合わせ
          </h2>

          <Button onClick={handleCTAClick} className="clean-button px-12 py-5 text-xl rounded-full mb-16 fade-in mx-auto hover:bg-black">
            申込ページへ
            <ChevronRight className="ml-2 h-6 w-6" />
          </Button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center fade-in text-gray-600">
            <div className="p-6 bg-gray-50 rounded-xl">
              <p className="text-gray-900 font-bold mb-2">メール</p>
              <p>info@w-c-air.com</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl">
              <p className="text-gray-900 font-bold mb-2">電話</p>
              <p>03-4520-1345</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl">
              <p className="text-gray-900 font-bold mb-2">住所</p>
              <p className="text-sm">〒108-0014 東京都港区芝4-5-12 三田ハイツ901</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-500">© 2026 AirFuture. All Rights Reserved.</p>
        </div>
      </footer>
    </main>
  );
}
