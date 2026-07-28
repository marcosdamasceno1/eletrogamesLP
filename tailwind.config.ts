import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Identidade Eletrogames — ajuste aqui quando o logotipo oficial for fornecido.
        ink: {
          950: '#07080B',
          900: '#0B0D12',
          800: '#111420',
          700: '#171A28',
          600: '#202434',
        },
        brand: {
          DEFAULT: '#12B76A',
          light: '#3DD68C',
          dark: '#0B8A50',
        },
        accent: {
          DEFAULT: '#3B82F6',
          light: '#60A5FA',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'var(--font-sans)', 'sans-serif'],
      },
      maxWidth: {
        content: '1180px',
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up .5s ease-out both',
      },
    },
  },
  plugins: [],
};

export default config;
