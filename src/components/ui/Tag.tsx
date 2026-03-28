import React from 'react'

interface TagProps {
  children: React.ReactNode
  className?: string
}

export const Tag: React.FC<TagProps> = ({ children, className = '' }) => (
  <span
    className={[
      'tag px-[.72rem] py-[.26rem]',
      'bg-paper border border-line rounded-full',
      'text-[.72rem] text-body cursor-default',
      'transition-all duration-200',
      'hover:bg-navy hover:text-white hover:border-navy hover:-translate-y-0.5',
      className,
    ].join(' ')}
  >
    {children}
  </span>
)
