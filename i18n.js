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
              "Welcome to my portfolio! There isn't much here yet, but you can consider this page the first entry. If you want to see more, you can check out ",
            gitHub: "my GitHub page",
            description2: " or go to ",
            link: "my projects.",
          },
          contact: {
            title: "Contact",
            description:
              "There will be an email adress here eventually. For now, you are very welcome to contact me through ",
          },
          projects: {
            title: "Projects",
            description:
              "This is a page where you can see all the projects I have worked on. This page will be updated regularly.",
            portfolio: {
              title: "Portfolio website",
              teaser:
                "This very website you're on right now! Made with React, with some next.js and i18next sprinkled in.",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ullam atque esse expedita voluptas doloremque facilis, assumenda nemo adipisci! Earum quasi tempore ea quibusdam quae eos, molestiae asperiores beatae ipsum autem consectetur animi, repellat totam hic aspernatur obcaecati itaque ex enim dolore adipisci deserunt tenetur veritatis voluptatibus minima. Facilis architecto atque placeat porro nam excepturi odit aspernatur sapiente, doloremque culpa eveniet ex veniam! Distinctio hic, veritatis ipsum perferendis doloremque consequatur? Natus cum culpa earum esse eum consequuntur praesentium odio consectetur minima dignissimos amet facere consequatur ut quibusdam blanditiis repudiandae omnis assumenda, laboriosam repellat est neque illum? ",
            },
            web: {
              title: "Fsektionen.se website",
              teaser:
                "The website for my student union at the Faculty of Engineering at Lund University.",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ullam atque esse expedita voluptas doloremque facilis, assumenda nemo adipisci! Earum quasi tempore ea quibusdam quae eos, molestiae asperiores beatae ipsum autem consectetur animi, repellat totam hic aspernatur obcaecati itaque ex enim dolore adipisci deserunt tenetur veritatis voluptatibus minima. Facilis architecto atque placeat porro nam excepturi odit aspernatur sapiente, doloremque culpa eveniet ex veniam! Distinctio hic, veritatis ipsum perferendis doloremque consequatur? Natus cum culpa earum esse eum consequuntur praesentium odio consectetur minima dignissimos amet facere consequatur ut quibusdam blanditiis repudiandae omnis assumenda, laboriosam repellat est neque illum? ",
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
              "Välkommen till min portfolio! Det finns inte mycket här än, men du kan betrakta den här sidan som den första posten. Om du vill se mer kan du kolla in",
            gitHub: " min GitHub-sida ",
            description2: "eller gå till",
            link: "mina projekt",
          },
          contact: {
            title: "Kontakt",
            description:
              "Det kommer att finnas en e-postadress här så småningom. Under tiden bör du inte tveka att kontakta mig via ",
          },
          projects: {
            title: "Projekt",
            description:
              "Det här är en sida där du kan se alla projekt jag har jobbat på. Den här sidan kommer att uppdateras regelbundet.",
            portfolio: {
              title: "Portfolio hemsida",
              teaser:
                "Den här hemsidan du är på just nu! Gjord med React, med lite next.js och i18next på toppen.",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ullam atque esse expedita voluptas doloremque facilis, assumenda nemo adipisci! Earum quasi tempore ea quibusdam quae eos, molestiae asperiores beatae ipsum autem consectetur animi, repellat totam hic aspernatur obcaecati itaque ex enim dolore adipisci deserunt tenetur veritatis voluptatibus minima. Facilis architecto atque placeat porro nam excepturi odit aspernatur sapiente, doloremque culpa eveniet ex veniam! Distinctio hic, veritatis ipsum perferendis doloremque consequatur? Natus cum culpa earum esse eum consequuntur praesentium odio consectetur minima dignissimos amet facere consequatur ut quibusdam blanditiis repudiandae omnis assumenda, laboriosam repellat est neque illum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ullam atque esse expedita voluptas doloremque facilis, assumenda nemo adipisci! Earum quasi tempore ea quibusdam quae eos, molestiae asperiores beatae ipsum autem consectetur animi, repellat totam hic aspernatur obcaecati itaque ex enim dolore adipisci deserunt tenetur veritatis voluptatibus minima. Facilis architecto atque placeat porro nam excepturi odit aspernatur sapiente, doloremque culpa eveniet ex veniam! Distinctio hic, veritatis ipsum perferendis doloremque consequatur? Natus cum culpa earum esse eum consequuntur praesentium odio consectetur minima dignissimos amet facere consequatur ut quibusdam blanditiis repudiandae omnis assumenda, laboriosam repellat est neque illum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ullam atque esse expedita voluptas doloremque facilis, assumenda nemo adipisci! Earum quasi tempore ea quibusdam quae eos, molestiae asperiores beatae ipsum autem consectetur animi, repellat totam hic aspernatur obcaecati itaque ex enim dolore adipisci deserunt tenetur veritatis voluptatibus minima. Facilis architecto atque placeat porro nam excepturi odit aspernatur sapiente, doloremque culpa eveniet ex veniam! Distinctio hic, veritatis ipsum perferendis doloremque consequatur? Natus cum culpa earum esse eum consequuntur praesentium odio consectetur minima dignissimos amet facere consequatur ut quibusdam blanditiis repudiandae omnis assumenda, laboriosam repellat est neque illum?  ",
            },
            web: {
              title: "Fsektionen.se hemsida",
              teaser:
                "Hemsidan för min studentkår vid Lunds Tekniska Högskola.",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ullam atque esse expedita voluptas doloremque facilis, assumenda nemo adipisci! Earum quasi tempore ea quibusdam quae eos, molestiae asperiores beatae ipsum autem consectetur animi, repellat totam hic aspernatur obcaecati itaque ex enim dolore adipisci deserunt tenetur veritatis voluptatibus minima. Facilis architecto atque placeat porro nam excepturi odit aspernatur sapiente, doloremque culpa eveniet ex veniam! Distinctio hic, veritatis ipsum perferendis doloremque consequatur? Natus cum culpa earum esse eum consequuntur praesentium odio consectetur minima dignissimos amet facere consequatur ut quibusdam blanditiis repudiandae omnis assumenda, laboriosam repellat est neque illum? ",
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
