import React from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  FileCheck2,
  Lock,
  Database,
  Users,
  Server,
} from 'lucide-react';
import { EXPERTISE_ITEMS, EXECUTIVE_METRICS, ExpertiseItem } from '../data/portfolioData';

const SERVICE_ICONS: Record<ExpertiseItem['iconName'], React.ReactNode> = {
  shield: <ShieldCheck className="w-6 h-6 text-[#4338CA] dark:text-[#38BDF8] stroke-[1.75]" />,
  check: <FileCheck2 className="w-6 h-6 text-[#4338CA] dark:text-[#38BDF8] stroke-[1.75]" />,
  lock: <Lock className="w-6 h-6 text-[#4338CA] dark:text-[#38BDF8] stroke-[1.75]" />,
  database: <Database className="w-6 h-6 text-[#4338CA] dark:text-[#38BDF8] stroke-[1.75]" />,
  users: <Users className="w-6 h-6 text-[#4338CA] dark:text-[#38BDF8] stroke-[1.75]" />,
  server: <Server className="w-6 h-6 text-[#4338CA] dark:text-[#38BDF8] stroke-[1.75]" />,
};

export const RiskAdvisory: React.FC = () => {
  return (
    <section
      id="services"
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
          What I Do
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.42, delay: 0.05 }}
          className="font-display text-2xl sm:text-[26px] font-bold tracking-tight text-[#0F172A] dark:text-white mb-8"
        >
          Core Advisory &amp; Validation Expertise
        </motion.h2>
      </motion.div>

      {/* 3x2 Grid of Centered Expertise Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {EXPERTISE_ITEMS.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: idx * 0.06 }}
            whileHover={{ y: -4 }}
            className="group relative rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50/70 dark:bg-[#131C2E] p-6 text-center flex flex-col items-center shadow-2xs hover:bg-white dark:hover:bg-[#162036] hover:shadow-md hover:border-[#4338CA]/50 dark:hover:border-[#38BDF8]/50 transition-all"
          >
            <motion.div
              whileHover={{ scale: 1.08 }}
              transition={{ type: 'spring', stiffness: 360, damping: 18 }}
              className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-white/[0.06] border border-indigo-200/70 dark:border-white/10 flex items-center justify-center mb-4 shadow-2xs"
            >
              {SERVICE_ICONS[item.iconName]}
            </motion.div>

            <h3 className="font-display text-base font-bold text-[#0F172A] dark:text-white group-hover:text-[#4338CA] dark:group-hover:text-[#38BDF8] transition-colors mb-2">
              {item.title}
            </h3>

            <p className="font-sans text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Theme-Adaptive 4-Column Executive Metrics Banner */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.45, delay: 0.12 }}
        className="relative mt-10 rounded-2xl bg-indigo-50/75 dark:bg-[#131C2E] border border-indigo-200/80 dark:border-white/10 py-9 px-6 sm:px-10 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center shadow-2xs overflow-hidden"
      >
        {EXECUTIVE_METRICS.map((metric, idx) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, scale: 0.94, y: 10 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.38, delay: 0.14 + idx * 0.07 }}
            whileHover={{ y: -2 }}
            className="relative z-10 flex flex-col items-center"
          >
            <span className="font-display font-mono text-3xl sm:text-4xl font-extrabold tracking-tight text-[#4338CA] dark:text-[#38BDF8] mb-1.5 tabular-nums">
              {metric.value}
            </span>
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-700 dark:text-slate-300">
              {metric.label}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
