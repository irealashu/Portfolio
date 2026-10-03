import React from 'react';
import { ShieldCheck, CheckCircle2, FileText, Lock, ChevronRight } from 'lucide-react';
import { PILLARS, Pillar } from '../data/portfolioData.ts';

const getIcon = (name: Pillar['iconName']) => {
  switch (name) {
    case 'shield':
      return <ShieldCheck className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
    case 'check-circle':
      return <CheckCircle2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
    case 'file-text':
      return <FileText className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />;
    case 'lock':
      return <Lock className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
  }
};

export const Expertise: React.FC = () => {
  return (
    <section id="about" className="py-10 sm:py-12 px-4 sm:px-6 max-w-[1200px] mx-auto">
      <div className="text-center mb-8">
        <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1.5 inline-block">
          What I Do
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2 text-balance">
          Core Skills &amp; Areas of Focus
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-xl mx-auto leading-relaxed text-balance">
          Combining practical pharma validation experience with cybersecurity risk management and IT controls.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        {PILLARS.map((pillar) => (
          <div
            key={pillar.id}
            className="group relative flex flex-col p-5 sm:p-6 rounded-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200/80 dark:border-slate-800 shadow-xs hover:border-blue-500/40 dark:hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/5 hover:-translate-y-0.5 transition-all duration-300"
          >
            <div className="flex items-start gap-3 mb-3">
              <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/90 border border-slate-100 dark:border-slate-700/60 shrink-0 group-hover:scale-105 group-hover:bg-blue-50 dark:group-hover:bg-blue-950/40 transition-all duration-300 shadow-xs">
                {getIcon(pillar.iconName)}
              </div>
              <div className="min-w-0">
                <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {pillar.title}
                </h3>
                <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                  {pillar.badge}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              {pillar.description}
            </p>

            <ul className="mt-auto space-y-2">
              {pillar.points.map((point, pIdx) => (
                <li key={pIdx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-200 leading-relaxed">
                  <ChevronRight className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5 group-hover:translate-x-0.5 transition-transform" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
