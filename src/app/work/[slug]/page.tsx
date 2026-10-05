import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { projects } from '@/data/projects'
import ProjectPreview from '@/components/ProjectPreview'
import ExternalLink from '@/components/ExternalLink'

interface Params {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) return {}
  return {
    title: project.title,
    description: project.summary,
    openGraph: { title: project.title, description: project.summary },
  }
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="grid gap-2 border-t border-line py-8 sm:grid-cols-[9rem_1fr] sm:gap-6">
      <h2 className="text-sm text-muted">{title}</h2>
      <div>{children}</div>
    </section>
  )
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1.5">
      {items.map((item) => (
        <li
          key={item}
          className="relative pl-4 before:absolute before:left-0 before:top-[0.7em] before:h-1 before:w-1 before:rounded-full before:bg-muted"
        >
          {item}
        </li>
      ))}
    </ul>
  )
}

/** Case study: overview → challenge → approach → highlights → outcomes. */
export default async function CaseStudy({ params }: Params) {
  const { slug } = await params
  const index = projects.findIndex((p) => p.slug === slug)
  if (index === -1) notFound()

  const project = projects[index]
  const next = projects[(index + 1) % projects.length]

  return (
    <main id="main" className="mx-auto max-w-3xl px-6 pb-20 pt-12 sm:pt-16">
      <Link href="/work" className="text-sm text-muted transition-colors hover:text-ink">
        ← All projects
      </Link>

      <header className="mt-8">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{project.title}</h1>
        <p className="mt-2 text-lg text-muted">{project.tagline}</p>
        <dl className="mt-6 flex flex-wrap gap-x-10 gap-y-3 text-sm">
          <div>
            <dt className="text-muted">Role</dt>
            <dd className="text-ink">{project.role}</dd>
          </div>
          <div>
            <dt className="text-muted">Year</dt>
            <dd className="text-ink">{project.year}</dd>
          </div>
          <div>
            <dt className="text-muted">Stack</dt>
            <dd className="text-ink">{project.stack.join(', ')}</dd>
          </div>
        </dl>
        {(project.demo || project.github) && (
          <p className="mt-6 flex gap-6 text-sm">
            {project.demo && <ExternalLink href={project.demo}>Live site</ExternalLink>}
            {project.github && <ExternalLink href={project.github}>Source</ExternalLink>}
          </p>
        )}
      </header>

      <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-2xl border border-line">
        <ProjectPreview project={project} priority />
      </div>

      <div className="mt-12">
        <Block title="Overview">
          <p>{project.description}</p>
        </Block>
        <Block title="Challenge">
          <p>{project.challenge}</p>
        </Block>
        <Block title="Approach">
          <p>{project.architecture}</p>
        </Block>
        <Block title="Highlights">
          <List items={project.highlights} />
        </Block>
        <Block title="Outcomes">
          <List items={project.impact} />
        </Block>
      </div>

      <Link href={`/work/${next.slug}`} className="group block border-t border-line pt-8">
        <p className="text-sm text-muted">Next project</p>
        <p className="mt-1 font-semibold text-ink transition-colors group-hover:text-accent">
          {next.title} <span aria-hidden="true">→</span>
        </p>
      </Link>
    </main>
  )
}
