import type { ReactNode } from 'react';
import SplitText from './fx/SplitText';

type Props = {
  eyebrow?: string;
  title: string;
  id?: string;
  description?: ReactNode;
  as?: 'h2' | 'h3';
  tone?: 'light' | 'navy';
  highlight?: string;
  className?: string;
};

export default function SectionTitle({
  eyebrow,
  title,
  id,
  description,
  as = 'h2',
  tone = 'light',
  highlight,
  className = '',
}: Props) {
  const navy = tone === 'navy';

  return (
    <div className={`max-w-3xl ${className}`}>
      {eyebrow ? (
        <p className={navy ? 'label-invert' : 'label'} data-reveal>
          {eyebrow}
        </p>
      ) : null}

      <SplitText
        as={as}
        id={id}
        text={title}
        highlight={highlight}
        highlightClass={navy ? 'text-blue-soft' : 'text-blue'}
        className={`mt-5 block text-[1.95rem] font-extrabold leading-[1.1] sm:text-[2.5rem] lg:text-[2.85rem] ${
          navy ? 'text-paper' : 'text-navy'
        }`}
      />

      {description ? (
        <p
          className={`mt-6 text-[17px] leading-relaxed ${navy ? 'text-sky/85' : 'text-slate'}`}
          data-reveal
          style={{ ['--d' as string]: '120ms' }}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
