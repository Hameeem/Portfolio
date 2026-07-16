import { motion } from 'framer-motion'
import { FiAward } from 'react-icons/fi'
import { SectionHeading } from '../ui/SectionHeading'
import { GlassCard } from '../ui/GlassCard'
import { certifications } from '../../data/certifications'

export function Certifications() {
  return (
    <section id="certifications" className="relative py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading eyebrow="05 — Certifications" title="Formal ground covered." />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            >
              <GlassCard className="p-6 h-full flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--color-violet)]/20 to-[var(--color-signal)]/20 flex items-center justify-center text-[var(--color-signal-soft)] shrink-0">
                  <FiAward size={17} />
                </div>
                <p className="font-medium text-sm sm:text-base leading-snug pt-1.5">{cert.title}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
