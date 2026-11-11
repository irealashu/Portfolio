import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Briefcase, GraduationCap, CheckCircle2 } from 'lucide-react';
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
      {/* 1. Jackson Skills Section (#skills) with Animated Progress Bars & Hover Micro-Interactions */}
      <section
        id="skills"
        className="px-6 sm:px-12 lg:px-16 py-20 lg:py-24 border-b border-slate-200/80 dark:border-white/[0.08]"
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.45 }}
        >
          <motion.span
            whileHover={{ x: 3 }}
            className="inline-block font-mono text-[11px] font-semibold uppercase tracking-[0.22em] bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] dark:from-[#38BDF8] dark:to-[#34D399] bg-clip-text text-transparent mb-2"
          >
            My Specialty
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="font-display text-xl sm:text-2xl font-bold uppercase tracking-[0.14em] text-[#0F172A] dark:text-white mb-6"
          >
            Core Competencies
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="font-sans text-[15px] sm:text-base text-slate-600 dark:text-slate-300 leading-[1.8] max-w-3xl mb-10"
          >
            Deep hands-on capability across regulatory compliance standards, computerized system
            validation lifecycle documentation, and enterprise IT General Controls (ITGC).
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILL_BARS.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              whileHover={{ y: -3, scale: 1.01 }}
              className="rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white dark:bg-[#131C2E]/85 p-5 shadow-2xs hover:border-[#4F46E5]/45 dark:hover:border-[#38BDF8]/45 transition-all"
            >
              <div className="flex items-center justify-between text-xs sm:text-sm font-semibold text-[#0F172A] dark:text-white mb-2.5">
                <h3 className="font-display">{skill.name}</h3>
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + idx * 0.06 }}
                  className="px-2.5 py-0.5 rounded-full bg-indigo-500/10 dark:bg-cyan-400/10 border border-indigo-500/20 dark:border-cyan-400/20 font-mono text-xs text-[#4F46E5] dark:text-[#38BDF8] tabular-nums"
                >
                  {skill.percentage}%
                </motion.span>
              </div>
              <div
                className="w-full h-2.5 rounded-full bg-slate-100 dark:bg-[#0B0F1A] overflow-hidden p-0.5 border border-slate-200/60 dark:border-white/[0.06]"
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
                  transition={{ duration: 0.95, delay: idx * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full rounded-full bg-gradient-to-r from-[#4F46E5] via-[#06B6D4] to-[#10B981]"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 2. Jackson Education Accordion Section (#education) with Animated Chevron & Content */}
      <section
        id="education"
        className="px-6 sm:px-12 lg:px-16 py-20 lg:py-24 border-b border-slate-200/80 dark:border-white/[0.08]"
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.45 }}
        >
          <motion.span
            whileHover={{ x: 3 }}
            className="inline-block font-mono text-[11px] font-semibold uppercase tracking-[0.22em] bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] dark:from-[#38BDF8] dark:to-[#34D399] bg-clip-text text-transparent mb-2"
          >
            Education
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="font-display text-xl sm:text-2xl font-bold uppercase tracking-[0.14em] text-[#0F172A] dark:text-white mb-10"
          >
            Education &amp; Credentials
          </motion.h2>
        </motion.div>

        <div className="space-y-4">
          {EDUCATION_ITEMS.map((item, idx) => {
            const isOpen = openAccordionId === item.id;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ scale: 1.005 }}
                className={`rounded-2xl border overflow-hidden transition-colors ${
                  isOpen
                    ? 'border-[#4F46E5]/50 dark:border-[#38BDF8]/50 bg-white dark:bg-[#131C2E] shadow-md shadow-indigo-500/5'
                    : 'border-slate-200/90 dark:border-white/10 bg-white/90 dark:bg-[#131C2E]/70'
                }`}
              >
                <h3 className="m-0">
                  <motion.button
                    type="button"
                    aria-expanded={isOpen}
                    whileTap={{ scale: 0.995 }}
                    onClick={() => toggleAccordion(item.id)}
                    className={`w-full flex items-center justify-between px-6 py-4.5 text-left font-display text-sm sm:text-base font-bold transition-colors cursor-pointer ${
                      isOpen
                        ? 'bg-gradient-to-r from-indigo-500/10 via-blue-500/5 to-transparent dark:from-indigo-500/20 dark:via-cyan-500/10 dark:to-transparent text-[#4F46E5] dark:text-[#38BDF8]'
                        : 'text-[#0F172A] dark:text-white hover:bg-slate-50 dark:hover:bg-white/[0.03]'
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <GraduationCap className="w-5 h-5 text-[#4F46E5] dark:text-[#38BDF8] shrink-0" />
                      <span>{item.degree}</span>
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="w-7 h-7 rounded-full bg-slate-100 dark:bg-white/10 flex items-center justify-center shrink-0"
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.span>
                  </motion.button>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 bg-white dark:bg-[#0D1322]/90 border-t border-slate-200/70 dark:border-white/10">
                        <motion.p
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3 }}
                          className="font-mono text-xs font-semibold uppercase tracking-wider text-[#059669] dark:text-[#34D399] mb-3"
                        >
                          {item.institution} · {item.period}
                        </motion.p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                          <motion.p
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.05 }}
                          >
                            {item.leftColumn}
                          </motion.p>
                          <motion.p
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                          >
                            {item.rightColumn}
                          </motion.p>
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

      {/* 3. Jackson Work Experience Vertical Timeline Section (#experience) with Animated Nodes & Bullets */}
      <section
        id="experience"
        className="px-6 sm:px-12 lg:px-16 py-20 lg:py-24 border-b border-slate-200/80 dark:border-white/[0.08]"
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.45 }}
        >
          <motion.span
            whileHover={{ x: 3 }}
            className="inline-block font-mono text-[11px] font-semibold uppercase tracking-[0.22em] bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] dark:from-[#38BDF8] dark:to-[#34D399] bg-clip-text text-transparent mb-2"
          >
            Experience
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="font-display text-xl sm:text-2xl font-bold uppercase tracking-[0.14em] text-[#0F172A] dark:text-white mb-12"
          >
            Work Experience
          </motion.h2>
        </motion.div>

        <div className="relative pl-8 sm:pl-10 border-l-2 border-indigo-500/30 dark:border-cyan-400/25 space-y-8">
          {CAREER_MILESTONES.map((milestone, idx) => (
            <motion.article
              key={milestone.organization}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              whileHover={{ x: 4 }}
              className="relative"
            >
              {/* Animated Circular Gradient Timeline Marker */}
              <motion.div
                aria-hidden="true"
                whileHover={{ scale: 1.15, rotate: 10 }}
                className="absolute -left-[49px] sm:-left-[57px] top-1.5 w-9 h-9 rounded-full bg-gradient-to-tr from-[#4F46E5] via-[#2563EB] to-[#06B6D4] text-white ring-4 ring-white dark:ring-[#090D16] flex items-center justify-center shadow-md shadow-indigo-500/25"
              >
                <Briefcase className="w-4 h-4" />
              </motion.div>

              {/* Timeline Content Card */}
              <div className="rounded-2xl bg-gradient-to-b from-white to-slate-50/70 dark:from-[#131C2E] dark:to-[#0D1322] border border-slate-200/90 dark:border-white/10 hover:border-[#4F46E5]/50 dark:hover:border-[#38BDF8]/50 p-6 sm:p-7 shadow-sm hover:shadow-lg transition-all">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="font-display text-base sm:text-lg font-bold text-[#0F172A] dark:text-white">
                    {milestone.role}{' '}
                    <span className="bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] dark:from-[#38BDF8] dark:to-[#34D399] bg-clip-text text-transparent">
                      at {milestone.organization}
                    </span>
                  </h3>
                  <span className="px-3 py-1 rounded-full bg-indigo-500/10 dark:bg-cyan-400/10 border border-indigo-500/20 dark:border-cyan-400/20 font-mono text-[11px] font-medium text-[#4F46E5] dark:text-[#38BDF8] tabular-nums">
                    {milestone.period} · {milestone.location}
                  </span>
                </div>

                <p className="font-sans text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {milestone.summary}
                </p>

                <ul className="space-y-2 font-sans text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  {milestone.highlights.map((item, hIdx) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.1 + hIdx * 0.05 }}
                      whileHover={{ x: 4 }}
                      className="flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </motion.li>
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
