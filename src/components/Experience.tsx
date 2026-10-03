import React from 'react';
import { MapPin, CheckCircle2 } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData.ts';

export const Experience: React.FC = () => {
  return (
    <section id="history" className="py-10 sm:py-12 px-4 sm:px-6 max-w-[1000px] mx-auto">
      <div className="text-center mb-8">
        <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1.5 inline-block">
          Work History
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2 text-balance">
          Career &amp; Experience
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-xl mx-auto leading-relaxed text-balance">
          My path from analytical testing and pharma validation to cyber and digital risk advisory at PwC India.
        </p>
      </div>

      <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-200 dark:border-slate-800 space-y-6 sm:space-y-7">
        {EXPERIENCES.map((exp, idx) => (
          <div key={idx} className="relative group">
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-white dark:bg-slate-900 border-2 border-blue-600 dark:border-blue-400 group-hover:scale-125 group-hover:bg-blue-600 transition-all duration-200 shadow-sm shadow-blue-500/20" />

            <div className="p-4.5 sm:p-5 rounded-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200/80 dark:border-slate-800 shadow-xs hover:border-blue-500/40 dark:hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/5 hover:-translate-y-0.5 transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4 mb-2.5">
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {exp.role}
                  </h3>
                  <span className="text-xs sm:text-sm font-bold text-blue-600 dark:text-blue-400">
                    {exp.company}
                  </span>
                </div>

                <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-2 sm:gap-0.5 text-right mt-1 sm:mt-0">
                  <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 whitespace-nowrap">
                    {exp.dates}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] text-slate-500 dark:text-slate-400">
                    <MapPin className="w-3 h-3 shrink-0" />
                    <span>{exp.location}</span>
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                {exp.summary}
              </p>

              <ul className="space-y-1.5 mb-3">
                {exp.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-200 leading-relaxed">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100 dark:border-slate-800/80">
                {exp.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200/60 dark:border-slate-700/60 hover:border-blue-500/30 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
