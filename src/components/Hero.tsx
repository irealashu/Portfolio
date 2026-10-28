import React from 'react';
import { METRICS } from '../data/portfolioData.ts';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-24 sm:pt-28 pb-8 sm:pb-12 px-3 sm:px-5 overflow-hidden scroll-mt-24">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[620px] h-[380px] bg-gradient-to-tr from-blue-600/15 via-indigo-500/15 to-cyan-400/15 dark:from-blue-500/25 dark:via-indigo-500/15 dark:to-cyan-500/10 blur-3xl" />

      <div className="relative z-10 max-w-[980px] mx-auto text-center">

        <h1 className="text-3xl sm:text-5xl lg:text-[4rem] font-extrabold tracking-[-0.04em] text-slate-900 dark:text-slate-50 leading-[1.08] mb-4 sm:mb-5 text-balance">
          Computerized System Validation &amp;{' '}
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 dark:from-sky-300 dark:via-blue-400 dark:to-indigo-300 bg-clip-text text-transparent drop-shadow-xs">
            Digital Risk Advisory
          </span>
        </h1>

        <p className="text-base sm:text-lg font-medium text-slate-700 dark:text-slate-200 leading-relaxed mb-3 max-w-2xl mx-auto text-balance">
          Helping organizations keep their software, data and lab systems secure, compliant and ready for audits.
        </p>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-8 max-w-2xl mx-auto">
          I work at <strong className="text-slate-800 dark:text-slate-100 font-semibold">PwC India</strong> helping clients manage technology risks. Before consulting, I spent years in the pharmaceutical and quality space working with validated systems and data integrity controls.
        </p>

        <div className="section-shell relative grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-3.5 p-3 sm:p-4 rounded-[2rem] max-w-[780px] mx-auto">
          {METRICS.map((metric, idx) => (
            <div
              key={idx}
              className="card-dynamic-gradient group relative flex flex-col items-center justify-center p-3.5 sm:p-4 rounded-2xl border border-slate-200/70 dark:border-slate-800/80 shadow-xs hover:border-blue-400 dark:hover:border-sky-500"
            >
              <span className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 dark:from-sky-300 dark:via-blue-400 dark:to-indigo-300 bg-clip-text text-transparent tabular-numbers mb-1 group-hover:scale-105 transition-transform duration-300">
                {metric.value}
              </span>
              <span className="text-xs font-bold text-slate-800 dark:text-slate-100 text-center mb-0.5 leading-snug">
                {metric.label}
              </span>
              <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 text-center leading-tight">
                {metric.detail}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
