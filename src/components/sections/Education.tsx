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
            className="group ecard rv relative overflow-hidden rounded-[8px] border border-line bg-white p-10 shadow-[0_2px_16px_rgba(11,22,40,.05)] transition-all duration-300 hover:border-gold/35 hover:shadow-[0_14px_36px_rgba(11,22,40,.08)]"
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(226,194,110,.14),transparent_34%),linear-gradient(180deg,rgba(255,255,255,.55),rgba(255,255,255,0))] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            {/* Left accent bar */}
            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-gold to-gold2 scale-y-0 origin-top transition-transform duration-[.45s] group-hover:scale-y-100" />

            <div className="relative flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
              <div className="min-w-0 flex-1">
                <div className="mb-[.3rem] font-playfair text-[1.4rem] font-bold text-navy transition-colors duration-300 group-hover:text-[#13284d]">{ed.degree}</div>
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

              <div className="text-left transition-all duration-300 md:pl-4 md:text-right">
                {ed.honor && (
                  <span className="inline-block bg-gradient-to-br from-gold to-gold2 text-navy text-[.7rem] font-bold px-4 py-[.32rem] rounded-[20px] uppercase tracking-[.08em] shadow-[0_4px_12px_rgba(200,168,75,.3)]">
                    {ed.honor}
                  </span>
                )}
                <div className="mt-2 font-playfair text-[2.6rem] font-bold leading-none text-line transition-colors duration-300 group-hover:text-[rgba(16,32,64,.16)]">
                  {ed.year}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)
