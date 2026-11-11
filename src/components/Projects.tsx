import React, { useState } from 'react';
import { X, ArrowUpRight } from 'lucide-react';
import {
  VALIDATED_SYSTEMS,
  SystemCategory,
  ValidatedSystemItem,
} from '../data/portfolioData';

const CATEGORIES: SystemCategory[] = [
  'All',
  'Enterprise & Governance',
  'Chromatography & Titration',
  'Spectroscopy & Thermal',
];

interface SystemTiltCardProps {
  system: ValidatedSystemItem;
  onInspect: (system: ValidatedSystemItem) => void;
}

const SystemTiltCard: React.FC<SystemTiltCardProps> = ({ system, onInspect }) => {
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, glareX: 50, glareY: 50 });

  const handlePointerMove = (e: React.PointerEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setTilt({
      rotateY: (x - 0.5) * 5,
      rotateX: (0.5 - y) * 5,
      glareX: x * 100,
      glareY: y * 100,
    });
  };

  const handlePointerLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0, glareX: 50, glareY: 50 });
  };

  return (
    <article
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onClick={() => onInspect(system)}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
        transition: 'transform 160ms cubic-bezier(0.22, 1, 0.36, 1)',
      }}
      className="group relative rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50/60 dark:bg-[#131C2E] p-6 flex flex-col justify-between hover:bg-white dark:hover:bg-[#162036] hover:border-[#4338CA]/50 dark:hover:border-[#38BDF8]/50 cursor-pointer shadow-2xs hover:shadow-md overflow-hidden will-change-transform animate-gpu-fade-up"
    >
      {/* Dynamic Cursor Glare (opacity transition only — GPU composited) */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        style={{
          background: `radial-gradient(380px circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(67, 56, 202, 0.09), transparent 70%)`,
        }}
      />

      <div className="relative z-10">
        <p className="font-mono text-xs font-semibold text-[#4338CA] dark:text-[#38BDF8] mb-2">
          {system.gampCategory} · {system.category}
        </p>

        <h3 className="font-display text-lg font-bold text-[#0F172A] dark:text-white group-hover:text-[#4338CA] dark:group-hover:text-[#38BDF8] mb-2">
          {system.name}
        </h3>

        <p className="font-sans text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-5">
          {system.description}
        </p>
      </div>

      <div className="relative z-10 pt-3.5 border-t border-slate-200/80 dark:border-white/[0.08] flex items-center justify-between font-mono text-xs">
        <span className="text-slate-600 dark:text-slate-400">
          {system.complianceStandards.slice(0, 3).join(' · ')}
        </span>
        <span className="inline-flex items-center gap-1 font-semibold text-[#4338CA] dark:text-[#38BDF8]">
          <span>Inspect Scope</span>
          <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-150" />
        </span>
      </div>
    </article>
  );
};

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<SystemCategory>('All');
  const [inspectedSystem, setInspectedSystem] = useState<ValidatedSystemItem | null>(null);

  const filteredSystems =
    selectedCategory === 'All'
      ? VALIDATED_SYSTEMS
      : VALIDATED_SYSTEMS.filter((s) => s.category === selectedCategory);

  return (
    <section
      id="work"
      className="px-6 sm:px-12 lg:px-16 py-16 lg:py-20 border-b border-slate-200 dark:border-white/[0.08]"
    >
      <div>
        <span className="inline-block font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#4338CA] dark:text-[#38BDF8] mb-2">
          Validated Systems
        </span>
        <h2 className="font-display text-2xl sm:text-[26px] font-bold tracking-tight text-[#0F172A] dark:text-white mb-6">
          Qualified Enterprise &amp; GxP Systems
        </h2>
      </div>

      {/* Category Filter Bar */}
      <div
        role="group"
        aria-label="Filter validated systems by category"
        className="flex flex-wrap items-center gap-2 mb-8"
      >
        {CATEGORIES.map((category) => {
          const isActive = selectedCategory === category;
          return (
            <button
              key={category}
              type="button"
              aria-pressed={isActive}
              onClick={() => setSelectedCategory(category)}
              className={`relative isolate px-4 py-2 rounded-xl font-mono text-xs font-medium transition-transform duration-150 hover:-translate-y-0.5 active:scale-97 cursor-pointer whitespace-nowrap ${
                isActive
                  ? 'text-white font-semibold'
                  : 'bg-slate-100 dark:bg-[#131C2E] text-slate-700 dark:text-slate-300 hover:text-[#4338CA] dark:hover:text-white border border-slate-200 dark:border-white/10'
              }`}
            >
              {isActive && (
                <span className="absolute inset-0 z-0 rounded-xl bg-[#4338CA] dark:bg-[#2563EB] shadow-xs animate-gpu-scale-in" />
              )}
              <span className="relative z-10">{category}</span>
            </button>
          );
        })}
      </div>

      {/* 2-Column Validated Systems Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredSystems.map((system) => (
          <SystemTiltCard
            key={system.id}
            system={system}
            onInspect={(sys) => setInspectedSystem(sys)}
          />
        ))}
      </div>

      {/* Validation Scope Modal */}
      {inspectedSystem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-gpu-scale-in"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-system-title"
          onClick={() => setInspectedSystem(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-xl rounded-2xl bg-white dark:bg-[#0D1322] border border-slate-200 dark:border-white/15 p-6 sm:p-8 shadow-2xl"
          >
            <div className="flex items-start justify-between gap-4 pb-4 mb-5 border-b border-slate-200 dark:border-white/10">
              <div>
                <p className="font-mono text-xs font-semibold text-[#4338CA] dark:text-[#38BDF8] mb-1">
                  {inspectedSystem.gampCategory} · {inspectedSystem.category}
                </p>
                <h3
                  id="modal-system-title"
                  className="font-display text-xl sm:text-2xl font-bold text-[#0F172A] dark:text-white"
                >
                  {inspectedSystem.name}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setInspectedSystem(null)}
                aria-label="Close modal"
                className="p-2 rounded-xl bg-slate-100 dark:bg-[#131C2E] text-slate-700 dark:text-slate-300 hover:text-[#4338CA] dark:hover:text-white transition-transform duration-150 hover:scale-105 active:scale-95 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="font-sans text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-5">
              {inspectedSystem.validationScopeNotes}
            </p>

            <ul className="space-y-2 mb-6 font-sans text-sm text-slate-700 dark:text-slate-200 list-disc pl-5">
              {inspectedSystem.controlHighlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div className="pt-4 border-t border-slate-200 dark:border-white/10 font-mono text-xs font-medium text-[#4338CA] dark:text-[#38BDF8]">
              {inspectedSystem.complianceStandards.join(' · ')}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
