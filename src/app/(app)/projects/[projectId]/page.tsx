import ProjectPageClient from "./projectpageclient";

// Define static projects (for generateStaticParams)
const projects = {
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

export async function generateStaticParams() {
  return Object.keys(projects).map((projectId) => ({ projectId }));
}

// Marking this component async is often required so that Next.js can handle dynamic route parameters
export default async function ProjectPage({
  params,
}: {
  params: { projectId: string };
}) {
  const { projectId } = params;

  // Here you might fetch data or perform other async operations if needed
  // For now, we’re just passing projectId to the client component
  return <ProjectPageClient projectId={projectId} />;
}
