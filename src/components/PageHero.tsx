import type { ReactNode } from 'react';

type Props = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  trust?: string[];
};

/** Hero das páginas internas — mantém o H1 único de cada rota. */
export default function PageHero({ eyebrow, title, description, children, trust }: Props) {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20">
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-ink-950">
        <div className="absolute inset-0 grid-texture opacity-60" />
        <div className="absolute left-1/2 top-[-20%] h-[460px] w-[760px] -translate-x-1/2 rounded-full bg-accent/10 blur-[130px]" />
      </div>

      {/* container-site mantém o alinhamento à esquerda igual ao das demais seções. */}
      <div className="container-site max-w-content [&>*]:max-w-3xl">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-5 font-display text-4xl font-black leading-[1.1] tracking-tight text-white sm:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">{description}</p>
        ) : null}

        {children ? <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">{children}</div> : null}

        {trust?.length ? (
          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
            {trust.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm font-medium text-slate-300">
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-brand" />
                {item}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  );
}
