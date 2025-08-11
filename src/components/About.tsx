import { User, Briefcase, Calendar, Award, GraduationCap, Laptop, ExternalLink } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const About = () => {
  const { t, language } = useLanguage();
  
  const education = [
    {
      year: language === "fr" ? "Sept. 2023 - Juill. 2026" : "Sep. 2023 - Jul. 2026",
      title: language === "fr" ? "Diplôme d'ingénieur d'état en génie logiciel" : "Master of Science in Software Engineering",
      institution: "Ecole Nationale Supérieure d'Informatique et d'Analyse des Systèmes",
      location: language === "fr" ? "Rabat, Maroc" : "Rabat, Morocco",
      description: language === "fr" 
        ? "Cours inclus: Algorithmes et Structures de Données, Architecture des Ordinateurs, Recherche Opérationnelle, Informatique Théorique, Programmation Orientée Objet, Compilation, Cloud Computing et Virtualisation, DevOps Best Practices, Introduction au Machine Learning."
        : "Coursework includes: Algorithms and Data Structures, Computer Architecture, Operations Research, Theoretical Computer Science, Object-Oriented Programming, Compiler Design, Cloud Computing and Virtualization, DevOps Best Practices, Introduction to Machine Learning."
    },
    {
      year: language === "fr" ? "Sept. 2020 - Juin. 2023" : "Sep. 2020 - Jun. 2023",
      title: language === "fr" ? "Classes préparatoires, Mathématiques, Physique, Informatique" : "Classes préparatoires, Mathematics, Physics, Computer Science",
      institution: "Lycée Moulay Youssef",
      location: language === "fr" ? "Rabat, Maroc" : "Rabat, Morocco",
      description: language === "fr"
        ? "Programme post-secondaire de deux années en mathématiques avancées et physique préparant aux concours nationaux d'entrée aux grandes écoles d'ingénieurs françaises et marocaines."
        : "Two-year post-secondary program in advanced mathematics and physics preparing for national entrance exams to elite French and Moroccan engineering schools."
    }
  ];

  const experiences = [
    {
      year: language === "fr" ? "Juin 2025 - Juill. 2025" : "Jun. 2025 - Jul. 2025",
      title: language === "fr" ? "Stagiaire DevOps & Génie Logiciel" : "DevOps & Software Engineering Intern",
      company: "CDG (Caisse de Dépôt et de Gestion)",
      location: language === "fr" ? "Rabat, Maroc" : "Rabat, Morocco",
      description: language === "fr"
        ? "Conception d'une plateforme e-catalogue microservices avec Spring Boot & Spring Cloud. Mise en place d'un pipeline CI/CD Jenkins et déploiement sur AWS (EC2, ECS, RDS)."
        : "Designed an e-catalogue microservices platform using Spring Boot & Spring Cloud. Implemented Jenkins CI/CD pipeline and deployed on AWS (EC2, ECS, RDS)."
    },
    {
      year: language === "fr" ? "Juill. 2024" : "Jul. 2024",
      title: language === "fr" ? "Stage en Génie Logiciel" : "Software Engineering Intern",
      company: "MAMDA & MCMA",
      location: language === "fr" ? "Rabat, Maroc" : "Rabat, Morocco",
      description: language === "fr"
        ? "Développement d'une application web full-stack pour la gestion de matériel informatique avec Spring Security, APIs RESTful et interface React responsive."
        : "Developed a full-stack web application for IT equipment management with Spring Security, RESTful APIs, and responsive React interface."
    }
  ];
  
  const leadership = [
    {
      year: language === "fr" ? "Janv. 2025 - Présent" : "Jan. 2025 - Present",
      title: language === "fr" ? "Co-fondatrice & Vice-Présidente" : "Co-founder & Vice President",
      organization: "Junior Entreprise ENSIAS",
      location: language === "fr" ? "Rabat, Maroc" : "Rabat, Morocco",
      description: language === "fr"
        ? "Co-fondation de la première Junior Entreprise d'ENSIAS, direction de la planification stratégique et développement de partenariats avec entreprises informatiques pour projets de niveau industriel."
        : "Co-founded ENSIAS's first Junior Enterprise, led strategic planning and developed partnerships with IT firms for industry-grade projects.",
      url: "https://jee.ma/"
    },
    {
      year: language === "fr" ? "Sept. 2023 - Présent" : "Sep. 2023 - Present",
      title: language === "fr" ? "Responsable Cellule Prospection & Sponsoring" : "Head of Prospecting & Sponsorship Cell",
      organization: "Forum Géni Entreprises",
      location: language === "fr" ? "Rabat, Maroc" : "Rabat, Morocco",
      description: language === "fr"
        ? "Direction d'une équipe de 30+ membres pour stratégies de partenariat, sécurisation de partenariats avec 25+ entreprises et rédaction d'articles techniques sur l'IA et l'informatique quantique."
        : "Led a team of 30+ members for partnership strategies, secured partnerships with 25+ companies, and authored technical articles on AI and quantum computing."
    }
  ];

  const certifications = [
    {
      title: language === "fr" ? "Gestion de Projet Agile" : "Agile Project Management",
      issuer: "Google",
      date: language === "fr" ? "Avr. 2025" : "Apr. 2025",
      url: "https://www.coursera.org/account/accomplishments/verify/OAHKCCG6BSF5?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
      pdfUrl: "/certificates/agile-project-management.pdf"
    },
    {
      title: language === "fr" ? "Fondamentaux du Cloud Computing" : "Cloud Computing Fundamentals",
      issuer: "IBM",
      date: language === "fr" ? "Avr. 2025" : "Apr. 2025",
      url: "https://www.credly.com/badges/a38671aa-bc88-4c0e-9076-eb80e9755b32/public_url",
      pdfUrl: "/certificates/cloud-computing-fundamentals.pdf"
    },
    {
      title: language === "fr" ? "Certificat d'Analyste en Intelligence Artificielle" : "Artificial Intelligence Analyst Certificate",
      issuer: "IBM",
      date: language === "fr" ? "Mars. 2025" : "Mar. 2025",
      url: "https://www.credly.com/badges/82ae8148-8702-4cc0-8c67-6ac9d6a14e04/public_url",
      pdfUrl: "/certificates/ai-analyst-certificate.pdf"
    }
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto">
        <h2 className="section-heading text-center">{t("about.title")}</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12">
          {/* About content */}
          <div className="lg:col-span-7 animate-slide-in">
            <div className="glass-card p-8 h-full">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-full bg-lavender/20 mr-4">
                  <User className="text-lavender" size={24} />
                </div>
                <h3 className="text-2xl font-bold">{t("about.subtitle")}</h3>
              </div>
              
              <p className="mb-4 text-muted-foreground">
                {t("about.description1")}
              </p>
              
              <p className="mb-4 text-muted-foreground">
                {t("about.description2")}
              </p>
              
              <p className="text-muted-foreground">
                {t("about.description3")}
              </p>
            </div>
          </div>
          
          {/* Timeline */}
          <div className="lg:col-span-5 animate-slide-up">
            <div className="glass-card p-8 h-full">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-full bg-blush/20 mr-4">
                  <Briefcase className="text-secondary" size={24} />
                </div>
                <h3 className="text-2xl font-bold">{t("experience.title")}</h3>
              </div>
              
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative pl-8 border-l-2 border-lavender/30">
                    <span className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-lavender"></span>
                    <div className="flex items-center text-sm text-muted-foreground mb-2">
                      <Calendar size={14} className="mr-2" />
                      <span>{exp.year}</span>
                    </div>
                    <h4 className="text-lg font-bold">{exp.title}</h4>
                    <p className="text-lavender mb-1">{exp.company} - {exp.location}</p>
                    <p className="text-sm text-muted-foreground">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Education */}
        <div className="mt-12 animate-fade-in">
          <div className="glass-card p-8">
            <div className="flex items-center mb-6">
              <div className="p-3 rounded-full bg-secondary/20 mr-4">
                <GraduationCap className="text-secondary" size={24} />
              </div>
              <h3 className="text-2xl font-bold">{t("education.title")}</h3>
            </div>
            
            <div className="space-y-8 mt-6">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-secondary/30 pb-6">
                  <span className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-secondary"></span>
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <Calendar size={14} className="mr-2" />
                    <span>{edu.year}</span>
                  </div>
                  <h4 className="text-lg font-bold">{edu.title}</h4>
                  <p className="text-lavender mb-1">{edu.institution} - {edu.location}</p>
                  <p className="text-sm text-muted-foreground">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Leadership and Certifications in a grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {/* Leadership */}
          <div className="animate-fade-in">
            <div className="glass-card p-8 h-full">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-full bg-lavender/20 mr-4">
                  <Laptop className="text-lavender" size={24} />
                </div>
                <h3 className="text-2xl font-bold">{t("leadership.title")}</h3>
              </div>
              
              <div className="space-y-8">
                {leadership.map((lead, index) => (
                  <div key={index} className="relative pl-8 border-l-2 border-lavender/30 pb-4">
                    <span className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-lavender"></span>
                    <div className="flex items-center text-sm text-muted-foreground mb-2">
                      <Calendar size={14} className="mr-2" />
                      <span>{lead.year}</span>
                    </div>
                    <h4 className="text-lg font-bold">{lead.title}</h4>
                    <p className="text-lavender mb-1">
                      {lead.organization} - {lead.location}
                      {lead.url && (
                        <a 
                          href={lead.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center ml-2 text-sm hover:text-secondary transition-colors"
                        >
                          <ExternalLink size={14} className="ml-1" />
                        </a>
                      )}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {lead.description}
                      {lead.url && (
                        <a 
                          href={lead.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center ml-1 text-lavender hover:text-secondary transition-colors"
                        >
                          <ExternalLink size={12} className="ml-1" />
                          {language === "fr" ? "Visiter le site" : "Visit website"}
                          
                        </a>
                      )}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Certifications */}
          <div className="animate-fade-in">
            <div className="glass-card p-8 h-full">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-full bg-secondary/20 mr-4">
                  <Award className="text-secondary" size={24} />
                </div>
                <h3 className="text-2xl font-bold">{t("certifications.title")}</h3>
              </div>
              
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="border border-lavender/20 rounded-lg p-4 hover:border-lavender transition-colors duration-300">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium">
                          {cert.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                        <div className="flex items-center mt-2 space-x-3">
                          {cert.url && (
                            <a 
                              href={cert.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-xs text-lavender hover:text-secondary transition-colors"
                            >
                              <ExternalLink size={12} className="mr-1" />
                              {language === "fr" ? "Voir certificat" : "View certificate"}
                            </a>
                          )}
                          {cert.pdfUrl && (
                            <a 
                              href={cert.pdfUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-xs text-lavender hover:text-secondary transition-colors"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                <polyline points="14 2 14 8 20 8"></polyline>
                                <line x1="12" y1="18" x2="12" y2="12"></line>
                                <line x1="9" y1="15" x2="15" y2="15"></line>
                              </svg>
                              {language === "fr" ? "Télécharger PDF" : "Download PDF"}
                            </a>
                          )}
                        </div>
                      </div>
                      <span className="text-xs text-muted-foreground bg-lavender/10 px-2 py-1 rounded-full">
                        {cert.date}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;