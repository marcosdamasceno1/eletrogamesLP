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

  /**
   * Prazo de garantia dos serviços de manutenção.
   * A empresa confirmou que existe garantia; falta informar o prazo.
   * Enquanto estiver entre colchetes, o site fala em garantia sem prometer tempo.
   */
  warrantyPeriod: '[PRAZO DA GARANTIA]',
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
  playstation:
    'Olá! Acessei o site da Eletrogames e gostaria de informações sobre manutenção de PlayStation.',
  xbox:
    'Olá! Acessei o site da Eletrogames e gostaria de informações sobre manutenção de Xbox.',
  nintendo:
    'Olá! Acessei o site da Eletrogames e gostaria de informações sobre manutenção de Nintendo.',
  retro:
    'Olá! Acessei o site da Eletrogames e gostaria de informações sobre manutenção de console antigo.',
} as const;

/**
 * Menu principal.
 *
 * Enxuto de propósito: com dois botões de ação no topo (loja e WhatsApp),
 * cada item de navegação a mais disputa atenção com eles. As demais páginas
 * continuam existindo e acessíveis pelo rodapé e pelos botões dentro da página.
 *
 * `short` é o rótulo da barra fixa no desktop; `label` é o do menu do celular.
 */
export const navigation = [
  { label: 'Início', short: 'Início', href: '/' },
  { label: 'Dúvidas Frequentes', short: 'Dúvidas', href: '/#faq' },
] as const;
