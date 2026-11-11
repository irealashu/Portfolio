import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Edit3 } from 'lucide-react';
import {
  SKILL_BARS,
  EDUCATION_ITEMS,
  CAREER_MILESTONES,
} from '../data/portfolioData';

export const TechStack: React.FC = () => {
  const [openAccordionId, setOpenAccordionId] = useState<string>(EDUCATION_ITEMS[0].id);

  const toggleAccordion = (id: string) => {
    setOpenAccordionId((prev) => (prev === id ? '' : id));
  };

  return (
    <>
      {/* 1. Jackson Skills Section (#skills) with Animated Progress Bars */}
      <section
        id="skills"
        className="px-6 sm:px-12 lg:px-16 py-20 lg:py-24 border-b border-slate-200 dark:border-white/[0.08]"
      >
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.4 }}
        >
          <span className="block font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-[#2563EB] dark:text-[#06B6D4] mb-2">
            My Specialty
          </span>
          <h2 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-[0.14em] text-[#0F172A] dark:text-[#F9FAFB] mb-6">
            Core Competencies
          </h2>

          <p className="font-sans text-[15px] sm:text-base text-slate-600 dark:text-[#9CA3AF] leading-[1.8] max-w-3xl mb-10">
            Deep hands-on capability across regulatory compliance standards, computerized system
            validation lifecycle documentation, and enterprise IT General Controls (ITGC).
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
          {SKILL_BARS.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.35, delay: idx * 0.06 }}
            >
              <div className="flex items-center justify-between text-xs sm:text-sm font-semibold text-[#0F172A] dark:text-[#F9FAFB] mb-2">
                <h3 className="font-display">{skill.name}</h3>
                <span className="font-mono text-xs text-[#2563EB] dark:text-[#06B6D4] tabular-nums">
                  {skill.percentage}%
                </span>
              </div>
              <div
                className="w-full h-2 rounded-full bg-slate-200 dark:bg-[#161B26] overflow-hidden"
                role="progressbar"
                aria-valuenow={skill.percentage}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={skill.name}
              >
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.percentage}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.85, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full rounded-full bg-gradient-to-r from-[#2563EB] to-[#06B6D4]"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 2. Jackson Education Accordion Section (#education) with AnimatePresence */}
      <section
        id="education"
        className="px-6 sm:px-12 lg:px-16 py-20 lg:py-24 border-b border-slate-200 dark:border-white/[0.08]"
      >
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.4 }}
        >
          <span className="block font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-[#2563EB] dark:text-[#06B6D4] mb-2">
            Education
          </span>
          <h2 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-[0.14em] text-[#0F172A] dark:text-[#F9FAFB] mb-10">
            Education &amp; Credentials
          </h2>
        </motion.div>

        <div className="space-y-3">
          {EDUCATION_ITEMS.map((item) => {
            const isOpen = openAccordionId === item.id;
            return (
              <div
                key={item.id}
                className="rounded-xl border border-slate-200 dark:border-white/10 overflow-hidden bg-white dark:bg-[#161B26]/90"
              >
                <h3 className="m-0">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => toggleAccordion(item.id)}
                    className={`w-full flex items-center justify-between px-6 py-4 text-left font-display text-sm sm:text-base font-semibold transition-colors cursor-pointer ${
                      isOpen
                        ? 'bg-[#EBF3FF] text-[#2563EB] dark:bg-[#161B26] dark:text-[#06B6D4]'
                        : 'bg-[#F8F9FA] dark:bg-[#0F1219] text-[#0F172A] dark:text-[#F9FAFB] hover:bg-slate-100 dark:hover:bg-[#161B26]/70'
                    }`}
                  >
                    <span>{item.degree}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 shrink-0" />
                    )}
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 bg-white dark:bg-[#0F1219]/60 border-t border-slate-200 dark:border-white/10">
                        <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[#2563EB] dark:text-[#06B6D4] mb-3">
                          {item.institution} · {item.period}
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans text-sm text-slate-600 dark:text-[#9CA3AF] leading-relaxed">
                          <p>{item.leftColumn}</p>
                          <p>{item.rightColumn}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Jackson Work Experience Vertical Timeline Section (#experience) with Staggered Reveal */}
      <section
        id="experience"
        className="px-6 sm:px-12 lg:px-16 py-20 lg:py-24 border-b border-slate-200 dark:border-white/[0.08]"
      >
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.4 }}
        >
          <span className="block font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-[#2563EB] dark:text-[#06B6D4] mb-2">
            Experience
          </span>
          <h2 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-[0.14em] text-[#0F172A] dark:text-[#F9FAFB] mb-12">
            Work Experience
          </h2>
        </motion.div>

        <div className="relative pl-8 sm:pl-10 border-l-2 border-slate-200 dark:border-white/10 space-y-8">
          {CAREER_MILESTONES.map((milestone, idx) => (
            <motion.article
              key={milestone.organization}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="relative"
            >
              {/* Circular Blue Timeline Marker */}
              <div
                aria-hidden="true"
                className="absolute -left-[49px] sm:-left-[57px] top-1 w-9 h-9 rounded-full bg-[#2563EB] text-white ring-4 ring-white dark:ring-[#08090C] flex items-center justify-center shadow-xs"
              >
                <Edit3 className="w-4 h-4" />
              </div>

              {/* Timeline Content Card */}
              <div className="rounded-2xl bg-[#F8F9FA] dark:bg-[#161B26]/90 border border-slate-200 dark:border-white/10 hover:border-[#2563EB]/50 dark:hover:border-[#06B6D4]/50 p-6 sm:p-7 transition-colors">
                <h3 className="font-display text-base sm:text-lg font-bold text-[#0F172A] dark:text-[#F9FAFB]">
                  {milestone.role}{' '}
                  <span className="text-[#2563EB] dark:text-[#06B6D4]">
                    at {milestone.organization}
                  </span>
                </h3>
                <p className="font-mono text-xs text-slate-500 dark:text-[#9CA3AF] mt-1 mb-4 tabular-nums">
                  {milestone.period} · {milestone.location}
                </p>

                <p className="font-sans text-sm text-slate-600 dark:text-[#9CA3AF] leading-relaxed mb-3">
                  {milestone.summary}
                </p>

                <ul className="space-y-1.5 font-sans text-xs sm:text-sm text-slate-600 dark:text-[#9CA3AF] list-disc pl-4">
                  {milestone.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </>
  );
};
