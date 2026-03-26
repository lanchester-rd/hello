import { MetadataRoute } from 'next'
import { absoluteUrl } from '../lib/seo'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  const restrictedPaths = ['/admin/', '/api/', '/profile']

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: restrictedPaths,
      },
      {
        userAgent: ['Googlebot', 'Bingbot', 'DuckDuckBot', 'Applebot'],
        allow: '/',
        disallow: restrictedPaths,
      },
      {
        userAgent: ['GPTBot', 'Google-Extended', 'CCBot', 'ClaudeBot', 'anthropic-ai', 'PerplexityBot', 'Bytespider'],
        allow: '/',
        disallow: restrictedPaths,
        crawlDelay: 10,
      },
    ],
    sitemap: absoluteUrl('/sitemap.xml'),
    host: new URL(absoluteUrl('/')).host,
  }
}
