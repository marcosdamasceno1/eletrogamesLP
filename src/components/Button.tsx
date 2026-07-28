import Link from 'next/link';
import type { ReactNode } from 'react';

type Variant = 'store' | 'support' | 'ghost';
type Size = 'md' | 'lg';

const base =
  'group relative inline-flex min-h-[52px] items-center justify-center gap-2.5 overflow-hidden rounded-xl font-semibold ' +
  'transition-[background-color,border-color,color,box-shadow] duration-300';

/**
 * Âmbar é sempre comprar. Ciano é sempre consertar. Um usuário nunca precisa
 * ler o botão duas vezes para saber em qual dos dois caminhos vai cair.
 */
const variants: Record<Variant, string> = {
  store: 'bg-phosphor text-void hover:bg-phosphor-soft hover:glow-phosphor',
  support: 'bg-diag text-void hover:bg-diag-soft hover:glow-diag',
  ghost:
    'border border-white/15 bg-white/[0.04] text-ink hover:border-phosphor/50 hover:bg-white/[0.07]',
};

const cursorTone: Record<Variant, string | undefined> = {
  store: undefined,
  support: 'diag',
  ghost: undefined,
};

const sizes: Record<Size, string> = {
  md: 'px-5 text-sm',
  lg: 'px-7 py-4 text-[15px]',
};

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
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
  variant = 'store',
  size = 'lg',
  external = false,
  className = '',
  ariaLabel,
  cursorLabel,
  magnetic = true,
}: Props) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  const fx = {
    ...(magnetic ? { 'data-magnetic': '0.22' } : {}),
    ...(cursorLabel ? { 'data-cursor': cursorLabel, 'data-cursor-tone': cursorTone[variant] } : {}),
  };

  const inner = (
    <>
      {/* brilho que atravessa o botão no hover */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full"
      />
      <span className="relative flex items-center gap-2.5">{children}</span>
    </>
  );

  if (external || href.startsWith('http') || href === '#') {
    return (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        {...fx}
        {...(href !== '#' ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} aria-label={ariaLabel} {...fx}>
      {inner}
    </Link>
  );
}
