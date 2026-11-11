import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FileCheck2,
  CheckCircle2,
  X,
  Layers,
  ShieldCheck,
  SlidersHorizontal,
} from 'lucide-react';
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

interface SystemCardProps {
  system: ValidatedSystemItem;
  index: number;
  onInspect: (system: ValidatedSystemItem) => void;
}

const ValidatedSystemCard: React.FC<SystemCardProps> = ({ system, index, onInspect }) => {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.25, delay: index * 0.04 }}
      className="group relative rounded-2xl bg-[#161B26]/90 border border-white/10 hover:border-[#06B6D4]/50 p-7 sm:p-8 flex flex-col justify-between transition-colors"
    >
      <div>
        {/* Top Metadata Row: Unboxed Editorial Separators */}
        <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-5 border-b border-white/[0.08] font-mono text-xs">
          <div className="flex items-center gap-2 text-[#9CA3AF]">
            <span className="text-[#06B6D4] font-semibold">0{index + 1}</span>
            <span className="text-white/25">·</span>
            <span>{system.category}</span>
          </div>
          <span className="text-[#10B981] font-medium tracking-tight">
            {system.gampCategory}
          </span>
        </div>

        {/* System Name & Tagline */}
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="font-display text-2xl font-bold text-[#F9FAFB] tracking-tight group-hover:text-[#06B6D4] transition-colors">
            {system.name}
          </h3>
          <div className="p-2 rounded-lg bg-[#0F1219] border border-white/10 text-[#06B6D4] shrink-0">
            <ShieldCheck className="w-4 h-4" />
          </div>
        </div>

        <p className="font-medium text-sm sm:text-base text-[#F9FAFB]/90 mb-3 leading-snug">
          {system.tagline}
        </p>

        <p className="text-sm text-[#9CA3AF] leading-relaxed mb-6">
          {system.description}
        </p>

        {/* Key Control & Qualification Highlights */}
        <div className="space-y-2 mb-7 pt-4 border-t border-white/[0.06]">
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#9CA3AF] mb-2">
            Verified Controls &amp; Qualification Scope
          </p>
          {system.controlHighlights.map((highlight) => (
            <div
              key={highlight}
              className="flex items-start gap-2.5 text-xs text-[#F9FAFB]/85 leading-relaxed"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
              <span>{highlight}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Standards & Dossier Trigger */}
      <div className="pt-5 border-t border-white/[0.08]">
        <div className="mb-4">
          <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-[#9CA3AF] mb-1">
            Compliance &amp; Regulatory Baseline
          </span>
          <p className="font-mono text-xs text-[#06B6D4] leading-relaxed">
            {system.complianceStandards.join('  /  ')}
          </p>
        </div>

        <div className="flex items-center justify-between gap-4 pt-3 border-t border-white/[0.06]">
          <button
            type="button"
            onClick={() => onInspect(system)}
            className="inline-flex items-center gap-2 font-mono text-xs font-medium text-[#F9FAFB] hover:text-[#06B6D4] transition-colors"
          >
            <FileCheck2 className="w-3.5 h-3.5 text-[#2563EB]" />
            <span>Inspect Validation Dossier</span>
          </button>

          <span className="font-mono text-[11px] text-[#10B981]">
            IQ · OQ · PQ Qualified
          </span>
        </div>
      </div>
    </motion.article>
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
      id="projects"
      className="relative py-24 lg:py-32 border-b border-white/[0.08] bg-[#08090C]"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
        {/* Section Header & Filter Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 border-b border-white/[0.08]">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#06B6D4] mb-3">
              03 · Qualified Enterprise &amp; GxP Systems Portfolio
            </p>
            <h2
              id="projects-heading"
              className="font-display text-3xl sm:text-4xl lg:text-[2.65rem] font-bold tracking-tight text-[#F9FAFB] leading-[1.1]"
            >
              Validated Computerized Systems &amp; Controls.
            </h2>
            <p className="mt-4 text-base text-[#9CA3AF] leading-relaxed">
              Representative enterprise, laboratory, and infrastructure platforms qualified under GAMP 5, 21 CFR Part 11, EU Annex 11, and ALCOA++ data integrity mandates.
            </p>
          </div>

          {/* Interactive Category Filter Tabs */}
          <div
            className="flex flex-wrap gap-2"
            role="tablist"
            aria-label="Filter validated systems by domain"
          >
            {CATEGORIES.map((category) => {
              const isActive = selectedCategory === category;
              const count =
                category === 'All'
                  ? VALIDATED_SYSTEMS.length
                  : VALIDATED_SYSTEMS.filter((s) => s.category === category).length;

              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-mono text-xs transition-all border ${
                    isActive
                      ? 'bg-[#2563EB] text-[#F9FAFB] border-[#2563EB]'
                      : 'bg-[#0F1219] text-[#9CA3AF] border-white/10 hover:text-[#F9FAFB] hover:border-white/25'
                  }`}
                >
                  <span>{category}</span>
                  <span className="ml-2 opacity-75 tabular-nums">({count})</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Validated Systems Grid */}
        <motion.div
          layout
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredSystems.map((system, idx) => (
              <ValidatedSystemCard
                key={system.id}
                system={system}
                index={idx}
                onInspect={(sys) => setInspectedSystem(sys)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* System Validation Dossier Modal */}
      <AnimatePresence>
        {inspectedSystem && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-system-title"
            onClick={() => setInspectedSystem(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl rounded-2xl bg-[#0F1219] border border-white/15 p-6 sm:p-8 shadow-2xl"
            >
              <div className="flex items-start justify-between gap-4 pb-5 mb-6 border-b border-white/[0.08]">
                <div>
                  <p className="font-mono text-xs text-[#10B981] uppercase tracking-[0.16em] mb-1">
                    {inspectedSystem.gampCategory}
                  </p>
                  <h3
                    id="modal-system-title"
                    className="font-display text-2xl font-bold text-[#F9FAFB]"
                  >
                    {inspectedSystem.name} — Validation Dossier
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setInspectedSystem(null)}
                  aria-label="Close validation dossier"
                  className="p-2 rounded-lg bg-[#161B26] border border-white/10 text-[#9CA3AF] hover:text-[#F9FAFB]"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-[0.16em] text-[#06B6D4] mb-2 flex items-center gap-2">
                    <Layers className="w-4 h-4" />
                    <span>Qualification &amp; Technical Control Scope</span>
                  </h4>
                  <p className="text-sm sm:text-base text-[#F9FAFB]/90 leading-relaxed bg-[#08090C] p-4 rounded-xl border border-white/[0.08]">
                    {inspectedSystem.validationScopeNotes}
                  </p>
                </div>

                <div>
                  <h4 className="font-mono text-xs uppercase tracking-[0.16em] text-[#10B981] mb-3 flex items-center gap-2">
                    <SlidersHorizontal className="w-4 h-4" />
                    <span>21 CFR Part 11 &amp; ALCOA++ Controls Verified</span>
                  </h4>
                  <ul className="space-y-2.5">
                    {inspectedSystem.controlHighlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-[#9CA3AF]"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-5 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
                  <div className="font-mono text-xs text-[#9CA3AF]">
                    Standards:{' '}
                    <span className="text-[#F9FAFB]">
                      {inspectedSystem.complianceStandards.join(' · ')}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setInspectedSystem(null)}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-xs font-mono font-semibold text-[#F9FAFB] transition-colors"
                  >
                    <span>Close Dossier</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
