'use client'

import { useEffect, useState } from 'react'

/**
 * Returns the id of the section currently in view, or '' while the reader is
 * above the first one (or `enabled` is false, e.g. on another route).
 *
 * A section is active once its top passes a line 35% down the viewport. At
 * the very bottom of the page the last section wins, since a short final
 * section may never reach that line.
 */
export function useActiveSection(ids: readonly string[], enabled = true) {
  const [active, setActive] = useState('')

  useEffect(() => {
    if (!enabled) {
      setActive('')
      return
    }

    let frame = 0
    const update = () => {
      frame = 0
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2
      if (atBottom) {
        setActive(ids[ids.length - 1] ?? '')
        return
      }
      const line = window.innerHeight * 0.35
      let current = ''
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= line) current = id
      }
      setActive(current)
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [ids, enabled])

  return active
}
