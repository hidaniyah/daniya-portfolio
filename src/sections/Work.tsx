import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'
import Section from '@/components/Section'
import WorkGrid from '@/components/WorkGrid'
import { projects } from '@/data/projects'

/** Work: a filterable grid of projects, then a link to the full list. */
export default function Work() {
  return (
    <Section
      id="work"
      title="My Work"
      intro="Client work and personal projects of my own, from LLM powered tools to full stack web apps. Each one has a short case study."
    >
      <WorkGrid projects={projects} />

      <div className="mt-10 text-center">
        <Link href="/work" className="btn-primary">
          View all projects <FiArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </Section>
  )
}
