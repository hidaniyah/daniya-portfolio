'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FiArrowUpRight } from 'react-icons/fi'
import type { Category, Project } from '@/data/projects'
import ProjectPreview from './ProjectPreview'

/**
 * Filter tabs over a grid of project cards. Each card links to
 * its case study.
 */
export default function WorkGrid({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<Category | 'All'>('All')

  const categories = [...new Set(projects.map((p) => p.category))]
  const tabs: (Category | 'All')[] = ['All', ...categories]
  const shown = filter === 'All' ? projects : projects.filter((p) => p.category === filter)

  return (
    <div>
      <div className="flex flex-wrap items-baseline gap-x-6 gap-y-3">
        <span className="text-sm text-muted">Filter by</span>
        <div role="group" aria-label="Filter projects" className="flex flex-wrap gap-x-6 gap-y-2">
          {tabs.map((name) => {
            const active = filter === name
            return (
              <button
                key={name}
                type="button"
                onClick={() => setFilter(name)}
                aria-pressed={active}
                className={`relative text-base transition-colors ${
                  active ? 'text-cyan' : 'text-body hover:text-ink'
                }`}
              >
                {name}
              </button>
            )
          })}
        </div>
      </div>

      <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((project) => (
          <li key={project.slug}>
            <Link
              href={`/work/${project.slug}`}
              className="card card-hover group flex h-full flex-col overflow-hidden"
            >
              <div className="relative aspect-[16/10] overflow-hidden border-b border-line">
                <div className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-[1.03]">
                  <ProjectPreview project={project} />
                </div>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-semibold transition-colors group-hover:text-accent">
                    {project.title}
                  </h3>
                  <FiArrowUpRight
                    aria-hidden="true"
                    className="mt-1 h-4 w-4 shrink-0 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                  />
                </div>
                <p className="mt-1 font-mono text-sm text-cyan">{project.category}</p>
                <p className="mt-3 text-sm text-body">{project.summary}</p>
                <p className="mt-auto pt-4 text-sm text-muted">{project.stack.join(' · ')}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
