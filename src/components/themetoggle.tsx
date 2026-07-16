import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

const DarkModeToggle: React.FC = () => {
  const { resolvedTheme, setTheme } = useTheme();
  // Avoid hydration mismatch: the theme is only known on the client
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="p-2 rounded-md aspect-square inline-flex items-center justify-center flex-none group cursor-pointer hover:bg-muted"
      aria-label="Toggle dark mode"
    >
      {!mounted ? (
        <span className="w-4.5 h-4.5" />
      ) : resolvedTheme === "dark" ? (
        <Sun className="w-4.5 h-4.5 text-muted-foreground group-hover:text-foreground" />
      ) : (
        <Moon className="w-4.5 h-4.5 text-muted-foreground group-hover:text-foreground" />
      )}
    </button>
  );
};

export default DarkModeToggle;
