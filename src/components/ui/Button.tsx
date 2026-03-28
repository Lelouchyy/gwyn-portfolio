import React from 'react'

type Variant = 'dark' | 'outline' | 'gold'

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant
  children: React.ReactNode
}

const variantClass: Record<Variant, string> = {
  dark:    'bg-navy text-white shadow-[0_6px_24px_rgba(11,22,40,.22)] hover:shadow-[0_14px_36px_rgba(11,22,40,.3)]',
  outline: 'bg-transparent text-navy border-[1.5px] border-navy hover:bg-navy hover:text-white',
  gold:    'bg-gradient-to-br from-gold to-gold2 text-navy font-bold shadow-[0_6px_24px_rgba(200,168,75,.32)] hover:shadow-[0_14px_36px_rgba(200,168,75,.42)]',
}

export const Button: React.FC<ButtonProps> = ({ variant = 'dark', children, className = '', ...props }) => (
  <a
    className={[
      'inline-flex items-center gap-[.55rem]',
      'font-outfit text-[.78rem] font-semibold uppercase tracking-[.1em]',
      'no-underline border-none px-[2.1rem] py-[.88rem] rounded-sm',
      'cursor-none transition-all duration-300 relative overflow-hidden',
      'hover:-translate-y-[3px]',
      variantClass[variant],
      className,
    ].join(' ')}
    {...props}
  >
    {children}
  </a>
)
