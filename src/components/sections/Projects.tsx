import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { SectionHeading } from '../ui/SectionHeading'
import { ProjectCard } from '../ui/ProjectCard'
import { ProjectModal } from '../ui/ProjectModal'
import { projects } from '../../data/projects'
import type { Project, ProjectCategory } from '../../types'
import { cn } from '../../lib/utils'

const CATEGORIES: ('All' | ProjectCategory)[] = [
  'All', 'AI', 'Machine Learning', 'Python', 'Data Engineering', 'Web Development', 'Embedded Systems',
]

export function Projects() {
  const [filter, setFilter] = useState<'All' | ProjectCategory>('All')
  const [active, setActive] = useState<Project | null>(null)

  const flagship = projects.find((p) => p.flagship)
  const rest = projects.filter((p) => !p.flagship)

  const filtered = useMemo(() => {
    if (filter === 'All') return rest
    return rest.filter((p) => p.categories.includes(filter as ProjectCategory))
  }, [filter, rest])

  return (
    <section id="projects" className="relative py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="03 — Work"
          title="Projects that shipped."
          description="A flagship data platform, plus a spread of AI, ML, web, and embedded work."
        />

        {flagship && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="mt-12 glass-strong rounded-2xl overflow-hidden grid lg:grid-cols-2"
          >
            <div
              className="p-8 sm:p-10 relative flex flex-col justify-center min-h-[220px]"
              style={{
                background: `linear-gradient(135deg, ${flagship.heroGradient[0]}30, ${flagship.heroGradient[1]}30)`,
              }}
            >
              <span className="font-mono text-[10px] tracking-wide uppercase px-2.5 py-1 rounded-full bg-gradient-to-r from-[var(--color-violet)] to-[var(--color-signal)] text-white w-fit mb-4">
                Flagship Project
              </span>
              <h3 className="font-display text-3xl sm:text-4xl font-semibold">{flagship.title}</h3>
              <p className="text-[var(--color-mist)] mt-3 leading-relaxed">{flagship.tagline}</p>
            </div>
            <div className="p-8 sm:p-10 flex flex-col justify-center">
              <p className="text-sm text-[var(--color-mist)] leading-relaxed line-clamp-4">
                {flagship.description}
              </p>
              <button
                onClick={() => setActive(flagship)}
                data-cursor-hover
                className="mt-5 text-sm font-medium text-[var(--color-signal-soft)] hover:text-[var(--color-violet-soft)] w-fit"
              >
                See full breakdown →
              </button>
            </div>
          </motion.div>
        )}

        <div className="flex flex-wrap gap-2 mt-14 mb-8">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              data-cursor-hover
              className={cn(
                'px-4 py-2 rounded-full text-xs sm:text-sm font-mono border transition-colors',
                filter === cat
                  ? 'border-[var(--color-violet-soft)] text-[var(--color-ivory)] bg-[var(--color-violet)]/15'
                  : 'border-[var(--color-line)] text-[var(--color-mist)] hover:text-[var(--color-ivory)]'
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project, i) => (
            <ProjectCard key={project.slug} project={project} onOpen={setActive} index={i} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-[var(--color-mist)] py-16">No projects in this category yet.</p>
        )}
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  )
}
