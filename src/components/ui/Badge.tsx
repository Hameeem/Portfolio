import { cn } from '../../lib/utils'

export function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-xs font-mono border border-[var(--color-line)] text-[var(--color-mist)] bg-[var(--color-surface-2)]',
        className
      )}
    >
      {children}
    </span>
  )
}
