"use client";

import React, { useEffect, useRef, useState } from 'react';

export function Why(){
  const features = [
    {t:"Indywidualny plan",d:"Diagnoza, cele i dopasowany harmonogram nauki."},
    {t:"Przejrzyste postępy",d:"Krótkie podsumowania i stała informacja zwrotna."},
    {t:"Skuteczna motywacja",d:"Budujemy pewność siebie i redukujemy stres egzaminacyjny."},
    {t:"Dojazd do ucznia",d:"Oszczędzasz czas – możliwe też zajęcia u nas."},
  ];
  const rootRef = useRef<HTMLElement | null>(null);
  const [droplets, setDroplets] = useState<Array<{left:number; delay:number; duration:number; key:number}>>([]);

  useEffect(()=>{
    if (typeof window === 'undefined') return;
    const el = rootRef.current;
    if(!el) return;
    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if(prefersReduced) {
      requestAnimationFrame(() => setDroplets([]));
      return;
    }

    const compute = ()=>{
      const width = el.offsetWidth || el.getBoundingClientRect().width || window.innerWidth;
      const GRID = 40; // must match --why-grid in CSS
      const cols = Math.max(1, Math.floor(width / GRID));
      const MAX_COUNT = 15; // user requested 15 droplets
      const count = Math.min(MAX_COUNT, cols);

      const items: Array<{left:number; delay:number; duration:number; key:number}> = [];

      // Evenly distribute `count` column indices across available `cols` columns.
      // For i in [0..count-1], pick index ~ floor((i+0.5)*cols/count)
      for (let i = 0; i < count; i++) {
        const frac = (i + 0.5) / count;
        const idx = Math.floor(frac * cols);
        const left = Math.round(idx * GRID - 4); // center offset for the SVG
        const delay = -Number((Math.random() * 8).toFixed(2));
        const duration = Number((5 + Math.random() * 6).toFixed(2));
        items.push({ left, delay, duration, key: i });
      }

      requestAnimationFrame(() => setDroplets(items));
    };
    compute();
    const onResize = () => { compute(); };
    window.addEventListener('resize', onResize);
    return ()=> window.removeEventListener('resize', onResize);
  }, []);

  return (
    <section id="why" ref={rootRef} className="section">
      {/* Decorative background layers */}
      <div className="why-bg" aria-hidden="true" />
      <div className="why-droplets" aria-hidden="true">
        {droplets.map((d, idx) => {
          const sizeAttr = (idx % 5 === 0) ? { 'data-large': '1' } : (idx % 3 === 0 ? { 'data-small': '1' } : { 'data-med': '1' });
          return (
            <svg key={d.key} className="why-drop" {...sizeAttr} style={{ left: d.left + 'px', animationDelay: d.delay + 's', animationDuration: d.duration + 's' }} viewBox="0 0 20 180" preserveAspectRatio="xMidYMin meet" aria-hidden="true">
              {/* elongated teardrop: straight sides and rounded bottom semicircle */}
              {/* straight sides down to near the bulb, then a wide semicircular convex bulb */}
              <path d="M10 0 L6 150 A9 9 0 0 1 14 150 Z" />
              {/* circular bulb: center at middle x (10), y at arm end (150), diameter = arm spread (14-6=8 => r=4) */}
              <circle cx="10" cy="150" r="4" />
            </svg>
          );
        })}
      </div>
      <div className="container relative z-2">
        <header className="section-header">
          <h2>Dlaczego <span className="accent-text">EduVantage</span>?</h2>
          <p className="muted">Stawiamy na zrozumienie, system i motywację. Każdy uczeń jest inny – dopasowujemy tempo, sposób tłumaczenia oraz formę pracy.</p>
        </header>
        <div className="grid-auto-fit relative z-2">
          {features.map(f=> (
            <div key={f.t} className="card"><h3 className="m-0 mb-3 text-lg font-semibold">{f.t}</h3><p className="m-0 text-sm leading-relaxed muted">{f.d}</p></div>
          ))}
        </div>
      </div>
    </section>
  );
}
