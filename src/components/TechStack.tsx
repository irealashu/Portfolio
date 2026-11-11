import React from 'react';
import { Shield, FileCheck2, Wrench } from 'lucide-react';
import { COMPETENCY_GROUPS } from '../data/portfolioData';

const GROUP_ICONS: Record<string, React.ReactNode> = {
  '01': <Shield className="w-5 h-5 text-blue-600 dark:text-[#2563EB]" />,
  '02': <FileCheck2 className="w-5 h-5 text-emerald-600 dark:text-[#10B981]" />,
  '03': <Wrench className="w-5 h-5 text-cyan-600 dark:text-[#06B6D4]" />,
};

export const TechStack: React.FC = () => {
  return (
    <section
      className="py-20 lg:py-24 border-b border-slate-200 dark:border-white/[0.08] bg-slate-100/60 dark:bg-[#0F1219]/40 transition-colors"
      aria-labelledby="competency-heading"
    >
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <h2
            id="competency-heading"
            className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-[#F9FAFB]"
          >
            Core Competencies &amp; Standards
          </h2>
          <p className="mt-2 text-base text-slate-600 dark:text-[#9CA3AF]">
            Regulatory frameworks, validation lifecycle deliverables, and technical controls.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {COMPETENCY_GROUPS.map((group) => (
            <div
              key={group.index}
              className="rounded-2xl bg-white dark:bg-[#161B26]/85 border border-slate-200 dark:border-white/10 p-6 sm:p-7 shadow-sm transition-colors"
            >
              <div className="flex items-center gap-3 pb-4 mb-5 border-b border-slate-200 dark:border-white/[0.08]">
                <div className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-[#08090C] border border-slate-200 dark:border-white/10 flex items-center justify-center shrink-0">
                  {GROUP_ICONS[group.index]}
                </div>
                <h3 className="font-display text-lg font-bold text-slate-900 dark:text-[#F9FAFB]">
                  {group.category}
                </h3>
              </div>

              <ul className="space-y-4">
                {group.items.map((item) => (
                  <li key={item.name}>
                    <h4 className="font-display text-sm sm:text-base font-semibold text-slate-900 dark:text-[#F9FAFB]">
                      {item.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-[#9CA3AF] mt-0.5 leading-relaxed">
                      {item.application}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
