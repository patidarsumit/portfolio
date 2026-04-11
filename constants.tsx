import {
  Technology,
  Experience,
  Project,
  Achievement,
  Education,
  Certification,
} from './types';

export const PERSONAL_INFO = {
  name: 'Sumit Patidar',
  title: 'Senior Software Engineer',
  summary: `With 6.5+ years of expertise building high-performance, scalable enterprise web applications using Angular (v9–v21), React, and Next.js.

Improved application performance by 30%, achieved 90%+ unit-test coverage, and reduced regression defects by 40% through Cypress E2E automation. Specialist in Angular 21 Signals, Deferrable Views, micro frontend architecture (Module Federation), and WCAG 2.1 accessibility.

Strong experience in Agile environments, collaborating with cross-functional teams, and contributing through architecture decisions, code reviews, and CI/CD pipelines.

Proven ability to lead and mentor engineering teams while delivering maintainable, high-quality UI solutions at enterprise scale.`,
  yearsOfExperience: 6.5,
  email: 'patidars110@gmail.com',
  linkedin: 'https://linkedin.com/in/sumit-patidar-774ba4152/',
  github: 'https://github.com/patidarsumit',
  resumeUrl: '/portfolio/Sumit_Patidar_Resume.pdf',
  portraitUrl: '/portfolio/sumit-patidar.jpg',
  contact: '7223893390',
  location: 'Pune, India',
};

export const EDUCATION: Education[] = [
  {
    degree: 'Bachelor of Engineering (B.E.)',
    field: 'Computer Science',
    institution: 'RGPV, Bhopal',
    period: '2015 – 2019',
    score: '84%',
  },
  {
    degree: 'Higher Secondary (12th)',
    field: 'MP Board',
    institution: 'School of Excellence',
    period: '2014',
    score: '81.20%',
  },
  {
    degree: 'Secondary (10th)',
    field: 'MP Board',
    institution: 'School of Excellence',
    period: '2012',
    score: '75%',
  },
];

export const CORE_TECH: Technology[] = [
  // Frontend
  {
    name: 'Angular (v9–v21)',
    slug: 'angular',
    category: 'frontend',
    expertise: 'Expert Level',
  },
  {
    name: 'React',
    slug: 'react',
    category: 'frontend',
    expertise: 'Advanced',
  },
  {
    name: 'Next.js',
    slug: 'nextjs',
    category: 'frontend',
    expertise: 'Advanced',
  },
  {
    name: 'TypeScript',
    slug: 'typescript',
    category: 'frontend',
    expertise: 'Expert Level',
  },
  {
    name: 'JavaScript ES6+',
    slug: 'js',
    category: 'frontend',
    expertise: 'Expert Level',
  },
  {
    name: 'HTML5',
    slug: 'html',
    category: 'frontend',
    expertise: 'Expert Level',
  },
  {
    name: 'CSS3',
    slug: 'css',
    category: 'frontend',
    expertise: 'Expert Level',
  },
  {
    name: 'Tailwind CSS',
    slug: 'tailwind',
    category: 'frontend',
    expertise: 'Advanced',
  },
  {
    name: 'SCSS',
    slug: 'sass',
    category: 'frontend',
    expertise: 'Advanced',
  },
  {
    name: 'Bootstrap',
    slug: 'bootstrap',
    category: 'frontend',
    expertise: 'Advanced',
  },

  // State & Architecture
  {
    name: 'RxJS',
    slug: 'rxjs',
    category: 'state-arch',
    expertise: 'Expert Level',
  },
  {
    name: 'NgRx',
    slug: 'angular',
    category: 'state-arch',
    expertise: 'Expert Level',
  },
  {
    name: 'Angular Signals',
    slug: 'angular',
    category: 'state-arch',
    expertise: 'Advanced',
  },
  {
    name: 'Deferrable Views (@defer)',
    slug: 'angular',
    category: 'state-arch',
    expertise: 'Advanced',
  },
  {
    name: 'Micro Frontend (Module Federation)',
    slug: 'webpack',
    category: 'state-arch',
    expertise: 'Advanced',
  },
  {
    name: 'Component Architecture',
    slug: 'angular',
    category: 'state-arch',
    expertise: 'Expert Level',
  },
  {
    name: 'WCAG 2.1 Accessibility',
    slug: 'html',
    category: 'state-arch',
    expertise: 'Advanced',
  },

  // Testing Excellence
  {
    name: 'Cypress (E2E)',
    slug: 'cypress',
    category: 'testing',
    expertise: 'Advanced',
  },
  {
    name: 'Jasmine',
    slug: 'flask',
    category: 'testing',
    expertise: 'Advanced',
  },
  {
    name: 'Karma',
    slug: 'flask',
    category: 'testing',
    expertise: 'Advanced',
  },

  // Backend & Tools
  {
    name: 'Node.js',
    slug: 'nodejs',
    category: 'backend-tools',
    expertise: 'Advanced',
  },
  {
    name: 'Express.js',
    slug: 'express',
    category: 'backend-tools',
    expertise: 'Intermediate',
  },
  {
    name: 'REST APIs',
    slug: 'nodejs',
    category: 'backend-tools',
    expertise: 'Expert Level',
  },
  {
    name: 'MySQL',
    slug: 'mysql',
    category: 'backend-tools',
    expertise: 'Intermediate',
  },
  {
    name: 'PostgreSQL',
    slug: 'postgresql',
    category: 'backend-tools',
    expertise: 'Intermediate',
  },
  {
    name: 'Docker',
    slug: 'docker',
    category: 'backend-tools',
    expertise: 'Intermediate',
  },
  {
    name: 'GitHub Actions',
    slug: 'githubactions',
    category: 'backend-tools',
    expertise: 'Intermediate',
  },
  {
    name: 'GitLab CI/CD',
    slug: 'github',
    category: 'backend-tools',
    expertise: 'Intermediate',
  },
  {
    name: 'AWS',
    slug: 'github',
    category: 'backend-tools',
    expertise: 'Intermediate',
  },
  {
    name: 'Git & GitHub',
    slug: 'github',
    category: 'backend-tools',
    expertise: 'Expert Level',
  },
  {
    name: 'GitHub Copilot',
    slug: 'github',
    category: 'backend-tools',
    expertise: 'Advanced',
  },
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'VIT Infotech Pvt. Ltd.',
    role: 'Senior Software Engineer / Frontend Lead',
    duration: 'June 2019 – Present',
    location: 'Pune',
    description: [
      'Led frontend architecture for 10+ enterprise and product applications, owning end-to-end UI design and delivery across multiple concurrent product streams.',
      'Improved application performance by 30% through lazy loading, OnPush change detection, virtual scrolling, and Webpack bundle optimization — improving Core Web Vitals scores.',
      'Elevated unit test coverage from ~40% to 90%+ using Karma/Jasmine and introduced Cypress E2E automation, reducing regression defects by 40% across release cycles.',
      'Designed and enforced scalable micro frontend architecture using Module Federation, enabling independent team deployments and reducing inter-team merge conflicts by 60%.',
      'Adopted Angular 21 latest features including Signals, Deferrable Views (@defer), and new Control Flow syntax (@if/@for) — improving rendering performance and code maintainability.',
      'Implemented WCAG 2.1 accessibility standards across UI components including semantic HTML, ARIA roles, keyboard navigation, and colour contrast compliance.',
      'Established CI/CD pipelines via GitHub Actions and GitLab CI with AWS deployments — reduced deployment time by 35% and enabled zero-downtime releases.',
      'Mentored 4 junior engineers through structured code reviews and architecture sessions — two promoted to mid-level within 18 months.',
    ],
    technologies: ['Angular', 'React', 'Next.js', 'RxJS', 'NgRx', 'Tailwind', 'Cypress', 'AWS'],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'stayntouch',
    title: 'STAYNTOUCH (PMS)',
    description:
      'Hotel Property Management System with comprehensive booking, rate configuration, add-ons and pricing modules used by hotel operations across 50+ properties.',
    image: 'https://picsum.photos/seed/pms/800/600',
    techStack: ['Angular', 'React', 'Ruby', 'RxJS', 'Less'],
    role: 'Senior Frontend Developer',
    challenge:
      'Handling high-concurrency real-time data updates across booking, pricing and configuration modules with complex validation workflows and dynamic configuration systems.',
    solution:
      'Optimized UI rendering for zero visible lag under load, improved Lighthouse score from 58 to 87, and reduced operator error rates by 35% through smart form state management.',
    category: 'enterprise',
    period: 'Jan 2022 – Present',
    isCurrent: true,
  },
  {
    id: 'ib-x',
    title: 'IB-X – AI Workflow & RPA Platform',
    description:
      'AI-Based Workflow & RPA Platform for creating AI-driven RPA and BPA agents with visual workflow orchestration for non-technical users.',
    image: 'https://picsum.photos/seed/ibx-ai/800/600',
    techStack: ['Angular', 'AntV G6', 'TypeScript', 'RxJS'],
    role: 'Senior Frontend Developer',
    challenge:
      'Building a dynamic graph-based workflow builder supporting 50+ node types with real-time edge validation and complex automation orchestration.',
    solution:
      'Built interactive drag-and-drop node configuration interfaces using AntV G6 and designed scalable, composable UI modules for automation orchestration and agent management.',
    category: 'ai-integration',
    period: 'Jul 2025 – Present',
    isCurrent: true,
  },
  {
    id: 'ib-billing',
    title: 'IB-Billing',
    description:
      'Internal Enterprise Billing System with comprehensive financial workflow modules, invoice management, and large-scale reporting.',
    image: 'https://picsum.photos/seed/billing/800/600',
    techStack: ['Angular', 'TypeScript', 'SCSS', 'REST APIs'],
    role: 'Frontend Architect & Lead Developer',
    challenge:
      'Handling large financial data sets with secure, performant, and data-driven UI components for high-volume invoice and billing operations.',
    solution:
      'Built optimized reporting modules with performance-focused rendering, reducing data load times significantly for large-scale financial data views.',
    category: 'internal-tool',
  },
  {
    id: 'cwc',
    title: 'Central Warehousing Corporation (CWC)',
    description:
      'Enterprise Management Platform for Central Warehousing Corporation — internal employee management with multi-level approval workflows, training modules, feedback collection, and report management.',
    image: 'https://cewacor.nic.in/images/logo.png',
    techStack: ['Angular', 'TypeScript', 'RxJS', 'REST APIs'],
    role: 'Frontend Architect & Lead Developer',
    challenge:
      'Designing robust multi-level approval workflows, employee training modules, and feedback systems with role-based access across 8 user roles for large-scale government operations.',
    solution:
      'Implemented secure RBAC, integrated training and feedback modules, and optimized UI for high-volume management tasks — achieving zero unauthorized access incidents post-launch.',
    category: 'internal-tool',
    period: 'Feb 2021 – Dec 2022',
  },
  {
    id: 'fitpact',
    title: 'Fitpact',
    description:
      'Health & Fitness Application — complete migration from legacy AngularJS to modern Angular framework, modernising the entire codebase while maintaining feature parity.',
    image: 'https://picsum.photos/seed/fitpact/800/600',
    techStack: ['Angular', 'TypeScript', 'Migration', 'RxJS'],
    role: 'Migration Lead',
    challenge:
      'Migrating an entire production AngularJS application to modern Angular with updated dependencies, new patterns, and zero feature regression — while keeping the app live.',
    solution:
      'Systematically migrated components, services, and routing using a hybrid migration strategy, improving performance and maintainability while ensuring full feature parity.',
    category: 'product',
  },
  {
    id: 'hrms',
    title: 'HRMS',
    description:
      'Human Resource Management System with payroll, attendance, and employee management modules — processing payroll for 200+ employees with 99.9% accuracy.',
    image: 'https://picsum.photos/seed/hrms/800/600',
    techStack: ['Angular', 'TypeScript', 'Angular Material', 'RxJS', 'Security'],
    role: 'UI Developer',
    challenge:
      'Building comprehensive HR modules with secure authentication, role-based access, and accurate payroll processing for a large employee base.',
    solution:
      'Implemented JWT-based authentication, granular RBAC, and optimized data management — achieving zero security incidents in production over 2 years.',
    category: 'internal-tool',
    period: 'Aug 2019 – Jan 2021',
  },
  {
    id: 'leadout',
    title: 'LeadOut',
    description:
      'SaaS Platform with workflow-driven UI modules and enterprise-grade scalability for lead and pipeline management.',
    image: 'https://picsum.photos/seed/leadout/800/600',
    techStack: ['React', 'TypeScript', 'Redux', 'REST APIs'],
    role: 'UI Developer',
    challenge:
      'Building workflow-driven UI modules with scalable state management logic for a fast-growing SaaS platform.',
    solution:
      'Developed standardised reusable UI components and robust Redux state management patterns, enabling rapid and consistent feature development.',
    category: 'enterprise',
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: 'System Architecture & Scalability',
    description:
      'Designed and implemented a modular architecture enabling independent deployments and better separation of concerns — reduced cross-team dependencies and improved system scalability.',
    date: '2023–Present',
    icon: 'Layout',
  },
  {
    title: 'Performance & Efficiency Improvements',
    description:
      'Optimized application performance and resource usage — achieved 30%+ improvement in load times and significantly enhanced overall system responsiveness.',
    date: '2023',
    icon: 'Zap',
  },
  {
    title: 'Quality & Automation',
    description:
      'Established automated testing and quality practices — increased test coverage from 40% to 90%+, reducing production issues and improving release stability.',
    date: '2021',
    icon: 'Award',
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: 'UI/UX Certificate',
    issuer: 'Coursera',
    issueDate: '',
    credentialId: '',
    credentialUrl: '',
    skills: ['UI/UX', 'Design Thinking'],
    logo: 'https://skillicons.dev/icons?i=figma',
    inProgress: true,
  },
  {
    title: 'Introduction to Front-End Development',
    issuer: 'Meta',
    issueDate: '2025-01',
    credentialId: '2WVPML4AGGDA',
    credentialUrl:
      'https://www.coursera.org/account/accomplishments/records/2WVPM4LAGGDA',
    skills: [
      'Front-End Framework',
      'Web Design and Development',
      'Responsive Web Design',
      'HTML & CSS',
      'Web Development Tools',
    ],
    logo: 'https://skillicons.dev/icons?i=html',
  },
  {
    title: 'Programming with JavaScript',
    issuer: 'Meta',
    issueDate: '2025-09',
    credentialId: 'ZZELZ4MOKKZ9',
    credentialUrl:
      'https://www.coursera.org/account/accomplishments/verify/ZZELZ4MOKKZ9',
    skills: [
      'Object Oriented Programming (OOP)',
      'Javascript',
      'Node.JS',
      'Express.JS',
      'Programming Principles',
      'Event-Driven Programming',
      'JavaScript Testing Framework',
    ],
    logo: 'https://skillicons.dev/icons?i=js',
  },
  {
    title: 'React Basics',
    issuer: 'Meta',
    issueDate: '2025-01',
    credentialId: 'A59WGAMBOHKH',
    credentialUrl:
      'https://www.coursera.org/account/accomplishments/verify/A59WGAMBOHKH',
    skills: [
      'React.js',
      'UI Components',
      'HTML',
      'CSS',
      'Data Management',
      'React Hooks',
      'React Router',
    ],
    logo: 'https://skillicons.dev/icons?i=react',
  },
  {
    title: 'Advanced React',
    issuer: 'Meta',
    issueDate: '2025-01',
    credentialId: 'UCS9112Y5NMB',
    credentialUrl:
      'https://www.coursera.org/account/accomplishments/verify/UCS9112Y5NMB',
    skills: [
      'React',
      'Material UI',
      'Hooks',
      'State Management',
      'Redux',
      'Software Design Patterns',
      'Unit Testing',
      'Context Management',
    ],
    logo: 'https://skillicons.dev/icons?i=react',
  },
  {
    title: 'Agile with Atlassian Jira',
    issuer: 'Atlassian',
    issueDate: '2025-01',
    credentialId: '9D028EFD1X4C',
    credentialUrl:
      'https://www.coursera.org/account/accomplishments/verify/9D028EFD1X4C',
    skills: [
      'Agile Project Management',
      'Scrum',
      'Kanban',
      'Jira',
      'Confluence',
      'Sprint Planning',
      'Workflow Management',
    ],
    logo: 'https://skillicons.dev/icons?i=js',
  },
];
