import type { MetadataRoute } from 'next';
import { isPlaceholder, siteConfig } from '@/lib/site';

// Exigido pela exportação estática: o arquivo é gerado no build, não sob demanda.
export const dynamic = 'force-static';

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
