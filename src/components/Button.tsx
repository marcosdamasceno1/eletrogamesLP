import Link from 'next/link';
import type { ReactNode } from 'react';

/**
 * Dois caminhos, duas cores, sempre as mesmas.
 *
 *   tone="store"   → gradiente violeta/magenta. É o botão de comprar,
 *                    o mesmo tratamento do "VER PRODUTOS" da loja.
 *   tone="service" → ciano. É o botão de consertar.
 *
 * `solid` é a ação principal da seção; `outline` é o caminho alternativo.
 */
type Variant = 'solid' | 'outline';
type Tone = 'store' | 'service';
type Size = 'md' | 'lg';

const base =
  'group relative inline-flex min-h-[52px] items-center justify-center gap-2.5 overflow-hidden ' +
  'rounded-xl font-bold uppercase transition-all duration-300';

const styles: Record<Tone, Record<Variant, string>> = {
  store: {
    solid:
      'bg-gradient-to-r from-violet-deep to-violet text-white shadow-lift glow-violet hover:from-violet hover:to-violet',
    outline:
      'border border-violet/50 bg-violet/5 text-ink hover:border-violet hover:bg-violet/15 hover:glow-violet',
  },
  service: {
    solid: 'bg-cyan text-void hover:bg-cyan-soft hover:glow-cyan',
    outline:
      'border border-cyan/50 bg-cyan/5 text-cyan-soft hover:border-cyan hover:bg-cyan/15 hover:glow-cyan',
  },
};

const sizes: Record<Size, string> = {
  md: 'px-5 text-[13px]',
  lg: 'px-6 py-4 text-sm',
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
  tone = 'store',
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

  const inner = (
    <>
      {/* varredura de luz atravessando o botão no hover */}
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
