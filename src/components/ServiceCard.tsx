import type { ComponentType, SVGProps } from 'react';

/** Cartão de serviço, desenhado para viver sobre fundo navy. */
export default function ServiceCard({
  icon: Icon,
  title,
  description,
  index = 0,
}: {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  index?: number;
}) {
  return (
    <article
      data-tilt
      data-reveal
      style={{ ['--d' as string]: `${index * 80}ms` }}
      className="h-full rounded-[var(--radius)] border border-paper/15 bg-paper/[0.06] p-6 transition-colors duration-300 hover:border-paper/40 hover:bg-paper/[0.1]"
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-[10px] bg-paper/15 text-paper">
        <Icon className="h-5 w-5" />
      </span>
      <h3 className="mt-5 text-[17px] font-bold text-paper">{title}</h3>
      <p className="mt-2.5 text-sm leading-relaxed text-sky/75">{description}</p>
    </article>
  );
}
