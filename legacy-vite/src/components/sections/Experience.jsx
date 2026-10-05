import Section from '../ui/Section'
import { experiences } from '../../data/experience'

/**
 * Experience: one row per role — dates on the left, role and highlights on
 * the right (stacked on small screens).
 */
export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="space-y-10">
        {experiences.map((job) => (
          <li key={job.id} className="grid gap-1 sm:grid-cols-[9rem_1fr] sm:gap-6">
            <p className="text-sm tabular-nums text-muted sm:pt-0.5">{job.period}</p>
            <div>
              <h3 className="font-medium">
                {job.role} <span className="text-muted">· {job.company}</span>
              </h3>
              <ul className="mt-3 space-y-1.5 text-[15px]">
                {job.highlights.map((item) => (
                  <li key={item} className="relative pl-4 before:absolute before:left-0 before:text-muted before:content-['–']">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
