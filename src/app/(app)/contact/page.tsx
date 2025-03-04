"use client";

import React from "react";
import FadeInDown from "@/components/fadein";
import { Trans, useTranslation } from "react-i18next";

export default function Page() {
  const { t } = useTranslation();
  return (
    <>
      <FadeInDown>
        <h1 className="font-black text-5xl underline">{t("contact.title")}</h1>
        <br />
        <p>
          <Trans i18nKey="contact.description">
            <a
              href="https://www.linkedin.com/in/georg-elgeback/"
              className="underline"
              target="_blank"
            >
              Placeholder text
            </a>
            <a
              href="https://github.com/georgelgeback"
              className="underline"
              target="_blank"
            >
              Placeholder text
            </a>
          </Trans>
        </p>
      </FadeInDown>
    </>
  );
}
