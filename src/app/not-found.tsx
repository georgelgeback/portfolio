"use client";

import { useTranslation } from "react-i18next";

export default function NotFound() {
    const { t } = useTranslation();

    return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-background text-foreground">
        <span className="text-9xl font-bold">404</span>
        <span className="text-xl">{t("notFound")}</span>
    </div>);
}
