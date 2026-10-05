import type { Metadata } from 'next'
import Link from 'next/link'
import WorkGrid from '@/components/WorkGrid'
import { projects } from '@/data/projects'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Client work and personal projects, each with a short case study.',
}

export default function WorkIndex() {
  return (
    <main id="main" className="mx-auto max-w-6xl px-6 pb-20 pt-12 sm:pt-16">
      <Link href="/#work" className="text-sm text-muted transition-colors hover:text-ink">
        ← Home
      </Link>
      <h1 className="mt-8 text-3xl font-bold tracking-tight sm:text-4xl">All projects</h1>
      <p className="mt-4 max-w-2xl text-muted">
        Client work and personal projects of my own, from LLM powered tools to full stack web
        apps. Each one has a short case study.
      </p>

      <div className="mt-10">
        <WorkGrid projects={projects} />
      </div>
    </main>
  )
}
