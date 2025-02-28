"use client";
import { usePathname, useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import FadeInDown from "@/components/fadein";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type ProjectData = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

// TODO: Replace with API call when switching to a dynamic project list
const projects: Record<string, ProjectData> = {
  portfolio: {
    title: "projects.portfolio.title",
    description: "projects.portfolio.description",
    image: "https://http.cat/200",
    imageAlt: "projects.portfolio.imageAlt",
  },
  web: {
    title: "projects.web.title",
    description: "projects.web.description",
    image: "https://http.cat/418",
    imageAlt: "projects.web.imageAlt",
  },
};

export default function ProjectPage() {
  const { t } = useTranslation();
  const router = useRouter();
  const pathName = usePathname();
  const [projectData, setProjectData] = useState<ProjectData | null>(null);

  useEffect(() => {
    // Extract projectId from the URL path
    const pathParts = pathName.split("/");
    const projectId = pathParts[pathParts.length - 1];

    if (projects[projectId]) {
      setProjectData(projects[projectId]);
    } else {
      setProjectData({
        title: "Unknown Project",
        description: "This project does not exist.",
        image: "/images/default.jpg",
        imageAlt: "Default image",
      });
    }
  }, [pathName]);

  if (!projectData) return <p>Loading...</p>;

  return (
    <div className="relative w-full">
      <div className="fixed top-40 lg:left-[calc(33%-7rem)] md:left-[calc(25%-7rem)] z-50">
        {/* parent element has: lg:w-[calc(33%+10rem)] md:w-[calc(50%+10rem)] sm:w-full */}
        <Link href="/projects">
          <button className="p-3 bg-primary-foreground rounded-lg shadow hover:bg-gray-100 hover:dark:bg-zinc-800 transition">
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
          <p>{t(projectData.description)}</p>
        </div>
      </FadeInDown>
    </div>
  );
}
