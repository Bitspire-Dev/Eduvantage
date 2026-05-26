"use client";
import React, { useEffect, useMemo, useRef, useState } from 'react';
type Stat = { value: number; suffix?: string; label: string };

const stats: Stat[] = [
  { value: 100, suffix: '+', label: 'Zadowolonych uczniów' },
  { value: 4, label: 'Lata doświadczenia' },
  { value: 1200, suffix: '+', label: 'Zdanych egzaminów' },
  { value: 70, suffix: '%', label: 'Średni wynik maturalny' },
];

function useOnScreen(ref: { current: Element | null }, rootMargin = '0px') {
  const [isIntersecting, setIntersecting] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIntersecting(true);
        obs.disconnect(); // trigger once
      }
    }, { root: null, rootMargin, threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref, rootMargin]);
  return isIntersecting;
}

function CountUp({ end, duration = 1400, suffix = '' }: { end: number; duration?: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const visible = useOnScreen(containerRef, '0px');
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!visible) return;
    let raf = 0;
    const reduce = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      requestAnimationFrame(() => setVal(end));
      return;
    }
    const start = performance.now();
    const animate = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - t, 3);
      const next = Math.floor(eased * end);
      setVal(next);
      if (t < 1) raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [visible, end, duration]);

  const formatted = useMemo(() => new Intl.NumberFormat('en-US').format(val), [val]);

  return (
    <div ref={containerRef}>
      <span ref={ref}>{formatted}{suffix || ''}</span>
    </div>
  );
}

export function Testimonials(){
  return (
    <section id="testimonials" className="section section-alt">
      <div className="container">
        <header className="section-header">
          <h2>Niech przemówią liczby</h2>
          <p className="muted">Konsekwentne efekty w liczbach – realny wpływ na wyniki i pewność uczniów.</p>
        </header>
        <ul className="stats-grid" aria-label="Kluczowe liczby">
          {stats.map((s) => (
            <li key={s.label} className="stat-box card">
              <div className="stat-value" aria-live="polite">
                <CountUp end={s.value} suffix={s.suffix} />
              </div>
              <div className="stat-underline" aria-hidden="true"></div>
              <div className="stat-label">{s.label}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
