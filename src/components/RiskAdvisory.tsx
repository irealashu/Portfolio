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
  shield: <ShieldCheck className="w-6 h-6 text-[#4F46E5] dark:text-[#38BDF8] stroke-[1.75]" />,
  check: <FileCheck2 className="w-6 h-6 text-[#2563EB] dark:text-[#22D3EE] stroke-[1.75]" />,
  lock: <Lock className="w-6 h-6 text-[#059669] dark:text-[#34D399] stroke-[1.75]" />,
  database: <Database className="w-6 h-6 text-[#4F46E5] dark:text-[#818CF8] stroke-[1.75]" />,
  users: <Users className="w-6 h-6 text-[#059669] dark:text-[#34D399] stroke-[1.75]" />,
  server: <Server className="w-6 h-6 text-[#2563EB] dark:text-[#38BDF8] stroke-[1.75]" />,
};

export const RiskAdvisory: React.FC = () => {
  return (
    <section
      id="services"
      className="px-6 sm:px-12 lg:px-16 py-16 lg:py-20 border-b border-slate-200/80 dark:border-white/[0.08]"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.42 }}
      >
        <motion.span
          whileHover={{ x: 3 }}
          className="inline-block font-mono text-xs font-semibold uppercase tracking-[0.2em] bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] dark:from-[#38BDF8] dark:to-[#34D399] bg-clip-text text-transparent mb-2"
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
            whileHover={{ y: -5, scale: 1.015 }}
            className="group relative rounded-2xl border border-slate-200/90 dark:border-white/10 bg-gradient-to-b from-white to-slate-50/60 dark:from-[#131C2E] dark:to-[#0D1322] p-6 text-center flex flex-col items-center shadow-2xs hover:shadow-lg hover:shadow-indigo-500/10 hover:border-[#4F46E5]/50 dark:hover:border-[#38BDF8]/50 transition-all overflow-hidden"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#4F46E5] via-[#06B6D4] to-[#10B981] opacity-60 group-hover:opacity-100 transition-opacity" />

            <motion.div
              whileHover={{ rotate: 10, scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 360, damping: 18 }}
              className="w-12 h-12 rounded-xl bg-indigo-500/10 dark:bg-white/[0.05] border border-indigo-500/20 dark:border-white/10 flex items-center justify-center mb-4 shadow-2xs"
            >
              {SERVICE_ICONS[item.iconName]}
            </motion.div>

            <h3 className="font-display text-base font-bold text-[#0F172A] dark:text-white group-hover:text-[#4F46E5] dark:group-hover:text-[#38BDF8] transition-colors mb-2">
              {item.title}
            </h3>

            <p className="font-sans text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Jackson 4-Column Counter Banner */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.45, delay: 0.12 }}
        className="relative mt-10 rounded-2xl bg-gradient-to-br from-[#0B1120] via-[#111A2E] to-[#0D1F33] border border-indigo-500/25 dark:border-cyan-400/20 text-white py-10 px-6 sm:px-10 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center shadow-xl overflow-hidden"
      >
        {EXECUTIVE_METRICS.map((metric, idx) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.38, delay: 0.14 + idx * 0.07 }}
            whileHover={{ y: -3, scale: 1.03 }}
            className="relative z-10 flex flex-col items-center"
          >
            <span className="font-display font-mono text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-cyan-200 to-emerald-300 bg-clip-text text-transparent mb-1.5 tabular-nums">
              {metric.value}
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#38BDF8]">
              {metric.label}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
