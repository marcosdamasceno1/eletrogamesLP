import Button from '@/components/ui/Button';
import { IconWhatsApp } from '@/components/ui/Icons';
import { safeHref, siteConfig, whatsappLink, whatsappMessages } from '@/lib/site';

/** 404 no registro da prancha técnica: a página some, a marca continua. */
export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden bg-void py-32">
      <div aria-hidden="true" className="grid-bg absolute inset-0 opacity-60" />

      <div className="container-site relative max-w-2xl">
        <p className="label">Erro 404</p>

        <h1 className="mt-6 text-[2rem] font-extrabold leading-tight text-ink sm:text-[2.6rem]">
          Essa página não está no ar.
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-ink-muted">
          O endereço pode ter mudado. Os caminhos abaixo continuam funcionando.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button href="/" variant="solid" cursorLabel="Início">
            Voltar para o início
          </Button>
          <Button href="/assistencia-tecnica" variant="outline" cursorLabel="Assistência">
            Assistência técnica
          </Button>
          <Button
            href={safeHref(siteConfig.storeUrl)}
            variant="outline"
            external
            cursorLabel="Ver loja"
          >
            Acessar a Loja
          </Button>
        </div>

        <p className="mt-10 text-sm text-ink-muted">
          Procurando algo específico?{' '}
          <a
            href={whatsappLink(whatsappMessages.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline font-semibold text-violet-soft"
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
