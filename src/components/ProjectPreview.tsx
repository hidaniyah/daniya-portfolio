import Image from 'next/image'
import type { Project } from '@/data/projects'
import Mockup from './Mockup'

/**
 * A project's preview: its screenshot when `image` is set, otherwise the
 * sketched mockup. Fills its parent — callers set the frame and aspect ratio.
 */
export default function ProjectPreview({
  project,
  priority = false,
}: {
  project: Project
  priority?: boolean
}) {
  return project.image ? (
    <Image
      src={project.image}
      alt={`Screenshot of ${project.title}`}
      fill
      priority={priority}
      sizes="(min-width: 1024px) 640px, 100vw"
      className="object-cover object-top"
    />
  ) : (
    <Mockup variant={project.mock} />
  )
}
