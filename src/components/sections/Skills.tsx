import { motion } from 'framer-motion'
import {
  FiCode, FiLayers, FiBox, FiTool, FiDatabase, FiCpu,
} from 'react-icons/fi'
import { SectionHeading } from '../ui/SectionHeading'
import { GlassCard } from '../ui/GlassCard'
import { skillGroups } from '../../data/skills'

const ICONS: Record<string, React.ComponentType<{ size?: number }>> = {
  code: FiCode,
  layers: FiLayers,
  box: FiBox,
  tool: FiTool,
  database: FiDatabase,
  cpu: FiCpu,
}

export function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="02 — Toolkit"
          title="What I build with."
          description="Grouped by how I actually reach for them — from core languages to the big-data tools behind DataFlowX."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {skillGroups.map((group, i) => {
            const Icon = ICONS[group.icon] ?? FiCode
            return (
              <motion.div
                key={group.group}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              >
                <GlassCard className="p-6 h-full group">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--color-violet)]/20 to-[var(--color-signal)]/20 flex items-center justify-center text-[var(--color-signal-soft)] mb-4 group-hover:scale-110 transition-transform">
                    <Icon size={18} />
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-3">{group.group}</h3>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs font-mono px-2.5 py-1 rounded-md bg-[var(--color-surface-2)] text-[var(--color-mist)] border border-[var(--color-line)]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
