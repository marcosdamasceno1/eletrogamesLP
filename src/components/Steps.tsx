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
    <section id="como-funciona" className="py-24 sm:py-32" aria-labelledby="etapas-title">
      <div className="container-site">
        <SectionTitle
          eyebrow="Como funciona"
          id="etapas-title"
          title="Quatro etapas, nessa ordem."
          highlight="ordem."
          description="Você entende o que está acontecendo com o equipamento antes de aprovar qualquer serviço."
        />

        <ol className="mt-14 grid overflow-hidden rounded-[var(--radius)] border border-line sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="group relative border-b border-line bg-paper p-7 transition-colors duration-300 last:border-b-0 hover:bg-mist sm:border-r sm:[&:nth-child(2n)]:border-r-0 lg:border-b-0 lg:border-r lg:[&:nth-child(2n)]:border-r lg:last:border-r-0"
              data-reveal
              style={{ ['--d' as string]: `${index * 90}ms` }}
            >
              <span
                aria-hidden="true"
                className="font-mono text-xs tracking-[0.2em] text-blue"
              >
                {String(index + 1).padStart(2, '0')}
              </span>
              <div
                aria-hidden="true"
                className="mt-4 h-px w-10 origin-left bg-line transition-all duration-300 group-hover:w-16 group-hover:bg-blue"
              />
              <h3 className="mt-5 text-[17px] font-bold text-navy">
                <span className="sr-only">Etapa {index + 1}: </span>
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
