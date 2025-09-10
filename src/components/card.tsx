import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Link from "next/link";

interface CardProps {
  title: string;
  description: string;
  imageUrl?: string;
  altText?: string;
  pageRoute?: string;
  directLink?: string;
}

const CustomCard = ({
  title,
  description,
  imageUrl,
  altText = "Card image",
  pageRoute,
  directLink,
}: CardProps) => {
  const content = (
    <Card className="relative w-full aspect-[16/9] overflow-hidden rounded-lg border border-foreground/20 shadow-lg group">
      {imageUrl && (
        <img
          src={imageUrl}
          alt={altText}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          draggable={false}
        />
      )}
      <div className="absolute inset-0 flex items-end p-4 bg-black/5 group-hover:bg-black/20 transition-colors">
        <div className="w-full bg-background/60 p-3 rounded-lg backdrop-blur-md border border-white/20">
          <CardTitle className="text-primary font-semibold text-lg mb-1 text-left">
            {title}
          </CardTitle>
          <CardDescription className="text-sm text-card-foreground line-clamp-3 text-justify">
            {description}
          </CardDescription>
        </div>
      </div>
    </Card>
  );

  if (directLink) {
    return (
      <a
        href={directLink}
        target="_blank"
        rel="noopener noreferrer"
        className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-lg"
      >
        {content}
      </a>
    );
  }
  if (pageRoute) {
    return (
      <Link
        href={pageRoute}
        className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-lg"
      >
        {content}
      </Link>
    );
  }
  return content;
};

export default CustomCard;
