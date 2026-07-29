import Button from './Button';
import SectionTitle from './SectionTitle';
import { IconCartridge, IconConsole, IconDisc, IconHandheld, IconWhatsApp } from './Icons';
import { whatsappLink, whatsappMessages } from '@/lib/site';

/**
 * Grade por plataforma.
 *
 * O cliente não procura "assistência técnica de videogame": ele procura o
 * aparelho que tem em casa. Cada cartão abre a conversa já dizendo qual
 * console é, o que encurta o atendimento.
 *
 * As plataformas foram confirmadas pela empresa. Nenhum defeito específico
 * de modelo é citado, porque isso não foi informado.
 */
const platforms = [
  {
    icon: IconDisc,
    name: 'PlayStation',
    text: 'PS5, PS4 e as gerações anteriores.',
    message: whatsappMessages.playstation,
  },
  {
    icon: IconConsole,
    name: 'Xbox',
    text: 'Xbox Series X/S, Xbox One e anteriores.',
    message: whatsappMessages.xbox,
  },
  {
    icon: IconHandheld,
    name: 'Nintendo',
    text: 'Switch e consoles Nintendo de outras gerações.',
    message: whatsappMessages.nintendo,
  },
  {
    icon: IconCartridge,
    name: 'Consoles antigos',
    text: 'As gerações que acompanhamos desde o começo.',
    message: whatsappMessages.retro,
  },
];

export default function Platforms({ tone = 'light' }: { tone?: 'light' | 'navy' }) {
  const navy = tone === 'navy';

  return (
    <section
      className={`py-24 sm:py-32 ${navy ? 'on-navy bg-navy' : 'border-t border-line'}`}
      aria-labelledby="plataformas-title"
    >
      <div className="container-site">
        <SectionTitle
          eyebrow="Plataformas atendidas"
          id="plataformas-title"
          tone={tone}
          title="Qual console você tem em casa?"
          highlight="console"
          description="Clique no seu aparelho e a conversa já começa com a equipe sabendo do que se trata."
        />

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {platforms.map(({ icon: Icon, name, text, message }, index) => (
            <li key={name} data-reveal style={{ ['--d' as string]: `${index * 80}ms` }}>
              <a
                href={whatsappLink(message)}
                target="_blank"
                rel="noopener noreferrer"
                data-tilt
                data-cursor="Falar"
                className={`group flex h-full flex-col rounded-[var(--radius)] border p-6 transition-all duration-300 ${
                  navy
                    ? 'border-paper/15 bg-paper/[0.06] hover:border-paper/40 hover:bg-paper/[0.1]'
                    : 'border-line bg-paper shadow-card hover:border-blue/40 hover:shadow-lift'
                }`}
              >
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-[10px] transition-colors duration-300 ${
                    navy
                      ? 'bg-paper/15 text-paper'
                      : 'bg-sky text-blue group-hover:bg-blue group-hover:text-paper'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </span>

                <h3
                  className={`mt-5 text-[17px] font-bold ${navy ? 'text-paper' : 'text-navy'}`}
                >
                  {name}
                </h3>
                <p
                  className={`mt-2 flex-1 text-sm leading-relaxed ${navy ? 'text-sky/75' : 'text-slate'}`}
                >
                  {text}
                </p>

                <span
                  className={`mt-5 inline-flex items-center gap-2 text-sm font-semibold ${
                    navy ? 'text-blue-soft' : 'text-blue'
                  }`}
                >
                  <IconWhatsApp className="h-4 w-4" />
                  Falar sobre este console
                </span>
              </a>
            </li>
          ))}
        </ul>

        <p
          className={`mt-8 text-sm ${navy ? 'text-sky/70' : 'text-slate'}`}
          data-reveal
        >
          Não achou o seu aparelho na lista? Fale com a equipe mesmo assim.{' '}
          <a
            href={whatsappLink(whatsappMessages.support)}
            target="_blank"
            rel="noopener noreferrer"
            className={`link-underline font-semibold ${navy ? 'text-paper' : 'text-blue'}`}
          >
            Descrever o problema
          </a>
          .
        </p>

        <div className="mt-10" data-reveal>
          <Button
            href={whatsappLink(whatsappMessages.support)}
            variant="solid"
            tone={tone}
            external
            cursorLabel="Avaliação"
            className="w-full sm:w-auto"
          >
            <IconWhatsApp className="h-5 w-5" />
            Solicitar avaliação técnica
          </Button>
        </div>
      </div>
    </section>
  );
}
