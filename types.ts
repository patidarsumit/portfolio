
export interface Technology {
  name: string;
  slug: string;
  category: 'frontend' | 'state-arch' | 'testing' | 'backend-tools';
  expertise: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert Level';
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string[];
  technologies: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  role: string;
  challenge: string;
  solution: string;
  githubUrl?: string;
  liveUrl?: string;
  category: 'enterprise' | 'product' | 'ai-integration' | 'internal-tool';
  period?: string;
  isCurrent?: boolean;
}

export interface Achievement {
  title: string;
  description: string;
  date: string;
  icon: string;
}

export interface Education {
  degree: string;
  field: string;
  institution: string;
  period: string;
  score: string;
}

export interface Certification {
  title: string;
  issuer: string;
  issueDate: string;
  credentialId: string;
  credentialUrl: string;
  skills: string[];
  logo: string;
  inProgress?: boolean;
}
