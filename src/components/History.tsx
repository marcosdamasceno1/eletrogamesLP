import SectionTitle from './SectionTitle';
import { IconClock, IconUsers, IconWrench, IconSparkle } from './Icons';

const pillars = [
  {
    icon: IconClock,
    title: 'Experiência acumulada',
    text: 'Mais de 28 anos convivendo com o mercado de videogames, de geração em geração.',
  },
  {
    icon: IconWrench,
    title: 'Conhecimento técnico',
    text: 'Quem trabalha há décadas com consoles aprende a olhar cada equipamento com critério.',
  },
  {
    icon: IconUsers,
    title: 'Relacionamento',
    text: 'Clientes que voltam, indicam e trazem a próxima geração da família até a loja.',
  },
  {
    icon: IconSparkle,
    title: 'Evolução constante',
    text: 'Novos consoles, novos acessórios, novas formas de jogar — e a Eletrogames acompanhando.',
  },
];

export default function History() {
  return (
    <section id="nossa-historia" className="relative py-20 sm:py-28" aria-labelledby="historia-title">
      <div className="container-site">
        <SectionTitle
          eyebrow="Nossa História"
          title={
            <span id="historia-title">
              Uma história construída entre gerações de jogadores.
            </span>
          }
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-5 text-base leading-relaxed text-slate-300 sm:text-lg">
            <p>
              A Eletrogames nasceu de algo simples e difícil de copiar: gostar de videogame de
              verdade. São mais de 28 anos dentro do mesmo segmento, atendendo quem entra na loja
              procurando o primeiro console e também quem chega com um equipamento que já faz parte
              da própria história.
            </p>
            <p>
              Nesse tempo, vimos o mercado mudar várias vezes. Mudaram as mídias, os controles, os
              acessórios, a forma de conectar, a forma de jogar. Cada geração de console trouxe uma
              tecnologia diferente — e, com ela, uma nova curva de aprendizado. A Eletrogames
              atravessou todas elas trabalhando, testando, vendendo e consertando.
            </p>
            <p>
              É esse acúmulo que sustenta o nosso atendimento hoje. Não é entusiasmo de quem acabou
              de chegar: é repertório de quem já viu o equipamento funcionando, viu o equipamento
              falhando e sabe onde procurar. Do lado da venda, ajuda a indicar o que realmente faz
              sentido para cada perfil. Do lado técnico, ajuda a avaliar com calma antes de propor
              qualquer serviço.
            </p>
            <p>
              A confiança que nos trouxe até aqui foi construída devagar, cliente a cliente, ao
              longo de décadas. E continua sendo construída do mesmo jeito.
            </p>

            <blockquote className="mt-8 border-l-2 border-brand pl-6">
              <p className="font-display text-xl font-bold leading-snug text-white sm:text-2xl">
                “Há mais de 28 anos, games são mais do que produtos para nós. São parte da nossa
                história.”
              </p>
            </blockquote>
          </div>

          <div className="space-y-6">
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {pillars.map(({ icon: Icon, title, text }) => (
                <li key={title} className="surface flex gap-4 p-5">
                  <Icon className="h-6 w-6 shrink-0 text-brand-light" />
                  <div>
                    <h3 className="font-display text-base font-bold text-white">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-400">{text}</p>
                  </div>
                </li>
              ))}
            </ul>

            {/*
              Espaço reservado para o acervo histórico da loja.
              Substitua por <Image /> com as fotografias antigas quando forem enviadas.
            */}
            <div className="surface flex flex-col items-center justify-center gap-2 border-dashed p-8 text-center">
              <p className="text-sm font-semibold text-slate-300">[FOTOS ANTIGAS DA LOJA]</p>
              <p className="text-xs text-slate-500">
                Área preparada para a galeria histórica e a linha do tempo da Eletrogames.
              </p>
            </div>
          </div>
        </div>

        {/* Linha do tempo — estrutura pronta, a ser preenchida com marcos reais. */}
        <div className="mt-16">
          <h3 className="font-display text-lg font-bold text-white">Linha do tempo</h3>
          <p className="mt-2 text-sm text-slate-400">
            Estrutura preparada para receber os marcos reais da história da Eletrogames.
          </p>
          <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4].map((index) => (
              <li key={index} className="surface border-dashed p-5">
                <span className="eyebrow">[ANO]</span>
                <p className="mt-2 text-sm text-slate-400">[MARCO DA HISTÓRIA DA ELETROGAMES]</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
