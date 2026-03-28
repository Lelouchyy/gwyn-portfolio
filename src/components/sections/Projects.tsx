import React, { useEffect } from 'react'
import { SectionLabel } from '../ui/SectionLabel'
import { PROJECTS } from '../../data'
import { Icons } from '../ui/Icons'
import type { ProjectItem } from '../../types'

const gradients: Record<string, string> = {
  g1: 'linear-gradient(145deg,#0b1628 0%,#1a3560 100%)',
  g2: 'linear-gradient(145deg,#1a3560 0%,#c8a84b 100%)',
  g3: 'linear-gradient(145deg,#22477a 0%,#3d6fa0 100%)',
  g4: 'linear-gradient(145deg,#c8a84b 0%,#f5e4b0 100%)',
}

const ProjectIcon: React.FC<{ icon: ProjectItem['icon'] }> = ({ icon }) => {
  const map = {
    'bar-chart': <Icons.BarChart />,
    monitor:     <Icons.Monitor />,
    box:         <Icons.Box />,
    shield:      <Icons.Shield />,
  }
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[46px] h-[46px] rounded-full bg-white/10 flex items-center justify-center [&>span>svg]:w-[21px] [&>span>svg]:h-[21px] [&>span>svg]:stroke-white/60 [&>span>svg]:fill-none [&>span>svg]:[stroke-width:1.6]">
      {map[icon]}
    </div>
  )
}

export const Projects: React.FC = () => {
  // 3-D tilt on hover
  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>('.pcard')
    const handlers: Array<{ el: HTMLElement; mm: (e: MouseEvent) => void; ml: () => void }> = []

    cards.forEach((card) => {
      const mm = (e: MouseEvent) => {
        const r = card.getBoundingClientRect()
        const x = (e.clientX - r.left) / r.width  - 0.5
        const y = (e.clientY - r.top)  / r.height - 0.5
        card.style.transform = `translateY(-8px) rotateY(${x * 6}deg) rotateX(${-y * 4}deg)`
      }
      const ml = () => { card.style.transform = '' }
      card.addEventListener('mousemove', mm)
      card.addEventListener('mouseleave', ml)
      handlers.push({ el: card, mm, ml })
    })

    return () => handlers.forEach(({ el, mm, ml }) => {
      el.removeEventListener('mousemove', mm)
      el.removeEventListener('mouseleave', ml)
    })
  }, [])

  return (
    <section id="projects" className="bg-cream">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-24">
        <SectionLabel>04 — Projects &amp; Experience</SectionLabel>
        <h2 className="rv font-playfair text-[clamp(2rem,4vw,3.1rem)] font-bold text-navy leading-[1.12] tracking-tight mb-2"
          style={{ transitionDelay: '.08s' }}>
          Work &amp; <em className="not-italic text-gold">Case Studies</em>
        </h2>
        <p className="rv text-[.98rem] font-light text-muted max-w-[480px] leading-[1.7] mb-14"
          style={{ transitionDelay: '.16s' }}>
          Academic projects, internships, and real-world applications of business administration principles.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {PROJECTS.map((p, i) => (
            <div
              key={p.id}
              className={[
                'pcard rv bg-white border border-line rounded-[8px] overflow-hidden shadow-[0_2px_16px_rgba(11,22,40,.05)] flex flex-col transition-all duration-400',
                'hover:-translate-y-2 hover:shadow-[0_28px_64px_rgba(11,22,40,.13)]',
                p.wide ? 'md:col-span-2 md:flex-row' : '',
              ].join(' ')}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Image */}
              <div
                className={[
                  'relative overflow-hidden flex-shrink-0',
                  p.wide ? 'h-[185px] md:h-auto md:w-64' : 'h-[185px]',
                ].join(' ')}
              >
                <div
                  className="pibg absolute inset-0 transition-transform duration-[.6s] hover:scale-105"
                  style={{ background: gradients[p.gradient] }}
                />
                <div className="absolute top-4 left-4 bg-white/14 backdrop-blur-[8px] border border-white/22 text-white text-[.64rem] font-semibold uppercase tracking-[.1em] px-[.72rem] py-[.26rem] rounded-[20px]">
                  {p.badge}
                </div>
                <ProjectIcon icon={p.icon} />
              </div>

              {/* Body */}
              <div className="p-[1.55rem] flex-1 flex flex-col">
                <div className="text-[.66rem] uppercase tracking-[.14em] text-gold font-semibold mb-[.45rem]">
                  {p.type}
                </div>
                <div className="font-playfair text-[1.08rem] font-bold text-navy mb-[.55rem] leading-[1.35]">
                  {p.title}
                </div>
                <div className="text-[.8rem] text-muted leading-[1.68] mb-[1.1rem] flex-1">
                  {p.description}
                </div>
                <div className="flex flex-wrap gap-[.32rem]">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="ptag text-[.67rem] px-[.62rem] py-[.2rem] bg-paper border border-line rounded-[20px] text-body transition-all duration-200 hover:bg-navy hover:text-white hover:border-navy cursor-default"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
