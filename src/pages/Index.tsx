import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import DevOps from "../components/DevOps";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import AnimatedSection from "../components/AnimatedSection";
import Interactive from "../components/Interactive";
import InteractiveCLI from "../components/ui/InteractiveCLI";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Index = () => {
  const { pathname, hash } = useLocation();
  
  // Handle smooth scrolling to anchors and ensure page starts at top
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      // If no hash, scroll to top
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  // Ensure page starts at top on initial load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Header />
      <Hero />
      
      <AnimatedSection animationType="fade-up" id="about">
        <About />
      </AnimatedSection>

      <AnimatedSection animationType="fade-up" id="devops">
        <DevOps />
      </AnimatedSection>

      <AnimatedSection animationType="scale-in" id="projects">
        <Projects />
      </AnimatedSection>

      <AnimatedSection animationType="slide-in">
        <Interactive />
      </AnimatedSection>

      <AnimatedSection animationType="fade-up" id="cli">
        <InteractiveCLI />
      </AnimatedSection>

      <AnimatedSection animationType="fade-up" id="contact">
        <Contact />
      </AnimatedSection>

      <AnimatedSection animationType="fade-in" delay={300}>
        <Footer />
      </AnimatedSection>
    </div>
  );
};

export default Index;
