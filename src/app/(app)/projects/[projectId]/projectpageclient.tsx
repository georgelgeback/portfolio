"use client";

import { useTranslation, Trans } from "react-i18next";
import FadeInDown from "@/components/fadein";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type ProjectData = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

// Define static projects (or import them if shared)
const projects: Record<string, ProjectData> = {
  portfolio: {
    title: "projects.portfolio.title",
    description: "projects.portfolio.description",
    image: "/portfolio.png",
    imageAlt: "a very meta image of the portfolio",
  },
  web: {
    title: "projects.web.title",
    description: "projects.web.description",
    image: "/web.png",
    imageAlt: "projects.web.imageAlt",
  },
};

interface ClientProjectPageProps {
  projectId: string;
}

export default function ProjectPageClient({
  projectId,
}: ClientProjectPageProps) {
  const { t } = useTranslation();
  const projectData = projects[projectId] || {
    title: "Unknown Project",
    description: "This project does not exist.",
    image: "/images/default.jpg",
    imageAlt: "Default image",
  };

  return (
    <div className="relative w-full">
      <div className="fixed top-40 lg:left-[calc(33%-7rem)] md:left-[calc(25%-7rem)] z-50">
        <Link href="/projects">
          <button className="p-2.5 bg-primary-foreground rounded-lg shadow hover:bg-gray-100 hover:dark:bg-zinc-800 transition">
            <ArrowLeft size={24} />
          </button>
        </Link>
      </div>

      <FadeInDown>
        <div className="mx-auto max-w-3xl p-4">
          <h1 className="font-black text-5xl underline">
            {t(projectData.title)}
          </h1>
          <br />
          <img
            src={projectData.image}
            alt={t(projectData.imageAlt)}
            className="w-full h-auto rounded-lg shadow-md"
          />
          <br />
          <p className="whitespace-pre-line text-left">
            <Trans i18nKey={projectData.description}>
              Placeholder text
              <a
                href="https://github.com/georgelgeback/portfolio"
                className="underline"
                target="_blank"
              >
                Placeholder text
              </a>
              <Link href="/projects/web" className="underline">
                Placeholder text
              </Link>
            </Trans>
          </p>
        </div>
      </FadeInDown>
    </div>
  );
}
