import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "../components/layout/header";
import { Footer } from "../components/layout/footer";
import WhatsAppButton from '../components/ui/WhatsAppButton';
import CookieConsent from '../components/ui/cookie-consent';
import AnalyticsLoader from '../components/composites/analytics-loader';

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    template: "%s | EduVantage Słupsk",
    default: "EduVantage – Korepetycje Matematyka i Angielski Słupsk",
  },
  description:
    "Skuteczne korepetycje z matematyki i angielskiego w Słupsku. Przygotowanie do egzaminu ósmoklasisty i matury. Dojazd do ucznia lub zajęcia u nas.",
  keywords: [
    "korepetycje Słupsk",
    "korepetycje matematyka Słupsk",
    "korepetycje angielski Słupsk",
    "egzamin ósmoklasisty matematyka",
    "matura matematyka",
    "nauka angielskiego Słupsk",
    "przygotowanie do matury",
    "korepetytor Słupsk",
    "lekcje matematyki",
    "lekcje angielskiego",
  ],
  openGraph: {
    title: "EduVantage – Korepetycje Matematyka i Angielski Słupsk",
    description:
      "Matematyka i angielski – przygotowanie do egzaminów. 4 lata doświadczenia. Sprawdzona skuteczność.",
    type: "website",
    locale: "pl_PL",
    url: "https://eduvantage.pl",
    siteName: "EduVantage",
  },
  twitter: {
    card: "summary_large_image",
    title: "EduVantage – Korepetycje Słupsk",
    description: "Matematyka i angielski – przygotowanie do egzaminów.",
  },
  metadataBase: new URL("https://eduvantage.pl"),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body className={inter.variable + ' has-cookie-consent'}>
        {/* Google Tag Manager will be injected lazily by AnalyticsLoader after consent */}
        {/* Critical CSS inline (very small subset) */}
        <style
          dangerouslySetInnerHTML={{
            __html: `/* critical */body{margin:0}header.site-header{position:sticky;top:0;display:flex;align-items:center;height:72px}#hero{position:relative;overflow:hidden}#hero .hero-bg-img{object-fit:cover}#hero .hero-title{font-weight:800;line-height:1.05;margin:0}#hero .hero-desc{margin-top:.65rem}a.btn{display:inline-flex;align-items:center;justify-content:center;text-decoration:none;font-weight:600}`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "EduVantage",
              description: "Korepetycje z matematyki i angielskiego w Słupsku. Przygotowanie do egzaminów.",
              url: "https://eduvantage.pl",
              telephone: "+48-780-926-993",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Słupsk",
                addressCountry: "PL",
              },
              areaServed: {
                "@type": "City",
                name: "Słupsk",
              },
              serviceType: ["Korepetycje matematyka", "Korepetycje angielski"],
              offers: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Korepetycje matematyka",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Korepetycje angielski",
                  },
                },
              ],
              priceRange: "$$",
              openingHours: "Mo-Su 08:00-20:00",
              sameAs: [],
            }),
          }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 bg-white text-(--color-primary) font-medium px-4 py-2 rounded-md shadow"
        >
          Przejdź do treści
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppButton />
        <CookieConsent />
  {/* Analytics (GTM/GA) lazy loader */}
  <AnalyticsLoader />
      </body>
    </html>
  );
}
