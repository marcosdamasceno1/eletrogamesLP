import SectionTitle from './SectionTitle';

const steps = [
  {
    title: 'Entre em contato',
    text: 'Fale com a equipe da Eletrogames e explique o que está acontecendo com seu equipamento.',
  },
  {
    title: 'Avaliação',
    text: 'O console ou controle passa por uma análise técnica.',
  },
  {
    title: 'Orientação',
    text: 'A equipe informa as possibilidades de manutenção de acordo com o diagnóstico.',
  },
  {
    title: 'Manutenção',
    text: 'Após a aprovação, o equipamento segue para o serviço técnico.',
  },
];

export default function Steps() {
  return (
    <section id="como-funciona" className="relative py-20 sm:py-28" aria-labelledby="etapas-title">
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-ink-900" />

      <div className="container-site">
        <SectionTitle
          eyebrow="Como funciona"
          title={<span id="etapas-title">Como funciona a assistência</span>}
          description="Um processo simples, sem etapas escondidas: você entende o que está acontecendo com o equipamento antes de aprovar qualquer serviço."
        />

        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step.title} className="surface relative flex h-full flex-col gap-3 p-6">
              <span
                aria-hidden="true"
                className="font-display text-4xl font-black leading-none text-white/10"
              >
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="font-display text-lg font-bold text-white">
                <span className="sr-only">Etapa {index + 1}: </span>
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-400">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
