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
  shield: <ShieldCheck className="w-6 h-6 text-[#2563EB] dark:text-[#06B6D4] stroke-[1.75]" />,
  check: <FileCheck2 className="w-6 h-6 text-[#2563EB] dark:text-[#06B6D4] stroke-[1.75]" />,
  lock: <Lock className="w-6 h-6 text-[#10B981] stroke-[1.75]" />,
  database: <Database className="w-6 h-6 text-[#2563EB] dark:text-[#06B6D4] stroke-[1.75]" />,
  users: <Users className="w-6 h-6 text-[#10B981] stroke-[1.75]" />,
  server: <Server className="w-6 h-6 text-[#2563EB] dark:text-[#06B6D4] stroke-[1.75]" />,
};

export const RiskAdvisory: React.FC = () => {
  return (
    <section
      id="services"
      className="px-6 sm:px-12 lg:px-16 py-20 lg:py-24 border-b border-slate-200 dark:border-white/[0.08]"
    >
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.4 }}
      >
        <span className="block font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-[#2563EB] dark:text-[#06B6D4] mb-2">
          What I Do
        </span>
        <h2 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-[0.14em] text-[#0F172A] dark:text-[#F9FAFB] mb-10">
          Here Are Some of My Expertise
        </h2>
      </motion.div>

      {/* 3x2 Grid of Centered Expertise Cards with Staggered Framer Motion Reveal */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {EXPERTISE_ITEMS.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4, delay: idx * 0.07 }}
            whileHover={{ y: -4 }}
            className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#161B26]/90 p-7 text-center flex flex-col items-center shadow-2xs hover:border-[#2563EB]/60 dark:hover:border-[#06B6D4]/50 transition-colors"
          >
            <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-[#0F1219] border border-slate-200 dark:border-white/10 flex items-center justify-center mb-5">
              {SERVICE_ICONS[item.iconName]}
            </div>
            <h3 className="font-display text-base sm:text-lg font-bold text-[#0F172A] dark:text-[#F9FAFB] mb-2.5">
              {item.title}
            </h3>
            <p className="font-sans text-xs sm:text-sm text-slate-600 dark:text-[#9CA3AF] leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Jackson 4-Column Counter Banner with JetBrains Mono Tabular Numerals */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.45, delay: 0.15 }}
        className="mt-14 rounded-2xl bg-[#0F1219] dark:bg-[#161B26] border border-slate-800 dark:border-white/10 text-white py-14 px-6 sm:px-10 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center shadow-lg"
      >
        {EXECUTIVE_METRICS.map((metric) => (
          <div key={metric.label} className="flex flex-col items-center">
            <span className="font-display font-mono text-3xl sm:text-4xl font-extrabold tracking-tight text-[#F9FAFB] mb-2 tabular-nums">
              {metric.value}
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#06B6D4]">
              {metric.label}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
};
