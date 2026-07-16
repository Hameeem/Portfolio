import { motion } from 'framer-motion'
import { FiArrowLeft } from 'react-icons/fi'
import { Button } from '../components/ui/Button'

export function NotFound() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="font-mono text-xs text-[var(--color-signal-soft)] tracking-[0.25em] uppercase mb-4">
          pipeline.status: 404
        </div>
        <h1 className="font-display text-7xl sm:text-8xl font-semibold text-gradient">404</h1>
        <p className="text-[var(--color-mist)] mt-4 max-w-md mx-auto">
          This route couldn't be validated against any known page. It may have moved,
          or never existed in this pipeline.
        </p>
        <div className="mt-8">
          <Button as="a" href="/" icon={<FiArrowLeft size={15} />}>
            Back to home
          </Button>
        </div>
      </motion.div>
    </section>
  )
}
