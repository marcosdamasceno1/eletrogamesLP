import Button from './Button';
import SectionTitle from './SectionTitle';
import ServiceCard from './ServiceCard';
import {
  IconAlert,
  IconGamepad,
  IconStethoscope,
  IconUsers,
  IconWhatsApp,
  IconWrench,
} from './Icons';
import { whatsappLink, whatsappMessages } from '@/lib/site';

export const supportServices = [
  {
    icon: IconWrench,
    title: 'Manutenção de Consoles',
    description:
      'Diagnóstico e manutenção especializada para diferentes tipos de problemas apresentados por consoles.',
  },
  {
    icon: IconGamepad,
    title: 'Manutenção de Controles',
    description: 'Avaliação e reparo de controles e manetes.',
  },
  {
    icon: IconStethoscope,
    title: 'Diagnóstico Técnico',
    description:
      'Identificação da possível origem do problema antes da realização do serviço.',
  },
  {
    icon: IconUsers,
    title: 'Atendimento Especializado',
    description: 'Equipe com ampla experiência no segmento de videogames.',
  },
];

export const commonProblems = [
  'Não liga',
  'Desliga inesperadamente',
  'Apresenta falhas de funcionamento',
  'Controle não responde corretamente',
  'Botões ou analógicos apresentam problemas',
  'Problemas de conexão',
  'Necessidade de avaliação técnica',
];

/** Bloco de problemas comuns — reutilizado na home e na landing de assistência. */
export function CommonProblems() {
  return (
    <div className="rounded-2xl border border-white/10 bg-ink-800/60 p-8">
      <h3 className="font-display text-xl font-bold text-white sm:text-2xl">
        Seu videogame está apresentando algum destes sinais?
      </h3>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {commonProblems.map((problem) => (
          <li key={problem} className="flex items-start gap-3 text-sm text-slate-300">
            <IconAlert className="mt-0.5 h-5 w-5 shrink-0 text-accent-light" />
            {problem}
          </li>
        ))}
      </ul>
      <p className="mt-7 text-base font-semibold text-white">
        Antes de substituir seu equipamento, fale com nossos especialistas.
      </p>
      <div className="mt-6">
        <Button
          href={whatsappLink(whatsappMessages.support)}
          variant="support"
          size="lg"
          external
          className="w-full sm:w-auto"
        >
          <IconWhatsApp className="h-5 w-5" />
          Solicitar avaliação técnica
        </Button>
      </div>
    </div>
  );
}

export default function TechSupport() {
  return (
    <section
      id="assistencia-tecnica"
      className="relative py-20 sm:py-28"
      aria-labelledby="assistencia-title"
    >
      {/* Seção visualmente diferenciada: base azulada separa venda de serviço técnico. */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-ink-950">
        <div className="absolute inset-0 grid-texture opacity-50" />
        <div className="absolute left-[-10%] top-1/4 h-[420px] w-[560px] rounded-full bg-accent/10 blur-[130px]" />
      </div>

      <div className="container-site">
        <SectionTitle
          eyebrow="Assistência Técnica"
          title={
            <span id="assistencia-title">Assistência técnica especializada em videogames.</span>
          }
          description="Seu console ou controle apresentou problema? Conte com quem trabalha com videogames há mais de 28 anos."
        />

        <div className="mt-8 max-w-3xl space-y-4 text-base leading-relaxed text-slate-300">
          <p>
            A Eletrogames é especializada em diagnóstico, manutenção e reparo de consoles e de
            controles/manetes. Antes de qualquer serviço, o equipamento passa por uma avaliação
            técnica — é ela que indica o que está acontecendo e quais são os caminhos possíveis.
          </p>
          <p>
            Essa é a diferença de levar seu videogame para quem trabalha exclusivamente com esse
            tipo de equipamento há mais de 28 anos: a análise vem antes da conclusão, e você recebe
            a orientação necessária para decidir com clareza.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {supportServices.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>

        <div className="mt-12">
          <CommonProblems />
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href="/assistencia-tecnica" variant="ghost" size="lg">
            Ver a página completa de assistência técnica
          </Button>
        </div>
      </div>
    </section>
  );
}
