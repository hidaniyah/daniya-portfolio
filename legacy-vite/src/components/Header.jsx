import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { navLinks } from '../data/navLinks'
import { personal } from '../data/personal'
import { useScrollThreshold } from '../hooks/useScrollThreshold'
import ThemeToggle from './ui/ThemeToggle'

/**
 * Slim sticky header: name, section links with an active state, theme toggle
 * and a compact dropdown menu on small screens.
 */
export default function Header({ activeSection, isDark, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)
  // Show a hairline under the header once content scrolls beneath it.
  const scrolled = useScrollThreshold(8)

  const linkClass = (id) =>
    `text-sm transition-colors ${
      activeSection === id ? 'text-fg' : 'text-muted hover:text-fg'
    }`

  return (
    <header
      className={`sticky top-0 z-40 border-b bg-bg/85 backdrop-blur transition-colors ${
        scrolled || menuOpen ? 'border-line' : 'border-transparent'
      }`}
    >
      <nav aria-label="Primary" className="mx-auto flex h-14 max-w-3xl items-center justify-between px-6">
        <a
          href="#top"
          onClick={() => setMenuOpen(false)}
          className="text-sm font-semibold text-fg"
        >
          {personal.name}
        </a>

        <div className="flex items-center gap-1">
          <ul className="mr-3 hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  aria-current={activeSection === link.id ? 'true' : undefined}
                  className={linkClass(link.id)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="flex h-9 w-9 items-center justify-center rounded-md text-muted hover:bg-subtle hover:text-fg md:hidden"
          >
            {menuOpen ? <FiX className="h-4 w-4" /> : <FiMenu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <ul id="mobile-menu" className="mx-auto max-w-3xl px-6 pb-4 md:hidden">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => setMenuOpen(false)}
                className={`block py-2 ${linkClass(link.id)}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
