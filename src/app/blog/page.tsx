import type { Metadata } from 'next'
import Link from 'next/link'
import { posts } from '@/data/posts'

export const metadata: Metadata = {
  title: 'Writing',
  description: 'Notes on building software: frontend architecture, migrations and performance.',
}

export default function BlogIndex() {
  return (
    <main id="main" className="mx-auto max-w-3xl px-6 pb-20 pt-12 sm:pt-16">
      <h1 className="text-3xl font-semibold tracking-tight">Writing</h1>
      <p className="mt-2 text-muted">Notes on building software.</p>

      <ul className="mt-10">
        {posts.map((post) => (
          <li key={post.slug} className="border-t border-line last:border-b">
            <Link
              href={`/blog/${post.slug}`}
              className="group grid gap-1 py-6 sm:grid-cols-[9rem_1fr] sm:gap-6"
            >
              <time dateTime={post.date} className="text-sm tabular-nums text-muted sm:pt-0.5">
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
              </time>
              <div>
                <h2 className="font-semibold transition-colors group-hover:text-accent">
                  {post.title}
                </h2>
                <p className="mt-1 text-base">{post.excerpt}</p>
                <p className="mt-2 text-sm text-muted">{post.readingTime} read</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
