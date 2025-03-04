"use client";
import { useState, useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "../../i18n";

export default function ClientI18nProvider({
  children,
  initialLanguage = "en",
}: {
  children: React.ReactNode;
  initialLanguage?: string;
}) {
  const [language, setLanguage] = useState(initialLanguage);

  useEffect(() => {
    // Try to retrieve language from localStorage or client-side cookies
    const savedLang =
      localStorage.getItem("i18next") ||
      document.cookie.match(/i18next=([^;]+)/)?.[1];
    if (savedLang) {
      setLanguage(savedLang);
      // Optionally, update i18n's language here:
      i18n.changeLanguage(savedLang);
    }
  }, []);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
