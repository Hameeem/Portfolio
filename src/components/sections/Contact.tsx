import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import { FiMail, FiLinkedin, FiGithub, FiMapPin, FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi'
import { SectionHeading } from '../ui/SectionHeading'
import { GlassCard } from '../ui/GlassCard'
import { Button } from '../ui/Button'

// Fill these in from your EmailJS dashboard (emailjs.com). All three are
// public identifiers safe to ship in frontend code — EmailJS is designed
// for this. Until they're set, the form falls back to a mailto: link.
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'

const CONTACT_INFO = [
  { icon: FiMail, label: 'Email', value: 'hameembaba20@gmail.com', href: 'mailto:hameembaba20@gmail.com' },
  { icon: FiLinkedin, label: 'LinkedIn', value: 'www.linkedin.com/in/hameembaba08', href: 'https://www.linkedin.com/in/hameembaba08' },
  { icon: FiGithub, label: 'GitHub', value: 'github.com/Hameeem', href: 'https://github.com/Hameeem' },
  { icon: FiMapPin, label: 'Location', value: 'Kashmir, India', href: undefined },
]

type Status = 'idle' | 'sending' | 'success' | 'error'

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<Status>('idle')

  const isConfigured =
    EMAILJS_SERVICE_ID !== 'YOUR_SERVICE_ID' &&
    EMAILJS_TEMPLATE_ID !== 'YOUR_TEMPLATE_ID' &&
    EMAILJS_PUBLIC_KEY !== 'YOUR_PUBLIC_KEY'

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!formRef.current) return

    if (!isConfigured) {
      const data = new FormData(formRef.current)
      const subject = encodeURIComponent(`Portfolio contact from ${data.get('name')}`)
      const body = encodeURIComponent(String(data.get('message') ?? ''))
      window.location.href = `mailto:hameembaba20@gmail.com?subject=${subject}&body=${body}`
      return
    }

    setStatus('sending')
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, {
        publicKey: EMAILJS_PUBLIC_KEY,
      })
      setStatus('success')
      formRef.current.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="relative py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="09 — Contact"
          title="Let's build something."
          description="Open to internships, collaborations, and interesting problems. Reach out any way that's easiest."
        />

        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-6 mt-12">
          <GlassCard className="p-7 sm:p-8 space-y-5 h-fit">
            {CONTACT_INFO.map(({ icon: Icon, label, value, href }) => {
              const content = (
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--color-violet)]/20 to-[var(--color-signal)]/20 flex items-center justify-center text-[var(--color-signal-soft)] shrink-0">
                    <Icon size={16} />
                  </div>
                  <div>
                    <div className="text-[10px] text-[var(--color-mist-dim)] uppercase tracking-wide font-mono">{label}</div>
                    <div className="text-sm text-[var(--color-ivory)] mt-0.5">{value}</div>
                  </div>
                </div>
              )
              return href ? (
                <a key={label} href={href} target="_blank" rel="noreferrer" data-cursor-hover className="block hover:opacity-80 transition-opacity">
                  {content}
                </a>
              ) : (
                <div key={label}>{content}</div>
              )
            })}

            <div className="pt-4 border-t border-[var(--color-line)] flex items-center gap-2 font-mono text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-mint)] animate-pulse-dot" />
              <span className="text-[var(--color-mist)]">Currently available for internships</span>
            </div>
          </GlassCard>

          <GlassCard className="p-7 sm:p-8">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="text-xs font-mono text-[var(--color-mist)] block mb-2">Name</label>
                  <input
                    id="name" name="name" type="text" required
                    className="w-full bg-[var(--color-surface-2)] border border-[var(--color-line)] rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[var(--color-violet-soft)] transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-xs font-mono text-[var(--color-mist)] block mb-2">Email</label>
                  <input
                    id="email" name="email" type="email" required
                    className="w-full bg-[var(--color-surface-2)] border border-[var(--color-line)] rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[var(--color-violet-soft)] transition-colors"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="text-xs font-mono text-[var(--color-mist)] block mb-2">Subject</label>
                <input
                  id="subject" name="subject" type="text" required
                  className="w-full bg-[var(--color-surface-2)] border border-[var(--color-line)] rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[var(--color-violet-soft)] transition-colors"
                  placeholder="What's this about?"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-xs font-mono text-[var(--color-mist)] block mb-2">Message</label>
                <textarea
                  id="message" name="message" required rows={5}
                  className="w-full bg-[var(--color-surface-2)] border border-[var(--color-line)] rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[var(--color-violet-soft)] transition-colors resize-none"
                  placeholder="Tell me a bit about what you're working on..."
                />
              </div>

              <div className="flex items-center gap-4">
                <Button type="submit" icon={<FiSend size={14} />} disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending…' : 'Send Message'}
                </Button>

                {status === 'success' && (
                  <motion.span
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    className="text-sm text-[var(--color-mint)] flex items-center gap-1.5"
                  >
                    <FiCheckCircle size={15} /> Message sent
                  </motion.span>
                )}
                {status === 'error' && (
                  <motion.span
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    className="text-sm text-red-400 flex items-center gap-1.5"
                  >
                    <FiAlertCircle size={15} /> Something went wrong — try email directly
                  </motion.span>
                )}
              </div>

              {!isConfigured && (
                <p className="text-xs text-[var(--color-mist-dim)] font-mono">
                   Email me here
                </p>
              )}
            </form>
          </GlassCard>
        </div>
      </div>
    </section>
  )
}
