import { FiSun, FiMoon } from 'react-icons/fi'

/**
 * Dark/light theme switch. Controlled by the parent via `isDark` and
 * `onToggle` so a single source of truth (useTheme) drives the whole app.
 */
export default function ThemeToggle({ isDark, onToggle }) {
  const Icon = isDark ? FiSun : FiMoon
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="flex h-9 w-9 items-center justify-center rounded-md text-muted transition-colors hover:bg-subtle hover:text-fg"
    >
      <Icon className="h-4 w-4" />
    </button>
  )
}
