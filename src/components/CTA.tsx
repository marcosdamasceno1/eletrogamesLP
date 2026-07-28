import Button from './Button';
import { IconWhatsApp } from './Icons';
import { safeHref, siteConfig, whatsappLink, whatsappMessages } from '@/lib/site';

type Props = {
  title?: string;
  text?: string;
  whatsappMessage?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
};

export default function CTA({
  title = 'Há mais de 28 anos, a Eletrogames conecta pessoas ao universo dos videogames.',
  text = 'Seja para encontrar seu próximo console, escolher acessórios ou cuidar do equipamento que já faz parte da sua história, conte com a Eletrogames.',
  whatsappMessage = whatsappMessages.general,
  primaryLabel = 'Acessar a Loja',
  secondaryLabel = 'Falar no WhatsApp',
}: Props) {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28" aria-labelledby="cta-final-title">
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-ink-950">
        <div className="absolute inset-0 grid-texture opacity-60" />
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/10 blur-[130px]" />
      </div>

      <div className="container-site">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="cta-final-title"
            className="font-display text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.75rem]"
          >
            {title}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-300">{text}</p>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href={safeHref(siteConfig.storeUrl)} variant="store" size="lg" external>
              {primaryLabel}
            </Button>
            <Button href={whatsappLink(whatsappMessage)} variant="support" size="lg" external>
              <IconWhatsApp className="h-5 w-5" />
              {secondaryLabel}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
