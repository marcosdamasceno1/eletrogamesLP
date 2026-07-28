import Button from './Button';
import SectionTitle from './SectionTitle';
import ServiceCard from './ServiceCard';
import {
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
    title: 'Manutenção de consoles',
    description:
      'Diagnóstico e manutenção especializada para diferentes tipos de problemas apresentados por consoles.',
  },
  {
    icon: IconGamepad,
    title: 'Manutenção de controles',
    description: 'Avaliação e reparo de controles e manetes.',
  },
  {
    icon: IconStethoscope,
    title: 'Diagnóstico técnico',
    description: 'Identificação da possível origem do problema antes da realização do serviço.',
  },
  {
    icon: IconUsers,
    title: 'Atendimento especializado',
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

/** Lista de sintomas. Aparece na home e na landing de assistência. */
export function CommonProblems() {
  return (
    <div className="overflow-hidden rounded-[var(--radius)] border border-diag/20 bg-panel-raised/50">
      <div className="border-b border-white/[0.07] px-7 py-5 sm:px-9">
        <h3 className="font-display text-xl font-bold text-ink sm:text-2xl">
          Seu videogame está apresentando algum destes sinais?
        </h3>
      </div>

      <ul className="grid sm:grid-cols-2">
        {commonProblems.map((problem, index) => (
          <li
            key={problem}
            className="flex items-center gap-3.5 border-b border-white/[0.05] px-7 py-4 text-[15px] text-ink-muted sm:px-9 sm:odd:border-r sm:odd:border-white/[0.05]"
            data-reveal
            style={{ ['--d' as string]: `${index * 45}ms` }}
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-diag" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden="true">
              <path d="m9 6 6 6-6 6" />
            </svg>
            {problem}
          </li>
        ))}
      </ul>

      <div className="flex flex-col gap-6 px-7 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-9">
        <p className="max-w-md text-[15px] font-semibold text-ink">
          Antes de substituir seu equipamento, fale com nossos especialistas.
        </p>
        <Button
          href={whatsappLink(whatsappMessages.support)}
          variant="support"
          external
          cursorLabel="Avaliação"
          className="w-full shrink-0 sm:w-auto"
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
      className="relative py-24 sm:py-32"
      aria-labelledby="assistencia-title"
    >
      {/* O lado técnico tem luz própria: ciano, nunca âmbar. */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-void">
        <div className="aperture absolute inset-0 opacity-50" />
        <div className="absolute left-[-8%] top-1/4 h-[460px] w-[600px] rounded-full bg-diag/[0.08] blur-[140px]" />
      </div>

      <div className="container-site">
        <SectionTitle
          eyebrow="Assistência técnica"
          id="assistencia-title"
          tone="diag"
          title="Assistência técnica especializada em videogames."
          highlight="especializada"
          description="Seu console ou controle apresentou problema? Conte com quem trabalha com videogames há mais de 28 anos."
        />

        <div className="mt-9 max-w-2xl space-y-4 text-[17px] leading-relaxed text-ink-muted">
          <p data-reveal>
            Parou de ligar no meio da partida, desliga sozinho ou o analógico anda por conta
            própria. A primeira reação costuma ser abrir o site de uma loja e ver quanto custa um
            aparelho novo.
          </p>
          <p data-reveal style={{ ['--d' as string]: '80ms' }}>
            O equipamento chega, passa por avaliação técnica e identificamos a possível origem do
            problema. Só depois falamos de serviço, e só com a sua aprovação. Trabalhar com
            videogame há mais de 28 anos ajuda exatamente aqui: dificilmente é o primeiro aparelho
            desse tipo que abrimos.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {supportServices.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>

        <div className="mt-14">
          <CommonProblems />
        </div>

        <div className="mt-8" data-reveal>
          <Button href="/assistencia-tecnica" variant="ghost" cursorLabel="Abrir">
            Ver a página completa de assistência técnica
          </Button>
        </div>
      </div>
    </section>
  );
}
