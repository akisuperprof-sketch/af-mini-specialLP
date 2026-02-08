import { useEffect, useRef } from "react"

export default function LuxuryBackground() {
    const containerRef = useRef(null)
    const canvasRef = useRef(null)

    // Particle animation effect
    useEffect(() => {
        const container = containerRef.current
        const canvas = canvasRef.current
        if (!container || !canvas) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        // Resize canvas
        const resizeCanvas = () => {
            canvas.width = container.clientWidth
            canvas.height = container.clientHeight
        }

        resizeCanvas()
        window.addEventListener("resize", resizeCanvas)

        const particles = []

        // Generate particles
        for (let i = 0; i < 60; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 3 + 1,
                speed: Math.random() * 0.4 + 0.1,
                opacity: Math.random() * 0.4 + 0.1,
                // Subtle blue/gray particles
                color: `rgba(${180 + Math.random() * 50}, ${200 + Math.random() * 55}, ${255}, ${Math.random() * 0.5 + 0.2})`,
            })
        }

        let animationId
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            particles.forEach((particle, i) => {
                ctx.fillStyle = particle.color
                ctx.globalAlpha = particle.opacity
                ctx.beginPath()
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
                ctx.fill()

                particle.y -= particle.speed
                // Gentle side sway
                particle.x += Math.sin(Date.now() / 2000 + i) * 0.3

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
        <div ref={containerRef} className="absolute inset-0 z-0 bg-white overflow-hidden">
            {/* Main background */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-white via-blue-50/20 to-white z-0" />

            {/* Particle Canvas */}
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-10" />

            {/* Subtle glow */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-1/2 bg-gradient-radial from-blue-100/40 to-transparent opacity-60 blur-3xl z-0"></div>
        </div>
    )
}
