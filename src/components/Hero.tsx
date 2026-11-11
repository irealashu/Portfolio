import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, ShieldCheck } from 'lucide-react';
import { NetworkShield3D } from './NetworkShield3D.tsx';
import { EXECUTIVE_METRICS } from '../data/portfolioData.ts';

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
      className="relative pt-8 sm:pt-12 pb-16 sm:pb-24 scroll-mt-28"
    >
      {/* 2-Column Split-Screen Hero (1440px Container Presence) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
        {/* Left Column: Typographic Hierarchy & Primary Actions */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col justify-center py-4 lg:py-8"
        >
          {/* Eyebrow / Domain Kicker (Unboxed clean metadata with separators) */}
          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-medium text-[#06B6D4] mb-4">
            <span>Cyber &amp; Digital Risk Advisory</span>
            <span aria-hidden="true" className="text-[#4B5563]">·</span>
            <span>Systems &amp; Mobile Internals</span>
            <span aria-hidden="true" className="text-[#4B5563]">·</span>
            <span className="text-[#10B981]">PwC India</span>
          </div>

          {/* Main Display Headline */}
          <h1
            className="font-display text-3xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight text-[#F9FAFB] leading-[1.08] mb-6"
            style={{ textWrap: 'balance' }}
          >
            Securing Digital Architectures.{' '}
            <span className="bg-gradient-to-r from-[#2563EB] via-[#06B6D4] to-[#10B981] bg-clip-text text-transparent">
              Building Resilient Systems.
            </span>
          </h1>

          {/* Concise Value Proposition */}
          <p className="text-base sm:text-lg text-[#9CA3AF] leading-relaxed max-w-[64ch] mb-6">
            I help regulated enterprises validate critical systems, strengthen internal IT controls,
            and assure data integrity at <strong className="text-[#F9FAFB] font-semibold">PwC India</strong>—while
            engineering zero-trust, local-first open-source software and native Android diagnostic utilities
            that eliminate cloud attack surfaces by design.
          </p>

          {/* Verified Availability & Credential Bar (Unboxed Typography) */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#9CA3AF] pb-7 mb-7 border-b border-white/10">
            <span className="inline-flex items-center gap-1.5 text-[#10B981] font-medium">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>Available for advisory &amp; systems engineering</span>
            </span>
            <span aria-hidden="true" className="text-[#4B5563]">·</span>
            <span>GAMP 5 / 21 CFR Part 11 / ISO 27001</span>
            <span aria-hidden="true" className="text-[#4B5563]">·</span>
            <span>Gurugram, India (IST)</span>
          </div>

          {/* Primary & Secondary Action Triggers + Direct Profile Links */}
          <div className="flex flex-wrap items-center gap-3.5">
            <a
              href="#projects"
              onClick={(e) => scrollToTarget(e, 'projects')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-[#2563EB] hover:bg-[#1D4ED8] text-[#F9FAFB] transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#06B6D4]"
            >
              <span>Explore Engineering &amp; Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#advisory"
              onClick={(e) => scrollToTarget(e, 'advisory')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-[#161B26] hover:bg-[#1E2534] text-[#F9FAFB] border border-white/10 hover:border-[#06B6D4]/40 transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#06B6D4]"
            >
              <span>View Security Expertise</span>
            </a>

            <div className="flex items-center gap-4 pl-1 sm:pl-3 text-xs sm:text-sm font-medium text-[#9CA3AF]">
              <a
                href="https://github.com/irealashu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-[#F9FAFB] transition-colors whitespace-nowrap shrink-0"
              >
                <span>GitHub</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <span aria-hidden="true" className="text-[#4B5563]">/</span>
              <a
                href="https://www.linkedin.com/in/irealashu/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-[#F9FAFB] transition-colors whitespace-nowrap shrink-0"
              >
                <span>LinkedIn</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Interactive 3D Cryptographic Lattice Viewport */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex flex-col"
        >
          <NetworkShield3D />
        </motion.div>
      </div>

      {/* Full-Width 4-Column Quantitative Proof Row Below Hero Split */}
      <div className="mt-12 sm:mt-16 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {EXECUTIVE_METRICS.map((metric, idx) => (
          <div key={idx} className="flex flex-col">
            <div className="flex items-baseline gap-2 mb-1">
              <span className="font-display font-mono tabular-nums text-3xl sm:text-4xl font-bold text-[#F9FAFB]">
                {metric.value}
              </span>
              <span className="font-mono text-xs font-medium text-[#06B6D4]">
                {metric.unit}
              </span>
            </div>
            <div className="text-sm font-semibold text-[#F9FAFB] mb-0.5">
              {metric.label}
            </div>
            <div className="text-xs text-[#9CA3AF] leading-relaxed">
              {metric.context}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
