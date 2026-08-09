"use client";

import { useEffect, useState, type RefObject } from 'react';
import { useMediaQuery } from './useMediaQuery';

export interface Droplet {
  left: number;
  delay: number;
  duration: number;
  key: number;
  size: 'large' | 'med' | 'small';
}

const GRID = 40;
const MAX_COUNT = 15;

function computeDroplets(width: number): Droplet[] {
  const cols = Math.max(1, Math.floor(width / GRID));
  const count = Math.min(MAX_COUNT, cols);
  const items: Droplet[] = [];

  for (let i = 0; i < count; i++) {
    const frac = (i + 0.5) / count;
    const idx = Math.floor(frac * cols);
    const left = Math.round(idx * GRID - 4);
    const delay = -Number((Math.random() * 8).toFixed(2));
    const duration = Number((5 + Math.random() * 6).toFixed(2));
    const size: Droplet['size'] = i % 5 === 0 ? 'large' : i % 3 === 0 ? 'small' : 'med';
    items.push({ left, delay, duration, key: i, size });
  }

  return items;
}

export function useDroplets(ref: RefObject<HTMLElement | null>): Droplet[] {
  const [droplets, setDroplets] = useState<Droplet[]>([]);
  const reduced = useMediaQuery('(prefers-reduced-motion: reduce)');

  useEffect(() => {
    if (typeof window === 'undefined' || reduced) return;
    const el = ref.current;
    if (!el) return;

    const compute = () => {
      const width = el.offsetWidth || el.getBoundingClientRect().width || window.innerWidth;
      setDroplets(computeDroplets(width));
    };

    compute();

    let timeout: number | null = null;
    const onResize = () => {
      if (timeout) window.clearTimeout(timeout);
      timeout = window.setTimeout(compute, 150);
    };

    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
      if (timeout) window.clearTimeout(timeout);
    };
  }, [ref, reduced]);

  return droplets;
}
