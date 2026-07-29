import type { ReactNode } from 'react';
import SplitText from '@/components/fx/SplitText';

type Props = {
  eyebrow?: string;
  title: string;
  id?: string;
  description?: ReactNode;
  as?: 'h2' | 'h3';
  tone?: 'store' | 'service';
  highlight?: string;
  className?: string;
};

export default function SectionTitle({
  eyebrow,
  title,
  id,
  description,
  as = 'h2',
  tone = 'store',
  highlight,
  className = '',
}: Props) {
  const service = tone === 'service';

  return (
    <div className={`max-w-3xl ${className}`}>
      {eyebrow ? (
        <p className={service ? 'label-cyan' : 'label'} data-reveal>
          {eyebrow}
        </p>
      ) : null}

      <SplitText
        as={as}
        id={id}
        text={title}
        highlight={highlight}
        highlightClass={service ? 'text-cyan-soft' : 'text-violet-soft'}
        className={`mt-5 block text-[1.95rem] font-extrabold leading-[1.1] sm:text-[2.5rem] lg:text-[2.85rem] ${
          service ? 'text-ink' : 'text-ink'
        }`}
      />

      {description ? (
        <p
          className={`mt-6 text-[17px] leading-relaxed ${service ? 'text-ink-muted' : 'text-ink-muted'}`}
          data-reveal
          style={{ ['--d' as string]: '120ms' }}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
