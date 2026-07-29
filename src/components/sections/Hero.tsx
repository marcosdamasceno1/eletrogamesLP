import Button from '@/components/ui/Button';
import Blueprint from '@/components/ui/Blueprint';
import Counter from '@/components/fx/Counter';
import SplitText from '@/components/fx/SplitText';
import { IconCheck, IconStore, IconUsers, IconWrench } from '@/components/ui/Icons';
import { safeHref, siteConfig } from '@/lib/site';

/** Selos curtos, no mesmo formato da faixa que a loja usa sob o banner. */
const badges = [
  { icon: IconCheck, label: 'Produtos originais' },
  { icon: IconStore, label: 'Loja e bancada' },
  { icon: IconUsers, label: 'Atendimento especializado' },
];

const proof = [
  { value: '28', suffix: '+', label: 'anos de mercado', count: true },
  { value: 'Loja e bancada', label: 'no mesmo endereço' },
  { value: 'Console e controle', label: 'venda e reparo' },
];

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
      aria-labelledby="hero-title"
    >
      {/* Atmosfera: dois halos neon e a malha, como no banner da loja. */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-void">
        <div className="grid-bg absolute inset-0" />
        <div className="absolute left-[-10%] top-[-25%] h-[620px] w-[820px] rounded-full bg-violet/25 blur-[150px] animate-pulse-glow" />
        <div className="absolute bottom-[-30%] right-[-10%] h-[520px] w-[680px] rounded-full bg-magenta/15 blur-[150px]" />
        <div className="absolute right-[18%] top-[12%] h-[320px] w-[320px] rounded-full bg-cyan/10 blur-[120px]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-void" />
      </div>

      <div className="container-site grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="pill" data-reveal>
            Loja de videogames · Assistência técnica
          </p>

          <h1
            id="hero-title"
            className="title-halo relative mt-7 font-display text-[2.15rem] font-black uppercase leading-[0.94] text-ink sm:text-[2.9rem] lg:text-[3.4rem]"
          >
            <SplitText text="Mais de 28 anos vivendo" as="span" className="block" />
            <SplitText text="o universo" as="span" className="block" delay={4} />
            {/*
              Esta linha não passa pelo SplitText: o background-clip do
              gradiente não pinta através dos spans que ele cria. Ela entra
              com um fade próprio.
            */}
            <span
              className="text-gradient block"
              data-reveal
              style={{ ['--d' as string]: '380ms' }}
            >
              dos videogames
            </span>
          </h1>

          <p
            className="mt-7 max-w-xl text-lg leading-relaxed text-ink-muted"
            data-reveal
            style={{ ['--d' as string]: '220ms' }}
          >
            Consoles, acessórios, periféricos e assistência técnica especializada para quem leva
            videogame a sério.
          </p>

          {/* Faixa de selos, o mesmo recurso do banner da loja. */}
          <ul
            className="mt-8 flex flex-wrap gap-2.5"
            data-reveal
            style={{ ['--d' as string]: '280ms' }}
          >
            {badges.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3.5 py-2 text-[11px] font-medium uppercase tracking-wider text-ink-muted"
              >
                <Icon className="h-4 w-4 text-cyan" />
                {label}
              </li>
            ))}
          </ul>

          <div
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
            data-reveal
            style={{ ['--d' as string]: '340ms' }}
          >
            <Button
              href={safeHref(siteConfig.storeUrl)}
              tone="store"
              variant="solid"
              external
              cursorLabel="Ver loja"
            >
              Conheça nossa loja
            </Button>
            <Button
              href="/assistencia-tecnica"
              tone="service"
              variant="outline"
              cursorLabel="Assistência"
            >
              <IconWrench className="h-5 w-5" />
              Preciso de assistência técnica
            </Button>
          </div>

          <dl
            className="mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-white/10 pt-6"
            data-reveal
            style={{ ['--d' as string]: '420ms' }}
          >
            {proof.map((item) => (
              <div key={item.label}>
                <dt className="font-display text-[17px] font-extrabold leading-none text-ink">
                  {item.count ? <Counter to={Number(item.value)} /> : item.value}
                  {item.suffix ? <span className="text-magenta">{item.suffix}</span> : null}
                </dt>
                <dd className="mt-2 text-[13px] leading-snug text-ink-faint">{item.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <Blueprint className="hidden lg:block" />
      </div>
    </section>
  );
}
