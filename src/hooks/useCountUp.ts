"use client";

import { useEffect, useRef, useMemo } from 'react';

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

export function useCountUp(
  visible: boolean,
  end: number,
  duration = 1400
): React.RefObject<HTMLSpanElement | null> {
  const ref = useRef<HTMLSpanElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const formatter = useMemo(() => new Intl.NumberFormat('pl-PL'), []);

  useEffect(() => {
    if (!visible) return;

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) {
      if (ref.current) ref.current.textContent = formatter.format(end);
      return;
    }

    const start = performance.now();
    const animate = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const next = Math.floor(easeOutCubic(t) * end);
      if (ref.current) ref.current.textContent = formatter.format(next);
      if (t < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [visible, end, duration, formatter]);

  return ref;
}
