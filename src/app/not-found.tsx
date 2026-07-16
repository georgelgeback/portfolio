"use client";

import { useTranslation } from "react-i18next";

export default function NotFound() {
    const { t } = useTranslation();

    return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-background text-foreground">
        <span className="font-mono text-8xl font-bold tracking-tight text-primary">404</span>
        <span className="mt-4 text-lg text-muted-foreground">{t("notFound")}</span>
    </div>);
}
