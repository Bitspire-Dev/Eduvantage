## EduVantage – Landing Page (Next.js)

Strona wizytówka korepetycji (Matematyka + Angielski) w Słupsku.

### Technologie
- Next.js (App Router, TypeScript)
- Tailwind (utility baseline + własne klasy + CSS zmienne)
- Brak backendu – CTA telefoniczne (tel: link)

### Struktura kluczowa
```
src/app/layout.tsx       -> układ, header, footer, floating call, metadata
src/app/page.tsx         -> strona główna (import sekcji)
src/app/page-content.tsx -> kompozycja sekcji
src/components/*         -> sekcje i drobne komponenty
src/app/globals.css      -> zmienne, klasy pomocnicze
```

### Edycja treści
- Numer telefonu: wyszukaj `884938490` i podmień globalnie jeśli się zmieni.
- Cennik: `pricing.tsx` – tablica `tiers`.
- FAQ: `faq.tsx` – tablica `items`.
- Opinie: `testimonials.tsx` – tablica `sample`.
- Kolory: `globals.css` zmienne `--color-*`.
- Meta / SEO: `layout.tsx` obiekt `metadata` + TODO domena.

### Dodanie domeny produkcyjnej
W `layout.tsx` podmień `https://example.com` na finalny adres (używane w `metadataBase` i OpenGraph).

### Uruchomienie (dev)
```
npm install
npm run dev
```

### Budowa produkcyjna
```
npm run build
npm start
```

### Deployment
- Vercel (najprostsze – import repo)
- Netlify / Render (Next 15 wspierany)

### Analityka
Możesz podpiąć narzędzie (GA4 / Plausible) – dodaj komponent `<Script>` i nasłuchuj kliknięć `tel:` (atrybuty `data-track`).

### TODO (opcjonalne)
- Dodać realne opinie + zdjęcia (webp 120x120) i lazy loading.
- Dodać politykę prywatności jeśli pojawi się formularz.
- Dodać blog (folder `src/app/blog`).

### Dodatkowe biblioteki (zainstalowane)

- `react-bits` — lekkie, multiplatformowe prymitywy (View/Text/Image/StyleSheet). Przydatne, gdy chcesz walczyć o zgodność między web + native lub stworzyć abstrakcję UI. (Demo: `src/components/react-bits-demo.tsx`)
- `swr` — lekka biblioteka pobierania danych (Vercel/Next friend). Dobry wybór do cache/fetch w komponentach.
- `usehooks-ts` — kolekcja prostych hooków TypeScript (useWindowSize, useLocalStorage itp.).

Te biblioteki zostały zainstalowane lokalnie i są gotowe do użycia. Aby zobaczyć przykład użycia, zobacz `src/components/react-bits-demo.tsx`.

### Licencja
Kod do swobodnego użycia w ramach projektu EduVantage.
