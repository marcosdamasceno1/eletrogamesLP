import type { Config } from 'tailwindcss';

/**
 * Identidade Eletrogames.
 *
 * A paleta vem do próprio assunto: o grafite azulado de um aparelho desligado,
 * o âmbar de fósforo de um tubo de imagem e o ciano de instrumento de bancada.
 *
 * Os dois acentos carregam significado e nunca se misturam:
 *   phosphor (âmbar) = comprar  -> loja online, produtos
 *   diag (ciano)     = consertar -> assistência técnica, avaliação
 *
 * Ao receber o logotipo oficial, troque os valores de `phosphor` e `diag`
 * pelas cores da marca. Todo o site deriva desses dois grupos.
 */
const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        void: '#08090D',
        panel: {
          DEFAULT: '#101219',
          raised: '#171A24',
          high: '#1E2230',
        },
        phosphor: {
          DEFAULT: '#FFA92E',
          soft: '#FFC46A',
          deep: '#E08600',
        },
        diag: {
          DEFAULT: '#3ED8E8',
          soft: '#7BE9F4',
          deep: '#14A8B8',
        },
        ink: {
          DEFAULT: '#EEF0F5',
          muted: '#99A0B2',
          faint: '#666D80',
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
        tightest: '-0.04em',
      },
      keyframes: {
        'boot-line': {
          '0%': { transform: 'scaleX(0)', opacity: '0' },
          '30%': { transform: 'scaleX(1)', opacity: '1' },
          '100%': { transform: 'scaleX(1)', opacity: '1' },
        },
        'boot-open': {
          '0%': { transform: 'scaleY(0.004)' },
          '100%': { transform: 'scaleY(1)' },
        },
        sweep: {
          '0%': { transform: 'translateY(-110%)' },
          '100%': { transform: 'translateY(1100%)' },
        },
        'curtain-up': {
          to: { transform: 'translateY(-101%)' },
        },
        flicker: {
          '0%,100%': { opacity: '1' },
          '92%': { opacity: '1' },
          '94%': { opacity: '0.72' },
          '96%': { opacity: '1' },
        },
        drift: {
          '0%,100%': { transform: 'translate3d(0,0,0)' },
          '50%': { transform: 'translate3d(0,-10px,0)' },
        },
      },
      animation: {
        'boot-line': 'boot-line .5s ease-out both',
        'boot-open': 'boot-open .45s cubic-bezier(.16,1,.3,1) both',
        sweep: 'sweep 2.4s linear infinite',
        flicker: 'flicker 6s linear infinite',
        drift: 'drift 7s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
