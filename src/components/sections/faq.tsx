
const items = [
  {q:"Czy dojeżdżacie do ucznia?",a:"Tak, na terenie Słupska. Możliwe też zajęcia u nas – ustalamy indywidualnie."},
  {q:"Czy można umówić jednorazową lekcję?",a:"Oczywiście – pierwsza może być diagnostyczna."},
  {q:"Jak długo trwa lekcja?",a:"Standardowo 60 minut. Na życzenie możliwe dłuższe sesje."},
  {q:"Czy prowadzicie zajęcia online?",a:"Skupiamy się na zajęciach stacjonarnych, ale sporadyczne konsultacje online są możliwe."},
];

export function FAQ(){
  return (
    <section id="faq" className="section">
      <div className="faq-decorations" aria-hidden="true">
        <span className="paper-lines" />
        <span className="punchholes" />
        <span className="watermark">?</span>
      </div>
      <div className="container">
        <header className="section-header"><h2>FAQ</h2></header>
        <div className="grid gap-5">
          {items.map((it)=> (
            <details key={it.q} className="faq-item">
              <summary className="faq-btn">
                <span>{it.q}</span>
              </summary>
              <div className="faq-answer">
                <div className="faq-answer-inner"><p className="m-0">{it.a}</p></div>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
// No client script needed: CSS uses details[open] to style open items.
