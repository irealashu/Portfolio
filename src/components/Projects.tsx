import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FileCheck2,
  CheckCircle2,
  X,
  ShieldCheck,
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
      className="py-20 lg:py-24 border-b border-slate-200 dark:border-white/[0.08] transition-colors scroll-mt-24"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* Section Header & Filter Tabs */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="max-w-xl">
            <h2
              id="projects-heading"
              className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-[#F9FAFB]"
            >
              Validated Enterprise &amp; GxP Systems
            </h2>
            <p className="mt-2 text-base text-slate-600 dark:text-[#9CA3AF]">
              Enterprise, laboratory, and infrastructure systems qualified under GAMP 5, 21 CFR Part 11, and ALCOA++.
            </p>
          </div>

          <div
            className="flex flex-wrap gap-2"
            role="tablist"
            aria-label="Filter validated systems"
          >
            {CATEGORIES.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3.5 py-2 rounded-lg font-mono text-xs transition-colors border cursor-pointer ${
                    isActive
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white dark:bg-[#0F1219] text-slate-600 dark:text-[#9CA3AF] border-slate-200 dark:border-white/10 hover:text-slate-900 dark:hover:text-[#F9FAFB]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Clean Validated Systems Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredSystems.map((system, idx) => (
              <motion.article
                layout
                key={system.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.25, delay: idx * 0.04 }}
                className="rounded-2xl bg-white dark:bg-[#161B26]/90 border border-slate-200 dark:border-white/10 hover:border-blue-500/50 dark:hover:border-[#06B6D4]/50 p-6 sm:p-7 flex flex-col justify-between shadow-sm transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="font-mono text-xs text-emerald-600 dark:text-[#10B981] font-medium">
                      {system.gampCategory}
                    </span>
                    <ShieldCheck className="w-4 h-4 text-blue-600 dark:text-[#06B6D4] shrink-0" />
                  </div>

                  <h3 className="font-display text-xl font-bold text-slate-900 dark:text-[#F9FAFB] mb-2">
                    {system.name}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-[#9CA3AF] leading-relaxed mb-6">
                    {system.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-white/[0.08] flex items-center justify-between gap-3">
                  <span className="font-mono text-xs text-slate-500 dark:text-[#9CA3AF] truncate">
                    {system.complianceStandards.slice(0, 2).join(' · ')}
                  </span>

                  <button
                    type="button"
                    onClick={() => setInspectedSystem(system)}
                    className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-blue-600 dark:text-[#06B6D4] hover:underline shrink-0 cursor-pointer"
                  >
                    <FileCheck2 className="w-3.5 h-3.5" />
                    <span>View Scope</span>
                  </button>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Validation Scope Modal */}
      <AnimatePresence>
        {inspectedSystem && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 dark:bg-black/75 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-system-title"
            onClick={() => setInspectedSystem(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 10 }}
              transition={{ duration: 0.18 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-xl rounded-2xl bg-white dark:bg-[#0F1219] border border-slate-200 dark:border-white/15 p-6 sm:p-8 shadow-2xl"
            >
              <div className="flex items-start justify-between gap-4 pb-4 mb-5 border-b border-slate-200 dark:border-white/[0.08]">
                <div>
                  <p className="font-mono text-xs text-emerald-600 dark:text-[#10B981] mb-1">
                    {inspectedSystem.gampCategory}
                  </p>
                  <h3
                    id="modal-system-title"
                    className="font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-[#F9FAFB]"
                  >
                    {inspectedSystem.name}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setInspectedSystem(null)}
                  aria-label="Close modal"
                  className="p-2 rounded-lg bg-slate-100 dark:bg-[#161B26] text-slate-600 dark:text-[#9CA3AF] hover:text-slate-900 dark:hover:text-[#F9FAFB] cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <p className="text-sm text-slate-600 dark:text-[#9CA3AF] leading-relaxed mb-5">
                {inspectedSystem.validationScopeNotes}
              </p>

              <ul className="space-y-2.5 mb-6">
                {inspectedSystem.controlHighlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-[#F9FAFB]/90"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-[#10B981] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-slate-200 dark:border-white/[0.08] flex items-center justify-between gap-4">
                <span className="font-mono text-xs text-blue-600 dark:text-[#06B6D4]">
                  {inspectedSystem.complianceStandards.join(' · ')}
                </span>
                <button
                  type="button"
                  onClick={() => setInspectedSystem(null)}
                  className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-xs font-semibold text-white transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
