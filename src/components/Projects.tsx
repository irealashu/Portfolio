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
      initial={{ opacity: 0, y: 18, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.94 }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.99 }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onClick={() => onInspect(system)}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
        transition: 'transform 160ms cubic-bezier(0.22, 1, 0.36, 1)',
      }}
      className="group relative rounded-2xl border border-slate-200/90 dark:border-white/10 bg-gradient-to-b from-white to-slate-50/70 dark:from-[#131C2E] dark:to-[#0D1322] p-6 sm:p-7 flex flex-col justify-between hover:border-[#4F46E5]/55 dark:hover:border-[#38BDF8]/55 transition-all cursor-pointer shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 overflow-hidden"
    >
      {/* Dynamic Cursor Glare */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(380px circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(79, 70, 229, 0.14), transparent 70%)`,
        }}
      />

      <div className="relative z-10">
        <div className="flex items-center justify-between gap-2 mb-3.5">
          <motion.span
            whileHover={{ scale: 1.04 }}
            className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 font-mono text-[11px] font-semibold text-[#059669] dark:text-[#34D399]"
          >
            {system.gampCategory}
          </motion.span>
          <motion.div
            whileHover={{ rotate: 12, scale: 1.15 }}
            className="w-8 h-8 rounded-xl bg-indigo-500/10 dark:bg-white/[0.06] flex items-center justify-center text-[#4F46E5] dark:text-[#38BDF8]"
          >
            <ShieldCheck className="w-4 h-4 shrink-0" />
          </motion.div>
        </div>

        <h3 className="font-display text-lg sm:text-xl font-bold text-[#0F172A] dark:text-white group-hover:text-[#4F46E5] dark:group-hover:text-[#38BDF8] transition-colors mb-2">
          {system.name}
        </h3>

        <p className="font-sans text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
          {system.description}
        </p>
      </div>

      <div className="relative z-10 pt-4 border-t border-slate-200/80 dark:border-white/[0.08] flex items-center justify-between font-mono text-xs">
        <span className="text-slate-500 dark:text-slate-400">
          {system.complianceStandards.slice(0, 3).join(' · ')}
        </span>
        <motion.span
          whileHover={{ x: 2 }}
          className="inline-flex items-center gap-1 font-semibold text-[#4F46E5] dark:text-[#38BDF8]"
        >
          <span>Inspect Scope</span>
          <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </motion.span>
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
      className="px-6 sm:px-12 lg:px-16 py-20 lg:py-24 border-b border-slate-200/80 dark:border-white/[0.08]"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.45 }}
      >
        <motion.span
          whileHover={{ x: 3 }}
          className="inline-block font-mono text-[11px] font-semibold uppercase tracking-[0.22em] bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] dark:from-[#38BDF8] dark:to-[#34D399] bg-clip-text text-transparent mb-2"
        >
          Validated Systems
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="font-display text-xl sm:text-2xl font-bold uppercase tracking-[0.14em] text-[#0F172A] dark:text-white mb-8"
        >
          Qualified Enterprise &amp; GxP Systems
        </motion.h2>
      </motion.div>

      {/* Category Filter Bar with Shared Framer Motion Active Pill */}
      <div
        role="group"
        aria-label="Filter validated systems by category"
        className="flex flex-wrap items-center gap-2.5 mb-10"
      >
        {CATEGORIES.map((category) => {
          const isActive = selectedCategory === category;
          return (
            <motion.button
              key={category}
              type="button"
              aria-pressed={isActive}
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setSelectedCategory(category)}
              className={`relative px-4 py-2 rounded-xl font-mono text-xs font-medium transition-colors cursor-pointer ${
                isActive
                  ? 'text-white font-semibold'
                  : 'bg-slate-100/80 dark:bg-[#131C2E] text-slate-600 dark:text-slate-300 hover:text-[#4F46E5] dark:hover:text-white border border-slate-200/80 dark:border-white/10'
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="systems-category-pill"
                  className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-[#4F46E5] via-[#2563EB] to-[#06B6D4] shadow-md shadow-indigo-500/20"
                  transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                />
              )}
              {category}
            </motion.button>
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

      {/* Animated Validation Scope Modal (Single Close Button — No Duplicate Close Triggers) */}
      <AnimatePresence>
        {inspectedSystem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-system-title"
            onClick={() => setInspectedSystem(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 16 }}
              transition={{ type: 'spring', stiffness: 360, damping: 28 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-xl rounded-2xl bg-white dark:bg-[#0D1322] border border-slate-200 dark:border-white/15 p-6 sm:p-8 shadow-2xl"
            >
              <div className="flex items-start justify-between gap-4 pb-4 mb-5 border-b border-slate-200 dark:border-white/10">
                <div>
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 font-mono text-xs font-semibold text-[#059669] dark:text-[#34D399] mb-2">
                    {inspectedSystem.gampCategory}
                  </span>
                  <h3
                    id="modal-system-title"
                    className="font-display text-xl sm:text-2xl font-bold text-[#0F172A] dark:text-white"
                  >
                    {inspectedSystem.name}
                  </h3>
                </div>
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.08, rotate: 90 }}
                  whileTap={{ scale: 0.92 }}
                  onClick={() => setInspectedSystem(null)}
                  aria-label="Close modal"
                  className="p-2 rounded-xl bg-slate-100 dark:bg-[#131C2E] text-slate-600 dark:text-slate-300 hover:text-[#4F46E5] dark:hover:text-white cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </motion.button>
              </div>

              <p className="font-sans text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                {inspectedSystem.validationScopeNotes}
              </p>

              <ul className="space-y-2.5 mb-6">
                {inspectedSystem.controlHighlights.map((item, idx) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.25, delay: idx * 0.05 }}
                    className="flex items-start gap-2.5 font-sans text-sm text-slate-700 dark:text-slate-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex flex-wrap items-center gap-2">
                {inspectedSystem.complianceStandards.map((std) => (
                  <span
                    key={std}
                    className="px-3 py-1 rounded-lg bg-indigo-500/10 dark:bg-cyan-400/10 border border-indigo-500/20 dark:border-cyan-400/20 font-mono text-xs text-[#4F46E5] dark:text-[#38BDF8]"
                  >
                    {std}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
