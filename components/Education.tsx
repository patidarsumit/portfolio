
import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';
import { EDUCATION } from '../constants';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 border-t border-slate-200 dark:border-slate-800">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Educational Foundation</h2>
        <p className="text-slate-600 dark:text-slate-400">
          Academic journey and foundational computer science background.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {EDUCATION.map((edu, idx) => (
          <div 
            key={idx}
            className="group relative p-8 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 hover:border-primary-500 transition-all hover:shadow-2xl flex flex-col"
          >
            <div className="absolute top-8 right-8 text-slate-100 dark:text-slate-800 opacity-50 group-hover:text-primary-100 dark:group-hover:text-primary-900/30 transition-colors">
              <GraduationCap size={48} />
            </div>
            
            <div className="relative z-10 flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-[10px] font-bold mb-6 uppercase tracking-widest">
                <Calendar size={12} />
                {edu.period}
              </div>
              
              <h3 className="text-xl font-bold mb-1 text-slate-900 dark:text-white leading-tight">
                {edu.degree}
              </h3>
              <p className="text-primary-600 font-bold mb-4 text-sm">
                {edu.field}
              </p>
              
              <div className="space-y-2 pt-4 border-t border-slate-100 dark:border-slate-800 mt-auto">
                <div className="text-sm text-slate-500 dark:text-slate-400 min-h-[40px]">
                  <span className="font-bold text-slate-900 dark:text-white">{edu.institution}</span>
                </div>
                <div className="inline-block px-3 py-1 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-lg text-xs font-bold">
                  Performance: {edu.score}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
