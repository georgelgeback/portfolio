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
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque non
          nam quos consequatur sit ratione sed cupiditate dolore id, eaque iure
          distinctio voluptatem magni commodi explicabo nihil beatae praesentium
          doloribus.
        </p>
        <div className="flex flex-col p-4 space-y-5 w-full">
          <CustomCard
            title={t("projects.portfolio.title")}
            description={t("projects.portfolio.teaser")}
            imageUrl="https://http.cat/200"
            rightImage={false}
            pageRoute="projects/portfolio"
          ></CustomCard>
          <CustomCard
            title={t("projects.web.title")}
            description={t("projects.web.teaser")}
            imageUrl="https://http.cat/418"
            rightImage={true}
            pageRoute="projects/web"
          ></CustomCard>
          <CustomCard title="Test" description="asodasi"></CustomCard>
          <CustomCard title="Test" description="asodasi"></CustomCard>
          <CustomCard title="Test" description="asodasi"></CustomCard>
        </div>
      </FadeInDown>
    </div>
  );
}
