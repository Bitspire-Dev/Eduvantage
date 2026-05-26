function Logo({ size = 40, className }: { size?: number; className?: string }) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src="/favicon.svg" alt="EduVantage" width={size} height={size} className={className} />;
}

export function Footer() {
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
          </ul>
        </div>
        <div className="flex flex-col gap-4 text-sm">
          <h3 className="text-sm font-semibold tracking-wide mb-2 uppercase opacity-80">
            Kontakt
          </h3>
          <p className="m-0">Telefon: <a href="tel:+48780926993" className="underline">780 926 993</a></p>
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
