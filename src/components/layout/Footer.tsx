import Link from 'next/link';
import Logo from '@/components/layout/Logo';
import { IconClock, IconInstagram, IconPhone, IconPin, IconWhatsApp } from '@/components/ui/Icons';
import { safeHref, siteConfig, whatsappLink, whatsappMessages } from '@/lib/site';

const footerLinks = [
  { label: 'Início', href: '/' },
  { label: 'Nossa História', href: '/sobre' },
  { label: 'Produtos', href: '/#produtos' },
  { label: 'Assistência Técnica', href: '/assistencia-tecnica' },
  { label: 'Contato', href: '/contato' },
  { label: 'Política de Privacidade', href: '/politica-de-privacidade' },
];

const contact = [
  { icon: IconPhone, value: siteConfig.phone, href: undefined },
  {
    icon: IconWhatsApp,
    value: siteConfig.whatsappDisplay,
    href: whatsappLink(whatsappMessages.general),
  },
  { icon: IconInstagram, value: siteConfig.instagram, href: safeHref(siteConfig.instagramUrl) },
  { icon: IconClock, value: siteConfig.openingHours, href: undefined },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-abyss" aria-labelledby="footer-title">
      <h2 id="footer-title" className="sr-only">
        Informações da Eletrogames
      </h2>

      <div className="container-site grid gap-12 py-16 lg:grid-cols-[1.2fr_0.7fr_1.1fr]">
        <div>
          <Logo variant="inverse" />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-ink-muted">
            Mais de 28 anos de experiência no universo dos videogames. Venda de consoles, controles,
            periféricos e acessórios, com assistência técnica especializada.
          </p>
          <a
            href={safeHref(siteConfig.storeUrl)}
            target="_blank"
            rel="noopener noreferrer"
            data-magnetic="0.2"
            data-cursor="Ver loja"
            className="mt-7 inline-flex min-h-[48px] items-center rounded-[10px] bg-void px-5 text-sm font-bold text-ink transition-colors hover:bg-violet/15"
          >
            Loja Online
          </a>
        </div>

        <nav aria-label="Links do rodapé">
          <h3 className="label-cyan">Navegação</h3>
          {/* Alvo de toque de 44px em cada link, para o celular. */}
          <ul className="mt-3">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="link-underline inline-flex min-h-[44px] items-center text-sm text-ink-muted transition-colors hover:text-ink"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="label-cyan">Contato</h3>
          <ul className="mt-6 space-y-4 text-sm">
            <li className="flex gap-3.5">
              <IconPin className="h-5 w-5 shrink-0 text-cyan-soft" />
              <span className="text-ink-muted">
                {siteConfig.address.street}
                <br />
                {siteConfig.address.city} / {siteConfig.address.state}
              </span>
            </li>
            {contact.map(({ icon: Icon, value, href }) => (
              <li key={value} className="flex gap-3.5">
                <Icon className="h-5 w-5 shrink-0 text-cyan-soft" />
                {href && href !== '#' ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline inline-flex min-h-[32px] items-center text-ink-muted transition-colors hover:text-ink"
                  >
                    {value}
                  </a>
                ) : (
                  <span className="text-ink-muted">{value}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site py-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-muted">
            © {new Date().getFullYear()} Eletrogames. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
