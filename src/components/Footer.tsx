import Link from 'next/link';
import Logo from './Logo';
import { IconClock, IconInstagram, IconPhone, IconPin, IconWhatsApp } from './Icons';
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
  { icon: IconPhone, label: 'Telefone', value: siteConfig.phone, href: undefined },
  {
    icon: IconWhatsApp,
    label: 'WhatsApp',
    value: siteConfig.whatsappDisplay,
    href: whatsappLink(whatsappMessages.general),
  },
  {
    icon: IconInstagram,
    label: 'Instagram',
    value: siteConfig.instagram,
    href: safeHref(siteConfig.instagramUrl),
  },
  { icon: IconClock, label: 'Horário', value: siteConfig.openingHours, href: undefined },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.08] bg-panel/50" aria-labelledby="footer-title">
      <h2 id="footer-title" className="sr-only">
        Informações da Eletrogames
      </h2>

      <div className="container-site grid gap-14 py-16 lg:grid-cols-[1.2fr_0.7fr_1.1fr]">
        <div>
          <Logo />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-ink-faint">
            Mais de 28 anos de experiência no universo dos videogames. Venda de consoles, controles,
            periféricos e acessórios, com assistência técnica especializada.
          </p>
          <a
            href={safeHref(siteConfig.storeUrl)}
            target="_blank"
            rel="noopener noreferrer"
            data-magnetic="0.22"
            data-cursor="Ver loja"
            className="mt-7 inline-flex min-h-[48px] items-center rounded-xl bg-phosphor px-5 text-sm font-bold uppercase tracking-wide text-void transition-colors hover:bg-phosphor-soft"
          >
            Loja Online
          </a>
        </div>

        <nav aria-label="Links do rodapé">
          <h3 className="label text-ink-faint">Navegação</h3>
          {/* py generoso: no celular cada link precisa de alvo de toque de 44px */}
          <ul className="mt-4">
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
          <h3 className="label text-ink-faint">Contato</h3>
          <ul className="mt-6 space-y-4 text-sm">
            <li className="flex gap-3.5">
              <IconPin className="h-5 w-5 shrink-0 text-phosphor" />
              <span className="text-ink-muted">
                {siteConfig.address.street}
                <br />
                {siteConfig.address.city} — {siteConfig.address.state}
              </span>
            </li>
            {contact.map(({ icon: Icon, label, value, href }) => (
              <li key={label} className="flex gap-3.5">
                <Icon className="h-5 w-5 shrink-0 text-phosphor" />
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

      <div className="border-t border-white/[0.06]">
        <div className="container-site py-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-faint">
            © {new Date().getFullYear()} Eletrogames. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
