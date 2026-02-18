
import React from 'react';
import { EXPERIENCES } from '../constants';

const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-slate-100/30 dark:bg-slate-900/10 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">Professional Journey</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            A dedicated history of leadership and high-stakes engineering within the enterprise sector.
          </p>
        </div>

        <div className="relative space-y-16 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-[2px] before:bg-gradient-to-b before:from-transparent before:via-slate-200 dark:before:via-slate-800 before:to-transparent">
          {EXPERIENCES.map((exp, idx) => (
            <article 
              key={idx} 
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
              itemScope 
              itemType="https://schema.org/WorkExperience"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-50 dark:border-slate-950 bg-primary-600 text-white shadow-xl shadow-primary-600/20 shrink-0 md:order-1 md:group-odd:-translate-x-[36px] md:group-even:translate-x-1/2 z-10" aria-hidden="true">
                <div className="w-2.5 h-2.5 bg-white rounded-full animate-pulse"></div>
              </div>
              
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3.5rem)] p-10 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-sm transition-all duration-300 hover:shadow-2xl hover:border-primary-500/30">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-8">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1" itemProp="jobTitle">{exp.role}</h3>
                    <div className="text-primary-600 dark:text-primary-400 font-bold tracking-wide" itemProp="worksFor" itemScope itemType="https://schema.org/Organization">
                      <span itemProp="name">{exp.company}</span>
                    </div>
                  </div>
                  <div className="px-4 py-1.5 bg-slate-50 dark:bg-slate-800 rounded-xl text-xs font-bold text-slate-500 dark:text-slate-400 whitespace-nowrap border border-slate-200 dark:border-slate-700">
                    <time>{exp.duration}</time>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8" itemProp="description">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex gap-4 text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary-600 shrink-0" aria-hidden="true"></span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2.5 pt-6 border-t border-slate-100 dark:border-slate-800">
                  <span className="sr-only">Tech stack used:</span>
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-slate-50 dark:bg-slate-800 rounded-lg text-[10px] font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
