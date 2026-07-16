import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const STAGES = ['ingest', 'validate', 'transform', 'load', 'ready']

export function LoadingScreen() {
  const [visible, setVisible] = useState(true)
  const [stageIndex, setStageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setStageIndex((i) => Math.min(i + 1, STAGES.length - 1))
    }, 260)
    const timeout = setTimeout(() => setVisible(false), 1500)
    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] bg-[var(--color-ink)] flex flex-col items-center justify-center gap-6"
        >
          <div className="font-display text-2xl tracking-tight">
            <span className="text-gradient">Hameem</span>
            <span className="text-[var(--color-mist)]">.dev</span>
          </div>
          <div className="font-mono text-xs text-[var(--color-mist)] flex items-center gap-2">
            {STAGES.map((s, i) => (
              <span key={s} className="flex items-center gap-2">
                <span
                  className={
                    i <= stageIndex
                      ? 'text-[var(--color-mint)]'
                      : 'text-[var(--color-mist-dim)]'
                  }
                >
                  {s}
                </span>
                {i < STAGES.length - 1 && <span className="text-[var(--color-mist-dim)]">→</span>}
              </span>
            ))}
          </div>
          <div className="w-52 h-[3px] rounded-full bg-[var(--color-surface-2)] overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[var(--color-violet)] to-[var(--color-signal)]"
              initial={{ width: '0%' }}
              animate={{ width: `${((stageIndex + 1) / STAGES.length) * 100}%` }}
              transition={{ duration: 0.25 }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
