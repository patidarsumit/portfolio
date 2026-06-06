
import React from 'react';
import { ExternalLink, Award } from 'lucide-react';
import { CERTIFICATIONS } from '../constants';

const Certifications: React.FC = () => {
  const completedCertifications = CERTIFICATIONS.filter(cert => !cert.inProgress);

  return (
    <section id="certifications" className="py-24 border-t border-slate-200 dark:border-slate-800">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Certifications</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl">
            Continuously evolving through industry-recognized specialized training and credentials.
          </p>
        </div>
        <div className="bg-primary-600 text-white p-4 rounded-2xl flex items-center gap-3">
          <Award size={32} />
          <div>
            <div className="text-xs font-bold uppercase tracking-widest opacity-80">Certifications</div>
            <div className="text-xl font-bold">{completedCertifications.length} Total</div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {CERTIFICATIONS.map((cert, idx) => (
          <div
            key={idx}
            className={`group relative p-8 rounded-[2.5rem] border flex flex-col transition-all
              ${cert.inProgress
                ? 'bg-slate-50 dark:bg-slate-900/60 border-2 border-dashed border-slate-300 dark:border-slate-700 opacity-60 grayscale pointer-events-none select-none'
                : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-primary-500 hover:shadow-2xl'}`}
            style={cert.inProgress ? { filter: 'grayscale(1)', opacity: 0.6, pointerEvents: 'none', userSelect: 'none' } : {}}
          >
            <div className="flex justify-between items-start mb-6">
              <div className="w-14 h-14 bg-slate-900 rounded-xl flex items-center justify-center p-3">
                {cert.logo ? (
                  <img src={cert.logo} alt={cert.issuer} className="w-full h-full object-contain" />
                ) : (
                  <Award size={36} className="text-primary-400" />
                )}
              </div>
              {cert.inProgress ? (
                <span className="inline-flex items-center gap-1 text-xs font-bold text-slate-400 dark:text-slate-500 bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded ml-2 mt-1">In Progress</span>
              ) : cert.credentialUrl ? (
                <a
                  href={cert.credentialUrl}
                  className="inline-flex items-center gap-1 text-xs font-bold text-primary-600 dark:text-primary-400 underline group/link mt-1 ml-2"
                  target="_blank" rel="noopener noreferrer"
                  title="Verify Credential"
                >
                  Verify
                  <ExternalLink size={13} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              ) : null}
            </div>
            <h3 className={`text-xl font-bold mb-2 transition-colors ${cert.inProgress ? 'italic text-slate-400 dark:text-slate-500' : 'group-hover:text-primary-600 dark:group-hover:text-primary-400'}`}>
              {cert.title}
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-2 font-medium">
              {cert.issuer}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {cert.skills && cert.skills.map((skill, i) => (
                <span key={i} className="inline-block px-2 py-1 bg-slate-100 dark:bg-slate-800 text-xs rounded font-semibold text-slate-600 dark:text-slate-300">
                  {skill}
                </span>
              ))}
            </div>
            <div className="text-xs text-slate-400 mb-2">Credential ID: <span className="font-mono text-slate-600 dark:text-slate-300">{cert.credentialId}</span></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
