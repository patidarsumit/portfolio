
import React, { useState } from 'react';
import { CORE_TECH } from '../constants';
import { Technology } from '../types';
import { FlaskConical, Code2 } from 'lucide-react';

const SkillCard: React.FC<{ tech: Technology }> = ({ tech }) => {
  const [hasError, setHasError] = useState(false);

  return (
    <div 
      className="group relative flex flex-col items-center justify-center p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl transition-all duration-300 hover:border-primary-500 hover:shadow-xl hover:-translate-y-1.5"
      aria-label={`Technology: ${tech.name}`}
    >
      <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center mb-4">
        {!hasError ? (
          <img
            src={`https://skillicons.dev/icons?i=${tech.slug}`}
            alt={`${tech.name} icon`}
            className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110"
            loading="lazy"
            onError={() => setHasError(true)}
          />
        ) : (
          <div className="text-primary-600 dark:text-primary-400 transform group-hover:scale-110 transition-transform">
            {tech.category === 'testing' ? <FlaskConical size={36} /> : <Code2 size={36} />}
          </div>
        )}
      </div>
      <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors text-center uppercase tracking-wider">
        {tech.name}
      </span>
      
      <span className="sr-only">{tech.name}</span>

      <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-[10px] font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl z-20">
        {tech.expertise}
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const categories = [
    { id: 'frontend', title: 'Modern Frontend', description: 'Angular-first expertise with React, Next.js, TypeScript, and responsive UI systems.' },
    { id: 'state-arch', title: 'Architecture & State', description: 'Reactive architecture with RxJS, NgRx, Signals, micro frontends, and reusable component systems.' },
    { id: 'testing', title: 'Testing Excellence', description: 'Stability through Cypress, Jasmine, Karma, Testing Library, TDD/BDD, and Vitest.' },
    { id: 'backend-tools', title: 'Backend & DevOps', description: 'API integration, Node.js, databases, Docker, CI/CD, Git, and cloud-aware delivery.' }
  ];

  const allSkillsList = CORE_TECH.map(t => t.name).join(', ');

  return (
    <section id="skills" className="py-24">
      {/* Search Engine Optimization hidden text */}
      <div className="sr-only" aria-hidden="false">
        <h2>Full Technical Expertise List</h2>
        <p>{allSkillsList}</p>
        <p>Specialized in Angular Signals, RxJS optimization, Vitest testing, and Lead Frontend Architecture.</p>
      </div>

      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Technical Mastery</h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
          A senior-level toolkit built on 7+ years of delivering high-concurrency, enterprise-grade software.
        </p>
      </div>

      <div className="space-y-20">
        {categories.map((category) => (
          <div key={category.id} className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-end gap-3 md:gap-8 border-b border-slate-200 dark:border-slate-800 pb-6">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                {category.title}
              </h3>
              <p className="text-slate-500 dark:text-slate-500 text-sm italic">
                {category.description}
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-5" role="list">
              {CORE_TECH.filter(t => t.category === category.id).map((tech) => (
                <div key={tech.name + tech.slug} role="listitem">
                  <SkillCard tech={tech} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
