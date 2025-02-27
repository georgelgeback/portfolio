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
          home: {
            title: "Home",
            description:
              "Welcome to my portfolio! There isn't much here yet, but you can consider this page the first entry. If you want to see more, you can check out my GitHub page or go to",
            link: "my projects",
          },
          contact: {
            title: "Contact",
            description:
              "If you want to get in touch with me, you can send me an email at",
          },
          projects: {
            title: "Projects",
            description:
              "This is a page where you can see all the projects I have worked on. This page will be updated regularly.",
          },
          nav: {
            home: "Home",
            projects: "Projects",
            contact: "Contact",
          },
        },
      },
      sv: {
        translation: {
          home: {
            title: "Hem",
            description:
              "Välkommen till min portfolio! Det finns inte mycket här än, men du kan betrakta den här sidan som den första posten. Om du vill se mer kan du kolla in min GitHub-sida eller gå till",
            link: "mina projekt",
          },
          contact: {
            title: "Kontakt",
            description:
              "Om du vill komma i kontakt med mig kan du skicka mig ett mail till",
          },
          projects: {
            title: "Projekt",
            description:
              "Det här är en sida där du kan se alla projekt jag har jobbat på. Den här sidan kommer att uppdateras regelbundet.",
          },
          nav: {
            home: "Hem",
            projects: "Projekt",
            contact: "Kontakt",
          },
        },
      },
    },
    initImmediate: false,
  });

export default i18n;
