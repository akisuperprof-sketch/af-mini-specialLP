"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronRight, Shirt, Wind, Shield } from "lucide-react"
import LuxuryBackground from "@/components/luxury-background"

export default function Home() {
  // Intersection Observer for fade-in animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.1 },
    )

    const fadeElements = document.querySelectorAll(".fade-in")
    fadeElements.forEach((el) => observer.observe(el))

    return () => {
      fadeElements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  const handleCTAClick = () => {
    window.open("https://forms.gle/yqDXi3TGwy4y3Qrg6", "_blank")
  }

  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center luxury-bg overflow-hidden">
        <LuxuryBackground />

        {/* Hero Section のコンテンツ */}
        <div className="container mx-auto px-4 text-center z-30 relative">
          <h1 className="single-line-title fade-in gold-gradient-text">AirFuture MINI</h1>
          <p className="single-line-subtitle fade-in gold-text">「空気に、静寂という贅沢を。」</p>
          <Button onClick={handleCTAClick} className="gold-button px-10 py-6 text-lg rounded-none fade-in">
            この空気を体験する
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Product Concept */}
      <section className="py-32 luxury-bg-alt">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-16">
            <div className="w-full md:w-1/2 fade-in">
              <h2 className="text-4xl md:text-5xl font-light mb-10 tracking-wider gold-gradient-text leading-tight">
                「贅沢な空気を、
                <br />
                もっと美しく。」
              </h2>
              <p className="text-lg mb-8 leading-relaxed text-gray-300">
                コンパクトなAirFutureが、
                <br />
                さらに小さくなりました。
                <br />
                750gの軽量で、
                <br />
                どこへでも持ち運び可能です。
                <br />
                ハガキサイズながら最大10畳に対応し、
                <br />
                家庭空間をクリーンルーム級の
                <br />
                空気環境に整えます。
              </p>
            </div>
            <div className="w-full md:w-1/2 fade-in">
              <div className="product-angle-blend">
                <img src="/images/product-angle-cutout.png" alt="AirFuture MINI" className="product-angle-cutout" />
                <div className="bottom-glow"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Front View */}
      <section className="py-24 luxury-bg">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="fade-in">
              <div className="product-front-blend">
                <img
                  src="/images/product-front-cutout.png"
                  alt="AirFuture MINI Front View"
                  className="product-front-cutout"
                />
                <div className="bottom-glow"></div>
              </div>
            </div>
            <div className="fade-in">
              <h3 className="text-3xl md:text-4xl font-light mb-8 tracking-wider gold-text leading-tight">
                洗練された
                <br />
                デザイン
              </h3>
              <p className="text-lg mb-6 leading-relaxed text-gray-300">
                美しさと機能性を兼ね備えた
                <br />
                ミニマルデザイン。
                <br />
                スリットから放出される
                <br />
                イオンクラスターが空間全体をカバーし、
                <br />
                あらゆる場所に設置できる
                <br />
                コンパクトさを実現しました。
              </p>
              <div className="gold-border rounded-lg p-6 mt-8">
                <p className="gold-text mb-2 font-medium">寸法</p>
                <p className="text-gray-300">高160mm × 幅120mm × 奥行76mm</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Gallery */}
      <section className="py-24 luxury-bg-alt">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="fade-in">
              <h3 className="text-3xl md:text-4xl font-light mb-8 tracking-wider gold-text leading-tight">
                どこにでも
                <br />
                フィットする
                <br />
                コンパクトサイズ
              </h3>
              <p className="text-lg mb-6 leading-relaxed text-gray-300">
                ハガキサイズの小さなボディに
                <br />
                最先端の技術を凝縮。
                <br />
                クローゼット、デスク、車内など、
                <br />
                生活のあらゆるシーンで
                <br />
                清浄な空気をお届けします。
              </p>
            </div>
            <div className="fade-in">
              <div className="product-angle-blend">
                <img
                  src="/images/product-angle-cutout.png"
                  alt="AirFuture MINI Side View"
                  className="product-angle-cutout"
                />
                <div className="bottom-glow"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 luxury-bg">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-light mb-20 text-center tracking-wider fade-in gold-gradient-text leading-tight">
            「日々の生活に、
            <br />
            静かに寄り添う清浄力。」
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="text-center fade-in">
              <div className="flex justify-center mb-8">
                <div className="w-20 h-20 rounded-full flex items-center justify-center gold-border">
                  <Shirt className="h-10 w-10 gold-icon" />
                </div>
              </div>
              <h3 className="text-xl mb-6 gold-text font-medium leading-tight">
                クローゼット・靴箱の
                <br />
                カビ臭除去
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                大切な衣類や靴を
                <br />
                臭いやカビから守ります。
                <br />
                ハガキサイズのコンパクトさで、
                <br />
                どんな場所にも設置可能です。
              </p>
            </div>

            <div className="text-center fade-in">
              <div className="flex justify-center mb-8">
                <div className="w-20 h-20 rounded-full flex items-center justify-center gold-border">
                  <Wind className="h-10 w-10 gold-icon" />
                </div>
              </div>
              <h3 className="text-xl mb-6 gold-text font-medium leading-tight">
                ペット臭への
                <br />
                対応
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                ペットと快適に暮らすための
                <br />
                空間づくりをサポートします。
                <br />
                イオンクラスター技術で
                <br />
                臭いの元から分解します。
              </p>
            </div>

            <div className="text-center fade-in">
              <div className="flex justify-center mb-8">
                <div className="w-20 h-20 rounded-full flex items-center justify-center gold-border">
                  <Shield className="h-10 w-10 gold-icon" />
                </div>
              </div>
              <h3 className="text-xl mb-6 gold-text font-medium leading-tight">
                アレルギー・
                <br />
                家庭内クラスター対策
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                花粉やハウスダストなどの
                <br />
                アレルゲンを軽減し、
                <br />
                ご家庭でのクラスター感染
                <br />
                リスクを低減します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-32 luxury-bg-alt">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-light mb-20 text-center tracking-wider fade-in gold-gradient-text">
            製品仕様
          </h2>

          <div className="max-w-4xl mx-auto gold-border rounded-lg fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 border-b border-r border-[#C09C3F]/30">
                <p className="text-sm gold-text mb-2 font-medium">搭載素子</p>
                <p className="text-gray-300">AIO-2 イオンクラスター発生素子（1本）</p>
              </div>
              <div className="p-8 border-b border-[#C09C3F]/30">
                <p className="text-sm gold-text mb-2 font-medium">消費電力</p>
                <p className="text-gray-300">3W（弱）/ 4W（中）/ 6W（強）</p>
              </div>
              <div className="p-8 border-b border-r border-[#C09C3F]/30">
                <p className="text-sm gold-text mb-2 font-medium">適用床面積</p>
                <p className="text-gray-300">
                  約10畳（約18㎡）
                  <br />
                  ※使用環境により異なる場合があります。
                </p>
              </div>
              <div className="p-8 border-b border-[#C09C3F]/30">
                <p className="text-sm gold-text mb-2 font-medium">重量</p>
                <p className="text-gray-300">約750g</p>
              </div>
              <div className="p-8 border-r border-[#C09C3F]/30">
                <p className="text-sm gold-text mb-2 font-medium">使用電源</p>
                <p className="text-gray-300">DC12V ACアダプター</p>
              </div>
              <div className="p-8">
                <p className="text-sm gold-text mb-2 font-medium">寸法</p>
                <p className="text-gray-300">高160mm × 幅120mm × 奥行76mm</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 luxury-bg">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-12 tracking-wider fade-in gold-gradient-text">
            お問い合わせ
          </h2>


          <Button onClick={handleCTAClick} className="gold-button px-10 py-6 text-lg rounded-none mb-16 fade-in">
            申込ページへ
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center fade-in">
            <div className="gold-border rounded-lg p-6">
              <p className="gold-text mb-2 font-medium">メール</p>
              <p className="text-gray-300">info@w-c-air.com</p>
            </div>
            <div className="gold-border rounded-lg p-6">
              <p className="gold-text mb-2 font-medium">電話</p>
              <p className="text-gray-300">03-4520-1345</p>
            </div>
            <div className="gold-border rounded-lg p-6">
              <p className="text-sm gold-text mb-2 font-medium">住所</p>
              <p className="text-gray-300">〒108-0014 東京都港区芝4-5-12 三田ハイツ901</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-[#C09C3F]/20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} AirFuture. All Rights Reserved.</p>
        </div>
      </footer>
    </main>
  )
}
