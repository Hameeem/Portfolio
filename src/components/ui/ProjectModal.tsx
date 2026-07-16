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
          className="fixed inset-0 z-[95] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="glass-strong rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto"
          >
            <div
              className="h-32 relative flex items-end p-6"
              style={{
                background: `linear-gradient(135deg, ${project.heroGradient[0]}40, ${project.heroGradient[1]}40)`,
              }}
            >
              <button
                onClick={onClose}
                aria-label="Close"
                className="absolute top-4 right-4 w-9 h-9 rounded-full glass flex items-center justify-center"
              >
                <FiX />
              </button>
              <h3 className="font-display text-2xl sm:text-3xl font-semibold">{project.title}</h3>
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-2 mb-5 text-xs font-mono text-[var(--color-mist-dim)]">
                <Badge>{project.status}</Badge>
                <Badge>{project.difficulty}</Badge>
                <Badge>{project.timeline}</Badge>
              </div>

              <p className="text-[var(--color-mist)] leading-relaxed">{project.description}</p>

              <h4 className="font-display font-semibold mt-6 mb-3">Features</h4>
              <ul className="grid sm:grid-cols-2 gap-2.5">
                {project.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-[var(--color-mist)]">
                    <FiCheck className="text-[var(--color-mint)] mt-0.5 shrink-0" size={14} />
                    {f}
                  </li>
                ))}
              </ul>

              <h4 className="font-display font-semibold mt-6 mb-3">Tech stack</h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 mt-8">
                {project.githubUrl && (
                  <Button as="a" href={project.githubUrl} target="_blank" rel="noreferrer" icon={<FiGithub size={15} />}>
                    View Code
                  </Button>
                )}
                {project.liveUrl && (
                  <Button as="a" href={project.liveUrl} target="_blank" rel="noreferrer" variant="outline" icon={<FiExternalLink size={15} />}>
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
