"use client";
import { useTranslation } from "react-i18next";
import Navbar from "../../components/navbar";
import Link from "next/link";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1 w-full">
        <div className="mx-auto w-full max-w-3xl px-6 py-10 flex flex-col gap-4 text-foreground">
          {children}
        </div>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto w-full max-w-3xl px-6 py-5 text-center">
          <Link
            href="/projects/portfolio"
            className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            {t("footer")}
          </Link>
        </div>
      </footer>
    </div>
  );
}
