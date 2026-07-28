import SectionTitle from './SectionTitle';

export type FaqItem = { question: string; answer: string };

/** Perguntas da home — apenas informações fornecidas pela empresa. */
export const homeFaq: FaqItem[] = [
  {
    question: 'A Eletrogames faz manutenção de videogames?',
    answer: 'Sim. A assistência técnica é uma das especialidades da Eletrogames.',
  },
  {
    question: 'Vocês fazem manutenção de controles?',
    answer: 'Sim, controles e manetes também podem passar por avaliação técnica.',
  },
  {
    question: 'Como solicito uma avaliação?',
    answer:
      'Entre em contato com a equipe da Eletrogames pelo WhatsApp ou pelos canais disponíveis no site.',
  },
  {
    question: 'Posso comprar produtos pelo site?',
    answer:
      'O site institucional direciona o cliente para a loja online da Eletrogames, onde poderá consultar os produtos disponíveis.',
  },
  {
    question: 'A Eletrogames trabalha há quanto tempo com videogames?',
    answer: 'A empresa possui mais de 28 anos de atuação no segmento.',
  },
];

/** Perguntas específicas da landing de assistência técnica. */
export const supportFaq: FaqItem[] = [
  {
    question: 'A Eletrogames faz manutenção de consoles?',
    answer:
      'Sim. A manutenção de consoles é uma das especialidades da Eletrogames, que atua no segmento de videogames há mais de 28 anos.',
  },
  {
    question: 'Vocês avaliam controles e manetes?',
    answer: 'Sim, controles e manetes também podem passar por avaliação técnica.',
  },
  {
    question: 'Preciso saber qual é o defeito antes de entrar em contato?',
    answer:
      'Não. Basta descrever o que está acontecendo com o equipamento. A identificação da possível origem do problema faz parte do diagnóstico técnico.',
  },
  {
    question: 'Como funciona a avaliação técnica?',
    answer:
      'Você entra em contato e explica a situação, o equipamento passa por uma análise técnica e a equipe informa as possibilidades de manutenção de acordo com o diagnóstico. O serviço só é realizado após a sua aprovação.',
  },
  {
    question: 'Como solicito uma avaliação?',
    answer:
      'Entre em contato com a equipe da Eletrogames pelo WhatsApp ou pelos canais disponíveis no site.',
  },
];

type Props = {
  items: FaqItem[];
  title?: string;
  eyebrow?: string;
  description?: string;
};

export default function FAQ({
  items,
  title = 'Dúvidas frequentes',
  eyebrow = 'FAQ',
  description,
}: Props) {
  return (
    <section id="faq" className="py-20 sm:py-28" aria-labelledby="faq-title">
      <div className="container-site">
        <SectionTitle
          eyebrow={eyebrow}
          title={<span id="faq-title">{title}</span>}
          description={description}
        />

        <div className="mt-12 max-w-3xl divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10 bg-ink-800/60">
          {items.map((item) => (
            <details key={item.question} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-left text-base font-semibold text-white transition-colors hover:bg-white/5">
                <h3 className="text-base font-semibold">{item.question}</h3>
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 shrink-0 text-brand-light transition-transform duration-200 group-open:rotate-45"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-sm leading-relaxed text-slate-300">{item.answer}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
