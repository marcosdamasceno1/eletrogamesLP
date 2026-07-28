import Button from './Button';
import SplitText from './fx/SplitText';
import { IconWhatsApp } from './Icons';
import { safeHref, siteConfig, whatsappLink, whatsappMessages } from '@/lib/site';

type Props = {
  title?: string;
  text?: string;
  whatsappMessage?: string;
  storeLabel?: string;
  whatsappLabel?: string;
  /** Qual das duas ações é a principal nesta página. Ela vira o botão branco. */
  primary?: 'store' | 'support';
};

export default function CTA({
  title = 'Há mais de 28 anos, a Eletrogames conecta pessoas ao universo dos videogames.',
  text = 'Seja para encontrar seu próximo console, escolher acessórios ou cuidar do equipamento que já faz parte da sua história, conte com a Eletrogames.',
  whatsappMessage = whatsappMessages.general,
  storeLabel = 'Acessar a Loja',
  whatsappLabel = 'Falar no WhatsApp',
  primary = 'store',
}: Props) {
  const store = (
    <Button
      href={safeHref(siteConfig.storeUrl)}
      variant={primary === 'store' ? 'solid' : 'outline'}
      tone="navy"
      external
      cursorLabel="Ver loja"
    >
      {storeLabel}
    </Button>
  );

  const support = (
    <Button
      href={whatsappLink(whatsappMessage)}
      variant={primary === 'support' ? 'solid' : 'outline'}
      tone="navy"
      external
      cursorLabel="Falar"
    >
      <IconWhatsApp className="h-5 w-5" />
      {whatsappLabel}
    </Button>
  );

  return (
    <section
      className="on-navy relative overflow-hidden bg-navy-deep py-24 sm:py-32"
      aria-labelledby="cta-final-title"
    >
      <div aria-hidden="true" className="blueprint-invert absolute inset-0" />

      <div className="container-site relative">
        <div className="mx-auto max-w-3xl text-center">
          <SplitText
            as="h2"
            id="cta-final-title"
            text={title}
            className="block text-[1.95rem] font-extrabold leading-[1.1] text-paper sm:text-[2.5rem] lg:text-[2.85rem]"
          />
          <p
            className="mt-7 text-lg leading-relaxed text-sky/80"
            data-reveal
            style={{ ['--d' as string]: '150ms' }}
          >
            {text}
          </p>

          <div
            className="mt-11 flex flex-col justify-center gap-3 sm:flex-row"
            data-reveal
            style={{ ['--d' as string]: '250ms' }}
          >
            {primary === 'support' ? (
              <>
                {support}
                {store}
              </>
            ) : (
              <>
                {store}
                {support}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
