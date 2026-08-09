export interface ConsentState {
  necessary: true;
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
  ts: number;
}

export const CONSENT_COOKIE = 'cookie_consent';
const MAX_AGE_SECONDS = 60 * 60 * 24 * 180; // ~6 months

export function readConsent(): ConsentState | null {
  if (typeof document === 'undefined') return null;
  const m = document.cookie.match(new RegExp('(?:^|; )' + CONSENT_COOKIE + '=([^;]*)'));
  if (!m) return null;
  try {
    return JSON.parse(decodeURIComponent(m[1])) as ConsentState;
  } catch {
    return null;
  }
}

export function writeConsent(data: Omit<ConsentState, 'ts' | 'necessary'>) {
  const payload: ConsentState = { ...data, necessary: true, ts: Date.now() };
  const value = encodeURIComponent(JSON.stringify(payload));
  const secure = typeof location !== 'undefined' && location.protocol === 'https:' ? '; Secure' : '';
  document.cookie = `${CONSENT_COOKIE}=${value}; Path=/; Max-Age=${MAX_AGE_SECONDS}; SameSite=Lax${secure}`;
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('cookie-consent-changed', { detail: payload }));
  }
}
