"use client" // trigger deploy

import { useEffect, useRef } from "react"

export default function LuxuryBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // キラキラエフェクトのアニメーション
  useEffect(() => {
    const container = containerRef.current
    const canvas = canvasRef.current
    if (!container || !canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // キャンバスサイズをコンテナに合わせる
    const resizeCanvas = () => {
      canvas.width = container.clientWidth
      canvas.height = container.clientHeight
    }

    // 初期サイズ設定
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // キラキラ粒子の設定
    const particles: {
      x: number
      y: number
      size: number
      speed: number
      opacity: number
      color: string
    }[] = []

    // 粒子を生成
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speed: Math.random() * 0.5 + 0.2,
        opacity: Math.random() * 0.5 + 0.3,
        color: `rgba(${230 + Math.random() * 25}, ${198 + Math.random() * 25}, ${115 + Math.random() * 25}, 1)`,
      })
    }

    // アニメーションフレーム
    let animationId: number
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // 粒子を描画
      particles.forEach((particle, i) => {
        ctx.fillStyle = particle.color
        ctx.globalAlpha = particle.opacity
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()

        // 粒子を上に移動
        particle.y -= particle.speed

        // わずかな横揺れ
        particle.x += Math.sin(Date.now() / 1000 + i) * 0.2

        // 画面外に出たら下に戻す
        if (particle.y < -10) {
          particle.y = canvas.height + 10
          particle.x = Math.random() * canvas.width
        }
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 bg-black overflow-hidden">
      {/* メイン背景画像 */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center opacity-70"
        style={{
          // backgroundImage: "url('/images/luxury-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* キラキラエフェクト用キャンバス */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-10 opacity-40" />

      {/* グラデーションオーバーレイ */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70 z-20"></div>

      {/* 高級感を演出する光の効果 */}
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200px] bg-gradient-radial from-gold-light/20 to-transparent opacity-30 blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-[200%] h-[200px] bg-gradient-radial from-gold-light/10 to-transparent opacity-20 blur-3xl"></div>
    </div>
  )
}
