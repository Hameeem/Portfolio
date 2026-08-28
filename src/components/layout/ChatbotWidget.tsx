import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiSend, FiCpu, FiUser, FiExternalLink, FiZap, FiRefreshCw } from 'react-icons/fi'

interface Message {
  id: string
  sender: 'user' | 'agent'
  text: string
  actionLink?: {
    label: string
    href: string
  }
}

const QUICK_PROMPTS = [
  '🚀 Flagship Projects',
  '⚡ Tech Stack & Skills',
  '📄 Download Resume',
  '📬 How to Contact',
]

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome-1',
      sender: 'agent',
      text: "👋 Hi! I'm Hameem's AI Portfolio Assistant. Ask me anything about Hameem's projects, tech stack, experience, or how to get in touch!",
    },
  ])

  const chatEndRef = useRef<HTMLDivElement | null>(null)

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    if (isOpen) {
      scrollToBottom()
    }
  }, [messages, isOpen, isTyping])

  const generateResponse = (query: string): { text: string; actionLink?: { label: string; href: string } } => {
    const q = query.toLowerCase().trim()

    if (q.includes('fleettrack') || q.includes('fleet') || q.includes('telematics') || q.includes('mapbox') || q.includes('saas')) {
      return {
        text: "🚚 **FleetTrack** is Hameem's 2026 Flagship Multi-Tenant Fleet & Trip Management SaaS Platform! It features strict tenant data isolation (`organization_id`), RBAC (Admin, Manager, Driver), real-time simulated GPS tracking via WebSockets (Socket.io), Mapbox GL telematics, geofence breach alerts, and interactive Recharts dashboards.",
        actionLink: {
          label: 'View FleetTrack Repository',
          href: 'https://github.com/Hameeem/FleetTrack',
        },
      }
    }

    if (q.includes('dataflowx') || q.includes('etl') || q.includes('pipeline') || q.includes('airflow')) {
      return {
        text: "⚡ **DataFlowX** is an enterprise data engineering platform that automates ingestion, profiling, schema validation, transformation, and simulated Apache Airflow pipeline orchestration for structured datasets.",
        actionLink: {
          label: 'View DataFlowX Repository',
          href: 'https://github.com/Hameeem/DataflowX',
        },
      }
    }

    if (q.includes('detective') || q.includes('rag') || q.includes('misinformation') || q.includes('dank') || q.includes('faiss') || q.includes('langchain')) {
      return {
        text: "🔎 **Detective Dank** is an AI misinformation detection platform built with Retrieval-Augmented Generation (RAG). It verifies claims against trusted news sources using FAISS vector search, LangChain, and OpenAI/Anthropic APIs with full source citations.",
        actionLink: {
          label: 'Try Detective Dank Live',
          href: 'https://detective-dank.vercel.app',
        },
      }
    }

    if (q.includes('netflix') || q.includes('analytics') || q.includes('dashboard') || q.includes('streamlit')) {
      return {
        text: "🎬 **Netflix Analytics Dashboard** is a Python & Streamlit platform visualizing Netflix movies and TV show datasets — featuring IMDb rating telemetry, audience metrics, genre WordClouds, and release trends.",
        actionLink: {
          label: 'View Netflix Dashboard',
          href: 'https://github.com/Hameeem/Netflix_Dashboard',
        },
      }
    }

    if (q.includes('project') || q.includes('work') || q.includes('portfolio') || q.includes('flagship')) {
      return {
        text: "💻 Hameem has built 8+ production & engineering projects:\n\n1. **FleetTrack** — Multi-Tenant Fleet SaaS (Next.js, Node, MySQL, Mapbox GL)\n2. **DataFlowX** — Data Engineering & ETL Platform (Python, FastAPI, Postgres, Docker)\n3. **Detective Dank** — RAG AI Fact-Checker (FAISS, LangChain, OpenAI)\n4. **Netflix Analytics Dashboard** — Interactive Streamlit app\n5. **Car Price Prediction Model** — ML Regression model\n6. **Autocomplete Search Engine** — Trie DSA engine",
        actionLink: {
          label: 'Scroll to Projects Section',
          href: '#projects',
        },
      }
    }

    if (q.includes('skill') || q.includes('stack') || q.includes('language') || q.includes('python') || q.includes('react') || q.includes('next') || q.includes('tool')) {
      return {
        text: "🛠️ **Hameem's Core Toolkit:**\n\n• **Languages:** Python, TypeScript, JavaScript, SQL (MySQL/Postgres), C++, Java\n• **Full-Stack:** Next.js, React 19, Node.js, Express.js, FastAPI, Streamlit, Tailwind CSS v4, Chakra UI\n• **Real-Time & Telemetry:** Redux Toolkit, Socket.io, Mapbox GL, Recharts, Plotly\n• **AI & ML:** RAG Architecture, FAISS Vector Search, LangChain, Scikit-learn, OpenAI API\n• **Data & Tools:** Docker, Redis, Apache Airflow, Git, MySQL, PostgreSQL, Vercel",
        actionLink: {
          label: 'View Skills Toolkit',
          href: '#skills',
        },
      }
    }

    if (q.includes('resume') || q.includes('cv') || q.includes('download')) {
      return {
        text: "📄 You can download Hameem Baba's latest official software engineering resume directly right here!",
        actionLink: {
          label: 'Download Resume (PDF)',
          href: '/Portfolio/assets/resume/Hameem_Baba_Resume.pdf',
        },
      }
    }

    if (q.includes('contact') || q.includes('email') || q.includes('hire') || q.includes('reach') || q.includes('opportunity') || q.includes('internship')) {
      return {
        text: "📬 Hameem is open for software engineering opportunities & summer internships! You can reach him via email or social profiles.",
        actionLink: {
          label: 'Go to Contact Form',
          href: '#contact',
        },
      }
    }

    if (q.includes('education') || q.includes('degree') || q.includes('university') || q.includes('lpu') || q.includes('college')) {
      return {
        text: "🎓 Hameem is pursuing a Bachelor of Technology in **Computer Science Engineering** at Lovely Professional University (2022 – 2026) with a focus on data systems, web engineering, and artificial intelligence.",
      }
    }

    if (q.includes('experience') || q.includes('ngo') || q.includes('stears') || q.includes('community')) {
      return {
        text: "🌟 Hameem led digital literacy & tech awareness initiatives with **STEARS NGO**, conducting programming and AI workshops for rural community students. He also completed intensive Summer Training in **Data Structures & Algorithms canon**.",
      }
    }

    if (q.includes('who') || q.includes('about') || q.includes('hameem') || q.includes('name')) {
      return {
        text: "👨‍💻 **Hameem Baba** is a Computer Science Engineer crafting production full-stack SaaS platforms, end-to-end data pipelines, real-time telematics dashboards, and AI/RAG tools.",
        actionLink: {
          label: 'Read Full Bio',
          href: '#about',
        },
      }
    }

    return {
      text: "I'm Hameem's AI Assistant! I can tell you about Hameem's **flagship projects** (FleetTrack, DataFlowX, Detective Dank), **tech stack** (Next.js, Python, React, MySQL, RAG), **education**, or how to **get in touch**! Feel free to click one of the quick suggestions below.",
    }
  }

  const handleSend = (textToSend?: string) => {
    const text = textToSend || input
    if (!text.trim()) return

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: text.trim(),
    }

    setMessages((prev) => [...prev, userMsg])
    if (!textToSend) setInput('')
    setIsTyping(true)

    setTimeout(() => {
      const response = generateResponse(text)
      const agentMsg: Message = {
        id: `agent-${Date.now()}`,
        sender: 'agent',
        text: response.text,
        actionLink: response.actionLink,
      }
      setMessages((prev) => [...prev, agentMsg])
      setIsTyping(false)
    }, 450)
  }

  const resetChat = () => {
    setMessages([
      {
        id: 'welcome-reset',
        sender: 'agent',
        text: "Chat history cleared! Ask me anything about Hameem's projects, skills, or background.",
      },
    ])
  }

  return (
    <>
      {/* Floating Action Trigger Button */}
      <div className="fixed bottom-6 right-20 z-40">
        <motion.button
          onClick={() => setIsOpen((prev) => !prev)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          data-cursor-hover
          aria-label="Open AI Assistant Chatbot"
          className="relative w-12 h-12 rounded-full bg-gradient-to-r from-[var(--color-cyan-soft)] via-[var(--color-violet)] to-[var(--color-signal)] text-slate-950 flex items-center justify-center shadow-[0_0_25px_rgba(56,189,248,0.4)] border border-cyan-300/40"
        >
          {isOpen ? <FiX size={20} className="text-white" /> : <FiZap size={20} className="text-slate-950 font-bold" />}
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-[var(--color-mint)] border-2 border-[var(--color-ink)] animate-pulse" />
        </motion.button>
      </div>

      {/* Floating Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 25, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.92 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-22 right-5 sm:right-8 z-50 w-[calc(100vw-2.5rem)] sm:w-[380px] h-[520px] max-h-[78vh] glass-strong rounded-2xl overflow-hidden flex flex-col border border-[var(--color-cyan-soft)]/40 shadow-[0_15px_50px_rgba(0,0,0,0.7)]"
          >
            {/* Chatbot Header */}
            <div className="p-4 bg-[var(--color-surface)]/90 border-b border-[var(--color-line)] flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[var(--color-cyan-soft)] to-[var(--color-violet)] flex items-center justify-center text-slate-950 font-bold">
                  <FiCpu size={18} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-[var(--color-ivory)] flex items-center gap-1.5">
                    Hameem's AI Assistant
                  </h4>
                  <span className="text-[10px] font-mono text-[var(--color-mint)] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-mint)] animate-pulse" />
                    Online & Ready
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={resetChat}
                  title="Reset conversation"
                  className="w-7 h-7 rounded-lg text-[var(--color-mist)] hover:text-[var(--color-ivory)] hover:bg-[var(--color-surface-2)] flex items-center justify-center transition-colors"
                >
                  <FiRefreshCw size={13} />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  title="Close chat"
                  className="w-7 h-7 rounded-lg text-[var(--color-mist)] hover:text-[var(--color-ivory)] hover:bg-[var(--color-surface-2)] flex items-center justify-center transition-colors"
                >
                  <FiX size={16} />
                </button>
              </div>
            </div>

            {/* Messages Body */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3 font-sans text-xs">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex gap-2.5 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {m.sender === 'agent' && (
                    <div className="w-6 h-6 rounded-lg bg-[var(--color-surface-2)] border border-[var(--color-line)] flex items-center justify-center text-[var(--color-cyan-soft)] shrink-0 mt-0.5">
                      <FiCpu size={13} />
                    </div>
                  )}
                  <div
                    className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 leading-relaxed whitespace-pre-wrap ${
                      m.sender === 'user'
                        ? 'bg-gradient-to-r from-[var(--color-cyan-soft)] to-[var(--color-signal)] text-slate-950 font-semibold rounded-br-none'
                        : 'bg-[var(--color-surface-2)] text-[var(--color-mist)] border border-[var(--color-line)] rounded-bl-none'
                    }`}
                  >
                    {m.text}
                    {m.actionLink && (
                      <a
                        href={m.actionLink.href}
                        target={m.actionLink.href.startsWith('http') ? '_blank' : '_self'}
                        rel="noreferrer"
                        onClick={() => {
                          if (m.actionLink?.href.startsWith('#')) {
                            setIsOpen(false)
                          }
                        }}
                        className="mt-2.5 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--color-cyan)]/15 border border-[var(--color-cyan-soft)]/40 text-[var(--color-cyan-soft)] hover:bg-[var(--color-cyan)]/25 text-[11px] font-mono font-medium transition-colors w-fit block"
                      >
                        {m.actionLink.label} <FiExternalLink size={11} />
                      </a>
                    )}
                  </div>
                  {m.sender === 'user' && (
                    <div className="w-6 h-6 rounded-lg bg-[var(--color-cyan-soft)] text-slate-950 flex items-center justify-center shrink-0 mt-0.5 font-bold">
                      <FiUser size={13} />
                    </div>
                  )}
                </div>
              ))}

              {isTyping && (
                <div className="flex gap-2.5 items-center">
                  <div className="w-6 h-6 rounded-lg bg-[var(--color-surface-2)] border border-[var(--color-line)] flex items-center justify-center text-[var(--color-cyan-soft)] shrink-0">
                    <FiCpu size={13} />
                  </div>
                  <div className="bg-[var(--color-surface-2)] px-3 py-2 rounded-xl text-[var(--color-mist-dim)] font-mono text-[11px] flex items-center gap-1.5 border border-[var(--color-line)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-cyan-soft)] animate-bounce" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-violet-soft)] animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-mint)] animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              )}

              <div ref={chatEndRef} />
            </div>

            {/* Quick Prompt Chips */}
            <div className="px-3 py-2 bg-[var(--color-surface)]/60 border-t border-[var(--color-line)]/50 flex gap-1.5 overflow-x-auto no-scrollbar">
              {QUICK_PROMPTS.map((prompt) => (
                <button
                  key={prompt}
                  onClick={() => handleSend(prompt.replace(/^[^\s]+\s*/, ''))}
                  className="px-2.5 py-1 rounded-full text-[10px] font-mono border border-[var(--color-line)] text-[var(--color-mist)] hover:text-[var(--color-ivory)] hover:border-[var(--color-cyan-soft)] hover:bg-[var(--color-cyan)]/10 transition-colors whitespace-nowrap shrink-0"
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* Input Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault()
                handleSend()
              }}
              className="p-3 bg-[var(--color-surface)] border-t border-[var(--color-line)] flex items-center gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about Hameem..."
                className="flex-1 bg-[var(--color-surface-2)] text-xs text-[var(--color-ivory)] placeholder-[var(--color-mist-dim)] px-3 py-2 rounded-xl border border-[var(--color-line)] focus:outline-none focus:border-[var(--color-cyan-soft)] transition-colors"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="w-8 h-8 rounded-xl bg-gradient-to-r from-[var(--color-cyan-soft)] to-[var(--color-violet)] text-slate-950 flex items-center justify-center disabled:opacity-40 hover:scale-105 transition-all shrink-0"
              >
                <FiSend size={13} className="font-bold" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
