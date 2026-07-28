import Button from './Button';
import SplitText from './fx/SplitText';
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
    <section className="relative overflow-hidden py-24 sm:py-32" aria-labelledby="cta-final-title">
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-void">
        <div className="aperture absolute inset-0 opacity-70" />
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-phosphor/[0.09] blur-[140px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-phosphor/40 to-transparent" />
      </div>

      <div className="container-site">
        <div className="mx-auto max-w-3xl text-center">
          <SplitText
            as="h2"
            id="cta-final-title"
            text={title}
            className="block text-[2rem] font-black leading-[1.08] text-ink sm:text-[2.6rem] lg:text-[3rem]"
          />
          <p className="mt-7 text-lg leading-relaxed text-ink-muted" data-reveal style={{ ['--d' as string]: '150ms' }}>
            {text}
          </p>

          <div
            className="mt-11 flex flex-col justify-center gap-3 sm:flex-row"
            data-reveal
            style={{ ['--d' as string]: '250ms' }}
          >
            <Button
              href={safeHref(siteConfig.storeUrl)}
              variant="store"
              external
              cursorLabel="Ver loja"
            >
              {primaryLabel}
            </Button>
            <Button
              href={whatsappLink(whatsappMessage)}
              variant="support"
              external
              cursorLabel="Falar"
            >
              <IconWhatsApp className="h-5 w-5" />
              {secondaryLabel}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
