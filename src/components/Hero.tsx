import React from 'react';
import {
  ShieldCheck,
  FileCheck2,
  Lock,
  Database,
} from 'lucide-react';
import { ABOUT_PILLARS } from '../data/portfolioData';

const PILLAR_ICONS = {
  shield: <ShieldCheck className="w-6 h-6 text-[#4338CA] dark:text-[#38BDF8] stroke-[1.75]" />,
  check: <FileCheck2 className="w-6 h-6 text-[#4338CA] dark:text-[#38BDF8] stroke-[1.75]" />,
  lock: <Lock className="w-6 h-6 text-[#4338CA] dark:text-[#38BDF8] stroke-[1.75]" />,
  database: <Database className="w-6 h-6 text-[#4338CA] dark:text-[#38BDF8] stroke-[1.75]" />,
};

const REGULATORY_STANDARDS = [
  'GAMP 5 (2nd Ed.)',
  '21 CFR Part 11',
  'EU GMP Annex 11',
  'ALCOA++',
  'ITGC & ISO 27001',
];

export const Hero: React.FC = () => {
  return (
    <>
      {/* 1. Focused Hero Section (#home) */}
      <section
        id="home"
        aria-label="Introduction"
        className="relative min-h-[430px] lg:min-h-[480px] flex flex-col justify-center bg-gradient-to-br from-[#F8FAFC] via-white to-[#EEF2FF]/60 dark:from-[#070B14] dark:via-[#0B1120] dark:to-[#091526] bg-swiss-grid px-6 sm:px-12 lg:px-16 py-14 sm:py-16 overflow-hidden border-b border-slate-200 dark:border-white/[0.08]"
      >
        {/* Static Ambient Glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 top-1/4 w-[360px] h-[360px] rounded-full bg-gradient-to-br from-[#4338CA]/10 via-[#0284C7]/8 to-transparent dark:from-[#4F46E5]/15 dark:via-[#38BDF8]/10 blur-3xl"
        />

        <div className="relative z-10 max-w-2xl animate-gpu-fade-up">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#4338CA] dark:text-[#38BDF8] mb-4">
            Cyber &amp; Digital Risk Advisory · PwC India
          </p>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight text-[#0F172A] dark:text-white leading-[1.08] mb-5 text-balance">
            Hi, I&apos;m{' '}
            <span className="bg-gradient-to-r from-[#4338CA] via-[#2563EB] to-[#0284C7] dark:from-[#60A5FA] dark:via-[#38BDF8] dark:to-[#818CF8] bg-clip-text text-transparent">
              Ashutosh Singh
            </span>
          </h2>

          <p className="font-sans text-base sm:text-[17px] text-slate-700 dark:text-slate-300 leading-relaxed mb-7 max-w-xl">
            I work in Cyber &amp; Digital Risk Advisory at{' '}
            <span className="font-semibold text-[#0F172A] dark:text-white">
              PwC India
            </span>
            . Most of my work focuses on Computerized System Validation (CSV), IT General Controls,
            and keeping regulated laboratory and enterprise systems audit-ready.
          </p>

          {/* Clean Typographic Standards Line */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 font-mono text-xs text-slate-700 dark:text-slate-300 pt-5 border-t border-slate-200/80 dark:border-white/10">
            {REGULATORY_STANDARDS.map((std, idx) => (
              <React.Fragment key={std}>
                <span className="font-medium text-[#0F172A] dark:text-slate-200 transition-transform duration-150 hover:-translate-y-0.5">
                  {std}
                </span>
                {idx < REGULATORY_STANDARDS.length - 1 && (
                  <span aria-hidden="true" className="text-[#4338CA] dark:text-[#38BDF8] font-bold">
                    ·
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* 2. About Section (#about) */}
      <section
        id="about"
        className="px-6 sm:px-12 lg:px-16 py-16 lg:py-20 border-b border-slate-200 dark:border-white/[0.08]"
      >
        <div>
          <span className="inline-block font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#4338CA] dark:text-[#38BDF8] mb-2">
            About
          </span>
          <h2 className="font-display text-2xl sm:text-[26px] font-bold tracking-tight text-[#0F172A] dark:text-white mb-6">
            Background
          </h2>

          <div className="space-y-4 font-sans text-[15px] sm:text-base text-slate-700 dark:text-slate-300 leading-[1.75] max-w-3xl">
            <p>
              I&apos;m an Associate in Cyber &amp; Digital Risk Advisory at{' '}
              <strong className="text-[#4338CA] dark:text-[#38BDF8] font-semibold">
                PwC India
              </strong>
              . Over the last 5+ years, I&apos;ve moved from pharmaceutical Quality Control labs into
              Computerized System Validation and enterprise IT risk consulting.
            </p>
            <p>
              Because I started on the lab floor working with analytical instruments and batch
              records, I approach validation and IT controls practically—looking at how systems are
              actually used day to day under GAMP 5, 21 CFR Part 11, EU GMP Annex 11, and ALCOA++
              standards.
            </p>
          </div>
        </div>

        {/* 4 Square Pillar Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {ABOUT_PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="group relative rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50/70 dark:bg-[#131C2E] p-6 flex flex-col items-center justify-center text-center shadow-2xs hover:bg-white dark:hover:bg-[#162036] hover:shadow-md hover:border-[#4338CA]/50 dark:hover:border-[#38BDF8]/50 transition-transform duration-200 ease-out hover:-translate-y-1 will-change-transform"
            >
              <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-white/[0.06] border border-indigo-200/70 dark:border-white/10 flex items-center justify-center mb-3.5 transition-transform duration-200 group-hover:scale-105">
                {PILLAR_ICONS[pillar.icon]}
              </div>
              <h3 className="font-display text-sm font-bold text-[#0F172A] dark:text-white group-hover:text-[#4338CA] dark:group-hover:text-[#38BDF8]">
                {pillar.title}
              </h3>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
