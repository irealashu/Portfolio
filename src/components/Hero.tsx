import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  FileCheck2,
  Lock,
  Database,
  Briefcase,
  ExternalLink,
} from 'lucide-react';
import { ABOUT_PILLARS } from '../data/portfolioData';

const PILLAR_ICONS = {
  shield: <ShieldCheck className="w-7 h-7 text-[#2563EB] dark:text-[#06B6D4] stroke-[1.75]" />,
  check: <FileCheck2 className="w-7 h-7 text-[#2563EB] dark:text-[#06B6D4] stroke-[1.75]" />,
  lock: <Lock className="w-7 h-7 text-[#2563EB] dark:text-[#06B6D4] stroke-[1.75]" />,
  database: <Database className="w-7 h-7 text-[#2563EB] dark:text-[#06B6D4] stroke-[1.75]" />,
};

export const Hero: React.FC = () => {
  const [slideIndex, setSlideIndex] = useState<0 | 1>(0);

  const scrollToTarget = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const yOffset = window.innerWidth < 1024 ? -72 : 0;
      const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* 1. Jackson Hero Slider Section (#home) with Previous Fonts & Framer Motion Animations */}
      <section
        id="home"
        aria-label="Introduction"
        className="relative min-h-[82vh] flex flex-col justify-center bg-[#F4F6F9] dark:bg-[#0B0E14] bg-swiss-grid px-8 sm:px-14 lg:px-20 py-20 overflow-hidden border-b border-slate-200 dark:border-white/[0.08] transition-colors"
      >
        {/* Subtle Radial Glow Anchor from Previous Design */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 top-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full bg-gradient-to-br from-[#2563EB]/15 via-[#06B6D4]/10 to-transparent blur-3xl"
        />

        <div className="relative z-10 max-w-2xl">
          <AnimatePresence mode="wait">
            {slideIndex === 0 ? (
              <motion.div
                key="slide-1"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#2563EB] dark:text-[#06B6D4] mb-4">
                  Cyber &amp; Digital Risk Advisory · PwC India
                </p>

                <h2 className="font-display text-5xl sm:text-6xl lg:text-[64px] font-extrabold tracking-tight text-[#0F172A] dark:text-[#F9FAFB] leading-[1.08] mb-6">
                  Hi!
                  <br />
                  I&apos;m{' '}
                  <span className="bg-gradient-to-r from-[#2563EB] via-[#06B6D4] to-[#10B981] bg-clip-text text-transparent">
                    Ashutosh
                  </span>
                </h2>

                <p className="font-sans text-base sm:text-lg text-slate-600 dark:text-[#9CA3AF] leading-relaxed mb-8">
                  Associate — Cyber &amp; Digital Risk Advisory at{' '}
                  <a
                    href="https://www.linkedin.com/in/irealashu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#2563EB] dark:text-[#06B6D4] underline underline-offset-4 font-semibold"
                  >
                    PwC India
                  </a>
                  . Specializing in Computerized System Validation (CSV), GAMP 5, and 21 CFR Part 11.
                </p>

                <motion.a
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  href="#services"
                  onClick={(e) => scrollToTarget(e, 'services')}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl border border-slate-300 dark:border-white/15 bg-white dark:bg-[#161B26] hover:border-[#2563EB] dark:hover:border-[#06B6D4] font-mono text-xs font-semibold uppercase tracking-[0.14em] text-[#0F172A] dark:text-[#F9FAFB] transition-colors shadow-xs"
                >
                  <span>Explore Expertise</span>
                  <Briefcase className="w-3.5 h-3.5 text-[#2563EB] dark:text-[#06B6D4]" />
                </motion.a>
              </motion.div>
            ) : (
              <motion.div
                key="slide-2"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#10B981] mb-4">
                  GAMP 5 (2nd Ed.) · 21 CFR Part 11 · ALCOA++
                </p>

                <h2 className="font-display text-4xl sm:text-6xl lg:text-[56px] font-extrabold tracking-tight text-[#0F172A] dark:text-[#F9FAFB] leading-[1.1] mb-6">
                  Securing Digital
                  <br />
                  <span className="bg-gradient-to-r from-[#2563EB] via-[#06B6D4] to-[#10B981] bg-clip-text text-transparent">
                    GxP Architectures.
                  </span>
                </h2>

                <p className="font-sans text-base sm:text-lg text-slate-600 dark:text-[#9CA3AF] leading-relaxed mb-8">
                  6 years across Cyber Risk Advisory &amp; Regulated GxP Operations, qualifying 15+ enterprise systems with zero critical audit findings.
                </p>

                <motion.a
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  href="#work"
                  onClick={(e) => scrollToTarget(e, 'work')}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl border border-slate-300 dark:border-white/15 bg-white dark:bg-[#161B26] hover:border-[#2563EB] dark:hover:border-[#06B6D4] font-mono text-xs font-semibold uppercase tracking-[0.14em] text-[#0F172A] dark:text-[#F9FAFB] transition-colors shadow-xs"
                >
                  <span>View Validated Systems</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#2563EB] dark:text-[#06B6D4]" />
                </motion.a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Jackson Bottom-Right Slide Navigation Arrows */}
        <div className="absolute bottom-8 right-8 sm:right-12 flex items-center gap-2.5 z-10">
          <motion.button
            type="button"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.94 }}
            onClick={() => setSlideIndex((prev) => (prev === 0 ? 1 : 0))}
            aria-label="Previous slide"
            className="w-11 h-11 rounded-full bg-white dark:bg-[#161B26] border border-slate-200 dark:border-white/10 text-[#0F172A] dark:text-[#F9FAFB] flex items-center justify-center shadow-sm hover:border-[#2563EB] dark:hover:border-[#06B6D4] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
          </motion.button>
          <motion.button
            type="button"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.94 }}
            onClick={() => setSlideIndex((prev) => (prev === 0 ? 1 : 0))}
            aria-label="Next slide"
            className="w-11 h-11 rounded-full bg-white dark:bg-[#161B26] border border-slate-200 dark:border-white/10 text-[#0F172A] dark:text-[#F9FAFB] flex items-center justify-center shadow-sm hover:border-[#2563EB] dark:hover:border-[#06B6D4] transition-colors cursor-pointer"
          >
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>
      </section>

      {/* 2. Jackson About Section (#about) with Scroll Animations */}
      <section
        id="about"
        className="px-6 sm:px-12 lg:px-16 py-20 lg:py-24 border-b border-slate-200 dark:border-white/[0.08]"
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.45 }}
        >
          <span className="block font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-[#2563EB] dark:text-[#06B6D4] mb-2">
            About
          </span>
          <h2 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-[0.14em] text-[#0F172A] dark:text-[#F9FAFB] mb-8">
            Who Am I?
          </h2>

          <div className="space-y-5 font-sans text-[15px] sm:text-base text-slate-600 dark:text-[#9CA3AF] leading-[1.8] max-w-3xl">
            <p>
              <strong className="text-[#0F172A] dark:text-[#F9FAFB] font-semibold">
                Hi, I&apos;m Ashutosh Singh.
              </strong>{' '}
              I am a Cyber &amp; Digital Risk Advisory professional at{' '}
              <strong className="text-[#0F172A] dark:text-[#F9FAFB] font-semibold">PwC India</strong>{' '}
              with 6 years of combined experience across enterprise IT risk governance, Computerized
              System Validation (CSV), and regulated pharmaceutical quality operations.
            </p>
            <p>
              My work focuses on evaluating IT General Controls (ITGC), qualifying mission-critical
              laboratory and enterprise software under GAMP 5 (Second Edition), and enforcing 21 CFR
              Part 11, EU GMP Annex 11, and ALCOA++ data integrity standards to ensure continuous
              inspection readiness.
            </p>
          </div>
        </motion.div>

        {/* 4 Square Pillar Cards with Staggered Reveal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
          {ABOUT_PILLARS.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={{ y: -4 }}
              className="rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#161B26]/90 p-7 flex flex-col items-center justify-center text-center shadow-2xs hover:border-[#2563EB]/60 dark:hover:border-[#06B6D4]/50 transition-colors"
            >
              <div className="mb-4">{PILLAR_ICONS[pillar.icon]}</div>
              <h3 className="font-display text-sm font-bold text-[#0F172A] dark:text-[#F9FAFB]">
                {pillar.title}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Solid Blue Callout Banner */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.45, delay: 0.15 }}
          className="mt-10 rounded-2xl bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] text-white p-8 sm:p-10 shadow-lg"
        >
          <h3 className="font-display text-2xl sm:text-3xl font-bold leading-snug mb-6 max-w-2xl">
            6 years of experience &amp; 15+ enterprise systems validated with zero critical audit findings.
          </h3>
          <a
            href="#contact"
            onClick={(e) => scrollToTarget(e, 'contact')}
            className="inline-block px-5 py-2.5 rounded-lg border border-white/80 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-white hover:bg-white hover:text-[#2563EB] transition-colors"
          >
            Get in Touch
          </a>
        </motion.div>
      </section>
    </>
  );
};
