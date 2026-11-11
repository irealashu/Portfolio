import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShieldCheck,
  FileCheck2,
  Lock,
  Database,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import { ABOUT_PILLARS } from '../data/portfolioData';

const PILLAR_ICONS = {
  shield: <ShieldCheck className="w-7 h-7 text-[#4F46E5] dark:text-[#38BDF8] stroke-[1.75]" />,
  check: <FileCheck2 className="w-7 h-7 text-[#2563EB] dark:text-[#22D3EE] stroke-[1.75]" />,
  lock: <Lock className="w-7 h-7 text-[#059669] dark:text-[#34D399] stroke-[1.75]" />,
  database: <Database className="w-7 h-7 text-[#4F46E5] dark:text-[#818CF8] stroke-[1.75]" />,
};

const REGULATORY_BADGES = [
  'GAMP 5 (2nd Ed.)',
  '21 CFR Part 11',
  'EU GMP Annex 11',
  'ALCOA++ Integrity',
  'ITGC & SOX',
];

const slideTextVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.48, delay, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export const Hero: React.FC = () => {
  const [slideIndex, setSlideIndex] = useState<0 | 1>(0);

  return (
    <>
      {/* 1. Jackson Hero Section (#home) with Modern Colors & Multi-Element Framer Motion Animations */}
      <section
        id="home"
        aria-label="Introduction"
        className="relative min-h-[82vh] flex flex-col justify-center bg-gradient-to-br from-[#F8FAFC] via-[#EEF2FF]/70 to-[#ECFEFF]/60 dark:from-[#070B14] dark:via-[#0B1120] dark:to-[#091526] bg-swiss-grid px-8 sm:px-14 lg:px-20 py-20 overflow-hidden border-b border-slate-200/80 dark:border-white/[0.08] transition-colors duration-300"
      >
        {/* Animated Floating Ambient Mesh Orbs */}
        <motion.div
          aria-hidden="true"
          animate={{
            x: [0, 24, 0],
            y: [0, -18, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          className="pointer-events-none absolute -right-20 top-1/4 w-[440px] h-[440px] rounded-full bg-gradient-to-br from-[#4F46E5]/18 via-[#06B6D4]/14 to-transparent blur-3xl"
        />
        <motion.div
          aria-hidden="true"
          animate={{
            x: [0, -20, 0],
            y: [0, 20, 0],
            scale: [1, 1.06, 1],
          }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
          className="pointer-events-none absolute -left-24 bottom-6 w-[360px] h-[360px] rounded-full bg-gradient-to-tr from-[#10B981]/12 via-[#38BDF8]/10 to-transparent blur-3xl"
        />

        <div className="relative z-10 max-w-2xl">
          <AnimatePresence mode="wait">
            {slideIndex === 0 ? (
              <motion.div
                key="slide-1"
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, y: -16, transition: { duration: 0.25 } }}
              >
                <motion.div
                  custom={0.02}
                  variants={slideTextVariants}
                  whileHover={{ scale: 1.03 }}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 dark:bg-indigo-500/15 border border-indigo-500/25 dark:border-indigo-400/30 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-[#4F46E5] dark:text-[#38BDF8] mb-6"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#4F46E5] dark:text-[#38BDF8]" />
                  <span>Cyber &amp; Digital Risk Advisory · PwC India</span>
                </motion.div>

                <motion.h2
                  custom={0.1}
                  variants={slideTextVariants}
                  className="font-display text-5xl sm:text-6xl lg:text-[64px] font-extrabold tracking-tight text-[#0F172A] dark:text-white leading-[1.06] mb-6"
                >
                  Hi!
                  <br />
                  I&apos;m{' '}
                  <motion.span
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                    className="bg-gradient-to-r from-[#4F46E5] via-[#06B6D4] to-[#10B981] bg-[length:200%_auto] bg-clip-text text-transparent"
                  >
                    Ashutosh
                  </motion.span>
                </motion.h2>

                <motion.p
                  custom={0.18}
                  variants={slideTextVariants}
                  className="font-sans text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8"
                >
                  Associate in Cyber &amp; Digital Risk Advisory at{' '}
                  <span className="font-semibold text-[#0F172A] dark:text-white">
                    PwC India
                  </span>
                  . Specializing in Computerized System Validation (CSV), GAMP 5 (2nd Ed.),
                  21 CFR Part 11, and enterprise IT General Controls.
                </motion.p>

                {/* Animated Key Credential Pills */}
                <motion.div
                  custom={0.26}
                  variants={slideTextVariants}
                  className="flex flex-wrap items-center gap-2.5"
                >
                  {REGULATORY_BADGES.map((badge, idx) => (
                    <motion.span
                      key={badge}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.28 + idx * 0.05 }}
                      whileHover={{ y: -3, scale: 1.04 }}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/90 dark:bg-[#131C2E]/90 border border-slate-200/90 dark:border-white/10 font-mono text-xs font-medium text-slate-700 dark:text-slate-200 shadow-2xs"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                      <span>{badge}</span>
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                key="slide-2"
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, y: -16, transition: { duration: 0.25 } }}
              >
                <motion.div
                  custom={0.02}
                  variants={slideTextVariants}
                  whileHover={{ scale: 1.03 }}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/25 dark:border-emerald-400/30 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-[#059669] dark:text-[#34D399] mb-6"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
                  <span>6 Years · 15+ Enterprise &amp; GxP Systems Qualified</span>
                </motion.div>

                <motion.h2
                  custom={0.1}
                  variants={slideTextVariants}
                  className="font-display text-4xl sm:text-6xl lg:text-[56px] font-extrabold tracking-tight text-[#0F172A] dark:text-white leading-[1.08] mb-6"
                >
                  Securing Digital
                  <br />
                  <span className="bg-gradient-to-r from-[#4F46E5] via-[#06B6D4] to-[#10B981] bg-clip-text text-transparent">
                    GxP Architectures.
                  </span>
                </motion.h2>

                <motion.p
                  custom={0.18}
                  variants={slideTextVariants}
                  className="font-sans text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8"
                >
                  Delivering end-to-end validation lifecycles (URS, FS, IQ, OQ, PQ, RTM, VSR),
                  audit trail integrity reviews, and zero-finding regulatory readiness across
                  global pharmaceutical and enterprise environments.
                </motion.p>

                <motion.div
                  custom={0.26}
                  variants={slideTextVariants}
                  className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-lg"
                >
                  {[
                    { value: '6 Years', label: 'Cyber & GxP Advisory' },
                    { value: '15+ Systems', label: 'End-to-End CSV' },
                    { value: '0 Findings', label: 'Audit Track Record' },
                  ].map((item) => (
                    <motion.div
                      key={item.label}
                      whileHover={{ y: -3, scale: 1.03 }}
                      className="rounded-xl bg-white/90 dark:bg-[#131C2E]/90 border border-slate-200/90 dark:border-white/10 p-3.5 shadow-2xs"
                    >
                      <span className="block font-display font-mono text-lg font-extrabold text-[#4F46E5] dark:text-[#38BDF8]">
                        {item.value}
                      </span>
                      <span className="block font-mono text-[10px] uppercase tracking-wider text-slate-500 dark:text-slate-400 mt-0.5">
                        {item.label}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Distinct Slide Selector Tabs (Replaces duplicate Prev/Next buttons with 2 distinct slide triggers) */}
        <div
          role="tablist"
          aria-label="Hero perspective selector"
          className="mt-12 sm:mt-0 sm:absolute sm:bottom-8 sm:right-10 flex items-center gap-2 z-10 bg-white/80 dark:bg-[#111827]/80 backdrop-blur-md p-1.5 rounded-2xl border border-slate-200/90 dark:border-white/10 shadow-sm w-fit"
        >
          {[
            { index: 0 as const, label: '01 · Advisory Profile' },
            { index: 1 as const, label: '02 · GxP Assurance' },
          ].map((tab) => {
            const active = slideIndex === tab.index;
            return (
              <motion.button
                key={tab.label}
                type="button"
                role="tab"
                aria-selected={active}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setSlideIndex(tab.index)}
                className={`relative px-3.5 py-1.5 rounded-xl font-mono text-[11px] font-semibold transition-colors cursor-pointer ${
                  active
                    ? 'text-white'
                    : 'text-slate-600 dark:text-slate-400 hover:text-[#4F46E5] dark:hover:text-white'
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="hero-slide-active-tab"
                    className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-[#4F46E5] via-[#2563EB] to-[#06B6D4] shadow-xs"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                {tab.label}
              </motion.button>
            );
          })}
        </div>
      </section>

      {/* 2. Jackson About Section (#about) with Staggered Element Animations */}
      <section
        id="about"
        className="px-6 sm:px-12 lg:px-16 py-20 lg:py-24 border-b border-slate-200/80 dark:border-white/[0.08]"
      >
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.45 }}
        >
          <motion.span
            whileHover={{ x: 3 }}
            className="inline-block font-mono text-[11px] font-semibold uppercase tracking-[0.22em] bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] dark:from-[#38BDF8] dark:to-[#34D399] bg-clip-text text-transparent mb-2"
          >
            About
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="font-display text-xl sm:text-2xl font-bold uppercase tracking-[0.14em] text-[#0F172A] dark:text-white mb-8"
          >
            Who Am I?
          </motion.h2>

          <div className="space-y-5 font-sans text-[15px] sm:text-base text-slate-600 dark:text-slate-300 leading-[1.8] max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
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
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.16 }}
            >
              My work focuses on evaluating IT General Controls (ITGC), qualifying mission-critical
              laboratory and enterprise software under GAMP 5 (Second Edition), and enforcing 21 CFR
              Part 11, EU GMP Annex 11, and ALCOA++ data integrity standards to ensure continuous
              inspection readiness.
            </motion.p>
          </div>
        </motion.div>

        {/* 4 Square Pillar Cards with Spring Hover & Animated Icon Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
          {ABOUT_PILLARS.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.42, delay: idx * 0.08 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group relative rounded-2xl border border-slate-200/90 dark:border-white/10 bg-gradient-to-b from-white to-slate-50/70 dark:from-[#131C2E] dark:to-[#0D1322] p-7 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-lg hover:shadow-indigo-500/10 hover:border-[#4F46E5]/50 dark:hover:border-[#38BDF8]/50 transition-all overflow-hidden"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#4F46E5] via-[#06B6D4] to-[#10B981] opacity-75 group-hover:opacity-100 transition-opacity" />
              <motion.div
                whileHover={{ rotate: 8, scale: 1.12 }}
                transition={{ type: 'spring', stiffness: 350, damping: 18 }}
                className="w-14 h-14 rounded-2xl bg-indigo-500/10 dark:bg-white/[0.05] border border-indigo-500/20 dark:border-white/10 flex items-center justify-center mb-4"
              >
                {PILLAR_ICONS[pillar.icon]}
              </motion.div>
              <h3 className="font-display text-sm font-bold text-[#0F172A] dark:text-white group-hover:text-[#4F46E5] dark:group-hover:text-[#38BDF8] transition-colors">
                {pillar.title}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Modern Gradient Assurance Banner (Without duplicate #contact button) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.15 }}
          whileHover={{ scale: 1.01 }}
          className="relative mt-10 rounded-2xl bg-gradient-to-r from-[#4F46E5] via-[#2563EB] to-[#0891B2] text-white p-8 sm:p-10 shadow-xl shadow-indigo-500/15 overflow-hidden"
        >
          <motion.div
            aria-hidden="true"
            animate={{ x: [0, 30, 0], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            className="pointer-events-none absolute -right-16 -top-16 w-64 h-64 rounded-full bg-white/20 blur-2xl"
          />
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <span className="inline-block font-mono text-[11px] uppercase tracking-[0.2em] text-cyan-200 mb-2">
                Regulatory &amp; Advisory Track Record
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold leading-snug max-w-2xl">
                6 years of experience &amp; 15+ enterprise systems validated with zero critical audit findings.
              </h3>
            </div>
            <div className="flex flex-wrap gap-2.5 shrink-0">
              {['URS · FS · DS', 'IQ · OQ · PQ', 'RTM & VSR'].map((phase) => (
                <motion.span
                  key={phase}
                  whileHover={{ y: -2, scale: 1.05 }}
                  className="px-3.5 py-2 rounded-xl bg-white/15 backdrop-blur-md border border-white/25 font-mono text-xs font-semibold tracking-wider text-white"
                >
                  {phase}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};
