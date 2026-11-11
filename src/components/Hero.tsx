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
  shield: <ShieldCheck className="w-6 h-6 text-[#4F46E5] dark:text-[#38BDF8] stroke-[1.75]" />,
  check: <FileCheck2 className="w-6 h-6 text-[#2563EB] dark:text-[#22D3EE] stroke-[1.75]" />,
  lock: <Lock className="w-6 h-6 text-[#059669] dark:text-[#34D399] stroke-[1.75]" />,
  database: <Database className="w-6 h-6 text-[#4F46E5] dark:text-[#818CF8] stroke-[1.75]" />,
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
      {/* 1. Jackson Hero Section (#home) — Balanced height & spacing so nothing clips */}
      <section
        id="home"
        aria-label="Introduction"
        className="relative min-h-[520px] lg:min-h-[600px] flex flex-col justify-between bg-gradient-to-br from-[#F8FAFC] via-[#EEF2FF]/70 to-[#ECFEFF]/60 dark:from-[#070B14] dark:via-[#0B1120] dark:to-[#091526] bg-swiss-grid px-6 sm:px-12 lg:px-16 py-12 sm:py-16 overflow-hidden border-b border-slate-200/80 dark:border-white/[0.08] transition-colors duration-300"
      >
        {/* Animated Floating Ambient Mesh Orbs */}
        <motion.div
          aria-hidden="true"
          animate={{
            x: [0, 20, 0],
            y: [0, -14, 0],
            scale: [1, 1.06, 1],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          className="pointer-events-none absolute -right-20 top-1/4 w-[380px] h-[380px] rounded-full bg-gradient-to-br from-[#4F46E5]/18 via-[#06B6D4]/14 to-transparent blur-3xl"
        />
        <motion.div
          aria-hidden="true"
          animate={{
            x: [0, -18, 0],
            y: [0, 16, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
          className="pointer-events-none absolute -left-24 bottom-6 w-[320px] h-[320px] rounded-full bg-gradient-to-tr from-[#10B981]/12 via-[#38BDF8]/10 to-transparent blur-3xl"
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
                  className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#4F46E5] dark:text-[#38BDF8] mb-4"
                >
                  Cyber &amp; Digital Risk Advisory · PwC India
                </motion.p>

                <motion.h2
                  custom={0.08}
                  variants={slideTextVariants}
                  className="font-display text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight text-[#0F172A] dark:text-white leading-[1.08] mb-5 text-balance"
                >
                  Hi! I&apos;m{' '}
                  <motion.span
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                    className="bg-gradient-to-r from-[#4F46E5] via-[#06B6D4] to-[#10B981] bg-[length:200%_auto] bg-clip-text text-transparent"
                  >
                    Ashutosh Singh
                  </motion.span>
                </motion.h2>

                <motion.p
                  custom={0.14}
                  variants={slideTextVariants}
                  className="font-sans text-base sm:text-[17px] text-slate-600 dark:text-slate-300 leading-relaxed mb-6 max-w-xl"
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
                  className="flex flex-wrap items-center gap-x-3 gap-y-1.5 font-mono text-xs text-slate-600 dark:text-slate-300"
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
                        <span aria-hidden="true" className="text-[#4F46E5] dark:text-[#38BDF8]">
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
                  className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#059669] dark:text-[#34D399] mb-4"
                >
                  6 Years · 15+ Enterprise &amp; GxP Systems Qualified
                </motion.p>

                <motion.h2
                  custom={0.08}
                  variants={slideTextVariants}
                  className="font-display text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight text-[#0F172A] dark:text-white leading-[1.08] mb-5 text-balance"
                >
                  Securing Digital{' '}
                  <span className="bg-gradient-to-r from-[#4F46E5] via-[#06B6D4] to-[#10B981] bg-clip-text text-transparent">
                    GxP Architectures.
                  </span>
                </motion.h2>

                <motion.p
                  custom={0.14}
                  variants={slideTextVariants}
                  className="font-sans text-base sm:text-[17px] text-slate-600 dark:text-slate-300 leading-relaxed mb-6 max-w-xl"
                >
                  Delivering end-to-end validation lifecycles (URS, FS, IQ, OQ, PQ, RTM, VSR),
                  audit trail integrity reviews, and zero-finding regulatory readiness across
                  global pharmaceutical and enterprise environments.
                </motion.p>

                <motion.div
                  custom={0.2}
                  variants={slideTextVariants}
                  className="grid grid-cols-3 gap-4 max-w-lg pt-2 border-t border-slate-200/80 dark:border-white/10"
                >
                  {[
                    { value: '6 Years', label: 'Cyber & GxP' },
                    { value: '15+ Systems', label: 'End-to-End CSV' },
                    { value: '0 Findings', label: 'Audit Record' },
                  ].map((item) => (
                    <motion.div
                      key={item.label}
                      whileHover={{ y: -2 }}
                      className="text-left"
                    >
                      <span className="block font-display font-mono text-lg sm:text-xl font-extrabold text-[#4F46E5] dark:text-[#38BDF8] tabular-nums">
                        {item.value}
                      </span>
                      <span className="block font-mono text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
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
            className="flex items-center gap-1.5 bg-white/85 dark:bg-[#111827]/85 backdrop-blur-md p-1.5 rounded-xl border border-slate-200/90 dark:border-white/10 shadow-xs"
          >
            {[
              { index: 0 as const, label: '01. Advisory Profile' },
              { index: 1 as const, label: '02. GxP Assurance' },
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
                  className={`relative px-3.5 py-1.5 rounded-lg font-mono text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                    active
                      ? 'text-white'
                      : 'text-slate-600 dark:text-slate-400 hover:text-[#4F46E5] dark:hover:text-white'
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="hero-slide-active-tab"
                      className="absolute inset-0 -z-10 rounded-lg bg-gradient-to-r from-[#4F46E5] via-[#2563EB] to-[#06B6D4] shadow-xs"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  {tab.label}
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. Jackson About Section (#about) with Proportional Dimensions */}
      <section
        id="about"
        className="px-6 sm:px-12 lg:px-16 py-16 lg:py-20 border-b border-slate-200/80 dark:border-white/[0.08]"
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.42 }}
        >
          <motion.span
            whileHover={{ x: 3 }}
            className="inline-block font-mono text-xs font-semibold uppercase tracking-[0.2em] bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] dark:from-[#38BDF8] dark:to-[#34D399] bg-clip-text text-transparent mb-2"
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

          <div className="space-y-4 font-sans text-[15px] sm:text-base text-slate-600 dark:text-slate-300 leading-[1.75] max-w-3xl">
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
              <strong className="text-[#4F46E5] dark:text-[#38BDF8] font-semibold">
                PwC India
              </strong>{' '}
              with 6 years of combined experience across enterprise IT risk governance, Computerized
              System Validation (CSV), and regulated pharmaceutical quality operations.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.38, delay: 0.14 }}
            >
              My work focuses on evaluating IT General Controls (ITGC), qualifying mission-critical
              laboratory and enterprise software under GAMP 5 (Second Edition), and enforcing 21 CFR
              Part 11, EU GMP Annex 11, and ALCOA++ data integrity standards to ensure continuous
              inspection readiness.
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
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative rounded-2xl border border-slate-200/90 dark:border-white/10 bg-gradient-to-b from-white to-slate-50/70 dark:from-[#131C2E] dark:to-[#0D1322] p-6 flex flex-col items-center justify-center text-center shadow-2xs hover:shadow-md hover:border-[#4F46E5]/50 dark:hover:border-[#38BDF8]/50 transition-all overflow-hidden"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#4F46E5] via-[#06B6D4] to-[#10B981] opacity-75 group-hover:opacity-100 transition-opacity" />
              <motion.div
                whileHover={{ rotate: 8, scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 350, damping: 18 }}
                className="w-12 h-12 rounded-xl bg-indigo-500/10 dark:bg-white/[0.05] border border-indigo-500/20 dark:border-white/10 flex items-center justify-center mb-3.5"
              >
                {PILLAR_ICONS[pillar.icon]}
              </motion.div>
              <h3 className="font-display text-sm font-bold text-[#0F172A] dark:text-white group-hover:text-[#4F46E5] dark:group-hover:text-[#38BDF8] transition-colors">
                {pillar.title}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Modern Gradient Assurance Banner */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.45, delay: 0.12 }}
          whileHover={{ scale: 1.005 }}
          className="relative mt-8 rounded-2xl bg-gradient-to-r from-[#4F46E5] via-[#2563EB] to-[#0891B2] text-white p-6 sm:p-8 shadow-lg shadow-indigo-500/15 overflow-hidden"
        >
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <span className="inline-block font-mono text-[11px] uppercase tracking-[0.18em] text-cyan-200 mb-1.5">
                Regulatory &amp; Advisory Track Record
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-bold leading-snug max-w-2xl text-balance">
                6 years of experience &amp; 15+ enterprise systems validated with zero critical audit findings.
              </h3>
            </div>
            <div className="font-mono text-xs text-cyan-100 shrink-0">
              URS · FS · DS · IQ · OQ · PQ · RTM · VSR
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};
