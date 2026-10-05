import Section from '../ui/Section'
import ProjectItem from '../ui/ProjectItem'
import { projects } from '../../data/projects'

/**
 * Selected work — the visual focus of the page.
 */
export default function Projects() {
  return (
    <Section id="projects" title="Selected Projects">
      <div className="space-y-16">
        {projects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
    </Section>
  )
}
