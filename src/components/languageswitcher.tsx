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
    console.log("Initial language:", initialLanguage);
    setLanguage(initialLanguage);
  }, [i18n.resolvedLanguage]);

  const handleLanguageChange = (lng: string) => {
    if (language !== lng) {
      i18n.changeLanguage(lng).then(() => {
        // Update localStorage and cookie
        localStorage.setItem("i18nextLng", lng);
        document.cookie = `i18next=${lng}; path=/`;
        setLanguage(lng);
      });
    }
  };

  const languages = {
    en: { flag: "/flags/gb.svg", alt: "English" },
    sv: { flag: "/flags/se.svg", alt: "Swedish" },
  } as const;

  type LanguageKey = keyof typeof languages;

  // Hydration mismatch workaround
  if (!language) return null;

  return (
    <div className="flex gap-2">
      {Object.keys(languages).map((lng) => {
        const key = lng as LanguageKey;
        return (
          <button
            key={lng}
            onClick={() => handleLanguageChange(lng)}
            className={`p-1 transition-opacity ${
              language === lng ? "opacity-100" : "opacity-50 hover:opacity-100"
            }`}
          >
            <Image
              src={languages[key].flag}
              alt={languages[key].alt}
              width={24}
              height={16}
            />
          </button>
        );
      })}
    </div>
  );
};

export default LanguageSwitcher;
