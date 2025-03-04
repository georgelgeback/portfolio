"use client";

import React from "react";
import FadeInDown from "@/components/fadein";
import { useTranslation } from "react-i18next";
import CustomCard from "@/components/card";

export default function Page() {
  const { t } = useTranslation();
  return (
    <div>
      <FadeInDown>
        <h1 className="font-black text-5xl underline">{t("projects.title")}</h1>
        <br />
        <p>{t("projects.description")}</p>
        <div className="flex flex-col p-4 space-y-5 w-full">
          <CustomCard
            title={t("projects.portfolio.title")}
            description={t("projects.portfolio.teaser")}
            imageUrl="/portfolio.png"
            rightImage={false}
            pageRoute="projects/portfolio"
          ></CustomCard>
          <CustomCard
            title={t("projects.web.title")}
            description={t("projects.web.teaser")}
            imageUrl="/web.png"
            rightImage={true}
            pageRoute="projects/web"
          ></CustomCard>
          <CustomCard
            title={t("projects.app.title")}
            description={t("projects.app.teaser")}
            imageUrl="/app.png"
            rightImage={false}
            directLink="https://github.com/fsek/App2"
          ></CustomCard>
        </div>
      </FadeInDown>
    </div>
  );
}
