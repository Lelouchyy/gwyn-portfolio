import { useEffect, useRef } from 'react'

export function useSkillBars() {
  const sectionRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const section = document.getElementById('skills')
    if (!section) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const bars = document.querySelectorAll<HTMLElement>('.skfl')
          bars.forEach((bar, i) => {
            setTimeout(() => {
              const w = bar.dataset.w ?? '0'
              bar.style.width = `${w}%`
            }, i * 130)
          })
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return sectionRef
}
