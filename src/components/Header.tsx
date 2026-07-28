'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { navigation, safeHref, siteConfig, whatsappLink, whatsappMessages } from '@/lib/site';
import { IconWhatsApp } from './Icons';
import Logo from './Logo';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? 'border-b border-white/[0.08] bg-void/85 backdrop-blur-xl'
          : 'border-b border-transparent'
      }`}
    >
      <div
        className={`container-site flex items-center justify-between gap-6 transition-all duration-500 ${
          scrolled ? 'h-[68px]' : 'h-20'
        }`}
      >
        <Link
          href="/"
          className="shrink-0"
          aria-label="Eletrogames, ir para a página inicial"
          onClick={() => setOpen(false)}
        >
          <Logo />
        </Link>

        <nav aria-label="Navegação principal" className="hidden xl:block">
          <ul className="flex items-center gap-1">
            {navigation.map((item) => {
              const active = item.href.startsWith('/#')
                ? false
                : pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    data-magnetic="0.18"
                    aria-current={active ? 'page' : undefined}
                    className={`relative block whitespace-nowrap rounded-lg px-3 py-2 text-sm transition-colors ${
                      active ? 'text-ink' : 'text-ink-muted hover:text-ink'
                    }`}
                  >
                    {item.short}
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-3 -bottom-0.5 h-px origin-left bg-phosphor transition-transform duration-300 ${
                        active ? 'scale-x-100' : 'scale-x-0'
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={whatsappLink(whatsappMessages.general)}
            target="_blank"
            rel="noopener noreferrer"
            data-magnetic="0.2"
            data-cursor="Falar"
            data-cursor-tone="diag"
            className="inline-flex min-h-[44px] items-center gap-2 whitespace-nowrap rounded-xl border border-white/15 px-4 text-sm font-semibold text-ink transition-colors hover:border-diag/60 hover:text-diag"
          >
            <IconWhatsApp className="h-4 w-4" />
            WhatsApp
          </a>
          <a
            href={safeHref(siteConfig.storeUrl)}
            target="_blank"
            rel="noopener noreferrer"
            data-magnetic="0.25"
            data-cursor="Ver loja"
            className="group relative inline-flex min-h-[44px] items-center overflow-hidden rounded-xl whitespace-nowrap bg-phosphor px-5 text-sm font-bold uppercase tracking-wide text-void transition-colors hover:bg-phosphor-soft"
          >
            <span
              aria-hidden="true"
              className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full"
            />
            <span className="relative">Loja Online</span>
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/15 text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        >
          <span className="relative flex h-4 w-6 flex-col justify-between">
            <span
              aria-hidden="true"
              className={`h-0.5 w-full origin-center rounded bg-current transition-transform duration-300 ${
                open ? 'translate-y-[7px] rotate-45' : ''
              }`}
            />
            <span
              aria-hidden="true"
              className={`h-0.5 w-full rounded bg-current transition-opacity duration-200 ${
                open ? 'opacity-0' : ''
              }`}
            />
            <span
              aria-hidden="true"
              className={`h-0.5 w-full origin-center rounded bg-current transition-transform duration-300 ${
                open ? '-translate-y-[7px] -rotate-45' : ''
              }`}
            />
          </span>
        </button>
      </div>

      <div
        id="menu-mobile"
        hidden={!open}
        className="max-h-[calc(100vh-68px)] overflow-y-auto border-t border-white/[0.08] bg-void lg:hidden"
      >
        <nav aria-label="Navegação principal, versão para celular" className="container-site py-6">
          <ul className="flex flex-col">
            {navigation.map((item, index) => (
              <li key={item.href} className="border-b border-white/[0.06] last:border-0">
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  style={{ transitionDelay: `${index * 35}ms` }}
                  className="block py-4 text-lg text-ink transition-colors hover:text-phosphor"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-col gap-3">
            <a
              href={safeHref(siteConfig.storeUrl)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[54px] items-center justify-center rounded-xl bg-phosphor px-5 text-base font-bold uppercase tracking-wide text-void"
            >
              Loja Online
            </a>
            <a
              href={whatsappLink(whatsappMessages.support)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[54px] items-center justify-center gap-2 rounded-xl bg-diag px-5 text-base font-bold text-void"
            >
              <IconWhatsApp className="h-5 w-5" />
              Assistência técnica
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
