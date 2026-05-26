"use client";
import React, { useEffect, useState } from 'react';

// Shape of consent preferences
interface ConsentState {
  necessary: true; // always true
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
  ts: number; // timestamp
}

const CONSENT_COOKIE = 'cookie_consent';
const MAX_AGE_SECONDS = 60 * 60 * 24 * 180; // ~6 months

function readConsent(): ConsentState | null {
  if (typeof document === 'undefined') return null;
  const m = document.cookie.match(new RegExp('(?:^|; )' + CONSENT_COOKIE + '=([^;]*)'));
  if (!m) return null;
  try {
    return JSON.parse(decodeURIComponent(m[1]));
  } catch {
    return null;
  }
}

function writeConsent(data: Omit<ConsentState, 'ts'> & { ts?: number }) {
  const payload: ConsentState = { ...data, ts: Date.now(), necessary: true };
  const value = encodeURIComponent(JSON.stringify(payload));
  document.cookie = `${CONSENT_COOKIE}=${value}; Path=/; Max-Age=${MAX_AGE_SECONDS}; SameSite=Lax` + (location.protocol === 'https:' ? '; Secure' : '');
  window.dispatchEvent(new CustomEvent('cookie-consent-changed', { detail: payload }));
}

export default function CookieConsent() {
  const [open, setOpen] = useState(false);
  const [showPanel, setShowPanel] = useState(false); // advanced panel
  const [functional, setFunctional] = useState(true);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  // On mount read cookie - wrapped in rAF to avoid synchronous setState in effect
  useEffect(() => {
    const rafId = requestAnimationFrame(() => {
      const existing = readConsent();
      if (!existing) {
        setOpen(true);
      } else {
        setFunctional(existing.functional);
        setAnalytics(existing.analytics);
        setMarketing(existing.marketing);
      }
    });
    return () => cancelAnimationFrame(rafId);
  }, []);

  // Allow external trigger (e.g. link on /cookies page)
  useEffect(() => {
    const openSettings = () => {
      const current = readConsent();
      if (current) {
        setFunctional(current.functional);
        setAnalytics(current.analytics);
        setMarketing(current.marketing);
      }
      setShowPanel(true);
      setOpen(true);
    };
    window.addEventListener('open-cookie-settings', openSettings);
    return () => window.removeEventListener('open-cookie-settings', openSettings);
  }, []);

  const acceptAll = () => {
    writeConsent({ functional: true, analytics: true, marketing: true, necessary: true });
    setOpen(false);
  };

  const rejectOptional = () => {
    writeConsent({ functional: true, analytics: false, marketing: false, necessary: true }); // keep functional true for usability
    setOpen(false);
  };

  const saveSelection = () => {
    writeConsent({ functional, analytics, marketing, necessary: true });
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="cookie-consent" role="dialog" aria-modal="false" aria-label="Baner zgody na pliki cookies">
      <div className="cookie-consent__inner">
        <div className="cookie-consent__content">
          <h2 className="cookie-consent__title">Twoja prywatność</h2>
          <p className="cookie-consent__desc">
            Używamy plików cookies niezbędnych do działania serwisu oraz prostych funkcjonalnych (zapamiętanie preferencji).
            Opcjonalnie możesz pozwolić na analityczne i marketingowe (gdy je wdrożymy). Zgody możesz zmienić w Polityce cookies.
          </p>
          <button className="cookie-consent__settings-btn" onClick={() => setShowPanel(v => !v)} aria-expanded={showPanel}>
            {showPanel ? 'Ukryj ustawienia' : 'Ustawienia zaawansowane'}
          </button>
        </div>
        <div className="cookie-consent__actions">
          <button onClick={rejectOptional} className="cc-btn cc-btn-secondary">Odrzuć opcjonalne</button>
          <button onClick={acceptAll} className="cc-btn cc-btn-primary">Akceptuj wszystkie</button>
        </div>
      </div>
      {showPanel && (
        <form className="cookie-consent__panel" onSubmit={e => { e.preventDefault(); saveSelection(); }} aria-label="Ustawienia cookies">
          <fieldset>
            <legend className="sr-only">Kategorie ciasteczek</legend>
            <ul className="cookie-pref-list">
              <li>
                <label className="cookie-switch">
                  <input type="checkbox" checked disabled />
                  <span className="cookie-slider" />
                  <span className="cookie-label"><strong>Niezbędne</strong> – wymagane do działania (zawsze aktywne)</span>
                </label>
              </li>
              <li>
                <label className="cookie-switch">
                  <input type="checkbox" checked={functional} onChange={e => setFunctional(e.target.checked)} />
                  <span className="cookie-slider" />
                  <span className="cookie-label"><strong>Funkcjonalne</strong> – poprawiają komfort (zapamiętanie preferencji)</span>
                </label>
              </li>
              <li>
                <label className="cookie-switch">
                  <input type="checkbox" checked={analytics} onChange={e => setAnalytics(e.target.checked)} />
                  <span className="cookie-slider" />
                  <span className="cookie-label"><strong>Analityczne</strong> – anonimowe statystyki (gdy włączymy)</span>
                </label>
              </li>
              <li>
                <label className="cookie-switch">
                  <input type="checkbox" checked={marketing} onChange={e => setMarketing(e.target.checked)} />
                  <span className="cookie-slider" />
                  <span className="cookie-label"><strong>Marketingowe</strong> – personalizacja ofert (gdy włączymy)</span>
                </label>
              </li>
            </ul>
          </fieldset>
          <div className="cookie-panel-actions">
            <button type="button" onClick={() => setOpen(false)} className="cc-btn cc-btn-text">Anuluj</button>
            <button type="submit" className="cc-btn cc-btn-primary">Zapisz wybór</button>
          </div>
        </form>
      )}
    </div>
  );
}
