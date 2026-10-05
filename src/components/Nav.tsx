'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { profile } from '@/data/profile'
import { useActiveSection } from '@/lib/useActiveSection'
import { sections, sectionIds } from '@/lib/sections'
import ThemeToggle from './ThemeToggle'

/**
 * Sticky header: name on the left, section links in the middle
 * (the one in view is highlighted), theme and résumé on the right. Small
 * screens get a dropdown.
 */
export default function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const active = useActiveSection(sectionIds, pathname === '/')

  // Close the menu whenever the route changes.
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/85 backdrop-blur">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6"
      >
        <Link href="/" className="font-display text-lg font-bold text-ink">
          {profile.name}
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {sections.map(({ id, label }) => {
            const isActive = active === id
            return (
              <li key={id}>
                <Link
                  href={`/#${id}`}
                  aria-current={isActive ? 'true' : undefined}
                  className={`text-sm font-medium capitalize transition-colors ${
                    isActive ? 'text-accent' : 'text-muted hover:text-ink'
                  }`}
                >
                  {label}
                </Link>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            href="/resume"
            className={`hidden rounded-lg border px-4 py-1.5 text-sm font-medium transition-colors sm:inline-flex ${
              pathname === '/resume'
                ? 'border-accent-strong bg-accent-strong text-white'
                : 'border-line text-ink hover:border-accent/60'
            }`}
          >
            Résumé
          </Link>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="flex h-9 w-9 items-center justify-center rounded-md text-muted transition-colors hover:bg-raise hover:text-ink md:hidden"
          >
            <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              {open ? <path d="M3.5 3.5l9 9M12.5 3.5l-9 9" /> : <path d="M2 4.5h12M2 8h12M2 11.5h12" />}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <ul id="mobile-menu" className="mx-auto max-w-6xl px-6 pb-4 text-sm font-medium capitalize md:hidden">
          {sections.map(({ id, label }) => (
            <li key={id}>
              <Link
                href={`/#${id}`}
                onClick={() => setOpen(false)}
                className={`block py-2 ${active === id ? 'text-accent' : 'text-muted'}`}
              >
                {label}
              </Link>
            </li>
          ))}
          <li className="sm:hidden">
            <Link href="/resume" onClick={() => setOpen(false)} className="block py-2 text-muted">
              résumé
            </Link>
          </li>
        </ul>
      )}
    </header>
  )
}
