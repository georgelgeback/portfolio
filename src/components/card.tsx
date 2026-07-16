import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

interface CardProps {
  title: string;
  description: string;
  imageUrl?: string;
  altText?: string;
  pageRoute?: string;
  directLink?: string;
  index?: string;
}

const CustomCard = ({
  title,
  description,
  imageUrl,
  altText = "Card image",
  pageRoute,
  directLink,
  index,
}: CardProps) => {
  const Arrow = directLink ? ArrowUpRight : ArrowRight;

  const content = (
    <article className="group w-full overflow-hidden rounded-lg border border-border bg-card transition-colors hover:border-primary/60">
      {imageUrl && (
        <div className="aspect-video w-full overflow-hidden border-b border-border">
          <img
            src={imageUrl}
            alt={altText}
            className="h-full w-full object-cover"
            draggable={false}
          />
        </div>
      )}
      <div className="flex items-start justify-between gap-4 p-5 text-left">
        <div className="min-w-0">
          {index && (
            <div className="mb-1.5 font-mono text-xs text-primary">{index}</div>
          )}
          <h3 className="text-lg font-semibold tracking-tight transition-colors group-hover:text-primary">
            {title}
          </h3>
          <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>
        </div>
        <Arrow className="mt-1 h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
      </div>
    </article>
  );

  if (directLink) {
    return (
      <a
        href={directLink}
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        {content}
      </a>
    );
  }
  if (pageRoute) {
    return (
      <Link
        href={pageRoute}
        className="block rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        {content}
      </Link>
    );
  }
  return content;
};

export default CustomCard;
