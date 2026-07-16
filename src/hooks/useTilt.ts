import { useRef } from 'react'

/** Lightweight 3D tilt effect on mouse move, no external dependency. */
export function useTilt<T extends HTMLElement>(intensity = 10) {
  const ref = useRef<T | null>(null)

  const onMouseMove = (e: React.MouseEvent<T>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    el.style.transform = `perspective(900px) rotateX(${(-y * intensity).toFixed(2)}deg) rotateY(${(x * intensity).toFixed(2)}deg) translateZ(0)`
  }

  const onMouseLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0)'
  }

  return { ref, onMouseMove, onMouseLeave }
}
