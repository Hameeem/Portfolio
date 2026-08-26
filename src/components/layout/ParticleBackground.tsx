import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  r: number
  vx: number
  vy: number
  color: string
}

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches
    const isSmallScreen = window.innerWidth < 768
    if (prefersReducedMotion || isCoarsePointer || isSmallScreen) return

    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const COLORS = ['#00f0ff', '#38bdf8', '#8b5cf6', '#c084fc', '#10b981']
    const COUNT = Math.min(55, Math.floor((width * height) / 28000))
    const particles: Particle[] = Array.from({ length: COUNT }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.8 + 0.8,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    }))

    let raf: number

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      // Draw constellation links between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            const alpha = (1 - dist / 120) * 0.18
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`
            ctx.lineWidth = 0.6
            ctx.stroke()
          }
        }
      }

      // Draw particles with glow
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) p.x = width
        if (p.x > width) p.x = 0
        if (p.y < 0) p.y = height
        if (p.y > height) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.shadowBlur = 10
        ctx.shadowColor = p.color
        ctx.fill()
        ctx.shadowBlur = 0
      })
      raf = requestAnimationFrame(draw)
    }
    draw()

    const onResize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none opacity-80"
      aria-hidden="true"
    />
  )
}
