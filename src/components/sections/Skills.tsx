import React from 'react'
import { SectionLabel } from '../ui/SectionLabel'
import { SKILL_BARS, SOFT_SKILLS } from '../../data'
import { useSkillBars } from '../../hooks/useSkillBars'

export const Skills: React.FC = () => {
  useSkillBars()

  return (
    <section id="skills" className="bg-navy overflow-hidden relative">
      {/* Background geo */}
      <svg className="absolute opacity-[.04]" style={{ top: '-10%', right: '-5%', width: 480, height: 480 }} viewBox="0 0 480 480" fill="none">
        <circle cx="240" cy="240" r="230" stroke="white" strokeWidth="1" strokeDasharray="6 12"/>
      </svg>
      <svg className="absolute opacity-[.04]" style={{ bottom: '-15%', left: '-8%', width: 380, height: 380 }} viewBox="0 0 380 380" fill="none">
        <circle cx="190" cy="190" r="170" stroke="#c8a84b" strokeWidth="1" strokeDasharray="4 8"/>
      </svg>

      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-24 relative z-[1]">
        <SectionLabel>03 — Skills</SectionLabel>
        <h2 className="rv mb-2 font-playfair text-[clamp(2rem,4vw,3.1rem)] font-bold leading-[1.12] tracking-tight text-white [text-shadow:0_10px_34px_rgba(7,12,24,.32)]"
          style={{ transitionDelay: '.08s' }}>
          Core <em className="not-italic text-gold2">Competencies</em>
        </h2>
        <p className="rv mb-14 max-w-[560px] text-[1.02rem] font-light leading-[1.85] text-white [text-shadow:0_6px_24px_rgba(7,12,24,.26)]"
          style={{ transitionDelay: '.16s' }}>
          Technical proficiency and interpersonal excellence developed through academic and professional experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {/* Hard skills */}
          <div className="rvl">
            <div className="mb-7 border-b border-white/18 pb-3 text-[.7rem] font-semibold uppercase tracking-[.18em] text-gold2">
              Technical Skills
            </div>
            {SKILL_BARS.map((s) => (
              <div key={s.name} className="mb-7">
                <div className="flex justify-between mb-[.55rem]">
                  <span className="text-[.84rem] text-white/90">{s.name}</span>
                  <span className="font-mono text-[.7rem] text-gold2">{s.pct}%</span>
                </div>
                <div className="h-0.5 overflow-hidden rounded-sm bg-white/18">
                  <div className="skfl" data-w={s.pct} />
                </div>
              </div>
            ))}
          </div>

          {/* Soft skills */}
          <div className="rvr">
            <div className="mb-7 border-b border-white/18 pb-3 text-[.7rem] font-semibold uppercase tracking-[.18em] text-gold2">
              Skills &amp; Competencies
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {SOFT_SKILLS.map((s) => (
                <div
                  key={s.name}
                  className="spill flex cursor-default items-center gap-[.7rem] rounded-[10px] border border-white/28 bg-[rgba(255,255,255,.08)] px-5 py-[.95rem] shadow-[0_10px_30px_rgba(7,12,24,.18)] backdrop-blur-sm transition-all duration-300 hover:translate-x-1 hover:border-[rgba(226,194,110,.55)] hover:bg-[rgba(255,255,255,.12)] hover:shadow-[0_18px_40px_rgba(7,12,24,.24)]"
                >
                  <div className="h-[7px] w-[7px] flex-shrink-0 rounded-full bg-gold2 shadow-[0_0_0_4px_rgba(200,168,75,.12)]" />
                  <span className="text-[.84rem] font-medium text-white">{s.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
