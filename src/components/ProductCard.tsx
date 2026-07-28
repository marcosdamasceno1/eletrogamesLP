import type { ComponentType, SVGProps } from 'react';

type Props = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
};

export default function ProductCard({ icon: Icon, title, description }: Props) {
  return (
    <article className="surface group flex h-full flex-col gap-4 p-6 transition-colors duration-200 hover:border-brand/40 hover:bg-ink-700/70">
      <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-brand/25 bg-brand/10 text-brand-light">
        <Icon className="h-6 w-6" />
      </span>
      <h3 className="font-display text-lg font-bold text-white">{title}</h3>
      <p className="text-sm leading-relaxed text-slate-400">{description}</p>
    </article>
  );
}
