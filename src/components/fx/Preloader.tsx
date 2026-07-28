'use client';

import { useEffect, useLayoutEffect, useState } from 'react';

const KEY = 'eg-booted';

/**
 * Sequência de ligar a TV: um filete de fósforo risca a tela, abre na
 * vertical, o nome assenta e a cortina sobe para dentro do hero.
 *
 * Roda uma vez por sessão. Quem pediu movimento reduzido, ou quem já viu
 * na mesma aba, entra direto na página.
 */
export default function Preloader() {
  const [phase, setPhase] = useState<'boot' | 'lift' | 'gone'>('boot');

  useLayoutEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const seen = sessionStorage.getItem(KEY);
    if (reduced || seen) {
      setPhase('gone');
      document.documentElement.style.removeProperty('overflow');
    } else {
      document.documentElement.style.overflow = 'hidden';
    }
  }, []);

  useEffect(() => {
    if (phase === 'gone') return;
    const toLift = setTimeout(() => setPhase('lift'), 1250);
    const toGone = setTimeout(() => {
      setPhase('gone');
      sessionStorage.setItem(KEY, '1');
      document.documentElement.style.removeProperty('overflow');
    }, 1900);
    return () => {
      clearTimeout(toLift);
      clearTimeout(toGone);
    };
  }, [phase]);

  if (phase === 'gone') return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[10000] flex items-center justify-center bg-void transition-transform duration-[650ms] ease-[cubic-bezier(.76,0,.24,1)] ${
        phase === 'lift' ? '-translate-y-full' : ''
      }`}
    >
      <div className="relative w-full max-w-sm px-8">
        {/* o filete que risca a tela e depois abre */}
        <div className="h-px w-full origin-left animate-boot-line bg-phosphor glow-phosphor" />

        <div
          className="mt-6 origin-center animate-boot-open text-center"
          style={{ animationDelay: '420ms' }}
        >
          <p className="font-display text-3xl font-black tracking-tightest text-ink">
            ELETRO<span className="text-phosphor">GAMES</span>
          </p>
          <p className="label mt-3 text-ink-faint">carregando</p>
        </div>
      </div>
    </div>
  );
}
