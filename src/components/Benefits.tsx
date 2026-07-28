import Button from './Button';
import SectionTitle from './SectionTitle';
import { IconChat, IconClock, IconShield, IconStore, IconWhatsApp } from './Icons';
import { whatsappLink, whatsappMessages } from '@/lib/site';

const reasons = [
  {
    icon: IconClock,
    title: 'Mais de 28 anos de mercado',
    text: 'Experiência construída durante diferentes gerações de videogames.',
  },
  {
    icon: IconShield,
    title: 'Especialização',
    text: 'Uma empresa que conhece o universo gamer tanto na venda quanto na parte técnica.',
  },
  {
    icon: IconStore,
    title: 'Venda + Assistência',
    text: 'O cliente encontra produtos e suporte técnico especializado em um mesmo lugar.',
  },
  {
    icon: IconChat,
    title: 'Atendimento',
    text: 'Orientação para ajudar o cliente a encontrar a melhor solução para sua necessidade.',
  },
];

export default function Benefits() {
  return (
    <section
      id="por-que-escolher"
      className="relative py-20 sm:py-28"
      aria-labelledby="por-que-title"
    >
      <div className="container-site">
        <SectionTitle
          eyebrow="Por que escolher a Eletrogames"
          title={<span id="por-que-title">Experiência não se improvisa.</span>}
          description="Videogame não é uma linha de produto que a Eletrogames resolveu adicionar. É o que fazemos há mais de 28 anos, todos os dias, na venda e na bancada."
        />

        <ul className="mt-12 grid gap-5 sm:grid-cols-2">
          {reasons.map(({ icon: Icon, title, text }) => (
            <li key={title} className="surface flex gap-5 p-6">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-brand-light">
                <Icon className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-display text-lg font-bold text-white">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{text}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-10">
          <Button
            href={whatsappLink(whatsappMessages.general)}
            variant="support"
            size="lg"
            external
            className="w-full sm:w-auto"
          >
            <IconWhatsApp className="h-5 w-5" />
            Fale com a nossa equipe
          </Button>
        </div>
      </div>
    </section>
  );
}
