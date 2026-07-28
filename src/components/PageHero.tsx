import type { ReactNode } from 'react';
import SplitText from './fx/SplitText';

type Props = {
  eyebrow: string;
  title: string;
  highlight?: string;
  description?: ReactNode;
  children?: ReactNode;
  trust?: string[];
  tone?: 'phosphor' | 'diag';
};

/** Hero das páginas internas. Mantém um H1 por rota. */
export default function PageHero({
  eyebrow,
  title,
  highlight,
  description,
  children,
  trust,
  tone = 'phosphor',
}: Props) {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24">
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-void">
        <div className="aperture absolute inset-0 opacity-60" />
        <div
          className={`absolute left-[-6%] top-[-18%] h-[480px] w-[780px] rounded-full blur-[140px] ${
            tone === 'diag' ? 'bg-diag/[0.09]' : 'bg-phosphor/[0.09]'
          }`}
        />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-void" />
      </div>

      <div className="container-site">
        <p className={tone === 'diag' ? 'label-diag' : 'label'} data-reveal>
          {eyebrow}
        </p>

        <SplitText
          as="h1"
          text={title}
          highlight={highlight}
          highlightClass={tone === 'diag' ? 'text-diag' : 'text-phosphor'}
          className="mt-6 block max-w-4xl text-[2.4rem] font-black leading-[1.04] text-ink sm:text-[3.25rem]"
        />

        {description ? (
          <p
            className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-muted"
            data-reveal
            style={{ ['--d' as string]: '180ms' }}
          >
            {description}
          </p>
        ) : null}

        {children ? (
          <div
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
            data-reveal
            style={{ ['--d' as string]: '280ms' }}
          >
            {children}
          </div>
        ) : null}

        {trust?.length ? (
          <ul
            className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/[0.08] pt-6"
            data-reveal
            style={{ ['--d' as string]: '360ms' }}
          >
            {trust.map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-sm text-ink-muted">
                <span
                  aria-hidden="true"
                  className={`h-1 w-1 rounded-full ${tone === 'diag' ? 'bg-diag' : 'bg-phosphor'}`}
                />
                {item}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  );
}
