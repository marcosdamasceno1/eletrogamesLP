import SectionTitle from './SectionTitle';

/**
 * Estrutura pronta para depoimentos REAIS.
 *
 * Nenhuma avaliação foi inventada. Para publicar, substitua os placeholders
 * abaixo pelos depoimentos reais — ou troque este array pela resposta de uma
 * integração (Google Business Profile, por exemplo), mantendo o mesmo formato.
 */
type Testimonial = { quote: string; author: string; context?: string };

const testimonials: Testimonial[] = [
  { quote: '[DEPOIMENTO REAL DO CLIENTE]', author: '[NOME DO CLIENTE]' },
  { quote: '[DEPOIMENTO REAL DO CLIENTE]', author: '[NOME DO CLIENTE]' },
  { quote: '[DEPOIMENTO REAL DO CLIENTE]', author: '[NOME DO CLIENTE]' },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="relative py-20 sm:py-28" aria-labelledby="depoimentos-title">
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-ink-900" />

      <div className="container-site">
        <SectionTitle
          eyebrow="Depoimentos"
          title={<span id="depoimentos-title">Quem conhece, recomenda.</span>}
          description="Espaço reservado para as avaliações reais de clientes da Eletrogames."
        />

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <li key={index} className="surface flex h-full flex-col justify-between gap-6 border-dashed p-6">
              <p className="text-base leading-relaxed text-slate-300">“{testimonial.quote}”</p>
              <div className="hairline pt-4">
                <p className="text-sm font-semibold text-white">{testimonial.author}</p>
                {testimonial.context ? (
                  <p className="text-xs text-slate-500">{testimonial.context}</p>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
