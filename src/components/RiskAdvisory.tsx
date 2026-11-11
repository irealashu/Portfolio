import React from 'react';
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
      <div>
        <span className="inline-block font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#4338CA] dark:text-[#38BDF8] mb-2">
          What I Do
        </span>
        <h2 className="font-display text-2xl sm:text-[26px] font-bold tracking-tight text-[#0F172A] dark:text-white mb-8">
          Core Advisory &amp; Validation Expertise
        </h2>
      </div>

      {/* 3x2 Grid of Centered Expertise Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {EXPERTISE_ITEMS.map((item) => (
          <div
            key={item.id}
            className="group relative rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50/70 dark:bg-[#131C2E] p-6 text-center flex flex-col items-center shadow-2xs hover:bg-white dark:hover:bg-[#162036] hover:shadow-md hover:border-[#4338CA]/50 dark:hover:border-[#38BDF8]/50 transition-transform duration-200 ease-out hover:-translate-y-1 will-change-transform"
          >
            <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-white/[0.06] border border-indigo-200/70 dark:border-white/10 flex items-center justify-center mb-4 shadow-2xs transition-transform duration-200 group-hover:scale-105">
              {SERVICE_ICONS[item.iconName]}
            </div>

            <h3 className="font-display text-base font-bold text-[#0F172A] dark:text-white group-hover:text-[#4338CA] dark:group-hover:text-[#38BDF8] mb-2">
              {item.title}
            </h3>

            <p className="font-sans text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* Theme-Adaptive 4-Column Executive Metrics Banner */}
      <div className="relative mt-10 rounded-2xl bg-indigo-50/75 dark:bg-[#131C2E] border border-indigo-200/80 dark:border-white/10 py-9 px-6 sm:px-10 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center shadow-2xs overflow-hidden">
        {EXECUTIVE_METRICS.map((metric) => (
          <div
            key={metric.label}
            className="relative z-10 flex flex-col items-center transition-transform duration-150 hover:-translate-y-0.5"
          >
            <span className="font-display font-mono text-3xl sm:text-4xl font-extrabold tracking-tight text-[#4338CA] dark:text-[#38BDF8] mb-1.5 tabular-nums">
              {metric.value}
            </span>
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-700 dark:text-slate-300">
              {metric.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RiskAdvisory;
