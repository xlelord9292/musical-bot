"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  color: string
  opacity: number
  fadeSpeed: number
}

export function MusicParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Particle[] = []
    const colors = ["#ff3131", "#ff5555", "#ff7777", "#ff9999", "#ff3131"]

    const createParticle = () => {
      if (particles.length > 100) return

      const size = Math.random() * 5 + 1
      const x = Math.random() * canvas.width
      const y = Math.random() * canvas.height
      const speedX = Math.random() * 1 - 0.5
      const speedY = Math.random() * 1 - 0.5
      const color = colors[Math.floor(Math.random() * colors.length)]
      const opacity = Math.random() * 0.5 + 0.1
      const fadeSpeed = Math.random() * 0.01 + 0.005

      particles.push({
        x,
        y,
        size,
        speedX,
        speedY,
        color,
        opacity,
        fadeSpeed,
      })
    }

    const updateParticles = () => {
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        p.x += p.speedX
        p.y += p.speedY
        p.opacity -= p.fadeSpeed

        if (p.opacity <= 0) {
          particles.splice(i, 1)
          i--
        }
      }
    }

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const p of particles) {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle =
          p.color +
          Math.floor(p.opacity * 255)
            .toString(16)
            .padStart(2, "0")
        ctx.fill()
      }
    }

    const particleInterval = setInterval(createParticle, 100)

    let animationFrameId: number

    const animate = () => {
      updateParticles()
      drawParticles()
      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      clearInterval(particleInterval)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />
}

