"use client";

import dynamic from "next/dynamic";
import { useTranslation } from "react-i18next";
import { Technology } from "@/components/ProjectLinksCard";
import {
  siTypescript,
  siNextdotjs,
  siReact,
  siTailwindcss,
  siShadcnui,
  siI18next,
  siFastapi,
  siPostgresql,
  siSqlalchemy,
  siMdx,
} from "simple-icons";

export const technologies: Technology[] = [
  { name: "TypeScript", icon: siTypescript.path },
  { name: "Next.js", icon: siNextdotjs.path },
  { name: "React", icon: siReact.path },
  {
    name: "Tailwind CSS",
    icon: siTailwindcss.path,
  },
  { name: "Shadcn UI", icon: siShadcnui.path },
  { name: "i18next", icon: siI18next.path },
  { name: "FastAPI", icon: siFastapi.path },
  {
    name: "PostgreSQL",
    icon: siPostgresql.path,
  },
  { name: "SQLAlchemy", icon: siSqlalchemy.path },
  { name: "MDX", icon: siMdx.path },
];

const MDXPages: Record<string, React.ComponentType> = {
  sv: dynamic(() => import("./page.sv.mdx")),
  en: dynamic(() => import("./page.en.mdx")),
};

export default function AboutPage() {
  const { i18n } = useTranslation();
  const SelectedPage = MDXPages[i18n.language] ?? MDXPages.sv;

  return (
    <main>
      <SelectedPage />
    </main>
  );
}
