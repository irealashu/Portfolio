import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  Building2,
  CheckCircle2,
  FileCheck2,
  Lock,
} from 'lucide-react';
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
      className="relative pt-10 sm:pt-14 pb-20 sm:pb-28 border-b border-white/[0.08] scroll-mt-28"
    >
      <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
        {/* 2-Column Split-Screen Executive Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Typographic Hierarchy & Primary Actions */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center py-2 lg:py-6"
          >
            {/* Eyebrow / Domain Kicker */}
            <div className="flex flex-wrap items-center gap-2 font-mono text-xs sm:text-sm font-medium text-[#06B6D4] mb-4">
              <span>Cyber &amp; Digital Risk Advisory</span>
              <span aria-hidden="true" className="text-[#4B5563]">·</span>
              <span>Computerized System Validation (CSV)</span>
              <span aria-hidden="true" className="text-[#4B5563]">·</span>
              <span className="text-[#10B981]">PwC India</span>
            </div>

            {/* Main Display Headline */}
            <h1
              className="font-display text-3xl sm:text-5xl lg:text-[3.4rem] font-extrabold tracking-tight text-[#F9FAFB] leading-[1.08] mb-6"
              style={{ textWrap: 'balance' }}
            >
              Assuring Regulated Systems.{' '}
              <span className="bg-gradient-to-r from-[#2563EB] via-[#06B6D4] to-[#10B981] bg-clip-text text-transparent">
                Strengthening Digital Risk Controls.
              </span>
            </h1>

            {/* Concise Value Proposition */}
            <p className="text-base sm:text-lg text-[#9CA3AF] leading-relaxed max-w-[64ch] mb-6">
              Cyber &amp; Digital Risk Advisory professional at{' '}
              <strong className="text-[#F9FAFB] font-semibold">PwC India</strong> with deep hands-on
              experience in <strong className="text-[#F9FAFB] font-semibold">Computerized System Validation (CSV)</strong>,{' '}
              <strong className="text-[#F9FAFB] font-semibold">IT General Controls (ITGC)</strong>, and{' '}
              <strong className="text-[#F9FAFB] font-semibold">GxP Data Integrity</strong>. Specializing in
              qualifying mission-critical enterprise systems under GAMP 5, 21 CFR Part 11, EU Annex 11,
              and ISO/IEC 27001 frameworks.
            </p>

            {/* Verified Credential Bar */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs text-[#9CA3AF] pb-7 mb-7 border-b border-white/10">
              <span className="inline-flex items-center gap-1.5 text-[#10B981] font-medium">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>Associate — Cyber &amp; Digital Risk Advisory</span>
              </span>
              <span aria-hidden="true" className="text-[#4B5563]">·</span>
              <span>GAMP 5 / 21 CFR Part 11 / ALCOA++</span>
              <span aria-hidden="true" className="text-[#4B5563]">·</span>
              <span>Gurugram, India</span>
            </div>

            {/* Action Triggers + Minimal Profile Links */}
            <div className="flex flex-wrap items-center gap-3.5">
              <a
                href="#advisory"
                onClick={(e) => scrollToTarget(e, 'advisory')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-[#2563EB] hover:bg-[#1D4ED8] text-[#F9FAFB] transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#06B6D4]"
              >
                <span>Explore Advisory &amp; CSV Practice</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#projects"
                onClick={(e) => scrollToTarget(e, 'projects')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-[#161B26] hover:bg-[#1E2534] text-[#F9FAFB] border border-white/10 hover:border-[#06B6D4]/40 transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#06B6D4]"
              >
                <span>View Validated Systems</span>
              </a>

              <div className="flex items-center gap-4 pl-1 sm:pl-3 font-mono text-xs sm:text-sm font-medium text-[#9CA3AF]">
                <a
                  href="https://www.linkedin.com/in/irealashu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-[#F9FAFB] transition-colors whitespace-nowrap shrink-0"
                >
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#06B6D4]" />
                </a>
                <span aria-hidden="true" className="text-[#4B5563]">/</span>
                <a
                  href="https://github.com/irealashu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-[#F9FAFB] transition-colors whitespace-nowrap shrink-0"
                >
                  <span>GitHub</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#9CA3AF]" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Static Executive Advisory & Compliance Dossier Card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col"
          >
            <div className="surface-card h-full rounded-2xl bg-[#161B26]/90 border border-white/10 p-6 sm:p-8 flex flex-col justify-between">
              {/* Top Profile Header */}
              <div>
                <div className="flex items-center justify-between pb-5 mb-6 border-b border-white/[0.08]">
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#06B6D4]">
                    Executive Practitioners Dossier
                  </span>
                  <span className="font-mono text-[11px] text-[#10B981] font-medium">
                    Verified Profile
                  </span>
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <img
                    src="./dp.jpg"
                    alt="Ashutosh Singh — Cyber & Digital Risk Advisory at PwC India"
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover border border-white/15 shrink-0 bg-[#0F1219]"
                  />
                  <div>
                    <h2 className="font-display text-xl sm:text-2xl font-bold text-[#F9FAFB] tracking-tight">
                      Ashutosh Singh
                    </h2>
                    <p className="text-xs sm:text-sm text-[#06B6D4] font-medium mt-0.5">
                      Associate — Cyber &amp; Digital Risk Advisory
                    </p>
                    <p className="inline-flex items-center gap-1.5 font-mono text-xs text-[#9CA3AF] mt-1">
                      <Building2 className="w-3.5 h-3.5 text-[#2563EB]" />
                      <span>PwC India · Gurugram, Haryana</span>
                    </p>
                  </div>
                </div>

                {/* Core Assurance Matrix */}
                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-[#08090C]/90 border border-white/[0.08]">
                    <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-[#06B6D4] mb-1">
                      <FileCheck2 className="w-3.5 h-3.5" />
                      <span>Primary Validation &amp; Risk Scope</span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#F9FAFB] leading-relaxed">
                      End-to-end Computerized System Validation (URS, FRA, IQ/OQ/PQ, RTM, VSR) &amp; IT General Controls (ITGC) assurance.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#08090C]/90 border border-white/[0.08]">
                    <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-[#10B981] mb-1">
                      <Lock className="w-3.5 h-3.5" />
                      <span>Regulatory &amp; Control Standards</span>
                    </div>
                    <p className="font-mono text-xs text-[#F9FAFB] leading-relaxed">
                      21 CFR Part 11 · EU GMP Annex 11 · GAMP 5 (2nd Ed.) · ALCOA++ · ISO/IEC 27001
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#08090C]/90 border border-white/[0.08]">
                    <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-[#9CA3AF] mb-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB]" />
                      <span>Academic Foundation</span>
                    </div>
                    <p className="text-xs text-[#F9FAFB] leading-relaxed">
                      M.Sc. Chemistry (8.07 CGPA) · B.Sc. (Hons.) Chemistry — Combining analytical laboratory operations with enterprise IT risk governance.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between font-mono text-[11px] text-[#9CA3AF]">
                <span>AUDIT &amp; INSPECTION RECORD</span>
                <span className="text-[#10B981] font-semibold">0 CRITICAL OBSERVATIONS</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Full-Width 4-Column Quantitative Proof Row Below Hero Split */}
        <div className="mt-14 sm:mt-16 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
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
      </div>
    </section>
  );
};
