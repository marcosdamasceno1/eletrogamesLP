import Button from './Button';
import Blueprint from './Blueprint';
import Counter from './fx/Counter';
import SplitText from './fx/SplitText';
import { IconWrench } from './Icons';
import { safeHref, siteConfig } from '@/lib/site';

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
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-paper">
        <div className="blueprint absolute inset-0 opacity-60" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-paper" />
      </div>

      <div className="container-site grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="label" data-reveal>
            Loja de videogames · Assistência técnica
          </p>

          <h1
            id="hero-title"
            className="mt-6 text-[2.5rem] font-extrabold leading-[1.04] text-navy sm:text-[3.4rem] lg:text-[4rem]"
          >
            <SplitText text="Mais de 28 anos" as="span" className="block" />
            <SplitText text="vivendo o universo dos" as="span" className="block" delay={3} />
            <SplitText text="videogames." as="span" className="block text-blue" delay={7} />
          </h1>

          <p
            className="mt-7 max-w-xl text-lg leading-relaxed text-slate"
            data-reveal
            style={{ ['--d' as string]: '220ms' }}
          >
            Consoles, acessórios, periféricos e assistência técnica especializada para quem leva
            videogame a sério.
          </p>

          <div
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
            data-reveal
            style={{ ['--d' as string]: '300ms' }}
          >
            <Button
              href={safeHref(siteConfig.storeUrl)}
              variant="solid"
              external
              cursorLabel="Ver loja"
            >
              Conheça nossa loja
            </Button>
            <Button href="/assistencia-tecnica" variant="outline" cursorLabel="Assistência">
              <IconWrench className="h-5 w-5 text-blue" />
              Preciso de assistência técnica
            </Button>
          </div>

          <dl
            className="mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-line pt-6"
            data-reveal
            style={{ ['--d' as string]: '400ms' }}
          >
            {proof.map((item) => (
              <div key={item.label}>
                <dt className="font-display text-[17px] font-extrabold leading-none text-navy">
                  {item.count ? <Counter to={Number(item.value)} /> : item.value}
                  {item.suffix ? <span className="text-blue">{item.suffix}</span> : null}
                </dt>
                <dd className="mt-2 text-[13px] leading-snug text-slate-light">{item.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <Blueprint className="hidden lg:block" />
      </div>
    </section>
  );
}
