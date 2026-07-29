import type { ComponentType, SVGProps } from 'react';

/** Cartão de serviço: moldura neon em ciano, o lado técnico da marca. */
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
      data-spotlight
      data-reveal
      style={{ ['--d' as string]: `${index * 80}ms` }}
      className="neon-frame neon-frame-cyan h-full p-6 transition-transform duration-300 hover:shadow-lift"
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-[10px] border border-cyan/30 bg-cyan/10 text-cyan">
        <Icon className="h-5 w-5" />
      </span>
      <h3 className="mt-5 text-[17px] font-bold text-ink">{title}</h3>
      <p className="mt-2.5 text-sm leading-relaxed text-ink-muted">{description}</p>
    </article>
  );
}
