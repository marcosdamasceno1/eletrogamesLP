'use client';

import { useEffect, useRef, useState } from 'react';

/** Número que sobe até o valor quando entra na tela. Roda uma vez só. */
export default function Counter({
  to,
  duration = 1100,
  className = '',
}: {
  to: number;
  duration?: number;
  className?: string;
}) {
  const [value, setValue] = useState(to);
  const host = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = host.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    setValue(0);
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1);
          // desacelera no fim, como um mostrador assentando
          setValue(Math.round(to * (1 - Math.pow(1 - t, 3))));
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);

  return (
    <span ref={host} className={className}>
      {value}
    </span>
  );
}
