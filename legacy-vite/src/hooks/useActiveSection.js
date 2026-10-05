import { useEffect, useState } from 'react'

/**
 * Returns the id of the section currently in view, or '' while the reader is
 * above the first one. Powers the active state in the header.
 *
 * A section is active once its top passes a line 35% down the viewport. At
 * the very bottom of the page the last section wins, since short final
 * sections may never reach that line.
 *
 * @param {string[]} sectionIds - DOM ids to observe, in document order.
 */
export function useActiveSection(sectionIds) {
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    let frame = 0

    const update = () => {
      frame = 0
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2
      if (atBottom) {
        setActiveId(sectionIds[sectionIds.length - 1] ?? '')
        return
      }

      const line = window.innerHeight * 0.35
      let current = ''
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= line) current = id
      }
      setActiveId(current)
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
  }, [sectionIds])

  return activeId
}
