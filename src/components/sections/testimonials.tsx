import { CountUpClient } from '../ui/count-up-client';

type Stat = { value: number; suffix?: string; label: string };

const stats: Stat[] = [
  { value: 100, suffix: '+', label: 'Zadowolonych uczniów' },
  { value: 4, label: 'Lata doświadczenia' },
  { value: 1200, suffix: '+', label: 'Zdanych egzaminów' },
  { value: 70, suffix: '%', label: 'Średni wynik maturalny' },
];

export function Testimonials(){
  return (
    <section id="testimonials" className="section section-alt">
      <div className="container">
        <header className="section-header">
          <h2>Niech przemówią liczby</h2>
          <p className="muted">Konsekwentne efekty w liczbach – realny wpływ na wyniki i pewność uczniów.</p>
        </header>
        <ul className="stats-grid" aria-label="Kluczowe liczby">
          {stats.map((s) => (
            <li key={s.label} className="stat-box card">
              <div className="stat-value" aria-live="polite">
                <CountUpClient end={s.value} suffix={s.suffix} />
              </div>
              <div className="stat-underline" aria-hidden="true"></div>
              <div className="stat-label">{s.label}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
