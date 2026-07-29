import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import History from '@/components/sections/History';
import Products from '@/components/sections/Products';
import Marquee from '@/components/sections/Marquee';
import TechSupport from '@/components/sections/TechSupport';
import Steps from '@/components/sections/Steps';
import Platforms from '@/components/sections/Platforms';
import Benefits from '@/components/sections/Benefits';
import TrustBar from '@/components/sections/TrustBar';
import Testimonials from '@/components/sections/Testimonials';
import FAQ, { homeFaq } from '@/components/sections/FAQ';
import CTA from '@/components/sections/CTA';
import JsonLd from '@/components/ui/JsonLd';
import { faqSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Eletrogames | Loja de videogames e assistência técnica há mais de 28 anos',
  description:
    'Loja especializada em videogames há mais de 28 anos. Consoles, controles, periféricos e acessórios, com assistência técnica para manutenção de console e conserto de controle.',
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <TrustBar />
      <History />
      <Products />
      <TechSupport />
      <Platforms />
      <Steps />
      <Benefits />
      <Testimonials />
      <FAQ
        items={homeFaq}
        title="Dúvidas frequentes"
        description="O que mais nos perguntam sobre a loja e sobre a assistência técnica."
      />
      <CTA />
      <JsonLd data={faqSchema(homeFaq)} />
    </>
  );
}
