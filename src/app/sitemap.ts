import type { MetadataRoute } from 'next'
import { projects } from '@/data/projects'
import { posts } from '@/data/posts'
import { site } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = ['', '/work', '/resume', '/blog'].map(
    (path) => ({
      url: `${site.url}${path}`,
      changeFrequency: 'monthly',
      priority: path === '' ? 1 : 0.8,
    })
  )

  const projectRoutes: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${site.url}/work/${p.slug}`,
    changeFrequency: 'yearly',
    priority: 0.7,
  }))

  const postRoutes: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${site.url}/blog/${p.slug}`,
    changeFrequency: 'yearly',
    priority: 0.5,
  }))

  return [...staticRoutes, ...projectRoutes, ...postRoutes]
}
