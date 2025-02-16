import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientI18nProvider from "./clienti18nprovider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "A portfolio website",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = cookies();
  const langCookie = (await cookieStore).get("i18next")?.value || "en";

  return (
    <html lang={langCookie}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientI18nProvider initialLanguage={langCookie}>
          {children}
        </ClientI18nProvider>
      </body>
    </html>
  );
}
