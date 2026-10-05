import { useEffect, useState } from 'react'

/**
 * Returns `true` once the page is scrolled past `threshold` pixels.
 *
 * The scroll handler is throttled with requestAnimationFrame (one update per
 * frame at most) and only flips React state when the boolean actually changes,
 * so it never triggers redundant re-renders. Listener + frame are cleaned up
 * on unmount to avoid leaks.
 */
export function useScrollThreshold(threshold = 0) {
  const [passed, setPassed] = useState(
    () => typeof window !== 'undefined' && window.scrollY > threshold
  )

  useEffect(() => {
    let frame = 0

    const update = () => {
      frame = 0
      setPassed(window.scrollY > threshold)
    }

    const onScroll = () => {
      // Coalesce bursts of scroll events into a single rAF-timed update.
      if (frame) return
      frame = requestAnimationFrame(update)
    }

    onScroll() // sync with current position on mount / threshold change
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [threshold])

  return passed
}
