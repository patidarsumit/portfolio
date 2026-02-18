
import React from 'react';
import * as LucideIcons from 'lucide-react';
import { ACHIEVEMENTS } from '../constants';

const Achievements: React.FC = () => {
  return (
    <section className="py-24 border-t border-slate-200 dark:border-slate-800">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Milestones & Recognition</h2>
        <p className="text-slate-600 dark:text-slate-400">
          Selected highlights from my professional development and community involvement.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {ACHIEVEMENTS.map((item, idx) => {
          const Icon = (LucideIcons as any)[item.icon];
          return (
            <div key={idx} className="flex gap-6 p-8 rounded-3xl bg-primary-50/50 dark:bg-primary-900/10 border border-primary-100 dark:border-primary-900/20">
              <div className="shrink-0 w-12 h-12 rounded-2xl bg-white dark:bg-slate-900 text-primary-600 flex items-center justify-center shadow-sm">
                <Icon size={24} />
              </div>
              <div>
                <span className="text-xs font-bold text-primary-600 uppercase tracking-tighter mb-1 block">
                  {item.date}
                </span>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Achievements;
