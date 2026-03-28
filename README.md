# Gwyneth Heart Veniegas — BSBA Portfolio

A production-grade personal portfolio site built with **React 18**, **TypeScript**, **Vite**, and **Tailwind CSS**.

## Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 | UI framework |
| TypeScript | Type safety |
| Vite | Dev server & bundler |
| Tailwind CSS v3 | Utility-first styling |
| Google Fonts | Playfair Display, Outfit, DM Mono |

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Cursor.tsx        # Custom cursor
│   │   │   ├── Navbar.tsx        # Sticky responsive nav
│   │   │   └── Footer.tsx        # Site footer
│   │   ├── sections/
│   │   │   ├── Hero.tsx          # Landing / hero section
│   │   │   ├── Marquee.tsx       # Scrolling ticker band
│   │   │   ├── About.tsx         # About me section
│   │   │   ├── Education.tsx     # Education cards
│   │   │   ├── Skills.tsx        # Skill bars + soft skills
│   │   │   ├── Projects.tsx      # Project case studies
│   │   │   ├── Certifications.tsx# Credential cards
│   │   │   └── Contact.tsx       # Contact form + info
│   │   └── ui/
│   │       ├── Button.tsx        # Reusable button/link
│   │       ├── Icons.tsx         # All SVG icon components
│   │       ├── SectionLabel.tsx  # Monospaced section label
│   │       └── Tag.tsx           # Pill tag component
│   ├── data/
│   │   └── index.ts              # All portfolio content data
│   ├── hooks/
│   │   ├── useCursor.ts          # Custom cursor logic
│   │   ├── useCountUp.ts         # Animated number counter
│   │   ├── useScrollReveal.ts    # Intersection-based reveals
│   │   └── useSkillBars.ts       # Skill bar animation
│   ├── types/
│   │   └── index.ts              # Shared TypeScript types
│   ├── App.tsx                   # Root component
│   ├── main.tsx                  # Entry point
│   ├── index.css                 # Global styles + Tailwind
│   └── vite-env.d.ts
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Customization

All portfolio content lives in **`src/data/index.ts`** — edit that single file to update your name, education, projects, skills, and certifications without touching any component code.
