"use client";
import { useEffect, useState } from 'react';
import Script from 'next/script';
import { readConsent, type ConsentState } from '@/lib/cookies';
import { GTM_ID, GA_ID, loadGtmScript, loadGaScript } from '@/lib/analytics';

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
      const detail = (e as CustomEvent<ConsentState>).detail;
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

  return <>
    {/* Google Tag Manager - inject script that loads GTM */}
    <Script id="gtm-loader" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: loadGtmScript() }} />

    {/* Google Analytics (GA4) - load gtag and initialize */}
    <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
    <Script id="ga-init" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: loadGaScript() }} />
  </>;
}
