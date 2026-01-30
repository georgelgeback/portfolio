"use client";

import * as React from "react";
import { Globe, ExternalLink } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { siGithub } from "simple-icons";
import ProjectTimeline, {
  type Timeline,
  type TimelinePoint,
} from "@/components/ProjectTimeline";

// Small utility to merge classNames without relying on external utils
function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export type Technology = {
  name: string;
  icon?: string; // SVG string
  iconUrl?: string; // fallback for custom logos
};

// Re-export timeline types from the new component for convenience
export type {
  Timeline as ProjectTimelineType,
  TimelinePoint as ProjectTimelinePoint,
} from "@/components/ProjectTimeline";

export type ProjectLinksCardProps = {
  title: string;
  description?: string;
  codeUrl?: string;
  codeName?: string;
  websiteUrl?: string;
  websiteName?: string;
  technologies?: Technology[];
  className?: string;
  timeline?: Timeline;
};

export function ProjectLinksCard({
  title,
  description,
  codeUrl,
  codeName,
  websiteUrl,
  websiteName,
  technologies = [],
  className,
  timeline,
}: ProjectLinksCardProps) {
  const hasActions = Boolean(codeUrl || websiteUrl);

  return (
    <TooltipProvider delayDuration={200}>
      <Card
        className={cn(
          "group/card relative overflow-hidden border border-border/50 bg-gradient-to-b from-background to-muted/30 transition-shadow hover:shadow-xl",
          "rounded-xl",
          className
        )}
      >
        {/* subtle corner accent */}
        <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/10 blur-2xl transition-opacity opacity-0 group-hover/card:opacity-100" />

        <CardHeader className="flex flex-row items-start justify-between gap-4">
          <div className="min-w-0">
            <CardTitle className="truncate text-lg md:text-xl">
              {title}
            </CardTitle>
            {description ? (
              <CardDescription className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                {description}
              </CardDescription>
            ) : null}
          </div>
        </CardHeader>

        {technologies.length > 0 ? (
          <CardContent>
            <div className="flex flex-row justify-between gap-2">
              <div className="flex flex-wrap items-center gap-2">
                {technologies.map((tech) => (
                  <span key={tech.name}>
                    <Badge
                      variant="secondary"
                      className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs"
                    >
                      {tech.icon ? (
                        <span className="inline-flex h-4 w-4 items-center justify-center">
                          <svg
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                            fill="currentColor"
                          >
                            <path d={tech.icon} />
                          </svg>
                        </span>
                      ) : tech.iconUrl ? (
                        <img
                          src={tech.iconUrl}
                          alt={tech.name}
                          className="h-4 w-4 rounded-sm object-contain"
                          loading="lazy"
                          decoding="async"
                        />
                      ) : null}
                      <span className="whitespace-nowrap">{tech.name}</span>
                    </Badge>
                  </span>
                ))}
              </div>
              {hasActions ? (
                <div className="flex flex-col shrink-0 items-center gap-2">
                  {codeUrl ? (
                    <Button
                      variant="outline"
                      asChild
                      className="w-full group/gh hover:bg-muted justify-between"
                    >
                      <a
                        href={codeUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label="View source code on GitHub"
                        className="flex items-center w-full"
                      >
                        <span className="flex items-center justify-start min-w-0">
                          <svg
                            className="h-4 w-4 text-muted-foreground transition-colors group-hover/gh:text-foreground"
                            role="img"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d={siGithub.path} />
                          </svg>
                        </span>
                        <span className="flex-1 text-left ml-2 truncate">
                          {codeName}
                        </span>
                        <span className="flex items-center justify-end">
                          <ExternalLink className="ml-1 h-3.5 w-3.5 opacity-70 text-muted-foreground" />
                        </span>
                      </a>
                    </Button>
                  ) : null}

                  {websiteUrl ? (
                    <Button
                      variant="default"
                      asChild
                      className="w-full justify-between"
                    >
                      <a
                        href={websiteUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label="Open live website"
                        className="flex items-center w-full"
                      >
                        <span className="flex items-center justify-start min-w-0">
                          <Globe className="h-4 w-4" />
                        </span>
                        <span className="flex-1 text-left ml-2 truncate">
                          {websiteName}
                        </span>
                        <span className="flex items-center justify-end">
                          <ExternalLink className="ml-1 h-3.5 w-3.5 opacity-70" />
                        </span>
                      </a>
                    </Button>
                  ) : null}
                </div>
              ) : null}
            </div>
          </CardContent>
        ) : null}

        {/* Optional timeline */}
        {timeline ? (
          <CardContent
            className={cn(technologies.length > 0 ? "pt-0" : undefined)}
          >
            <ProjectTimeline timeline={timeline} />
          </CardContent>
        ) : null}

        <CardFooter className="pt-0">
          <div className="w-full text-right text-xs text-muted-foreground">
            {/* Placeholder for extra metadata if needed */}
          </div>
        </CardFooter>
      </Card>
    </TooltipProvider>
  );
}

export default ProjectLinksCard;
