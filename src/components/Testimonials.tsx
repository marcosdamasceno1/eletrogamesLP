import SectionTitle from './SectionTitle';

/**
 * Componente pronto para avaliações REAIS.
 *
 * Nenhum depoimento foi escrito por nós. Para publicar, troque os
 * placeholders pelas avaliações reais, ou substitua este array pela resposta
 * de uma integração (Google Business Profile, por exemplo) mantendo o formato.
 */
type Testimonial = { quote: string; author: string; context?: string };

const testimonials: Testimonial[] = [
  { quote: '[DEPOIMENTO REAL DO CLIENTE]', author: '[NOME DO CLIENTE]' },
  { quote: '[DEPOIMENTO REAL DO CLIENTE]', author: '[NOME DO CLIENTE]' },
  { quote: '[DEPOIMENTO REAL DO CLIENTE]', author: '[NOME DO CLIENTE]' },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="relative py-24 sm:py-32" aria-labelledby="depoimentos-title">
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-panel/40" />

      <div className="container-site">
        <SectionTitle
          eyebrow="Depoimentos"
          id="depoimentos-title"
          title="Quem conhece, recomenda."
          highlight="recomenda."
          description="Espaço reservado para as avaliações reais de clientes da Eletrogames."
        />

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <li
              key={index}
              className="flex h-full flex-col justify-between gap-6 rounded-[var(--radius)] border border-dashed border-white/12 p-6"
              data-reveal
              style={{ ['--d' as string]: `${index * 90}ms` }}
            >
              <p className="font-mono text-sm leading-relaxed text-ink-faint">
                {testimonial.quote}
              </p>
              <div className="border-t border-white/[0.07] pt-4">
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-ink-faint">
                  {testimonial.author}
                </p>
                {testimonial.context ? (
                  <p className="mt-1 text-xs text-ink-faint/70">{testimonial.context}</p>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
