import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const DarkModeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState<boolean | null>(null); // Start as null to avoid hydration mismatch

  useEffect(() => {
    const saved = localStorage.getItem("darkMode");
    if (saved !== null) {
      setIsDark(saved === "true");
    } else {
      setIsDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
  }, []);

  useEffect(() => {
    if (isDark !== null) {
      if (isDark) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("darkMode", "true");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("darkMode", "false");
      }
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark((prev) => !prev)}
      className="p-2 bg-transparent border-2 border-transparent hover:border-primary rounded-lg aspect-[1/1] inline-flex items-center justify-center flex-none group"
      aria-label="Toggle dark mode"
    >
      {isDark === null ? null : isDark ? (
        <Sun className="w-5 h-5 text-secondary-foreground group-hover:text-primary" />
      ) : (
        <Moon className="w-5 h-5 text-secondary-foreground group-hover:text-primary" />
      )}
    </button>
  );
};

export default DarkModeToggle;
