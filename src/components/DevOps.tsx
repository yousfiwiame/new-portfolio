import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { 
  SiDocker, 
  SiKubernetes, 
  SiGit, 
  SiGithub, 
  SiGitlab, 
  SiJenkins, 
  SiPostgresql, 
  SiSpring, 
  SiAmazon,
  SiPrometheus,
  SiReact,
  SiTerraform,
  SiJavascript,
  SiPython,
  SiTypescript,
  SiC,
  SiPhp,
  SiR,
  SiMysql,
  SiOracle,
  SiAngular,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiThreedotjs,
  SiNumpy,
  SiPandas,
  SiPlotly,
  SiScikitlearn,
  SiPostman,
  SiGradle,
  SiLinux,
  SiLangchain
} from "react-icons/si";
import { 
  Box, 
  Database, 
  Server, 
  Cloud,
  Zap,
  Code,
  Workflow,
  FileText,
  BarChart3,
  Brain,
  Globe,
  Shield,
  Layers,
  Terminal,
  Monitor,
  Sparkles,
  Coffee
} from "lucide-react";

const DevOps = () => {
  const { language } = useLanguage();

  const tools = [
    // Programming Languages
    { name: "Java", icon: Coffee, color: "text-orange-500", description: "Programming Language" },
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400", description: "Programming Language" },
    { name: "Python", icon: SiPython, color: "text-blue-500", description: "Programming Language" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-600", description: "Programming Language" },
    { name: "C", icon: SiC, color: "text-blue-700", description: "Programming Language" },
    { name: "PHP", icon: SiPhp, color: "text-purple-500", description: "Programming Language" },
    { name: "R", icon: SiR, color: "text-blue-500", description: "Programming Language" },
    { name: "Bash", icon: Terminal, color: "text-green-500", description: "Shell Scripting" },
    { name: "SQL", icon: FileText, color: "text-gray-500", description: "Database Language" },
    
    // Backend Technologies
    { name: "Spring Boot", icon: SiSpring, color: "text-green-600", description: "Backend Framework" },
    { name: "Spring Cloud", icon: SiSpring, color: "text-green-500", description: "Cloud Framework" },
    { name: "Spring Security", icon: Shield, color: "text-green-700", description: "Security Framework" },
    { name: "Apache Tomcat", icon: Server, color: "text-orange-600", description: "Application Server" },
    { name: "RESTful APIs", icon: Code, color: "text-blue-500", description: "API Architecture" },
    { name: "Microservices", icon: Layers, color: "text-purple-600", description: "Architecture Pattern" },
    
    // Frontend Technologies
    { name: "React", icon: SiReact, color: "text-blue-400", description: "Frontend Framework" },
    { name: "Angular", icon: SiAngular, color: "text-red-500", description: "Frontend Framework" },
    { name: "HTML5", icon: SiHtml5, color: "text-orange-500", description: "Markup Language" },
    { name: "CSS3", icon: SiCss3, color: "text-blue-500", description: "Styling Language" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500", description: "CSS Framework" },
    { name: "Three.js", icon: SiThreedotjs, color: "text-purple-400", description: "3D Graphics" },
    
    // DevOps & Cloud
    { name: "Docker", icon: SiDocker, color: "text-blue-500", description: "Containerization" },
    { name: "Kubernetes", icon: SiKubernetes, color: "text-blue-600", description: "Orchestration" },
    { name: "Jenkins", icon: SiJenkins, color: "text-red-500", description: "CI/CD" },
    { name: "GitLab CI/CD", icon: SiGitlab, color: "text-orange-500", description: "Pipeline" },
    { name: "AWS", icon: SiAmazon, color: "text-yellow-500", description: "Cloud Platform" },
    { name: "Grafana", icon: BarChart3, color: "text-orange-500", description: "Monitoring" },
    { name: "Prometheus", icon: SiPrometheus, color: "text-red-600", description: "Monitoring" },
    
    // Databases
    { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400", description: "Database" },
    { name: "MySQL", icon: SiMysql, color: "text-blue-500", description: "Database" },
    { name: "Oracle DB", icon: SiOracle, color: "text-red-500", description: "Database" },
    
    // Data Science
    { name: "NumPy", icon: SiNumpy, color: "text-blue-600", description: "Numerical Computing" },
    { name: "Pandas", icon: SiPandas, color: "text-blue-500", description: "Data Analysis" },
    { name: "Matplotlib", icon: BarChart3, color: "text-blue-700", description: "Data Visualization" },
    { name: "Plotly", icon: SiPlotly, color: "text-purple-500", description: "Interactive Charts" },
    { name: "Seaborn", icon: BarChart3, color: "text-blue-600", description: "Statistical Visualization" },
    { name: "Scikit-learn", icon: SiScikitlearn, color: "text-orange-500", description: "Machine Learning" },
    
    // Tools & Platforms
    { name: "Git", icon: SiGit, color: "text-orange-600", description: "Version Control" },
    { name: "GitHub", icon: SiGithub, color: "text-gray-800", description: "Code Repository" },
    { name: "GitLab", icon: SiGitlab, color: "text-orange-500", description: "DevOps Platform" },
    { name: "Postman", icon: SiPostman, color: "text-orange-500", description: "API Testing" },
    { name: "Maven", icon: Code, color: "text-orange-600", description: "Build Tool" },
    { name: "Gradle", icon: SiGradle, color: "text-blue-600", description: "Build Tool" },
    { name: "Linux", icon: SiLinux, color: "text-yellow-500", description: "Operating System" },
    { name: "Windows", icon: Monitor, color: "text-blue-500", description: "Operating System" },
    
    // AI & ML
    { name: "Google Gemini", icon: Sparkles, color: "text-purple-500", description: "AI Model" },
    { name: "LangChain", icon: SiLangchain, color: "text-blue-500", description: "AI Framework" },
    { name: "RAG", icon: Brain, color: "text-green-500", description: "AI Technique" },
    
    // Additional Technologies
    { name: "Terraform", icon: SiTerraform, color: "text-purple-500", description: "Infrastructure as Code" },
    { name: "JWT", icon: Shield, color: "text-blue-500", description: "Authentication" },
    { name: "NASA APIs", icon: Globe, color: "text-blue-600", description: "Space Data APIs" },
  ];

  const projects = [
    {
      title: language === "fr" ? "Plateforme E-commerce Microservices" : "E-commerce Microservices Platform",
      description: language === "fr" 
        ? "Système retail cloud évolutif avec recommandations IA. Construction d'une plateforme e-commerce de niveau entreprise utilisant une architecture microservices avec découverte de services, équilibrage de charge et patterns circuit breaker pour haute disponibilité. Implémentation de plus de 8 microservices indépendants pour le catalogue des produits, gestion des utilisateurs, traitement des commandes, paiement et gestion des expéditions. Développement d'un frontend React avec design responsive et mises à jour temps réel utilisant connexions WebSocket. Construction d'un système de recommandation intelligent utilisant Amazon Personalize avec des datasets S3. Intégration des services AWS incluant API Gateway, IAM, et monitoring complet avec Grafana et Prometheus."
        : "Scalable cloud retail system with AI-powered recommendations. Architected an enterprise-grade e-commerce platform using microservices architecture with service discovery, load balancing, and circuit breaker patterns for high availability. Implemented 8+ independent microservices for product catalog, user management, order processing, payment, and shipping management. Developed a React frontend with responsive design and real-time updates using WebSocket connections. Built an intelligent recommendation system using Amazon Personalize with S3 bucket datasets. Integrated AWS services including API Gateway for secure API management, IAM for permissions control, and comprehensive monitoring with Grafana and Prometheus.",
      tools: ["Spring Boot", "Spring Cloud", "React", "PostgreSQL", "Eureka", "Docker", "Kubernetes", "AWS", "Grafana", "Prometheus"],
      period: language === "fr" ? "Févr. 2025 - Juin 2025" : "Feb. 2025 - Jun. 2025"
    },
    {
      title: language === "fr" ? "AsteroidWatch - Surveillance Spatiale" : "AsteroidWatch - Space Monitoring",
      description: language === "fr"
        ? "Application de surveillance spatiale interactive pour le suivi d'astéroïdes en temps réel. Construction d'une application web complète pour la surveillance et l'analyse des astéroïdes géocroiseurs, fournissant des capacités de suivi en temps réel et d'évaluation des risques. Implémentation d'une visualisation 3D interactive de la Terre en utilisant React Three Fiber. Développement d'un outil de comparaison d'astéroïdes avec des graphiques radar et analytics. Intégration des APIs NASA Neos et JPL SBDB pour la récupération de données d'astéroïdes en temps réel. Implémentation de l'authentification JWT et d'un assistant chatbot IA utilisant la Génération Augmentée par Récupération (RAG)."
        : "Interactive space monitoring app for real-time asteroid tracking. Built a comprehensive web application for monitoring and analyzing near-Earth asteroids, providing real-time tracking and risk assessment capabilities. Implemented an interactive 3D Earth visualization using React Three Fiber. Developed an asteroid comparison tool with radar charts and analytics. Integrated NASA Neos API and JPL SBDB for real-time asteroid data retrieval. Implemented JWT authentication and an AI chatbot assistant using Retrieval-Augmented Generation (RAG).",
      tools: ["React", "Spring Boot", "MySQL", "Three.js", "NASA APIs", "JWT", "Python", "Docker", "TypeScript", "RAG", "LangChain"],
      period: language === "fr" ? "Janv. 2025 - Mai 2025" : "Jan. 2025 - May 2025"
    },
    {
      title: language === "fr" ? "CDG - Plateforme E-catalogue" : "CDG - E-catalog Platform",
      description: language === "fr"
        ? "Conception d'une plateforme e-catalogue complète utilisant une architecture microservices, optimisant la gestion et la centralisation des services partagés dans les départements financiers, informatiques et RH. Construction d'un système distribué résilient avec plus de 5 microservices utilisant Spring Boot et Spring Cloud. Établissement d'un pipeline CI/CD complet utilisant Jenkins. Déploiement d'une infrastructure sur la plateforme cloud AWS en exploitant les services EC2, ECS et RDS."
        : "Designed a complete e-catalog platform using microservices architecture, optimizing the management and centralization of shared services in financial, IT, and HR departments. Built a resilient distributed system with over 5 microservices using Spring Boot and Spring Cloud. Established a complete CI/CD pipeline using Jenkins. Deployed infrastructure on AWS cloud platform leveraging EC2, ECS, and RDS services.",
      tools: ["Spring Boot", "Spring Cloud", "React", "Docker", "Kubernetes", "Jenkins", "AWS", "Grafana", "Prometheus", "PostgreSQL"],
      period: language === "fr" ? "Juin 2025 - Juill. 2025" : "Jun. 2025 - Jul. 2025"
    },
    {
      title: language === "fr" ? "MAMDA & MCMA - Gestion Matériel IT" : "MAMDA & MCMA - IT Equipment Management",
      description: language === "fr"
        ? "Développement d'une application web full-stack complète pour la gestion du matériel informatique, implémentant le suivi des affectations d'employés et un système de gestion d'inventaire. Implémentation d'une authentification et autorisation sécurisées utilisant Spring Security avec contrôle d'accès basé sur les rôles. Conception d'APIs RESTful et intégration d'une base de données MySQL avec des requêtes optimisées. Construction d'une interface React responsive avec des mises à jour en temps réel."
        : "Developed a complete full-stack web application for IT equipment management, implementing employee assignment tracking and inventory management system. Implemented secure authentication and authorization using Spring Security with role-based access control. Designed RESTful APIs and integrated MySQL database with optimized queries. Built a responsive React interface with real-time updates.",
      tools: ["Spring Boot", "React", "MySQL", "Spring Security", "Apache Tomcat", "APIs RESTful"],
      period: language === "fr" ? "Juill. 2024" : "Jul. 2024"
    }
  ];

  return (
    <section id="devops" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading text-center">
            {language === "fr" ? "Compétences & Outils DevOps" : "DevOps Skills & Tools"}
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            {language === "fr" 
              ? "Mon expertise complète en DevOps, développement full-stack et cloud, avec une maîtrise des outils modernes et des architectures distribuées"
              : "My comprehensive expertise in DevOps, full-stack development and cloud, with mastery of modern tools and distributed architectures"
            }
          </p>
        </motion.div>

        {/* DevOps Tools Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-lavender/30 transition-all duration-300 hover:scale-105">
                  <tool.icon className={`w-12 h-12 mx-auto mb-3 ${tool.color} group-hover:scale-110 transition-transform duration-300`} />
                  <h4 className="font-semibold text-foreground mb-1">{tool.name}</h4>
                  <p className="text-sm text-muted-foreground">{tool.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* DevOps Workflow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-center mb-12">
            {language === "fr" ? "Workflow DevOps" : "DevOps Workflow"}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                         {[
               { icon: Code, title: language === "fr" ? "Développement Full-Stack" : "Full-Stack Development", desc: language === "fr" ? "Spring Boot, React, TypeScript, Python" : "Spring Boot, React, TypeScript, Python" },
               { icon: SiGit, title: language === "fr" ? "Version Control" : "Version Control", desc: language === "fr" ? "Git, GitHub, GitLab" : "Git, GitHub, GitLab" },
               { icon: Workflow, title: language === "fr" ? "CI/CD & DevOps" : "CI/CD & DevOps", desc: language === "fr" ? "Jenkins, GitLab CI/CD, Docker, Kubernetes" : "Jenkins, GitLab CI/CD, Docker, Kubernetes" },
               { icon: Cloud, title: language === "fr" ? "Cloud & Monitoring" : "Cloud & Monitoring", desc: language === "fr" ? "AWS, Grafana, Prometheus" : "AWS, Grafana, Prometheus" }
             ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 mb-4">
                  <step.icon className="w-12 h-12 mx-auto mb-3 text-lavender" />
                  <h4 className="font-semibold text-foreground mb-2">{step.title}</h4>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block w-full h-px bg-gradient-to-r from-lavender/50 to-transparent mt-8" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DevOps;
