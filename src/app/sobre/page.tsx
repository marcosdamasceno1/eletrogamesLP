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
        eyebrow="Nossa História"
        title="Uma história construída entre gerações de jogadores."
        description="Mais de 28 anos dentro do mesmo segmento: vendendo, testando e consertando videogames enquanto o mercado se reinventava a cada geração."
        trust={['+28 anos de experiência', 'Especialistas em videogames', 'Venda e assistência técnica']}
      >
        <Button href="/assistencia-tecnica" variant="support" size="lg">
          Preciso de assistência técnica
        </Button>
        <Button href={safeHref(siteConfig.storeUrl)} variant="store" size="lg" external>
          Conheça nossa loja
        </Button>
      </PageHero>
      <TrustBar />
      <History />
      <Benefits />
      <CTA />
    </>
  );
}
