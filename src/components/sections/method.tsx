import WorkDecorations from "../ui/work-decorations";

export function Method() {
  const steps = [
    {
      title: 'Dobry plan nauki to podstawa 😁📝',
      body: `Pierwsze zajęcia poświęcamy na zapoznanie się z uczniem, określenie jego aktualnego poziomu wiedzy oraz poznanie mocnych i słabych stron. Dzięki temu możemy zaplanować współpracę tak, aby wspólnie cieszyć się efektami ciężkiej pracy 💦💪.`,
    },
    {
      title: 'Regularność to klucz do sukcesu 🔑📅',
      body: `Ustalamy stały harmonogram spotkań, dopasowany do rytmu życia ucznia. Dzięki temu nauka staje się nawykiem, a nie obowiązkiem. Regularne powtórki i kontakt z materiałem sprawiają, że wiedza zostaje z nami na dłużej 🧠📈.`,
    },
    {
      title: 'Uczymy się z głową, nie na pamięć 🧠💡',
      body: `Stawiamy na zrozumienie, nie tylko zapamiętywanie. Każdy temat rozkładamy na czynniki pierwsze, tłumaczymy „po chłopsku” i szukamy analogii, które ułatwiają zapamiętanie. Dzięki temu nawet najtrudniejsze zagadnienia stają się przystępne i logiczne 🔍🧩.`,
    },
    {
      title: 'Feedback to nasz kompas 🧭📣',
      body: `Po każdej lekcji omawiamy postępy, trudności i to, co działa najlepiej. Uczeń dostaje jasny sygnał, gdzie widać progres, a nad czym warto jeszcze popracować. To pozwala nam dynamicznie dostosowywać plan nauki i działać jeszcze skuteczniej 🚀📊.`,
    },
    {
      title: 'Celujemy w efekt WOW na egzaminie 🎯🏆',
      body: `Cała nasza praca zmierza do konkretnego celu — czy to egzamin, poprawa ocen, czy po prostu większa pewność siebie w danym przedmiocie. Pracujemy tak, aby dzień sprawdzianu był nie stresujący, lecz satysfakcjonujący. Bo nic nie cieszy bardziej niż wynik, na który samemu się zapracowało 💥📚.`,
    },
  ];

  return (
    <section id="work" className="section">
      <div className="container relative">
  {/* decorations (positioned behind content) */}
  <WorkDecorations />
        <header className="section-header">
          <h2 className="text-3xl">Jak pracujemy</h2>
          <p className="muted">Krótkie, przejrzyste kroki — od diagnozy do pewności przed egzaminem.</p>
        </header>

        <div className="mt-8 relative">
          <ol className="steps">
            {steps.map((step, idx) => (
              <li key={idx}>
                {/* left muted step number column (small, barely visible) */}
                {/* main card */}
                <div className="step-body">
                  <div className="card p-6 shadow-md bg-white/80 backdrop-blur-sm">
                    <h3 className="m-0 mb-2 text-lg font-semibold">{step.title}</h3>
                    <div className="m-0 text-sm muted">
                      {step.body.split('\n\n').map((para, i) => (
                        <p key={i} className={i === 0 ? 'mb-2' : 'mt-2'}>{para}</p>
                      ))}
                    </div>
                  </div>

                  {/* centered arrow connector */}
                  {idx < steps.length - 1 && (
                    <div className="flex justify-center" aria-hidden>
                      <svg className="mt-4" width="36" height="44" viewBox="0 0 36 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient id={`g-${idx}`} x1="0" x2="1" y1="0" y2="1">
                            <stop offset="0%" stopColor="#7B4DFF" />
                            <stop offset="100%" stopColor="#2ED1C0" />
                          </linearGradient>
                        </defs>
                        <path d="M18 2v30" stroke={`url(#g-${idx})`} strokeWidth="3" strokeLinecap="round" />
                        <path d="M11 30l7 8 7-8" fill="none" stroke={`url(#g-${idx})`} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
