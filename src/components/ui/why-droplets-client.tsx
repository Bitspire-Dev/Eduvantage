"use client";

import { useRef } from 'react';
import { useDroplets } from '@/hooks/useDroplets';

export function WhyDropletsClient() {
  const ref = useRef<HTMLDivElement | null>(null);
  const droplets = useDroplets(ref);

  return (
    <div ref={ref} className="why-droplets" aria-hidden="true">
      {droplets.map((d) => {
        const sizeAttr =
          d.size === 'large' ? { 'data-large': '1' } :
          d.size === 'small' ? { 'data-small': '1' } :
          { 'data-med': '1' };
        return (
          <svg
            key={d.key}
            className="why-drop"
            {...sizeAttr}
            style={{ left: d.left + 'px', animationDelay: d.delay + 's', animationDuration: d.duration + 's' }}
            viewBox="0 0 20 180"
            preserveAspectRatio="xMidYMin meet"
            aria-hidden="true"
          >
            <path d="M10 0 L6 150 A9 9 0 0 1 14 150 Z" />
            <circle cx="10" cy="150" r="4" />
          </svg>
        );
      })}
    </div>
  );
}
