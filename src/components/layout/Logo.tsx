import Image from 'next/image';
import { brand } from '@/lib/brand';

/**
 * Marca provisória no formato da loja: "ELETRO" em branco e "GAMES" em
 * gradiente. O mascote e os arquivos oficiais entram por src/lib/brand.ts,
 * com o passo a passo em docs/LOGOMARCA.md.
 */
export default function Logo({ variant = 'default' }: { variant?: 'default' | 'inverse' }) {
  const asset = variant === 'inverse' ? brand.logoInverse : brand.logo;

  if (asset.src) {
    return (
      <Image
        src={asset.src}
        alt={asset.alt}
        width={asset.width}
        height={asset.height}
        priority={variant === 'default'}
        className="h-10 w-auto"
      />
    );
  }

  return (
    <span className="flex items-center gap-2.5">
      <span
        aria-hidden="true"
        className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet to-magenta glow-violet"
      >
        <svg
          viewBox="0 0 24 24"
          width={19}
          height={19}
          fill="none"
          stroke="#fff"
          strokeWidth={2.4}
          strokeLinecap="round"
        >
          <path d="M12 3.5v7" />
          <path d="M7.2 6.6a6.6 6.6 0 1 0 9.6 0" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-[19px] font-black uppercase tracking-tight text-ink">
          Eletro<span className="text-gradient">games</span>
        </span>
        <span className="mt-1 font-mono text-[9px] uppercase tracking-[0.2em] text-ink-faint">
          28 anos · videogames
        </span>
      </span>
    </span>
  );
}
