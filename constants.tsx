import {
  Technology,
  Experience,
  Project,
  Achievement,
  Education,
  Certification,
} from "./types";

export const PERSONAL_INFO = {
  name: "Sumit Patidar",
  title: "Senior Software Engineer",
  tagline:
    "Angular, React & Next.js | Enterprise UI Architecture | Performance, Testing & Accessibility",
  summary: `With 7+ years of experience, I deliver complex, enterprise-grade web applications using Angular, React, and Next.js.

Deep expertise across Angular v9-v21 (Signals, Deferrable Views, Standalone Components, Module Federation), TypeScript, RxJS, NgRx, and modern frontend architecture.

Proven track record of driving 30% performance improvements, achieving 90%+ unit-test coverage, and mentoring engineers to succeed against technical and commercial goals.`,
  yearsOfExperience: 7,
  email: "patidars110@gmail.com",
  linkedin: "https://linkedin.com/in/sumit-patidar-774ba4152/",
  github: "https://github.com/patidarsumit",
  portfolioUrl: "https://patidarsumit.github.io/portfolio",
  resumeUrl: "/portfolio/Sumit_Patidar_Resume.pdf",
  portraitUrl: "/portfolio/sumit-patidar.jpg",
  contact: "+91 7223893390",
  location: "Pune, India",
  availability: "Open to senior frontend and Angular leadership roles",
};

export const KEY_METRICS = [
  { value: "7+", label: "Years of Experience" },
  { value: "10K+", label: "Daily Active Users Served" },
  { value: "30%", label: "Performance Improvement" },
  { value: "90%+", label: "Unit Test Coverage" },
  { value: "40%", label: "Regression Defects Reduced" },
  { value: "5+", label: "Engineers Mentored" },
];

export const EDUCATION: Education[] = [
  {
    degree: "Bachelor of Engineering (B.E.)",
    field: "Computer Science",
    institution: "Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV), Bhopal",
    period: "Aug 2015 - Apr 2019",
    score: "84%",
  },
  {
    degree: "Higher Secondary (12th)",
    field: "MP Board",
    institution: "School of Excellence",
    period: "2014",
    score: "81.20%",
  },
  {
    degree: "Secondary (10th)",
    field: "MP Board",
    institution: "School of Excellence",
    period: "2012",
    score: "75%",
  },
];

export const CORE_TECH: Technology[] = [
  // Frontend
  {
    name: "Angular v9-v21",
    slug: "angular",
    category: "frontend",
    expertise: "Expert Level",
  },
  { name: "React", slug: "react", category: "frontend", expertise: "Advanced" },
  {
    name: "Next.js",
    slug: "nextjs",
    category: "frontend",
    expertise: "Advanced",
  },
  {
    name: "TypeScript",
    slug: "typescript",
    category: "frontend",
    expertise: "Expert Level",
  },
  {
    name: "JavaScript ES6+",
    slug: "js",
    category: "frontend",
    expertise: "Expert Level",
  },
  {
    name: "HTML5",
    slug: "html",
    category: "frontend",
    expertise: "Expert Level",
  },
  {
    name: "CSS3 / SCSS",
    slug: "css",
    category: "frontend",
    expertise: "Expert Level",
  },
  {
    name: "Tailwind CSS",
    slug: "tailwind",
    category: "frontend",
    expertise: "Advanced",
  },
  {
    name: "Bootstrap",
    slug: "bootstrap",
    category: "frontend",
    expertise: "Advanced",
  },

  // State & Architecture
  {
    name: "RxJS",
    slug: "rxjs",
    category: "state-arch",
    expertise: "Expert Level",
  },
  {
    name: "NgRx",
    slug: "angular",
    category: "state-arch",
    expertise: "Advanced",
  },
  {
    name: "Angular Signals",
    slug: "angular",
    category: "state-arch",
    expertise: "Advanced",
  },
  {
    name: "Standalone Components",
    slug: "angular",
    category: "state-arch",
    expertise: "Advanced",
  },
  {
    name: "Micro Frontends",
    slug: "webpack",
    category: "state-arch",
    expertise: "Advanced",
  },
  {
    name: "Nx Monorepo",
    slug: "webpack",
    category: "state-arch",
    expertise: "Advanced",
  },
  {
    name: "Component Architecture",
    slug: "angular",
    category: "state-arch",
    expertise: "Expert Level",
  },
  {
    name: "SOLID Patterns",
    slug: "webpack",
    category: "state-arch",
    expertise: "Advanced",
  },

  // Testing Excellence
  {
    name: "Cypress",
    slug: "cypress",
    category: "testing",
    expertise: "Advanced",
  },
  { name: "Jasmine", slug: "js", category: "testing", expertise: "Advanced" },
  { name: "Karma", slug: "js", category: "testing", expertise: "Advanced" },
  {
    name: "Testing Library",
    slug: "react",
    category: "testing",
    expertise: "Intermediate",
  },
  {
    name: "TDD / BDD",
    slug: "vitest",
    category: "testing",
    expertise: "Advanced",
  },
  {
    name: "Vitest",
    slug: "vitest",
    category: "testing",
    expertise: "Intermediate",
  },

  // Backend & Tools
  {
    name: "Node.js",
    slug: "nodejs",
    category: "backend-tools",
    expertise: "Advanced",
  },
  {
    name: "Express.js",
    slug: "express",
    category: "backend-tools",
    expertise: "Intermediate",
  },
  {
    name: "REST APIs",
    slug: "nodejs",
    category: "backend-tools",
    expertise: "Expert Level",
  },
  {
    name: "GraphQL",
    slug: "graphql",
    category: "backend-tools",
    expertise: "Beginner",
  },
  {
    name: "MySQL",
    slug: "mysql",
    category: "backend-tools",
    expertise: "Intermediate",
  },
  {
    name: "PostgreSQL",
    slug: "postgresql",
    category: "backend-tools",
    expertise: "Intermediate",
  },
  {
    name: "Docker",
    slug: "docker",
    category: "backend-tools",
    expertise: "Intermediate",
  },
  {
    name: "Kubernetes",
    slug: "kubernetes",
    category: "backend-tools",
    expertise: "Beginner",
  },
  {
    name: "AWS",
    slug: "aws",
    category: "backend-tools",
    expertise: "Beginner",
  },
  {
    name: "GitHub Actions",
    slug: "githubactions",
    category: "backend-tools",
    expertise: "Intermediate",
  },
  // { name: 'GitLab CI', slug: 'gitlab', category: 'backend-tools', expertise: 'Intermediate' },
  {
    name: "Git & GitHub",
    slug: "github",
    category: "backend-tools",
    expertise: "Expert Level",
  },
  {
    name: "GitHub Copilot",
    slug: "github",
    category: "backend-tools",
    expertise: "Advanced",
  },
];

export const EXPERIENCES: Experience[] = [
  {
    company: "VIT Infotech Pvt. Ltd.",
    role: "Senior Software Engineer / Angular Lead",
    duration: "June 2019 – Present",
    location: "Bhopal / Remote",
    highlights: [
      "Drove 30% performance improvement through lazy loading, OnPush change detection, virtual scrolling, and bundle optimization.",
      "Raised unit-test coverage from around 40% to 90%+ and introduced Cypress E2E automation, reducing regression defects by 40%.",
      "Designed scalable micro frontend patterns that enabled independent team deployments and reduced merge conflicts by 60%.",
    ],
    description: [
      "Architect and lead frontend development for enterprise Angular applications serving hospitality, government, HR, billing, and SaaS product teams.",
      "Adopt modern Angular capabilities including Signals, Deferrable Views, Control Flow syntax, standalone components, Angular Material, and Angular Universal where product needs fit.",
      "Build reusable component libraries and scalable UI systems that reduce time-to-feature and improve consistency across product streams.",
      "Implement WCAG 2.1 accessibility practices including semantic HTML, ARIA roles, keyboard navigation, and color contrast compliance.",
      "Mentor 5+ junior engineers through structured code reviews, pair programming, and architecture sessions.",
      "Collaborate with product, UX/UI, backend, and QA teams to translate requirements into reliable, maintainable frontend solutions.",
    ],
    technologies: [
      "Angular",
      "TypeScript",
      "NgRx",
      "RxJS",
      "React",
      "Next.js",
      "Tailwind",
      "Cypress",
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "stayntouch",
    title: "Stayntouch - Hotel PMS",
    description:
      "Enterprise Hotel Property Management System supporting booking, rate configuration, add-ons, pricing, kiosk, and mobility modules for hotel operations across 50+ properties.",
    image: "https://picsum.photos/seed/pms/800/600",
    techStack: ["Angular", "React", "RxJS", "NgRx", "Less", "REST APIs"],
    role: "Senior Frontend Developer",
    challenge:
      "Delivering booking, pricing, and configuration modules with complex validation workflows, high-concurrency data updates, and accessibility requirements.",
    solution:
      "Implemented dynamic configuration systems, optimized UI rendering, stabilized core journeys, and improved accessibility across key operator workflows.",
    metrics: [
      "50+ hotel properties supported",
      "Lighthouse score improved from 58 to 87",
      "120+ critical bugs resolved",
      "35% reduction in operator error rates",
    ],
    category: "enterprise",
    period: "Jan 2022 - Present",
    isCurrent: true,
  },
  {
    id: "ib-x",
    title: "IB-X - AI Workflow & RPA Platform",
    description:
      "AI-driven RPA and BPA platform for creating, configuring, and orchestrating automation agents through visual workflow builders.",
    image: "https://picsum.photos/seed/ibx-ai/800/600",
    techStack: ["Angular", "AntV", "TypeScript", "RxJS"],
    role: "Senior Frontend Developer",
    challenge:
      "Building an interactive drag-and-drop graph workflow builder with multiple node types, edge validation, and scalable configuration screens.",
    solution:
      "Built node configuration interfaces, graph visualization flows, and modular UI patterns for automation orchestration and agent management.",
    metrics: [
      "Graph-based workflow builder",
      "Multiple node types with validation",
      "AI/RPA automation orchestration",
    ],
    category: "ai-integration",
    period: "Jul 2025 - Present",
    isCurrent: true,
  },
  {
    id: "ib-billing",
    title: "IB-Billing - Enterprise Billing System",
    description:
      "Internal Enterprise Billing System with comprehensive financial workflow modules and invoice management.",
    image: "https://picsum.photos/seed/billing/800/600",
    techStack: ["Angular", "TypeScript", "SCSS", "REST APIs"],
    role: "Frontend Architect & Lead Developer",
    challenge:
      "Handling large financial data sets with secure and data-driven UI components.",
    solution:
      "Built optimized reporting modules with performance-focused rendering strategies for large-scale financial data.",
    metrics: ["Large financial datasets", "Invoice and report workflows"],
    category: "internal-tool",
  },
  {
    id: "cwc",
    title: "Central Warehousing Corporation (CWC)",
    description:
      "Enterprise management platform for Central Warehousing Corporation, enabling project creation, multi-level approval workflows, employee training, feedback collection, and reporting.",
    image: "https://cewacor.nic.in/images/logo.png",
    techStack: ["Angular", "TypeScript", "RxJS", "REST APIs"],
    role: "Frontend Architect & Lead Developer",
    challenge:
      "Designing robust approval workflows, role-based access, feedback modules, and scalable reporting for large-scale government management operations.",
    solution:
      "Implemented multi-level approval workflows, training modules, feedback systems, reporting flows, and secure role-based access across 8 user roles.",
    metrics: [
      "8 role-based access levels",
      "Multi-level approval workflows",
      "Zero unauthorized access incidents post-launch",
    ],
    category: "internal-tool",
    period: "Feb 2021 - Dec 2022",
  },
  {
    id: "fitpact",
    title: "Fitpact - Health & Fitness App",
    description:
      "Health and fitness application migrated from legacy AngularJS to a modern Angular framework while maintaining feature parity.",
    image: "https://picsum.photos/seed/fitpact/800/600",
    techStack: ["Angular", "AngularJS", "TypeScript", "Migration"],
    role: "Migration Lead",
    challenge:
      "Migrating the complete application from AngularJS to modern Angular with updated dependencies and minimal user disruption.",
    solution:
      "Systematically migrated components, services, and dependencies while maintaining feature parity and improving performance.",
    metrics: [
      "Full AngularJS to Angular migration",
      "Feature parity maintained",
    ],
    category: "product",
  },
  {
    id: "hrms",
    title: "HRMS - Human Resource Management System",
    description:
      "Human Resource Management System with payroll, attendance, and employee management modules.",
    image: "https://picsum.photos/seed/hrms/800/600",
    techStack: ["Angular", "TypeScript", "Angular Material", "RxJS", "JWT"],
    role: "UI Developer",
    challenge:
      "Building payroll, attendance, and employee management modules with secure authentication and granular role-based access.",
    solution:
      "Implemented JWT-based authentication, role-based access, and optimized data workflows for payroll and employee management.",
    metrics: [
      "200+ employees on payroll",
      "99.9% payroll accuracy after automation",
      "Zero production security incidents over 2 years",
    ],
    category: "internal-tool",
    period: "Aug 2019 - Jan 2021",
  },
  {
    id: "leadout",
    title: "LeadOut - SaaS Platform",
    description:
      "SaaS Platform with workflow-driven UI modules and enterprise-grade scalability.",
    image: "https://picsum.photos/seed/leadout/800/600",
    techStack: ["React", "TypeScript", "State Management"],
    role: "UI Developer",
    challenge:
      "Building workflow-driven UI modules with scalable state management logic.",
    solution:
      "Developed standardized UI components and state management patterns that supported faster feature development across workflow modules.",
    metrics: [
      "Reusable workflow UI modules",
      "Standardized state management patterns",
    ],
    category: "enterprise",
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "Frontend Lead Status",
    description:
      "Promoted to lead roles for multiple concurrent product streams based on architectural excellence.",
    date: "2022",
    icon: "Users",
  },
  {
    title: "Engineering Honor",
    description:
      "Academic excellence with an 84% score in Bachelor of Engineering from RGPV.",
    date: "2019",
    icon: "Award",
  },
  {
    title: "Architecture Ownership",
    description:
      "Directly responsible for the UI architecture of 10+ major products at VIT Infotech.",
    date: "Active",
    icon: "Zap",
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: "UI/UX Certificate",
    issuer: "Coursera",
    issueDate: "",
    credentialId: "",
    credentialUrl: "",
    skills: ["UI/UX", "Design Thinking"],
    logo: "https://skillicons.dev/icons?i=figma",
    inProgress: true,
  },
  {
    title: "Introduction to Front-End Development",
    issuer: "Meta",
    issueDate: "2025-01",
    credentialId: "2WVPML4AGGDA",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/records/2WVPM4LAGGDA",
    skills: [
      "Front-End Framework",
      "Web Design and Development",
      "Responsive Web Design",
      "HTML & CSS",
      "Web Development Tools",
    ],
    logo: "https://skillicons.dev/icons?i=html",
  },
  {
    title: "Programming with JavaScript",
    issuer: "Meta",
    issueDate: "2025-09",
    credentialId: "ZZELZ4MOKKZ9",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/ZZELZ4MOKKZ9",
    skills: [
      "Object Oriented Programming (OOP)",
      "Javascript",
      "Node.JS",
      "Express.JS",
      "Programming Principles",
      "Event-Driven Programming",
      "JavaScript Testing Framework",
    ],
    logo: "https://skillicons.dev/icons?i=js",
  },
  {
    title: "React Basics",
    issuer: "Meta",
    issueDate: "2025-01",
    credentialId: "A59WGAMBOHKH",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/A59WGAMBOHKH",
    skills: [
      "React.js",
      "UI Components",
      "HTML",
      "CSS",
      "Data Management",
      "Application Development",
      "React Hooks",
      "React Router",
    ],
    logo: "https://skillicons.dev/icons?i=react",
  },
  {
    title: "Advanced React",
    issuer: "Meta",
    issueDate: "2025-01",
    credentialId: "UCS9112Y5NMB",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/UCS9112Y5NMB",
    skills: [
      "React",
      "Material UI",
      "Hooks",
      "State Management",
      "Redux",
      "Software Design Patterns",
      "Unit Testing",
      "Context Management",
      "Category: Application Programming Interface (API)",
    ],
    logo: "https://skillicons.dev/icons?i=react",
  },
  {
    title: "Agile with Atlassian Jira",
    issuer: "Atlassian",
    issueDate: "2025-01",
    credentialId: "9D028EFD1X4C",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/9D028EFD1X4C",
    skills: [
      "Atlassian Bamboo",
      "Confluence",
      "Jira",
      "Agile Project Management",
      "Scrum",
      "Kanban",
      "Opsgenie",
      "Backlogs",
      "Sprint Retrospectives",
      "Workflow Management",
    ],
    logo: "",
  },
];
