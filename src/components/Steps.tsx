import SectionTitle from './SectionTitle';

/** Aqui a ordem importa de verdade, então os números carregam informação. */
const steps = [
  {
    title: 'Entre em contato',
    text: 'Fale com a equipe da Eletrogames e explique o que está acontecendo com seu equipamento.',
  },
  { title: 'Avaliação', text: 'O console ou controle passa por uma análise técnica.' },
  {
    title: 'Orientação',
    text: 'A equipe informa as possibilidades de manutenção de acordo com o diagnóstico.',
  },
  { title: 'Manutenção', text: 'Após a aprovação, o equipamento segue para o serviço técnico.' },
];

export default function Steps() {
  return (
    <section id="como-funciona" className="relative py-24 sm:py-32" aria-labelledby="etapas-title">
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-panel/40" />

      <div className="container-site">
        <SectionTitle
          eyebrow="Como funciona"
          id="etapas-title"
          tone="diag"
          title="Quatro etapas, nessa ordem."
          highlight="ordem."
          description="Você entende o que está acontecendo com o equipamento antes de aprovar qualquer serviço."
        />

        <ol className="mt-14 grid gap-px overflow-hidden rounded-[var(--radius)] border border-white/[0.08] bg-white/[0.06] sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="group relative bg-void p-7 transition-colors duration-300 hover:bg-panel-raised"
              data-reveal
              style={{ ['--d' as string]: `${index * 90}ms` }}
            >
              <span
                aria-hidden="true"
                className="font-display text-[3.25rem] font-black leading-none text-white/[0.07] transition-colors duration-300 group-hover:text-diag/25"
              >
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-4 text-lg font-bold text-ink">
                <span className="sr-only">Etapa {index + 1}: </span>
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-faint">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
