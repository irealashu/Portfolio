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
} from 'lucide-react';
import { ADVISORY_DOMAINS, CAREER_MILESTONES } from '../data/portfolioData';

const DOMAIN_ICONS: Record<string, React.ReactNode> = {
  'risk-controls': <ShieldCheck className="w-5 h-5 text-blue-600 dark:text-[#2563EB]" />,
  'csv-gamp5': <FileCheck2 className="w-5 h-5 text-cyan-600 dark:text-[#06B6D4]" />,
  'data-integrity': <Lock className="w-5 h-5 text-emerald-600 dark:text-[#10B981]" />,
};

export const RiskAdvisory: React.FC = () => {
  const [selectedMilestoneIndex, setSelectedMilestoneIndex] = useState<number>(0);
  const activeMilestone = CAREER_MILESTONES[selectedMilestoneIndex];

  return (
    <>
      {/* Section 1: Core Advisory & Validation Domains */}
      <section
        id="advisory"
        className="py-20 lg:py-24 border-b border-slate-200 dark:border-white/[0.08] transition-colors scroll-mt-24"
        aria-labelledby="advisory-heading"
      >
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h2
              id="advisory-heading"
              className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-[#F9FAFB]"
            >
              Advisory &amp; Validation Expertise
            </h2>
            <p className="mt-2 text-base text-slate-600 dark:text-[#9CA3AF]">
              Core practice areas across enterprise IT risk governance, GAMP 5 system qualification, and regulatory data integrity.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {ADVISORY_DOMAINS.map((domain, idx) => (
              <motion.article
                key={domain.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.35, delay: idx * 0.06 }}
                className="rounded-2xl p-6 sm:p-7 flex flex-col justify-between bg-white dark:bg-[#161B26]/85 border border-slate-200 dark:border-white/10 hover:border-blue-500/50 dark:hover:border-[#2563EB]/50 shadow-sm transition-colors"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-[#0F1219] border border-slate-200 dark:border-white/10 flex items-center justify-center mb-5">
                    {DOMAIN_ICONS[domain.id]}
                  </div>

                  <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 dark:text-[#F9FAFB] mb-2.5">
                    {domain.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-[#9CA3AF] leading-relaxed mb-6">
                    {domain.description}
                  </p>

                  <ul className="space-y-2.5 mb-6">
                    {domain.deliverables.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-[#F9FAFB]/90 leading-relaxed"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-[#10B981] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-white/[0.08]">
                  <p className="font-mono text-xs text-blue-600 dark:text-[#06B6D4]">
                    {domain.standards.join(' · ')}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Professional Experience */}
      <section
        id="experience"
        className="py-20 lg:py-24 border-b border-slate-200 dark:border-white/[0.08] bg-slate-100/60 dark:bg-[#0F1219]/40 transition-colors scroll-mt-24"
        aria-labelledby="experience-heading"
      >
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <h2
              id="experience-heading"
              className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-[#F9FAFB]"
            >
              Professional Experience
            </h2>
            <p className="mt-2 text-base text-slate-600 dark:text-[#9CA3AF]">
              Career progression across Big 4 cyber risk advisory and pharmaceutical GxP quality operations.
            </p>
          </div>

          <div className="rounded-2xl bg-white dark:bg-[#0F1219] border border-slate-200 dark:border-white/10 overflow-hidden shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Left Selector Column */}
              <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-white/[0.08] divide-y divide-slate-200 dark:divide-white/[0.08]">
                {CAREER_MILESTONES.map((milestone, index) => {
                  const isSelected = index === selectedMilestoneIndex;
                  return (
                    <button
                      key={milestone.organization}
                      type="button"
                      onClick={() => setSelectedMilestoneIndex(index)}
                      className={`w-full text-left px-6 py-4 transition-colors cursor-pointer ${
                        isSelected
                          ? 'bg-slate-100 dark:bg-[#161B26] text-slate-900 dark:text-[#F9FAFB]'
                          : 'bg-transparent text-slate-600 dark:text-[#9CA3AF] hover:bg-slate-50 dark:hover:bg-white/[0.02]'
                      }`}
                    >
                      <p className="font-mono text-xs text-blue-600 dark:text-[#06B6D4] mb-0.5 tabular-nums">
                        {milestone.period}
                      </p>
                      <h3 className="font-display text-base font-bold text-slate-900 dark:text-[#F9FAFB]">
                        {milestone.organization}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-[#9CA3AF] mt-0.5">
                        {milestone.role}
                      </p>
                    </button>
                  );
                })}
              </div>

              {/* Right Detail Panel */}
              <div className="lg:col-span-8 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pb-4 mb-5 border-b border-slate-200 dark:border-white/[0.08] font-mono text-xs text-slate-600 dark:text-[#9CA3AF]">
                    <span className="inline-flex items-center gap-1.5 text-slate-900 dark:text-[#F9FAFB] font-semibold">
                      <Building2 className="w-4 h-4 text-blue-600 dark:text-[#2563EB]" />
                      {activeMilestone.organization}
                    </span>
                    <span className="inline-flex items-center gap-1.5 tabular-nums">
                      <Calendar className="w-3.5 h-3.5 text-cyan-600 dark:text-[#06B6D4]" />
                      {activeMilestone.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-emerald-600 dark:text-[#10B981]" />
                      {activeMilestone.location}
                    </span>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-[#F9FAFB] mb-5">
                    {activeMilestone.role}
                  </h3>

                  <ul className="space-y-3 mb-6">
                    {activeMilestone.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-3 text-sm sm:text-base text-slate-700 dark:text-[#F9FAFB]/90 leading-relaxed"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-[#10B981] shrink-0 mt-1" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-white/[0.08]">
                  <p className="font-mono text-xs text-blue-600 dark:text-[#06B6D4]">
                    {activeMilestone.standards.join(' · ')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
