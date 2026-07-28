import type { ReactNode } from 'react';

type Props = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  as?: 'h2' | 'h3';
  align?: 'left' | 'center';
  className?: string;
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
  as: Heading = 'h2',
  align = 'left',
  className = '',
}: Props) {
  const alignment =
    align === 'center' ? 'text-center mx-auto items-center' : 'text-left items-start';

  return (
    <div className={`flex flex-col gap-4 ${alignment} max-w-3xl ${className}`}>
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <Heading className="font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
        {title}
      </Heading>
      {description ? (
        <p className="text-base leading-relaxed text-slate-300 sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
