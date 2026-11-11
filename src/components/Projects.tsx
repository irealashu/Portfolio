import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, X, ShieldCheck, ArrowUpRight } from 'lucide-react';
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
  index: number;
  onInspect: (system: ValidatedSystemItem) => void;
}

const SystemTiltCard: React.FC<SystemTiltCardProps> = ({ system, index, onInspect }) => {
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, glareX: 50, glareY: 50 });

  const handlePointerMove = (e: React.PointerEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setTilt({
      rotateY: (x - 0.5) * 6,
      rotateX: (0.5 - y) * 6,
      glareX: x * 100,
      glareY: y * 100,
    });
  };

  const handlePointerLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0, glareX: 50, glareY: 50 });
  };

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.28, delay: index * 0.04 }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onClick={() => onInspect(system)}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
        transition: 'transform 160ms cubic-bezier(0.22, 1, 0.36, 1)',
      }}
      className="group relative rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#161B26]/90 p-6 sm:p-7 flex flex-col justify-between hover:border-[#2563EB]/60 dark:hover:border-[#06B6D4]/50 transition-colors cursor-pointer shadow-2xs overflow-hidden"
    >
      {/* Dynamic Cursor Glare from Previous Design */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(380px circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(37, 99, 235, 0.12), transparent 70%)`,
        }}
      />

      <div className="relative z-10">
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="font-mono text-xs font-semibold text-[#10B981]">
            {system.gampCategory}
          </span>
          <ShieldCheck className="w-4 h-4 text-[#2563EB] dark:text-[#06B6D4] shrink-0" />
        </div>

        <h3 className="font-display text-lg sm:text-xl font-bold text-[#0F172A] dark:text-[#F9FAFB] group-hover:text-[#2563EB] dark:group-hover:text-[#06B6D4] transition-colors mb-2">
          {system.name}
        </h3>

        <p className="font-sans text-sm text-slate-600 dark:text-[#9CA3AF] leading-relaxed mb-5">
          {system.description}
        </p>
      </div>

      <div className="relative z-10 pt-4 border-t border-slate-200 dark:border-white/[0.08] flex items-center justify-between font-mono text-xs">
        <span className="text-slate-500 dark:text-[#9CA3AF]">
          {system.complianceStandards.slice(0, 3).join(' · ')}
        </span>
        <span className="inline-flex items-center gap-1 font-semibold text-[#2563EB] dark:text-[#06B6D4]">
          <span>Details</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </span>
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
      id="work"
      className="px-6 sm:px-12 lg:px-16 py-20 lg:py-24 border-b border-slate-200 dark:border-white/[0.08]"
    >
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.4 }}
      >
        <span className="block font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-[#2563EB] dark:text-[#06B6D4] mb-2">
          Validated Systems
        </span>
        <h2 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-[0.14em] text-[#0F172A] dark:text-[#F9FAFB] mb-8">
          Qualified Enterprise &amp; GxP Systems
        </h2>
      </motion.div>

      {/* Jackson Category Filter Bar */}
      <div
        role="group"
        aria-label="Filter validated systems by category"
        className="flex flex-wrap items-center gap-3 mb-10"
      >
        {CATEGORIES.map((category) => {
          const isActive = selectedCategory === category;
          return (
            <button
              key={category}
              type="button"
              aria-pressed={isActive}
              onClick={() => setSelectedCategory(category)}
              className={`px-3.5 py-1.5 rounded-lg font-mono text-xs font-medium transition-colors cursor-pointer ${
                isActive
                  ? 'bg-[#EBF3FF] text-[#2563EB] dark:bg-[#161B26] dark:text-[#06B6D4] font-semibold border border-blue-200/60 dark:border-white/10'
                  : 'text-slate-600 dark:text-[#9CA3AF] hover:text-[#2563EB] dark:hover:text-[#F9FAFB]'
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* 2-Column Validated Systems Grid with 3D Tilt & Layout Animations */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredSystems.map((system, idx) => (
            <SystemTiltCard
              key={system.id}
              system={system}
              index={idx}
              onInspect={(sys) => setInspectedSystem(sys)}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Animated Validation Scope Modal */}
      <AnimatePresence>
        {inspectedSystem && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-sm"
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
              className="w-full max-w-xl rounded-2xl bg-white dark:bg-[#0F1219] border border-slate-200 dark:border-white/15 p-6 sm:p-8 shadow-2xl"
            >
              <div className="flex items-start justify-between gap-4 pb-4 mb-5 border-b border-slate-200 dark:border-white/10">
                <div>
                  <p className="font-mono text-xs font-semibold text-[#10B981] mb-1">
                    {inspectedSystem.gampCategory}
                  </p>
                  <h3
                    id="modal-system-title"
                    className="font-display text-xl sm:text-2xl font-bold text-[#0F172A] dark:text-[#F9FAFB]"
                  >
                    {inspectedSystem.name}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setInspectedSystem(null)}
                  aria-label="Close modal"
                  className="p-2 rounded-lg bg-slate-100 dark:bg-[#161B26] text-slate-600 dark:text-[#9CA3AF] hover:text-[#0F172A] dark:hover:text-white cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <p className="font-sans text-sm text-slate-600 dark:text-[#9CA3AF] leading-relaxed mb-5">
                {inspectedSystem.validationScopeNotes}
              </p>

              <ul className="space-y-2.5 mb-6">
                {inspectedSystem.controlHighlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 font-sans text-sm text-slate-700 dark:text-[#F9FAFB]/90"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between gap-4">
                <span className="font-mono text-xs text-[#2563EB] dark:text-[#06B6D4]">
                  {inspectedSystem.complianceStandards.join(' · ')}
                </span>
                <button
                  type="button"
                  onClick={() => setInspectedSystem(null)}
                  className="px-4 py-2 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] font-mono text-xs font-semibold text-white transition-colors cursor-pointer"
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
