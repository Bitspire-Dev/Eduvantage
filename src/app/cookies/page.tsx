import type { Metadata } from 'next';
import Script from 'next/script';
import OpenCookieSettingsButton from '../../components/open-cookie-settings';

export const metadata: Metadata = {
  title: 'Polityka cookies – EduVantage korepetycje matematyka i angielski Słupsk',
  description: 'Polityka plików cookies EduVantage: rodzaje ciasteczek, cele, podstawy prawne, czas przechowywania, zarządzanie, bezpieczeństwo. Korepetycje matematyka i angielski Słupsk.',
  alternates: { canonical: '/cookies' },
  openGraph: {
    title: 'Polityka cookies – EduVantage',
    description: 'Jak wykorzystujemy pliki cookies podczas świadczenia korepetycji (matematyka, angielski) – Słupsk i okolice. Kategorie, cele, prawa użytkownika.' ,
    type: 'article'
  }
};

const sections = [
  'Cel dokumentu','Czym są pliki cookies','Podstawa prawna stosowania','Zakres stosowanych cookies','Cele wykorzystania','Okres przechowywania','Lista głównych ciasteczek','Mechanizmy analityczne','Bezpieczeństwo i ryzyka','Zarządzanie i blokowanie','Wpływ wyłączenia cookies','Prawa użytkownika','Logi serwera a cookies','Zmiany polityki','Słownik pojęć','FAQ'
];

export default function CookiesPage(){
  const today = new Date();
  return (
    <main id="cookies" className="section container py-16">
      <Script id="ld-cookies" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context':'https://schema.org',
        '@type':'WebPage',
        name:'Polityka cookies EduVantage',
        dateModified: today.toISOString(),
        inLanguage:'pl-PL',
        description:'Szczegółowa polityka plików cookies serwisu EduVantage – korepetycje matematyka, angielski Słupsk',
        breadcrumb:{'@type':'BreadcrumbList', itemListElement:[{ '@type':'ListItem', position:1, name:'Strona główna', item:'https://example.com' },{ '@type':'ListItem', position:2, name:'Polityka cookies', item:'https://example.com/cookies'}]},
        mainEntity:{'@type':'ItemList', itemListElement: sections.map((t,i)=>({ '@type':'ListItem', position:i+1, name:t }))},
        potentialAction:[{ '@type':'SearchAction', target:'https://example.com/?q={search_term_string}', 'query-input':'required name=search_term_string' }]
      }) }} />
      <article className="prose prose-invert max-w-none">
        <h1>Polityka plików cookies EduVantage</h1>
  <p><strong>Data aktualizacji: {today.toLocaleDateString('pl-PL')}</strong></p>
  <p className="text-sm -mt-3 mb-6">Chcesz zmienić swoje zgody? <span className="underline font-medium"><OpenCookieSettingsButton /></span></p>
        <p>Dokument opisuje zasady stosowania plików cookies i technologii pokrewnych w serwisie EduVantage – korepetycje z matematyki i języka angielskiego (Słupsk i okolice). Ma charakter informacyjny i uzupełnia Politykę Prywatności.</p>

        <nav aria-label="Spis treści" className="mt-8 mb-10 border rounded-lg p-5 bg-[rgba(255,255,255,0.03)]">
          <h2 className="m-0 text-base font-semibold tracking-tight">Spis treści</h2>
          <ol className="mt-3 grid gap-1 text-sm sm:columns-2">
            {sections.map((label,i)=> <li key={i}><a href={`#ck-${i+1}`} className="hover:underline">{i+1}. {label}</a></li> )}
          </ol>
        </nav>

        <section id="ck-1"><h2>1. Cel dokumentu</h2><p>Celem Polityki jest jasne wyjaśnienie czym są pliki cookies, jakie typy wykorzystujemy, w jakich celach oraz jak użytkownik może nimi zarządzać. Nie stosujemy agresywnych technik śledzących ani sprzedaży danych.</p></section>
  <section id="ck-2"><h2>2. Czym są pliki cookies</h2><p>Pliki cookies (&quot;ciasteczka&quot;) to niewielkie informacje tekstowe wysyłane przez serwer i zapisywane w przeglądarce użytkownika. Pozwalają utrzymać sesję, zapamiętać wybrane preferencje interfejsu oraz poprawnie wyświetlać treści. Cookies nie służą do identyfikacji konkretnej osoby bez dodatkowych danych.</p></section>
        <section id="ck-3"><h2>3. Podstawa prawna stosowania</h2><p>Podstawą jest: (a) uzasadniony interes administratora (art. 6 ust.1 lit. f RODO – zapewnienie funkcjonalności i bezpieczeństwa serwisu), (b) w ograniczonym zakresie dobrowolna zgoda – gdyby w przyszłości dodano dodatkowe opcjonalne cookies (np. analityczne/marketingowe). Aktualnie stosujemy wyłącznie cookies niezbędne i funkcjonalne.</p></section>
        <section id="ck-4"><h2>4. Zakres stosowanych cookies</h2><ul><li><strong>Niezbędne</strong> – wymagane do działania serwisu (utrzymanie sesji, routing).</li><li><strong>Funkcjonalne</strong> – poprawa komfortu (zapamiętanie preferencji).</li><li><strong>Techniczne logów</strong> – zapisywane w logach serwera (po stronie serwera, nie w przeglądarce) – opis w Polityce Prywatności.</li></ul></section>
        <section id="ck-5"><h2>5. Cele wykorzystania</h2><ol><li>Utrzymanie spójnej sesji nawigacyjnej.</li><li>Optymalizacja wydajności i ładowania zasobów.</li><li>Zapamiętanie prostych preferencji interfejsu (np. układ / ostatnio odwiedzony segment).</li><li>Podstawowe statystyki zagregowane (bez identyfikacji użytkownika).</li></ol></section>
        <section id="ck-6"><h2>6. Okres przechowywania</h2><p>Ciasteczka sesyjne usuwane są po zamknięciu przeglądarki. Cookies funkcjonalne mogą być przechowywane do 6 miesięcy (krótki, rozsądny horyzont zapewniający świeżość preferencji). Po upływie okresu mogą być automatycznie odnowione przy ponownej wizycie.</p></section>
        <section id="ck-7"><h2>7. Lista głównych ciasteczek</h2><table><thead><tr><th>Nazwa</th><th>Typ</th><th>Cel</th><th>Maks. czas</th></tr></thead><tbody><tr><td>session_id</td><td>Niezbędne</td><td>Utrzymanie sesji nawigacyjnej</td><td>Sesja</td></tr><tr><td>layout_pref</td><td>Funkcjonalne</td><td>Zapamiętanie preferencji układu</td><td>6 mies.</td></tr></tbody></table><p>Lista może ulec zmianie wraz z rozwojem serwisu – aktualna wersja jest publikowana w niniejszej sekcji.</p></section>
        <section id="ck-8"><h2>8. Mechanizmy analityczne</h2><p>Obecnie nie korzystamy z zewnętrznych narzędzi analitycznych (np. Google Analytics). W przypadku wdrożenia – zaktualizujemy niniejszą politykę oraz (jeśli wymagane) wyświetlimy baner zgody.</p></section>
        <section id="ck-9"><h2>9. Bezpieczeństwo i ryzyka</h2><p>Cookies naszych serwerów nie zawierają złośliwego kodu. Ryzyko może wynikać z przechwycenia sesji na skompromitowanym urządzeniu użytkownika – zalecamy: aktualne oprogramowanie, silne hasła, brak udostępniania urządzeń osobom trzecim.</p></section>
        <section id="ck-10"><h2>10. Zarządzanie i blokowanie</h2><p>Użytkownik może samodzielnie usuwać oraz blokować cookies w ustawieniach przeglądarki (Chrome, Firefox, Edge, Safari). Instrukcje dostępne są zwykle w sekcji Pomoc danej przeglądarki. Zablokowanie cookies niezbędnych może ograniczyć działanie wybranych funkcji.</p></section>
        <section id="ck-11"><h2>11. Wpływ wyłączenia cookies</h2><p>Wyłączenie ciasteczek funkcjonalnych nie zatrzyma działania serwisu, może natomiast:</p><ul><li>Resetować preferencje układu.</li><li>Wymuszać ponowne przeładowania niektórych zasobów.</li><li>Ograniczać personalizację doświadczenia.</li></ul></section>
        <section id="ck-12"><h2>12. Prawa użytkownika</h2><p>Prawa obejmują: dostęp do danych, usunięcie, ograniczenie, sprzeciw wobec przetwarzania opartego na uzasadnionym interesie, skargę do Prezesa UODO. Zakres proceduralny opisany szerzej w Polityce Prywatności.</p></section>
        <section id="ck-13"><h2>13. Logi serwera a cookies</h2><p>Logi serwera (adres IP, nagłówki, znaczniki czasu) to odrębna kategoria danych technicznych – mogą być korelowane z cookies sesyjnymi dla diagnozy błędów, lecz nie są używane do stałego profilowania.</p></section>
        <section id="ck-14"><h2>14. Zmiany polityki</h2><p>Rozszerzenie zakresu cookies (np. wdrożenie analityki) skutkować będzie aktualizacją dokumentu i – jeżeli wymagane – implementacją mechanizmu zgód. Zmiany publikujemy z datą wejścia w życie.</p></section>
        <section id="ck-15"><h2>15. Słownik pojęć</h2><ul><li><strong>Cookies sesyjne</strong> – usuwane po zamknięciu przeglądarki.</li><li><strong>Cookies trwałe</strong> – przechowywane do upływu okresu życia.</li><li><strong>RODO</strong> – Rozporządzenie 2016/679.</li><li><strong>Identyfikator sesji</strong> – losowy token przypisany bieżącej interakcji.</li></ul></section>
        <section id="ck-16"><h2>16. FAQ (najczęstsze pytania)</h2><dl><dt>Czy mogę całkowicie zablokować cookies?</dt><dd>Tak, jednak funkcje zależne od sesji mogą działać gorzej lub wcale.</dd><dt>Czy wykorzystujecie marketingowe ciasteczka osób trzecich?</dt><dd>Nie – brak marketingowych / reklamowych cookies w obecnej wersji serwisu.</dd><dt>Czy pliki cookies przechowują dane wrażliwe?</dt><dd>Nie, przechowują wyłącznie techniczne identyfikatory i proste preferencje.</dd><dt>Czy identyfikator sesji mogę powiązać z moimi danymi osobowymi?</dt><dd>Bez dodatkowych informacji – nie. Służy wyłącznie utrzymaniu spójnej nawigacji.</dd></dl></section>
        <p className="mt-14 text-xs opacity-70">Ostatnia aktualizacja: {today.toLocaleDateString('pl-PL')} • Wersja: 1.0</p>
      </article>
    </main>
  );
}
