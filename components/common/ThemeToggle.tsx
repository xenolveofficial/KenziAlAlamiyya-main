import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="relative w-10 h-10 rounded-full">
        <span className="sr-only">Toggle theme</span>
      </Button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative w-10 h-10 rounded-full hover:bg-muted"
    >
      <Sun className={`h-5 w-5 transition-all ${isDark ? "rotate-90 scale-0" : "rotate-0 scale-100"} text-foreground absolute`} />
      <Moon className={`h-5 w-5 transition-all ${isDark ? "rotate-0 scale-100" : "-rotate-90 scale-0"} text-foreground absolute`} />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
