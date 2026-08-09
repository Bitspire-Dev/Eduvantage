"use client";

import { useState, useEffect, useCallback } from 'react';

export function MobileMenu({ navItems }: { navItems: [string, string][] }) {
  const [open, setOpen] = useState(false);

  const handleClose = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (open) {
      document.body.classList.add('mobile-menu-open');
      document.body.classList.remove('floating-hidden-after-menu');
    } else {
      document.body.classList.remove('mobile-menu-open');
    }

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };

    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, handleClose]);

  return (
    <>
      <button
        className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg border border-black/10 bg-white shadow-sm mobile-menu-btn"
        aria-label="Menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="sr-only">Menu</span>
        <svg width="26" height="26" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none">
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <div
        className={`fixed inset-0 z-70 bg-black/75 backdrop-blur-md md:hidden mobile-overlay ${open ? '' : 'hidden'}`}
        onClick={(e) => {
          if (e.target === e.currentTarget) handleClose();
        }}
      >
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-white shadow-xl p-6 flex flex-col gap-6 mobile-panel will-change-transform ${open ? '' : 'translate-x-full'}`}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="font-semibold">Menu</span>
            <button
              className="w-9 h-9 inline-flex items-center justify-center rounded-md border border-black/10"
              aria-label="Zamknij menu"
              onClick={handleClose}
            >
              ✕
            </button>
          </div>
          <nav>
            <ul className="m-0 p-0 list-none flex flex-col gap-3">
              {navItems.map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="block py-2 font-medium text-(--color-primary) nav-link-mobile"
                    onClick={handleClose}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <a
            href="tel:+48780926993"
            className="btn btn-primary w-full mt-auto"
            style={{ transform: 'translateX(-28px)' }}
          >
            Zadzwoń: 780 926 993
          </a>
        </div>
      </div>
    </>
  );
}
