import Button from './Button';
import SectionTitle from './SectionTitle';
import { IconClock, IconInstagram, IconPhone, IconPin, IconWhatsApp } from './Icons';
import { isPlaceholder, safeHref, siteConfig, whatsappLink, whatsappMessages } from '@/lib/site';

const items = [
  { icon: IconPin, label: 'Endereço', value: `${siteConfig.address.street} — ${siteConfig.address.city}/${siteConfig.address.state}`, href: safeHref(siteConfig.address.mapsUrl) },
  { icon: IconPhone, label: 'Telefone', value: siteConfig.phone, href: undefined },
  { icon: IconWhatsApp, label: 'WhatsApp', value: siteConfig.whatsappDisplay, href: whatsappLink(whatsappMessages.general) },
  { icon: IconInstagram, label: 'Instagram', value: siteConfig.instagram, href: safeHref(siteConfig.instagramUrl) },
  { icon: IconClock, label: 'Horário de funcionamento', value: siteConfig.openingHours, href: undefined },
];

export default function ContactInfo({
  title = 'Localização e contato',
  eyebrow = 'Contato',
  description = 'Fale com a equipe da Eletrogames pelo canal que for mais prático para você.',
}: {
  title?: string;
  eyebrow?: string;
  description?: string;
}) {
  const mapsReady = !isPlaceholder(siteConfig.address.mapsUrl);

  return (
    <section id="contato" className="relative py-20 sm:py-28" aria-labelledby="contato-title">
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-ink-900" />

      <div className="container-site">
        <SectionTitle
          eyebrow={eyebrow}
          title={<span id="contato-title">{title}</span>}
          description={description}
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <ul className="space-y-4">
            {items.map(({ icon: Icon, label, value, href }) => (
              <li key={label} className="surface flex gap-4 p-5">
                <Icon className="h-6 w-6 shrink-0 text-brand" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    {label}
                  </p>
                  {href && href !== '#' ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base text-white transition-colors hover:text-brand-light"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-base text-white">{value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-6">
            {/*
              Mapa: quando [GOOGLE MAPS] estiver preenchido com uma URL de embed,
              troque este bloco por um <iframe loading="lazy" src={siteConfig.address.mapsUrl} />.
            */}
            <div className="surface flex min-h-[240px] flex-1 flex-col items-center justify-center gap-2 border-dashed p-8 text-center">
              <IconPin className="h-8 w-8 text-slate-600" />
              <p className="text-sm font-semibold text-slate-300">[GOOGLE MAPS]</p>
              <p className="text-xs text-slate-500">
                {mapsReady
                  ? 'Mapa configurado.'
                  : 'Área preparada para o mapa da loja (Google Maps embed).'}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                href={whatsappLink(whatsappMessages.support)}
                variant="support"
                size="lg"
                external
                className="flex-1"
              >
                <IconWhatsApp className="h-5 w-5" />
                Falar no WhatsApp
              </Button>
              <Button
                href={safeHref(siteConfig.storeUrl)}
                variant="store"
                size="lg"
                external
                className="flex-1"
              >
                Acessar a Loja
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
