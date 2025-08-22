import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientI18nProvider from "./clienti18nprovider";
import { ThemeProvider } from 'next-themes'
import { headers } from "next/headers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio - Georg Elgebäck",
  description: "A portfolio website",
  icons: {
    icon: "/icon.png",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = await headers();
  const initialLanguage =
		(headersList.get("x-initial-language") as "sv" | "en") || "en";
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen w-full`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ClientI18nProvider initialLanguage={initialLanguage}>{children}</ClientI18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
