"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          description: {
            part3: "Learn React",
          },
        },
      },
      sv: {
        translation: {
          description: {
            part3: "Lär dig React",
          },
        },
      },
    },
    initImmediate: false,
  });

export default i18n;
