import { motion } from 'framer-motion'
import { FiArrowDown, FiDownload, FiMail } from 'react-icons/fi'
import { useTypingEffect } from '../../hooks/useTypingEffect'
import { Button } from '../ui/Button'

const ROLES = [
  'Full-Stack SaaS Developer',
  'Data Engineering & Telemetry Engineer',
  'AI & RAG Systems Developer',
  'Computer Science Engineer',
]

const STAGES = [
  { name: 'ingest', detail: 'CSV / API / WebSockets' },
  { name: 'validate', detail: 'Schema & RBAC Isolation' },
  { name: 'transform', detail: 'Pandas / Airflow / SQL' },
  { name: 'orchestrate', detail: 'Docker & Real-time Socket.io' },
  { name: 'analyze', detail: 'Mapbox GL & Recharts' },
]

export function Hero() {
  const typed = useTypingEffect(ROLES)

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      {/* Ambient electric gradient blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-72 h-72 sm:w-[38rem] sm:h-[38rem] rounded-full bg-[var(--color-cyan)]/20 blur-[60px] sm:blur-[140px] animate-float-slow pointer-events-none" />
      <div className="absolute bottom-[-15%] right-[-10%] w-64 h-64 sm:w-[34rem] sm:h-[34rem] rounded-full bg-[var(--color-violet)]/25 blur-[60px] sm:blur-[140px] animate-float-slower pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 grid lg:grid-cols-[1.15fr_0.85fr] gap-14 items-center w-full">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 font-mono text-xs text-[var(--color-mist)] border border-[var(--color-cyan-soft)]/40 bg-[var(--color-surface-2)]/60 rounded-full px-3.5 py-1.5 mb-6 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-[var(--color-mint)] animate-pulse-dot" />
            Open for Engineering Opportunities & Internships
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.02] text-[var(--color-ivory)]"
          >
            Hameem Baba
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-5 h-9 flex items-center"
          >
            <span className="font-display text-xl sm:text-2xl text-gradient font-semibold">
              {typed}
            </span>
            <span className="w-[2px] h-6 bg-[var(--color-cyan-soft)] ml-1 animate-caret" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 text-[var(--color-mist)] text-base sm:text-lg leading-relaxed max-w-xl font-normal"
          >
            Computer Science Engineer crafting high-performance full-stack SaaS platforms, end-to-end data pipelines, real-time telemetry dashboards, and RAG-powered AI applications.
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
              View Featured Work
            </Button>
            <Button as="a" href="#contact" variant="ghost" icon={<FiMail size={15} />} data-cursor-hover>
              Get In Touch
            </Button>
          </motion.div>
        </div>

        {/* Live pipeline telemetry console */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="glass-strong rounded-2xl p-6 font-mono text-xs sm:text-sm noise-grain border border-[var(--color-cyan-soft)]/30 hover:border-[var(--color-cyan-soft)]/60 transition-colors shadow-2xl"
        >
          <div className="flex items-center justify-between border-b border-[var(--color-line)] pb-3 mb-4">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#10b981]" />
              <span className="ml-2 text-[var(--color-ivory)] font-bold">telemetry.pipeline</span>
            </div>
            <span className="text-[10px] text-[var(--color-cyan-soft)] bg-[var(--color-cyan)]/10 px-2 py-0.5 rounded border border-[var(--color-cyan-soft)]/30">
              ACTIVE NODE
            </span>
          </div>

          <div className="space-y-3">
            {STAGES.map((stage, i) => (
              <motion.div
                key={stage.name}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                className="flex items-center justify-between border-b border-[var(--color-line)]/50 pb-2.5 last:border-0"
              >
                <div className="flex items-center gap-2">
                  <span className="text-[var(--color-cyan-soft)] text-[10px]">0{i + 1}</span>
                  <span className="text-[var(--color-ivory)] font-medium">{stage.name}</span>
                </div>
                <span className="text-[10px] text-[var(--color-mist-dim)] hidden sm:inline">{stage.detail}</span>
                <span className="flex items-center gap-1.5 text-[var(--color-mint)] font-semibold text-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-mint)] animate-pulse" />
                  ONLINE
                </span>
              </motion.div>
            ))}
          </div>

          <div className="mt-5 pt-4 border-t border-[var(--color-line)] flex items-center justify-between text-xs text-[var(--color-mist-dim)]">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[var(--color-cyan-soft)]" />
              Latency: 12ms
            </span>
            <span className="text-[var(--color-ivory)] font-bold">Uptime: 99.9%</span>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 text-[var(--color-mist)] hover:text-[var(--color-cyan-soft)] transition-colors"
      >
        <FiArrowDown size={20} />
      </motion.a>
    </section>
  )
}
