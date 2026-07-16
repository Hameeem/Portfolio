import { useEffect, useRef, useState } from 'react'

/** Custom cursor: a small dot plus a lagging ring. Disabled on touch devices. */
export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null)
  const ringRef = useRef<HTMLDivElement | null>(null)
  const [enabled, setEnabled] = useState(false)
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches
    setEnabled(!isTouch)
  }, [])

  useEffect(() => {
    if (!enabled) return

    let ringX = 0
    let ringY = 0
    let mouseX = 0
    let mouseY = 0
    let raf: number

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
      }
      const target = e.target as HTMLElement
      setHovering(!!target.closest('a, button, [data-cursor-hover]'))
    }

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.18
      ringY += (mouseY - ringY) * 0.18
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`
      }
      raf = requestAnimationFrame(animateRing)
    }

    window.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(animateRing)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[90] w-1.5 h-1.5 rounded-full bg-[var(--color-signal-soft)] -translate-x-1/2 -translate-y-1/2 hidden md:block"
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-[90] rounded-full border border-[var(--color-violet-soft)]/60 -translate-x-1/2 -translate-y-1/2 hidden md:block transition-[width,height,opacity] duration-200 ease-out"
        style={{
          width: hovering ? 44 : 28,
          height: hovering ? 44 : 28,
          opacity: hovering ? 0.9 : 0.5,
        }}
      />
    </>
  )
}
