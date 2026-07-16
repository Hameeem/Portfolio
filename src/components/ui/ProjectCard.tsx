import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink, FiStar } from 'react-icons/fi'
import type { Project } from '../../types'
import { useTilt } from '../../hooks/useTilt'
import { Badge } from './Badge'

interface ProjectCardProps {
  project: Project
  onOpen: (project: Project) => void
  index: number
}

export function ProjectCard({ project, onOpen, index }: ProjectCardProps) {
  const { ref, onMouseMove, onMouseLeave } = useTilt<HTMLDivElement>(6)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
    >
      <div
        ref={ref}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        onClick={() => onOpen(project)}
        data-cursor-hover
        className="glass rounded-2xl overflow-hidden cursor-pointer group h-full flex flex-col transition-[border-color] duration-300 hover:border-[var(--color-violet-soft)]/50"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div
          className="h-36 relative flex items-center justify-center overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${project.heroGradient[0]}33, ${project.heroGradient[1]}33)`,
          }}
        >
          <div
            className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity"
            style={{
              backgroundImage: `radial-gradient(circle at 30% 30%, ${project.heroGradient[0]}55, transparent 60%), radial-gradient(circle at 70% 70%, ${project.heroGradient[1]}55, transparent 60%)`,
            }}
          />
          {project.flagship && (
            <span className="absolute top-3 right-3 font-mono text-[10px] tracking-wide uppercase px-2.5 py-1 rounded-full bg-gradient-to-r from-[var(--color-violet)] to-[var(--color-signal)] text-white">
              Flagship
            </span>
          )}
          <span className="font-display text-2xl font-semibold text-[var(--color-ivory)]/90 relative z-10 px-4 text-center">
            {project.title}
          </span>
        </div>

        <div className="p-5 flex flex-col flex-1">
          <div className="flex items-center justify-between text-[10px] font-mono text-[var(--color-mist-dim)] uppercase tracking-wide mb-2">
            <span>{project.status}</span>
            <span>{project.difficulty}</span>
          </div>

          <p className="text-sm text-[var(--color-mist)] leading-relaxed flex-1">{project.tagline}</p>

          <div className="flex flex-wrap gap-1.5 mt-4">
            {project.techStack.slice(0, 3).map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
            {project.techStack.length > 3 && <Badge>+{project.techStack.length - 3}</Badge>}
          </div>

          <div className="flex items-center gap-4 mt-5 pt-4 border-t border-[var(--color-line)]">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                data-cursor-hover
                className="text-xs flex items-center gap-1.5 text-[var(--color-mist)] hover:text-[var(--color-ivory)]"
              >
                <FiGithub size={13} /> Code
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                data-cursor-hover
                className="text-xs flex items-center gap-1.5 text-[var(--color-mist)] hover:text-[var(--color-ivory)]"
              >
                <FiExternalLink size={13} /> Live
              </a>
            )}
            <span className="ml-auto text-xs flex items-center gap-1 text-[var(--color-mist-dim)]">
              <FiStar size={12} /> {project.categories[0]}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
