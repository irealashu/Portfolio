import React from 'react';
import {
  ShieldCheck,
  FileCheck2,
  Lock,
  Database,
} from 'lucide-react';
import { ABOUT_PILLARS } from '../data/portfolioData';

const PILLAR_ICONS = {
  shield: <ShieldCheck className="w-5 h-5 text-[#2E3746] stroke-[1.7]" />,
  check: <FileCheck2 className="w-5 h-5 text-[#2E3746] stroke-[1.7]" />,
  lock: <Lock className="w-5 h-5 text-[#2E3746] stroke-[1.7]" />,
  database: <Database className="w-5 h-5 text-[#2E3746] stroke-[1.7]" />,
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
      {/* 1. Neumorphic Hero Section (#home) */}
      <section
        id="home"
        aria-label="Introduction"
        className="px-5 sm:px-10 lg:px-12 pt-6 pb-6 lg:pt-6 lg:pb-8"
      >
        <div className="neu-raised rounded-3xl px-7 sm:px-10 lg:px-12 py-10 sm:py-12 lg:py-14 animate-gpu-fade-up">
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-[#5E6878] mb-3.5">
              Cyber &amp; Digital Risk Advisory · PwC India
            </p>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-[52px] font-bold tracking-tight text-[#1D222B] leading-[1.08] mb-4 text-balance">
              <span className="text-[#5E6878] font-medium">Hi, I&apos;m </span>
              Ashutosh Singh
            </h1>

            <p className="font-sans text-base sm:text-[17px] text-[#4C5564] leading-relaxed mb-7 max-w-2xl">
              I&apos;m part of the Cyber &amp; Digital Risk Advisory team at{' '}
              <span className="font-semibold text-[#1D222B]">
                PwC India
              </span>
              . My day job? Computerized System Validation (CSV), IT General Controls and keeping
              regulated lab and enterprise systems ready for audits.
            </p>

            <div className="neu-divider mb-5" />

            {/* Clean Unboxed Standards Metadata Line */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 font-mono text-xs text-[#555F70]">
              {REGULATORY_STANDARDS.map((std, idx) => (
                <React.Fragment key={std}>
                  <span className="font-medium text-[#2E3746]">
                    {std}
                  </span>
                  {idx < REGULATORY_STANDARDS.length - 1 && (
                    <span aria-hidden="true" className="text-[#8792A4] font-bold">
                      ·
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. About Section (#about) */}
      <section
        id="about"
        className="px-5 sm:px-10 lg:px-12 py-10 lg:py-14"
      >
        <div className="max-w-3xl">
          <span className="inline-block font-mono text-xs font-medium uppercase tracking-[0.2em] text-[#5E6878] mb-2">
            About
          </span>
          <h2 className="font-display text-2xl sm:text-[28px] font-bold tracking-tight text-[#1D222B] mb-5">
            Background
          </h2>

          <div className="space-y-4 font-sans text-[15px] sm:text-base text-[#4C5564] leading-[1.78]">
            <p>
              I work as an Associate in Cyber &amp; Digital Risk Advisory at{' '}
              <strong className="text-[#1D222B] font-semibold">
                PwC India
              </strong>
              . Over the past 5+ years, I&apos;ve gone from running tests in pharma Quality Control
              labs to handling Computerized System Validation and enterprise IT risk.
            </p>
            <p>
              Starting on the lab floor changed how I look at compliance. I&apos;ve used these
              instruments and signed off on batch records myself, so I don&apos;t treat validation
              like a paperwork exercise. I look at how teams actually use a system every day and
              line those workflows up with GAMP 5, 21 CFR Part 11, EU GMP Annex 11 and ALCOA++
              rules.
            </p>
          </div>
        </div>

        {/* 4 Tactile Neumorphic Pillar Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-9">
          {ABOUT_PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="group rounded-2xl neu-surface p-6 flex flex-col items-center justify-center text-center transition-transform duration-200 ease-out hover:-translate-y-1 will-change-transform"
            >
              <div className="w-12 h-12 rounded-full neu-icon-well flex items-center justify-center mb-4 transition-transform duration-200 group-hover:scale-105">
                {PILLAR_ICONS[pillar.icon]}
              </div>
              <h3 className="font-display text-sm font-semibold text-[#1D222B]">
                {pillar.title}
              </h3>
            </div>
          ))}
        </div>

        <div className="neu-divider mt-14" />
      </section>
    </>
  );
};
