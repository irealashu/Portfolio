import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, GraduationCap } from 'lucide-react';
import {
  COMPETENCY_GROUPS,
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
      {/* 1. Skills & Deliverables Section (#skills) — Concrete Deliverable Lists (No Percentage Bars) */}
      <section
        id="skills"
        className="px-6 sm:px-12 lg:px-16 py-16 lg:py-20 border-b border-slate-200 dark:border-white/[0.08]"
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.42 }}
        >
          <motion.span
            whileHover={{ x: 3 }}
            className="inline-block font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#4338CA] dark:text-[#38BDF8] mb-2"
          >
            Technical Scope
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.42, delay: 0.05 }}
            className="font-display text-2xl sm:text-[26px] font-bold tracking-tight text-[#0F172A] dark:text-white mb-4"
          >
            Skills &amp; Validation Deliverables
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.38, delay: 0.08 }}
            className="font-sans text-[15px] sm:text-base text-slate-700 dark:text-slate-300 leading-[1.75] max-w-3xl mb-8"
          >
            Hands-on deliverables across computerized system validation (CSV), regulatory compliance
            assessments, and enterprise IT General Controls (ITGC).
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {COMPETENCY_GROUPS.map((group, idx) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.38, delay: idx * 0.06 }}
              whileHover={{ y: -3 }}
              className="rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50/70 dark:bg-[#131C2E] p-6 shadow-2xs hover:bg-white dark:hover:bg-[#162036] hover:shadow-md hover:border-[#4338CA]/50 dark:hover:border-[#38BDF8]/50 transition-all"
            >
              <p className="font-mono text-xs font-semibold text-[#4338CA] dark:text-[#38BDF8] mb-1">
                {group.focus}
              </p>
              <h3 className="font-display text-base sm:text-lg font-bold text-[#0F172A] dark:text-white mb-3.5">
                {group.category}
              </h3>
              <ul className="space-y-2 font-sans text-xs sm:text-sm text-slate-700 dark:text-slate-300 list-disc pl-4">
                {group.deliverables.map((item) => (
                  <li key={item} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 2. Education Accordion Section (#education) — VBSPU, Jaunpur */}
      <section
        id="education"
        className="px-6 sm:px-12 lg:px-16 py-16 lg:py-20 border-b border-slate-200 dark:border-white/[0.08]"
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.42 }}
        >
          <motion.span
            whileHover={{ x: 3 }}
            className="inline-block font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#4338CA] dark:text-[#38BDF8] mb-2"
          >
            Academic Background
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.42, delay: 0.05 }}
            className="font-display text-2xl sm:text-[26px] font-bold tracking-tight text-[#0F172A] dark:text-white mb-8"
          >
            Education
          </motion.h2>
        </motion.div>

        <div className="space-y-3.5">
          {EDUCATION_ITEMS.map((item, idx) => {
            const isOpen = openAccordionId === item.id;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.38, delay: idx * 0.07 }}
                className={`rounded-2xl border overflow-hidden transition-colors ${
                  isOpen
                    ? 'border-[#4338CA]/45 dark:border-[#38BDF8]/45 bg-white dark:bg-[#131C2E] shadow-xs'
                    : 'border-slate-200 dark:border-white/10 bg-slate-50/70 dark:bg-[#131C2E]/80'
                }`}
              >
                <h3 className="m-0">
                  <motion.button
                    type="button"
                    aria-expanded={isOpen}
                    whileTap={{ scale: 0.995 }}
                    onClick={() => toggleAccordion(item.id)}
                    className={`w-full flex items-center justify-between px-6 py-4 text-left font-display text-sm sm:text-base font-bold transition-colors cursor-pointer ${
                      isOpen
                        ? 'bg-indigo-50/70 dark:bg-sky-500/10 text-[#4338CA] dark:text-[#38BDF8]'
                        : 'text-[#0F172A] dark:text-white hover:bg-slate-100/80 dark:hover:bg-white/[0.03]'
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <GraduationCap className="w-5 h-5 text-[#4338CA] dark:text-[#38BDF8] shrink-0" />
                      <span>{item.degree}</span>
                    </span>
                    <div className="flex items-center gap-3 shrink-0">
                      <span className="hidden sm:inline-block font-mono text-xs font-semibold text-slate-600 dark:text-slate-300">
                        {item.period}
                      </span>
                      <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.25 }}
                        className="w-7 h-7 rounded-full bg-slate-200/70 dark:bg-white/10 flex items-center justify-center shrink-0"
                      >
                        <ChevronDown className="w-4 h-4" />
                      </motion.span>
                    </div>
                  </motion.button>
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
                      <div className="p-6 bg-white dark:bg-[#0D1322]/90 border-t border-slate-200 dark:border-white/10">
                        <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[#4338CA] dark:text-[#38BDF8] mb-3">
                          {item.institution} · {item.period}
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                          <p>{item.leftColumn}</p>
                          <p>{item.rightColumn}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 3. Work Experience Section (#experience) — 18 Jan 2021 to Present */}
      <section
        id="experience"
        className="px-6 sm:px-12 lg:px-16 py-16 lg:py-20 border-b border-slate-200 dark:border-white/[0.08]"
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.42 }}
        >
          <motion.span
            whileHover={{ x: 3 }}
            className="inline-block font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#4338CA] dark:text-[#38BDF8] mb-2"
          >
            Experience · 18 Jan 2021 – Present
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.42, delay: 0.05 }}
            className="font-display text-2xl sm:text-[26px] font-bold tracking-tight text-[#0F172A] dark:text-white mb-8"
          >
            Work Experience
          </motion.h2>
        </motion.div>

        <div className="space-y-6">
          {CAREER_MILESTONES.map((milestone, idx) => (
            <motion.article
              key={milestone.organization}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: idx * 0.07 }}
              whileHover={{ y: -3 }}
              className="rounded-2xl bg-slate-50/70 dark:bg-[#131C2E] border border-slate-200 dark:border-white/10 hover:bg-white dark:hover:bg-[#162036] hover:border-[#4338CA]/50 dark:hover:border-[#38BDF8]/50 p-6 sm:p-7 shadow-2xs hover:shadow-md transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-4">
                  <img
                    src={milestone.logoUrl}
                    alt={`${milestone.organization} logo`}
                    referrerPolicy="no-referrer"
                    className="w-20 h-12 object-contain rounded-xl border border-slate-200 dark:border-white/15 bg-white shrink-0 shadow-2xs"
                  />
                  <div>
                    <h3 className="font-display text-base sm:text-lg font-bold text-[#0F172A] dark:text-white leading-snug">
                      {milestone.role}
                    </h3>
                    <p className="font-display text-sm font-semibold text-[#4338CA] dark:text-[#38BDF8]">
                      {milestone.organization}
                    </p>
                  </div>
                </div>
                <span className="font-mono text-xs font-medium text-slate-600 dark:text-slate-400 tabular-nums shrink-0">
                  {milestone.period} · {milestone.location}
                </span>
              </div>

              <p className="font-sans text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-3.5">
                {milestone.summary}
              </p>

              <ul className="space-y-1.5 font-sans text-xs sm:text-sm text-slate-700 dark:text-slate-300 list-disc pl-5">
                {milestone.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </section>
    </>
  );
};
