import type { HTMLAttributes } from 'react'
import { cn } from '../../lib/utils'

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  strong?: boolean
  hover?: boolean
}

export function GlassCard({ strong, hover = true, className, children, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        strong ? 'glass-strong' : 'glass',
        'rounded-2xl',
        hover && 'transition-all duration-300 hover:border-[var(--color-violet-soft)]/50',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
