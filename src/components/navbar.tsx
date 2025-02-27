import DarkModeToggle from "./themetoggle";
import LanguageSwitcher from "../components/languageswitcher";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`
          bg-gray-100 dark:bg-zinc-800 rounded-lg sticky top-0 z-50 m-5 transition-[margin] duration-300 ease-in-out
          ${scrolled ? "lg:mx-[calc(20%)] not-lg:mx-5 shadow" : "mx-5"}
        `}
    >
      <header className="grid grid-cols-3 items-center p-4 w-full">
        <div>
          <h1 className="text-2xl font-bold">Georg Elgebäck</h1>
        </div>
        <div className="flex justify-center">
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link
                  href="/"
                  className="hover:text-gray-700 dark:hover:text-gray-400"
                >
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="hover:text-gray-700 dark:hover:text-gray-400"
                >
                  {t("nav.projects")}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-gray-700 dark:hover:text-gray-400"
                >
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex justify-end">
          <DarkModeToggle />
          <LanguageSwitcher />
        </div>
      </header>
    </div>
  );
};

export default Navbar;
