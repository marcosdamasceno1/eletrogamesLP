import Link from 'next/link';
import type { ReactNode } from 'react';

type Variant = 'store' | 'support' | 'ghost';
type Size = 'md' | 'lg';

const base =
  'inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-colors duration-200 min-h-[48px]';

/**
 * O CTA da loja (verde, sólido) e o CTA da assistência (azul/contorno)
 * são sempre visualmente distintos — o usuário nunca confunde os dois caminhos.
 */
const variants: Record<Variant, string> = {
  store: 'bg-brand text-ink-950 hover:bg-brand-light shadow-lg shadow-brand/20',
  support:
    'bg-accent text-white hover:bg-accent-light shadow-lg shadow-accent/20',
  ghost:
    'border border-white/20 bg-white/5 text-white hover:border-white/40 hover:bg-white/10',
};

const sizes: Record<Size, string> = {
  md: 'px-5 py-3 text-sm',
  lg: 'px-7 py-4 text-base',
};

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  external?: boolean;
  className?: string;
  ariaLabel?: string;
};

export default function Button({
  href,
  children,
  variant = 'store',
  size = 'md',
  external = false,
  className = '',
  ariaLabel,
}: Props) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (external || href.startsWith('http') || href === '#') {
    return (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        {...(href !== '#' ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}
