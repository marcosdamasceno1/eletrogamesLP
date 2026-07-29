import SectionTitle from './SectionTitle';
import { IconClock, IconUsers, IconWrench, IconSparkle } from './Icons';

const pillars = [
  {
    icon: IconClock,
    title: 'Tempo de bancada',
    text: 'Mais de 28 anos no mesmo segmento, atravessando cada troca de geração.',
  },
  {
    icon: IconWrench,
    title: 'Conhecimento técnico',
    text: 'Quem abre console há décadas aprende a olhar cada aparelho com critério.',
  },
  {
    icon: IconUsers,
    title: 'Relacionamento',
    text: 'Clientes que voltam e indicam. É o que sustenta uma loja por tanto tempo.',
  },
  {
    icon: IconSparkle,
    title: 'Atualização',
    text: 'Console novo, acessório novo, jeito novo de jogar. A gente acompanha.',
  },
];

export default function History() {
  return (
    <section id="nossa-historia" className="border-t border-white/10 py-24 sm:py-32" aria-labelledby="historia-title">
      <div className="container-site">
        <SectionTitle
          eyebrow="Nossa história"
          id="historia-title"
          title="Uma história construída entre gerações de jogadores."
          highlight="gerações"
        />

        <div className="mt-14 grid gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-5 text-[17px] leading-relaxed text-ink-muted">
            <p data-reveal>A Eletrogames faz uma coisa só há mais de 28 anos: videogame.</p>
            <p data-reveal style={{ ['--d' as string]: '80ms' }}>
              Nesse tempo o setor virou do avesso várias vezes. Mudou a mídia, mudou o controle,
              mudou o jeito de conectar. Cada geração chegou com uma tecnologia nova e uma curva de
              aprendizado junto. Atravessamos todas trabalhando: vendendo, testando, abrindo
              aparelho, consertando.
            </p>
            <p data-reveal style={{ ['--d' as string]: '160ms' }}>
              Isso muda o atendimento. Quem já viu o mesmo equipamento funcionando e falhando sabe
              onde procurar. No balcão, ajuda a dizer o que faz sentido para o seu caso. Na bancada,
              ajuda a avaliar com calma antes de propor qualquer serviço.
            </p>
            <p data-reveal style={{ ['--d' as string]: '240ms' }}>
              Confiança de décadas não tem atalho. Veio cliente por cliente, e continua vindo assim.
            </p>

            <blockquote
              className="!mt-10 border-l-2 border-violet pl-7"
              data-reveal
              style={{ ['--d' as string]: '320ms' }}
            >
              <p className="font-display text-xl font-bold leading-snug text-ink sm:text-[1.55rem]">
                "Há mais de 28 anos, games são mais do que produtos para nós. São parte da nossa
                história."
              </p>
            </blockquote>
          </div>

          <div className="space-y-5">
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {pillars.map(({ icon: Icon, title, text }, index) => (
                <li
                  key={title}
                  className="surface flex gap-4 p-5 shadow-card"
                  data-reveal
                  style={{ ['--d' as string]: `${index * 80}ms` }}
                >
                  <Icon className="h-5 w-5 shrink-0 text-violet-soft" />
                  <div>
                    <h3 className="text-[15px] font-bold text-ink">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-muted">{text}</p>
                  </div>
                </li>
              ))}
            </ul>

            {/* Acervo da loja: troque por <Image /> quando as fotos forem digitalizadas. */}
            <div
              className="flex flex-col items-center justify-center gap-2 rounded-[var(--radius)] border border-dashed border-white/10 bg-abyss p-8 text-center"
              data-reveal
            >
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">
                [FOTOS ANTIGAS DA LOJA]
              </p>
              <p className="text-xs text-ink-faint">
                Espaço reservado para o acervo histórico da Eletrogames.
              </p>
            </div>
          </div>
        </div>

        {/* A ordem aqui é real (uma linha do tempo), então a numeração informa algo. */}
        <div className="mt-16">
          <h3 className="font-display text-lg font-bold text-ink">Linha do tempo</h3>
          <p className="mt-2 max-w-xl text-sm text-ink-muted">
            Estrutura pronta para os marcos reais da Eletrogames. Nenhuma data foi preenchida sem
            confirmação da empresa.
          </p>
          <ol className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[0, 1, 2, 3].map((index) => (
              <li
                key={index}
                className="rounded-[var(--radius)] border border-dashed border-white/10 bg-abyss p-5"
                data-reveal
                style={{ ['--d' as string]: `${index * 70}ms` }}
              >
                <span className="font-mono text-[11px] tracking-[0.2em] text-violet-soft">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <p className="mt-3 font-mono text-xs uppercase tracking-[0.18em] text-ink-muted">
                  [ANO]
                </p>
                <p className="mt-2 text-sm text-ink-faint">[MARCO DA HISTÓRIA]</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
