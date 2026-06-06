
import React, { useState } from 'react';
import { Github, ExternalLink, Building2, Workflow, Receipt, Activity, Users, Layers, CheckCircle2 } from 'lucide-react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

const ProjectGrid: React.FC = () => {
  const [filter, setFilter] = useState<Project['category'] | 'all'>('all');

  const filteredProjects = filter === 'all' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  const categories: { label: string; value: typeof filter }[] = [
    { label: 'All Projects', value: 'all' },
    { label: 'Enterprise', value: 'enterprise' },
    { label: 'AI Products', value: 'ai-integration' },
    { label: 'Systems', value: 'product' },
    { label: 'Internal', value: 'internal-tool' },
  ];

  // Icon mapping for projects
  const getProjectIcon = (projectId: string) => {
    const iconProps = { size: 40, strokeWidth: 1.5 };
    switch(projectId) {
      case 'stayntouch':
        return <Building2 {...iconProps} />;
      case 'ib-x':
        return <Workflow {...iconProps} />;
      case 'ib-billing':
        return <Receipt {...iconProps} />;
      case 'fitpact':
        return <Activity {...iconProps} />;
      case 'hrms':
        return <Users {...iconProps} />;
      case 'leadout':
        return <Layers {...iconProps} />;
      default:
        return <Building2 {...iconProps} />;
    }
  };

  return (
    <section id="projects" className="py-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20">
        <div>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight text-slate-900 dark:text-white">Featured Projects</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-lg leading-relaxed">
            High-impact applications delivered for enterprise clients and product-based platforms.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setFilter(cat.value)}
              className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                filter === cat.value
                  ? 'bg-primary-600 text-white shadow-xl shadow-primary-600/30'
                  : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-primary-500'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-200 dark:border-slate-800 overflow-hidden transition-all duration-500 hover:shadow-3xl hover:-translate-y-3 flex flex-col h-full"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-slate-100 via-slate-50 to-slate-200 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 border-b border-slate-200 dark:border-slate-800">
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="w-20 h-20 rounded-2xl bg-primary-500/10 dark:bg-primary-500/20 flex items-center justify-center text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform duration-300">
                  {getProjectIcon(project.id)}
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary-600/10 dark:from-primary-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <div className="flex gap-4">
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      className="px-5 py-2.5 rounded-xl bg-white text-slate-900 font-bold text-sm flex items-center gap-2 hover:bg-primary-500 hover:text-white transition-colors"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-white hover:text-slate-900 transition-colors"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Github size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>

            <div className="p-10 flex-1 flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <div className="text-[10px] font-bold text-primary-600 dark:text-primary-400 uppercase tracking-[0.2em]">
                  {project.category.replace('-', ' ')}
                </div>
                {project.isCurrent && (
                  <div className="flex items-center gap-1.5 px-2.5 py-1 bg-green-100 dark:bg-green-900/30 rounded-full">
                    <span className="flex h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-[9px] font-bold text-green-700 dark:text-green-400 uppercase tracking-wider">Active</span>
                  </div>
                )}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white leading-snug">
                {project.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-8 leading-relaxed line-clamp-3">
                {project.description}
              </p>

              {project.metrics && project.metrics.length > 0 && (
                <ul className="space-y-2 mb-8" aria-label={`${project.title} impact metrics`}>
                  {project.metrics.map((metric) => (
                    <li key={metric} className="flex items-start gap-2 text-xs font-semibold leading-relaxed text-slate-600 dark:text-slate-300">
                      <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-primary-600 dark:text-primary-400" />
                      <span>{metric}</span>
                    </li>
                  ))}
                </ul>
              )}
              
              <div className="flex flex-wrap gap-2 mb-10 mt-auto">
                {project.techStack.map((tech) => (
                  <span key={tech} className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-tighter">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800 pt-6 mt-auto">
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-semibold text-slate-400 italic">{project.role}</span>
                  {project.period && (
                    <span className="text-[10px] text-slate-400">{project.period}</span>
                  )}
                </div>
                {/* <button className="flex items-center gap-2 text-sm font-bold text-primary-600 dark:text-primary-400 group/btn">
                  Case Study
                  <ArrowRight size={18} className="group-hover/btn:translate-x-1.5 transition-transform" />
                </button> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectGrid;
