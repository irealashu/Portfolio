import React, { useState } from 'react';
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
}

const SystemTiltCard: React.FC<SystemTiltCardProps> = ({ system }) => {
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, glareX: 50, glareY: 50 });

  const handlePointerMove = (e: React.PointerEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setTilt({
      rotateY: (x - 0.5) * 4,
      rotateX: (0.5 - y) * 4,
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
      style={{
        transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
        transition: 'transform 160ms cubic-bezier(0.22, 1, 0.36, 1)',
      }}
      className="group relative rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50/70 dark:bg-[#131C2E] p-6 flex flex-col hover:bg-white dark:hover:bg-[#162036] hover:border-[#4338CA]/50 dark:hover:border-[#38BDF8]/50 shadow-2xs hover:shadow-md overflow-hidden will-change-transform animate-gpu-fade-up"
    >
      {/* Dynamic Cursor Glare (opacity transition only — GPU composited) */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        style={{
          background: `radial-gradient(380px circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(67, 56, 202, 0.08), transparent 70%)`,
        }}
      />

      <div className="relative z-10">
        <p className="font-mono text-xs font-semibold text-[#4338CA] dark:text-[#38BDF8] mb-1">
          {system.gampCategory}
        </p>

        <h3 className="font-display text-base sm:text-lg font-bold text-[#0F172A] dark:text-white group-hover:text-[#4338CA] dark:group-hover:text-[#38BDF8] mb-2.5">
          {system.name}
        </h3>

        <p className="font-sans text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-3.5">
          {system.description}
        </p>

        <ul className="space-y-1.5 font-sans text-xs sm:text-sm text-slate-700 dark:text-slate-300 list-disc pl-4">
          {system.controlHighlights.map((item) => (
            <li key={item} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<SystemCategory>('All');

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
          <SystemTiltCard key={system.id} system={system} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
