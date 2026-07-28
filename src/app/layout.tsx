import type { Metadata, Viewport } from 'next';
import { Archivo, IBM_Plex_Mono, IBM_Plex_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import JsonLd from '@/components/JsonLd';
import Interactions from '@/components/fx/Interactions';
import Preloader from '@/components/fx/Preloader';
import { storeSchema } from '@/lib/schema';
import { isPlaceholder, siteConfig } from '@/lib/site';

/**
 * Archivo para os títulos (grotesca industrial, pesada sem ficar decorativa),
 * IBM Plex para o texto e os rótulos: a família nasceu de documentação de
 * engenharia, que é exatamente o registro de quem trabalha em bancada.
 */
const archivo = Archivo({
  subsets: ['latin'],
  display: 'swap',
  weight: ['700', '800', '900'],
  variable: '--font-display',
});

const plexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600'],
  variable: '--font-sans',
});

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  display: 'swap',
  weight: ['500'],
  variable: '--font-mono',
});

const siteUrl = isPlaceholder(siteConfig.url) ? undefined : siteConfig.url;

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: {
    default: 'Eletrogames | Loja de videogames e assistência técnica há mais de 28 anos',
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
  themeColor: '#08090D',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${archivo.variable} ${plexSans.variable} ${plexMono.variable}`}>
      <body className="font-sans">
        {/* Sem JavaScript o site continua legível: nada fica esperando animação. */}
        <noscript>
          <style
            dangerouslySetInnerHTML={{
              __html:
                '[data-reveal]{opacity:1!important;transform:none!important}.split-word>span{transform:none!important}',
            }}
          />
        </noscript>

        <Preloader />

        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-phosphor focus:px-4 focus:py-3 focus:font-semibold focus:text-void"
        >
          Ir para o conteúdo principal
        </a>

        <Header />
        <main id="conteudo">{children}</main>
        <Footer />
        <WhatsAppButton />
        <Interactions />
        <JsonLd data={storeSchema()} />
      </body>
    </html>
  );
}
