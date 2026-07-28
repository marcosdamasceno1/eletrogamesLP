import type { MetadataRoute } from 'next';
import { isPlaceholder, siteConfig } from '@/lib/site';

const routes = [
  { path: '/', priority: 1 },
  { path: '/assistencia-tecnica', priority: 0.9 },
  { path: '/sobre', priority: 0.7 },
  { path: '/contato', priority: 0.7 },
  { path: '/politica-de-privacidade', priority: 0.2 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  // Enquanto a URL oficial não for definida, os caminhos são relativos à raiz.
  const base = isPlaceholder(siteConfig.url) ? '' : siteConfig.url.replace(/\/$/, '');
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${base}${route.path}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: route.priority,
  }));
}
