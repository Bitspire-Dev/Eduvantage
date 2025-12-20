import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Regulamin – EduVantage Słupsk korepetycje matematyka i angielski',
  description: 'Regulamin świadczenia usług edukacyjnych EduVantage – korepetycje z matematyki i języka angielskiego w Słupsku i okolicach. Zasady współpracy, płatności, odwoływania zajęć, reklamacje, prawa konsumenta.',
  alternates: { canonical: '/regulamin' },
  openGraph: {
    title: 'Regulamin – EduVantage',
    description: 'Szczegółowy regulamin świadczenia usług korepetycji (matematyka, angielski) – Słupsk',
    type: 'article'
  }
};

const CURRENT_YEAR = new Date().getFullYear();

export default function RegulaminPage() {
  return (
    <main className="section container py-16" id="regulamin">
      <Script id="ld-org" type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Korepetycje matematyka i angielski – EduVantage',
            provider: { '@type': 'Organization', name: 'EduVantage', address: { '@type': 'PostalAddress', addressLocality: 'Słupsk', addressCountry: 'PL' } },
            areaServed: 'Słupsk i okolice',
            serviceType: 'Korepetycje z matematyki i języka angielskiego',
            termsOfService: 'https://example.com/regulamin'
        }) }} />
      <article className="prose prose-invert max-w-none">
        <h1>Regulamin świadczenia usług edukacyjnych EduVantage</h1>
        <p><strong>Wersja obowiązująca od: {CURRENT_YEAR}-09-26</strong></p>
  <p>Niniejszy regulamin (&quot;Regulamin&quot;) określa zasady świadczenia usług edukacyjnych (korepetycje z matematyki i języka angielskiego – poziom szkoły podstawowej, szkoły średniej, przygotowanie do egzaminu ósmoklasisty i matury) przez podmiot działający pod nazwą <strong>EduVantage</strong> (&quot;Usługodawca&quot;) na rzecz klientów indywidualnych – uczniów lub ich opiekunów prawnych (&quot;Klient&quot;). Regulamin ma charakter informacyjny i porządkowy; jego akceptacja jest warunkiem zawarcia umowy.</p>

        <nav aria-label="Spis treści" className="mt-8 mb-10 border rounded-lg p-5 bg-[rgba(255,255,255,0.03)]">
          <h2 className="m-0 text-base font-semibold tracking-tight">Spis treści</h2>
          <ol className="mt-3 grid gap-1 text-sm sm:columns-2">
            {[
              'Postanowienia ogólne','Definicje','Zakres usług','Zawarcie umowy','Cennik i płatności','Realizacja zajęć','Odwoływanie i zmiany','Obowiązki Klienta','Obowiązki Usługodawcy','Materiały i prawa autorskie','Odpowiedzialność','Siła wyższa','Reklamacje','Odstąpienie od umowy','Rozwiązanie współpracy','Przetwarzanie danych','Bezpieczeństwo i etyka','Zakazy','Zmiana Regulaminu','Prawo właściwe','Pozasądowe rozwiązywanie sporów','Postanowienia końcowe'
            ].map((label,i)=>(
              <li key={i}><a href={`#sec-${i+1}`} className="hover:underline">{i+1}. {label}</a></li>
            ))}
          </ol>
        </nav>

        <section id="sec-1">
          <h2>1. Postanowienia ogólne</h2>
          <p>Regulamin reguluje zasady świadczenia usług edukacyjnych prowadzonych stacjonarnie (z dojazdem do ucznia lub w miejscu wskazanym przez Usługodawcę) na terenie miasta Słupsk i okolic. Celem usług jest rozwijanie kompetencji z matematyki i języka angielskiego, podnoszenie wyników w nauce, przygotowanie do sprawdzianów, kartkówek, egzaminu ósmoklasisty oraz matury (poziom podstawowy i rozszerzony).</p>
        </section>
        <section id="sec-2">
          <h2>2. Definicje</h2>
          <ul>
            <li><strong>Usługa</strong> – pojedyncze zajęcia lub cykl zajęć edukacyjnych.</li>
            <li><strong>Lekcja</strong> – jednostka dydaktyczna (standardowo 60 minut, chyba że strony ustalą inaczej).</li>
            <li><strong>Klient</strong> – uczeń pełnoletni albo rodzic/opiekun prawny ucznia niepełnoletniego.</li>
            <li><strong>Materiały</strong> – treści, arkusze, zadania, notatki, opracowania przygotowane przez Usługodawcę.</li>
            <li><strong>Siła wyższa</strong> – zdarzenie zewnętrzne, nadzwyczajne i nieuniknione.</li>
          </ul>
        </section>
        <section id="sec-3">
          <h2>3. Zakres usług</h2>
          <p>Usługodawca świadczy korepetycje z matematyki (poziom szkoły podstawowej, ponadpodstawowej – podstawowy i rozszerzony) oraz języka angielskiego (gramatyka, konwersacje, przygotowanie egzaminacyjne). Możliwe są zajęcia indywidualne oraz – po uzgodnieniu – w mini‑grupach (2–3 osoby). Udział w grupie może skutkować inną stawką.</p>
        </section>
        <section id="sec-4">
          <h2>4. Zawarcie umowy</h2>
          <p>Do zawarcia umowy dochodzi z chwilą: (a) potwierdzenia przez strony terminu pierwszej lekcji (telefonicznie, SMS lub e‑mail), albo (b) opłacenia pierwszej lekcji / pakietu. Ustalenia dokonywane ustnie są wiążące, jeżeli zostały potwierdzone w utrwalony sposób (np. wiadomością SMS).</p>
        </section>
        <section id="sec-5">
          <h2>5. Cennik i płatności</h2>
          <ol>
            <li>Stawki podawane są w złotych polskich (PLN) i mogą różnić się w zależności od poziomu nauczania (np. zakres rozszerzony matematyka).</li>
            <li>Płatność następuje gotówką po zajęciach, z góry za pakiet lub – po uzgodnieniu – przelewem na rachunek wskazany przez Usługodawcę.</li>
            <li>Faktura / rachunek może zostać wystawiona na życzenie Klienta – zgłoszenie najpóźniej w dniu dokonania płatności.</li>
            <li>Niewykorzystane zajęcia z pakietu mogą zostać odrobione w uzgodnionym terminie w okresie 60 dni od daty pierwotnej lekcji.</li>
            <li>Brak płatności w ustalonym terminie może skutkować wstrzymaniem dalszych lekcji.</li>
          </ol>
        </section>
        <section id="sec-6">
          <h2>6. Realizacja zajęć</h2>
          <p>Zajęcia odbywają się według uzgodnionego harmonogramu. Usługodawca może – w uzasadnionych przypadkach (choroba, zdarzenie losowe) – zaproponować zmianę terminu. Czas dojazdu nie wlicza się do czasu lekcji.</p>
        </section>
        <section id="sec-7">
          <h2>7. Odwoływanie i zmiany</h2>
          <ol>
            <li>Klient może bezkosztowo odwołać lub przełożyć lekcję najpóźniej do godz. 20:00 dnia poprzedzającego.</li>
            <li>Odwołanie w dniu lekcji może skutkować naliczeniem do 50% stawki (rezerwacja czasu).</li>
            <li>Nieobecność bez uprzedzenia (&quot;no‑show&quot;) – 100% stawki.</li>
            <li>W razie siły wyższej strony ustalają nowy termin bez naliczenia opłat.</li>
          </ol>
        </section>
        <section id="sec-8">
          <h2>8. Obowiązki Klienta</h2>
          <ul>
            <li>Zapewnienie warunków do nauki (cisza, biurko, podstawowe przybory).</li>
            <li>Punktualność oraz przygotowanie (zadania domowe, materiały szkolne).</li>
            <li>Poinformowanie o szczególnych potrzebach edukacyjnych.</li>
            <li>Uiszczanie opłat w terminie.</li>
          </ul>
        </section>
        <section id="sec-9">
          <h2>9. Obowiązki Usługodawcy</h2>
          <ul>
            <li>Należyta staranność i dobór metod dostosowanych do ucznia.</li>
            <li>Przygotowanie materiałów pomocniczych.</li>
            <li>Informowanie o postępach i ewentualnych trudnościach.</li>
            <li>Zachowanie poufności co do informacji uzyskanych w toku współpracy.</li>
          </ul>
        </section>
        <section id="sec-10">
          <h2>10. Materiały i prawa autorskie</h2>
          <p>Materiały przekazywane podczas lekcji przeznaczone są wyłącznie do użytku własnego ucznia. Zabronione jest dalsze kopiowanie, odpłatne udostępnianie lub publikowanie bez zgody Usługodawcy. Prawa autorskie do materiałów pozostają przy Usługodawcy, chyba że wyraźnie postanowiono inaczej.</p>
        </section>
        <section id="sec-11">
          <h2>11. Odpowiedzialność</h2>
          <p>Usługodawca nie gwarantuje uzyskania określonego wyniku (oceny, punktacji na egzaminie), lecz zapewnia rzetelne przygotowanie oraz wsparcie merytoryczne. Odpowiedzialność odszkodowawcza Usługodawcy wobec Klienta ograniczona jest – w granicach prawa – do łącznej kwoty zapłaconego wynagrodzenia za ostatnie 30 dni usług, z wyłączeniem szkód wyrządzonych umyślnie.</p>
        </section>
        <section id="sec-12">
          <h2>12. Siła wyższa</h2>
          <p>Strony nie ponoszą odpowiedzialności za niewykonanie lub nienależyte wykonanie zobowiązań wynikłe z działania siły wyższej. O wystąpieniu takich okoliczności należy niezwłocznie poinformować drugą stronę.</p>
        </section>
        <section id="sec-13">
          <h2>13. Reklamacje</h2>
          <ol>
            <li>Reklamacje dotyczące sposobu świadczenia usług można zgłaszać w formie: e‑mail, SMS lub pisemnie.</li>
            <li>Reklamacja powinna wskazywać: (a) opis zastrzeżeń, (b) datę zdarzenia, (c) oczekiwany sposób rozwiązania.</li>
            <li>Usługodawca rozpatruje reklamację w terminie do 14 dni i udziela odpowiedzi w formie przyjętej przy zgłoszeniu.</li>
          </ol>
        </section>
        <section id="sec-14">
          <h2>14. Odstąpienie od umowy (konsument)</h2>
          <p>Jeżeli zawarcie umowy nastąpiło na odległość i dotyczy pakietu przyszłych lekcji, konsument może – co do niewykorzystanej części – odstąpić od umowy w terminie 14 dni od zawarcia, składając jednoznaczne oświadczenie. W przypadku rozpoczęcia świadczenia za wyraźną zgodą konsumenta przed upływem terminu odstąpienia – prawo odstąpienia wygasa co do wykonanej części usługi.</p>
        </section>
        <section id="sec-15">
          <h2>15. Rozwiązanie współpracy</h2>
          <p>Każda ze stron może zakończyć współpracę ze skutkiem natychmiastowym z ważnych powodów (m.in. rażące naruszenia Regulaminu, brak płatności, zachowania uniemożliwiające prowadzenie lekcji). Niewykorzystane i opłacone z góry lekcje podlegają rozliczeniu proporcjonalnemu – chyba że doszło do naruszenia Regulaminu z winy Klienta.</p>
        </section>
        <section id="sec-16">
          <h2>16. Przetwarzanie danych</h2>
          <p>Dane osobowe przetwarzane są w celu realizacji usług edukacyjnych i rozliczeń. Podanie danych jest dobrowolne, ale niezbędne do zawarcia i wykonania umowy. Klient ma prawo dostępu, sprostowania, ograniczenia przetwarzania, usunięcia – w granicach obowiązującego prawa. Szczegółowe informacje będą zawarte w odrębnej Polityce Prywatności.</p>
        </section>
        <section id="sec-17">
          <h2>17. Bezpieczeństwo i etyka</h2>
          <p>Usługodawca zobowiązuje się do zachowania standardów etycznych i poszanowania godności ucznia. W przypadku ucznia niepełnoletniego zajęcia mogą odbywać się w obecności domowników. Klient zapewnia, że miejsce zajęć jest bezpieczne i wolne od zagrożeń.</p>
        </section>
        <section id="sec-18">
          <h2>18. Zakazy</h2>
          <ul>
            <li>Nagrywanie audio/wideo zajęć bez zgody Usługodawcy.</li>
            <li>Rozpowszechnianie materiałów poza dozwolonym użytkiem.</li>
            <li>Zachowania agresywne, obraźliwe lub naruszające dobra osobiste.</li>
          </ul>
        </section>
        <section id="sec-19">
          <h2>19. Zmiana Regulaminu</h2>
          <p>Usługodawca może zmienić Regulamin z ważnych przyczyn (np. zmiana prawa, rozszerzenie usług). Zmiany wchodzą w życie po upływie 14 dni od udostępnienia nowej wersji. Do umów zawartych przed zmianą stosuje się wersję dotychczasową, chyba że Klient zaakceptuje nową.</p>
        </section>
        <section id="sec-20">
          <h2>20. Prawo właściwe i spory</h2>
          <p>Do umowy stosuje się prawo polskie. Spory w pierwszej kolejności strony starają się rozwiązać polubownie. W braku porozumienia – właściwy sąd powszechny według właściwości miejscowej i rzeczowej. Konsument może skorzystać z platformy ODR (ec.europa.eu/odr).</p>
        </section>
        <section id="sec-21">
          <h2>21. Pozasądowe rozwiązywanie sporów</h2>
          <p>Konsument ma prawo zwrócić się o mediację lub polubowne rozstrzygnięcie do właściwego Wojewódzkiego Inspektoratu Inspekcji Handlowej. Informacje: <a href="https://uokik.gov.pl" target="_blank" rel="noopener noreferrer">uokik.gov.pl</a>.</p>
        </section>
        <section id="sec-22">
          <h2>22. Postanowienia końcowe</h2>
          <p>Jeżeli którekolwiek z postanowień okaże się nieważne – nie wpływa to na ważność pozostałych. Regulamin udostępniany jest nieodpłatnie w formie umożliwiającej pozyskanie, odtwarzanie i utrwalanie.</p>
        </section>

        <p className="mt-14 text-xs opacity-70">Ostatnia aktualizacja: {new Date().toLocaleDateString('pl-PL')} • Wersja: 1.0</p>
      </article>
    </main>
  );
}
