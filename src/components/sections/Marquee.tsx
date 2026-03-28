import React from 'react'
import { MARQUEE_ITEMS } from '../../data'

export const Marquee: React.FC = () => {
  return (
    <div className="bg-navy overflow-hidden py-4 border-t border-white/8 border-b border-white/8 shadow-[inset_0_1px_0_rgba(255,255,255,.04)]">
      <div className="mloop">
        {[0, 1].map((groupIndex) => (
          <div key={groupIndex} className="mtrack" aria-hidden={groupIndex === 1}>
            {MARQUEE_ITEMS.map((item, itemIndex) => (
              <div
                key={`${groupIndex}-${itemIndex}-${item}`}
                className="inline-flex items-center gap-5 px-10 font-mono text-[.72rem] font-semibold tracking-[.14em] uppercase text-gold3 [text-shadow:0_1px_10px_rgba(0,0,0,.2)]"
              >
                {item}
                <span className="text-gold">✦</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
