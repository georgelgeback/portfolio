import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState<string | null>(null);

  useEffect(() => {
    // Retrieve language from localStorage or use i18n's resolvedLanguage or default to 'en'
    const storedLanguage = localStorage.getItem("i18nextLng");
    const initialLanguage = storedLanguage || i18n.resolvedLanguage || "en";
    setLanguage(initialLanguage);
  }, [i18n.resolvedLanguage]);

  const handleLanguageToggle = () => {
    const nextLanguage = language === "en" ? "sv" : "en";
    i18n.changeLanguage(nextLanguage).then(() => {
      localStorage.setItem("i18nextLng", nextLanguage);
      document.cookie = `i18next=${nextLanguage}; path=/`;
      setLanguage(nextLanguage);
    });
  };

  const languages = {
    en: { flag: "/flags/gb.svg", alt: "English" },
    sv: { flag: "/flags/se.svg", alt: "Swedish" },
  } as const;

  // Hydration mismatch workaround
  if (!language) return null;

  return (
    <button
      onClick={handleLanguageToggle}
      className="p-2 bg-transparent border-2 border-transparent hover:border-primary rounded-lg aspect-[1/1] cursor-pointer"
    >
      <Image
        src={languages[language as keyof typeof languages].flag}
        alt={languages[language as keyof typeof languages].alt}
        width={24}
        height={16}
      />
    </button>
  );
};

export default LanguageSwitcher;
