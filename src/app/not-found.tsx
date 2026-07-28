import Button from '@/components/Button';
import PageHero from '@/components/PageHero';
import { safeHref, siteConfig } from '@/lib/site';

export default function NotFound() {
  return (
    <PageHero
      eyebrow="Erro 404"
      title="Não encontramos esta página."
      description="O endereço acessado pode ter mudado. Use os atalhos abaixo para continuar navegando."
    >
      <Button href="/" variant="ghost" size="lg">
        Voltar para o início
      </Button>
      <Button href="/assistencia-tecnica" variant="support" size="lg">
        Assistência técnica
      </Button>
      <Button href={safeHref(siteConfig.storeUrl)} variant="store" size="lg" external>
        Acessar a Loja
      </Button>
    </PageHero>
  );
}
