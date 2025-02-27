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
}

const CustomCard = ({
  title,
  description,
  imageUrl,
  altText = "Card image",
  rightImage = false,
  pageRoute,
}: CardProps) => {
  return (
    <Link href={pageRoute ?? ""}>
      <Card className="w-full mx-auto overflow-hidden rounded-lg shadow-lg hover:shadow-xl dark:hover:opacity-80 transition-shadow dark:transition-opacity duration-300">
        <div className="p-4 flex gap-4 items-start">
          {imageUrl && !rightImage && (
            <div className="flex-shrink-0">
              <img
                src={imageUrl}
                alt={altText}
                className="w-32 h-32 rounded-full object-cover"
              />
            </div>
          )}

          <div className="flex-1 text-left mx-5">
            <CardTitle className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
              {title}
            </CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-300 line-clamp-5 text-justify">
              {description}
            </CardDescription>
          </div>

          {imageUrl && rightImage && (
            <div className="flex-shrink-0">
              <img
                src={imageUrl}
                alt={altText}
                className="w-32 h-32 rounded-full object-cover"
              />
            </div>
          )}
        </div>
      </Card>
    </Link>
  );
};

export default CustomCard;
