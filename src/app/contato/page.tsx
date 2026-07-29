import type { Metadata } from 'next';
import PageHero from '@/components/sections/PageHero';
import ContactInfo from '@/components/sections/ContactInfo';
import Button from '@/components/ui/Button';
import TrustBar from '@/components/sections/TrustBar';
import CTA from '@/components/sections/CTA';
import { IconWhatsApp } from '@/components/ui/Icons';
import { safeHref, siteConfig, whatsappLink, whatsappMessages } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contato | Fale com a Eletrogames',
  description:
    'Fale com a Eletrogames pelo WhatsApp ou pelos canais de atendimento. Informações sobre produtos, consoles, acessórios e assistência técnica de videogames.',
  alternates: { canonical: '/contato' },
  openGraph: {
    title: 'Contato | Eletrogames',
    description: 'Fale com a equipe da Eletrogames sobre produtos ou assistência técnica.',
    url: '/contato',
  },
};

export default function ContatoPage() {
  return (
    <>
      <PageHero
        eyebrow="Contato"
        title="Fale com a Eletrogames"
        description="Dúvida sobre um produto, um acessório ou um equipamento que precisa de avaliação técnica? A equipe orienta você sobre o caminho mais adequado."
        trust={['+28 anos de mercado', 'Atendimento especializado', 'Venda e assistência técnica']}
      >
        <Button
          href={whatsappLink(whatsappMessages.general)}
          variant="solid"
          external
          cursorLabel="Falar"
        >
          <IconWhatsApp className="h-5 w-5" />
          Falar no WhatsApp
        </Button>
        <Button href={safeHref(siteConfig.storeUrl)} variant="outline" external cursorLabel="Ver loja">
          Acessar a Loja
        </Button>
      </PageHero>

      <TrustBar />

      <ContactInfo eyebrow="Canais de atendimento" />

      <CTA />
    </>
  );
}
