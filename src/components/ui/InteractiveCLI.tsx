import { useState, useEffect, useRef, KeyboardEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Code, Server, Database, GitBranch, Zap, Github, ExternalLink, Heart, Star, Calendar, MapPin, Mail, Phone } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface Command {
  command: string;
  output: string | string[];
}

const InteractiveCLI = () => {
  const { language } = useLanguage();
  const [history, setHistory] = useState<Command[]>([]);
  const [input, setInput] = useState('');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isFocused, setIsFocused] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Commands based on current language
  const commands: { [key: string]: string | string[] } = {
    help: language === 'fr' ? [
      'Commandes disponibles :',
      'about - En savoir plus sur Wiame',
      'skills - Voir les compétences techniques',
      'experience - Voir l\'expérience professionnelle',
      'projects - Lister les projets notables',
      'github - Profil GitHub et statistiques',
      'contact - Obtenir les informations de contact',
      'clear - Effacer le terminal',
      'help - Afficher ce message d\'aide',
    ] : [
      'Available commands:',
      'about - Learn about Wiame',
      'skills - View technical skills',
      'experience - See work experience',
      'projects - List notable projects',
      'github - GitHub profile and stats',
      'contact - Get contact information',
      'clear - Clear the terminal',
      'help - Show this help message',
    ],
    about: language === 'fr' ? [
      'Salut ! Je suis Wiame Yousfi 👋',
      'Je suis une Ingénieure Logiciel passionnée par la création de solutions innovantes.',
      'Je me spécialise dans les pratiques DevOps, le cloud computing et le développement full-stack.',
      'Actuellement en Master à l\'ENSIAS à Rabat, Maroc.',
      'Tapez "skills" pour voir mon expertise technique !',
    ] : [
      'Hi! I\'m Wiame Yousfi 👋',
      'I\'m a Software Engineer passionate about building innovative solutions.',
      'I specialize in DevOps practices, cloud computing, and full-stack development.',
      'Currently pursuing my Master\'s degree at ENSIAS in Rabat, Morocco.',
      'Type "skills" to see my technical expertise!',
    ],
    skills: language === 'fr' ? [
      '🔹 Programmation : Java, JavaScript/TypeScript, Python, C, PHP, Bash',
      '🔹 Backend : Spring Boot, Spring Cloud, Node.js, Django',
      '🔹 Frontend : React, Angular, HTML5, CSS3, Tailwind CSS',
      '🔹 DevOps : Docker, Kubernetes, Jenkins, GitLab CI/CD, AWS',
      '🔹 Bases de données : PostgreSQL, MySQL, Oracle DB, MongoDB',
      '🔹 Cloud : AWS (EC2, ECS, RDS, S3), Azure, Google Cloud',
      '🔹 Outils : Git, GitHub, Terraform, Ansible, Grafana, Prometheus',
    ] : [
      '🔹 Programming: Java, JavaScript/TypeScript, Python, C, PHP, Bash',
      '🔹 Backend: Spring Boot, Spring Cloud, Node.js, Django',
      '🔹 Frontend: React, Angular, HTML5, CSS3, Tailwind CSS',
      '🔹 DevOps: Docker, Kubernetes, Jenkins, GitLab CI/CD, AWS',
      '🔹 Databases: PostgreSQL, MySQL, Oracle DB, MongoDB',
      '🔹 Cloud: AWS (EC2, ECS, RDS, S3), Azure, Google Cloud',
      '🔹 Tools: Git, GitHub, Terraform, Ansible, Grafana, Prometheus',
    ],
    experience: language === 'fr' ? [
      '🏢 Stagiaire DevOps & Génie Logiciel - CDG (Juin-Juill. 2025)',
      '   • Construction d\'une plateforme microservices avec Spring Boot & Spring Cloud',
      '   • Implémentation d\'un pipeline CI/CD utilisant Jenkins',
      '   • Déploiement d\'infrastructure sur AWS (EC2, ECS, RDS)',
      '',
      '🏢 Stagiaire en Génie Logiciel - MAMDA & MCMA (Juill. 2024)',
      '   • Développement d\'une application web full-stack pour la gestion de matériel IT',
      '   • Implémentation de Spring Security avec contrôle d\'accès basé sur les rôles',
      '   • Construction d\'une interface React responsive avec mises à jour temps réel',
    ] : [
      '🏢 DevOps & Software Engineering Intern - CDG (Jun-Jul 2025)',
      '   • Built microservices platform with Spring Boot & Spring Cloud',
      '   • Implemented CI/CD pipeline using Jenkins',
      '   • Deployed infrastructure on AWS (EC2, ECS, RDS)',
      '',
      '🏢 Software Engineering Intern - MAMDA & MCMA (Jul 2024)',
      '   • Developed full-stack web app for IT equipment management',
      '   • Implemented Spring Security with role-based access control',
      '   • Built responsive React interface with real-time updates',
    ],
    projects: language === 'fr' ? [
      '📱 Plateforme E-commerce Microservices',
      '   • Spring Cloud, Docker, Kubernetes, AWS',
      '   • 8+ microservices, API Gateway, monitoring',
      '',
      '🌐 AsteroidWatch - Application de Surveillance Spatiale',
      '   • React, Three.js, APIs NASA, chatbot IA',
      '   • Visualisation 3D de la Terre, suivi temps réel',
      '',
      'Tapez "github" pour voir plus de projets sur GitHub !',
    ] : [
      '📱 E-commerce Microservices Platform',
      '   • Spring Cloud, Docker, Kubernetes, AWS',
      '   • 8+ microservices, API Gateway, monitoring',
      '',
      '🌐 AsteroidWatch - Space Monitoring App',
      '   • React, Three.js, NASA APIs, AI chatbot',
      '   • 3D Earth visualization, real-time tracking',
      '',
      'Type "github" to see more projects on GitHub!',
    ],
    github: language === 'fr' ? [
      '🐙 Profil GitHub : github.com/yousfiwiame',
      '⭐ Dépôts publics : 15+',
      '🔀 Actif dans : DevOps, Cloud Computing, Développement Web',
      '📊 Langages : Java, TypeScript, Python, React',
      '🚀 Activité récente : Vérifiez le graphique d\'activité GitHub ci-dessous !',
      '',
      'Dépôts populaires :',
      '• ecommerce-microservices - Microservices Spring Cloud',
      '• asteroid-watch - Intégration API NASA avec visualisation 3D',
      '• devops-tools - Exemples Docker, Kubernetes, CI/CD',
    ] : [
      '🐙 GitHub Profile: github.com/yousfiwiame',
      '⭐ Public Repositories: 15+',
      '🔀 Active in: DevOps, Cloud Computing, Web Development',
      '📊 Languages: Java, TypeScript, Python, React',
      '🚀 Recent Activity: Check the GitHub activity graph below!',
      '',
      'Popular Repositories:',
      '• ecommerce-microservices - Spring Cloud microservices',
      '• asteroid-watch - NASA API integration with 3D visualization',
      '• devops-tools - Docker, Kubernetes, CI/CD examples',
    ],
    contact: language === 'fr' ? [
      '📧 Email : wiame.yousfi22@gmail.com',
      '📱 Téléphone : +212 6 74 98 44 99',
      '📍 Localisation : Rabat, Maroc',
      '🔗 LinkedIn : linkedin.com/in/wiame-yousfi-2a989a243',
      '🐙 GitHub : github.com/yousfiwiame',
      '',
      'N\'hésitez pas à me contacter pour des collaborations ou opportunités ! 💜',
    ] : [
      '📧 Email: wiame.yousfi22@gmail.com',
      '📱 Phone: +212 6 74 98 44 99',
      '📍 Location: Rabat, Morocco',
      '🔗 LinkedIn: linkedin.com/in/wiame-yousfi-2a989a243',
      '🐙 GitHub: github.com/yousfiwiame',
      '',
      'Feel free to reach out for collaborations or opportunities! 💜',
    ],
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  // Auto-focus the terminal on mount
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    let output: string | string[];

    if (trimmedCmd === 'clear') {
      setHistory([]);
      return;
    }

    if (trimmedCmd in commands) {
      output = commands[trimmedCmd];
    } else {
      output = language === 'fr' 
        ? `Commande non trouvée : ${trimmedCmd}. Tapez 'help' pour voir les commandes disponibles.`
        : `Command not found: ${trimmedCmd}. Type 'help' for available commands.`;
    }

    setHistory((prev) => [...prev, { command: cmd, output }]);
    // Add command to command history
    setCommandHistory((prev) => [cmd, ...prev]);
    setHistoryIndex(-1);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      handleCommand(input);
      setInput('');
    }
  };

  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Interactive Terminal */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-black/90 rounded-lg overflow-hidden backdrop-blur-sm"
      >
        <div className="flex items-center gap-2 px-4 py-2 bg-gray-800">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <span className="ml-2 text-sm text-gray-400">visitor@portfolio:~</span>
        </div>

        <div
          ref={terminalRef}
          onClick={handleTerminalClick}
          className="p-4 h-[300px] overflow-y-auto font-mono text-sm cursor-text"
        >
          <div className="text-green-400 mb-4">
            {language === 'fr' 
              ? 'Bienvenue dans le terminal interactif de Wiame ! Tapez \'help\' pour voir les commandes disponibles.'
              : 'Welcome to Wiame\'s interactive terminal! Type \'help\' to see available commands.'
            }
          </div>

          <AnimatePresence>
            {history.map((entry, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-blue-400">$ {entry.command}</div>
                <div className="text-gray-300 ml-2 mb-4">
                  {Array.isArray(entry.output) ? (
                    entry.output.map((line, j) => <div key={j}>{line}</div>)
                  ) : (
                    <div>{entry.output}</div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          <form onSubmit={handleSubmit} className="flex items-center relative">
            <span className="text-blue-400">$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className="flex-1 ml-2 bg-transparent border-none outline-none text-gray-300 focus:ring-0 caret-transparent"
              spellCheck="false"
              autoComplete="off"
              aria-label="Terminal input"
            />
            {/* Blinking cursor */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isFocused ? 1 : 0 }}
              transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
              className="absolute left-[calc(2rem+1ch)] h-5 w-2 bg-gray-300"
              style={{ left: `calc(2rem + ${input.length}ch)` }}
            />
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default InteractiveCLI;
