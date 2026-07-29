import Button from './Button';
import SectionTitle from './SectionTitle';
import ServiceCard from './ServiceCard';
import { IconGamepad, IconStethoscope, IconUsers, IconWhatsApp, IconWrench } from './Icons';
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

/**
 * Lista de sintomas, usada na home e na landing de assistência.
 * `tone` escolhe se ela puxa o ciano da assistência ou o violeta da loja.
 */
export function CommonProblems({ tone = 'service' }: { tone?: 'service' | 'store' }) {
  const service = tone === 'service';

  return (
    <div
      className={`overflow-hidden rounded-[var(--radius)] border ${
        service ? 'border-white/10 bg-void/[0.04]' : 'border-white/10 bg-void shadow-card'
      }`}
    >
      <div className={`border-b px-6 py-5 sm:px-8 ${service ? 'border-white/10' : 'border-white/10'}`}>
        <h3
          className={`font-display text-xl font-bold sm:text-2xl ${service ? 'text-ink' : 'text-ink'}`}
        >
          Seu videogame está apresentando algum destes sinais?
        </h3>
      </div>

      <ul className="grid sm:grid-cols-2">
        {commonProblems.map((problem, index) => (
          <li
            key={problem}
            className={`flex items-center gap-3.5 border-b px-6 py-4 text-[15px] sm:px-8 sm:odd:border-r ${
              service
                ? 'border-white/10 text-ink-muted sm:odd:border-white/10'
                : 'border-white/10 text-ink-muted sm:odd:border-white/10'
            }`}
            data-reveal
            style={{ ['--d' as string]: `${index * 45}ms` }}
          >
            <svg
              viewBox="0 0 24 24"
              className={`h-4 w-4 shrink-0 ${service ? 'text-cyan-soft' : 'text-violet-soft'}`}
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="m9 6 6 6-6 6" />
            </svg>
            {problem}
          </li>
        ))}
      </ul>

      <div className="flex flex-col gap-6 px-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <p className={`text-[15px] font-semibold ${service ? 'text-ink' : 'text-ink'}`}>
            Antes de substituir seu equipamento, fale com nossos especialistas.
          </p>
          <p className={`mt-1.5 text-sm ${service ? 'text-ink-muted' : 'text-ink-muted'}`}>
            Descreva o problema pelo WhatsApp. A avaliação vem antes de qualquer serviço.
          </p>
        </div>
        <Button
          href={whatsappLink(whatsappMessages.support)}
          variant="solid"
          tone={service ? 'service' : 'store'}
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
      className="relative overflow-hidden bg-abyss py-24 sm:py-32"
      aria-labelledby="assistencia-title"
    >
      {/* O mundo da assistência é o inverso do da loja: branco sobre azul. */}
      {/* O lado técnico tem luz própria: halo ciano em vez do violeta da loja. */}
      <div aria-hidden="true" className="absolute inset-0">
        <div className="grid-bg absolute inset-0" />
        <div className="absolute left-[-8%] top-1/4 h-[480px] w-[620px] rounded-full bg-cyan/[0.09] blur-[150px]" />
      </div>

      <div className="container-site relative">
        <SectionTitle
          eyebrow="Assistência técnica"
          id="assistencia-title"
          tone="service"
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
          <Button href="/assistencia-tecnica" variant="outline" tone="service" cursorLabel="Abrir">
            Ver a página completa de assistência técnica
          </Button>
        </div>
      </div>
    </section>
  );
}
