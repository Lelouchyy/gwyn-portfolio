import React, { useEffect, useState } from 'react'
import { NAV_LINKS } from '../../data'

export const Navbar: React.FC = () => {
  const [solid, setSolid]   = useState(true)
  const [open,  setOpen]    = useState(false)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <>
      <nav
        id="nav"
        className={[
          'fixed top-0 left-0 right-0 z-[500] transition-all duration-400',
          solid
            ? 'bg-cream/93 backdrop-blur-xl border-b border-line shadow-[0_2px_24px_rgba(11,22,40,.06)]'
            : '',
        ].join(' ')}
      >
        <div className="max-w-[1280px] mx-auto px-10 h-[72px] flex items-center justify-between">
          {/* Brand */}
          <a
            href="#hero"
            className="font-playfair text-[1.2rem] font-bold text-navy no-underline"
          >
            Gwyneth Heart Veniegas
          
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex gap-10 list-none items-center">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={[
                    'text-[.76rem] font-medium uppercase tracking-[.12em]',
                    'text-muted no-underline transition-colors duration-200',
                    'relative pb-0.5',
                    'hover:text-navy',
                    "after:content-[''] after:absolute after:bottom-0 after:left-0",
                    'after:h-px after:w-0 after:bg-gold after:transition-[width] after:duration-300',
                    'hover:after:w-full',
                  ].join(' ')}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className={[
                  'px-6 py-2 bg-navy text-white no-underline rounded-sm',
                  'text-[.76rem] font-medium uppercase tracking-[.1em]',
                  'transition-all duration-200 hover:bg-navy3 hover:-translate-y-0.5',
                ].join(' ')}
              >
                Hire Me
              </a>
            </li>
          </ul>

          {/* Hamburger */}
          <button
            className="md:hidden bg-transparent border-none cursor-none flex flex-col gap-[5px] p-1"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span
              className={[
                'block w-[22px] h-[1.5px] bg-navy rounded-sm transition-all duration-300',
                open ? 'translate-y-[6.5px] rotate-45' : '',
              ].join(' ')}
            />
            <span
              className={[
                'block w-[22px] h-[1.5px] bg-navy rounded-sm transition-all duration-300',
                open ? 'opacity-0 scale-x-0' : '',
              ].join(' ')}
            />
            <span
              className={[
                'block w-[22px] h-[1.5px] bg-navy rounded-sm transition-all duration-300',
                open ? '-translate-y-[6.5px] -rotate-45' : '',
              ].join(' ')}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden fixed inset-0 top-[72px] bg-cream z-[490] flex flex-col px-10 py-8 gap-1">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={close}
              className="text-[1.1rem] font-medium text-navy no-underline py-3.5 border-b border-line"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={close}
            className="text-[1.1rem] font-medium text-navy no-underline py-3.5 border-b border-line"
          >
            Contact
          </a>
        </div>
      )}
    </>
  )
}
