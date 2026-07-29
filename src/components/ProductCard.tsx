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
      className="neon-frame group h-full p-6 transition-transform duration-300 hover:shadow-lift"
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-[10px] border border-violet/30 bg-violet/10 text-violet-soft transition-all duration-300 group-hover:border-transparent group-hover:bg-gradient-to-br group-hover:from-violet group-hover:to-magenta group-hover:text-white">
        <Icon className="h-5 w-5" />
      </span>
      <h3 className="mt-5 text-[17px] font-bold text-ink">{title}</h3>
      <p className="mt-2.5 text-sm leading-relaxed text-ink-muted">{description}</p>
    </article>
  );
}
