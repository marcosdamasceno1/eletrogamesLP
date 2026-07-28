import type { ComponentType, SVGProps } from 'react';

type Props = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
};

export default function ServiceCard({ icon: Icon, title, description }: Props) {
  return (
    <article className="flex h-full flex-col gap-4 rounded-2xl border border-accent/20 bg-ink-900/70 p-6 transition-colors duration-200 hover:border-accent/50">
      <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 text-accent-light">
        <Icon className="h-6 w-6" />
      </span>
      <h3 className="font-display text-lg font-bold text-white">{title}</h3>
      <p className="text-sm leading-relaxed text-slate-400">{description}</p>
    </article>
  );
}
