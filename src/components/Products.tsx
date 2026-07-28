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
    title: 'Controles e manetes',
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
    <section id="produtos" className="relative py-24 sm:py-32" aria-labelledby="produtos-title">
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-panel/40" />

      <div className="container-site">
        <SectionTitle
          eyebrow="Produtos"
          id="produtos-title"
          title="O que você encontra na Eletrogames"
          highlight="encontra"
          description="Tem quem chegue com o modelo decidido e quem chegue sem saber por onde começar. Nos dois casos, alguém aqui já mexeu nesse aparelho antes."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => (
            <ProductCard key={category.title} index={index} {...category} />
          ))}
        </div>

        <div
          className="mt-14 flex flex-col items-start gap-7 rounded-[var(--radius)] border border-phosphor/20 bg-phosphor/[0.05] p-8 sm:flex-row sm:items-center sm:justify-between"
          data-reveal
        >
          <p className="font-display text-xl font-bold leading-snug text-ink sm:text-2xl">
            Encontre tudo para o seu videogame em um só lugar.
          </p>
          <Button
            href={safeHref(siteConfig.storeUrl)}
            variant="store"
            external
            cursorLabel="Ver loja"
            className="w-full shrink-0 sm:w-auto"
          >
            Ver produtos na loja
          </Button>
        </div>
      </div>
    </section>
  );
}
