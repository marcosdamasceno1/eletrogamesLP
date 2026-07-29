import SectionTitle from '@/components/ui/SectionTitle';
import { siteConfig } from '@/lib/site';

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
    question: 'Os serviços de manutenção têm garantia?',
    answer: `Sim. Os serviços de manutenção realizados pela Eletrogames têm garantia de ${siteConfig.warrantyPeriod}. As condições são informadas no momento da aprovação do serviço.`,
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
    question: 'Quais consoles vocês atendem?',
    answer:
      'PlayStation, Xbox e Nintendo, incluindo as gerações anteriores de cada plataforma. Consoles antigos também são avaliados: são as gerações que acompanhamos desde o começo.',
  },
  {
    question: 'O serviço tem garantia?',
    answer: `Sim. Os serviços de manutenção têm garantia de ${siteConfig.warrantyPeriod}, com as condições informadas no momento da aprovação.`,
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
  tone?: 'store' | 'service';
};

export default function FAQ({
  items,
  title = 'Dúvidas frequentes',
  eyebrow = 'FAQ',
  description,
  tone = 'store',
}: Props) {
  return (
    <section
      id="faq"
      className={`py-24 sm:py-32 ${tone === 'service' ? 'bg-abyss' : 'border-t border-white/10'}`}
      aria-labelledby="faq-title"
    >
      <div className="container-site">
        <SectionTitle
          eyebrow={eyebrow}
          id="faq-title"
          title={title}
          tone={tone}
          description={description}
        />

        {/* <details> nativo: o acordeão abre mesmo sem JavaScript. */}
        <div
          className={`mt-14 max-w-3xl overflow-hidden rounded-[var(--radius)] border ${
            tone === 'service' ? 'border-white/10' : 'border-white/10 bg-void shadow-card'
          }`}
        >
          {items.map((item, index) => (
            <details
              key={item.question}
              className={`group border-b last:border-0 ${
                tone === 'service' ? 'border-white/10 open:bg-void/[0.05]' : 'border-white/10 open:bg-abyss'
              }`}
              data-reveal
              style={{ ['--d' as string]: `${index * 60}ms` }}
            >
              <summary
                className={`flex cursor-pointer list-none items-center gap-6 px-6 py-5 text-left transition-colors sm:px-7 ${
                  tone === 'service' ? 'hover:bg-void/[0.04]' : 'hover:bg-abyss'
                }`}
              >
                <h3
                  className={`flex-1 text-[16px] font-semibold ${
                    tone === 'service' ? 'text-ink' : 'text-ink'
                  }`}
                >
                  {item.question}
                </h3>
                <svg
                  viewBox="0 0 24 24"
                  className={`h-5 w-5 shrink-0 transition-transform duration-300 group-open:rotate-45 ${
                    tone === 'service' ? 'text-cyan-soft' : 'text-violet-soft'
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </summary>
              <div
                className={`px-6 pb-6 text-[15px] leading-relaxed sm:px-7 ${
                  tone === 'service' ? 'text-ink-muted' : 'text-ink-muted'
                }`}
              >
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
