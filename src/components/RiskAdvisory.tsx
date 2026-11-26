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
  shield: <ShieldCheck className="w-5 h-5 text-[#2E3746] stroke-[1.7]" />,
  check: <FileCheck2 className="w-5 h-5 text-[#2E3746] stroke-[1.7]" />,
  lock: <Lock className="w-5 h-5 text-[#2E3746] stroke-[1.7]" />,
  database: <Database className="w-5 h-5 text-[#2E3746] stroke-[1.7]" />,
  users: <Users className="w-5 h-5 text-[#2E3746] stroke-[1.7]" />,
  server: <Server className="w-5 h-5 text-[#2E3746] stroke-[1.7]" />,
};

export const RiskAdvisory: React.FC = () => {
  return (
    <section
      id="services"
      className="px-5 sm:px-10 lg:px-12 py-10 lg:py-14"
    >
      <div>
        <span className="inline-block font-mono text-xs font-medium uppercase tracking-[0.2em] text-[#5E6878] mb-2">
          Focus Areas
        </span>
        <h2 className="font-display text-2xl sm:text-[28px] font-bold tracking-tight text-[#1D222B] mb-8">
          What I Work On
        </h2>
      </div>

      {/* 3x2 Grid of Extruded Neumorphic Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {EXPERTISE_ITEMS.map((item) => (
          <div
            key={item.id}
            className="group rounded-2xl neu-surface p-6 text-center flex flex-col items-center transition-transform duration-200 ease-out hover:-translate-y-1 will-change-transform"
          >
            <div className="w-12 h-12 rounded-full neu-icon-well flex items-center justify-center mb-4 transition-transform duration-200 group-hover:scale-105">
              {SERVICE_ICONS[item.iconName]}
            </div>

            <h3 className="font-display text-base font-bold text-[#1D222B] mb-2">
              {item.title}
            </h3>

            <p className="font-sans text-xs sm:text-sm text-[#4C5564] leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* Recessed 4-Column Metrics Tray */}
      <div className="mt-10 rounded-3xl neu-inset py-9 px-6 sm:px-10 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
        {EXECUTIVE_METRICS.map((metric) => (
          <div
            key={metric.label}
            className="flex flex-col items-center transition-transform duration-150 hover:-translate-y-0.5"
          >
            <span className="font-display font-mono text-3xl sm:text-4xl font-bold tracking-tight text-[#1D222B] mb-1.5 tabular-nums">
              {metric.value}
            </span>
            <span className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-[#5E6878]">
              {metric.label}
            </span>
          </div>
        ))}
      </div>

      <div className="neu-divider mt-14" />
    </section>
  );
};

export default RiskAdvisory;
