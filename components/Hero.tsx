
import React from 'react';
import { FileText, ChevronRight, Github, Linkedin } from 'lucide-react';
import { PERSONAL_INFO, CORE_TECH } from '../constants';

const Hero: React.FC = () => {
  // Aggregate all tech names for a hidden search-optimized list
  const techStackString = CORE_TECH.map(t => t.name).join(', ');

  return (
    <section className="pt-32 pb-20 md:pt-48 md:pb-32 flex flex-col md:flex-row items-center gap-12" aria-label="Introduction">
      <div className="flex-1 space-y-8 text-center md:text-left">
        {/* ATS-OPTIMIZED HIDDEN BLOCK: 
            This ensures that even if CSS fails or a bot only reads text, 
            it finds a keyword-rich summary immediately. */}
        <div className="sr-only" aria-hidden="false">
          <h1>{PERSONAL_INFO.name} - {PERSONAL_INFO.title}</h1>
          <p>Expertise in: {techStackString}.</p>
          <p>{PERSONAL_INFO.summary}</p>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 text-sm font-semibold" aria-hidden="true">
          <span className="flex h-2 w-2 rounded-full bg-primary-600 animate-pulse"></span>
          Available for senior leadership roles
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-indigo-600">{PERSONAL_INFO.name.split(' ')[0]}</span>.
          <br />
          <span className="block text-slate-900 dark:text-white mt-2">{PERSONAL_INFO.title}</span>
        </h1>
        
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto md:mx-0 leading-relaxed">
          {PERSONAL_INFO.summary}
        </p>

        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
          <a
            href="#projects"
            className="group px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-2xl font-bold flex items-center gap-2 transition-all transform hover:-translate-y-1 shadow-lg shadow-primary-600/20"
          >
            View Projects
            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href={PERSONAL_INFO.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-primary-500 dark:hover:border-primary-500 rounded-2xl font-bold flex items-center gap-2 transition-all transform hover:-translate-y-1"
          >
            <FileText size={20} />
            Download CV
          </a>
        </div>

        <div className="flex items-center justify-center md:justify-start gap-6 pt-4">
          <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 dark:hover:text-slate-50 transition-colors" aria-label="Github Profile">
            <Github size={24} />
          </a>
          <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 dark:hover:text-slate-50 transition-colors" aria-label="LinkedIn Profile">
            <Linkedin size={24} />
          </a>
        </div>
      </div>

      <div className="relative flex-shrink-0" aria-hidden="true">
        <div className="relative z-10 w-64 h-64 md:w-96 md:h-96 rounded-[3rem] overflow-hidden rotate-3 hover:rotate-0 transition-transform duration-500 shadow-2xl">
          <img
            src={PERSONAL_INFO.portraitUrl}
            alt={`${PERSONAL_INFO.name} professional portrait`}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary-200 dark:bg-primary-800/40 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-indigo-200 dark:bg-indigo-800/40 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border-2 border-primary-500/10 dark:border-primary-500/20 rounded-[3.5rem] -rotate-3"></div>
      </div>
    </section>
  );
};

export default Hero;
