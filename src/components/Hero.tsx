import Button from './Button';
import Counter from './fx/Counter';
import SplitText from './fx/SplitText';
import { IconGamepad, IconWhatsApp, IconWrench } from './Icons';
import { safeHref, siteConfig, whatsappLink, whatsappMessages } from '@/lib/site';

const proof = [
  { value: '+28', label: 'anos de mercado' },
  { value: 'Videogame', label: 'é o que fazemos' },
  { value: 'Loja + bancada', label: 'no mesmo lugar' },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24" aria-labelledby="hero-title">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-void" />
        <div className="aperture absolute inset-0 opacity-70" />
        <div className="absolute left-1/2 top-[-14%] h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-phosphor/[0.09] blur-[140px]" />
        <div className="absolute bottom-[-25%] right-[-12%] h-[420px] w-[560px] rounded-full bg-diag/[0.07] blur-[130px]" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-void" />
      </div>

      <div className="container-site grid items-center gap-16 lg:grid-cols-[1.08fr_0.92fr]">
        <div>
          <p className="label" data-reveal>
            Loja de videogames · Assistência técnica
          </p>

          <h1
            id="hero-title"
            className="mt-6 text-[2.6rem] font-black leading-[1.02] text-ink sm:text-[3.5rem] lg:text-[4.25rem]"
          >
            <SplitText text="Mais de 28 anos" as="span" className="block" />
            <SplitText text="vivendo o universo dos" as="span" className="block" delay={3} />
            <SplitText
              text="videogames."
              as="span"
              className="block text-phosphor text-glow"
              delay={7}
            />
          </h1>

          <p
            className="mt-7 max-w-xl text-lg leading-relaxed text-ink-muted"
            data-reveal
            style={{ ['--d' as string]: '250ms' }}
          >
            Consoles, acessórios, periféricos e assistência técnica especializada para quem leva
            videogame a sério.
          </p>

          <div
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
            data-reveal
            style={{ ['--d' as string]: '340ms' }}
          >
            <Button
              href={safeHref(siteConfig.storeUrl)}
              variant="store"
              external
              cursorLabel="Ver loja"
            >
              Conheça nossa loja
            </Button>
            <Button href="/assistencia-tecnica" variant="support" cursorLabel="Assistência">
              <IconWrench className="h-5 w-5" />
              Preciso de assistência técnica
            </Button>
          </div>

          <dl
            className="mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-white/[0.08] pt-6"
            data-reveal
            style={{ ['--d' as string]: '440ms' }}
          >
            {proof.map((item) => (
              <div key={item.label}>
                <dt className="font-display text-lg font-bold leading-none text-ink">
                  {item.value}
                </dt>
                <dd className="mt-2 text-[13px] leading-snug text-ink-faint">{item.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* O painel é a tela: liga, aquece e mostra os dois caminhos do negócio. */}
        <div className="relative hidden lg:block" data-reveal style={{ ['--d' as string]: '200ms' }}>
          <div
            className="relative overflow-hidden rounded-[20px] border border-white/[0.1] bg-panel/80 animate-flicker"
            data-tilt
          >
            <div aria-hidden="true" className="scanlines pointer-events-none absolute inset-0 opacity-40" />

            <div className="flex items-center justify-between border-b border-white/[0.08] px-6 py-3">
              <span className="label text-ink-faint">eletrogames · desde sempre</span>
              <span className="flex gap-1.5" aria-hidden="true">
                <span className="h-2 w-2 rounded-full bg-phosphor" />
                <span className="h-2 w-2 rounded-full bg-white/15" />
                <span className="h-2 w-2 rounded-full bg-white/15" />
              </span>
            </div>

            <div className="p-7">
              <p className="font-display text-[5.5rem] font-black leading-none text-ink text-glow">
                <Counter to={28} />
                <span className="text-phosphor">+</span>
              </p>
              <p className="mt-2 max-w-[16rem] text-sm leading-snug text-ink-muted">
                anos acompanhando cada troca de geração dos consoles
              </p>

              <div className="mt-8 grid gap-3">
                <div className="flex items-center gap-4 rounded-xl border border-phosphor/25 bg-phosphor/[0.06] p-4">
                  <IconGamepad className="h-7 w-7 shrink-0 text-phosphor" />
                  <div>
                    <p className="text-sm font-semibold text-ink">Consoles e controles</p>
                    <p className="text-[13px] text-ink-faint">Gerações diferentes, mesma loja.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 rounded-xl border border-diag/25 bg-diag/[0.06] p-4">
                  <IconWrench className="h-7 w-7 shrink-0 text-diag" />
                  <div>
                    <p className="text-sm font-semibold text-ink">Assistência técnica</p>
                    <p className="text-[13px] text-ink-faint">Diagnóstico, manutenção e reparo.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <a
            href={whatsappLink(whatsappMessages.support)}
            target="_blank"
            rel="noopener noreferrer"
            data-magnetic="0.3"
            className="absolute -bottom-6 -left-7 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-panel-high px-4 py-3 text-sm font-semibold text-ink shadow-2xl shadow-black/50 transition-colors hover:border-diag/50 hover:text-diag"
          >
            <IconWhatsApp className="h-4 w-4 text-diag" />
            Meu console parou. E agora?
          </a>
        </div>
      </div>
    </section>
  );
}
