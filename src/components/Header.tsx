'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { navigation, safeHref, siteConfig, whatsappLink, whatsappMessages } from '@/lib/site';
import { IconWhatsApp } from './Icons';
import Logo from './Logo';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Trava o scroll do body e permite fechar o menu com Esc.
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
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? 'border-b border-white/10 bg-ink-950/90 backdrop-blur-md'
          : 'border-b border-transparent bg-gradient-to-b from-ink-950/80 to-transparent'
      }`}
    >
      <div className="container-site flex h-20 items-center justify-between gap-6">
        <Link
          href="/"
          className="shrink-0"
          aria-label="Eletrogames — página inicial"
          onClick={() => setOpen(false)}
        >
          <Logo />
        </Link>

        <nav aria-label="Navegação principal" className="hidden xl:block">
          <ul className="flex items-center gap-5">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="whitespace-nowrap text-sm font-medium text-slate-300 transition-colors hover:text-white"
                >
                  {item.short}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={whatsappLink(whatsappMessages.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-4 text-sm font-semibold whitespace-nowrap text-white transition-colors hover:border-white/40 hover:bg-white/10"
          >
            <IconWhatsApp className="h-4 w-4 text-brand-light" />
            Falar com a Eletrogames
          </a>
          <a
            href={safeHref(siteConfig.storeUrl)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center rounded-xl bg-brand px-5 text-sm font-bold uppercase tracking-wide whitespace-nowrap text-ink-950 shadow-lg shadow-brand/25 transition-colors hover:bg-brand-light"
          >
            Loja Online
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white lg:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        >
          <span className="sr-only">{open ? 'Fechar menu' : 'Abrir menu'}</span>
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {/* Menu mobile */}
      <div
        id="menu-mobile"
        hidden={!open}
        className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-white/10 bg-ink-950 lg:hidden"
      >
        <nav aria-label="Navegação principal (mobile)" className="container-site py-6">
          <ul className="flex flex-col gap-1">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-4 text-base font-medium text-slate-200 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-col gap-3">
            <a
              href={safeHref(siteConfig.storeUrl)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[52px] items-center justify-center rounded-xl bg-brand px-5 text-base font-bold uppercase tracking-wide text-ink-950"
            >
              Loja Online
            </a>
            <a
              href={whatsappLink(whatsappMessages.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 text-base font-semibold text-white"
            >
              <IconWhatsApp className="h-5 w-5 text-brand-light" />
              Falar com a Eletrogames
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
