# 🚀 Wiame Yousfi - Portfolio

<div align="center">

![Portfolio Preview](https://img.shields.io/badge/Portfolio-Live-brightgreen)
![React](https://img.shields.io/badge/React-18.3.1-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.11-38B2AC)
![Vite](https://img.shields.io/badge/Vite-5.4.1-646CFF)

**A modern, interactive portfolio showcasing DevOps expertise, cloud computing skills, and software engineering projects**

[🌐 Live Demo](https://your-portfolio-url.com) • [📧 Contact](mailto:wiame.yousfi22@gmail.com) • [💼 LinkedIn](https://www.linkedin.com/in/wiame-yousfi-2a989a243/)

</div>

---

## ✨ Features

### 🎨 **Modern Design & UX**
- **Glassmorphic UI** - Beautiful glass-like components with backdrop blur
- **Dark/Light Theme** - Automatic theme switching with system preference detection
- **Responsive Design** - Perfect on all devices (mobile, tablet, desktop)
- **Smooth Animations** - Framer Motion powered transitions and micro-interactions

### 🌍 **Multilingual Support**
- **French & English** - Complete bilingual experience
- **Dynamic Content** - All sections adapt to selected language
- **Cultural Adaptation** - Content tailored for both French and English audiences

### 🚀 **Interactive Elements**
- **Custom Cursor** - Elegant lavender cursor with smooth animations
- **Interactive CLI Terminal** - Type commands to explore the portfolio
- **3D Interactive Elements** - Three.js powered 3D components
- **Particle Backgrounds** - Dynamic particle systems for visual appeal

### 📊 **GitHub Integration**
- **Real-time Activity** - Live GitHub contribution graph
- **Repository Showcase** - Display of recent projects with stats
- **Contribution Heatmap** - GitHub-style contribution visualization

### 🛠️ **Technical Excellence**
- **TypeScript** - Full type safety and better development experience
- **Modern React** - Latest React 18 features and hooks
- **Performance Optimized** - Lazy loading, code splitting, and optimization
- **SEO Ready** - Meta tags, structured data, and accessibility features

---

## 🎯 **Portfolio Sections**

### 🏠 **Hero Section**
- Animated greeting with role rotation
- Interactive sparkle effects on mouse movement
- Professional photo with morphing animations
- Call-to-action buttons for projects and contact

### 👩‍💻 **About Me**
- Professional background and experience
- Educational journey and certifications
- Leadership roles and achievements
- Timeline-based presentation

### 🚀 **Skills & DevOps**
- Comprehensive technology stack display
- Categorized skills (Programming, Backend, Frontend, DevOps, Cloud)
- Interactive tool cards with icons and descriptions
- DevOps workflow visualization

### 📁 **Projects**
- Filterable project showcase by category
- Detailed project descriptions in both languages
- Technology tags and GitHub links
- Responsive project cards with hover effects

### 🌟 **GitHub Activity**
- Real-time contribution graph
- Recent repository showcase
- Interactive GitHub-style interface
- Live data from GitHub API

### 🎮 **Interactive CLI**
- Terminal-style interface
- Command-based navigation
- Help system and command suggestions
- Professional terminal experience

### 📞 **Contact**
- Professional contact form with EmailJS integration
- Contact information and social links
- Form validation and error handling
- Success/error feedback

---

## 🛠️ **Technology Stack**

### **Frontend Framework**
- **React 18** - Latest React features and concurrent rendering
- **TypeScript** - Type-safe development experience
- **Vite** - Lightning-fast build tool and dev server

### **Styling & UI**
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Framer Motion** - Production-ready motion library
- **Lucide React** - Beautiful icon library

### **3D & Graphics**
- **Three.js** - 3D graphics library
- **React Three Fiber** - React renderer for Three.js
- **TSParticles** - Particle system library

### **State Management & Data**
- **React Context** - Lightweight state management
- **React Hook Form** - Performant forms with validation
- **React Query** - Data fetching and caching

### **DevOps & Cloud**
- **Docker** - Containerization
- **Kubernetes** - Container orchestration
- **AWS** - Cloud services
- **CI/CD** - Jenkins, GitLab CI/CD

---

## 🚀 **Getting Started**

### **Prerequisites**
- Node.js (v16 or higher)
- npm or yarn
- Git

### **Installation**

1. **Clone the repository**
```bash
git clone https://github.com/yousfiwiame/portfolio.git
cd portfolio
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Set up environment variables**
Create a `.env` file in the root directory:
```bash
# GitHub API Token for Portfolio
# Create a Personal Access Token at: https://github.com/settings/tokens
# Required scopes: public_repo, read:user
VITE_GITHUB_TOKEN=your_github_personal_access_token_here
```

### **Setting up GitHub Token**
To display your real GitHub activity in the portfolio:

1. Go to [GitHub Settings > Personal Access Tokens](https://github.com/settings/tokens)
2. Click "Generate new token (classic)"
3. Give it a name like "Portfolio Access"
4. Select scopes: `public_repo` and `read:user`
5. Copy the generated token
6. Add it to your `.env` file as `VITE_GITHUB_TOKEN`
7. Restart your development server

### **Running the Portfolio**

```bash
# Development mode
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The portfolio will be available at `http://localhost:8080`

---

## 📁 **Project Structure**

```
portfolio/
├── public/                 # Static assets
│   ├── certificates/      # PDF certificates (private)
│   ├── resumes/          # CV files (private)
│   ├── tech/             # Technology icons
│   ├── robots.txt        # SEO robots file
│   └── vite.svg          # Vite logo
├── src/
│   ├── components/        # React components
│   │   ├── ui/           # Reusable UI components
│   │   │   ├── accordion.tsx
│   │   │   ├── alert-dialog.tsx
│   │   │   ├── alert.tsx
│   │   │   ├── aspect-ratio.tsx
│   │   │   ├── avatar.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── breadcrumb.tsx
│   │   │   ├── button.tsx
│   │   │   ├── calendar.tsx
│   │   │   ├── card.tsx
│   │   │   ├── carousel.tsx
│   │   │   ├── chart.tsx
│   │   │   ├── checkbox.tsx
│   │   │   ├── collapsible.tsx
│   │   │   ├── command.tsx
│   │   │   ├── context-menu.tsx
│   │   │   ├── CustomCursor.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── drawer.tsx
│   │   │   ├── dropdown-menu.tsx
│   │   │   ├── form.tsx
│   │   │   ├── GitHubActivity.tsx
│   │   │   ├── GlassmorphicCard.tsx
│   │   │   ├── hover-card.tsx
│   │   │   ├── input-otp.tsx
│   │   │   ├── input.tsx
│   │   │   ├── Interactive3DButton.tsx
│   │   │   ├── InteractiveCLI.tsx
│   │   │   ├── label.tsx
│   │   │   ├── Laptop3DMockup.tsx
│   │   │   ├── menubar.tsx
│   │   │   ├── navigation-menu.tsx
│   │   │   ├── pagination.tsx
│   │   │   ├── ParticleBackground.tsx
│   │   │   ├── popover.tsx
│   │   │   ├── progress.tsx
│   │   │   ├── Project3DCard.tsx
│   │   │   ├── radio-group.tsx
│   │   │   ├── resizable.tsx
│   │   │   ├── scroll-area.tsx
│   │   │   ├── ScrollProgress.tsx
│   │   │   ├── select.tsx
│   │   │   ├── separator.tsx
│   │   │   ├── sheet.tsx
│   │   │   ├── sidebar.tsx
│   │   │   ├── skeleton.tsx
│   │   │   ├── Skill3DCard.tsx
│   │   │   ├── slider.tsx
│   │   │   ├── sonner.tsx
│   │   │   ├── switch.tsx
│   │   │   ├── table.tsx
│   │   │   ├── tabs.tsx
│   │   │   ├── TechStackCarousel.tsx
│   │   │   ├── textarea.tsx
│   │   │   ├── toast.tsx
│   │   │   ├── toaster.tsx
│   │   │   ├── toggle-group.tsx
│   │   │   ├── toggle.tsx
│   │   │   ├── tooltip.tsx
│   │   │   └── use-toast.ts
│   │   ├── About.tsx      # About section
│   │   ├── AnimatedSection.tsx # Animated wrapper component
│   │   ├── AnimatedText.tsx   # Text animation component
│   │   ├── Contact.tsx    # Contact form
│   │   ├── DevOps.tsx     # Skills & DevOps section
│   │   ├── DevOpsExperience.tsx # DevOps experience details
│   │   ├── Footer.tsx     # Footer component
│   │   ├── Header.tsx     # Navigation header
│   │   ├── Hero.tsx       # Hero section
│   │   ├── Interactive.tsx # GitHub activity section
│   │   ├── LanguageSwitcher.tsx # Language toggle
│   │   ├── MetaTags.tsx   # SEO meta tags
│   │   └── Projects.tsx   # Projects showcase
│   ├── context/           # React contexts
│   │   └── LanguageContext.tsx # Language switching context
│   ├── hooks/             # Custom React hooks
│   │   ├── use-mobile.tsx # Mobile detection hook
│   │   ├── use-toast.ts   # Toast notification hook
│   │   └── useIntersectionObserver.tsx # Intersection observer hook
│   ├── lib/               # Utility functions
│   │   └── utils.ts       # Common utility functions
│   ├── pages/             # Page components
│   │   ├── Index.tsx      # Main page
│   │   └── NotFound.tsx   # 404 page
│   ├── styles/            # Global styles
│   │   └── globals.css    # Global CSS styles
│   ├── App.css            # App-specific styles
│   ├── App.tsx            # Main App component
│   ├── index.css          # Entry point styles
│   ├── main.tsx           # Application entry point
│   └── vite-env.d.ts      # Vite environment types
├── .gitignore             # Git ignore file
├── components.json        # UI components configuration
├── eslint.config.js       # ESLint configuration
├── index.html             # HTML entry point
├── package-lock.json      # NPM lock file
├── package.json           # Project dependencies
├── postcss.config.js      # PostCSS configuration
├── README.md              # Project documentation
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.app.json      # TypeScript app configuration
├── tsconfig.json          # TypeScript configuration
├── tsconfig.node.json     # TypeScript Node configuration
└── vite.config.ts         # Vite build configuration
```

---

## 🎨 **Customization**

### **Colors & Theme**
- Modify colors in `tailwind.config.ts`
- Update CSS variables in `src/styles/globals.css`
- Customize theme switching logic

### **Content**
- Update personal information in component files
- Modify project data in `Projects.tsx`
- Customize skills and technologies in `DevOps.tsx`

### **Styling**
- Adjust glassmorphic effects
- Modify animations and transitions
- Update responsive breakpoints

---

## 📱 **Responsive Design**

The portfolio is fully responsive and optimized for:
- **Mobile** (320px+) - Optimized touch interactions
- **Tablet** (768px+) - Balanced layout for medium screens
- **Desktop** (1024px+) - Full feature experience
- **Large Screens** (1440px+) - Enhanced spacing and layout

---

## 🌟 **Performance Features**

- **Lazy Loading** - Components load on demand
- **Code Splitting** - Automatic bundle optimization
- **Image Optimization** - Optimized image loading
- **Animation Performance** - Hardware-accelerated animations
- **Bundle Analysis** - Optimized bundle sizes

---

## 🔧 **Development Scripts**

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run build:dev    # Build in development mode
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

---

## 📄 **License**

This project is open source and available under the [MIT License](LICENSE).

---

## 🤝 **Contributing**

Contributions are welcome! Please feel free to submit a Pull Request.

---

## 📞 **Contact**

- **Email**: wiame.yousfi22@gmail.com
- **LinkedIn**: [Wiame Yousfi](https://www.linkedin.com/in/wiame-yousfi-2a989a243/)
- **GitHub**: [@yousfiwiame](https://github.com/yousfiwiame)
- **Phone**: +212 6 74 98 44 99

---

<div align="center">

**Built with ❤️ by Wiame Yousfi - DevOps Engineer & Software Developer**

*"Building elegant solutions for complex challenges"*
