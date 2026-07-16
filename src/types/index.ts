export type ProjectCategory =
  | 'AI'
  | 'Machine Learning'
  | 'Python'
  | 'Data Engineering'
  | 'Web Development'
  | 'Embedded Systems'

export type ProjectStatus = 'Completed' | 'In Progress' | 'Maintained'
export type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert'

export interface Project {
  slug: string
  title: string
  flagship?: boolean
  tagline: string
  description: string
  features: string[]
  techStack: string[]
  categories: ProjectCategory[]
  status: ProjectStatus
  difficulty: Difficulty
  timeline: string
  githubUrl?: string
  liveUrl?: string
  screenshots?: string[]
  heroGradient: [string, string]
}

export interface SkillGroup {
  group: string
  icon: string
  skills: string[]
}

export interface Certification {
  title: string
  issuer?: string
  year?: string
}

export interface Achievement {
  title: string
  description: string
  date?: string
  icon: string
}

export interface EducationEntry {
  institution: string
  degree: string
  score: string
  period?: string
}

export interface ExperienceEntry {
  role: string
  org: string
  period: string
  points: string[]
}
