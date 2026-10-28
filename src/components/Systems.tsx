import React from 'react';
import { CheckCircle2, ArrowRight, FlaskConical, FileText, FileSpreadsheet, Cpu } from 'lucide-react';
import { VALIDATED_SYSTEMS, ValidatedSystem } from '../data/portfolioData.ts';

interface SystemsProps {
  onSelectSystem: (system: ValidatedSystem) => void;
}

const getCategoryIcon = (category: ValidatedSystem['category']) => {
  switch (category) {
    case 'process':
      return <Cpu className="w-4 h-4 text-blue-600 dark:text-sky-400" />;
    case 'lab':
      return <FlaskConical className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />;
    case 'records':
      return <FileText className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />;
    case 'spreadsheets':
      return <FileSpreadsheet className="w-4 h-4 text-amber-600 dark:text-amber-400" />;
  }
};

export const Systems: React.FC<SystemsProps> = ({ onSelectSystem }) => {
  return (
    <section id="systems" className="py-10 sm:py-14 px-3 sm:px-5 max-w-[1200px] mx-auto relative scroll-mt-24">
      <div className="text-center mb-9">
        <span className="text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-sky-400 dark:to-blue-400 bg-clip-text text-transparent mb-1.5 inline-block">
          Validated Systems
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2.5 text-balance">
          Systems I've Validated &amp; Supported
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-xl mx-auto leading-relaxed text-balance">
          A selection of laboratory instruments and manufacturing software qualified under GAMP 5 and 21 CFR Part 11 standards.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {VALIDATED_SYSTEMS.map((system) => (
          <div
            key={system.id}
            role="button"
            tabIndex={0}
            onClick={() => onSelectSystem(system)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onSelectSystem(system);
              }
            }}
            className="card-dynamic-gradient group relative flex flex-col p-5 sm:p-5.5 rounded-[1.7rem] border border-slate-200/80 dark:border-slate-800/90 shadow-sm hover:border-blue-400 dark:hover:border-sky-500 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            <div className="flex items-center justify-between gap-2 mb-3.5">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-slate-100/90 dark:bg-slate-800/90 border border-slate-200/70 dark:border-slate-700/70 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  {getCategoryIcon(system.category)}
                </div>
                <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 capitalize">
                  {system.category}
                </span>
              </div>

              <div className="flex flex-wrap gap-1 justify-end">
                {system.badges.map((b, bIdx) => (
                  <span
                    key={bIdx}
                    className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100/90 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 border border-slate-200/60 dark:border-slate-700/70"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>

            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-sky-400 transition-colors leading-snug">
              {system.name}
            </h3>

            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              {system.description}
            </p>

            <ul className="space-y-1.5 mb-4 mt-auto">
              {system.bullets.map((bullet, bIdx) => (
                <li key={bIdx} className="flex items-start gap-2 text-[11px] text-slate-700 dark:text-slate-200 leading-relaxed">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400 shrink-0 mt-0.5" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
              <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                {system.specBadge}
              </span>
              <div className="inline-flex items-center gap-1 text-[11px] font-bold text-blue-600 dark:text-sky-400 group-hover:translate-x-0.5 transition-transform">
                <span>Validation Scope</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
