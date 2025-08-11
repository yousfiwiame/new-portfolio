import { useState } from "react";
import { Button } from "./ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { Languages } from "lucide-react";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleLanguage = () => {
    setLanguage(language === "fr" ? "en" : "fr");
    setIsOpen(false);
  };
  
  return (
    <div className="relative">
      <Button
        onClick={() => setIsOpen(!isOpen)}
        variant="ghost"
        size="sm"
        className="flex items-center gap-2"
        aria-label="Change language"
      >
        <Languages size={20} />
        <span className="uppercase">{language}</span>
      </Button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white dark:bg-muted z-50 glass-card overflow-hidden">
          <div className="py-1">
            <button
              className={`${
                language === "fr" ? "bg-lavender/20" : ""
              } flex items-center w-full px-4 py-2 text-sm hover:bg-lavender/10`}
              onClick={() => {
                setLanguage("fr");
                setIsOpen(false);
              }}
            >
              Français
            </button>
            <button
              className={`${
                language === "en" ? "bg-lavender/20" : ""
              } flex items-center w-full px-4 py-2 text-sm hover:bg-lavender/10`}
              onClick={() => {
                setLanguage("en");
                setIsOpen(false);
              }}
            >
              English
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
