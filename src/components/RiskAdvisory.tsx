import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  FileCheck2,
  Lock,
  CheckCircle2,
  Building2,
  Calendar,
  MapPin,
  ArrowUpRight,
} from 'lucide-react';
import { ADVISORY_DOMAINS, CAREER_MILESTONES } from '../data/portfolioData';

const DOMAIN_ICONS: Record<string, React.ReactNode> = {
  'risk-controls': <ShieldCheck className="w-5 h-5 text-[#2563EB]" />,
  'csv-gamp5': <FileCheck2 className="w-5 h-5 text-[#06B6D4]" />,
  'data-integrity': <Lock className="w-5 h-5 text-[#10B981]" />,
};

export const RiskAdvisory: React.FC = () => {
  const [selectedMilestoneIndex, setSelectedMilestoneIndex] = useState<number>(0);
  const activeMilestone = CAREER_MILESTONES[selectedMilestoneIndex];

  return (
    <section
      id="advisory"
      className="relative py-24 lg:py-32 border-b border-white/[0.08] bg-[#08090C]"
      aria-labelledby="advisory-heading"
    >
      <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-14 border-b border-white/[0.08]">
          <div className="lg:col-span-7">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#06B6D4] mb-3">
              01 · Cyber &amp; Digital Risk Advisory Practice
            </p>
            <h2
              id="advisory-heading"
              className="font-display text-3xl sm:text-4xl lg:text-[2.65rem] font-bold tracking-tight text-[#F9FAFB] leading-[1.1]"
            >
              Enterprise Governance, CSV &amp; Data Integrity.
            </h2>
          </div>
          <div className="lg:col-span-5 flex flex-col justify-end">
            <p className="text-base text-[#9CA3AF] leading-relaxed">
              Delivering technology risk assurance, IT General Controls (ITGC) evaluations, and end-to-end GAMP 5 Computerized System Validation across regulated enterprise environments.
            </p>
          </div>
        </div>

        {/* 3 Core Governance & Resilience Domain Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-12">
          {ADVISORY_DOMAINS.map((domain, idx) => (
            <motion.article
              key={domain.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="surface-card rounded-2xl p-7 sm:p-8 flex flex-col justify-between bg-[#161B26]/85 border border-white/10 hover:border-[#2563EB]/50 transition-colors"
            >
              <div>
                {/* Top Index & Icon Bar */}
                <div className="flex items-center justify-between pb-5 mb-6 border-b border-white/[0.08]">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#9CA3AF]">
                      Domain {domain.index}
                    </span>
                    <span className="text-white/20">·</span>
                    <span className="font-mono text-xs text-[#10B981] uppercase tracking-wider">
                      Core Practice
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-[#0F1219] border border-white/10 flex items-center justify-center">
                    {DOMAIN_ICONS[domain.id]}
                  </div>
                </div>

                {/* Title & Subtitle */}
                <h3 className="font-display text-xl font-bold text-[#F9FAFB] tracking-tight mb-2">
                  {domain.title}
                </h3>
                <p className="font-mono text-xs text-[#06B6D4] tracking-wide mb-4">
                  {domain.subtitle}
                </p>
                <p className="text-sm text-[#9CA3AF] leading-relaxed mb-6">
                  {domain.description}
                </p>

                {/* Deliverables List */}
                <div className="space-y-3 mb-8">
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#9CA3AF]">
                    Key Advisory Deliverables
                  </p>
                  <ul className="space-y-2.5">
                    {domain.deliverables.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-[#F9FAFB]/90 leading-relaxed"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Footer Telemetry & Standards */}
              <div className="pt-5 border-t border-white/[0.08]">
                <div className="mb-3">
                  <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-[#9CA3AF] mb-1">
                    Regulatory &amp; Control Frameworks
                  </span>
                  <p className="font-mono text-xs text-[#F9FAFB] leading-relaxed">
                    {domain.standards.join(' · ')}
                  </p>
                </div>
                <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="font-mono text-[11px] text-[#10B981] font-medium">
                    {domain.impactMetric}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Career Progression & Institutional Pedigree Matrix */}
        <div className="mt-16 rounded-2xl bg-[#0F1219] border border-white/10 overflow-hidden">
          <div className="px-6 sm:px-8 py-6 border-b border-white/[0.08] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#06B6D4] mb-1">
                Institutional Track Record
              </p>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-[#F9FAFB]">
                Advisory &amp; Regulated GxP Career Progression
              </h3>
            </div>
            <a
              href="https://www.linkedin.com/in/irealashu/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-xs text-[#9CA3AF] hover:text-[#F9FAFB] transition-colors"
            >
              <span>Verify on LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#06B6D4]" />
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Selector Column */}
            <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-white/[0.08] divide-y divide-white/[0.08]">
              {CAREER_MILESTONES.map((milestone, index) => {
                const isSelected = index === selectedMilestoneIndex;
                return (
                  <button
                    key={milestone.organization}
                    type="button"
                    onClick={() => setSelectedMilestoneIndex(index)}
                    className={`w-full text-left px-6 sm:px-8 py-5 transition-colors flex items-start justify-between gap-4 ${
                      isSelected
                        ? 'bg-[#161B26] text-[#F9FAFB]'
                        : 'bg-transparent text-[#9CA3AF] hover:bg-white/[0.02] hover:text-[#F9FAFB]'
                    }`}
                  >
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#06B6D4] mb-1 tabular-nums">
                        {milestone.period}
                      </p>
                      <h4 className="font-display text-base font-semibold text-[#F9FAFB]">
                        {milestone.organization}
                      </h4>
                      <p className="text-xs text-[#9CA3AF] mt-0.5">{milestone.role}</p>
                    </div>
                    <span
                      className={`font-mono text-xs uppercase tracking-widest mt-1 ${
                        isSelected ? 'text-[#10B981]' : 'text-[#4B5563]'
                      }`}
                    >
                      0{index + 1}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Right Detail Inspector */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 bg-[#161B26]/50 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pb-5 mb-6 border-b border-white/[0.08] font-mono text-xs text-[#9CA3AF]">
                  <span className="inline-flex items-center gap-2 text-[#F9FAFB] font-medium">
                    <Building2 className="w-4 h-4 text-[#2563EB]" />
                    {activeMilestone.organization}
                  </span>
                  <span className="inline-flex items-center gap-1.5 tabular-nums">
                    <Calendar className="w-3.5 h-3.5 text-[#06B6D4]" />
                    {activeMilestone.period}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#10B981]" />
                    {activeMilestone.location}
                  </span>
                </div>

                <h4 className="font-display text-xl sm:text-2xl font-bold text-[#F9FAFB] mb-3">
                  {activeMilestone.role}
                </h4>
                <p className="text-sm sm:text-base text-[#9CA3AF] leading-relaxed mb-6">
                  {activeMilestone.summary}
                </p>

                <div className="space-y-3 mb-8">
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#9CA3AF]">
                    Operational &amp; Advisory Execution
                  </p>
                  <ul className="space-y-3">
                    {activeMilestone.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-3 text-sm text-[#F9FAFB]/90 leading-relaxed"
                      >
                        <span className="font-mono text-xs text-[#06B6D4] mt-0.5">→</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-5 border-t border-white/[0.08]">
                <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-[#9CA3AF] mb-1.5">
                  Scope &amp; Governance Frameworks
                </span>
                <p className="font-mono text-xs text-[#10B981]">
                  {activeMilestone.standards.join('  /  ')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
