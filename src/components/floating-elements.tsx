"use client";
import { useEffect, useState, useRef } from 'react';

export default function FloatingElements() {
  const [showToTop, setShowToTop] = useState(false);
  const lastY = useRef(typeof window !== 'undefined' ? window.scrollY : 0);
  const ticking = useRef(false);

  useEffect(() => {
    function onScroll() {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        const height = document.documentElement.scrollHeight - window.innerHeight;
        const atBottom = height - y <= 120; // within 120px of bottom

        // Show to-top after some scroll threshold
        setShowToTop(y > 500);

        const phone = document.querySelector('.floating-call');
        if (phone) {
          // hide when at page bottom, otherwise show when user scrolls up
          if (atBottom) {
            phone.classList.add('hidden-call');
          } else {
            // if user scrolls up, reveal; if scrolling down keep hidden until not at bottom
            if (y < lastY.current) {
              phone.classList.remove('hidden-call');
            }
          }
        }

        lastY.current = y;
        ticking.current = false;
      });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    // run once on mount
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <a href="tel:+48884938490" className="floating-call" aria-label="Zadzwoń do EduVantage">📞</a>
      <button
        id="toTop"
        aria-label="Wróć na górę"
        className={"to-top" + (showToTop ? ' show' : '')}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >▲</button>
    </>
  );
}
