import Button from './Button';
import ProductCard from './ProductCard';
import SectionTitle from './SectionTitle';
import { IconCable, IconConsole, IconGamepad, IconHeadset } from './Icons';
import { safeHref, siteConfig } from '@/lib/site';

const categories = [
  {
    icon: IconConsole,
    title: 'Consoles',
    description: 'Videogames das principais plataformas e de diferentes gerações.',
  },
  {
    icon: IconGamepad,
    title: 'Controles e Manetes',
    description: 'Controles, acessórios e soluções para diferentes consoles.',
  },
  {
    icon: IconHeadset,
    title: 'Periféricos',
    description:
      'Headsets, carregadores, cabos e outros equipamentos para melhorar a experiência gamer.',
  },
  {
    icon: IconCable,
    title: 'Acessórios',
    description: 'Itens essenciais para completar o setup e aproveitar melhor cada console.',
  },
];

export default function Products() {
  return (
    <section id="produtos" className="relative py-20 sm:py-28" aria-labelledby="produtos-title">
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-ink-900" />

      <div className="container-site">
        <SectionTitle
          eyebrow="Produtos"
          title={<span id="produtos-title">O que você encontra na Eletrogames</span>}
          description="Da geração que você jogou na infância ao console que acabou de chegar: trabalhamos com produtos para quem está montando o primeiro setup e para quem já sabe exatamente o que procura."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <ProductCard key={category.title} {...category} />
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start gap-6 rounded-2xl border border-brand/20 bg-brand/5 p-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-display text-xl font-bold leading-snug text-white sm:text-2xl">
            Encontre tudo para o seu videogame em um só lugar.
          </p>
          <Button
            href={safeHref(siteConfig.storeUrl)}
            variant="store"
            size="lg"
            external
            className="w-full shrink-0 sm:w-auto"
          >
            Ver produtos na loja
          </Button>
        </div>
      </div>
    </section>
  );
}
