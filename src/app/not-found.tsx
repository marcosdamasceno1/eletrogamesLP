import Button from '@/components/Button';
import { IconWhatsApp } from '@/components/Icons';
import { safeHref, siteConfig, whatsappLink, whatsappMessages } from '@/lib/site';

/** 404 como tela sem sinal: a página segue sendo da Eletrogames. */
export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden py-32">
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-void">
        <div className="scanlines absolute inset-0 opacity-30" />
        <div className="absolute left-1/2 top-1/2 h-[380px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-phosphor/[0.07] blur-[130px]" />
      </div>

      <div className="container-site max-w-2xl">
        <p className="label">Erro 404</p>

        <p className="mt-6 font-display text-[5rem] font-black leading-none text-ink/15 sm:text-[7rem]">
          SEM SINAL
        </p>

        <h1 className="mt-4 text-[2rem] font-black leading-tight text-ink sm:text-[2.6rem]">
          Essa página não está no ar.
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-ink-muted">
          O endereço pode ter mudado. Os caminhos abaixo continuam funcionando.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button href="/" variant="ghost" cursorLabel="Início">
            Voltar para o início
          </Button>
          <Button href="/assistencia-tecnica" variant="support" cursorLabel="Assistência">
            Assistência técnica
          </Button>
          <Button
            href={safeHref(siteConfig.storeUrl)}
            variant="store"
            external
            cursorLabel="Ver loja"
          >
            Acessar a Loja
          </Button>
        </div>

        <p className="mt-10 text-sm text-ink-faint">
          Procurando algo específico?{' '}
          <a
            href={whatsappLink(whatsappMessages.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-diag"
          >
            <IconWhatsApp className="mr-1 inline h-4 w-4" />
            Pergunte no WhatsApp
          </a>
          .
        </p>
      </div>
    </section>
  );
}
