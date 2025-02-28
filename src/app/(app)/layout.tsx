"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import "../../../i18n";
import Navbar from "../../components/navbar";
import Link from "next/link";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Avoid mismatched rendering on initial hydration

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow flex justify-center w-full p-8 pt-0 flex-1">
        <div className="text-center flex flex-col lg:w-[calc(33%+10rem)] md:w-[calc(50%+10rem)] sm:w-full">
          <div className="flex flex-col gap-4 m-4">{children}</div>
        </div>
      </main>

      <footer className="text-center text-sm p-4 bg-primary-foreground">
        <Link href="/projects/portfolio">{t("footer")}</Link>
      </footer>
    </div>
  );
}
