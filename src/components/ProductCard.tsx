import type { ComponentType, SVGProps } from 'react';

type Props = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  index?: number;
};

export default function ProductCard({ icon: Icon, title, description, index = 0 }: Props) {
  return (
    <article
      data-tilt
      data-reveal
      style={{ ['--d' as string]: `${index * 80}ms` }}
      className="group h-full rounded-[var(--radius)] border border-line bg-paper p-6 shadow-card transition-all duration-300 hover:border-blue/40 hover:shadow-lift"
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-[10px] bg-sky text-blue transition-colors duration-300 group-hover:bg-blue group-hover:text-paper">
        <Icon className="h-5 w-5" />
      </span>
      <h3 className="mt-5 text-[17px] font-bold text-navy">{title}</h3>
      <p className="mt-2.5 text-sm leading-relaxed text-slate">{description}</p>
    </article>
  );
}
