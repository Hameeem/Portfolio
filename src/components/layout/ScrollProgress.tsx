import { useScrollProgress } from '../../hooks/useScrollProgress'

export function ScrollProgress() {
  const progress = useScrollProgress()
  return (
    <div className="fixed top-0 left-0 right-0 z-[70] h-[3px] bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-[var(--color-violet)] via-[var(--color-signal)] to-[var(--color-mint)] transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
