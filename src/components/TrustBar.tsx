import { IconClock, IconGamepad, IconStore, IconUsers } from './Icons';

/** Ficha da empresa: quatro fatos, sem adjetivo sobrando. */
const items = [
  { icon: IconClock, value: '+28 anos', note: 'de experiência no mercado' },
  { icon: IconGamepad, value: 'Games', note: 'são a nossa especialidade' },
  { icon: IconStore, value: 'Venda e manutenção', note: 'em um só lugar' },
  { icon: IconUsers, value: 'Atendimento especializado', note: 'para consoles e acessórios' },
];

export default function TrustBar() {
  return (
    <section aria-label="Ficha da Eletrogames" className="border-y border-white/10 bg-abyss">
      <div className="container-site grid divide-y divide-white/10 lg:grid-cols-4 lg:divide-x lg:divide-y-0">
        {items.map(({ icon: Icon, value, note }, index) => (
          <div
            key={value}
            className="flex items-start gap-4 py-7 lg:px-7 lg:first:pl-0 lg:last:pr-0"
            data-reveal
            style={{ ['--d' as string]: `${index * 70}ms` }}
          >
            <Icon className="h-6 w-6 shrink-0 text-violet-soft" />
            <div>
              <p className="font-display text-[17px] font-bold leading-tight text-ink">{value}</p>
              <p className="mt-1 text-sm text-ink-muted">{note}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
