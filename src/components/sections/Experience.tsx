import { motion } from 'framer-motion'
import { FiCheck } from 'react-icons/fi'
import { SectionHeading } from '../ui/SectionHeading'
import { GlassCard } from '../ui/GlassCard'
import { experience } from '../../data/experience'

export function Experience() {
  return (
    <section id="experience" className="relative py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading eyebrow="04 — Experience" title="Where I've applied it." />

        <div className="mt-12 space-y-6">
          {experience.map((exp, i) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <GlassCard className="p-7 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-5">
                  <div>
                    <h3 className="font-display text-xl font-semibold">{exp.role}</h3>
                    <p className="text-sm text-[var(--color-mist)] mt-1">{exp.org}</p>
                  </div>
                  <span className="font-mono text-xs text-[var(--color-mist-dim)] shrink-0">{exp.period}</span>
                </div>
                <ul className="grid sm:grid-cols-2 gap-2.5">
                  {exp.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-[var(--color-mist)]">
                      <FiCheck className="text-[var(--color-mint)] mt-0.5 shrink-0" size={14} />
                      {p}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
