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
  rightImage?: boolean;
  pageRoute?: string;
  directLink?: string;
}

const CardImage = (imageUrl: string, altText: string) => {
  return (
    <div className="flex-shrink-0">
      <img
        src={imageUrl}
        alt={altText}
        className="w-20 h-20 rounded-full object-cover"
      />
    </div>
  );
};

const CustomCard = ({
  title,
  description,
  imageUrl,
  altText = "Card image",
  rightImage = false,
  pageRoute,
  directLink,
}: CardProps) => {
  const CardImageComponent = (
    <div className="flex-shrink-0 hidden sm:block">
      <img
        src={imageUrl ?? ""}
        alt={altText}
        className="w-20 h-20 rounded-full object-cover"
      />
    </div>
  );

  const CardContent = (
    <Card className="w-full mx-auto overflow-hidden rounded-lg shadow-lg hover:shadow-xl dark:hover:opacity-80 transition-shadow dark:transition-opacity duration-300">
      <div className="p-4 flex gap-4 items-start">
        {imageUrl && !rightImage && CardImageComponent}
        <div className="flex-1 text-left mx-5">
          <CardTitle className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
            {title}
          </CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-300 line-clamp-3 text-justify">
            {description}
          </CardDescription>
        </div>
        {imageUrl && rightImage && CardImageComponent}
      </div>
    </Card>
  );

  if (directLink) {
    return (
      <a href={directLink} target="_blank">
        {CardContent}
      </a>
    );
  } else if (pageRoute) {
    return <Link href={pageRoute}>{CardContent}</Link>;
  }

  return CardContent;
};

export default CustomCard;
