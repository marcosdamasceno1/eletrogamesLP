import type { ReactNode } from 'react';
import SplitText from './fx/SplitText';

type Props = {
  eyebrow?: string;
  title: string;
  id?: string;
  description?: ReactNode;
  as?: 'h2' | 'h3';
  tone?: 'phosphor' | 'diag';
  highlight?: string;
  className?: string;
};

export default function SectionTitle({
  eyebrow,
  title,
  id,
  description,
  as = 'h2',
  tone = 'phosphor',
  highlight,
  className = '',
}: Props) {
  return (
    <div className={`max-w-3xl ${className}`}>
      {eyebrow ? (
        <p className={tone === 'diag' ? 'label-diag' : 'label'} data-reveal>
          {eyebrow}
        </p>
      ) : null}

      <SplitText
        as={as}
        id={id}
        text={title}
        highlight={highlight}
        highlightClass={tone === 'diag' ? 'text-diag' : 'text-phosphor'}
        className="mt-5 block text-[2rem] font-extrabold leading-[1.08] text-ink sm:text-[2.6rem] lg:text-[3rem]"
      />

      {description ? (
        <p className="mt-6 text-[17px] leading-relaxed text-ink-muted" data-reveal style={{ ['--d' as string]: '120ms' }}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
