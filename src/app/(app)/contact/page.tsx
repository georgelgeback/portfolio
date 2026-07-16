"use client";

import React from "react";
import FadeInDown from "@/components/fadein";
import { Trans, useTranslation } from "react-i18next";
import Obfuscate from "react-obfuscate";

const linkClassName =
  "font-medium text-primary underline decoration-primary/40 underline-offset-4 transition-colors hover:text-accent-warm hover:decoration-accent-warm";

export default function Page() {
  const { t } = useTranslation();
  // Build email from pieces, you can never be too safe
  const name = ["web.", "contact"].join("");
  const domain = ["geo", "rgelgeback"].join("");
  const email = `${name}${String.fromCharCode(64)}${domain}.${"com"}`;
  return (
    <>
      <FadeInDown>
        <div className="text-left">
          <p className="mb-2 font-mono text-xs tracking-widest text-primary">
            ~/contact
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground after:mt-0.5 after:block after:h-[3px] after:w-10 after:bg-primary after:content-['']">
            {t("contact.title")}
          </h2>
          <p className="mt-6 leading-relaxed">
            <Trans i18nKey="contact.description">
              <a
                href="https://www.linkedin.com/in/georg-elgeback/"
                className={linkClassName}
                target="_blank"
              >
                Placeholder text
              </a>
              <a
                href="https://github.com/georgelgeback"
                className={linkClassName}
                target="_blank"
              >
                Placeholder text
              </a>
            </Trans>
            <span className={linkClassName}>
              <Obfuscate email={email} />
            </span>
          </p>
        </div>
      </FadeInDown>
    </>
  );
}
