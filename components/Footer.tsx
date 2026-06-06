
import React from 'react';
import { Github, Linkedin, ArrowUp, Code2 } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-16 border-t border-slate-200 dark:border-slate-800 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-2 group cursor-pointer" onClick={scrollToTop}>
            <div className="bg-primary-600 p-1.5 rounded-lg text-white group-hover:rotate-12 transition-transform">
              <Code2 size={24} />
            </div>
            <span className="font-bold text-xl tracking-tight">
              sumit<span className="text-primary-600">.</span>patidar
            </span>
          </div>

          <div className="text-center">
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
              © {new Date().getFullYear()} {PERSONAL_INFO.name}. Designed for impact.
            </p>
            <p className="text-[10px] text-slate-400 dark:text-slate-600 uppercase tracking-widest mt-1">
              Built with React, TypeScript, Tailwind CSS, and Vite
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a 
              href={PERSONAL_INFO.github} 
              className="text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Github"
            >
              <Github size={22} />
            </a>
            <a 
              href={PERSONAL_INFO.linkedin} 
              className="text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
            <button
              onClick={scrollToTop}
              className="w-11 h-11 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 hover:bg-primary-600 hover:text-white transition-all duration-300 shadow-sm"
              aria-label="Back to top"
            >
              <ArrowUp size={22} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
