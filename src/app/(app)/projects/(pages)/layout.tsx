"use client";

import FadeInDown from "@/components/fadein";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ProjectLayout({ children }: { children: React.ReactNode }) {

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
        <div className="prose dark:prose-invert min-w-full text-left lg:p-4">
          {children}
        </div>
      </FadeInDown>
    </div>
  );
}
