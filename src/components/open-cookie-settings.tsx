"use client";
import React from 'react';

export default function OpenCookieSettingsButton({ className }: { className?: string }){
  return (
    <button
      type="button"
      className={className}
      onClick={() => window.dispatchEvent(new Event('open-cookie-settings'))}
    >
      Otwórz ustawienia cookies
    </button>
  );
}
