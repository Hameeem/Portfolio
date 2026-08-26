import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { SectionHeading } from '../ui/SectionHeading'
import { ProjectCard } from '../ui/ProjectCard'
import { ProjectModal } from '../ui/ProjectModal'
import { projects } from '../../data/projects'
import type { Project, ProjectCategory } from '../../types'
import { cn } from '../../lib/utils'

const CATEGORIES: ('All' | ProjectCategory)[] = [
  'All', 'Web Development', 'Data Engineering', 'AI', 'Machine Learning', 'Python', 'Embedded Systems',
]

export function Projects() {
  const [filter, setFilter] = useState<'All' | ProjectCategory>('All')
  const [active, setActive] = useState<Project | null>(null)

  const flagships = useMemo(() => projects.filter((p) => p.flagship), [])

  const filtered = useMemo(() => {
    if (filter === 'All') return projects
    return projects.filter((p) => p.categories.includes(filter as ProjectCategory))
  }, [filter])

  return (
    <section id="projects" className="relative py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="03 — Featured Work"
          title="Projects that ship & perform."
          description="Production-grade SaaS platforms, data pipelines, AI models, telemetry tools, and embedded systems."
        />

        {/* Flagship Projects Showcase */}
        {flagships.length > 0 && filter === 'All' && (
          <div className="mt-12 space-y-6">
            <h3 className="font-mono text-xs uppercase tracking-widest text-[var(--color-cyan-soft)] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--color-cyan)] animate-pulse-dot" />
              Flagship Platforms
            </h3>
            <div className="grid lg:grid-cols-2 gap-6">
              {flagships.map((flagship) => (
                <motion.div
                  key={flagship.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6 }}
                  className="glass-strong rounded-2xl overflow-hidden flex flex-col hover:border-[var(--color-cyan-soft)]/50 hover:shadow-[0_0_30px_rgba(56,189,248,0.2)] transition-all duration-300 group cursor-pointer"
                  onClick={() => setActive(flagship)}
                >
                  <div
                    className="p-6 sm:p-8 relative flex flex-col justify-center min-h-[180px]"
                    style={{
                      background: `linear-gradient(135deg, ${flagship.heroGradient[0]}35, ${flagship.heroGradient[1]}35)`,
                    }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-[10px] tracking-widest uppercase px-3 py-1 rounded-full bg-gradient-to-r from-[var(--color-cyan-soft)] to-[var(--color-violet)] text-slate-950 font-bold">
                        Flagship SaaS
                      </span>
                      <span className="font-mono text-xs text-[var(--color-mist)]">{flagship.timeline}</span>
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[var(--color-ivory)] group-hover:text-[var(--color-cyan-soft)] transition-colors">
                      {flagship.title}
                    </h3>
                    <p className="text-sm text-[var(--color-mist)] mt-2 leading-relaxed font-mono">{flagship.tagline}</p>
                  </div>
                  <div className="p-6 sm:p-8 flex flex-col justify-between flex-1 bg-[var(--color-surface)]/60">
                    <p className="text-xs sm:text-sm text-[var(--color-mist)] leading-relaxed line-clamp-3">
                      {flagship.description}
                    </p>
                    <div className="mt-5 flex items-center justify-between pt-4 border-t border-[var(--color-line)]">
                      <div className="flex flex-wrap gap-1.5">
                        {flagship.techStack.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--color-surface-2)] text-[var(--color-mist-dim)] border border-[var(--color-line)]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          setActive(flagship)
                        }}
                        data-cursor-hover
                        className="text-xs font-mono font-medium text-[var(--color-cyan-soft)] hover:text-[var(--color-violet-soft)] transition-colors flex items-center gap-1 shrink-0 ml-2"
                      >
                        Breakdown →
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 mt-14 mb-8">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              data-cursor-hover
              className={cn(
                'px-4 py-2 rounded-full text-xs sm:text-sm font-mono border transition-all duration-200',
                filter === cat
                  ? 'border-[var(--color-cyan-soft)] text-[var(--color-ivory)] bg-[var(--color-cyan)]/20 shadow-[0_0_15px_rgba(56,189,248,0.25)] font-semibold'
                  : 'border-[var(--color-line)] text-[var(--color-mist)] hover:text-[var(--color-ivory)] hover:border-[var(--color-line)]/80 hover:bg-[var(--color-surface-2)]'
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project, i) => (
            <ProjectCard key={project.slug} project={project} onOpen={setActive} index={i} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-[var(--color-mist)] py-16">No projects found in this category.</p>
        )}
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  )
}
