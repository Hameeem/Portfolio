import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiMoon, FiSun, FiMenu, FiX } from 'react-icons/fi'
import { useTheme } from '../../context/ThemeContext'
import { cn } from '../../lib/utils'

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#github', label: 'GitHub' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={cn(
        'fixed top-0 left-0 right-0 z-[80] transition-all duration-300',
        scrolled ? 'py-3' : 'py-5'
      )}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div
          className={cn(
            'flex items-center justify-between rounded-full px-5 py-2.5 transition-all duration-300',
            scrolled && 'glass-strong'
          )}
        >
          <a href="#home" className="font-display font-semibold text-lg tracking-tight" data-cursor-hover>
            <span className="text-gradient">Hameem</span>
            <span className="text-[var(--color-mist)]">.dev</span>
          </a>

          <nav className="hidden md:flex items-center gap-7">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-cursor-hover
                className="text-sm text-[var(--color-mist)] hover:text-[var(--color-ivory)] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle color theme"
              data-cursor-hover
              className="w-9 h-9 rounded-full glass flex items-center justify-center text-[var(--color-ivory)] hover:border-[var(--color-violet-soft)]"
            >
              {theme === 'dark' ? <FiSun size={15} /> : <FiMoon size={15} />}
            </button>
            <button
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
              className="md:hidden w-9 h-9 rounded-full glass flex items-center justify-center"
            >
              {open ? <FiX size={16} /> : <FiMenu size={16} />}
            </button>
          </div>
        </div>

        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-2 glass-strong rounded-2xl p-4 flex flex-col gap-3"
          >
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm text-[var(--color-mist)] hover:text-[var(--color-ivory)] py-1"
              >
                {link.label}
              </a>
            ))}
          </motion.nav>
        )}
      </div>
    </motion.header>
  )
}
