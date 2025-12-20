export function About(){
  return (
    <section id="about" className="section section-alt">
      <div className="about-decorations" aria-hidden="true">
        <span className="shape shape-a" />
        <span className="shape shape-b" />
        <span className="pattern" />
      </div>
      <div className="container">
        <header className="section-header">
          <h2>O nas</h2>
          <p className="muted">Małe, niezależne korepetycje – 100% skupienia na matematyce i angielskim. 4 lata doświadczenia pracy z uczniami szkoły podstawowej i liceum. Stawiamy na jasne tłumaczenie, praktykę, powtarzalny schemat i spokojne budowanie pewności przed egzaminem.</p>
        </header>
        <div className="grid-auto-fit">
          {[{
            t:"Podejście",
            d:"Najpierw zrozumienie punktu wyjścia – krótka diagnoza zamiast zgadywania."},
            {t:"Indywidualizacja",d:"Dopasowujemy tempo, styl i zakres. Nie przepalamy czasu zbędną teorią."},
            {t:"Przejrzystość",d:"Uczeń wie nad czym pracujemy i dlaczego akurat teraz."},
            {t:"Spokój",d:"Stały rytm = mniej stresu. Stawiamy na mikro postępy i regularne powtórki."}].map(item => (
              <div key={item.t} className="card"><h3 className="m-0 mb-3 text-lg font-semibold">{item.t}</h3><p className="m-0 text-sm leading-relaxed muted">{item.d}</p></div>
            ))}
        </div>
      </div>
    </section>
  );
}
