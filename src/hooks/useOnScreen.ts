"use client";

import { useEffect, useState, type RefObject } from 'react';

export function useOnScreen(
  ref: RefObject<Element | null>,
  options?: { rootMargin?: string; threshold?: number; once?: boolean }
): boolean {
  const { rootMargin = '0px', threshold = 0.3, once = true } = options || {};
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersecting(true);
          if (once) obs.disconnect();
        } else if (!once) {
          setIntersecting(false);
        }
      },
      { root: null, rootMargin, threshold }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [ref, rootMargin, threshold, once]);

  return isIntersecting;
}
