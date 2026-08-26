import { motion } from 'framer-motion'
import { SectionHeading } from '../ui/SectionHeading'
import { GlassCard } from '../ui/GlassCard'
import { useCountUp } from '../../hooks/useCountUp'

const FOCUS_AREAS = [
  'Full-Stack SaaS Architecture',
  'Data Engineering & Telemetry',
  'Artificial Intelligence & RAG',
  'Real-Time WebSockets & Telematics',
  'Machine Learning & Analytics',
  'Problem Solving',
]

const STATS = [
  { label: 'Projects shipped', value: 8, suffix: '+' },
  { label: 'Flagship SaaS apps', value: 2, suffix: '' },
  { label: 'Tech Stack Areas', value: 6, suffix: '' },
  { label: 'Certifications', value: 5, suffix: '' },
]

function Stat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { ref, value: current } = useCountUp(value)
  return (
    <div>
      <div className="font-display text-3xl sm:text-4xl font-bold text-gradient">
        <span ref={ref}>{current}</span>
        {suffix}
      </div>
      <div className="text-xs sm:text-sm font-mono text-[var(--color-mist)] mt-1">{label}</div>
    </div>
  )
}

export function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="01 — About"
          title="Building production software that works end to end."
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
              I'm a Computer Science Engineering student focused on building reliable software platforms — from multi-tenant <span className="text-[var(--color-ivory)] font-semibold">full-stack SaaS systems</span> to <span className="text-[var(--color-ivory)] font-semibold">data engineering pipelines</span> and <span className="text-[var(--color-ivory)] font-semibold">AI/RAG models</span>.
            </p>
            <p className="mt-5 text-[var(--color-mist)] text-base sm:text-lg leading-relaxed">
              My flagship platforms include <span className="text-[var(--color-cyan-soft)] font-semibold">FleetTrack</span> (a production multi-tenant fleet telematics SaaS with simulated live GPS tracking via WebSockets and Mapbox GL) and <span className="text-[var(--color-violet-soft)] font-semibold">DataFlowX</span> (an automated data ingestion, validation, and Airflow orchestration platform).
            </p>

            <div className="flex flex-wrap gap-2.5 mt-7">
              {FOCUS_AREAS.map((area, i) => (
                <motion.span
                  key={area}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-mono border border-[var(--color-line)] text-[var(--color-mist)] hover:border-[var(--color-cyan-soft)] hover:text-[var(--color-ivory)] hover:bg-[var(--color-cyan)]/10 transition-all cursor-default"
                >
                  {area}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <GlassCard className="p-7 grid grid-cols-2 gap-7 h-fit border-[var(--color-cyan-soft)]/20 shadow-xl">
            {STATS.map((s) => (
              <Stat key={s.label} {...s} />
            ))}
          </GlassCard>
        </div>
      </div>
    </section>
  )
}
