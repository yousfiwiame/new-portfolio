import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Initialize theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else if (prefersDark) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative w-12 h-12 p-2 rounded-full glass-card flex items-center justify-center hover:scale-110 transition-all duration-300"
      aria-label="Toggle theme"
    >
      <Sun 
        className={`absolute text-yellow-500 transition-all duration-500 ${
          theme === "light" ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
        }`} 
        size={20} 
      />
      <Moon 
        className={`absolute text-lavender transition-all duration-500 ${
          theme === "dark" ? "opacity-100 rotate-0" : "opacity-0 rotate-90"
        }`} 
        size={20} 
      />
    </button>
  );
};

export default ThemeToggle;
