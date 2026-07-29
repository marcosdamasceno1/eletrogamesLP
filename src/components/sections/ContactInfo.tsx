import Button from '@/components/ui/Button';
import SectionTitle from '@/components/ui/SectionTitle';
import { IconClock, IconInstagram, IconPhone, IconPin, IconWhatsApp } from '@/components/ui/Icons';
import { isPlaceholder, safeHref, siteConfig, whatsappLink, whatsappMessages } from '@/lib/site';

const items = [
  {
    icon: IconPin,
    label: 'Endereço',
    value: `${siteConfig.address.street} — ${siteConfig.address.city}/${siteConfig.address.state}`,
    href: safeHref(siteConfig.address.mapsUrl),
  },
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
  {
    icon: IconClock,
    label: 'Horário de funcionamento',
    value: siteConfig.openingHours,
    href: undefined,
  },
];

export default function ContactInfo({
  title = 'Onde encontrar a Eletrogames',
  eyebrow = 'Contato',
  description = 'Escolha o canal mais prático. Para assistência técnica, o WhatsApp costuma ser o caminho mais rápido.',
}: {
  title?: string;
  eyebrow?: string;
  description?: string;
}) {
  const mapsReady = !isPlaceholder(siteConfig.address.mapsUrl);

  return (
    <section id="contato" className="bg-abyss py-24 sm:py-32" aria-labelledby="contato-title">
      <div className="container-site">
        <SectionTitle eyebrow={eyebrow} id="contato-title" title={title} description={description} />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <ul className="overflow-hidden rounded-[var(--radius)] border border-white/10 bg-void shadow-card">
            {items.map(({ icon: Icon, label, value, href }, index) => (
              <li
                key={label}
                className="flex gap-4 border-b border-white/10 p-5 last:border-0"
                data-reveal
                style={{ ['--d' as string]: `${index * 60}ms` }}
              >
                <Icon className="h-5 w-5 shrink-0 text-violet-soft" />
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-faint">
                    {label}
                  </p>
                  {href && href !== '#' ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline mt-1.5 inline-block text-[15px] text-ink transition-colors hover:text-violet-soft"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="mt-1.5 text-[15px] text-ink">{value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-5">
            {/*
              Mapa: com [GOOGLE MAPS] preenchido com uma URL de embed, troque
              este bloco por <iframe loading="lazy" src={siteConfig.address.mapsUrl} />.
            */}
            <div
              className="flex min-h-[240px] flex-1 flex-col items-center justify-center gap-3 rounded-[var(--radius)] border border-dashed border-white/10 bg-void p-8 text-center"
              data-reveal
            >
              <IconPin className="h-7 w-7 text-ink-faint" />
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">
                [GOOGLE MAPS]
              </p>
              <p className="text-xs text-ink-faint">
                {mapsReady ? 'Mapa configurado.' : 'Espaço reservado para o mapa da loja.'}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row" data-reveal>
              <Button
                href={whatsappLink(whatsappMessages.support)}
                variant="solid"
                external
                cursorLabel="Falar"
                className="flex-1"
              >
                <IconWhatsApp className="h-5 w-5" />
                Falar no WhatsApp
              </Button>
              <Button
                href={safeHref(siteConfig.storeUrl)}
                variant="outline"
                external
                cursorLabel="Ver loja"
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
