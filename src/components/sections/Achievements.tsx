import { motion } from 'framer-motion'
import { FiAward } from 'react-icons/fi'
import { SectionHeading } from '../ui/SectionHeading'
import { achievements } from '../../data/achievements'

export function Achievements() {
  return (
    <section id="achievements" className="relative py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading eyebrow="06 — Achievements" title="Milestones along the way." />

        <div className="mt-14 relative">
          <div className="absolute left-[19px] sm:left-1/2 top-0 bottom-0 w-px bg-[var(--color-line)] sm:-translate-x-1/2" />

          <div className="space-y-10">
            {achievements.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`relative flex items-start gap-5 sm:w-1/2 ${
                  i % 2 === 0 ? 'sm:pr-10' : 'sm:ml-auto sm:pl-10 sm:flex-row-reverse sm:text-right'
                }`}
              >
                <div className="w-10 h-10 rounded-full glass-strong flex items-center justify-center text-[var(--color-violet-soft)] shrink-0 z-10">
                  <FiAward size={16} />
                </div>
                <div className="glass rounded-2xl p-5 flex-1">
                  <h3 className="font-display font-semibold text-base">{a.title}</h3>
                  <p className="text-sm text-[var(--color-mist)] mt-1.5 leading-relaxed">{a.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
