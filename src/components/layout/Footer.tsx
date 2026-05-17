import React from 'react'

export const Footer: React.FC = () => (
  <footer className="bg-ink py-7 px-10 border-t border-white/5">
    <div className="max-w-[1280px] mx-auto flex items-center justify-between gap-4 flex-wrap">
      <div className="font-playfair text-[.95rem] font-bold text-white/72">
         <span className="text-gold"> Gwyneth Heart Veniegas</span>
      </div>
      {/* <div className="text-[.72rem] text-white/48">
        © 2025 Gwyneth Heart Veniegas · BSBA Portfolio
      </div> */}
      <div className="flex gap-7">
        {['Top', 'About', 'Contact'].map((l) => (
          <a
            key={l}
            href={l === 'Top' ? '#hero' : `#${l.toLowerCase()}`}
            className="text-[.7rem] text-white/55 no-underline uppercase tracking-[.1em] transition-colors duration-200 hover:text-gold"
          >
            {l}
          </a>
        ))}
      </div>
    </div>
  </footer>
)
