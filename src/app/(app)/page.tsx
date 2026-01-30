"use client";

import FadeInDown from "@/components/fadein";
import { useTranslation } from "react-i18next";
import CustomCard from "@/components/card";
import dynamic from "next/dynamic";

const MDXPages: Record<string, React.ComponentType> = {
  sv: dynamic(() => import("./home.sv.mdx")),
  en: dynamic(() => import("./home.en.mdx")),
};

export default function Home() {
  const { t, i18n } = useTranslation();
  const SelectedPage = MDXPages[i18n.language] ?? MDXPages.sv;
  return (
    <>
      <FadeInDown>
        <div className="prose dark:prose-invert min-w-full text-left">
          <SelectedPage />
        </div>
        <br />
        <p className="text-left">{t("projects.description")}</p>
        <div className="flex flex-col p-4 space-y-5 w-full">
          <CustomCard
            title={t("projects.portfolio.title")}
            description={t("projects.portfolio.teaser")}
            imageUrl="/portfolio.png"
            pageRoute="projects/portfolio"
          ></CustomCard>
          <CustomCard
            title={t("projects.web.title")}
            description={t("projects.web.teaser")}
            imageUrl="/web.png"
            pageRoute="projects/web"
          ></CustomCard>
          <CustomCard
            title={t("projects.app.title")}
            description={t("projects.app.teaser")}
            imageUrl="/app.png"
            directLink="https://github.com/fsek/App2"
          ></CustomCard>
        </div>
      </FadeInDown>
    </>
  );
}
