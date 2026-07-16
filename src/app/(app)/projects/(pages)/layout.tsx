"use client";

import FadeInDown from "@/components/fadein";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <div className="relative w-full">
      <div className="fixed top-20 left-[calc(50vw-24rem-4.5rem)] z-40 hidden lg:block">
        <Link href="/" aria-label="Back to home">
          <button className="group flex items-center justify-center p-2.5 rounded-md border border-border bg-background transition-colors hover:border-primary cursor-pointer">
            <ArrowLeft
              size={20}
              className="text-muted-foreground transition-colors group-hover:text-primary"
            />
          </button>
        </Link>
      </div>

      <FadeInDown>
        <p className="mb-2 text-left font-mono text-xs tracking-widest text-primary">
          ~{pathname}
        </p>
        <div className="prose dark:prose-invert min-w-full text-left">
          {children}
        </div>
      </FadeInDown>
    </div>
  );
}
