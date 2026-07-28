import type { Config } from 'tailwindcss';

/**
 * Identidade Eletrogames: azul e branco.
 *
 * A referência é a planta técnica, o desenho azul sobre branco de quem abre
 * aparelho. Toda superfície do site sai destes seis valores.
 *
 * Comprar e consertar não se separam por matiz, e sim por ambiente:
 *   seções claras (azul sobre branco) = loja
 *   seções navy (branco sobre azul)   = assistência técnica
 * Em cada ambiente, a ação que importa ali é a preenchida.
 *
 * Ao receber o logotipo oficial, ajuste `blue` e `navy` para as cores da
 * marca. O site inteiro deriva desses dois. Veja docs/LOGOMARCA.md.
 */
const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#FFFFFF',
        mist: '#F3F7FD',
        line: '#DBE6F5',
        sky: '#E3EEFF',
        blue: {
          DEFAULT: '#1560E0',
          deep: '#0E49B0',
          soft: '#6FA3F5',
        },
        navy: {
          DEFAULT: '#072B4F',
          deep: '#04203D',
          soft: '#12446F',
        },
        slate: {
          DEFAULT: '#54677F',
          // Aferido no navegador: 5,3:1 sobre branco e 4,9:1 sobre o azul
          // claro das seções. Não clarear além disto, senão as legendas
          // pequenas param de passar no critério AA de contraste.
          light: '#5E6C86',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        content: '1200px',
      },
      letterSpacing: {
        tightest: '-0.035em',
      },
      keyframes: {
        'draw-rule': {
          from: { transform: 'scaleX(0)' },
          to: { transform: 'scaleX(1)' },
        },
        'draw-path': {
          to: { strokeDashoffset: '0' },
        },
        'fade-in': {
          from: { opacity: '0', transform: 'translateY(6px)' },
          to: { opacity: '1', transform: 'none' },
        },
      },
      animation: {
        'draw-rule': 'draw-rule .55s cubic-bezier(.16,1,.3,1) both',
        'fade-in': 'fade-in .5s ease-out both',
      },
    },
  },
  plugins: [],
};

export default config;
