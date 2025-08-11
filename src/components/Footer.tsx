import { Heart } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t, language } = useLanguage();
  
  const quickLinks = language === "fr" 
    ? [
      { label: "Accueil", href: "#home" },
      { label: "À propos", href: "#about" },
      { label: "Compétences", href: "#devops" },
      { label: "Projets", href: "#projects" },
      { label: "GitHub", href: "#interactive" },
      { label: "CLI", href: "#cli" },
      { label: "Contact", href: "#contact" },
    ]
    : [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Skills", href: "#devops" },
      { label: "Projects", href: "#projects" },
      { label: "GitHub", href: "#interactive" },
      { label: "CLI", href: "#cli" },
      { label: "Contact", href: "#contact" },
    ];
  
  const coreSkills = language === "fr"
    ? ["DevOps", "Génie Logiciel", "Cloud", "CI/CD", "Kubernetes", "Docker", "Spring Boot"]
    : ["DevOps", "Software Engineering", "Cloud", "CI/CD", "Kubernetes", "Docker", "Spring Boot"];
  
  return (
    <footer className="bg-muted/50 dark:bg-muted/10 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and short description */}
          <div>
            <h3 className="text-2xl font-playfair font-bold text-lavender mb-4">Wiame Yousfi</h3>
            <p className="text-muted-foreground mb-6">
              {language === "fr" 
                ? "Ingénieure Logiciel et spécialiste DevOps construisant des solutions élégantes pour des défis complexes."
                : "Software Engineer and DevOps specialist building elegant solutions for complex challenges."}
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/yousfiwiame"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-lavender transition-colors duration-300"
                aria-label="Visit GitHub profile"
              >
                <img
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/github.svg"
                  alt="GitHub"
                  className="w-5 h-5 dark:invert"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/wiame-yousfi-2a989a243/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-lavender transition-colors duration-300"
                aria-label="Visit LinkedIn profile"
              >
                <img
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/linkedin.svg"
                  alt="LinkedIn"
                  className="w-5 h-5 dark:invert"
                />
              </a>
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="text-lg font-bold mb-4">{language === "fr" ? "Liens Rapides" : "Quick Links"}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-lavender transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Skills */}
          <div>
            <h3 className="text-lg font-bold mb-4">{language === "fr" ? "Compétences principales" : "Core Skills"}</h3>
            <div className="flex flex-wrap gap-2">
              {coreSkills.map((skill, index) => (
                <span 
                  key={index}
                  className="px-2 py-1 text-xs rounded-full bg-lavender/10 text-muted-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">{language === "fr" ? "Contact" : "Contact"}</h3>
            <p className="text-muted-foreground mb-1">wiame.yousfi22@gmail.com</p>
            <p className="text-muted-foreground">Rabat, Maroc</p>
            <p className="text-muted-foreground mt-1">+212 6 74 98 44 99</p>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-border mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © {currentYear} Wiame Yousfi. {language === "fr" ? "Tous droits réservés." : "All rights reserved."}
          </p>
          <p className="text-muted-foreground text-sm flex items-center">
            {language === "fr" ? "Construit avec " : "Built with "} 
            <Heart size={14} className="text-secondary mx-1" /> 
            {language === "fr" ? " en utilisant React & TailwindCSS" : " using React & TailwindCSS"}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
