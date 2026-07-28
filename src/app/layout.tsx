import type { Metadata, Viewport } from 'next';
import { Inter, Sora } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import JsonLd from '@/components/JsonLd';
import { storeSchema } from '@/lib/schema';
import { isPlaceholder, siteConfig } from '@/lib/site';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

const sora = Sora({
  subsets: ['latin'],
  display: 'swap',
  weight: ['600', '700', '800'],
  variable: '--font-display',
});

const siteUrl = isPlaceholder(siteConfig.url) ? undefined : siteConfig.url;

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: {
    default:
      'Eletrogames | Loja de videogames e assistência técnica há mais de 28 anos',
    template: '%s | Eletrogames',
  },
  description:
    'Loja especializada em videogames com mais de 28 anos de experiência. Consoles, controles, periféricos e acessórios, além de assistência técnica para manutenção de console e conserto de controle.',
  keywords: [
    'loja de videogames',
    'assistência técnica videogame',
    'conserto de videogame',
    'manutenção de videogame',
    'manutenção de console',
    'assistência técnica console',
    'manutenção de controle',
    'conserto de controle de videogame',
    'consoles',
    'acessórios para videogames',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Eletrogames',
    title: 'Eletrogames | Videogames e assistência técnica há mais de 28 anos',
    description:
      'Consoles, controles, periféricos e acessórios, com assistência técnica especializada em manutenção de consoles e controles.',
    images: [{ url: '/og-image.svg', width: 1200, height: 630, alt: 'Eletrogames' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eletrogames | Videogames e assistência técnica há mais de 28 anos',
    description:
      'Consoles, controles, periféricos e acessórios, com assistência técnica especializada.',
    images: ['/og-image.svg'],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#07080B',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${sora.variable}`}>
      <body className="font-sans">
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-brand focus:px-4 focus:py-3 focus:font-semibold focus:text-ink-950"
        >
          Ir para o conteúdo principal
        </a>
        <Header />
        <main id="conteudo">{children}</main>
        <Footer />
        <WhatsAppButton />
        <JsonLd data={storeSchema()} />
      </body>
    </html>
  );
}
