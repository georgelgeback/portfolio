import DarkModeToggle from "./themetoggle";
import LanguageSwitcher from "../components/languageswitcher";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "/", label: t("nav.home") },
    { href: "/contact", label: t("nav.contact") },
  ];

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-50 bg-background border-b border-border transition-shadow duration-300 ${
        scrolled ? "shadow-[0_1px_8px_rgba(0,0,0,0.06)]" : ""
      }`}
    >
      <div className="mx-auto flex h-14 w-full max-w-3xl items-center justify-between gap-4 px-6">
        <Link href="/" className="min-w-0">
          <span className="block truncate text-base lg:text-xl font-semibold tracking-tight">
            Georg Elgebäck
          </span>
        </Link>

        <div className="flex items-center gap-1 sm:gap-2">
          <nav>
            <ul className="flex items-center gap-1">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative inline-flex h-14 items-center px-3 text-sm font-medium transition-colors ${
                      isActive(link.href)
                        ? "text-foreground after:absolute after:inset-x-3 after:bottom-0 after:h-0.5 after:bg-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="ml-1 flex items-center gap-0.5 border-l border-border pl-2 sm:pl-3">
            <DarkModeToggle />
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
