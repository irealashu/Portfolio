import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Shield, Wrench } from 'lucide-react';
import { COMPETENCY_GROUPS } from '../data/portfolioData';

const GROUP_ICONS: Record<string, React.ReactNode> = {
  '01': <Code2 className="w-5 h-5 text-[#2563EB]" />,
  '02': <Shield className="w-5 h-5 text-[#10B981]" />,
  '03': <Wrench className="w-5 h-5 text-[#06B6D4]" />,
};

export const TechStack: React.FC = () => {
  return (
    <section
      className="relative py-24 lg:py-32 border-b border-white/[0.08] bg-[#0F1219]/40"
      aria-labelledby="competency-heading"
    >
      <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-white/[0.08]">
          <div className="lg:col-span-7">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#06B6D4] mb-3">
              04 · Technical Competency Matrix
            </p>
            <h2
              id="competency-heading"
              className="font-display text-3xl sm:text-4xl lg:text-[2.65rem] font-bold tracking-tight text-[#F9FAFB] leading-[1.1]"
            >
              Production Stack &amp; Regulatory Standards.
            </h2>
          </div>
          <div className="lg:col-span-5 flex flex-col justify-end">
            <p className="text-base text-[#9CA3AF] leading-relaxed">
              Structured engineering capabilities spanning native Android internals, zero-backend web applications, and regulated enterprise risk governance.
            </p>
          </div>
        </div>

        {/* 3-Column Swiss Hairline Competency Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 border border-white/10 rounded-2xl overflow-hidden bg-[#08090C] divide-y lg:divide-y-0 lg:divide-x divide-white/10">
          {COMPETENCY_GROUPS.map((group, groupIdx) => (
            <motion.div
              key={group.index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: groupIdx * 0.08 }}
              className="flex flex-col justify-between"
            >
              {/* Column Header */}
              <div>
                <div className="p-6 sm:p-8 bg-[#161B26]/60 border-b border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#06B6D4]">
                      Matrix {group.index}
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-[#08090C] border border-white/10 flex items-center justify-center">
                      {GROUP_ICONS[group.index]}
                    </div>
                  </div>
                  <h3 className="font-display text-xl font-bold text-[#F9FAFB] mb-2">
                    {group.category}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
                    {group.summary}
                  </p>
                </div>

                {/* Hairline Matrix Cells */}
                <div className="divide-y divide-white/[0.08]">
                  {group.items.map((item) => (
                    <div
                      key={item.name}
                      className="p-6 sm:px-8 hover:bg-[#161B26]/35 transition-colors"
                    >
                      <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1.5">
                        <h4 className="font-display text-base font-semibold text-[#F9FAFB]">
                          {item.name}
                        </h4>
                        <span className="font-mono text-[11px] text-[#10B981]">
                          {item.domain}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
                        {item.application}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Column Footer */}
              <div className="px-6 sm:px-8 py-4 bg-[#0F1219] border-t border-white/[0.08] flex items-center justify-between font-mono text-[11px] text-[#9CA3AF]">
                <span>VERIFIED CAPABILITY</span>
                <span className="text-[#F9FAFB] tabular-nums">{group.items.length} DOMAINS</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
