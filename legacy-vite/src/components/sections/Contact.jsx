import Section from '../ui/Section'
import ExternalLink from '../ui/ExternalLink'
import { personal } from '../../data/personal'
import { socials } from '../../data/socials'

/**
 * Contact: a short note and the email address front and centre.
 */
export default function Contact() {
  const others = socials.filter((s) => s.id !== 'email')

  return (
    <Section id="contact" title="Contact">
      <p className="max-w-xl">
        I&apos;m open to full-time roles and freelance work. The quickest way to
        reach me is by email — I usually reply within a day or two.
      </p>
      <a
        href={`mailto:${personal.email}`}
        className="link mt-6 inline-block text-xl font-medium tracking-tight sm:text-2xl"
      >
        {personal.email}
      </a>
      <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
        {others.map(({ id, label, href }) => (
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
    </Section>
  )
}
