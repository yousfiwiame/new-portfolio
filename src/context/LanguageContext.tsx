import React, { createContext, useState, useContext, ReactNode } from "react";

type Language = "fr" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

interface TranslationItem {
  fr: string | string[];
  en: string | string[];
}

const translations: Record<string, TranslationItem> = {
  // Hero Section
  "hero.greeting": {
    fr: "Salut, je suis",
    en: "Hello, I'm"
  },
  "hero.roles": {
    fr: ["Ingénieure Logiciel", "Enthousiaste DevOps", "Développeuse Full Stack", "Spécialiste Cloud"],
    en: ["Software Engineer", "DevOps Enthusiast", "Full Stack Developer", "Cloud Specialist"]
  },
  "hero.description": {
    fr: "Je construis des infrastructures évolutives, automatise les déploiements et conçois des solutions élégantes pour des problèmes complexes.",
    en: "I build scalable infrastructure, automate deployments, and craft elegant solutions to complex problems."
  },
  "hero.viewProjects": {
    fr: "Voir mes projets",
    en: "View My Projects"
  },
  "hero.contact": {
    fr: "Me contacter",
    en: "Get in Touch"
  },
  
  // About Section
  "about.title": {
    fr: "À propos de moi",
    en: "About Me"
  },
  "about.subtitle": {
    fr: "Qui suis-je",
    en: "Who I Am"
  },
  "about.description1": {
    fr: "Bonjour ! Je m'appelle Wiame Yousfi et je suis passionnée par la création de systèmes logiciels robustes et évolutifs. Mon intérêt pour l'ingénierie logicielle a commencé pendant mes classes préparatoires, où j'ai découvert mon amour pour la résolution de problèmes et l'informatique.",
    en: "Hello! My name is Wiame Yousfi and I'm passionate about creating robust and scalable software systems. My interest in software engineering began during my preparatory classes, where I discovered my love for problem-solving and computer science."
  },
  "about.description2": {
    fr: "Durant mon parcours à l'École Nationale Supérieure d'Informatique et d'Analyse des Systèmes (ENSIAS), j'ai acquis une solide maîtrise des principes et des pratiques de l'ingénierie logicielle. J'ai travaillé sur divers projets impliquant l'architecture de microservices, le Cloud Computing et le développement web.",
    en: "During my journey at the National School of Computer Science and Systems Analysis (ENSIAS), I acquired solid mastery of software engineering principles and practices. I have worked on various projects involving microservices architecture, Cloud Computing, and web development."
  },
  "about.description3": {
    fr: "Je suis particulièrement enthousiaste à propos des pratiques DevOps et DevSecOps. J'aime travailler avec des technologies comme Docker, Kubernetes, et mettre en place des pipelines CI/CD pour automatiser la livraison logicielle tout en intégrant la sécurité tout au long du cycle de développement.",
    en: "I am particularly enthusiastic about DevOps and DevSecOps practices. I enjoy working with technologies like Docker, Kubernetes, and setting up CI/CD pipelines to automate software delivery while integrating security throughout the development cycle."
  },
  "about.experience": {
    fr: "Expérience",
    en: "Experience"
  },
  
  
  // Skills Section
  "skills.title": {
    fr: "Compétences & Outils",
    en: "Skills & Tools"
  },
  "skills.languages": {
    fr: "Langages de Programmation",
    en: "Programming Languages"
  },
  "skills.devops": {
    fr: "Outils DevOps",
    en: "DevOps Tools"
  },
  "skills.cloud": {
    fr: "Plateformes Cloud",
    en: "Cloud Platforms"
  },
  "skills.databases": {
    fr: "Bases de Données & Monitoring",
    en: "Databases & Monitoring"
  },
  "skills.additional": {
    fr: "Technologies Additionnelles",
    en: "Additional Technologies"
  },
  
  // Resume buttons
  "download.resume": {
    fr: "Télécharger CV (FR)",
    en: "Download Resume (FR)"
  },
  "download.resume.en": {
    fr: "Télécharger CV (EN)",
    en: "Download Resume (EN)"
  },
  
  // Navigation
  "nav.home": {
    fr: "Accueil",
    en: "Home"
  },
  "nav.about": {
    fr: "À propos",
    en: "About"
  },
  "nav.skills": {
    fr: "Compétences",
    en: "Skills"
  },
  "nav.projects": {
    fr: "Projets",
    en: "Projects"
  },
  "nav.devops": {
    fr: "DevOps",
    en: "DevOps"
  },
  "nav.contact": {
    fr: "Contact",
    en: "Contact"
  },
  "nav.interactive": {
    fr: "Interactif",
    en: "Interactive"
  },
  
  // Education
  "education.title": {
    fr: "Formation",
    en: "Education"
  },
  
  // Experience
  "experience.title": {
    fr: "Expérience Professionnelle",
    en: "Work Experience"
  },
  
  // Projects
  "projects.title": {
    fr: "Projets",
    en: "Projects"
  },
  "projects.viewProject": {
    fr: "Voir le projet",
    en: "View Project"
  },
  "projects.sourceCode": {
    fr: "Code source",
    en: "Source Code"
  },
  
  // Leadership
  "leadership.title": {
    fr: "Expérience en Leadership",
    en: "Leadership Experience"
  },
  
  // Certifications
  "certifications.title": {
    fr: "Certifications",
    en: "Certifications"
  },
  
  // DevOps Section
  "devops.title": {
    fr: "Expérience DevOps",
    en: "DevOps Experience"
  },
  "devops.subtitle": {
    fr: "Infrastructure et Automation",
    en: "Infrastructure and Automation"
  },
  "devops.description": {
    fr: "Mes expériences dans le domaine DevOps, où j'ai appliqué les meilleures pratiques pour améliorer le cycle de développement logiciel.",
    en: "My experiences in the DevOps field, where I've applied best practices to improve the software development lifecycle."
  },
  "devops.pipeline.title": {
    fr: "Expertise en Pipeline CI/CD",
    en: "CI/CD Pipeline Expertise"
  },
  "devops.stages.versionControl": {
    fr: "Gestion de Version",
    en: "Version Control"
  },
  "devops.stages.versionControlDesc": {
    fr: "Gestion de code avec Git utilisant des branches, des pull requests, et des vérifications automatisées.",
    en: "Code management with Git using branching, pull requests, and automated checks."
  },
  "devops.stages.buildTesting": {
    fr: "Construction & Tests",
    en: "Build & Testing"
  },
  "devops.stages.buildTestingDesc": {
    fr: "Tests automatisés via l'intégration continue pour garantir la qualité et la fiabilité du code.",
    en: "Automated testing via continuous integration to ensure code quality and reliability."
  },
  "devops.stages.containerization": {
    fr: "Conteneurisation",
    en: "Containerization"
  },
  "devops.stages.containerizationDesc": {
    fr: "Création de conteneurs Docker efficaces et reproductibles pour tous les services d'applications.",
    en: "Creating efficient and reproducible Docker containers for all application services."
  },
  "devops.stages.orchestration": {
    fr: "Orchestration",
    en: "Orchestration"
  },
  "devops.stages.orchestrationDesc": {
    fr: "Déploiement et gestion de conteneurs à grande échelle avec Kubernetes.",
    en: "Deploying and managing containers at scale with Kubernetes."
  },
  "devops.stages.cloud": {
    fr: "Cloud",
    en: "Cloud"
  },
  "devops.stages.cloudDesc": {
    fr: "Déploiement évolutif et gestion des ressources dans le cloud public ou hybride.",
    en: "Scalable deployment and resource management in public or hybrid cloud."
  },
  "devops.stages.monitoring": {
    fr: "Surveillance",
    en: "Monitoring"
  },
  "devops.stages.monitoringDesc": {
    fr: "Surveillance complète de l'infrastructure et des applications pour garantir un fonctionnement optimal.",
    en: "Comprehensive infrastructure and application monitoring to ensure proper operation."
  },

  // DevOps Case Studies
  "devops.caseStudies.title": {
    fr: "Études de cas",
    en: "Case Studies"
  },
  "devops.caseStudies.ecommerce.title": {
    fr: "Migration d'une Plateforme E-commerce Mondiale",
    en: "Global E-commerce Platform Migration"
  },
  "devops.caseStudies.ecommerce.description": {
    fr: "Migration d'une plateforme e-commerce monolithique vers une architecture microservices sur Kubernetes, réduisant les temps de déploiement de 90%.",
    en: "Migration of a monolithic e-commerce platform to a microservices architecture on Kubernetes, reducing deployment times by 90%."
  },
  "devops.caseStudies.ecommerce.achievements.cicd": {
    fr: "Pipeline CI/CD Automatisé",
    en: "Automated CI/CD Pipeline"
  },
  "devops.caseStudies.ecommerce.achievements.zeroDowntime": {
    fr: "Stratégie de Déploiement Sans Interruption",
    en: "Zero-downtime Deployment Strategy"
  },
  "devops.caseStudies.ecommerce.achievements.multiRegion": {
    fr: "Infrastructure Multi-région",
    en: "Multi-region Infrastructure"
  },


  // Terminal Section
  "devops.terminal.whoami": {
    fr: "Ingénieure logiciel passionnée par DevOps et le Cloud Computing, créant des systèmes automatisés, élégants et résilients.",
    en: "Software engineer passionate about DevOps and Cloud Computing, creating automated, elegant, and resilient systems."
  },
  
  // Contact Section
  "contact.title": {
    fr: "Contact",
    en: "Contact"
  },
  "contact.subtitle": {
    fr: "Restons en contact",
    en: "Let's Get In Touch"
  },
  "contact.name": {
    fr: "Nom",
    en: "Name"
  },
  "contact.email": {
    fr: "Email",
    en: "Email"
  },
  "contact.message": {
    fr: "Message",
    en: "Message"
  },
  "contact.send": {
    fr: "Envoyer",
    en: "Send Message"
  },
  "contact.success": {
    fr: "Message envoyé avec succès!",
    en: "Message sent successfully!"
  },
  "contact.error": {
    fr: "Une erreur s'est produite. Veuillez réessayer.",
    en: "An error occurred. Please try again."
  },

  // Interactive Section
  "interactive.title": {
    fr: "Expérience Interactive",
    en: "Interactive Experience"
  },
  "interactive.description": {
    fr: "Explorez mes compétences et mon expérience à travers ces composants interactifs. Essayez le terminal, découvrez ma stack technique et consultez mon activité GitHub récente.",
    en: "Explore my skills and experience through these interactive components. Try out the terminal, check my tech stack, and see my recent GitHub activity."
  },
  "interactive.terminal.title": {
    fr: "Terminal Interactif",
    en: "Interactive Terminal"
  },
  "interactive.techStack.title": {
    fr: "Stack Technique",
    en: "Tech Stack"
  },
  "interactive.github.title": {
    fr: "Activité GitHub Récente",
    en: "Recent GitHub Activity"
  },
};

const LanguageContext = createContext<LanguageContextType>({
  language: "fr",
  setLanguage: () => {},
  t: () => "",
});

export const LanguageProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("fr");
  
  const t = (key: string): string => {
    const translation = translations[key];
    if (!translation) return key;
    
    const value = translation[language];
    // If the value is an array, we need to handle it differently than if it's a string
    if (Array.isArray(value)) {
      return value[0]; // Return first item or empty string if needed
    }
    
    return value as string;
  };
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
