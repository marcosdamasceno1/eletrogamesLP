/**
 * Marca provisória em texto + monograma.
 * Quando o logotipo oficial for fornecido, substitua o bloco do monograma
 * por <Image src="/logo.svg" alt="Eletrogames" ... /> e ajuste as cores
 * em tailwind.config.ts para as cores oficiais da marca.
 */
export default function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <span
        aria-hidden="true"
        className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-brand-dark font-display text-lg font-black text-ink-950"
      >
        E
      </span>
      {!compact && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-lg font-extrabold tracking-tight text-white">
            ELETRO<span className="text-brand">GAMES</span>
          </span>
          <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.2em] text-slate-400">
            +28 anos em videogames
          </span>
        </span>
      )}
    </span>
  );
}
