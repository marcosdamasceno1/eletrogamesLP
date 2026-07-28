import Image from 'next/image';
import { brand } from '@/lib/brand';

/**
 * Mostra o logotipo oficial assim que ele existir em src/lib/brand.ts.
 * Até lá, exibe a marca provisória em texto, para o site nunca ficar sem
 * identificação. Instruções em docs/LOGOMARCA.md.
 */
export default function Logo({ variant = 'default' }: { variant?: 'default' | 'inverse' }) {
  const inverse = variant === 'inverse';
  const asset = inverse ? brand.logoInverse : brand.logo;

  if (asset.src) {
    return (
      <Image
        src={asset.src}
        alt={asset.alt}
        width={asset.width}
        height={asset.height}
        priority={!inverse}
        className="h-9 w-auto"
      />
    );
  }

  return (
    <span className="flex items-center gap-2.5">
      <span
        aria-hidden="true"
        className={`flex h-9 w-9 items-center justify-center rounded-lg ${
          inverse ? 'bg-paper text-navy' : 'bg-blue text-paper'
        }`}
      >
        <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" width={18} height={18} fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round">
          <path d="M12 3.5v7" />
          <path d="M7.2 6.6a6.6 6.6 0 1 0 9.6 0" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[17px] font-extrabold tracking-tightest ${
            inverse ? 'text-paper' : 'text-navy'
          }`}
        >
          ELETRO<span className={inverse ? 'text-blue-soft' : 'text-blue'}>GAMES</span>
        </span>
        <span
          className={`mt-1 font-mono text-[9px] uppercase tracking-[0.18em] ${
            inverse ? 'text-blue-soft' : 'text-slate-light'
          }`}
        >
          28 anos · videogames
        </span>
      </span>
    </span>
  );
}
