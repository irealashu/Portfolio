import React from 'react';
import { MapPin, CheckCircle2 } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData.ts';

export const Experience: React.FC = () => {
  return (
    <section id="history" className="py-10 sm:py-14 px-4 sm:px-6 max-w-[1000px] mx-auto relative">
      <div className="text-center mb-9">
        <span className="text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-sky-400 dark:to-blue-400 bg-clip-text text-transparent mb-1.5 inline-block">
          Work History
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2.5 text-balance">
          Career &amp; Experience
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-xl mx-auto leading-relaxed text-balance">
          My path from analytical testing and pharma validation to cyber and digital risk advisory at PwC India.
        </p>
      </div>

      <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-200 dark:border-slate-800/80 space-y-6 sm:space-y-7">
        {EXPERIENCES.map((exp, idx) => (
          <div key={idx} className="relative group">
            <div className="absolute -left-[31px] sm:-left-[39px] top-2 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-white dark:bg-[#0c1222] border-2 border-blue-600 dark:border-sky-400 group-hover:scale-125 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:border-transparent transition-all duration-200 shadow-md shadow-blue-500/30" />

            <div
              className="card-dynamic-gradient relative p-5 sm:p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800/90 shadow-sm hover:border-blue-500/50 dark:hover:border-blue-400/50 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-0.5 transition-all duration-300 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-blue-500/25 dark:before:via-blue-400/25 before:to-transparent before:rounded-t-2xl"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4 mb-3">
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-sky-400 transition-colors">
                    {exp.role}
                  </h3>
                  <span className="text-xs sm:text-sm font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-sky-400 dark:to-blue-400 bg-clip-text text-transparent">
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

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3.5">
                {exp.summary}
              </p>

              <ul className="space-y-1.5 mb-3.5">
                {exp.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-200 leading-relaxed">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400 shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5 pt-2.5 border-t border-slate-100 dark:border-slate-800/80">
                {exp.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-slate-50/90 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 border border-slate-200/60 dark:border-slate-700/60 hover:border-blue-500/50 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 dark:hover:from-blue-950/40 dark:hover:to-indigo-950/40 hover:text-blue-600 dark:hover:text-sky-400 transition-all duration-200"
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
