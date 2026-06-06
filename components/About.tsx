
import React from 'react';
import { KEY_METRICS } from '../constants';

const About: React.FC = () => {
  const stats = KEY_METRICS.slice(0, 4);

  return (
    <section id="about" className="py-24 border-t border-slate-200 dark:border-slate-800">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-10">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
              Bridging Architecture & <br />
              <span className="text-primary-600 dark:text-primary-400">Engineering Excellence.</span>
            </h2>
            <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>
                As a <strong>Senior Software Engineer</strong> at <strong>VIT Infotech</strong>, I have spent the last 7 years building scalable Angular applications for enterprise teams across hospitality, government, HR, billing, and SaaS platforms.
              </p>
              <p>
                I focus on <strong>frontend architecture, performance, accessibility, testing, and mentoring</strong>. My technical philosophy is simple: ship UI systems that are easy to understand, fast to use, and reliable under real production pressure.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-8 pt-10 border-t border-slate-100 dark:border-slate-800">
             <div className="space-y-4">
                <h4 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-[0.2em]">Core Philosophy</h4>
                <ul className="text-sm space-y-3">
                  <li className="flex gap-2 items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500"></span>
                    Ownership over every pixel and byte
                  </li>
                  <li className="flex gap-2 items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500"></span>
                    Performance is not a feature, it's a requirement
                  </li>
                </ul>
             </div>
             <div className="space-y-4">
                <h4 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-[0.2em]">Leadership Style</h4>
                <ul className="text-sm space-y-3">
                  <li className="flex gap-2 items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500"></span>
                    Empowering through technical mentorship
                  </li>
                  <li className="flex gap-2 items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500"></span>
                    Standardizing architecture for scale
                  </li>
                </ul>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 md:gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-10 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 hover:border-primary-500 transition-all duration-300 hover:shadow-2xl group flex flex-col justify-center text-center"
            >
              <div className="text-5xl font-extrabold text-primary-600 dark:text-primary-400 mb-3 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-xs font-bold text-slate-500 dark:text-slate-500 uppercase tracking-widest leading-relaxed">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
