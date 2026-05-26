export function Pricing(){
  // Ujednolicone karty: brak badge, jeden CTA "Zadzwoń".
  const tiers = [
    {title:"Szkoła podstawowa",price:"60 zł",features:["Matematyka / Angielski","Indywidualne wsparcie","Plan nadrabiania braków"]},
    {title:"Liceum – podstawa",price:"80 zł",features:["Matematyka / Angielski","Powtórki maturalne","Strategie egzaminacyjne"]},
    {title:"Liceum – rozszerzenie",price:"100 zł",features:["Zaawansowana matematyka","Analiza błędów","Intensywne przygotowania"]},
  ];
  return (
    <section id="pricing" className="section section-alt">
      <div className="pricing-decorations" aria-hidden="true">
        <span className="honeycomb" />
        <span className="sweep" />
        <span className="corner corner-tl" />
        <span className="corner corner-br" />
      </div>
      <div className="container">
        <header className="section-header">
          <h2>Cennik</h2>
          <p className="muted">Przejrzyste stawki. Płatność po zajęciach lub z góry za pakiet.</p>
        </header>
        <div className="grid gap-8 md:gap-10 md:grid-cols-3">
          {tiers.map(t=> (
            <div key={t.title} className="card relative flex flex-col">
              {/* Tytuł */}
              <h3 className="m-0 mb-3 text-lg font-semibold leading-snug">{t.title}</h3>
              {/* Cena */}
              <p className="pricing-value m-0 mb-5 flex items-end gap-1"><span>{t.price}</span><span className="text-base font-normal leading-none">/h</span></p>
              {/* Lista (rozciąga aby przycisk był zawsze na dole) */}
              <ul className="list-check text-sm flex-1 mb-6">
                {t.features.map(f=> <li key={f}>{f}</li>)}
              </ul>
              {/* CTA */}
              <a
                href="tel:+48780926993"
                className="btn btn-primary w-full"
                data-track={`call-${t.title}`}
              >
                Zadzwoń
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
