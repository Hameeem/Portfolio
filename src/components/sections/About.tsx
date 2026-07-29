import { motion } from 'framer-motion'
import { SectionHeading } from '../ui/SectionHeading'
import { GlassCard } from '../ui/GlassCard'
import { useCountUp } from '../../hooks/useCountUp'

const FOCUS_AREAS = [
  'Artificial Intelligence',
  
  'Data Analyst',
  'Data Engineering',
  'GenAI',
  'Problem Solving',
]

const STATS = [
  { label: 'Projects shipped', value: 8, suffix: '+' },
  { label: 'Semesters completed', value: 6, suffix: '' },
  { label: 'Skill areas', value: 6, suffix: '' },
  { label: 'Certifications', value: 5, suffix: '' },
]

function Stat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { ref, value: current } = useCountUp(value)
  return (
    <div>
      <div className="font-display text-3xl sm:text-4xl font-semibold text-gradient">
        <span ref={ref}>{current}</span>
        {suffix}
      </div>
      <div className="text-xs sm:text-sm text-[var(--color-mist)] mt-1">{label}</div>
    </div>
  )
}

export function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="01 — About"
          title="Building software that works end to end."
          description=""
        />

        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 mt-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[var(--color-mist)] text-base sm:text-lg leading-relaxed">
              I'm a Computer Science Engineering student who cares less about knowing a
              technology and more about what it lets me build. That's pulled me toward
              the intersection of <span className="text-[var(--color-ivory)]">data
              engineering</span>, <span className="text-[var(--color-ivory)]">AI</span>,
              and <span className="text-[var(--color-ivory)]">full-stack development</span> —
              disciplines that all come down to the same question: how do you take
              something raw and messy and turn it into something reliable?
            </p>
            <p className="mt-5 text-[var(--color-mist)] text-base sm:text-lg leading-relaxed">
              That question is what led to <span className="text-[var(--color-ivory)]">DataFlowX</span>,
              my flagship project — an end-to-end platform that automates ingestion,
              validation, transformation, orchestration, and monitoring for real datasets.
              Outside of it, I'm usually deep in a new library, a Kaggle dataset, or an
              AI-assisted workflow, learning by building rather than just reading docs.
            </p>

            <div className="flex flex-wrap gap-2.5 mt-7">
              {FOCUS_AREAS.map((area, i) => (
                <motion.span
                  key={area}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-mono border border-[var(--color-line)] text-[var(--color-mist)] hover:border-[var(--color-violet-soft)] hover:text-[var(--color-ivory)] transition-colors"
                >
                  {area}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <GlassCard className="p-7 grid grid-cols-2 gap-7 h-fit">
            {STATS.map((s) => (
              <Stat key={s.label} {...s} />
            ))}
          </GlassCard>
        </div>
      </div>
    </section>
  )
}
