import { useEffect, useState } from 'react'

export interface GithubRepo {
  id: number
  name: string
  html_url: string
  description: string | null
  stargazers_count: number
  forks_count: number
  language: string | null
  updated_at: string
  fork: boolean
}

export interface GithubUser {
  login: string
  avatar_url: string
  html_url: string
  bio: string | null
  public_repos: number
  followers: number
  following: number
}

interface GithubData {
  user: GithubUser | null
  repos: GithubRepo[]
  languages: Record<string, number>
  totalStars: number
  loading: boolean
  error: string | null
}

const GITHUB_USERNAME = 'Hameeem'

export function useGithubStats(username: string = GITHUB_USERNAME): GithubData {
  const [user, setUser] = useState<GithubUser | null>(null)
  const [repos, setRepos] = useState<GithubRepo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false

    async function load() {
      try {
        setLoading(true)
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`),
        ])

        if (!userRes.ok || !reposRes.ok) {
          throw new Error('GitHub API request failed')
        }

        const userData: GithubUser = await userRes.json()
        const repoData: GithubRepo[] = await reposRes.json()

        if (!cancelled) {
          setUser(userData)
          setRepos(Array.isArray(repoData) ? repoData : [])
          setError(null)
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Failed to load GitHub data')
        }
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    load()
    return () => {
      cancelled = true
    }
  }, [username])

  const languages: Record<string, number> = {}
  repos.forEach((r) => {
    if (r.language) languages[r.language] = (languages[r.language] || 0) + 1
  })

  const totalStars = repos.reduce((sum, r) => sum + r.stargazers_count, 0)

  return { user, repos, languages, totalStars, loading, error }
}
