import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi'

const SOCIALS = [
  { icon: FiGithub, href: 'https://github.com/Hameeem', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/hameembaba08', label: 'LinkedIn' },
  { icon: FiMail, href: 'mailto:hameembaba20@gmail.com', label: 'Email' },
]

export function Footer() {
  return (
    <footer className="relative border-t border-[var(--color-line)] mt-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <div className="font-display font-semibold text-lg">
            <span className="text-gradient">Hameem</span>
            <span className="text-[var(--color-mist)]">.dev</span>
          </div>
          <p className="text-xs text-[var(--color-mist-dim)] mt-1 font-mono">
            status: <span className="text-[var(--color-mint)]">available for internships</span>
          </p>
        </div>

        <div className="flex items-center gap-3">
          {SOCIALS.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              data-cursor-hover
              className="w-10 h-10 rounded-full glass flex items-center justify-center hover:border-[var(--color-violet-soft)] hover:-translate-y-1 transition-all"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>

        <a
          href="#home"
          data-cursor-hover
          className="text-xs text-[var(--color-mist)] hover:text-[var(--color-ivory)] flex items-center gap-1.5"
        >
          Back to top <FiArrowUp size={12} />
        </a>
      </div>
      <div className="text-center text-xs text-[var(--color-mist-dim)] pb-8 font-mono">
        © {new Date().getFullYear()} Hameem Baba. Built with React, TypeScript & Tailwind CSS.
      </div>
    </footer>
  )
}
