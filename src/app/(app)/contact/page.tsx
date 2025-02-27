"use client";

import React from "react";
import FadeInDown from "@/components/fadein";
import { useTranslation } from "react-i18next";

export default function Page() {
  const { t } = useTranslation();
  return (
    <>
      <FadeInDown>
        <h1 className="font-black text-5xl underline">{t("contact.title")}</h1>
        <br />
        <p>
          {t("contact.description")}
          <a href="mailto:MAIL"> MAIL</a>{" "}
        </p>
      </FadeInDown>
    </>
  );
}
