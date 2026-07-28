import type { ComponentType, SVGProps } from 'react';

type Props = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  index?: number;
};

export default function ServiceCard({ icon: Icon, title, description, index = 0 }: Props) {
  return (
    <article
      data-tilt
      data-reveal
      style={{ ['--d' as string]: `${index * 80}ms` }}
      className="group relative h-full overflow-hidden rounded-[var(--radius)] border border-diag/20 bg-panel-raised/60 p-6 transition-colors duration-300 hover:border-diag/50"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-diag/[0.12] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
      />
      <span className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-diag/30 bg-diag/[0.08] text-diag">
        <Icon className="h-6 w-6" />
      </span>
      <h3 className="relative mt-5 text-lg font-bold text-ink">{title}</h3>
      <p className="relative mt-2.5 text-sm leading-relaxed text-ink-faint">{description}</p>
    </article>
  );
}
