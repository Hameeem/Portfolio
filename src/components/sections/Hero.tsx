import { motion } from 'framer-motion'
import { FiArrowDown, FiDownload, FiMail } from 'react-icons/fi'
import { useTypingEffect } from '../../hooks/useTypingEffect'
import { Button } from '../ui/Button'

const ROLES = [
  'Software Engineer',
  'AI Developer',
  'Machine Learning Enthusiast',
  'Data Engineering Enthusiast',
  'Problem Solver',
]

const STAGES = ['ingest', 'validate', 'transform', 'orchestrate', 'analyze']

export function Hero() {
  const typed = useTypingEffect(ROLES)

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      {/* ambient gradient blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-72 h-72 sm:w-[38rem] sm:h-[38rem] rounded-full bg-[var(--color-violet)]/25 blur-[50px] sm:blur-[120px] animate-float-slow pointer-events-none" />
      <div className="absolute bottom-[-15%] right-[-10%] w-64 h-64 sm:w-[34rem] sm:h-[34rem] rounded-full bg-[var(--color-signal)]/25 blur-[50px] sm:blur-[120px] animate-float-slower pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 grid lg:grid-cols-[1.15fr_0.85fr] gap-14 items-center w-full">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 font-mono text-xs text-[var(--color-mist)] border border-[var(--color-line)] rounded-full px-3 py-1.5 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-mint)] animate-pulse-dot" />
            open to Summer 2026 / 2027 internships
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight leading-[1.02]"
          >
            Hameem Baba
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-5 h-9 flex items-center"
          >
            <span className="font-display text-xl sm:text-2xl text-gradient font-medium">
              {typed}
            </span>
            <span className="w-[2px] h-6 bg-[var(--color-signal-soft)] ml-1 animate-caret" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 text-[var(--color-mist)] text-base sm:text-lg leading-relaxed max-w-xl"
          >
            A Computer Science Engineering student who builds real, working software —
            from end-to-end data pipelines to AI-assisted tools. I like taking a system
            from raw input to a trustworthy result, and making every stage of that
            journey visible.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Button
              as="a"
              href="/Portfolio/assets/resume/Hameem_Baba_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              icon={<FiDownload size={15} />}
              data-cursor-hover
            >
              Download Resume
            </Button>
            <Button as="a" href="#projects" variant="outline" data-cursor-hover>
              View Projects
            </Button>
            <Button as="a" href="#contact" variant="ghost" icon={<FiMail size={15} />} data-cursor-hover>
              Contact Me
            </Button>
          </motion.div>
        </div>

        {/* Signature element: a live "pipeline status" console, tying the hero to the
            data-engineering identity instead of a generic illustration/blob. */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="glass-strong rounded-2xl p-5 font-mono text-xs sm:text-sm noise-grain"
        >
          <div className="flex items-center gap-1.5 mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e]/70" />
            <span className="ml-3 text-[var(--color-mist-dim)]">pipeline.status</span>
          </div>

          <div className="space-y-2.5">
            {STAGES.map((stage, i) => (
              <motion.div
                key={stage}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.12 }}
                className="flex items-center justify-between border-b border-[var(--color-line)] pb-2.5 last:border-0"
              >
                <span className="text-[var(--color-mist)]">{stage}</span>
                <span className="flex items-center gap-1.5 text-[var(--color-mint)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-mint)]" />
                  ok
                </span>
              </motion.div>
            ))}
          </div>

          <div className="mt-5 pt-4 border-t border-[var(--color-line)] flex items-center justify-between text-[var(--color-mist-dim)]">
            <span>uptime</span>
            <span className="text-[var(--color-ivory)]">99.9%</span>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 text-[var(--color-mist)] hover:text-[var(--color-ivory)]"
      >
        <FiArrowDown size={20} />
      </motion.a>
    </section>
  )
}
