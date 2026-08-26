import { AnimatePresence, motion } from 'framer-motion'
import { FiX, FiGithub, FiExternalLink, FiCheck } from 'react-icons/fi'
import type { Project } from '../../types'
import { Badge } from './Badge'
import { Button } from './Button'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[95] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="glass-strong rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto border border-[var(--color-cyan-soft)]/30 shadow-[0_0_40px_rgba(0,0,0,0.8)]"
          >
            <div
              className="h-36 relative flex items-end p-6"
              style={{
                background: `linear-gradient(135deg, ${project.heroGradient[0]}55, ${project.heroGradient[1]}55)`,
              }}
            >
              <button
                onClick={onClose}
                aria-label="Close"
                className="absolute top-4 right-4 w-9 h-9 rounded-full glass flex items-center justify-center text-[var(--color-ivory)] hover:text-[var(--color-cyan-soft)] hover:scale-110 transition-all"
              >
                <FiX size={18} />
              </button>
              <div>
                {project.flagship && (
                  <span className="font-mono text-[10px] font-bold tracking-widest uppercase px-2.5 py-0.5 rounded bg-cyan-400 text-slate-950 mb-2 inline-block">
                    Flagship SaaS Platform
                  </span>
                )}
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-[var(--color-ivory)] drop-shadow-md">
                  {project.title}
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-2 mb-5">
                <Badge className="text-[var(--color-mint)] border-[var(--color-mint)]/30 font-semibold">{project.status}</Badge>
                <Badge>{project.difficulty}</Badge>
                <Badge>{project.timeline}</Badge>
              </div>

              <p className="text-sm sm:text-base text-[var(--color-mist)] leading-relaxed">{project.description}</p>

              <h4 className="font-display font-semibold text-base text-[var(--color-ivory)] mt-6 mb-3 flex items-center gap-2">
                <span className="w-1.5 h-4 rounded-full bg-[var(--color-cyan-soft)]" />
                Key Features
              </h4>
              <ul className="grid sm:grid-cols-2 gap-2.5">
                {project.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-xs sm:text-sm text-[var(--color-mist)] font-mono">
                    <FiCheck className="text-[var(--color-mint)] mt-0.5 shrink-0" size={15} />
                    {f}
                  </li>
                ))}
              </ul>

              <h4 className="font-display font-semibold text-base text-[var(--color-ivory)] mt-6 mb-3 flex items-center gap-2">
                <span className="w-1.5 h-4 rounded-full bg-[var(--color-violet-soft)]" />
                Tech Stack & Infrastructure
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((t) => (
                  <Badge key={t} className="bg-[var(--color-surface-2)] text-[var(--color-ivory)] font-medium">
                    {t}
                  </Badge>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 mt-8 pt-4 border-t border-[var(--color-line)]">
                {project.githubUrl && (
                  <Button as="a" href={project.githubUrl} target="_blank" rel="noreferrer" icon={<FiGithub size={15} />}>
                    GitHub Repository
                  </Button>
                )}
                {project.liveUrl && (
                  <Button
                    as="a"
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    variant="outline"
                    icon={<FiExternalLink size={15} />}
                  >
                    Live Demo
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
