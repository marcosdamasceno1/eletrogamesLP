import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import History from '@/components/History';
import TrustBar from '@/components/TrustBar';
import Benefits from '@/components/Benefits';
import CTA from '@/components/CTA';
import Button from '@/components/Button';
import { safeHref, siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Nossa História | Mais de 28 anos com videogames',
  description:
    'Conheça a história da Eletrogames: mais de 28 anos de atuação no mercado de videogames, acompanhando diferentes gerações de consoles, acessórios e formas de jogar.',
  alternates: { canonical: '/sobre' },
  openGraph: {
    title: 'Nossa História | Eletrogames',
    description:
      'Mais de 28 anos de atuação no mercado de videogames, acompanhando diferentes gerações de consoles.',
    url: '/sobre',
  },
};

export default function SobrePage() {
  return (
    <>
      <PageHero
        eyebrow="Nossa história"
        title="Uma história construída entre gerações de jogadores."
        highlight="gerações"
        description="Mais de 28 anos no mesmo segmento, vendendo, testando e consertando videogames enquanto o mercado se reinventava a cada geração."
        trust={['+28 anos de mercado', 'Videogame é o que fazemos', 'Loja e bancada no mesmo lugar']}
      >
        <Button href={safeHref(siteConfig.storeUrl)} variant="solid" external cursorLabel="Ver loja">
          Conheça nossa loja
        </Button>
        <Button href="/assistencia-tecnica" variant="outline" cursorLabel="Assistência">
          Preciso de assistência técnica
        </Button>
      </PageHero>
      <TrustBar />
      <History />
      <Benefits />
      <CTA />
    </>
  );
}
