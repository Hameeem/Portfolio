import { AnimatePresence, motion } from 'framer-motion'
import { FiArrowUp } from 'react-icons/fi'
import { useScrollProgress } from '../../hooks/useScrollProgress'

export function BackToTop() {
  const progress = useScrollProgress()
  const visible = progress > 12

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-[60] w-11 h-11 rounded-full glass-strong flex items-center justify-center text-[var(--color-ivory)] hover:border-[var(--color-violet-soft)] hover:-translate-y-1 transition-transform"
        >
          <FiArrowUp />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
