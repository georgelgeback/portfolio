"use client";

import { I18nextProvider } from "react-i18next";
import { createInstance } from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "../locales/en.json";
import sv from "../locales/sv.json";
import { useMemo } from "react";

export default function ClientI18nProvider({
  children,
  initialLanguage = "en",
}: {
  children: React.ReactNode;
  initialLanguage?: string;
}) {
  const i18n = useMemo(() => createInstance(), []);

  const detectionOptions = {
    order: ["querystring", "cookie", "localStorage", "navigator", "htmlTag"],
    supportedLngs: ['en', 'sv'],
    caches: ["cookie", "localStorage"],
    cookieMinutes: 60 * 24 * 365, // 1 year
    load: "languageOnly",
    // cimode can be used in dev for i18n to test translations, we don't but might as well support it
    excludeCacheFor: ["cimode"],
  };

  if (!i18n.isInitialized) {
    i18n
      .use(LanguageDetector)
      .use(initReactI18next)
      .init({
        lng: initialLanguage,
        fallbackLng: "en",
        supportedLngs: ["en", "sv"],
        detection: detectionOptions,
        load: "languageOnly",
        resources: {
          en: { translation: en },
          sv: { translation: sv },
        },
        interpolation: { escapeValue: false },
      });
  }

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
