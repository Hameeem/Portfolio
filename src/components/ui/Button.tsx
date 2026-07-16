import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '../../lib/utils'

type Variant = 'primary' | 'ghost' | 'outline'
type Size = 'sm' | 'md' | 'lg'

interface SharedProps {
  variant?: Variant
  size?: Size
  icon?: ReactNode
  className?: string
  children?: ReactNode
}

type ButtonAsButton = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { as?: 'button'; href?: undefined }

type ButtonAsAnchor = SharedProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { as: 'a'; href: string }

type ButtonProps = ButtonAsButton | ButtonAsAnchor

const base =
  'inline-flex items-center gap-2 font-medium rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 whitespace-nowrap'

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}

const variants: Record<Variant, string> = {
  primary:
    'text-white bg-gradient-to-r from-[var(--color-violet)] to-[var(--color-signal)] shadow-[0_0_0_0_rgba(139,92,246,0.4)] hover:shadow-[0_8px_30px_-6px_rgba(139,92,246,0.55)] hover:-translate-y-0.5',
  outline:
    'border border-[var(--color-line)] text-[var(--color-ivory)] hover:border-[var(--color-violet-soft)] hover:-translate-y-0.5',
  ghost: 'text-[var(--color-mist)] hover:text-[var(--color-ivory)]',
}

export function Button(props: ButtonProps) {
  const { variant = 'primary', size = 'md', icon, className, children } = props
  const classes = cn(base, sizes[size], variants[variant], className)

  if (props.as === 'a') {
    const { as: _as, variant: _v, size: _s, icon: _i, className: _c, children: _ch, ...anchorProps } = props
    return (
      <a className={classes} {...anchorProps}>
        {icon}
        {children}
      </a>
    )
  }

  const { as: _as, variant: _v, size: _s, icon: _i, className: _c, children: _ch, ...buttonProps } = props
  return (
    <button className={classes} {...buttonProps}>
      {icon}
      {children}
    </button>
  )
}
