import { useEffect } from 'react'

function runCountUp(el: HTMLElement) {
  const target = parseFloat(el.dataset.count ?? '0')
  const isDecimal = (el.dataset.count ?? '').includes('.')
  let current = 0
  const increment = target / 100

  const id = setInterval(() => {
    current += increment
    if (current >= target) {
      current = target
      clearInterval(id)
    }
    el.textContent = isDecimal
      ? current.toFixed(2)
      : String(Math.floor(current))
  }, 16)
}

export function useCountUp() {
  useEffect(() => {
    const hero = document.getElementById('hero')
    if (!hero) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          document
            .querySelectorAll<HTMLElement>('[data-count]')
            .forEach(runCountUp)
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(hero)
    return () => observer.disconnect()
  }, [])
}
