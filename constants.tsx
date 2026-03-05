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
  summary: `With 6.5+ years of experience building scalable enterprise web applications using Angular, React, and modern frontend technologies.

Expertise in designing reusable component architectures, optimizing frontend performance, and modernizing enterprise user interfaces.

Strong experience working in Agile environments, collaborating with cross-functional teams, and contributing through code reviews, testing, and CI/CD practices.

Proven ability to deliver high-quality, maintainable UI solutions while reducing regression issues through automation and strong engineering best practices.`,
  yearsOfExperience: 6.5,
  email: 'patidars110@gmail.com',
  linkedin: 'https://linkedin.com/in/sumit-patidar-774ba4152/',
  github: 'https://github.com/patidarsumit',
  resumeUrl: '/portfolio/sumit-resume.pdf',
  portraitUrl: '/portfolio/sumit-patidar.jpg',
  contact: '7223893390',
  location: 'Onsite / Remote',
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
    name: 'Angular',
    slug: 'angular',
    category: 'frontend',
    expertise: 'Expert Level',
  },
  { name: 'React', slug: 'react', category: 'frontend', expertise: 'Advanced' },
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
  { name: 'SCSS', slug: 'sass', category: 'frontend', expertise: 'Advanced' },

  // State & Architecture
  {
    name: 'RxJS',
    slug: 'rxjs',
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
    name: 'Component Architecture',
    slug: 'angular',
    category: 'state-arch',
    expertise: 'Expert Level',
  },
  {
    name: 'Scalable Patterns',
    slug: 'webpack',
    category: 'state-arch',
    expertise: 'Advanced',
  },

  // Testing Excellence
  {
    name: 'Cypress',
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
  { name: 'Karma', slug: 'flask', category: 'testing', expertise: 'Advanced' },
  // {
  //   name: 'Vitest',
  //   slug: 'vitest',
  //   category: 'testing',
  //   expertise: 'Intermediate',
  // },

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
  // {
  //   name: 'Kubernetes',
  //   slug: 'kubernetes',
  //   category: 'backend-tools',
  //   expertise: 'Beginner',
  // },
  {
    name: 'GitHub Actions',
    slug: 'githubactions',
    category: 'backend-tools',
    expertise: 'Intermediate',
  },
  {
    name: 'Git & GitHub',
    slug: 'github',
    category: 'backend-tools',
    expertise: 'Expert Level',
  },
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'VIT Infotech Pvt. Ltd.',
    role: 'Senior Software Engineer / Frontend Lead',
    duration: 'June 2019 – Present',
    location: 'Pune',
    description: [
      'Serving as a core frontend lead for multiple enterprise and product-based applications.',
      'Own UI architecture, driving migrations from legacy systems to modern Angular (17/18) with Signals.',
      'Mentor junior and mid-level developers, enforcing strict code quality and maintainable standards.',
      'Drive performance optimizations that significantly improved Lighthouse scores for enterprise dashboards.',
    ],
    technologies: ['Angular', 'React', 'Next.js', 'RxJS', 'Tailwind'],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'stayntouch',
    title: 'STAYNTOUCH (PMS)',
    description:
      'Hotel Property Management System with comprehensive booking, rate configuration, add-ons and pricing modules used by hotel operations.',
    image: 'https://picsum.photos/seed/pms/800/600',
    techStack: ['Angular', 'React', 'Ruby', 'RxJS', 'Less'],
    role: 'Senior Frontend developer',
    challenge:
      'Developed various features for PMS, Chain, Kiosk and Mobility applications with complex validation workflows.',
    solution:
      'Implemented dynamic configuration systems and optimized UI rendering for improved application stability.',
    category: 'enterprise',
    period: 'Jan 2022 - Present',
    isCurrent: true,
  },
  {
    id: 'ib-x',
    title: 'IB-X',
    description:
      'AI-Based Workflow & RPA Platform for creating AI-driven RPA and BPA agents with visual workflow orchestration.',
    image: 'https://picsum.photos/seed/ibx-ai/800/600',
    techStack: ['Angular', 'AntV', 'TypeScript', 'RxJS'],
    role: 'Senior Frontend developer',
    challenge:
      'Building dynamic graph-based workflow builder with node-based visualization for complex automation.',
    solution:
      'Built interactive drag-and-drop node configuration interfaces and designed scalable UI modules for automation orchestration and agent management.',
    category: 'ai-integration',
  },
  {
    id: 'ib-billing',
    title: 'IB-Billing',
    description:
      'Internal Enterprise Billing System with comprehensive financial workflow modules and invoice management.',
    image: 'https://picsum.photos/seed/billing/800/600',
    techStack: ['Angular', 'TypeScript', 'SCSS', 'REST APIs'],
    role: 'Frontend Architect & Lead Developer',
    challenge:
      'Handling large financial data sets with secure and data-driven UI components.',
    solution:
      'Built optimized reporting modules with performance-focused rendering for large-scale financial data.',
    category: 'internal-tool',
  },
  {
    id: 'cwc',
    title: 'Central Warehousing Corporation (CWC)',
    description:
      'Enterprise Management Platform for Central Warehousing Corporation, enabling project creation, multi-level approval workflows, feedback collection, and comprehensive report management.',
    image: 'https://cewacor.nic.in/images/logo.png',
    techStack: ['Angular', 'TypeScript', 'RxJS', 'REST APIs'],
    role: 'Frontend Architect & Lead Developer',
    challenge:
      'Designing robust approval workflows, feedback modules, and scalable reporting for large-scale management operations.',
    solution:
      'Implemented multi-level project approval, integrated feedback and reporting systems, and optimized UI for high-volume management tasks.',
    category: 'internal-tool',
  },
  {
    id: 'fitpact',
    title: 'Fitpact',
    description:
      'Health & Fitness Application with complete migration from AngularJS to modern Angular framework.',
    image: 'https://picsum.photos/seed/fitpact/800/600',
    techStack: ['Angular', 'TypeScript', 'Migration'],
    role: 'Migration Lead',
    challenge:
      'Complete migration of entire project from legacy AngularJS to modern Angular with updated dependencies.',
    solution:
      'Systematically migrated components, services, and dependencies while maintaining feature parity and improving performance.',
    category: 'product',
  },
  {
    id: 'hrms',
    title: 'HRMS',
    description:
      'Human Resource Management System with payroll, attendance, and employee management modules.',
    image: 'https://picsum.photos/seed/hrms/800/600',
    techStack: [
      'Angular',
      'TypeScript',
      'Angular Material',
      'RxJS',
      'Security',
    ],
    role: 'UI Developer',
    challenge:
      'Building comprehensive HR modules with secure authentication and role-based access systems.',
    solution:
      'Implemented secure authentication workflows and optimized performance for employee data management.',
    category: 'internal-tool',
  },
  {
    id: 'leadout',
    title: 'LeadOut',
    description:
      'SaaS Platform with workflow-driven UI modules and enterprise-grade scalability.',
    image: 'https://picsum.photos/seed/leadout/800/600',
    techStack: ['REACT', 'TypeScript', 'State Management'],
    role: 'UI Developer',
    challenge:
      'Building workflow-driven UI modules with scalable state management logic.',
    solution:
      'Developed standardized UI components and robust state management patterns for rapid feature development.',
    category: 'enterprise',
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: 'Frontend Lead Status',
    description:
      'Promoted to lead roles for multiple concurrent product streams based on architectural excellence.',
    date: '2022',
    icon: 'Users',
  },
  {
    title: 'Engineering Honor',
    description:
      'Academic excellence with an 84% score in Bachelor of Engineering from RGPV.',
    date: '2019',
    icon: 'Award',
  },
  {
    title: 'Architecture Ownership',
    description:
      'Directly responsible for the UI architecture of 10+ major products at VIT Infotech.',
    date: 'Active',
    icon: 'Zap',
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
      'Application Development',
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
      'Category: Application Programming Interface (API)',
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
      'Atlassian Bamboo',
      'Confluence',
      'Jira',
      'Agile Project Management',
      'Scrum',
      'Kanban',
      'Opsgenie',
      'Backlogs',
      'Sprint Retrospectives',
      'Workflow Management',
    ],
    logo: '',
  },
];
