import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Polityka prywatności – EduVantage Słupsk korepetycje matematyka i angielski',
  description: 'Polityka prywatności EduVantage: administrator danych, zakres i cele przetwarzania, podstawa prawna RODO, cookies, logi serwera, zabezpieczenia, prawa użytkownika, kontakt. Korepetycje Słupsk – matematyka i angielski.',
  alternates: { canonical: '/polityka-prywatnosci' },
  openGraph: {
    title: 'Polityka prywatności – EduVantage',
    description: 'Jak chronimy Twoje dane podczas korepetycji z matematyki i angielskiego w Słupsku. Zakres, cele, prawa RODO, cookies, bezpieczeństwo.',
    type: 'article'
  }
};

const buildTOC = () => [
  'Postanowienia ogólne', 'Administrator danych', 'Zakres gromadzonych danych', 'Cele i podstawy prawne przetwarzania',
  'Obowiązek i dobrowolność podania danych', 'Okres przechowywania danych', 'Prawa osób, których dane dotyczą', 'Odbiorcy danych',
  'Przekazywanie danych poza EOG', 'Profilowanie i zautomatyzowane decyzje', 'Bezpieczeństwo i środki techniczne', 'Pliki cookies',
  'Rodzaje stosowanych cookies', 'Logi serwera i dane eksploatacyjne', 'Narzędzia analityczne i marketingowe', 'Linki zewnętrzne',
  'Podstawy reklamacji i skarg', 'Zmiany Polityki Prywatności', 'Słownik pojęć', 'Kontakt'
];

export default function PrivacyPolicyPage() {
  const toc = buildTOC();
  const today = new Date();
  return (
    <main id="privacy" className="section container py-16">
      <Script id="ld-privacy" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Polityka prywatności EduVantage',
        description: 'Polityka prywatności i informacja o przetwarzaniu danych osobowych – korepetycje matematyka i angielski Słupsk.',
        inLanguage: 'pl-PL',
        dateModified: today.toISOString(),
        publisher: { '@type': 'Organization', name: 'EduVantage', url: 'https://example.com' },
        about: [{ '@type': 'EducationalOrganization', name: 'Korepetycje matematyka i angielski Słupsk' }],
  mainEntity: toc.map((t) => ({ '@type': 'Question', name: t, acceptedAnswer: { '@type': 'Answer', text: t }}))
      }) }} />
      <article className="prose prose-invert max-w-none">
        <h1>Polityka prywatności EduVantage</h1>
        <p><strong>Data aktualizacji: {today.toLocaleDateString('pl-PL')}</strong></p>
        <p>Niniejsza Polityka Prywatności opisuje zasady przetwarzania danych osobowych oraz stosowania plików cookies w serwisie EduVantage (korepetycje z matematyki i języka angielskiego – Słupsk i okolice). Dokument opracowano zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 (&quot;RODO&quot;), ustawą o ochronie danych osobowych oraz innymi właściwymi przepisami prawa.</p>

        <nav aria-label="Spis treści" className="mt-8 mb-10 border rounded-lg p-5 bg-[rgba(255,255,255,0.03)]">
          <h2 className="m-0 text-base font-semibold tracking-tight">Spis treści</h2>
          <ol className="mt-3 grid gap-1 text-sm sm:columns-2">
            {toc.map((label,i)=>(<li key={i}><a href={`#pp-${i+1}`} className="hover:underline">{i+1}. {label}</a></li>))}
          </ol>
        </nav>

        <section id="pp-1">
          <h2>1. Postanowienia ogólne</h2>
          <p>Polityka ma charakter informacyjny i nie ogranicza praw użytkownika. Służy przejrzystemu przedstawieniu: jakie dane zbieramy, w jakich celach, na jakiej podstawie prawnej, przez jaki czas, komu je udostępniamy oraz jakie prawa przysługują osobom, których dane dotyczą.</p>
        </section>
        <section id="pp-2">
          <h2>2. Administrator danych</h2>
          <p>Administratorem danych jest podmiot działający pod nazwą <strong>EduVantage</strong> (Słupsk). Kontakt w sprawach ochrony danych: telefon: 884&nbsp;938&nbsp;490 lub poprzez sekcję &quot;Kontakt&quot; w serwisie. W sprawach RODO można kierować zapytania tymi samymi kanałami.</p>
        </section>
        <section id="pp-3">
          <h2>3. Zakres gromadzonych danych</h2>
          <ul>
            <li>Dane identyfikacyjne: imię (opcjonalnie nazwisko ucznia / opiekuna).</li>
            <li>Dane kontaktowe: numer telefonu, e‑mail (jeśli podany), ewentualnie adres dla dojazdu.</li>
            <li>Dane edukacyjne: klasa / poziom, zakres materiału, wyniki próbnych testów.</li>
            <li>Dane techniczne: adres IP, identyfikatory urządzenia (logi serwera – patrz niżej).</li>
            <li>Pliki cookies: anonimowe identyfikatory sesyjne i funkcjonalne.</li>
          </ul>
        </section>
        <section id="pp-4">
          <h2>4. Cele i podstawy prawne przetwarzania</h2>
          <ol>
            <li>Realizacja usług korepetycji – art. 6 ust. 1 lit. b RODO (umowa lub działania przed zawarciem).</li>
            <li>Kontakt telefoniczny / e‑mailowy – art. 6 ust. 1 lit. b RODO.</li>
            <li>Rozliczenia finansowe / dokumentacyjne – art. 6 ust. 1 lit. c RODO (obowiązek prawny) oraz lit. f (dochodzenie roszczeń).</li>
            <li>Doskonalenie jakości i optymalizacja organizacji zajęć – art. 6 ust. 1 lit. f RODO (uzasadniony interes).</li>
            <li>Statystyka ruchu i bezpieczeństwo serwisu – art. 6 ust. 1 lit. f RODO (zapewnienie ciągłości i bezpieczeństwa).</li>
            <li>Archiwizacja ustaleń (np. SMS) – art. 6 ust. 1 lit. f RODO.</li>
          </ol>
        </section>
        <section id="pp-5">
          <h2>5. Obowiązek i dobrowolność podania danych</h2>
          <p>Podanie danych kontaktowych i podstawowych informacji o poziomie nauczania jest dobrowolne, ale niezbędne do przygotowania i prowadzenia lekcji. Brak podania danych może uniemożliwić zawarcie lub realizację umowy.</p>
        </section>
        <section id="pp-6">
          <h2>6. Okres przechowywania danych</h2>
          <ul>
            <li>Dane bieżącej współpracy – przez czas świadczenia usług oraz do 6 miesięcy po jej zakończeniu (organizacja ewentualnych odrobionych lekcji / zapytań).</li>
            <li>Dane rozliczeniowe – zgodnie z przepisami podatkowymi / rachunkowymi (z reguły 5 lat).</li>
            <li>Materiały robocze (notatki postępów) – do 12 miesięcy od zakończenia współpracy lub krócej na żądanie.</li>
            <li>Logi serwera – do 90 dni, chyba że przepisy lub potrzeba dowodowa wydłużą okres.</li>
          </ul>
        </section>
        <section id="pp-7">
          <h2>7. Prawa osób, których dane dotyczą</h2>
          <p>Masz prawo do: dostępu, sprostowania, usunięcia (&quot;prawo do bycia zapomnianym&quot;), ograniczenia przetwarzania, przenoszenia danych, sprzeciwu wobec przetwarzania (gdy podstawą jest uzasadniony interes), cofnięcia zgody (jeśli była podstawą) oraz wniesienia skargi do Prezesa UODO.</p>
        </section>
        <section id="pp-8">
          <h2>8. Odbiorcy danych</h2>
          <p>Dane mogą być powierzane wyłącznie podmiotom wspierającym świadczenie usług (np. dostawca hostingu, ewentualnie system do e‑mail). Podmioty te przetwarzają dane na podstawie umów powierzenia i zgodnie z poleceniami administratora. Dane nie są sprzedawane.</p>
        </section>
        <section id="pp-9">
          <h2>9. Przekazywanie danych poza EOG</h2>
          <p>Co do zasady dane nie są przekazywane poza Europejski Obszar Gospodarczy. Jeżeli narzędzie techniczne (np. zewnętrzny dostawca poczty) wymaga transferu – nastąpi to wyłącznie przy zastosowaniu odpowiednich zabezpieczeń (standardowe klauzule umowne, decyzje stwierdzające odpowiedni stopień ochrony).</p>
        </section>
        <section id="pp-10">
          <h2>10. Profilowanie i zautomatyzowane decyzje</h2>
          <p>Nie stosujemy profilowania w rozumieniu RODO ani decyzji wywołujących skutki prawne oparte wyłącznie na zautomatyzowanym przetwarzaniu.</p>
        </section>
        <section id="pp-11">
          <h2>11. Bezpieczeństwo i środki techniczne</h2>
          <ul>
            <li>Dostęp do danych ograniczony do osób niezbędnych (zasada minimalizacji).</li>
            <li>Regularne aktualizacje środowiska serwerowego.</li>
            <li>Kopie zapasowe (backup) w cyklach okresowych.</li>
            <li>Szyfrowane kanały komunikacji (HTTPS).</li>
            <li>Ostrożność w zakresie urządzeń przenośnych i przechowywania notatek.</li>
          </ul>
        </section>
        <section id="pp-12">
          <h2>12. Pliki cookies</h2>
          <p>Cookies to niewielkie pliki tekstowe zapisywane w urządzeniu użytkownika. W serwisie stosowane są wyłącznie cookies niezbędne i funkcjonalne zapewniające podstawowe działanie (np. poprawne wyświetlanie treści, zapamiętanie preferencji nawigacyjnych). Brak jest cookies marketingowych stron trzecich, chyba że użytkownik skorzysta z odsyłacza do zewnętrznej witryny.</p>
        </section>
        <section id="pp-13">
          <h2>13. Rodzaje stosowanych cookies</h2>
          <table>
            <thead><tr><th>Nazwa</th><th>Typ</th><th>Cel</th><th>Czas</th></tr></thead>
            <tbody>
              <tr><td>session_id</td><td>Niezbędne</td><td>Utrzymanie sesji nawigacyjnej</td><td>Do zakończenia sesji</td></tr>
              <tr><td>layout_pref</td><td>Funkcjonalne</td><td>Zapamiętanie preferencji interfejsu</td><td>6 miesięcy</td></tr>
            </tbody>
          </table>
        </section>
        <section id="pp-14">
          <h2>14. Logi serwera i dane eksploatacyjne</h2>
          <p>Każde zapytanie do serwera może być rejestrowane w logach: adres IP, czas, nagłówki przeglądarki, odwiedzona podstrona. Logi służą do diagnostyki technicznej oraz bezpieczeństwa – nie są kojarzone w sposób stały z konkretną osobą i nie służą profilowaniu.</p>
        </section>
        <section id="pp-15">
          <h2>15. Narzędzia analityczne i marketingowe</h2>
          <p>Na moment publikacji Polityki serwis nie wykorzystuje zewnętrznych narzędzi analitycznych (np. Google Analytics) ani pikseli reklamowych. W razie wdrożenia takich usług Polityka zostanie zaktualizowana, a użytkownik otrzyma stosowną informację.</p>
        </section>
        <section id="pp-16">
          <h2>16. Linki zewnętrzne</h2>
          <p>Serwis może zawierać odnośniki do witryn zewnętrznych. Administrator nie ponosi odpowiedzialności za zasady prywatności obowiązujące na tych stronach – zaleca się zapoznanie z ich politykami.</p>
        </section>
        <section id="pp-17">
          <h2>17. Podstawy reklamacji i skarg</h2>
          <p>Osoba, której dane dotyczą, może wnieść skargę do Prezesa Urzędu Ochrony Danych Osobowych (uodo.gov.pl), jeśli uzna, że przetwarzanie jej danych narusza przepisy. Przed złożeniem skargi zachęcamy do kontaktu bezpośredniego – umożliwia to szybsze wyjaśnienie sprawy.</p>
        </section>
        <section id="pp-18">
          <h2>18. Zmiany Polityki Prywatności</h2>
          <p>Polityka może być okresowo aktualizowana (np. zmiana zakresu usług, nowych narzędzi). Nowa wersja obowiązuje od dnia publikacji. W przypadku zmian istotnych – możliwe jest krótkie powiadomienie informacyjne w serwisie.</p>
        </section>
        <section id="pp-19">
          <h2>19. Słownik pojęć</h2>
          <ul>
            <li><strong>RODO</strong> – Rozporządzenie 2016/679.</li>
            <li><strong>Dane osobowe</strong> – informacja pozwalająca zidentyfikować osobę fizyczną.</li>
            <li><strong>Przetwarzanie</strong> – operacja wykonywana na danych (zbieranie, utrwalanie, usuwanie itd.).</li>
            <li><strong>Użytkownik</strong> – każda osoba odwiedzająca serwis lub korzystająca z usług.</li>
          </ul>
        </section>
        <section id="pp-20">
          <h2>20. Kontakt</h2>
          <p>W sprawach związanych z ochroną danych: telefon 884&nbsp;938&nbsp;490 lub formularz / dane kontaktowe w sekcji &quot;Kontakt&quot;. Można też skorzystać z tradycyjnej formy korespondencji po wcześniejszym uzgodnieniu kanału.</p>
        </section>
        <p className="mt-14 text-xs opacity-70">Ostatnia aktualizacja: {today.toLocaleDateString('pl-PL')} • Wersja: 1.0</p>
      </article>
    </main>
  );
}
