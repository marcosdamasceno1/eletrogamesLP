/**
 * Prancha técnica do hero: o desenho de um controle, em traço, com as cotas
 * e a legenda de uma planta de bancada. As linhas se desenham sozinhas quando
 * entram na tela.
 *
 * É desenho vetorial escrito à mão, não imagem: pesa poucos KB, fica nítido em
 * qualquer tela e acompanha a cor da marca sem precisar de outro arquivo.
 */
export default function Blueprint({ className = '' }: { className?: string }) {
  return (
    <figure className={`relative ${className}`} data-reveal>
      <div className="relative overflow-hidden rounded-[var(--radius)] border border-line bg-mist">
        <div aria-hidden="true" className="blueprint absolute inset-0" />

        {/* Legenda da prancha, como em desenho técnico */}
        <figcaption className="relative flex items-center justify-between border-b border-line bg-paper/70 px-5 py-3 backdrop-blur-sm">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate">
            Controle · vista superior
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-blue">
            Bancada Eletrogames
          </span>
        </figcaption>

        <svg
          viewBox="0 0 420 296"
          className="relative w-full"
          fill="none"
          role="img"
          aria-label="Desenho técnico de um controle de videogame visto de cima, com as cotas de um esquema de bancada"
        >
          {/* corpo do controle */}
          <path
            className="draw-path"
            style={{ ['--len' as string]: 900, ['--d' as string]: '120ms' }}
            d="M150 96h120c26 0 42 14 50 40l22 62c8 24-6 42-26 42-14 0-24-8-34-22l-20-28H138l-20 28c-10 14-20 22-34 22-20 0-34-18-26-42l22-62c8-26 24-40 50-40Z"
            stroke="#1560E0"
            strokeWidth="1.6"
          />

          {/* direcional */}
          <path
            className="draw-path"
            style={{ ['--len' as string]: 260, ['--d' as string]: '620ms' }}
            d="M132 150h34M149 133v34"
            stroke="#1560E0"
            strokeWidth="1.6"
            strokeLinecap="round"
          />

          {/* botões de ação */}
          {[
            { cx: 288, cy: 134 },
            { cx: 306, cy: 152 },
            { cx: 288, cy: 170 },
            { cx: 270, cy: 152 },
          ].map((circle, index) => (
            <circle
              key={index}
              className="draw-path"
              style={{ ['--len' as string]: 60, ['--d' as string]: `${700 + index * 80}ms` }}
              cx={circle.cx}
              cy={circle.cy}
              r="8.5"
              stroke="#1560E0"
              strokeWidth="1.6"
            />
          ))}

          {/* analógicos */}
          <circle
            className="draw-path"
            style={{ ['--len' as string]: 130, ['--d' as string]: '860ms' }}
            cx="186"
            cy="192"
            r="20"
            stroke="#1560E0"
            strokeWidth="1.6"
          />
          <circle
            className="draw-path"
            style={{ ['--len' as string]: 130, ['--d' as string]: '940ms' }}
            cx="242"
            cy="192"
            r="20"
            stroke="#1560E0"
            strokeWidth="1.6"
          />

          {/* botões centrais */}
          <path
            className="draw-path"
            style={{ ['--len' as string]: 120, ['--d' as string]: '1000ms' }}
            d="M196 132h12M212 132h12"
            stroke="#1560E0"
            strokeWidth="1.6"
            strokeLinecap="round"
          />

          {/* linha de cota horizontal */}
          <g
            className="draw-path"
            style={{ ['--len' as string]: 420, ['--d' as string]: '1080ms' }}
            stroke="#8496AC"
            strokeWidth="1"
          >
            <path d="M96 268h228" />
            <path d="M96 262v12M324 262v12" />
          </g>
          <text
            x="210"
            y="258"
            textAnchor="middle"
            className="fill-slate font-mono"
            style={{ fontSize: 9, letterSpacing: '0.14em' }}
          >
            DIAGNÓSTICO ANTES DO SERVIÇO
          </text>

          {/* chamada de detalhe */}
          <g
            className="draw-path"
            style={{ ['--len' as string]: 200, ['--d' as string]: '1160ms' }}
            stroke="#1560E0"
            strokeWidth="1"
          >
            <path d="M306 152h58" />
            <circle cx="306" cy="152" r="2.5" fill="#1560E0" />
          </g>
          <text
            x="368"
            y="149"
            className="fill-blue font-mono"
            style={{ fontSize: 9, letterSpacing: '0.12em' }}
          >
            REPARO
          </text>
        </svg>
      </div>
    </figure>
  );
}
