"use client";

import FadeInDown from "@/components/fadein";
import { useTranslation } from "react-i18next";
import CustomCard from "@/components/card";
import dynamic from "next/dynamic";

const MDXPages: Record<string, React.ComponentType> = {
  sv: dynamic(() => import("./home.sv.mdx")),
  en: dynamic(() => import("./home.en.mdx")),
};

const projects = [
  {
    key: "portfolio",
    imageUrl: "/portfolio.png",
    pageRoute: "projects/portfolio",
  },
  {
    key: "web",
    imageUrl: "/web.png",
    pageRoute: "projects/web",
  },
  {
    key: "app",
    imageUrl: "/app.png",
    directLink: "https://github.com/fsek/App2",
  },
] as const;

export default function Home() {
  const { t, i18n } = useTranslation();
  const SelectedPage = MDXPages[i18n.language] ?? MDXPages.sv;
  return (
    <>
      <FadeInDown>
        <p className="mb-2 font-mono text-xs tracking-widest text-primary">
          ~/
        </p>
        <div className="prose dark:prose-invert min-w-full text-left">
          <SelectedPage />
        </div>
        <p className="mt-4 text-left">{t("projects.description")}</p>
        <div className="mt-6 flex w-full flex-col gap-5">
          {projects.map((p, i) => (
            <CustomCard
              key={p.key}
              index={String(i + 1).padStart(2, "0")}
              title={t(`projects.${p.key}.title`)}
              description={t(`projects.${p.key}.teaser`)}
              imageUrl={p.imageUrl}
              pageRoute={"pageRoute" in p ? p.pageRoute : undefined}
              directLink={"directLink" in p ? p.directLink : undefined}
            />
          ))}
        </div>
      </FadeInDown>
    </>
  );
}
