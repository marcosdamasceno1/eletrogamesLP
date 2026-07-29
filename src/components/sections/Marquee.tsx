/**
 * Fita rolante com as categorias da loja.
 *
 * É o único elemento do site que se move sozinho o tempo todo, e existe por
 * um motivo: quebra a sequência de blocos parados e diz, em uma linha, tudo
 * que a Eletrogames vende e conserta.
 *
 * Puro CSS: a lista aparece duas vezes e a faixa anda metade da largura,
 * então o laço fecha sem emenda. Para quem pediu movimento reduzido, ela
 * simplesmente para.
 */
const items = [
  'Manetes',
  'Consoles',
  'Headset',
  'Controles mobile',
  'Acessórios',
  'Manutenção de console',
  'Reparo de controle',
  'Avaliação técnica',
];

export default function Marquee() {
  return (
    <section
      aria-label="O que a Eletrogames vende e conserta"
      className="relative overflow-hidden border-y border-white/10 bg-abyss py-5"
    >
      <div className="marquee flex w-max">
        {[0, 1].map((copy) => (
          <ul key={copy} className="flex shrink-0 items-center" aria-hidden={copy === 1}>
            {items.map((item) => (
              <li
                key={item}
                className="flex items-center gap-6 whitespace-nowrap px-6 font-display text-[15px] font-black uppercase tracking-wide text-ink-muted sm:text-lg"
              >
                {item}
                <span aria-hidden="true" className="h-1.5 w-1.5 rotate-45 bg-magenta" />
              </li>
            ))}
          </ul>
        ))}
      </div>

      {/* As pontas somem no fundo, para a fita não parecer cortada. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-28 bg-gradient-to-r from-abyss via-abyss/80 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-28 bg-gradient-to-l from-abyss via-abyss/80 to-transparent"
      />
    </section>
  );
}
