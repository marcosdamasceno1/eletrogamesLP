import type { MetadataRoute } from 'next';
import { isPlaceholder, siteConfig } from '@/lib/site';

export default function robots(): MetadataRoute.Robots {
  const base = isPlaceholder(siteConfig.url) ? '' : siteConfig.url.replace(/\/$/, '');

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${base}/sitemap.xml`,
  };
}
