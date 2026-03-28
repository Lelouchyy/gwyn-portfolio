import type {
  EducationItem,
  ProjectItem,
  CertificationItem,
  SkillBar,
  SoftSkill,
  Tool,
  NavLink,
} from '../types'

export const NAV_LINKS: NavLink[] = [
  { label: 'About',       href: '#about' },
  { label: 'Education',   href: '#education' },
  { label: 'Skills',      href: '#skills' },
  { label: 'Projects',    href: '#projects' },
  { label: 'Credentials', href: '#certifications' },
]


export const MARQUEE_ITEMS: string[] = [
  'Financial Management',
  'Marketing Strategy',
  'Business Development',
  'Operations Management',
  'Data Analysis',
  'Corporate Strategy',
  'Leadership',
  'Problem Solving',
  'Financial Management',
  'Marketing Strategy',
  'Business Development',
  'Operations Management',
  'Data Analysis',
  'Corporate Strategy',
  'Leadership',
  'Problem Solving',
  'Financial Management',
  'Marketing Strategy',
  'Business Development',
  'Operations Management',
  'Data Analysis',
  'Corporate Strategy',
  'Leadership',
  'Problem Solving',
  'Financial Management',
  'Marketing Strategy',
  'Business Development',
  'Operations Management',
  'Data Analysis',
  'Corporate Strategy',
  'Leadership',
  'Problem Solving',
  'Financial Management',
  'Marketing Strategy',
  'Business Development',
  'Operations Management',
  'Data Analysis',
  'Corporate Strategy',
  'Leadership',
  'Problem Solving',
  'Financial Management',
  'Marketing Strategy',
  'Business Development',
  'Operations Management',
  'Data Analysis',
  'Corporate Strategy',
  'Leadership',
  'Problem Solving',
]

export const EDUCATION: EducationItem[] = [
  {
    degree:      'Bachelor of Science in Business Administration',
    institution: 'University of Eastern Pangasinan',
    location:    'Binalonan, Pangasinan',
    period:      'August 2022 – June 2026',
    track:       'Financial Management',
    gpa:         '',
    honor:       '',
    year:        '2026',
    coursework: [
      'Financial Accounting', 'Managerial Finance', 'Marketing Management',
      'Business Statistics', 'Operations Management', 'Corporate Strategy',
      'Organizational Behavior', 'Business Law', 'Investment Analysis',
      'Entrepreneurship', 'Supply Chain', 'Research Methods',
    ],
  },
  {
    degree:      'Senior High School — ABM Strand',
    institution: 'Urdaneta City National High School',
    location:    'Urdaneta City, Pangasinan',
    period:      'June 2019 – May 2021',
    track:       'Accountancy, Business & Management',
    honor:       'With Honors',
    year:        '2021',
    coursework: [
      'Applied Economics', 'Business Mathematics',
      'Fundamentals of Accounting', 'Business Ethics',
    ],
  },
]

export const SKILL_BARS: SkillBar[] = [
  { name: 'Microsoft Excel & Data Analysis',      pct: 92 },
  { name: 'Financial Analysis & Modeling',         pct: 85 },
  { name: 'Marketing Strategy & Planning',         pct: 80 },
  { name: 'Business Reporting & Presentations',    pct: 90 },
  { name: 'Operations & Supply Chain',             pct: 75 },
  { name: 'Google Workspace & MS Office',          pct: 95 },
]

export const SOFT_SKILLS: SoftSkill[] = [
  { name: 'Strategic Leadership' }, { name: 'Team Collaboration' },
  { name: 'Critical Thinking' },   { name: 'Problem Solving' },
  { name: 'Written Communication'},{ name: 'Public Speaking' },
  { name: 'Time Management' },     { name: 'Adaptability' },
  { name: 'Negotiation' },         { name: 'Client Relations' },
  { name: 'Attention to Detail' }, { name: 'Initiative' },
]

export const TOOLS: Tool[] = [
  { name: 'MS Excel' },    { name: 'PowerPoint' },
  { name: 'Google Sheets'},{ name: 'Canva' },
  { name: 'Tableau' },     { name: 'HubSpot' },
  { name: 'Notion' },      { name: 'Trello' },
]

export const PROJECTS: ProjectItem[] = [
  {
    id:          'feasibility-study',
    badge:       'Capstone Project',
    type:        'Financial Analysis · Strategy',
    title:       'Market Expansion Feasibility Study for a Mid-Sized FMCG Company',
    description: 'Conducted a comprehensive feasibility analysis for geographic expansion into Visayas region, including financial projections, competitive landscape mapping, and go-to-market strategy. Presented to a panel of industry mentors with a recommendation for phased entry.',
    tags:        ['Financial Modeling', 'Market Research', 'SWOT Analysis', 'Excel', 'PowerPoint'],
    gradient:    'g1',
    wide:        true,
    icon:        'bar-chart',
  },
  {
    id:          'digital-marketing',
    badge:       'Internship',
    type:        'Marketing · Internship',
    title:       'Digital Marketing Intern — Accenture Philippines',
    description: 'Assisted in campaign performance tracking, social media analytics, and monthly reporting. Created Excel dashboards that reduced reporting time by 30%.',
    tags:        ['Analytics', 'Campaign Reporting', 'Excel Dashboards'],
    gradient:    'g4',
    icon:        'monitor',
  },
  {
    id:          'supply-chain',
    badge:       'Case Study',
    type:        'Operations · Supply Chain',
    title:       'Supply Chain Optimization for a Retail SME',
    description: 'Analyzed procurement processes and identified ₱420K in annual cost reduction opportunities through supplier renegotiation and inventory strategies.',
    tags:        ['Operations', 'Cost Analysis', 'Process Mapping'],
    gradient:    'g2',
    icon:        'box',
  },
  {
    id:          'startup-plan',
    badge:       'Business Plan',
    type:        'Entrepreneurship',
    title:       'Business Plan: Sustainable Packaging Startup',
    description: 'Full business plan for an eco-packaging startup with 5-year financial projections and funding pitch. Won 2nd place in the university entrepreneurship competition.',
    tags:        ['Business Planning', 'Projections', 'Pitch Deck'],
    gradient:    'g3',
    icon:        'shield',
  },
]

export const CERTIFICATIONS: CertificationItem[] = [
  { name: 'Google Data Analytics Professional Certificate', org: 'Google / Coursera',               year: '2024',      icon: 'award'   },
  { name: 'Financial Modeling & Valuation Analyst (FMVA)',  org: 'Corporate Finance Institute',      year: '2024',      icon: 'activity'},
  { name: 'HubSpot Marketing Software Certification',       org: 'HubSpot Academy',                  year: '2023',      icon: 'monitor' },
  { name: 'Excel for Business — Advanced Level',            org: 'Macquarie University / Coursera',  year: '2023',      icon: 'edit'    },
  { name: "Dean's Lister — 7 Consecutive Semesters",        org: 'University of Santo Tomas',        year: '2021–2025', icon: 'star'    },
  { name: 'President, Business Management Society',         org: 'University of Santo Tomas',        year: '2023–2024', icon: 'users'   },
]
