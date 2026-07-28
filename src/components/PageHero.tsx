import type { ReactNode } from 'react';
import SplitText from './fx/SplitText';

type Props = {
  eyebrow: string;
  title: string;
  highlight?: string;
  description?: ReactNode;
  children?: ReactNode;
  trust?: string[];
  tone?: 'light' | 'navy';
};

/** Hero das páginas internas. Mantém um H1 por rota. */
export default function PageHero({
  eyebrow,
  title,
  highlight,
  description,
  children,
  trust,
  tone = 'light',
}: Props) {
  const navy = tone === 'navy';

  return (
    <section
      className={`relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24 ${
        navy ? 'on-navy bg-navy' : 'bg-paper'
      }`}
    >
      <div
        aria-hidden="true"
        className={`absolute inset-0 ${navy ? 'blueprint-invert' : 'blueprint opacity-60'}`}
      />
      {!navy ? (
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-paper"
        />
      ) : null}

      <div className="container-site relative">
        <p className={navy ? 'label-invert' : 'label'} data-reveal>
          {eyebrow}
        </p>

        <SplitText
          as="h1"
          text={title}
          highlight={highlight}
          highlightClass={navy ? 'text-blue-soft' : 'text-blue'}
          className={`mt-6 block max-w-4xl text-[2.3rem] font-extrabold leading-[1.06] sm:text-[3.1rem] ${
            navy ? 'text-paper' : 'text-navy'
          }`}
        />

        {description ? (
          <p
            className={`mt-7 max-w-2xl text-lg leading-relaxed ${navy ? 'text-sky/85' : 'text-slate'}`}
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
            className={`mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t pt-6 ${
              navy ? 'border-paper/20' : 'border-line'
            }`}
            data-reveal
            style={{ ['--d' as string]: '360ms' }}
          >
            {trust.map((item) => (
              <li
                key={item}
                className={`flex items-center gap-2.5 text-sm ${navy ? 'text-sky/85' : 'text-slate'}`}
              >
                <span
                  aria-hidden="true"
                  className={`h-1 w-1 rounded-full ${navy ? 'bg-blue-soft' : 'bg-blue'}`}
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
