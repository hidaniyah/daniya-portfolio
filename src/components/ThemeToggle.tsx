'use client'

import { useEffect, useState } from 'react'

/**
 * Dark/light switch. Dark is the default; `.light` on <html> opts into the
 * light palette. Preference persists in localStorage and is applied pre-paint
 * by the inline script in layout.tsx.
 */
export default function ThemeToggle() {
  // `null` until mounted so SSR markup never disagrees with the client.
  const [light, setLight] = useState<boolean | null>(null)

  useEffect(() => {
    setLight(document.documentElement.classList.contains('light'))
  }, [])

  const toggle = () => {
    const next = !light
    document.documentElement.classList.toggle('light', next)
    try {
      localStorage.setItem('theme', next ? 'light' : 'dark')
    } catch {
      /* storage unavailable — theme simply won't persist */
    }
    setLight(next)
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={light ? 'Switch to dark mode' : 'Switch to light mode'}
      className="flex h-9 w-9 items-center justify-center rounded-md text-muted transition-colors hover:bg-raise hover:text-ink"
    >
      <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        {light ? (
          <path d="M13.5 9.5A5.5 5.5 0 0 1 6.5 2.5a5.5 5.5 0 1 0 7 7z" />
        ) : (
          <>
            <circle cx="8" cy="8" r="3" />
            <path d="M8 1v1.5M8 13.5V15M1 8h1.5M13.5 8H15M3 3l1 1M12 12l1 1M3 13l1-1M12 4l1-1" />
          </>
        )}
      </svg>
    </button>
  )
}
