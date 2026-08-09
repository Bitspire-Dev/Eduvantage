import { WhyDropletsClient } from '../ui/why-droplets-client';

export function Why(){
  const features = [
    {t:"Indywidualny plan",d:"Diagnoza, cele i dopasowany harmonogram nauki."},
    {t:"Przejrzyste postępy",d:"Krótkie podsumowania i stała informacja zwrotna."},
    {t:"Skuteczna motywacja",d:"Budujemy pewność siebie i redukujemy stres egzaminacyjny."},
    {t:"Dojazd do ucznia",d:"Oszczędzasz czas – możliwe też zajęcia u nas."},
  ];

  return (
    <section id="why" className="section">
      {/* Decorative background layers */}
      <div className="why-bg" aria-hidden="true" />
      <WhyDropletsClient />
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
