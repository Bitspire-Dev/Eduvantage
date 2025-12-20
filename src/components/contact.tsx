"use client";

export function Contact() {
  return (
    <section id="contact" className="section contact-section hero-style">
      <div className="hero-overlay" aria-hidden="true" />
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* LEFT: content (jak w hero) */}
        <div>
          <h2 className="hero-title text-4xl md:text-5xl">
            <span className="accent-text">Skontaktuj</span> się z nami
          </h2>
          <p className="hero-desc mt-4 text-base md:text-lg">
            Zadzwoń lub napisz — ustalimy poziom, cel i pierwszą lekcję. Szybka rozmowa = jasny plan działania.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-3">
            <a href="tel:+48884938490" className="btn btn-primary" aria-label="Zadzwoń do nas">
              Zadzwoń: 884 938 490
            </a>
            <a href="sms:+48884938490" className="btn btn-outline">
              Wyślij SMS
            </a>
          </div>

          <p className="hero-desc mt-4 text-sm opacity-90">
            Preferujesz wiadomość? Odpowiadamy szybko — zwykle tego samego dnia roboczego.
          </p>

          <div className="hero-chips mt-5">
            <span className="hero-chip">Dojazd do ucznia</span>
            <span className="hero-chip">Indywidualny plan</span>
            <span className="hero-chip">Przygotowanie do egzaminu</span>
            <span className="hero-chip">Zajęcia stacjonarne</span>
          </div>
        </div>

        {/* RIGHT: stats (jak karty w hero) */}
        <aside>
          <div className="hero-stats">
            <div className="stat-card">
              <h3 className="stat-number">884 938 490</h3>
              <p className="stat-label">Telefon kontaktowy</p>
            </div>
            
            <div className="stat-card">
              <h3 className="stat-number">Słupsk</h3>
              <p className="stat-label">Siedziba • 8:00–20:00</p>
            </div>
            
            <div className="stat-card">
              <h3 className="stat-number">2 przedmioty</h3>
              <p className="stat-label">Matematyka • Angielski</p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
