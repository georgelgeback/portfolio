"use client";

import { ReactNode, useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "../../i18n";

type Props = {
  children: ReactNode;
  initialLanguage: string;
};

export default function ClientI18nProvider({
  children,
  initialLanguage,
}: Props) {
  useEffect(() => {
    if (i18n.resolvedLanguage !== initialLanguage) {
      i18n.changeLanguage(initialLanguage);
    }
  }, [initialLanguage]);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
