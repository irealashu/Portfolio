import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { VALIDATED_SYSTEMS, ValidatedSystem } from '../data/portfolioData.ts';

interface SystemsProps {
  onSelectSystem: (system: ValidatedSystem) => void;
}

export const Systems: React.FC<SystemsProps> = ({ onSelectSystem }) => {
  return (
    <section id="systems" className="py-10 sm:py-14 px-4 sm:px-6 max-w-[1200px] mx-auto relative">
      <div className="text-center mb-9">
        <span className="text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-sky-400 dark:to-blue-400 bg-clip-text text-transparent mb-1.5 inline-block">
          Validated Systems
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2.5 text-balance">
          Systems I've Validated &amp; Supported
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-xl mx-auto leading-relaxed text-balance">
          A selection of lab instruments and manufacturing software I've qualified under GAMP 5 and 21 CFR Part 11 regulations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {VALIDATED_SYSTEMS.map((system) => (
          <div
            key={system.id}
            onClick={() => onSelectSystem(system)}
            className="card-dynamic-gradient group relative flex flex-col p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800/90 shadow-sm hover:border-blue-500/50 dark:hover:border-blue-400/50 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-blue-500/25 dark:before:via-blue-400/25 before:to-transparent before:rounded-t-2xl"
          >
            <div className="flex flex-wrap gap-1.5 mb-2.5">
              {system.badges.map((b, bIdx) => (
                <span
                  key={bIdx}
                  className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100/90 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 border border-slate-200/60 dark:border-slate-700/60 group-hover:border-blue-400/40 transition-colors"
                >
                  {b}
                </span>
              ))}
            </div>

            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1.5 group-hover:text-blue-600 dark:group-hover:text-sky-400 transition-colors">
              {system.name}
            </h3>

            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
              {system.description}
            </p>

            <ul className="space-y-1.5 mb-3 mt-auto">
              {system.bullets.map((bullet, bIdx) => (
                <li key={bIdx} className="flex items-start gap-2 text-[11px] text-slate-700 dark:text-slate-200 leading-relaxed">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400 shrink-0 mt-0.5" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="pt-2.5 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
              <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                {system.specBadge}
              </span>
              <span className="text-[11px] font-semibold text-blue-600 dark:text-sky-400 opacity-0 group-hover:opacity-100 transition-opacity">
                View Details &rarr;
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
