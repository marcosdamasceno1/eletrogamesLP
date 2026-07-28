/**
 * Configuração da marca.
 *
 * Enquanto `logo.src` for `null`, o site mostra a marca provisória em texto.
 * Assim que você colocar o arquivo oficial em `public/brand/`, preencha os
 * campos abaixo e o logotipo aparece no cabeçalho e no rodapé automaticamente.
 *
 * Passo a passo completo em docs/LOGOMARCA.md.
 */

export const brand = {
  /**
   * Logotipo principal (usado sobre fundo BRANCO, no cabeçalho).
   * Exemplo depois de subir o arquivo:
   *   src: '/brand/logo.svg', width: 190, height: 40
   */
  logo: {
    src: null as string | null,
    width: 190,
    height: 40,
    alt: 'Eletrogames',
  },

  /**
   * Versão para fundo AZUL (rodapé e seções navy). Normalmente é a mesma
   * marca em branco. Se você só tiver uma versão, deixe `src: null` aqui:
   * o site usa a marca provisória em branco no lugar.
   */
  logoInverse: {
    src: null as string | null,
    width: 190,
    height: 40,
    alt: 'Eletrogames',
  },

  /** Símbolo isolado, quadrado. Usado quando não cabe a marca inteira. */
  symbol: {
    src: null as string | null,
    width: 40,
    height: 40,
    alt: 'Eletrogames',
  },
} as const;

export type BrandAsset = { src: string | null; width: number; height: number; alt: string };
