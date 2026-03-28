import { useEffect } from 'react'

export function useCursor() {
  useEffect(() => {
    const curElement = document.getElementById('cur')
    const dotElement = document.getElementById('cdot')
    const ringElement = document.getElementById('cring')
    if (!curElement || !dotElement || !ringElement) return

    const cdot = dotElement as HTMLElement
    const cring = ringElement as HTMLElement

    let mx = 0, my = 0, rx = 0, ry = 0
    let rafId: number

    const onMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
    }

    function tick() {
      rx += (mx - rx) * 0.14
      ry += (my - ry) * 0.14
      cdot.style.left  = mx + 'px'
      cdot.style.top   = my + 'px'
      cring.style.left = rx + 'px'
      cring.style.top  = ry + 'px'
      rafId = requestAnimationFrame(tick)
    }

    document.addEventListener('mousemove', onMove)
    rafId = requestAnimationFrame(tick)

    const hoverEls = document.querySelectorAll(
      'a, button, .tag, .ptag, .tchip, .spill, .scard, .ccard, .pcard, .ecard'
    )
    const addHover = () => document.body.classList.add('ch')
    const rmHover  = () => document.body.classList.remove('ch')
    hoverEls.forEach((el) => {
      el.addEventListener('mouseenter', addHover)
      el.addEventListener('mouseleave', rmHover)
    })

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
      hoverEls.forEach((el) => {
        el.removeEventListener('mouseenter', addHover)
        el.removeEventListener('mouseleave', rmHover)
      })
    }
  }, [])
}
