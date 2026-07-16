import { motion } from 'framer-motion'
import { FiBookOpen } from 'react-icons/fi'
import { SectionHeading } from '../ui/SectionHeading'
import { GlassCard } from '../ui/GlassCard'
import { education } from '../../data/education'

export function Education() {
  return (
    <section id="education" className="relative py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading eyebrow="07 — Education" title="Academic background." />

        <div className="space-y-5 mt-12">
          {education.map((ed, i) => (
            <motion.div
              key={ed.institution}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <GlassCard className="p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[var(--color-violet)]/20 to-[var(--color-signal)]/20 flex items-center justify-center text-[var(--color-signal-soft)] shrink-0">
                  <FiBookOpen size={18} />
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-semibold text-base sm:text-lg">{ed.institution}</h3>
                  <p className="text-sm text-[var(--color-mist)] mt-0.5">{ed.degree}</p>
                </div>
                <div className="text-left sm:text-right shrink-0">
                  <div className="font-mono text-sm text-[var(--color-ivory)]">{ed.score}</div>
                  {ed.period && <div className="text-xs text-[var(--color-mist-dim)] mt-0.5">{ed.period}</div>}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
