"use client"

import { useEffect, useRef } from "react"

export function MusicWaveform() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const bars = Math.floor(canvas.width / 10)
    const barWidth = 4
    const barGap = 6
    const barHeightMultiplier = 0.5

    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
    gradient.addColorStop(0, "rgba(255, 49, 49, 0.8)")
    gradient.addColorStop(1, "rgba(255, 49, 49, 0.2)")

    let animationFrameId: number

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < bars; i++) {
        const x = i * (barWidth + barGap)
        const height = Math.sin(i * 0.05 + Date.now() * 0.001) * 50 * barHeightMultiplier + 30
        const y = canvas.height / 2 - height / 2

        ctx.fillStyle = gradient
        ctx.fillRect(x, y, barWidth, height)
      }

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 opacity-30" />
}

