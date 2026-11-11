import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Building2, MapPin, GraduationCap } from 'lucide-react';
import { EXECUTIVE_METRICS } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const scrollToTarget = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 96;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="overview"
      className="relative pt-10 sm:pt-14 pb-20 sm:pb-24 border-b border-slate-200 dark:border-white/[0.08] scroll-mt-28 transition-colors"
    >
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Clean Headline & Value Proposition */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7"
          >
            <p className="font-mono text-xs sm:text-sm font-semibold text-blue-600 dark:text-[#06B6D4] mb-4">
              Cyber &amp; Digital Risk Advisory · PwC India
            </p>

            <h1
              className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-[#F9FAFB] leading-[1.12] mb-5"
              style={{ textWrap: 'balance' }}
            >
              Assuring Regulated Systems &amp; Digital Risk Controls.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-[#9CA3AF] leading-relaxed max-w-2xl mb-8">
              Associate in Cyber &amp; Digital Risk Advisory at{' '}
              <strong className="text-slate-900 dark:text-[#F9FAFB] font-semibold">PwC India</strong>{' '}
              specializing in Computerized System Validation (CSV), IT General Controls (ITGC), and GxP
              Data Integrity under GAMP 5, 21 CFR Part 11, EU Annex 11, and ISO/IEC 27001.
            </p>

            <div className="flex flex-wrap items-center gap-3.5">
              <a
                href="#advisory"
                onClick={(e) => scrollToTarget(e, 'advisory')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white transition-colors"
              >
                <span>Advisory &amp; Experience</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#projects"
                onClick={(e) => scrollToTarget(e, 'projects')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-white dark:bg-[#161B26] hover:bg-slate-100 dark:hover:bg-[#1E2534] text-slate-900 dark:text-[#F9FAFB] border border-slate-200 dark:border-white/10 transition-colors"
              >
                <span>Validated Systems</span>
              </a>

              <div className="flex items-center gap-4 pl-2 text-sm font-medium text-slate-600 dark:text-[#9CA3AF]">
                <a
                  href="https://www.linkedin.com/in/irealashu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-slate-900 dark:hover:text-[#F9FAFB] transition-colors"
                >
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3.5 h-3.5 text-blue-600 dark:text-[#06B6D4]" />
                </a>
                <span aria-hidden="true" className="text-slate-300 dark:text-white/20">/</span>
                <a
                  href="https://github.com/irealashu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-slate-900 dark:hover:text-[#F9FAFB] transition-colors"
                >
                  <span>GitHub</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Clean Executive Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.06 }}
            className="lg:col-span-5"
          >
            <div className="rounded-2xl bg-white dark:bg-[#161B26]/90 border border-slate-200 dark:border-white/10 p-6 sm:p-8 shadow-sm transition-colors">
              <div className="flex items-center gap-4 pb-6 mb-6 border-b border-slate-200 dark:border-white/[0.08]">
                <img
                  src="./dp.jpg"
                  alt="Ashutosh Singh"
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover border border-slate-200 dark:border-white/15 shrink-0"
                />
                <div>
                  <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-[#F9FAFB]">
                    Ashutosh Singh
                  </h2>
                  <p className="text-sm text-blue-600 dark:text-[#06B6D4] font-medium mt-0.5">
                    Associate — Cyber &amp; Digital Risk
                  </p>
                </div>
              </div>

              <div className="space-y-3.5 text-sm text-slate-700 dark:text-[#F9FAFB]/90">
                <div className="flex items-center gap-3">
                  <Building2 className="w-4 h-4 text-blue-600 dark:text-[#2563EB] shrink-0" />
                  <span>PwC India</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-emerald-600 dark:text-[#10B981] shrink-0" />
                  <span>Gurugram, Haryana, India</span>
                </div>
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-4 h-4 text-cyan-600 dark:text-[#06B6D4] shrink-0" />
                  <span>M.Sc. Chemistry (8.07 CGPA) · B.Sc. (Hons.)</span>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-200 dark:border-white/[0.08]">
                <p className="font-mono text-xs text-slate-600 dark:text-[#9CA3AF] leading-relaxed">
                  GAMP 5 (2nd Ed.) · 21 CFR Part 11 · EU Annex 11 · ALCOA++ · ISO/IEC 27001 · ITGC
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Clean 4-Column Metrics Row (No Cluttered Sub-Captions) */}
        <div className="mt-14 pt-8 border-t border-slate-200 dark:border-white/10 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {EXECUTIVE_METRICS.map((metric, idx) => (
            <div key={idx}>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="font-display font-mono tabular-nums text-3xl sm:text-4xl font-bold text-slate-900 dark:text-[#F9FAFB]">
                  {metric.value}
                </span>
                <span className="font-mono text-xs font-semibold text-blue-600 dark:text-[#06B6D4]">
                  {metric.unit}
                </span>
              </div>
              <p className="text-sm font-medium text-slate-600 dark:text-[#9CA3AF]">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
