import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";
import { ChevronDown, Github, Linkedin, Download, Sparkles, Heart } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "./ui/button";
import Interactive3DButton from "./ui/Interactive3DButton";
import '../index.css'

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { t, language } = useLanguage();

  // Create sparkle effect
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const createSparkle = (e: MouseEvent) => {
      const sparkle = document.createElement("div");
      sparkle.className = "sparkle";

      // Position sparkle at mouse position
      sparkle.style.left = `${e.pageX - hero.offsetLeft}px`;
      sparkle.style.top = `${e.pageY - hero.offsetTop}px`;

      hero.appendChild(sparkle);

      // Remove sparkle after animation completes
      setTimeout(() => {
        sparkle.remove();
      }, 1500);
    };

    hero.addEventListener("mousemove", createSparkle);

    return () => {
      hero.removeEventListener("mousemove", createSparkle);
    };
  }, []);

  const downloadResume = (lang: "fr" | "en") => {
    // Create links to download resume files
    const filename = lang === "fr" ? "CV_Wiame_Yousfi_FR.pdf" : "CV_Wiame_Yousfi_EN.pdf";
    const link = document.createElement("a");
    link.href = `/resumes/${filename}`;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Get the roles array manually from translations to avoid type issues
  const getRoles = (): string[] => {
    if (language === "fr") {
      return ["Ingénieure Logiciel", "Ingénieure DevOps", "Développeuse Full Stack", "Enthousiaste Cloud"];
    } else {
      return ["Software Engineer", "DevOps Engineer", "Full Stack Developer", "Cloud Enthusiast"];
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center items-center pt-20 pb-20 overflow-hidden section-padding"
    >
      {/* Static wave-like background pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blush/20 via-transparent to-lavender/20 dark:from-blush/10 dark:to-lavender/10"></div>
        
        {/* Wave-like lines pattern */}
        <div className="absolute inset-0 opacity-20">
          {/* Horizontal wave lines */}
          <div className="absolute top-20 left-0 right-0 h-px bg-gradient-to-r from-transparent via-lavender/40 to-transparent"></div>
          <div className="absolute top-40 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blush/40 to-transparent"></div>
          <div className="absolute top-60 left-0 right-0 h-px bg-gradient-to-r from-transparent via-lavender/30 to-transparent"></div>
          <div className="absolute top-80 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blush/30 to-transparent"></div>
          <div className="absolute top-[100px] left-0 right-0 h-px bg-gradient-to-r from-transparent via-lavender/20 to-transparent"></div>
          <div className="absolute top-[120px] left-0 right-0 h-px bg-gradient-to-r from-transparent via-blush/20 to-transparent"></div>
          
          <div className="absolute bottom-40 left-0 right-0 h-px bg-gradient-to-r from-transparent via-lavender/40 to-transparent"></div>
          <div className="absolute bottom-60 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blush/40 to-transparent"></div>
          <div className="absolute bottom-80 left-0 right-0 h-px bg-gradient-to-r from-transparent via-lavender/30 to-transparent"></div>
          <div className="absolute bottom-[100px] left-0 right-0 h-px bg-gradient-to-r from-transparent via-blush/30 to-transparent"></div>
          <div className="absolute bottom-[120px] left-0 right-0 h-px bg-gradient-to-r from-transparent via-lavender/20 to-transparent"></div>
          <div className="absolute bottom-[140px] left-0 right-0 h-px bg-gradient-to-r from-transparent via-blush/20 to-transparent"></div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute w-96 h-96 rounded-full bg-lavender/20 dark:bg-lavender/10 filter blur-3xl top-20 -left-48"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
          className="absolute w-96 h-96 rounded-full bg-blush/20 dark:bg-blush/10 filter blur-3xl bottom-20 -right-48"
        />
      </div>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 text-center lg:text-left"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 mt-8"
          >
            {t("hero.greeting")} <span className="text-lavender">Wiame</span> 
            <motion.span
              animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1 }}
              className="inline-block"
            >
              👋
            </motion.span>
          </motion.h1>

          <div className="text-2xl md:text-3xl font-medium mb-6 h-12">
            <AnimatedText
              texts={getRoles()}
              className="text-blush dark:text-secondary min-h-[2rem]"
            />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto lg:mx-0"
          >
            {t("hero.description")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-8"
          >
            <Interactive3DButton
              href="#projects"
              variant="primary"
              size="lg"
              icon={Sparkles}
            >
              {t("hero.viewProjects")}
            </Interactive3DButton>
            <Interactive3DButton
              href="#contact"
              variant="outline"
              size="lg"
              icon={Heart}
            >
              {t("hero.contact")}
            </Interactive3DButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
            className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-12"
          >
            <Interactive3DButton
              onClick={() => downloadResume("fr")}
              variant="secondary"
              size="md"
              icon={Download}
            >
              {t("download.resume")}
            </Interactive3DButton>
            <Interactive3DButton
              onClick={() => downloadResume("en")}
              variant="secondary"
              size="md"
              icon={Download}
            >
              {t("download.resume.en")}
            </Interactive3DButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
            className="flex justify-center lg:justify-start gap-4"
          >
            <Interactive3DButton
              href="https://github.com/yousfiwiame"
              target="_blank"
              rel="noopener noreferrer"
              variant="ghost"
              size="sm"
              icon={Github}
              className="!p-3"
            />
            <Interactive3DButton
              href="https://www.linkedin.com/in/wiame-yousfi-2a989a243/"
              target="_blank"
              rel="noopener noreferrer"
              variant="ghost"
              size="sm"
              icon={Linkedin}
              className="!p-3"
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          className="lg:col-span-5"
        >
          <div className="relative flex items-center justify-center animate-egg-float">
            <div className="w-[350px] h-[450px] relative overflow-hidden bg-white/20 backdrop-blur-md animate-wavy-float rounded-[42%_58%_70%_30%/45%_45%_55%_55%]">
              <motion.img
                initial={{ scale: 1.1 }}
                animate={{ scale: [1.1, 1.15, 1.1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                src="/WiameYousfi.jpg"
                alt="Wiame Yousfi"
                className="w-full h-full object-cover rounded-[42%_58%_70%_30%/45%_45%_55%_55%] morph-smooth float-smooth"
              />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 1.2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.a
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          href="#about"
          aria-label="Scroll to about section"
        >
          <ChevronDown size={32} className="text-lavender" />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
