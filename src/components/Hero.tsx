import Button from './Button';
import { IconCheck, IconGamepad, IconWrench } from './Icons';
import { safeHref, siteConfig } from '@/lib/site';

const trustItems = [
  { icon: IconCheck, label: '+28 anos de experiência' },
  { icon: IconGamepad, label: 'Especialistas em videogames' },
  { icon: IconWrench, label: 'Venda e assistência técnica' },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28" aria-labelledby="hero-title">
      {/* Fundo: grafite + grid técnico + halo suave. Sem excesso de neon. */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-ink-950">
        <div className="absolute inset-0 grid-texture opacity-60" />
        <div className="absolute left-1/2 top-[-10%] h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-brand/10 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] h-[420px] w-[520px] rounded-full bg-accent/10 blur-[120px]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ink-950" />
      </div>

      <div className="container-site grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="animate-fade-up">
          <p className="eyebrow">Loja de videogames e assistência técnica</p>

          <h1
            id="hero-title"
            className="mt-5 font-display text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Mais de 28 anos vivendo o universo dos{' '}
            <span className="text-brand">videogames</span>.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
            Consoles, acessórios, periféricos e assistência técnica especializada para quem
            leva videogame a sério.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href={safeHref(siteConfig.storeUrl)} variant="store" size="lg" external>
              Conheça nossa loja
            </Button>
            <Button href="/assistencia-tecnica" variant="support" size="lg">
              Preciso de assistência técnica
            </Button>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
            {trustItems.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2 text-sm font-medium text-slate-300">
                <Icon className="h-5 w-5 shrink-0 text-brand-light" />
                {label}
              </li>
            ))}
          </ul>
        </div>

        {/* Painel visual: referência a consoles e controles sem infantilizar o layout. */}
        <div className="relative hidden lg:block" aria-hidden="true">
          <div className="surface relative overflow-hidden p-8">
            <div className="absolute inset-0 grid-texture opacity-40" />
            <div className="relative flex flex-col gap-6">
              <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-ink-900/80 p-5">
                <IconGamepad className="h-10 w-10 text-brand" />
                <div>
                  <p className="font-display text-base font-bold text-white">Consoles e controles</p>
                  <p className="text-sm text-slate-400">Diferentes gerações, no mesmo lugar.</p>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-ink-900/80 p-5">
                <IconWrench className="h-10 w-10 text-accent-light" />
                <div>
                  <p className="font-display text-base font-bold text-white">Assistência técnica</p>
                  <p className="text-sm text-slate-400">Diagnóstico, manutenção e reparo.</p>
                </div>
              </div>
              <div className="rounded-xl border border-brand/25 bg-brand/10 p-5">
                <p className="font-display text-4xl font-black text-white">+28</p>
                <p className="mt-1 text-sm font-medium text-brand-light">
                  anos acompanhando a evolução dos videogames
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
