/**
 * Marca provisória: o monograma é o símbolo de liga/desliga, que é o gesto
 * comum às duas pontas do negócio (o console que você compra e o console
 * que voltou a ligar depois da bancada).
 *
 * Ao receber o logotipo oficial, troque este bloco por <Image src="/logo.svg" />
 * e ajuste `phosphor` e `diag` em tailwind.config.ts para as cores da marca.
 */
export default function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <span
        aria-hidden="true"
        className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-phosphor/40 bg-phosphor/10"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-phosphor" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
          <path d="M12 3.5v7" />
          <path d="M7.2 6.6a6.6 6.6 0 1 0 9.6 0" />
        </svg>
      </span>
      {!compact && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-lg font-black tracking-tightest text-ink">
            ELETRO<span className="text-phosphor">GAMES</span>
          </span>
          <span className="label mt-1.5 text-ink-faint">28 anos · videogames</span>
        </span>
      )}
    </span>
  );
}
