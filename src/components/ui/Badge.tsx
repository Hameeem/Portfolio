import { cn } from '../../lib/utils'

export function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-mono border border-[var(--color-line)] text-[var(--color-mist)] bg-[var(--color-surface-2)]/90 hover:text-[var(--color-ivory)] hover:border-[var(--color-cyan-soft)]/50 transition-all',
        className
      )}
    >
      {children}
    </span>
  )
}
