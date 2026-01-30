import DarkModeToggle from "./themetoggle";
import LanguageSwitcher from "../components/languageswitcher";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);

  // text shadows to improve contrast on varied backgrounds
  const titleStyle = {
    textShadow: "0 1px 0 rgba(255,255,255,0.28)",
  };

  const linkStyle = {
    textShadow: "0 1px 0 rgba(255,255,255,0.2)",
  };

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
          bg-white/25 dark:bg-neutral-900/40 bg-clip-padding backdrop-blur-xl rounded-lg sticky top-0 z-50 m-5 transition-[margin] duration-300 ease-in-out border border-foreground/10
          ${scrolled ? "lg:mx-[calc(20%)] not-lg:mx-5 shadow-lg" : "mx-5"}
        `}
    >
      <header className="grid grid-cols-2 sm:grid-cols-3 items-center p-4 w-full">
        <div className="hidden sm:block">
          <h1 className="text-2xl font-bold" style={titleStyle}>
            Georg Elgebäck
          </h1>
        </div>
        <div className="flex justify-center">
          <nav className="w-full">
            <ul className="flex flex-row justify-center items-center text-base sm:text-lg md:text-xl space-x-2 sm:space-x-4">
              <li>
                <Link
                  href="/"
                  className="hover:text-primary/80"
                  style={linkStyle}
                >
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-primary/80"
                  style={linkStyle}
                >
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex justify-end gap-1">
          <DarkModeToggle />
          <LanguageSwitcher />
        </div>
      </header>
    </div>
  );
};

export default Navbar;
