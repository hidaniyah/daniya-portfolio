'use client'

import { useEffect, useState } from 'react'

/** True once the page is scrolled past `threshold` pixels (rAF-throttled). */
export function useScrollThreshold(threshold: number) {
  const [passed, setPassed] = useState(false)

  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      setPassed(window.scrollY > threshold)
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [threshold])

  return passed
}
