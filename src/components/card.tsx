import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

interface CardProps {
  title: string;
  description: string;
  imageUrl?: string;
  altText?: string;
}

const CustomCard = ({
  title,
  description,
  imageUrl,
  altText = "Card image",
}: CardProps) => {
  return (
    <Card className="w-full max-w-sm overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="p-4 flex gap-4 items-start">
        {imageUrl && (
          <div className="flex-shrink-0">
            <img
              src={imageUrl}
              alt={altText}
              className="w-16 h-16 rounded-full object-cover"
            />
          </div>
        )}

        <div className="flex-1">
          <CardTitle className="text-xl font-bold text-gray-800 mb-2">
            {title}
          </CardTitle>
          <CardDescription className="text-gray-600 line-clamp-2">
            {description}
          </CardDescription>
        </div>
      </div>
    </Card>
  );
};

export default CustomCard;
