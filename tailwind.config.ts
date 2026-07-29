import type { Config } from 'tailwindcss';

/**
 * Identidade Eletrogames, tirada da loja online da própria marca:
 * fundo quase preto com fundo violeta, neon violeta/magenta nos destaques
 * e ciano nos elementos técnicos.
 *
 * Os dois acentos têm função fixa e nunca trocam de lado:
 *   violeta → magenta = comprar   (loja, produtos, catálogo)
 *   ciano                = consertar (assistência, avaliação, diagnóstico)
 *
 * Ao receber os arquivos oficiais da marca, ajuste `violet`, `magenta` e
 * `cyan`. Todo o site deriva desses três. Veja docs/LOGOMARCA.md.
 */
const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        void: '#08060F',
        abyss: '#0C0818',
        panel: {
          DEFAULT: '#130C22',
          raised: '#1A1030',
        },
        violet: {
          // Preenchimento de botão: escuro o bastante para o texto branco
          // passar no critério AA. O brilho neon vem do glow em volta,
          // não da cor de fundo.
          DEFAULT: '#7526E0',
          deep: '#571399',
          soft: '#B183FF',
        },
        magenta: {
          DEFAULT: '#FF3DCB',
          soft: '#FF7ADD',
        },
        cyan: {
          DEFAULT: '#22E3F0',
          deep: '#0FB6C2',
          soft: '#7BF0F8',
        },
        ink: {
          DEFAULT: '#F4F1FF',
          muted: '#B3AACB',
          faint: '#8479A0',
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
        'pulse-glow': {
          '0%,100%': { opacity: '0.55' },
          '50%': { opacity: '1' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
