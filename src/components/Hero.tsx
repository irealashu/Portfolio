import React from 'react';
import { METRICS } from '../data/portfolioData.ts';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-20 sm:pt-24 pb-8 sm:pb-12 px-4 sm:px-6 overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[620px] h-[380px] bg-gradient-to-tr from-blue-600/15 via-indigo-500/15 to-cyan-400/15 dark:from-blue-500/25 dark:via-indigo-500/20 dark:to-cyan-400/15 blur-[100px] rounded-full pointer-events-none -z-10 animate-pulse-glow" />

      <div className="max-w-[900px] mx-auto text-center relative z-10">
        <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50 leading-[1.14] mb-3.5 sm:mb-4 text-balance">
          Computerized System Validation &amp;{' '}
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 dark:from-sky-300 dark:via-blue-400 dark:to-indigo-300 bg-clip-text text-transparent drop-shadow-xs">
            Cyber Risk Advisory
          </span>
        </h1>

        <p className="text-base sm:text-lg font-medium text-slate-700 dark:text-slate-200 leading-relaxed mb-3 max-w-2xl mx-auto text-balance">
          Helping organizations keep their software, data, and lab systems secure, compliant, and ready for audits.
        </p>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-8 max-w-2xl mx-auto">
          I work at <strong className="text-slate-800 dark:text-slate-100 font-semibold">PwC India</strong> helping clients manage technology risks. Before consulting, I spent years in the pharmaceutical industry qualifying lab instruments, validating production software, and making sure electronic records meet strict GAMP 5 and 21 CFR Part 11 requirements.
        </p>

        <div className="relative grid grid-cols-2 md:grid-cols-4 gap-3 p-3.5 sm:p-4 bg-gradient-to-b from-white/80 via-slate-50/70 to-white/85 dark:from-[#0c1222]/85 dark:via-[#090e1c]/80 dark:to-[#0c1222]/90 backdrop-blur-xl rounded-2xl border border-slate-200/80 dark:border-slate-800/90 shadow-xl shadow-slate-900/5 dark:shadow-black/40 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-blue-500/30 dark:before:via-blue-400/30 before:to-transparent before:rounded-t-2xl">
          {METRICS.map((metric, idx) => (
            <div
              key={idx}
              className="card-dynamic-gradient group relative flex flex-col items-center justify-center p-3 sm:p-3.5 rounded-xl border border-slate-200/60 dark:border-slate-700/50 hover:border-blue-500/50 dark:hover:border-blue-400/50 hover:-translate-y-0.5 shadow-xs hover:shadow-lg hover:shadow-blue-500/10 cursor-default"
            >
              <span className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 dark:from-sky-300 dark:via-blue-400 dark:to-indigo-300 bg-clip-text text-transparent mb-0.5 tabular-numbers group-hover:scale-105 transition-transform duration-200">
                {metric.value}
              </span>
              <span className="text-xs font-bold text-slate-800 dark:text-slate-100 text-center mb-0.5">
                {metric.label}
              </span>
              <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 text-center">
                {metric.detail}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
