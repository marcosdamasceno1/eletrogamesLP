import Button from './Button';
import ProductCard from './ProductCard';
import SectionTitle from './SectionTitle';
import { IconCable, IconConsole, IconGamepad, IconHeadset, IconMobilePad } from './Icons';
import { safeHref, siteConfig } from '@/lib/site';

/**
 * As categorias são as mesmas da loja online da Eletrogames, na mesma ordem.
 * Quem sai daqui e cai lá encontra a prateleira com o nome que já leu aqui.
 */
const categories = [
  {
    icon: IconGamepad,
    title: 'Manetes',
    description: 'Controles e manetes para diferentes consoles e gerações.',
  },
  {
    icon: IconConsole,
    title: 'Consoles',
    description: 'Videogames das principais plataformas e de diferentes gerações.',
  },
  {
    icon: IconHeadset,
    title: 'Headset',
    description: 'Áudio para ouvir o passo antes de ver o inimigo.',
  },
  {
    icon: IconMobilePad,
    title: 'Controles mobile',
    description: 'Controle acoplado ao celular, para quem joga fora da sala.',
  },
  {
    icon: IconCable,
    title: 'Acessórios',
    description: 'Cabos, carregadores e o que faltava para fechar o setup.',
  },
];

export default function Products() {
  return (
    <section id="produtos" className="border-t border-white/10 py-24 sm:py-32" aria-labelledby="produtos-title">
      <div className="container-site">
        <SectionTitle
          eyebrow="Produtos"
          id="produtos-title"
          title="O que você encontra na Eletrogames"
          highlight="encontra"
          description="As mesmas categorias da nossa loja online. Tem quem chegue com o modelo decidido e quem chegue sem saber por onde começar: nos dois casos, alguém aqui já mexeu nesse aparelho antes."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {categories.map((category, index) => (
            <ProductCard key={category.title} index={index} {...category} />
          ))}
        </div>

        <div
          className="mt-14 flex flex-col items-start gap-7 rounded-[var(--radius)] border border-white/10 bg-void p-8 shadow-card sm:flex-row sm:items-center sm:justify-between"
          data-reveal
        >
          <div>
            <p className="font-display text-xl font-bold leading-snug text-ink sm:text-2xl">
              Encontre tudo para o seu videogame em um só lugar.
            </p>
            <p className="mt-2 text-sm text-ink-muted">
              O catálogo completo da Eletrogames fica na loja online.
            </p>
          </div>
          <Button
            href={safeHref(siteConfig.storeUrl)}
            variant="solid"
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
