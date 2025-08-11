import { useState } from "react";
import { Server, Cloud, GitBranch, Database } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

// Icon for Build & Testing
function CodeIcon({ className = "", size = 24 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

const DevOpsExperience = () => {
  const { t, language } = useLanguage();
  const [hoveredStage, setHoveredStage] = useState<number | null>(null);

  const pipelineStages = [
    {
      name: t("devops.stages.versionControl"),
      icon: <GitBranch />,
      description: t("devops.stages.versionControlDesc"),
      tools: ["GitHub", "GitLab", "Bitbucket"]
    },
    {
      name: t("devops.stages.buildTesting"),
      icon: <CodeIcon />,
      description: t("devops.stages.buildTestingDesc"),
      tools: ["GitHub Actions", "Jenkins", "CircleCI"]
    },
    {
      name: t("devops.stages.containerization"),
      icon: <Server className="transform rotate-90" />,
      description: t("devops.stages.containerizationDesc"),
      tools: ["Docker", "Buildah", "Kaniko"]
    },
    {
      name: t("devops.stages.orchestration"),
      icon: <Server />,
      description: t("devops.stages.orchestrationDesc"),
      tools: ["Kubernetes", "EKS", "GKE", "AKS"]
    },
    {
      name: t("devops.stages.cloud"),
      icon: <Cloud />,
      description: t("devops.stages.cloudDesc"),
      tools: ["AWS", "Azure", "Google Cloud", "Terraform"]
    },
    {
      name: t("devops.stages.monitoring"),
      icon: <Database />,
      description: t("devops.stages.monitoringDesc"),
      tools: ["Prometheus", "Grafana", "Datadog"]
    }
  ];
  
  const caseStudies = [
    {
      title: t("devops.caseStudies.ecommerce.title"),
      description: t("devops.caseStudies.ecommerce.description"),
      achievements: [
        t("devops.caseStudies.ecommerce.achievements.cicd"),
        t("devops.caseStudies.ecommerce.achievements.zeroDowntime"),
        t("devops.caseStudies.ecommerce.achievements.multiRegion")
      ]
    },
    {
      title: language === "fr" ? "Plateforme E-commerce Microservices" : "Microservices E-commerce Platform",
      description: language === "fr"
        ? "Migration d'une plateforme e-commerce monolithique vers une architecture microservices sur Kubernetes, réduisant les temps de déploiement de 90% et améliorant la scalabilité."
        : "Migration of a monolithic e-commerce platform to a microservices architecture on Kubernetes, reducing deployment times by 90% and improving scalability.",
      achievements: [
        language === "fr" ? "Pipeline CI/CD Automatisé" : "Automated CI/CD Pipeline",
        language === "fr" ? "Stratégie de Déploiement Sans Interruption" : "Zero Downtime Deployment Strategy",
        language === "fr" ? "Infrastructure Multi-région" : "Multi-region Infrastructure"
      ]
    }
  ];

  return (
    <section id="devops" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">{t("devops.title")}</h2>

        {/* CI/CD Pipeline Visualization */}
        <div className="my-12">
          <h3 className="text-2xl font-bold mb-8 text-center">{t("devops.pipeline.title")}</h3>

          <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-lavender to-secondary transform -translate-y-1/2 z-0"></div>

            {pipelineStages.map((stage, index) => (
              <div
                key={index}
                className="relative z-10 flex flex-col items-center mb-8 md:mb-0 group"
                onMouseEnter={() => setHoveredStage(index)}
                onMouseLeave={() => setHoveredStage(null)}
              >
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                    hoveredStage === index 
                      ? "bg-lavender text-white scale-110" 
                      : "bg-white dark:bg-midnight text-lavender"
                  }`}
                >
                  {stage.icon}
                </div>

                <div className="mt-4 text-center">
                  <h4 className="font-bold">{stage.name}</h4>
                  <div className={`mt-2 bg-white dark:bg-midnight shadow-lg rounded-lg p-4 transition-all duration-300 ${
                    hoveredStage === index ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
                  } absolute top-full left-1/2 transform -translate-x-1/2 w-64 z-20`}>
                    <p className="text-sm mb-2">{stage.description}</p>
                    <div className="text-xs text-lavender font-medium">
                      {stage.tools.join(" • ")}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Case Studies */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-8">{t("devops.caseStudies.title")}</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="glass-card p-8 animate-slide-up" style={{ animationDelay: `${index * 200}ms` }}>
                <h4 className="text-xl font-bold mb-4">{study.title}</h4>
                <p className="text-muted-foreground mb-4">{study.description}</p>

                <div className="space-y-2">
                  {study.achievements.map((achievement, achIndex) => (
                    <div key={achIndex} className="flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-lavender mt-2 mr-2"></div>
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevOpsExperience;