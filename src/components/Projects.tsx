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
    if (e.pointerType !== 'mouse') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

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
      className="group relative rounded-2xl neu-surface p-6 flex flex-col overflow-hidden will-change-transform animate-gpu-fade-up"
    >
      {/* Subtle Light Sheen Glare (opacity transition only — GPU composited) */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        style={{
          background: `radial-gradient(360px circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(255, 255, 255, 0.45), transparent 70%)`,
        }}
      />

      <div className="relative z-10">
        <p className="font-mono text-xs font-medium text-[#5E6878] mb-1">
          {system.gampCategory}
        </p>

        <h3 className="font-display text-base sm:text-lg font-bold text-[#1D222B] mb-2.5">
          {system.name}
        </h3>

        <p className="font-sans text-xs sm:text-sm text-[#4C5564] leading-relaxed mb-3.5">
          {system.description}
        </p>

        <ul className="space-y-1.5 font-sans text-xs sm:text-sm text-[#4C5564] list-disc pl-4 marker:text-[#667082]">
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
      className="px-5 sm:px-10 lg:px-12 py-10 lg:py-14"
    >
      <div>
        <span className="inline-block font-mono text-xs font-medium uppercase tracking-[0.2em] text-[#5E6878] mb-2">
          Validated Systems
        </span>
        <h2 className="font-display text-2xl sm:text-[28px] font-bold tracking-tight text-[#1D222B] mb-3">
          Systems I&apos;ve Validated
        </h2>
        <p className="font-sans text-sm sm:text-base text-[#4C5564] leading-relaxed max-w-2xl mb-6">
          Here&apos;s a look at some of the 15+ lab and enterprise systems I&apos;ve qualified across pharma and advisory work.
        </p>
      </div>

      {/* Tactile Neumorphic Category Filter Bar */}
      <div
        role="group"
        aria-label="Filter validated systems by category"
        className="flex flex-wrap items-center gap-3 mb-8"
      >
        {CATEGORIES.map((category) => {
          const isActive = selectedCategory === category;
          return (
            <button
              key={category}
              type="button"
              aria-pressed={isActive}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2.5 rounded-xl font-mono text-xs transition-transform duration-150 hover:-translate-y-0.5 active:scale-97 cursor-pointer whitespace-nowrap ${
                isActive
                  ? 'neu-inset text-[#1D222B] font-semibold'
                  : 'neu-btn text-[#555F70] font-medium hover:text-[#1D222B]'
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* 2-Column Validated Systems Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredSystems.map((system) => (
          <SystemTiltCard key={system.id} system={system} />
        ))}
      </div>

      <div className="neu-divider mt-14" />
    </section>
  );
};

export default Projects;
