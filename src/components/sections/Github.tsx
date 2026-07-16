import { motion } from 'framer-motion'
import { FiGithub, FiStar, FiGitBranch, FiUsers, FiExternalLink } from 'react-icons/fi'
import { SectionHeading } from '../ui/SectionHeading'
import { GlassCard } from '../ui/GlassCard'
import { useGithubStats } from '../../hooks/useGithubStats'

export function Github() {
  const { user, repos, languages, totalStars, loading, error } = useGithubStats()

  const topRepos = [...repos]
    .filter((r) => !r.fork)
    .sort((a, b) => b.stargazers_count - a.stargazers_count || (a.updated_at < b.updated_at ? 1 : -1))
    .slice(0, 6)

  const topLanguages = Object.entries(languages)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6)

  return (
    <section id="github" className="relative py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="08 — GitHub"
          title="Live from the source."
          description="Pulled directly from the GitHub API — repositories, languages, and stars, always current."
        />

        {error && (
          <p className="mt-8 text-sm text-[var(--color-mist)] font-mono">
            Couldn't reach the GitHub API right now ({error}). Try refreshing, or view the profile directly.
          </p>
        )}

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-6 mt-12">
          <GlassCard className="p-7 flex flex-col items-center text-center">
            {loading ? (
              <div className="w-20 h-20 rounded-full bg-[var(--color-surface-2)] animate-pulse" />
            ) : (
              <img
                src={user?.avatar_url}
                alt={user?.login}
                className="w-20 h-20 rounded-full border border-[var(--color-line)]"
              />
            )}
            <h3 className="font-display font-semibold text-lg mt-4">@{user?.login ?? 'Hameeem'}</h3>
            {user?.bio && <p className="text-sm text-[var(--color-mist)] mt-2">{user.bio}</p>}

            <div className="grid grid-cols-3 gap-4 mt-6 w-full">
              <div>
                <div className="font-display text-xl font-semibold text-gradient">
                  {loading ? '—' : user?.public_repos ?? repos.length}
                </div>
                <div className="text-[10px] text-[var(--color-mist-dim)] uppercase tracking-wide mt-1">Repos</div>
              </div>
              <div>
                <div className="font-display text-xl font-semibold text-gradient">
                  {loading ? '—' : totalStars}
                </div>
                <div className="text-[10px] text-[var(--color-mist-dim)] uppercase tracking-wide mt-1">Stars</div>
              </div>
              <div>
                <div className="font-display text-xl font-semibold text-gradient">
                  {loading ? '—' : user?.followers ?? 0}
                </div>
                <div className="text-[10px] text-[var(--color-mist-dim)] uppercase tracking-wide mt-1">Followers</div>
              </div>
            </div>

            <a
              href={user?.html_url ?? 'https://github.com/Hameeem'}
              target="_blank"
              rel="noreferrer"
              data-cursor-hover
              className="mt-6 text-sm font-medium flex items-center gap-2 text-[var(--color-signal-soft)] hover:text-[var(--color-violet-soft)]"
            >
              <FiGithub size={15} /> View full profile <FiExternalLink size={12} />
            </a>

            {topLanguages.length > 0 && (
              <div className="w-full mt-7 pt-6 border-t border-[var(--color-line)]">
                <p className="text-xs text-[var(--color-mist-dim)] font-mono uppercase tracking-wide mb-3 text-left">
                  Top languages
                </p>
                <div className="flex flex-wrap gap-2">
                  {topLanguages.map(([lang]) => (
                    <span
                      key={lang}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-[var(--color-surface-2)] text-[var(--color-mist)] border border-[var(--color-line)]"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </GlassCard>

          <div className="grid sm:grid-cols-2 gap-4">
            {loading &&
              Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="glass rounded-2xl p-5 h-32 animate-pulse" />
              ))}

            {!loading &&
              topRepos.map((repo, i) => (
                <motion.a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor-hover
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: (i % 4) * 0.06 }}
                  className="glass rounded-2xl p-5 hover:border-[var(--color-violet-soft)]/50 transition-colors block"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-sm truncate">{repo.name}</h4>
                    <FiGitBranch className="text-[var(--color-mist-dim)] shrink-0" size={13} />
                  </div>
                  <p className="text-xs text-[var(--color-mist)] mt-2 line-clamp-2 h-8">
                    {repo.description ?? 'No description provided.'}
                  </p>
                  <div className="flex items-center gap-3 mt-3 text-[10px] font-mono text-[var(--color-mist-dim)]">
                    {repo.language && <span>{repo.language}</span>}
                    <span className="flex items-center gap-1">
                      <FiStar size={11} /> {repo.stargazers_count}
                    </span>
                  </div>
                </motion.a>
              ))}

            {!loading && topRepos.length === 0 && !error && (
              <div className="sm:col-span-2 flex flex-col items-center justify-center gap-2 text-center py-10 text-[var(--color-mist)]">
                <FiUsers size={20} />
                <p className="text-sm">No public repositories found yet.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
