import ExternalLink from './ExternalLink'
import { externalLinkProps } from '../../utils/href'

// "Character Management Platform" -> "CM"
const initials = (title) =>
  title
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word[0])
    .join('')

/**
 * One portfolio piece: a large preview (screenshot, or a quiet typographic
 * placeholder until one is added) followed by the write-up and links.
 */
export default function ProjectItem({ project }) {
  const { title, year, role, description, stack, image, github, demo } = project
  const primaryHref = demo || github

  return (
    <article className="group">
      <a
        href={primaryHref}
        {...externalLinkProps(primaryHref)}
        aria-label={`Open ${title}`}
        tabIndex={-1}
        className="block overflow-hidden rounded-lg border border-line bg-subtle"
      >
        <div className="aspect-[16/9] transition-transform duration-500 ease-out group-hover:scale-[1.015]">
          {image ? (
            <img
              src={image}
              alt={`Screenshot of ${title}`}
              loading="lazy"
              className="h-full w-full object-cover object-top"
            />
          ) : (
            <div
              aria-hidden="true"
              className="flex h-full items-center justify-center text-6xl font-semibold tracking-tight text-line sm:text-7xl"
            >
              {initials(title)}
            </div>
          )}
        </div>
      </a>

      <div className="mt-5 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
        <p className="text-sm tabular-nums text-muted">
          {role} · {year}
        </p>
      </div>
      <p className="mt-2 max-w-2xl">{description}</p>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-x-6 gap-y-3 text-sm">
        <p className="text-muted">{stack.join(' · ')}</p>
        <div className="flex gap-5">
          {demo && <ExternalLink href={demo}>Live site</ExternalLink>}
          {github && <ExternalLink href={github}>Source</ExternalLink>}
        </div>
      </div>
    </article>
  )
}
