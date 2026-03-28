import React from 'react'
import { SectionLabel } from '../ui/SectionLabel'
import { Tag } from '../ui/Tag'
import { EDUCATION } from '../../data'

export const Education: React.FC = () => (
  <section id="education" className="bg-paper">
    <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-24">
      <SectionLabel>02 — Education</SectionLabel>
      <h2 className="rv font-playfair text-[clamp(2rem,4vw,3.1rem)] font-bold text-navy leading-[1.12] tracking-tight mb-2"
        style={{ transitionDelay: '.08s' }}>
        Academic <em className="not-italic text-gold">Foundation</em>
      </h2>
      <p className="rv text-[.98rem] font-light text-muted max-w-[480px] leading-[1.7] mb-14"
        style={{ transitionDelay: '.16s' }}>
        A rigorous curriculum combining core business disciplines with real-world application.
      </p>

      <div className="flex flex-col gap-5">
        {EDUCATION.map((ed, i) => (
          <div
            key={ed.degree}
            className="ecard rv relative overflow-hidden bg-white border border-line rounded-[8px] p-10 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 shadow-[0_2px_16px_rgba(11,22,40,.05)] transition-all duration-300 hover:translate-x-[6px] hover:shadow-[0_12px_40px_rgba(11,22,40,.10)]"
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            {/* Left accent bar */}
            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-gold to-gold2 scale-y-0 origin-top transition-transform duration-[.45s] group-hover:scale-y-100" />

            <div>
              <div className="font-playfair text-[1.4rem] font-bold text-navy mb-[.3rem]">{ed.degree}</div>
              <div className="text-[.86rem] text-gold font-semibold mb-[.28rem] tracking-[.03em]">
                {ed.institution} — {ed.location}
              </div>
              <div className="flex flex-wrap items-center gap-5 text-[.76rem] text-muted mb-6">
                <span>{ed.period}</span>
                <span className="w-[3px] h-[3px] rounded-full bg-line" />
                <span>{ed.track}</span>
                {ed.gpa && (
                  <span className="font-mono bg-[rgba(11,22,40,.06)] text-navy px-3 py-[.22rem] rounded-[20px] text-[.7rem]">
                    GPA: {ed.gpa}
                  </span>
                )}
              </div>
              <div className="text-[.68rem] uppercase tracking-[.14em] text-muted font-semibold mb-3">
                {ed.gpa ? 'Relevant Coursework' : 'Key Subjects'}
              </div>
              <div className="flex flex-wrap gap-[.42rem]">
                {ed.coursework.map((c) => (
                  <Tag key={c}>{c}</Tag>
                ))}
              </div>
            </div>

            <div className="text-left md:text-right">
              <span className="inline-block bg-gradient-to-br from-gold to-gold2 text-navy text-[.7rem] font-bold px-4 py-[.32rem] rounded-[20px] uppercase tracking-[.08em] shadow-[0_4px_12px_rgba(200,168,75,.3)]">
                {ed.honor}
              </span>
              <div className="font-playfair text-[2.6rem] font-bold text-line leading-none mt-2">
                {ed.year}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)
