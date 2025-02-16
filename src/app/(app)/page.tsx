"use client";

import React from "react";
import FadeInDown from "@/components/fadein";
import { useTranslation } from "react-i18next";
import "../../../i18n";

export default function Home() {
  const { t } = useTranslation();
  return (
    <div className="relative -z-10">
      <FadeInDown>
        <h1 className="font-black text-5xl underline text-black dark:text-white">
          {t("home.title")}
        </h1>
        <br />
        <p className="text-black dark:text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque non
          nam quos consequatur sit ratione sed cupiditate dolore id, eaque iure
          distinctio voluptatem magni commodi explicabo nihil beatae praesentium
          doloribus.
        </p>
      </FadeInDown>
    </div>
  );
}
