import { MetadataRoute } from 'next'
import { projects } from '../data/projects'
import { experiments } from '../data/research'
import { services } from '../data/services'
import { absoluteUrl } from '../lib/seo'

export const dynamic = 'force-static'

const staticRoutes: Array<{
  path: string
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']
  priority: number
}> = [
  { path: '/', changeFrequency: 'weekly', priority: 1 },
  { path: '/services', changeFrequency: 'weekly', priority: 0.95 },
  { path: '/partner', changeFrequency: 'weekly', priority: 0.95 },
  { path: '/systems', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/research', changeFrequency: 'weekly', priority: 0.85 },
  { path: '/strategy', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/founder', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/founder/timeline', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/about', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/foundation', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/foundation/concept-note', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/foundation/five-year-plan', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/foundation/values', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/privacy', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/terms', changeFrequency: 'yearly', priority: 0.3 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const staticEntries = staticRoutes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))

  const serviceEntries = services.map((service) => ({
    url: absoluteUrl('/services/' + service.slug),
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const systemEntries = projects.map((project) => ({
    url: absoluteUrl('/systems/' + project.slug),
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }))

  const researchEntries = experiments.map((exp) => ({
    url: absoluteUrl('/research/' + exp.slug),
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticEntries, ...serviceEntries, ...systemEntries, ...researchEntries]
}
