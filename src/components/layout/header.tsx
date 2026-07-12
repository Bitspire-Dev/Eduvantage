"use client";

import Link from "next/link";
import Image from "next/image";
import { PhoneCall } from "../ui/icons";

function Logo({ size = 40, className }: { size?: number; className?: string }) {
  return (
    <Image
      src="/favicon.svg"
      alt="EduVantage"
      width={size}
      height={size}
      className={className}
    />
  );
}

const navItems: [string, string][] = [
  ["Dlaczego my", "#why"],
  ["O nas", "#about"],
  ["Zakres", "#subjects"],
  ["Jak pracujemy", "#work"],
  ["Cennik", "#pricing"],
  ["FAQ", "#faq"],
  ["Kontakt", "#contact"],
];

export function Header() {
  return (
    <header className="site-header">
      <div className="container flex items-center justify-between gap-4 header-inner">
        <div className="flex items-center gap-6">
          <Link href="/" className="brand flex items-center gap-3" aria-label="Strona główna">
            <Logo size={94} />
            <div className="flex flex-col leading-tight">
              <span className="brand-name font-semibold text-[1.25rem] tracking-tight -mb-0.5">EduVantage</span>
              <span className="brand-tagline text-[10px] uppercase tracking-[.18em] font-medium text-(--color-text-soft) site-tagline">Korepetycje</span>
            </div>
          </Link>
        </div>
        <nav aria-label="Główne" className="hidden md:block">
          <ul className="flex gap-1 m-0 p-0 list-none rounded-xl nav-cluster">
            {navItems.map(([label, href]) => {
              return (
                <li key={href}>
                  <a href={href} className="nav-link px-3 py-2 rounded-lg font-medium tracking-tight">
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="hidden md:flex">
          <a
            href="tel:+48780926993"
            className="btn btn-primary btn-call text-sm inline-flex items-center gap-2"
            aria-label="Zadzwoń do EduVantage"
          >
            <PhoneCall className="w-4 h-4" />
            <span className="phone-number">780 926 993</span>
          </a>
        </div>
        <button
          className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg border border-black/10 bg-white shadow-sm mobile-menu-btn"
          aria-label="Menu"
          aria-expanded="false"
          id="menuBtn"
        >
          <span className="sr-only">Menu</span>
          <svg width="26" height="26" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <div
          id="mobileNav"
          className="fixed inset-0 z-70 hidden bg-black/75 backdrop-blur-md md:hidden mobile-overlay"
        >
          <div className="absolute top-0 right-0 h-full w-72 bg-white shadow-xl p-6 flex flex-col gap-6 mobile-panel translate-x-full will-change-transform">
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold">Menu</span>
              <button
                className="w-9 h-9 inline-flex items-center justify-center rounded-md border border-black/10"
                aria-label="Zamknij menu"
                id="closeMenu"
              >
                ✕
              </button>
            </div>
            <nav>
              <ul className="m-0 p-0 list-none flex flex-col gap-3">
                {navItems.map(([label, href]) => {
                  return (
                    <li key={href}>
                      <a
                        href={href}
                        className="block py-2 font-medium text-(--color-primary) nav-link-mobile"
                        data-close-menu
                      >
                        {label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <a
              href="tel:+48780926993"
              className="btn btn-primary w-full mt-auto"
              data-close-menu
              style={{ transform: 'translateX(-28px)' }}
            >
              Zadzwoń: 780 926 993
            </a>
          </div>
        </div>
        <script
          dangerouslySetInnerHTML={{
            __html: `(()=>{
const btn = document.getElementById('menuBtn');
const nav = document.getElementById('mobileNav');
if(!btn || !nav) return;
const panel = nav.querySelector('.mobile-panel');
const closeBtn = nav.querySelector('#closeMenu');

const reallyHide = ()=>{
  nav.classList.add('hidden');
  document.body.style.overflow = '';
  document.body.classList.remove('mobile-menu-open');
  document.body.classList.remove('floating-hidden-after-menu');
};

const open = ()=>{
  nav.classList.remove('hidden');
  requestAnimationFrame(()=>{
    panel && panel.classList.remove('translate-x-full');
  });
  btn.setAttribute('aria-expanded','true');
  document.body.style.overflow = 'hidden';
  document.body.classList.add('mobile-menu-open');
  document.body.classList.remove('floating-hidden-after-menu');
};

const close = ()=>{
  if(panel){
    panel.classList.add('translate-x-full');
    const onEnd = ()=>{ panel.removeEventListener('transitionend', onEnd); reallyHide(); };
    panel.addEventListener('transitionend', onEnd);
  } else { reallyHide(); }
  btn.setAttribute('aria-expanded','false');
};

btn.addEventListener('click', ()=> nav.classList.contains('hidden') ? open() : close());
nav.addEventListener('click', e=>{ if(e.target === nav || e.target.closest('[data-close-menu]')) close(); });
if(closeBtn) closeBtn.addEventListener('click', close);
document.addEventListener('keydown', e=>{ if(e.key === 'Escape') close(); });
})();`,
          }}
        />
      </div>
    </header>
  );
}
