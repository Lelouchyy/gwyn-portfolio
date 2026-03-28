export interface EducationItem {
  degree: string
  institution: string
  location: string
  period: string
  track: string
  gpa?: string
  honor: string
  year: string
  coursework: string[]
}

export interface ProjectItem {
  id: string
  badge: string
  type: string
  title: string
  description: string
  tags: string[]
  gradient: 'g1' | 'g2' | 'g3' | 'g4'
  wide?: boolean
  icon: 'bar-chart' | 'monitor' | 'box' | 'shield'
}

export interface CertificationItem {
  name: string
  org: string
  year: string
  icon: 'award' | 'activity' | 'monitor' | 'edit' | 'star' | 'users'
}

export interface SkillBar {
  name: string
  pct: number
}

export interface SoftSkill {
  name: string
}

export interface Tool {
  name: string
}

export interface NavLink {
  label: string
  href: string
}

export interface StatItem {
  value: string
  label: string
  isDecimal?: boolean
}
