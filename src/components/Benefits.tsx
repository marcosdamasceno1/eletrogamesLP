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
    title: 'Venda e assistência',
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
    <section id="por-que-escolher" className="border-t border-line py-24 sm:py-32" aria-labelledby="por-que-title">
      <div className="container-site">
        <SectionTitle
          eyebrow="Por que a Eletrogames"
          id="por-que-title"
          title="Experiência não se improvisa."
          highlight="improvisa."
          description="Videogame é o único assunto da Eletrogames há mais de 28 anos. Todo dia, no balcão e na bancada."
        />

        <ul className="mt-14 grid gap-5 sm:grid-cols-2">
          {reasons.map(({ icon: Icon, title, text }, index) => (
            <li
              key={title}
              className="surface flex gap-5 p-6 shadow-card transition-colors duration-300 hover:border-blue/40"
              data-reveal
              style={{ ['--d' as string]: `${index * 80}ms` }}
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] bg-sky text-blue">
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-[17px] font-bold text-navy">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate">{text}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-10" data-reveal>
          <Button
            href={whatsappLink(whatsappMessages.general)}
            variant="solid"
            external
            cursorLabel="Falar"
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
