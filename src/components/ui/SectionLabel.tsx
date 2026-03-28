import React from 'react'

interface SectionLabelProps {
  children: React.ReactNode
  className?: string
}

export const SectionLabel: React.FC<SectionLabelProps> = ({ children, className = '' }) => (
  <div
    className={[
      'rv inline-flex items-center gap-[.7rem]',
      'font-mono text-[.67rem] tracking-[.22em] uppercase text-gold mb-4',
      "before:content-[''] before:w-[18px] before:h-px before:bg-gold",
      className,
    ].join(' ')}
  >
    {children}
  </div>
)
