"use client"

import { useState, useEffect, useRef } from "react"
import LuxuryBackground from "./luxury-background"

export default function VideoIntro({ onComplete }: { onComplete: () => void }) {
    const [isMounted, setIsMounted] = useState(false)
    const [isFadingOut, setIsFadingOut] = useState(false)
    const videoRef = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        setIsMounted(true)

        // 予備のタイマー（万が一動画が再生されない場合用）
        const timer = setTimeout(() => {
            // 30秒経っても終わらなければ強制終了
        }, 30000)

        return () => clearTimeout(timer)
    }, [])

    const handleVideoEnd = () => {
        if (isFadingOut) return
        setIsFadingOut(true)
        setTimeout(() => {
            onComplete()
        }, 1000) // フェードアウトの時間
    }

    return (
        <div
            className={`fixed inset-0 z-[100] bg-black flex items-center justify-center transition-opacity duration-1000 ease-in-out ${isMounted ? "opacity-100" : "opacity-0"
                } ${isFadingOut ? "opacity-0 pointer-events-none" : ""}`}
        >
            <LuxuryBackground />

            <div className="relative w-full h-full flex items-center justify-center z-10">
                <video
                    ref={videoRef}
                    src="/videos/out.mp4"
                    autoPlay
                    muted
                    playsInline
                    onEnded={handleVideoEnd}
                    className="w-full h-full object-contain"
                />

                {/* スキップボタン */}
                <button
                    onClick={handleVideoEnd}
                    className="absolute bottom-12 right-12 text-white/40 hover:text-white/80 text-xs tracking-[0.3em] uppercase transition-all duration-300 border-b border-white/20 pb-1"
                >
                    Skip
                </button>
            </div>
        </div>
    )
}
