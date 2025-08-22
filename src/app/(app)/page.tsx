"use client";

import React from "react";
import FadeInDown from "@/components/fadein";
import { useTranslation } from "react-i18next";
import Link from "next/link";

export default function Home() {
  const { t } = useTranslation();
  return (
    <>
      <FadeInDown>
        <h1 className="font-black text-5xl underline">{t("home.title")}</h1>
        <br />
        <p className="">
          {t("home.description1")}
          <a href="https://github.com/georgelgeback" className="underline">
            {t("home.gitHub")}
          </a>
          {t("home.description2")}
          <Link href="/projects" className="underline">
            {t("home.link")}
          </Link>
        </p>
      </FadeInDown>
    </>
  );
}
