import { siteConfig, isPlaceholder } from './site';

/**
 * Schema.org — apenas campos com dados reais são emitidos.
 * Placeholders não preenchidos são omitidos para não publicar dados falsos.
 */

function clean<T extends Record<string, unknown>>(obj: T): T {
  const out: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === 'string' && (value === '' || isPlaceholder(value))) continue;
    if (value === undefined || value === null) continue;
    if (typeof value === 'object' && !Array.isArray(value)) {
      const nested = clean(value as Record<string, unknown>);
      if (Object.keys(nested).length > 1) out[key] = nested;
      continue;
    }
    out[key] = value;
  }
  return out as T;
}

export function storeSchema() {
  return clean({
    '@context': 'https://schema.org',
    '@type': 'Store',
    name: siteConfig.name,
    description: siteConfig.shortDescription,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    sameAs: isPlaceholder(siteConfig.instagramUrl) ? undefined : [siteConfig.instagramUrl],
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.address.latitude,
      longitude: siteConfig.address.longitude,
    },
    openingHours: siteConfig.openingHours,
    hasMap: siteConfig.address.mapsUrl,
    makesOffer: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Assistência técnica de videogames',
          description:
            'Diagnóstico, manutenção e reparo de consoles e controles/manetes.',
        },
      },
    ],
  });
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
}

export function serviceSchema() {
  return clean({
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Assistência técnica de videogames',
    name: 'Assistência técnica especializada em videogames',
    description:
      'Diagnóstico, manutenção e reparo de consoles, controles e manetes com mais de 28 anos de experiência no segmento de videogames.',
    provider: {
      '@type': 'Store',
      name: siteConfig.name,
      url: siteConfig.url,
      telephone: siteConfig.phone,
    },
    areaServed: siteConfig.address.city,
  });
}
