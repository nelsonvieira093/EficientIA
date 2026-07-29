import type { LucideIcon } from 'lucide-react'

export interface NavLink {
  label: string
  path: string
}

export interface Service {
  slug: string
  icon: LucideIcon
  title: string
  shortDescription: string
  description: string
  capabilities: string[]
}

export type ProjectCategory =
  | 'Web'
  | 'Mobile'
  | 'ERP'
  | 'IA'
  | 'Automação'
  | 'Cloud'
  | 'BI'

export interface Project {
  slug: string
  title: string
  category: ProjectCategory
  summary: string
  description: string
  image: string
  technologies: string[]
  objective: string
  result: string
  year: string
}

export interface CaseStudy {
  slug: string
  client: string
  segment: string
  title: string
  challenge: string
  solution: string
  technologies: string[]
  results: { label: string; value: string }[]
  image: string
}

export type BlogCategory =
  | 'Tecnologia'
  | 'IA'
  | 'Cloud'
  | 'Automação'
  | 'Desenvolvimento'
  | 'ERP'
  | 'Negócios'

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string[]
  category: BlogCategory
  author: string
  date: string
  readTime: string
  image: string
}

export interface Testimonial {
  name: string
  role: string
  company: string
  quote: string
  avatar: string
}

export interface TechItem {
  name: string
  icon: string
}

export interface ProcessStep {
  step: string
  title: string
  description: string
  icon: LucideIcon
}

export interface Stat {
  label: string
  value: number
  suffix: string
}

export interface Differential {
  icon: LucideIcon
  title: string
  description: string
}
