import Link from 'next/link';
import type { ReactNode } from 'react';

/**
 * Dois pesos, dois ambientes.
 *
 * `solid` é a ação que importa na seção onde está. `outline` é o caminho
 * alternativo. Em fundo claro o sólido é azul; em fundo navy o sólido é
 * branco. Assim a ação principal é sempre a de maior contraste na tela,
 * sem precisar de uma segunda cor de marca.
 */
type Variant = 'solid' | 'outline';
type Tone = 'light' | 'navy';
type Size = 'md' | 'lg';

const base =
  'group relative inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-[10px] ' +
  'font-semibold transition-all duration-200';

const styles: Record<Tone, Record<Variant, string>> = {
  light: {
    solid: 'bg-blue text-paper hover:bg-blue-deep shadow-card hover:shadow-lift',
    outline: 'border border-line bg-paper text-navy hover:border-blue hover:text-blue',
  },
  navy: {
    solid: 'bg-paper text-navy hover:bg-sky shadow-lift',
    outline: 'border border-paper/30 text-paper hover:border-paper hover:bg-paper/10',
  },
};

const sizes: Record<Size, string> = {
  md: 'px-5 text-sm',
  lg: 'px-7 py-4 text-[15px]',
};

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  tone?: Tone;
  size?: Size;
  external?: boolean;
  className?: string;
  ariaLabel?: string;
  /** Texto que o cursor assume no desktop. */
  cursorLabel?: string;
  magnetic?: boolean;
};

export default function Button({
  href,
  children,
  variant = 'solid',
  tone = 'light',
  size = 'lg',
  external = false,
  className = '',
  ariaLabel,
  cursorLabel,
  magnetic = true,
}: Props) {
  const classes = `${base} ${styles[tone][variant]} ${sizes[size]} ${className}`;

  const fx = {
    ...(magnetic ? { 'data-magnetic': '0.2' } : {}),
    ...(cursorLabel ? { 'data-cursor': cursorLabel } : {}),
  };

  if (external || href.startsWith('http') || href === '#') {
    return (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        {...fx}
        {...(href !== '#' ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} aria-label={ariaLabel} {...fx}>
      {children}
    </Link>
  );
}
