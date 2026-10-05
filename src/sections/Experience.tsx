import Link from 'next/link'
import { FiArrowRight, FiMapPin, FiMinus, FiPlus } from 'react-icons/fi'
import Section from '@/components/Section'
import Reveal from '@/components/Reveal'
import { roles } from '@/data/experience'

/**
 * Experience as an accordion of native <details> rows (keyboard and screen
 * reader friendly with no script). The most recent role starts open.
 */
export default function Experience() {
  return (
    <Section
      id="experience"
      title="Professional Experience"
      center
    >
      <div className="mx-auto max-w-3xl space-y-3">
        {roles.map((role, i) => (
          <Reveal key={role.period} delay={i * 80}>
            <details open={i === 0} className="group">
              <summary className="flex cursor-pointer list-none items-center gap-4 rounded-lg border border-accent-strong/30 bg-accent-strong/10 px-5 py-4 transition-colors hover:bg-accent-strong/20 group-open:border-accent-strong group-open:bg-accent-strong [&::-webkit-details-marker]:hidden">
                <span className="flex-1 font-display font-semibold text-ink group-open:text-white">
                  {role.title} <span className="font-normal text-muted group-open:text-white/75">@ {role.company}</span>
                </span>
                <span className="hidden font-display font-semibold tabular-nums text-ink group-open:text-white sm:block">
                  {role.period}
                </span>
                <FiPlus aria-hidden="true" className="h-5 w-5 text-accent group-open:hidden" />
                <FiMinus aria-hidden="true" className="hidden h-5 w-5 text-white group-open:block" />
              </summary>

              <div className="mt-3 rounded-lg border border-line bg-raise p-6">
                <p className="flex flex-wrap items-center gap-x-5 gap-y-1 font-mono text-sm text-muted">
                  <span className="inline-flex items-center gap-1.5">
                    <FiMapPin className="h-4 w-4 text-accent" aria-hidden="true" />
                    {role.location}
                  </span>
                  <span className="sm:hidden">{role.period}</span>
                </p>
                <p className="mt-4">{role.summary}</p>
                <ul className="mt-4 space-y-1.5">
                  {role.highlights.map((item) => (
                    <li
                      key={item}
                      className="relative pl-4 before:absolute before:left-0 before:top-[0.7em] before:h-1 before:w-1 before:rounded-full before:bg-accent"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {role.stack.map((tech) => (
                    <li key={tech} className="chip">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </details>
          </Reveal>
        ))}

        <div className="pt-6 text-center">
          <Link href="/resume" className="btn-secondary">
            View full résumé <FiArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </Section>
  )
}
