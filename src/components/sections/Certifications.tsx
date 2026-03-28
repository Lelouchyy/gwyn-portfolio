import React from 'react'
import { SectionLabel } from '../ui/SectionLabel'
import { Icons } from '../ui/Icons'
import { CERTIFICATIONS } from '../../data'
import type { CertificationItem } from '../../types'

const iconMap: Record<CertificationItem['icon'], React.ReactNode> = {
  award:    <Icons.Award />,
  activity: <Icons.Activity />,
  monitor:  <Icons.Monitor />,
  edit:     <Icons.Edit />,
  star:     <Icons.Star />,
  users:    <Icons.Users />,
}

export const Certifications: React.FC = () => (
  <section id="certifications" className="bg-paper">
    <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-24">
      <SectionLabel>05 — Credentials</SectionLabel>
      <h2 className="rv font-playfair text-[clamp(2rem,4vw,3.1rem)] font-bold text-navy leading-[1.12] tracking-tight mb-2"
        style={{ transitionDelay: '.08s' }}>
        Certifications &amp; <em className="not-italic text-gold">Achievements</em>
      </h2>
      <p className="rv text-[.98rem] font-light text-muted max-w-[480px] leading-[1.7] mb-14"
        style={{ transitionDelay: '.16s' }}>
        Professional development beyond the classroom — validating skills through recognized industry credentials.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1.1rem]">
        {CERTIFICATIONS.map((c, i) => (
          <div
            key={c.name}
            className="ccard rv relative overflow-hidden flex items-start gap-[1.1rem] p-5 bg-white border border-line rounded-[8px] shadow-[0_2px_12px_rgba(11,22,40,.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(11,22,40,.10)]"
            style={{ transitionDelay: `${i * 0.08}s` }}
          >
            {/* Top accent bar */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-gold to-gold2 scale-x-0 origin-left transition-transform duration-400 group-hover:scale-x-100" />

            <div className="w-11 h-11 rounded-[5px] flex-shrink-0 bg-gradient-to-br from-navy to-navy2 flex items-center justify-center shadow-[0_4px_12px_rgba(11,22,40,.16)] [&>span>svg]:w-[19px] [&>span>svg]:h-[19px] [&>span>svg]:stroke-gold [&>span>svg]:fill-none [&>span>svg]:[stroke-width:1.8]">
              {iconMap[c.icon]}
            </div>
            <div>
              <div className="font-semibold text-[.86rem] text-navy mb-[.18rem] leading-[1.4]">{c.name}</div>
              <div className="text-[.73rem] text-gold font-semibold mb-[.18rem]">{c.org}</div>
              <div className="font-mono text-[.68rem] text-muted">{c.year}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)
