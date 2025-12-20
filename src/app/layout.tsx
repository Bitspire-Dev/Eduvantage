import type { Metadata } from "next";
// React import intentionally moved down near FloatingElements to include hooks
import { Inter } from "next/font/google";
// We keep global styles but load them non-blocking; critical subset inlined below
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { PhoneCall } from "../components/icons";
import AnalyticsLoader from '../components/analytics-loader';

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    template: "%s | EduVantage Słupsk",
    default: "EduVantage – Korepetycje Matematyka i Angielski Słupsk",
  },
  description:
    "Skuteczne korepetycje z matematyki i angielskiego w Słupsku. Przygotowanie do egzaminu ósmoklasisty i matury. Dojazd do ucznia lub zajęcia u nas.",
  keywords: [
    "korepetycje Słupsk",
    "korepetycje matematyka",
    "korepetycje angielski",
    "egzamin ósmoklasisty matematyka",
    "matura matematyka",
  ],
  openGraph: {
    title: "EduVantage – Korepetycje Słupsk",
    description:
      "Matematyka i angielski – przygotowanie do egzaminów. 4 lata doświadczenia. Sprawdzona skuteczność.",
    type: "website",
    locale: "pl_PL",
    url: "https://example.com", // TODO: prod domain
  },
  metadataBase: new URL("https://example.com"), // TODO: change to production
};

import FloatingElements from '../components/floating-elements';
import CookieConsent from '../components/cookie-consent';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body className={inter.variable + ' has-cookie-consent'}>
  {/* Google Tag Manager will be injected lazily by AnalyticsLoader after consent */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        {/* Preload hero LCP image (already priority via next/image for safety in no-JS) */}
        <link
          rel="preload"
          as="image"
          href="/grupa-dzieci-uczacych-sie-w-szkole.webp"
          // fetchpriority is not yet a standard attribute for link rel=preload widely, handled by priority Image
        />
        {/* Critical CSS inline (very small subset) */}
        <style
          dangerouslySetInnerHTML={{
            __html: `/* critical */body{margin:0}header.site-header{position:sticky;top:0;display:flex;align-items:center;height:72px}#hero{position:relative;overflow:hidden}#hero .hero-bg-img{object-fit:cover}#hero .hero-title{font-weight:800;line-height:1.05;margin:0}#hero .hero-desc{margin-top:.65rem}a.btn{display:inline-flex;align-items:center;justify-content:center;text-decoration:none;font-weight:600}`,
          }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 bg-white text-[var(--color-primary)] font-medium px-4 py-2 rounded-md shadow"
        >
          Przejdź do treści
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <FloatingElements />
        <CookieConsent />
  {/* Analytics (GTM/GA) lazy loader */}
  <AnalyticsLoader />
      </body>
    </html>
  );
}

function Header() {
  const items: [string, string][] = [
    ["Dlaczego my", "#why"],
    ["O nas", "#about"],
    ["Zakres", "#subjects"],
    ["Jak pracujemy", "#work"],
    ["Cennik", "#pricing"],
    ["FAQ", "#faq"],
    ["Kontakt", "#contact"],
  ];
  return (
    <header className="site-header">
  <div className="container flex items-center justify-between gap-4 header-inner">
        <div className="flex items-center gap-6">
          <Link href="/" className="brand flex items-center gap-3" aria-label="Strona główna">
            <Logo size={94} />
            <div className="flex flex-col leading-tight">
              <span className="brand-name font-semibold text-[1.25rem] tracking-tight -mb-0.5">EduVantage</span>
              <span className="brand-tagline text-[10px] uppercase tracking-[.18em] font-medium text-[var(--color-text-soft)] site-tagline">Korepetycje</span>
            </div>
          </Link>
        </div>
        <nav aria-label="Główne" className="hidden md:block">
          <ul className="flex gap-1 m-0 p-0 list-none rounded-xl nav-cluster">
            {items.map(([label, href]) => {
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
            href="tel:+48884938490"
            className="btn btn-primary btn-call text-sm inline-flex items-center gap-2"
            aria-label="Zadzwoń do EduVantage"
          >
            <PhoneCall className="w-4 h-4" />
            <span className="phone-number">884 938 490</span>
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
          className="fixed inset-0 z-[70] hidden bg-black/40 backdrop-blur-sm md:hidden mobile-overlay"
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
                {items.map(([label, href]) => {
                  return (
                    <li key={href}>
                      <a
                        href={href}
                        className="block py-2 font-medium text-[var(--color-primary)] nav-link-mobile"
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
              href="tel:+48884938490"
              className="btn btn-primary w-full mt-auto"
              data-close-menu
              // nudge slightly left so the CTA sits a bit off-center (not up/down)
              style={{ transform: 'translateX(-28px)' }}
            >
              Zadzwoń: 884 938 490
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
    // ensure floating call is not permanently hidden after closing — remove the temporary hide class so it can return
    document.body.classList.remove('floating-hidden-after-menu');
  };

  const open = ()=>{
    nav.classList.remove('hidden');
    // small delay to allow browser to register removal of hidden
    requestAnimationFrame(()=>{
      panel && panel.classList.remove('translate-x-full');
    });
    btn.setAttribute('aria-expanded','true');
    document.body.style.overflow = 'hidden';
    document.body.classList.add('mobile-menu-open');
    // ensure floating call is visible while opening
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

function Footer() {
  return (
    <footer className="footer">
        <div className="container grid gap-10 md:grid-cols-3">
        <div className="space-y-4">
          <div className="footer-logo-wrap" aria-hidden="false">
            <span className="footer-tile footer-tile--strong" aria-hidden="true" />
            <Logo size={160} className="logo-contrast" />
          </div>
          <p className="text-sm leading-relaxed opacity-90 max-w-xs">
            Skuteczne korepetycje – matematyka i angielski w Słupsku. 4 lata
            doświadczenia, indywidualne podejście i wyniki poparte praktyką.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold tracking-wide mb-4 uppercase opacity-80">
            Nawigacja
          </h3>
          <ul className="grid gap-2 text-sm opacity-90">
            <li>
              <a className="hover:underline" href="#why">
                Dlaczego my
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#about">
                O nas
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#subjects">
                Zakres
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#work">
                Jak pracujemy
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#pricing">
                Cennik
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#faq">
                FAQ
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#contact">
                Kontakt
              </a>
            </li>
            {/* legal links are kept in the bottom area; removed from this navigation list */}
          </ul>
        </div>
        <div className="flex flex-col gap-4 text-sm">
          <h3 className="text-sm font-semibold tracking-wide mb-2 uppercase opacity-80">
            Kontakt
          </h3>
          <p className="m-0">Telefon: <a href="tel:+48884938490" className="underline">884 938 490</a></p>
          <p className="m-0">Miasto: Słupsk</p>
          <p className="m-0">Dojazd do ucznia / zajęcia u nas</p>
        </div>
      </div>
      <div className="mt-10 border-t border-white/10 py-4 text-xs opacity-70">
      <div className="container flex flex-wrap items-center justify-between gap-4">
              <span>© {new Date().getFullYear()} EduVantage</span>
              <span>Wszystkie prawa zastrzeżone.</span>
              <a href="/regulamin" className="made-by" aria-label="Regulamin serwisu">Regulamin</a>
              <a href="/polityka-prywatnosci" className="made-by" aria-label="Polityka prywatności">Polityka prywatności</a>
              <a href="/cookies" className="made-by" aria-label="Polityka cookies">Polityka cookies</a>
              <a href="https://bitspire.pl" target="_blank" rel="noopener noreferrer" className="made-by">made by bitspire</a>
            </div>
          </div>
    </footer>
  );
}

// FloatingElements is a client component imported above

function Logo({ size = 40, className }: { size?: number; className?: string }) {
  // Use Next.js Image for automatic optimization and to satisfy lint rules.
  return (
  <Image src="/eduvantage.svg" alt="EduVantage" width={size} height={size} className={className} />
  );
}
