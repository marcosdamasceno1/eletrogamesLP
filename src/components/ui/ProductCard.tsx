import type { ComponentType, SVGProps } from 'react';

type Props = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  index?: number;
};

/**
 * Sem o ícone dentro do quadradinho arredondado, que é o cartão padrão de
 * qualquer site. Aqui o desenho aparece grande e solto no topo, e a moldura
 * neon acende seguindo o ponteiro.
 */
export default function ProductCard({ icon: Icon, title, description, index = 0 }: Props) {
  return (
    <article
      data-tilt
      data-spotlight
      data-reveal
      style={{ ['--d' as string]: `${index * 80}ms` }}
      className="neon-frame group flex h-full flex-col p-6 transition-transform duration-300 hover:shadow-lift"
    >
      <Icon className="h-9 w-9 text-violet-soft transition-colors duration-300 group-hover:text-magenta" />
      <h3 className="mt-6 text-[17px] font-bold text-ink">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-muted">{description}</p>
    </article>
  );
}
