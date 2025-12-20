"use client";
import { useEffect, useState } from 'react';
import Script from 'next/script';

type Consent = {
  necessary: boolean;
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
  ts?: number;
};

const CONSENT_COOKIE = 'cookie_consent';

function readConsent(): Consent | null {
  if (typeof document === 'undefined') return null;
  const m = document.cookie.match(new RegExp('(?:^|; )' + CONSENT_COOKIE + '=([^;]*)'));
  if (!m) return null;
  try { return JSON.parse(decodeURIComponent(m[1])); } catch { return null; }
}

// Use the lib.dom type for requestIdleCallback when available; do not redeclare signature

export default function AnalyticsLoader() {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const consent = readConsent();
    const allowed = !!consent?.analytics;

    // Load after first user interaction or when idle, whichever comes first
    let loaded = false;
    const markLoad = () => { if (!loaded) { loaded = true; setShouldLoad(true); cleanup(); } };
    const onInteract = () => { if (allowed) setTimeout(markLoad, 200); };

    function cleanup() {
      window.removeEventListener('scroll', onInteract);
      window.removeEventListener('pointerdown', onInteract);
      window.removeEventListener('keydown', onInteract);
    }

    if (allowed) {
      window.addEventListener('scroll', onInteract, { passive: true });
      window.addEventListener('pointerdown', onInteract);
      window.addEventListener('keydown', onInteract);
      // Idle fallback
      if (window.requestIdleCallback) {
        window.requestIdleCallback(markLoad, { timeout: 2500 });
      } else {
        setTimeout(markLoad, 2500);
      }
    }

    // React to later consent changes
    const onConsentChange = (e: Event) => {
      const detail = (e as CustomEvent<Consent>).detail;
      if (detail?.analytics && !loaded) {
        // after granting consent, schedule lazy load
        onInteract();
      }
    };
    window.addEventListener('cookie-consent-changed', onConsentChange as EventListener);
    return () => {
      cleanup();
      window.removeEventListener('cookie-consent-changed', onConsentChange as EventListener);
    };
  }, []);

  if (!shouldLoad) return null;
  const GTM_ID = 'GTM-KFWJ8VBP';
  const GA_ID = 'G-4GDRGVGJCN';

  return <>
    {/* Google Tag Manager - inject script that loads GTM */}
    <Script id="gtm-loader" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');` }} />

    {/* Google Analytics (GA4) - load gtag and initialize */}
    <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
    <Script id="ga-init" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${GA_ID}');` }} />
  </>;
}
