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
            description1:
              "Welcome to my portfolio! This site will be updated regularly as I create new things and work on more projects. If you want to see most of the things I've done so far, you can check out ",
            gitHub: "my GitHub page",
            description2:
              " or if you want a more refined experience, you can go to ",
            link: "my projects.",
          },
          contact: {
            title: "Contact",
            description:
              "There will be an email adress here eventually. For now, you are very welcome to contact me through <0>LinkedIn</0> or visit my profile on <1>GitHub</1>.",
          },
          projects: {
            title: "Projects",
            description:
              "This is a page where you can see some of the projects I have worked on. This page will be updated regularly.",
            portfolio: {
              title: "My Portfolio Website",
              teaser:
                "This very website you're on right now! Made with React, with some next.js and Tailwind CSS sprinkled in. Click on this card to learn more!",
              description:
                "This website is currently a work in progress. It's written in TypeScript, with Next.js as the framework to be able to use its excellent app router system and React since that's what I'm most comfortable with. Some of the components used here are taken from the Shadcn library, and all of the components use Tailwind CSS v.4. Localisation is handled with i18next. If you're reading this on the web, it's being hosted using Vercel. All the code is available on my <1>GitHub page found here</1>.\n\nDuring my work with this website, I've learned a lot about the systems mentioned above and how to use them, as well as how to singlehandedly see a project like this through from start to finish. I believe this will be useful both in my work on the same stack (see the web project <2>here</2>) and on entirely different projects in the future.",
            },
            web: {
              title: "The Fsektionen.se Website",
              teaser:
                "The website for my student guild at the Faculty of Engineering at Lund University. Written using largely the same stack as this website. Not yet deployed.",
              description:
                "Since the start of 2025, I have been working together with other members of the programming committe at my student guild rebuilding the website for our guild (the old one currently inhabiting fsektionen.se is about 11 years old). Much like this website, it's written in TypeScript, with Next.js as the framework and React as the general library. We make extensive use of tailwind and the Shadcn library for styling, and localisation is handled using i18next. The website is hosted on our own server and connects to the backend via FastAPI. The actual database uses PostgreSQL and SQLAlchemy for the ORM. I have limited experience working on the backend, but I have worked on it enough to know my way around it and to edit minor things I find in need of fixing. The code for the frontend is available on our GitHub page <3>here</3>, and the backend can be accessed in the same manner <4>here</4>.\n\nWorking on building the new website has given me tons of experience in working in teams of different sizes, as well as how to work on features that need to be adaptable enough to be changed as the design is finalised and customisable enough to fit in entirely different parts of the website.",
            },
            app: {
              title: "The F-guild App",
              teaser:
                "The app for my student guild, which I have worked on for the last year. Written in Dart using Flutter. Working on this project improved my ability to work in a team on a faster schedule than I have on the website so far. Click the card to see the code!",
            },
          },
          nav: {
            home: "Home",
            projects: "Projects",
            contact: "Contact",
          },
          footer: "Made with ❤️ in React. Click here to find out more.",
        },
      },
      sv: {
        translation: {
          home: {
            title: "Hem",
            description1:
              "Välkommen till min portfolio! Denna sida kommer att uppdateras löpande allt eftersom jag blir klar med fler projekt. Om du vill se det mesta av det jag har gjort hittills kan du gå till ",
            gitHub: "min GitHub-sida",
            description2:
              ". Om du vill ha en mer raffinerad upplevelse kan du utforska ",
            link: "mina projekt.",
          },
          contact: {
            title: "Kontakt",
            description:
              "Det kommer att finnas en e-postadress här så småningom. Under tiden bör du inte tveka att kontakta mig via <0>LinkedIn</0> eller besöka min profil på <1>GitHub</1>.",
          },
          projects: {
            title: "Projekt",
            description:
              "Det här är en sida där du kan se ett urval av de projekt jag har jobbat på. Denna sida kommer att uppdateras regelbundet.",
            portfolio: {
              title: "Min portfolio hemsida",
              teaser:
                "Den hemsidan du är på just nu! Gjord med React, med lite Next.js och Tailwind ovanpå. Klicka på kortet för att lära dig mer!",
              description:
                "Den här webbplatsen är för närvarande ett pågående arbete. Den är skriven i TypeScript, med Next.js som ramverk för att kunna använda dess utmärkta app-routersystem och React eftersom det är det jag är mest bekväm med. Några av de komponenter som används här är hämtade från Shadcn-biblioteket, och alla komponenter använder Tailwind CSS v.4. Lokalisering hanteras med i18next. Om du läser detta på webben, är det Vercel som hanterar hosting. All kod finns tillgänglig på min <1>GitHub-sida som finns här</1>.\n\nUnder mitt arbete med den här webbplatsen har jag lärt mig mycket om de system som nämns ovan och hur de används, liksom hur man på egen hand kan se ett projekt som detta från början till slut. Jag tror att detta kommer att vara användbart både i mitt arbete på samma stack (se webbprojektet <2>här</2>) och på helt andra projekt i framtiden",
            },
            web: {
              title: "Fsektionen.se",
              teaser:
                "Hemsidan för min studentkår vid Lunds Tekniska Högskola, skriven med nästan samma stack som denna hemsida. Inte publicerad ännu.",
              description:
                "Sedan början på 2025 har jag tillsammans med andra medlemmar i programmeringskommittén på min studentsektion arbetat med att bygga om sektionens webbplats (den gamla som nu tar upp fsektionen.se är cirka 11 år gammal). Precis som denna webbplats är den skriven i TypeScript, med Next.js som ramverk och React som huvudbibliotek. Vi använder Tailwind och Shadcn-biblioteket för styling, och lokaliseringshanteringen sker via i18next. Webbplatsen är hostad på vår egen server och kommunicerar med backend via FastAPI. Databasen är baserad på PostgreSQL och använder SQLAlchemy som ORM. Jag har begränsad erfarenhet av utveckling av vår backend, men har arbetat med den tillräckligt för att förstå strukturen och kunna göra mindre ändringar vid behov. Koden för frontend finns tillgänglig på vår GitHub-sida <3>här</3>, och backend-koden kan nås på samma sätt <4>här</4>.\n\nAtt arbeta med den nya webbplatsen har gett mig mycket erfarenhet av att jobba i team av olika storlekar, samt hur man utvecklar funktioner som behöver vara tillräckligt flexibla för att anpassas när designen slutligen fastställs och tillräckligt konfigurerbara för att passa in på helt olika delar av webbplatsen.",
            },
            app: {
              title: "F-sektionens app",
              teaser:
                "Appen som används av min studentkår, som jag arbetat ideellt med under mer än ett år. Skriven i Dart med Flutter. Arbetet med appen har förbättrat min förmåga att arbeta i team med ett snabbt utvecklingsschema. Klicka på kortet för att se koden!",
            },
          },
          nav: {
            home: "Hem",
            projects: "Projekt",
            contact: "Kontakt",
          },
          footer: "Skapad med ❤️ i React. Klicka här för att se mer detaljer.",
        },
      },
    },
    initImmediate: false,
  });

export default i18n;
