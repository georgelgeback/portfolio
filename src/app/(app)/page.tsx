"use client";

import React from "react";
import FadeInDown from "@/components/fadein";
import { useTranslation } from "react-i18next";
import "../../../i18n";
import Link from "next/link";

export default function Home() {
  const { t } = useTranslation();
  return (
    <>
      <FadeInDown>
        <h1 className="font-black text-5xl underline">{t("home.title")}</h1>
        <br />
        <p className="">
          {t("home.description")}{" "}
          <Link href="/contact" className="underline">
            {t("home.link")}
          </Link>
        </p>
      </FadeInDown>
    </>
  );
}
