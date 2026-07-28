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
  // trailingSlash está ligado no build estático, então /sobre chega como /sobre/
  const pathname = usePathname().replace(/\/+$/, '') || '/';

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
      className={`fixed inset-x-0 top-0 z-50 bg-paper/90 backdrop-blur-md transition-shadow duration-300 ${
        scrolled || open ? 'border-b border-line shadow-card' : 'border-b border-transparent'
      }`}
    >
      <div
        className={`container-site flex items-center justify-between gap-6 transition-all duration-300 ${
          scrolled ? 'h-[68px]' : 'h-20'
        }`}
      >
        <Link
          href="/"
          className="flex min-h-[44px] shrink-0 items-center"
          aria-label="Eletrogames, ir para a página inicial"
          onClick={() => setOpen(false)}
        >
          <Logo />
        </Link>

        <nav aria-label="Navegação principal" className="hidden xl:block">
          <ul className="flex items-center gap-1">
            {navigation.map((item) => {
              const active = item.href.startsWith('/#') ? false : pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    data-magnetic="0.15"
                    aria-current={active ? 'page' : undefined}
                    className={`relative block whitespace-nowrap rounded-lg px-3 py-2 text-sm transition-colors ${
                      active ? 'text-blue' : 'text-slate hover:text-navy'
                    }`}
                  >
                    {item.short}
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-3 bottom-0 h-0.5 origin-left rounded-full bg-blue transition-transform duration-300 ${
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
            href={whatsappLink(whatsappMessages.support)}
            target="_blank"
            rel="noopener noreferrer"
            data-magnetic="0.18"
            data-cursor="Falar"
            className="inline-flex min-h-[44px] items-center gap-2 whitespace-nowrap rounded-[10px] border border-line px-4 text-sm font-semibold text-navy transition-colors hover:border-blue hover:text-blue"
          >
            <IconWhatsApp className="h-4 w-4 text-blue" />
            WhatsApp
          </a>
          <a
            href={safeHref(siteConfig.storeUrl)}
            target="_blank"
            rel="noopener noreferrer"
            data-magnetic="0.22"
            data-cursor="Ver loja"
            className="inline-flex min-h-[44px] items-center whitespace-nowrap rounded-[10px] bg-blue px-5 text-sm font-bold text-paper shadow-card transition-all hover:bg-blue-deep hover:shadow-lift"
          >
            Loja Online
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="flex h-12 w-12 items-center justify-center rounded-[10px] border border-line text-navy lg:hidden"
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
        className="max-h-[calc(100vh-68px)] overflow-y-auto border-t border-line bg-paper lg:hidden"
      >
        <nav aria-label="Navegação principal, versão para celular" className="container-site py-5">
          <ul className="flex flex-col">
            {navigation.map((item) => (
              <li key={item.href} className="border-b border-line last:border-0">
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-4 text-[17px] text-navy transition-colors hover:text-blue"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-col gap-3 pb-2">
            <a
              href={safeHref(siteConfig.storeUrl)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[54px] items-center justify-center rounded-[10px] bg-blue px-5 text-base font-bold text-paper"
            >
              Loja Online
            </a>
            <a
              href={whatsappLink(whatsappMessages.support)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[54px] items-center justify-center gap-2 rounded-[10px] border border-line px-5 text-base font-bold text-navy"
            >
              <IconWhatsApp className="h-5 w-5 text-blue" />
              Falar com a assistência
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
