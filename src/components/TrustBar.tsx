import { IconClock, IconGamepad, IconStore, IconUsers } from './Icons';

const items = [
  { icon: IconClock, highlight: '+28 anos', text: 'de experiência no mercado' },
  { icon: IconGamepad, highlight: 'Games', text: 'são a nossa especialidade' },
  { icon: IconStore, highlight: 'Venda e manutenção', text: 'em um só lugar' },
  { icon: IconUsers, highlight: 'Atendimento especializado', text: 'para consoles e acessórios' },
];

export default function TrustBar() {
  return (
    <section aria-label="Diferenciais da Eletrogames" className="border-y border-white/10 bg-ink-800">
      <div className="container-site py-12">
        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, highlight, text }) => (
            <li key={highlight} className="flex items-start gap-4">
              <Icon className="h-7 w-7 shrink-0 text-brand" />
              <div>
                <p className="font-display text-lg font-bold leading-tight text-white">{highlight}</p>
                <p className="mt-1 text-sm text-slate-400">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
