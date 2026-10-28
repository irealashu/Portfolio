import React from 'react';
import { ShieldCheck, CheckCircle2, FileText, Lock, ChevronRight } from 'lucide-react';
import { PILLARS, Pillar } from '../data/portfolioData.ts';

const getIcon = (name: Pillar['iconName']) => {
  switch (name) {
    case 'shield':
      return <ShieldCheck className="w-5 h-5 text-blue-600 dark:text-sky-400 group-hover:text-white transition-colors" />;
    case 'check-circle':
      return <CheckCircle2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400 group-hover:text-white transition-colors" />;
    case 'file-text':
      return <FileText className="w-5 h-5 text-cyan-600 dark:text-cyan-400 group-hover:text-white transition-colors" />;
    case 'lock':
      return <Lock className="w-5 h-5 text-emerald-600 dark:text-emerald-400 group-hover:text-white transition-colors" />;
  }
};

export const Expertise: React.FC = () => {
  return (
    <section id="about" className="py-10 sm:py-14 px-3 sm:px-5 max-w-[1200px] mx-auto relative scroll-mt-24">
      <div className="text-center mb-9">
        <span className="text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-sky-400 dark:to-blue-400 bg-clip-text text-transparent mb-1.5 inline-block">
          What I Do
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2.5 text-balance">
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
            className="card-dynamic-gradient group relative flex flex-col p-5 sm:p-6 rounded-[1.6rem] border border-slate-200/80 dark:border-slate-800/90 shadow-sm hover:border-blue-500/50 dark:hover:border-blue-400/50"
          >
            <div className="flex items-start gap-3.5 mb-3.5">
              <div className="p-2.5 rounded-2xl bg-slate-50/90 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60 shrink-0 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-indigo-600 dark:group-hover:from-sky-500 dark:group-hover:to-blue-600 transition-all duration-300 shadow-sm">
                {getIcon(pillar.iconName)}
              </div>
              <div className="min-w-0">
                <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug group-hover:text-blue-600 dark:group-hover:text-sky-400 transition-colors">
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
                  <ChevronRight className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400 shrink-0 mt-0.5 group-hover:translate-x-1 group-hover:text-indigo-500 transition-all" />
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
