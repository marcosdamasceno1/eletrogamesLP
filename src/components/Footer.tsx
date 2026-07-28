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

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-900" aria-labelledby="footer-title">
      <h2 id="footer-title" className="sr-only">
        Informações da Eletrogames
      </h2>

      <div className="container-site grid gap-12 py-16 lg:grid-cols-[1.2fr_0.8fr_1fr]">
        <div>
          <Logo />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-400">
            Mais de 28 anos de experiência no universo dos videogames. Venda de consoles,
            controles, periféricos e acessórios, além de assistência técnica especializada.
          </p>
          <a
            href={safeHref(siteConfig.storeUrl)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex min-h-[48px] items-center rounded-xl bg-brand px-5 text-sm font-bold uppercase tracking-wide text-ink-950 transition-colors hover:bg-brand-light"
          >
            Loja Online
          </a>
        </div>

        <nav aria-label="Links do rodapé">
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
            Navegação
          </h3>
          <ul className="mt-5 space-y-3">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-slate-400 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
            Contato
          </h3>
          <ul className="mt-5 space-y-4 text-sm text-slate-400">
            <li className="flex gap-3">
              <IconPin className="h-5 w-5 shrink-0 text-brand" />
              <span>
                {siteConfig.address.street}
                <br />
                {siteConfig.address.city} — {siteConfig.address.state}
              </span>
            </li>
            <li className="flex gap-3">
              <IconPhone className="h-5 w-5 shrink-0 text-brand" />
              <span>{siteConfig.phone}</span>
            </li>
            <li className="flex gap-3">
              <IconWhatsApp className="h-5 w-5 shrink-0 text-brand" />
              <a
                href={whatsappLink(whatsappMessages.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white"
              >
                {siteConfig.whatsappDisplay}
              </a>
            </li>
            <li className="flex gap-3">
              <IconInstagram className="h-5 w-5 shrink-0 text-brand" />
              <a
                href={safeHref(siteConfig.instagramUrl)}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white"
              >
                {siteConfig.instagram}
              </a>
            </li>
            <li className="flex gap-3">
              <IconClock className="h-5 w-5 shrink-0 text-brand" />
              <span>{siteConfig.openingHours}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="hairline">
        <div className="container-site py-6">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Eletrogames. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
