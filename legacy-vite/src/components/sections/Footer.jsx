import { personal } from '../../data/personal'

const year = new Date().getFullYear()

/**
 * Minimal footer: copyright and a way back to the top.
 */
export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-8 text-sm text-muted">
        <p>
          © {year} {personal.name}
        </p>
        <a href="#top" className="transition-colors hover:text-fg">
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}
