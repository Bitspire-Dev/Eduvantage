"use client";

import { useState, useEffect, useRef } from 'react';

const POPUP_DELAY_MS = 5000;

export function useWhatsApp(phone: string) {
  const [mounted, setMounted] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!mounted || !phone) return;
    const timer = setTimeout(() => setShowPopup(true), POPUP_DELAY_MS);
    return () => clearTimeout(timer);
  }, [mounted, phone]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter" && isChatOpen && message.trim()) {
        window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
        setMessage("");
      }
      if (e.key === "Escape" && isChatOpen) {
        setIsChatOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isChatOpen, message, phone]);

  const handleDismissPopup = () => {
    setShowPopup(false);
    setDismissed(true);
  };

  const handleToggleChat = () => {
    if (!isChatOpen) {
      handleDismissPopup();
      setIsChatOpen(true);
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setIsChatOpen(false);
    }
  };

  const handleSend = () => {
    if (!message.trim()) return;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
    setMessage("");
  };

  return {
    mounted,
    showPopup,
    dismissed,
    isChatOpen,
    message,
    setMessage,
    inputRef,
    handleDismissPopup,
    handleToggleChat,
    handleSend,
  };
}
