import { personal } from '../../data/personal'
import { socials } from '../../data/socials'
import ExternalLink from '../ui/ExternalLink'

/**
 * Short introduction at the top of the page: name, role, one-line summary and
 * the links people look for first.
 */
export default function Intro() {
  return (
    <section className="pt-16 pb-14 sm:pt-24 sm:pb-16">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        {personal.name}
      </h1>
      <p className="mt-2 text-lg text-muted">{personal.title}</p>
      <p className="mt-6 max-w-xl text-base sm:text-lg">{personal.intro}</p>

      <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm">
        {socials.map(({ id, label, href }) => (
          <li key={id}>
            <ExternalLink href={href}>{label}</ExternalLink>
          </li>
        ))}
        <li>
          <a href={personal.resumeUrl} download className="link">
            Résumé
          </a>
        </li>
      </ul>
    </section>
  )
}
