import { motion } from 'framer-motion'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export function SectionHeading({ eyebrow, title, description, align = 'left' }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={align === 'center' ? 'text-center mx-auto max-w-2xl' : ''}
    >
      <span className="font-mono text-xs tracking-[0.25em] uppercase text-[var(--color-signal-soft)]">
        {eyebrow}
      </span>
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold mt-3 tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-[var(--color-mist)] text-base sm:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  )
}
