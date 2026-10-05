import Section from '../ui/Section'
import { skillGroups } from '../../data/skills'

/**
 * Skills as a compact definition list — area on the left, tools on the right.
 */
export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <dl className="space-y-5">
        {skillGroups.map((group) => (
          <div key={group.id} className="grid gap-1 sm:grid-cols-[9rem_1fr] sm:gap-6">
            <dt className="text-sm text-muted sm:pt-px">{group.title}</dt>
            <dd className="text-[15px]">{group.skills.join(', ')}</dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
