import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import History from '@/components/History';
import Products from '@/components/Products';
import TechSupport from '@/components/TechSupport';
import Steps from '@/components/Steps';
import Benefits from '@/components/Benefits';
import TrustBar from '@/components/TrustBar';
import Testimonials from '@/components/Testimonials';
import FAQ, { homeFaq } from '@/components/FAQ';
import CTA from '@/components/CTA';
import JsonLd from '@/components/JsonLd';
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
      <TrustBar />
      <History />
      <Products />
      <TechSupport />
      <Steps />
      <Benefits />
      <Testimonials />
      <FAQ
        items={homeFaq}
        title="Dúvidas frequentes"
        description="As perguntas que mais recebemos sobre a loja e a assistência técnica."
      />
      <CTA />
      <JsonLd data={faqSchema(homeFaq)} />
    </>
  );
}
