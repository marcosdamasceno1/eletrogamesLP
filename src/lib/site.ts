/**
 * Configuração central da Eletrogames.
 *
 * TODOS os dados reais da empresa ficam aqui. Substitua os placeholders
 * entre colchetes ([...]) pelas informações oficiais. Nenhuma informação
 * foi inventada: o que não foi fornecido está marcado como placeholder.
 */

export const siteConfig = {
  name: 'Eletrogames',
  legalName: 'Eletrogames',
  shortDescription:
    'Loja especializada em videogames e assistência técnica de consoles e controles, com mais de 28 anos de experiência.',
  yearsOfExperience: 28,

  /** URL pública do site institucional (usada em canonical, sitemap e Open Graph). */
  url: '[INSERIR URL DO SITE]',

  /** Loja online externa — CTA principal de vendas. */
  storeUrl: '[INSERIR URL DA LOJA]',

  /** Link do WhatsApp (ex.: https://wa.me/55DDDNUMERO). */
  whatsappUrl: '[INSERIR WHATSAPP]',
  whatsappDisplay: '[WHATSAPP]',

  phone: '[TELEFONE]',
  email: '[E-MAIL]',
  instagram: '[INSTAGRAM]',
  instagramUrl: '[INSERIR URL DO INSTAGRAM]',

  address: {
    street: '[ENDEREÇO]',
    city: '[CIDADE]',
    state: '[ESTADO]',
    postalCode: '[CEP]',
    country: 'BR',
    mapsUrl: '[GOOGLE MAPS]',
    /** Coordenadas para SEO local — preencher quando disponíveis. */
    latitude: '[LATITUDE]',
    longitude: '[LONGITUDE]',
  },

  openingHours: '[HORÁRIO DE FUNCIONAMENTO]',
} as const;

/** Indica se um campo ainda é um placeholder não preenchido. */
export function isPlaceholder(value: string): boolean {
  return /^\[.*\]$/.test(value.trim());
}

/** Devolve um href seguro: placeholders viram "#" para não gerar link quebrado. */
export function safeHref(value: string): string {
  return isPlaceholder(value) ? '#' : value;
}

/** Monta um link de WhatsApp com mensagem pré-preenchida. */
export function whatsappLink(message: string): string {
  const base = siteConfig.whatsappUrl;
  if (isPlaceholder(base)) return '#';
  const separator = base.includes('?') ? '&' : '?';
  return `${base}${separator}text=${encodeURIComponent(message)}`;
}

export const whatsappMessages = {
  general:
    'Olá! Acessei o site da Eletrogames e gostaria de mais informações.',
  support:
    'Olá! Acessei o site da Eletrogames e gostaria de informações sobre assistência técnica.',
  console:
    'Olá! Acessei o site da Eletrogames e gostaria de informações sobre manutenção de console.',
  controller:
    'Olá! Acessei o site da Eletrogames e gostaria de informações sobre manutenção de controle.',
  products:
    'Olá! Acessei o site da Eletrogames e gostaria de informações sobre produtos.',
} as const;

/**
 * Menu principal. `short` é usado na barra fixa em desktop (evita quebra de linha);
 * `label` é o rótulo completo, usado no menu mobile.
 */
export const navigation = [
  { label: 'Início', short: 'Início', href: '/' },
  { label: 'Nossa História', short: 'História', href: '/sobre' },
  { label: 'Produtos', short: 'Produtos', href: '/#produtos' },
  { label: 'Assistência Técnica', short: 'Assistência', href: '/assistencia-tecnica' },
  { label: 'Por que escolher a Eletrogames', short: 'Diferenciais', href: '/#por-que-escolher' },
  { label: 'Dúvidas Frequentes', short: 'Dúvidas', href: '/#faq' },
  { label: 'Contato', short: 'Contato', href: '/contato' },
] as const;
