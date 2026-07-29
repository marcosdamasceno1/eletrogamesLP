'use client';

import { useEffect, useRef } from 'react';

/**
 * Todo o comportamento fino do site em um só lugar: revelação ao rolar,
 * traços da planta que se desenham, inclinação dos cartões, atração magnética
 * dos botões, cursor e barra de progresso.
 *
 * Fica em um único componente de propósito: um observer, um listener de
 * ponteiro e um de rolagem para a página inteira, em vez de dezenas de
 * componentes cliente competindo pelo mesmo frame.
 *
 * Tudo é delegado por atributo (data-reveal, data-tilt, data-magnetic,
 * data-cursor), então conteúdo renderizado no servidor participa sem virar
 * componente cliente.
 */
export default function Interactions() {
  const ring = useRef<HTMLDivElement>(null);
  const dot = useRef<HTMLDivElement>(null);
  const label = useRef<HTMLSpanElement>(null);
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const fine = window.matchMedia('(pointer: fine)').matches;
    const cleanups: Array<() => void> = [];

    /* ---- revelação ao rolar ------------------------------------ */
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.08 },
    );
    document.querySelectorAll('[data-reveal]').forEach((el) => io.observe(el));
    cleanups.push(() => io.disconnect());

    /* ---- barra de progresso ------------------------------------ */
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const pct = max > 0 ? window.scrollY / max : 0;
        if (bar.current) bar.current.style.transform = `scaleX(${pct})`;
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    cleanups.push(() => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    });

    /* ---- ponteiro: cursor, ímã e inclinação --------------------- */
    if (fine && !reduced) {
      // começa fora da tela: nada de anel parado no canto antes do primeiro movimento
      let rx = -100;
      let ry = -100;
      let raf = 0;
      let magnet: HTMLElement | null = null;
      let tilted: HTMLElement | null = null;

      const paint = () => {
        raf = 0;
        if (dot.current) dot.current.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
        if (ring.current) ring.current.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      };

      const onMove = (event: PointerEvent) => {
        document.documentElement.classList.add('cursor-on');
        rx = event.clientX;
        ry = event.clientY;
        if (!raf) raf = requestAnimationFrame(paint);

        // ímã: o botão persegue o ponteiro dentro de um raio curto
        const nextMagnet = (event.target as HTMLElement | null)?.closest<HTMLElement>(
          '[data-magnetic]',
        );
        if (magnet && magnet !== nextMagnet) {
          magnet.classList.remove('is-pulling');
          magnet.style.removeProperty('--mx');
          magnet.style.removeProperty('--my');
        }
        magnet = nextMagnet ?? null;
        if (magnet) {
          const box = magnet.getBoundingClientRect();
          const strength = Number(magnet.dataset.magnetic || 0.3);
          magnet.classList.add('is-pulling');
          magnet.style.setProperty('--mx', `${(event.clientX - (box.left + box.width / 2)) * strength}px`);
          magnet.style.setProperty('--my', `${(event.clientY - (box.top + box.height / 2)) * strength}px`);
        }

        // inclinação dos cartões
        const nextTilt = (event.target as HTMLElement | null)?.closest<HTMLElement>('[data-tilt]');
        if (tilted && tilted !== nextTilt) {
          tilted.classList.remove('is-tilting');
          tilted.style.removeProperty('--rx');
          tilted.style.removeProperty('--ry');
        }
        tilted = nextTilt ?? null;
        if (tilted) {
          const box = tilted.getBoundingClientRect();
          const px = (event.clientX - box.left) / box.width - 0.5;
          const py = (event.clientY - box.top) / box.height - 0.5;
          tilted.classList.add('is-tilting');
          tilted.style.setProperty('--ry', `${px * 7}deg`);
          tilted.style.setProperty('--rx', `${-py * 7}deg`);
        }

        // cursor: assume o rótulo do elemento sob o ponteiro
        const target = (event.target as HTMLElement | null)?.closest<HTMLElement>('[data-cursor]');
        const ringEl = ring.current;
        const dotEl = dot.current;
        if (!ringEl || !dotEl) return;
        const text = target?.dataset.cursor;
        if (text) {
          ringEl.classList.add('is-labelled');
          dotEl.classList.add('is-hidden');
          if (label.current && label.current.textContent !== text) label.current.textContent = text;
        } else {
          ringEl.classList.remove('is-labelled');
          dotEl.classList.remove('is-hidden');
        }
      };

      const onLeave = () => {
        document.documentElement.classList.remove('cursor-on');
      };
      window.addEventListener('pointermove', onMove, { passive: true });
      document.addEventListener('pointerleave', onLeave);
      cleanups.push(() => {
        window.removeEventListener('pointermove', onMove);
        document.removeEventListener('pointerleave', onLeave);
        document.documentElement.classList.remove('cursor-on');
        if (raf) cancelAnimationFrame(raf);
      });
    }

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-x-0 top-0 z-[9999] h-[2px] origin-left scale-x-0 bg-violet"
        ref={bar}
      />
      <div aria-hidden="true" className="cursor-dot" ref={dot} />
      <div aria-hidden="true" className="cursor-ring" ref={ring}>
        <span className="cursor-label" ref={label} />
      </div>
    </>
  );
}
