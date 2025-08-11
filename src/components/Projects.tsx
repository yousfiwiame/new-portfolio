import { useState } from "react";
import { Github, ExternalLink, Code, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import Interactive3DButton from "./ui/Interactive3DButton";
import { motion } from "framer-motion";

const Projects = () => {
  const { t, language } = useLanguage();
  
  // Catégories de filtre
  const categories = language === "fr" 
    ? ["Tous", "DevOps", "Cloud", "CI/CD", "Logiciel", "AI", "Machine Learning", "DevSecOps"] 
    : ["All", "DevOps", "Cloud", "CI/CD", "Software", "AI", "Machine Learning", "DevSecOps"];
    
  const [activeFilter, setActiveFilter] = useState(language === "fr" ? "Tous" : "All");

  // Données des projets
  const projects = [
    {
      title: language === "fr" ? "Plateforme E-commerce Microservices" : "E-commerce Microservices Platform",
      description: language === "fr"
        ? "Système retail cloud évolutif avec recommandations IA. Construction d'une plateforme e-commerce de niveau entreprise utilisant une architecture microservices avec découverte de services, équilibrage de charge et patterns circuit breaker pour haute disponibilité. Implémentation de plus de 8 microservices indépendants pour le catalogue des produits, gestion des utilisateurs, traitement des commandes, paiement et gestion des expéditions. Développement d'un frontend React avec design responsive et mises à jour temps réel utilisant connexions WebSocket. Construction d'un système de recommandation intelligent utilisant Amazon Personalize avec des datasets S3. Intégration des services AWS incluant API Gateway, IAM, et monitoring complet avec Grafana et Prometheus."
        : "Scalable cloud retail system with AI-powered recommendations. Architected an enterprise-grade e-commerce platform using microservices architecture with service discovery, load balancing, and circuit breaker patterns for high availability. Implemented 8+ independent microservices for product catalog, user management, order processing, payment, and shipping management. Developed a React frontend with responsive design and real-time updates using WebSocket connections. Built an intelligent recommendation system using Amazon Personalize with S3 bucket datasets. Integrated AWS services including API Gateway for secure API management, IAM for permissions control, and comprehensive monitoring with Grafana and Prometheus.",
      image: "Shophub.jpeg",
      tags: ["Microservices", "Spring Cloud", "Docker", "Kubernetes", "AWS", "React", "PostgreSQL", "Grafana", "Prometheus", "Logiciel"],
      github: "https://github.com/yousfiwiame/ecommerce-microservices",
      demo: "#",
      period: language === "fr" ? "Févr. 2025 - Juin 2025" : "Feb. 2025 - Jun. 2025"
    },
    {
      title: language === "fr" ? "AsteroidWatch - Surveillance Spatiale" : "AsteroidWatch - Space Monitoring",
      description: language === "fr"
        ? "Application de surveillance spatiale interactive pour le suivi d'astéroïdes en temps réel. Construction d'une application web complète pour la surveillance et l'analyse des astéroïdes géocroiseurs, fournissant des capacités de suivi en temps réel et d'évaluation des risques. Implémentation d'une visualisation 3D interactive de la Terre en utilisant React Three Fiber. Développement d'un outil de comparaison d'astéroïdes avec des graphiques radar et analytics. Intégration des APIs NASA Neos et JPL SBDB pour la récupération de données d'astéroïdes en temps réel. Implémentation de l'authentification JWT et d'un assistant chatbot IA utilisant la Génération Augmentée par Récupération (RAG)."
        : "Interactive space monitoring app for real-time asteroid tracking. Built a comprehensive web application for monitoring and analyzing near-Earth asteroids, providing real-time tracking and risk assessment capabilities. Implemented an interactive 3D Earth visualization using React Three Fiber. Developed an asteroid comparison tool with radar charts and analytics. Integrated NASA Neos API and JPL SBDB for real-time asteroid data retrieval. Implemented JWT authentication and an AI chatbot assistant using Retrieval-Augmented Generation (RAG).",
      image: "/AsteroidWatch.png",
      tags: ["React", "Three.js", "NASA APIs", "AI", "3D Visualization", "Spring Boot", "MySQL", "JWT", "Python", "Docker", "TypeScript", "RAG", "LangChain", "Google Gemini", "Logiciel"],
      github: "https://github.com/yousfiwiame/development-platform-cosmo-coders",
      demo: "#",
      period: language === "fr" ? "Janv. 2025 - Mai 2025" : "Jan. 2025 - May 2025"
    },
    // {
    //   title: language === "fr" ? "Service de Passerelle API" : "API Gateway Service",
    //   description: language === "fr"
    //     ? "Passerelle API haute performance avec limitation de débit, authentification et routage des requêtes."
    //     : "High-performance API gateway with rate limiting, authentication, and request routing.",
    //   image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?fit=crop&w=800&h=500",
    //   tags: language === "fr" ? ["Logiciel", "API", "Cloud"] : ["Software", "API", "Cloud"],
    //   github: "#",
    //   demo: "#",
    // },
  ];

  // Filtrer les projets selon la catégorie active
  const filteredProjects = activeFilter === (language === "fr" ? "Tous" : "All") 
    ? projects 
    : projects.filter(project => {
        const projectTags = project.tags.map(tag => tag.toLowerCase());
        const filterLower = activeFilter.toLowerCase();
        
        // Mapping des catégories aux tags
        const categoryMapping: { [key: string]: string[] } = {
          "devops": ["devops", "docker", "kubernetes", "jenkins", "ci/cd", "aws", "grafana", "prometheus"],
          "cloud": ["cloud", "aws", "docker", "kubernetes", "terraform", "ec2", "ecs", "rds", "s3"],
          "ci/cd": ["ci/cd", "jenkins", "gitlab ci/cd", "pipeline", "docker", "kubernetes"],
          "software": ["logiciel", "software", "spring boot", "react", "java", "typescript", "python", "mysql", "postgresql", "spring", "spring cloud", "spring security", "apache tomcat", "restful apis", "microservices", "html5", "css3", "tailwind css", "three.js", "jwt", "nasa apis", "rag", "langchain", "google gemini", "docker", "kubernetes", "jenkins", "gitlab ci/cd", "aws", "grafana", "prometheus", "postgresql", "mysql", "oracle db", "numpy", "pandas", "matplotlib", "plotly", "seaborn", "scikit-learn", "git", "github", "gitlab", "postman", "maven", "gradle", "linux", "windows"],
          "ai": ["ai", "intelligence artificielle", "chatbot", "rag", "gemini", "langchain", "machine learning", "numpy", "pandas", "matplotlib", "plotly", "seaborn", "scikit-learn"],
          "machine learning": ["machine learning", "ml", "scikit-learn", "pandas", "numpy", "matplotlib", "plotly", "seaborn", "ai", "rag", "langchain"],
          "devsecops": ["devsecops", "security", "sécurité", "spring security", "jwt", "iam", "authentication", "spring boot", "spring cloud"]
        };
        
        const mappedTags = categoryMapping[filterLower] || [];
        return projectTags.some(tag => 
          mappedTags.includes(tag) || 
          tag.includes(filterLower) || 
          filterLower.includes(tag)
        );
      });

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto">
        <h2 className="section-heading text-center">{t("projects.title")}</h2>

        {/* Boutons de filtre */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                activeFilter === category
                  ? "bg-lavender text-white"
                  : "bg-transparent border border-lavender/30 hover:border-lavender hover:bg-lavender/10"
              }`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projets filtrés */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="glass-card overflow-hidden hover:scale-105 transition-transform duration-300">
                  {/* Image du projet */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>

                  {/* Contenu du projet */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-lavender mb-3">
                      {project.title}
                    </h3>
                    
                    {/* Période du projet */}
                    {project.period && (
                      <p className="text-sm text-muted-foreground mb-3 italic">
                        {project.period}
                      </p>
                    )}
                    
                    <p className="text-muted-foreground mb-4 line-clamp-4">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-lavender/20 text-lavender text-sm rounded-full border border-lavender/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Liens */}
                    <div className="flex gap-3">
                      {project.github !== "#" && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-lavender text-white text-center py-2 px-4 rounded-lg hover:bg-secondary transition-colors"
                        >
                          {language === "fr" ? "GitHub" : "GitHub"}
                        </a>
                      )}
                      {project.demo !== "#" && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-secondary text-white text-center py-2 px-4 rounded-lg hover:bg-lavender transition-colors"
                        >
                          {language === "fr" ? "Démo" : "Demo"}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="col-span-full text-center py-12"
            >
              <div className="glass-card p-8">
                <h3 className="text-xl font-semibold text-lavender mb-2">
                  {language === "fr" ? "Aucun projet trouvé" : "No projects found"}
                </h3>
                <p className="text-muted-foreground">
                  {language === "fr" 
                    ? `Aucun projet trouvé pour la catégorie "${activeFilter}". Essayez une autre catégorie ou revenez à "Tous".`
                    : `No projects found for category "${activeFilter}". Try another category or go back to "All".`
                  }
                </p>
              </div>
            </motion.div>
          )}
        </div>

        {/* Lien vers plus de projets */}
        <div className="mt-12 text-center">
          <Interactive3DButton
            href="https://github.com/yousfiwiame"
            variant="primary"
            size="lg"
            icon={Sparkles}
          >
            {language === "fr" ? "Voir plus sur GitHub" : "See more on GitHub"}
          </Interactive3DButton>
        </div>
      </div>
    </section>
  );
};

export default Projects;