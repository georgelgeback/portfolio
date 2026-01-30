"use client";

import FadeInDown from "@/components/fadein";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative w-full">
      <div className="fixed top-40 lg:left-[calc(33%-7rem)] md:left-[calc(25%-7rem)] z-50">
        <Link href="/">
          <button className="p-2.5 bg-secondary rounded-lg shadow hover:bg-primary group hidden md:block">
            <ArrowLeft
              size={24}
              className="text-secondary-foreground group-hover:text-primary-foreground"
            />
          </button>
        </Link>
      </div>

      <FadeInDown>
        <div className="prose dark:prose-invert min-w-full text-left lg:p-4">
          {children}
        </div>
      </FadeInDown>
    </div>
  );
}
