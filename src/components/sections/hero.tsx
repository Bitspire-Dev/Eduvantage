import Image from 'next/image';

// Hero section with next/image for automatic AVIF/WebP optimization and responsive srcSet.
export function Hero() {
  return (
    <section id="hero" className="hero py-20">
      <div className="hero-bg-wrapper">
        <Image
          src="/layout/grupa-dzieci-uczacych-sie-w-szkole.png"
          alt="" // decorative
          fill
          priority
          sizes="100vw"
          quality={80}
          className="hero-bg-img"
        />
      </div>
      <div className="hero-overlay" />
      <div className="container hero-grid grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* LEFT: content */}
        <div>
          <h1 className="hero-title text-4xl md:text-6xl">
            Korepetycje <span className="accent-text">Matematyka</span> i{' '}
            <span className="accent-text-alt">Angielski</span> –{' '}
            <span style={{ color: '#fff' }}>Słupsk</span>
          </h1>
          <p className="hero-desc mt-4 text-base md:text-lg">
            Indywidualne lekcje z dojazdem do ucznia lub u nas. Przygotowujemy do
            egzaminów ósmoklasisty i matury — jasne tłumaczenie, stały postęp.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-3">
            <a
              href="tel:+48780926993"
              className="btn btn-primary"
              aria-label="Zadzwoń teraz"
            >
              Zadzwoń teraz
            </a>
            <a href="#pricing" className="btn btn-outline">
              Dowiedz się więcej
            </a>
          </div>

          <div className="hero-chips mt-5">
            <span className="hero-chip">Indywidualny plan</span>
            <span className="hero-chip">Dojazd do ucznia</span>
            <span className="hero-chip">Konkretny progres</span>
          </div>
        </div>

        {/* RIGHT: stats (static list – no JS for desktop/mobile) */}
        <aside>
          <div className="hero-stats" aria-label="Statystyki">
            <div className="stat-card"><span className="stat-number">+4</span><span className="stat-label">lata doświadczenia</span></div>
            <div className="stat-card"><span className="stat-number">100%</span><span className="stat-label">zaangażowania</span></div>
            <div className="stat-card"><span className="stat-number">60–100 zł</span><span className="stat-label">Elastyczna stawka</span></div>
          </div>
        </aside>
      </div>
    </section>
  );
}
// (Carousel code removed – big JS savings)
