import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  animationType?: "fade-up" | "fade-in" | "slide-in" | "scale-in";
  id?: string;
  delay?: number;
  className?: string;
}

const animations = {
  "fade-up": {
    initial: { opacity: 0, y: 100 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-20%" }
  },
  "fade-in": {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true, margin: "-20%" }
  },
  "slide-in": {
    initial: { opacity: 0, x: -100 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, margin: "-20%" }
  },
  "scale-in": {
    initial: { opacity: 0, scale: 0.9 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true, margin: "-20%" }
  }
};

const AnimatedSection = ({
  children,
  animationType = "fade-up",
  id,
  delay = 0,
  className = ""
}: AnimatedSectionProps) => {
  const animation = animations[animationType];

  return (
    <motion.section
      id={id}
      initial={animation.initial}
      whileInView={animation.whileInView}
      viewport={animation.viewport}
      transition={{
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
        delay: delay / 1000,
      }}
      className={`w-full min-h-[80vh] flex items-center justify-center py-20 ${className}`}
    >
      {/* Gradient overlays for smooth transitions */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top gradient overlay */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background via-background/90 to-transparent" />
        
        {/* Bottom gradient overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/90 to-transparent" />
      </div>

      {/* Content container */}
      <div className="w-full">
        {children}
      </div>
    </motion.section>
  );
};

export default AnimatedSection;
