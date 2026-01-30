"use client";

import React from "react";
import FadeInDown from "@/components/fadein";
import { Trans, useTranslation } from "react-i18next";
import Obfuscate from "react-obfuscate";

export default function Page() {
  const { t } = useTranslation();
  // Build email from pieces, you can never be too safe
  const name = ["web.", "contact"].join("");
  const domain = ["geo", "rgelgeback"].join("");
  const email = `${name}${String.fromCharCode(64)}${domain}.${"com"}`;
  return (
    <>
      <FadeInDown>
        <h1 className="font-black text-5xl underline">{t("contact.title")}</h1>
        <br />
        <p className="text-left">
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
          <Obfuscate
            email={email}
            style={{ textDecoration: "underline", display: "inline-block" }}
          />
        </p>
      </FadeInDown>
    </>
  );
}
