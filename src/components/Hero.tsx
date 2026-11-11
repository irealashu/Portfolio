import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  'ALCOA++ Integrity',
  'ITGC & SOX',
];

const slideTextVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.42, delay, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export const Hero: React.FC = () => {
  const [slideIndex, setSlideIndex] = useState<0 | 1>(0);

  return (
    <>
      {/* 1. Jackson Hero Section (#home) */}
      <section
        id="home"
        aria-label="Introduction"
        className="relative min-h-[500px] lg:min-h-[560px] flex flex-col justify-between bg-gradient-to-br from-[#F8FAFC] via-white to-[#EEF2FF]/60 dark:from-[#070B14] dark:via-[#0B1120] dark:to-[#091526] bg-swiss-grid px-6 sm:px-12 lg:px-16 py-12 sm:py-16 overflow-hidden border-b border-slate-200 dark:border-white/[0.08] transition-colors duration-300"
      >
        {/* Subtle Ambient Glow */}
        <motion.div
          aria-hidden="true"
          animate={{
            x: [0, 16, 0],
            y: [0, -12, 0],
            scale: [1, 1.04, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="pointer-events-none absolute -right-24 top-1/4 w-[360px] h-[360px] rounded-full bg-gradient-to-br from-[#4338CA]/10 via-[#0284C7]/8 to-transparent dark:from-[#4F46E5]/15 dark:via-[#38BDF8]/10 blur-3xl"
        />

        <div className="relative z-10 max-w-2xl my-auto">
          <AnimatePresence mode="wait">
            {slideIndex === 0 ? (
              <motion.div
                key="slide-1"
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, y: -14, transition: { duration: 0.22 } }}
              >
                <motion.p
                  custom={0.02}
                  variants={slideTextVariants}
                  className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#4338CA] dark:text-[#38BDF8] mb-4"
                >
                  Cyber &amp; Digital Risk Advisory · PwC India
                </motion.p>

                <motion.h2
                  custom={0.08}
                  variants={slideTextVariants}
                  className="font-display text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight text-[#0F172A] dark:text-white leading-[1.08] mb-5 text-balance"
                >
                  Hi! I&apos;m{' '}
                  <span className="bg-gradient-to-r from-[#4338CA] via-[#2563EB] to-[#0284C7] dark:from-[#60A5FA] dark:via-[#38BDF8] dark:to-[#818CF8] bg-clip-text text-transparent">
                    Ashutosh Singh
                  </span>
                </motion.h2>

                <motion.p
                  custom={0.14}
                  variants={slideTextVariants}
                  className="font-sans text-base sm:text-[17px] text-slate-700 dark:text-slate-300 leading-relaxed mb-6 max-w-xl"
                >
                  Associate in Cyber &amp; Digital Risk Advisory at{' '}
                  <span className="font-semibold text-[#0F172A] dark:text-white">
                    PwC India
                  </span>
                  . Specializing in Computerized System Validation (CSV), GAMP 5 (2nd Ed.),
                  21 CFR Part 11, and enterprise IT General Controls.
                </motion.p>

                {/* Clean Typographic Metadata Line */}
                <motion.div
                  custom={0.2}
                  variants={slideTextVariants}
                  className="flex flex-wrap items-center gap-x-3 gap-y-1.5 font-mono text-xs text-slate-700 dark:text-slate-300"
                >
                  {REGULATORY_STANDARDS.map((std, idx) => (
                    <React.Fragment key={std}>
                      <motion.span
                        whileHover={{ y: -2 }}
                        className="font-medium text-[#0F172A] dark:text-slate-200"
                      >
                        {std}
                      </motion.span>
                      {idx < REGULATORY_STANDARDS.length - 1 && (
                        <span aria-hidden="true" className="text-[#4338CA] dark:text-[#38BDF8] font-bold">
                          ·
                        </span>
                      )}
                    </React.Fragment>
                  ))}
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                key="slide-2"
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, y: -14, transition: { duration: 0.22 } }}
              >
                <motion.p
                  custom={0.02}
                  variants={slideTextVariants}
                  className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#4338CA] dark:text-[#38BDF8] mb-4"
                >
                  18 Jan 2021 – Present · 15+ Enterprise &amp; GxP Systems Qualified
                </motion.p>

                <motion.h2
                  custom={0.08}
                  variants={slideTextVariants}
                  className="font-display text-4xl sm:text-5xl lg:text-[50px] font-extrabold tracking-tight text-[#0F172A] dark:text-white leading-[1.1] mb-5 text-balance"
                >
                  Computerized System{' '}
                  <span className="bg-gradient-to-r from-[#4338CA] via-[#2563EB] to-[#0284C7] dark:from-[#60A5FA] dark:via-[#38BDF8] dark:to-[#818CF8] bg-clip-text text-transparent">
                    Validation &amp; IT Risk.
                  </span>
                </motion.h2>

                <motion.p
                  custom={0.14}
                  variants={slideTextVariants}
                  className="font-sans text-base sm:text-[17px] text-slate-700 dark:text-slate-300 leading-relaxed mb-6 max-w-xl"
                >
                  Practical experience across the full validation lifecycle (URS, FS, IQ, OQ, PQ, RTM, VSR),
                  audit trail reviews, and IT general controls across pharmaceutical and enterprise systems.
                </motion.p>

                <motion.div
                  custom={0.2}
                  variants={slideTextVariants}
                  className="grid grid-cols-3 gap-4 max-w-lg pt-3 border-t border-slate-200 dark:border-white/10"
                >
                  {[
                    { value: '5+ Years', label: 'Since 18 Jan 2021' },
                    { value: '15+ Systems', label: 'End-to-End CSV' },
                    { value: '0 Findings', label: 'Audit Record' },
                  ].map((item) => (
                    <motion.div
                      key={item.label}
                      whileHover={{ y: -2 }}
                      className="text-left"
                    >
                      <span className="block font-display font-mono text-lg sm:text-xl font-extrabold text-[#4338CA] dark:text-[#38BDF8] tabular-nums">
                        {item.value}
                      </span>
                      <span className="block font-mono text-[11px] text-slate-600 dark:text-slate-400 mt-0.5">
                        {item.label}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Distinct Slide Selector Tabs in clean bottom bar */}
        <div className="relative z-10 pt-8 flex items-center justify-between gap-4">
          <div
            role="tablist"
            aria-label="Hero perspective selector"
            className="flex items-center gap-1.5 bg-white dark:bg-[#111827] p-1.5 rounded-xl border border-slate-200 dark:border-white/10 shadow-2xs"
          >
            {[
              { index: 0 as const, label: '01. Advisory Profile' },
              { index: 1 as const, label: '02. Validation Scope' },
            ].map((tab) => {
              const active = slideIndex === tab.index;
              return (
                <motion.button
                  key={tab.label}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setSlideIndex(tab.index)}
                  className={`relative isolate px-3.5 py-1.5 rounded-lg font-mono text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                    active
                      ? 'text-white'
                      : 'text-slate-700 dark:text-slate-400 hover:text-[#4338CA] dark:hover:text-white'
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="hero-slide-active-tab"
                      className="absolute inset-0 z-0 rounded-lg bg-[#4338CA] dark:bg-[#2563EB] shadow-2xs"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. Jackson About Section (#about) */}
      <section
        id="about"
        className="px-6 sm:px-12 lg:px-16 py-16 lg:py-20 border-b border-slate-200 dark:border-white/[0.08]"
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.42 }}
        >
          <motion.span
            whileHover={{ x: 3 }}
            className="inline-block font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#4338CA] dark:text-[#38BDF8] mb-2"
          >
            About
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.42, delay: 0.05 }}
            className="font-display text-2xl sm:text-[26px] font-bold tracking-tight text-[#0F172A] dark:text-white mb-6"
          >
            Who Am I?
          </motion.h2>

          <div className="space-y-4 font-sans text-[15px] sm:text-base text-slate-700 dark:text-slate-300 leading-[1.75] max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.38, delay: 0.08 }}
            >
              <strong className="text-[#0F172A] dark:text-white font-semibold">
                Hi, I&apos;m Ashutosh Singh.
              </strong>{' '}
              I am a Cyber &amp; Digital Risk Advisory professional at{' '}
              <strong className="text-[#4338CA] dark:text-[#38BDF8] font-semibold">
                PwC India
              </strong>{' '}
              with 5+ years of experience (since 18 Jan 2021) across enterprise IT risk governance,
              Computerized System Validation (CSV), and regulated pharmaceutical quality operations.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.38, delay: 0.14 }}
            >
              My work focuses on testing IT General Controls (ITGC), qualifying laboratory and
              enterprise software under GAMP 5 (Second Edition), and checking 21 CFR Part 11, EU GMP
              Annex 11, and ALCOA++ data integrity controls.
            </motion.p>
          </div>
        </motion.div>

        {/* 4 Square Pillar Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {ABOUT_PILLARS.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 18, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.38, delay: idx * 0.07 }}
              whileHover={{ y: -4 }}
              className="group relative rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50/70 dark:bg-[#131C2E] p-6 flex flex-col items-center justify-center text-center shadow-2xs hover:bg-white dark:hover:bg-[#162036] hover:shadow-md hover:border-[#4338CA]/50 dark:hover:border-[#38BDF8]/50 transition-all"
            >
              <motion.div
                whileHover={{ scale: 1.08 }}
                transition={{ type: 'spring', stiffness: 350, damping: 18 }}
                className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-white/[0.06] border border-indigo-200/70 dark:border-white/10 flex items-center justify-center mb-3.5"
              >
                {PILLAR_ICONS[pillar.icon]}
              </motion.div>
              <h3 className="font-display text-sm font-bold text-[#0F172A] dark:text-white group-hover:text-[#4338CA] dark:group-hover:text-[#38BDF8] transition-colors">
                {pillar.title}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Theme-Adaptive Track Record Banner */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.45, delay: 0.12 }}
          className="relative mt-8 rounded-2xl bg-indigo-50/80 dark:bg-[#131C2E] border border-indigo-200/80 dark:border-white/10 p-6 sm:p-8 shadow-2xs overflow-hidden"
        >
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <span className="inline-block font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-[#4338CA] dark:text-[#38BDF8] mb-1.5">
                18 Jan 2021 – Present · Track Record
              </span>
              <h3 className="font-display text-lg sm:text-xl font-bold text-[#0F172A] dark:text-white leading-snug max-w-2xl text-balance">
                5+ years of experience &amp; 15+ enterprise systems validated with zero critical audit findings.
              </h3>
            </div>
            <div className="font-mono text-xs font-semibold text-[#4338CA] dark:text-[#38BDF8] shrink-0">
              URS · FS · DS · IQ · OQ · PQ · RTM · VSR
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};
