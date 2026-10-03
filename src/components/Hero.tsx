import React from 'react';
import { Layers, Clock, Mail } from 'lucide-react';
import { METRICS } from '../data/portfolioData.ts';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-3 sm:pt-6 pb-6 sm:pb-8 px-4 sm:px-6 overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-blue-500/10 via-indigo-500/10 to-cyan-400/10 dark:from-blue-500/15 dark:via-indigo-500/10 dark:to-cyan-400/10 blur-[90px] rounded-full pointer-events-none -z-10 animate-pulse-glow" />

      <div className="max-w-[880px] mx-auto text-center relative z-10">
        <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50 leading-[1.15] mb-3 sm:mb-4 text-balance">
          Computerized System Validation &amp;{' '}
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 dark:from-blue-400 dark:via-indigo-300 dark:to-cyan-300 bg-clip-text text-transparent">
            Cyber Risk Advisory
          </span>
        </h1>

        <p className="text-base sm:text-lg font-medium text-slate-700 dark:text-slate-200 leading-relaxed mb-3 max-w-2xl mx-auto text-balance">
          Helping organizations keep their software, data, and lab systems secure, compliant, and ready for audits.
        </p>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6 max-w-2xl mx-auto">
          I work at <strong className="text-slate-800 dark:text-slate-100 font-semibold">PwC India</strong> helping clients manage technology risks. Before consulting, I spent years in the pharmaceutical industry qualifying lab instruments, validating production software, and making sure electronic records meet strict GAMP 5 and 21 CFR Part 11 requirements.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-7 sm:mb-8">
          <a
            href="#systems"
            className="btn-shimmer relative inline-flex items-center justify-center gap-2 px-4.5 py-2.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/35 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-200 overflow-hidden cursor-pointer"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Validated Systems</span>
          </a>

          <a
            href="#history"
            className="inline-flex items-center justify-center gap-2 px-4.5 py-2.5 rounded-full text-xs font-semibold text-slate-700 dark:text-slate-200 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white shadow-xs hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-200 cursor-pointer"
          >
            <Clock className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>Work Experience</span>
          </a>

          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-4.5 py-2.5 rounded-full text-xs font-semibold text-slate-700 dark:text-slate-200 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white shadow-xs hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-200 cursor-pointer"
          >
            <Mail className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>Get in Touch</span>
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-3.5 sm:p-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-md shadow-slate-900/5 dark:shadow-black/30">
          {METRICS.map((metric, idx) => (
            <div
              key={idx}
              className="group flex flex-col items-center justify-center p-3 rounded-xl bg-slate-50/90 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/50 hover:border-blue-500/30 hover:bg-white dark:hover:bg-slate-800 transition-all duration-200 hover:-translate-y-0.5"
            >
              <span className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-300 bg-clip-text text-transparent mb-0.5 tabular-numbers group-hover:scale-105 transition-transform duration-200">
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
