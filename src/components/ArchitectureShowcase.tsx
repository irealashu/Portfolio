import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Shield,
  FileCheck2,
  ClipboardCheck,
  Scale,
  Lock,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { CONTROL_FRAMEWORKS, ControlStageNode } from '../data/portfolioData';

export const ArchitectureShowcase: React.FC = () => {
  const [activeFrameworkKey, setActiveFrameworkKey] = useState<'gamp5-csv' | 'itgc-part11'>(
    'gamp5-csv'
  );
  const [selectedNodeIndex, setSelectedNodeIndex] = useState<number>(0);

  const currentSpec = CONTROL_FRAMEWORKS[activeFrameworkKey];
  const activeNode: ControlStageNode =
    currentSpec.nodes[selectedNodeIndex] || currentSpec.nodes[0];
  const isGampMode = activeFrameworkKey === 'gamp5-csv';

  const handleFrameworkSwitch = (mode: 'gamp5-csv' | 'itgc-part11') => {
    setActiveFrameworkKey(mode);
    setSelectedNodeIndex(0);
  };

  return (
    <section
      id="systems"
      className="relative py-24 lg:py-32 border-b border-white/[0.08] bg-[#0F1219]/60"
      aria-labelledby="systems-heading"
    >
      <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
        {/* Section Header & Framework Switcher */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 border-b border-white/[0.08]">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#06B6D4] mb-3">
              02 · Validation Lifecycle &amp; IT Control Architecture
            </p>
            <h2
              id="systems-heading"
              className="font-display text-3xl sm:text-4xl lg:text-[2.65rem] font-bold tracking-tight text-[#F9FAFB] leading-[1.1]"
            >
              GAMP 5 V-Model &amp; 21 CFR Part 11 Controls.
            </h2>
            <p className="mt-4 text-base text-[#9CA3AF] leading-relaxed">
              Structured verification frameworks governing computerized system qualification, role-based access control (RBAC), tamper-evident audit trails, and regulatory inspection readiness.
            </p>
          </div>

          {/* Interactive Framework Toggle */}
          <div
            className="inline-flex p-1.5 rounded-xl bg-[#08090C] border border-white/10 self-start lg:self-auto"
            role="tablist"
            aria-label="Validation and Risk Control Framework"
          >
            <button
              type="button"
              role="tab"
              aria-selected={isGampMode}
              onClick={() => handleFrameworkSwitch('gamp5-csv')}
              className={`px-4 sm:px-5 py-2.5 rounded-lg font-mono text-xs font-medium transition-all flex items-center gap-2 ${
                isGampMode
                  ? 'bg-[#2563EB] text-[#F9FAFB] shadow-sm'
                  : 'text-[#9CA3AF] hover:text-[#F9FAFB]'
              }`}
            >
              <FileCheck2 className="w-3.5 h-3.5" />
              <span>GAMP 5 CSV V-Model</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={!isGampMode}
              onClick={() => handleFrameworkSwitch('itgc-part11')}
              className={`px-4 sm:px-5 py-2.5 rounded-lg font-mono text-xs font-medium transition-all flex items-center gap-2 ${
                !isGampMode
                  ? 'bg-[#2563EB] text-[#F9FAFB] shadow-sm'
                  : 'text-[#9CA3AF] hover:text-[#F9FAFB]'
              }`}
            >
              <Shield className="w-3.5 h-3.5" />
              <span>ITGC &amp; 21 CFR Part 11 Controls</span>
            </button>
          </div>
        </div>

        {/* Telemetry Summary Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 border-b border-x border-white/[0.08] bg-[#08090C]/90 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.08]">
          <div className="p-5">
            <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-[#9CA3AF] mb-1">
              Core Methodology
            </span>
            <span className="font-mono text-xs sm:text-sm font-semibold text-[#10B981]">
              {currentSpec.methodology}
            </span>
          </div>
          <div className="p-5">
            <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-[#9CA3AF] mb-1">
              Regulatory Alignment
            </span>
            <span className="font-mono text-xs sm:text-sm font-semibold text-[#06B6D4]">
              {currentSpec.regulatoryScope}
            </span>
          </div>
          <div className="p-5">
            <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-[#9CA3AF] mb-1">
              Verification Evidence
            </span>
            <span className="font-mono text-xs text-[#F9FAFB] font-medium">
              {currentSpec.evidenceStandard}
            </span>
          </div>
          <div className="p-5">
            <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-[#9CA3AF] mb-1">
              Governance Cadence
            </span>
            <span className="font-mono text-xs text-[#F9FAFB] font-medium">
              {currentSpec.reviewCadence}
            </span>
          </div>
          <div className="p-5">
            <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-[#9CA3AF] mb-1">
              Assurance Benchmark
            </span>
            <span className="font-mono text-xs text-[#10B981] font-semibold">
              {currentSpec.auditOutcome}
            </span>
          </div>
        </div>

        {/* Static Control Matrix & Stage Inspector (Zero Animation Canvas) */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left 7 Columns: 4-Stage Control Matrix Selector */}
          <div className="lg:col-span-7 rounded-2xl bg-[#08090C] border border-white/10 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-4 pb-5 mb-6 border-b border-white/[0.08]">
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#06B6D4] block">
                    Structured Control Architecture
                  </span>
                  <h3 className="font-display text-xl font-bold text-[#F9FAFB] mt-0.5">
                    {currentSpec.name}
                  </h3>
                </div>
                <span className="font-mono text-xs text-[#10B981]">
                  {currentSpec.shortLabel}
                </span>
              </div>

              <p className="text-sm text-[#9CA3AF] leading-relaxed mb-6">
                {currentSpec.summary}
              </p>

              {/* 4 Clickable Lifecycle / Control Stage Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {currentSpec.nodes.map((node, idx) => {
                  const isSelected = idx === selectedNodeIndex;
                  return (
                    <button
                      key={node.id}
                      type="button"
                      onClick={() => setSelectedNodeIndex(idx)}
                      className={`text-left p-5 rounded-xl border transition-all flex flex-col justify-between ${
                        isSelected
                          ? 'bg-[#161B26] border-[#06B6D4] shadow-sm'
                          : 'bg-[#0F1219]/80 border-white/[0.08] hover:border-white/20'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between font-mono text-xs mb-2">
                          <span className="text-[#06B6D4] font-semibold">
                            {node.phaseCode}
                          </span>
                          <span className="text-[#10B981] text-[11px]">
                            0{idx + 1} / 04
                          </span>
                        </div>
                        <h4 className="font-display text-base font-bold text-[#F9FAFB] mb-1">
                          {node.label}
                        </h4>
                        <p className="font-mono text-[11px] text-[#9CA3AF]">
                          {node.sublabel}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between font-mono text-[11px]">
                        <span className="text-[#9CA3AF]">{node.assuranceStatus}</span>
                        <span className={isSelected ? 'text-[#06B6D4]' : 'text-[#4B5563]'}>
                          Inspect →
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs text-[#9CA3AF]">
              <span>Select any lifecycle phase above to inspect its validation deliverables and regulatory clauses.</span>
              <span className="font-mono text-[#F9FAFB] tabular-nums">
                Phase 0{selectedNodeIndex + 1} / 04
              </span>
            </div>
          </div>

          {/* Right 5 Columns: Deep Stage Telemetry Inspector */}
          <div className="lg:col-span-5 rounded-2xl bg-[#161B26]/90 border border-white/10 p-6 sm:p-8 flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeNode.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.08]">
                  <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#06B6D4]">
                    {activeNode.phaseCode}
                  </span>
                  <span className="inline-flex items-center gap-1.5 font-mono text-xs font-medium text-[#10B981]">
                    <Lock className="w-3.5 h-3.5" />
                    {activeNode.assuranceStatus}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-bold text-[#F9FAFB] mb-1">
                  {activeNode.label}
                </h3>
                <p className="font-mono text-xs text-[#06B6D4] mb-5">
                  {activeNode.sublabel}
                </p>

                <p className="text-sm sm:text-base text-[#9CA3AF] leading-relaxed mb-6">
                  {activeNode.description}
                </p>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-[#08090C]/90 border border-white/[0.08]">
                    <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.15em] text-[#06B6D4] mb-1.5">
                      <ClipboardCheck className="w-3.5 h-3.5" />
                      <span>Deliverables &amp; Audit Evidence</span>
                    </div>
                    <p className="font-mono text-xs text-[#F9FAFB] leading-relaxed">
                      {activeNode.deliverablesAndEvidence}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#08090C]/90 border border-white/[0.08]">
                    <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.15em] text-[#10B981] mb-1.5">
                      <Scale className="w-3.5 h-3.5" />
                      <span>Regulatory &amp; Clause Mapping</span>
                    </div>
                    <p className="font-mono text-xs text-[#F9FAFB] leading-relaxed">
                      {activeNode.regulatoryStandard}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Bottom Stepper Navigation */}
            <div className="mt-8 pt-5 border-t border-white/[0.08] flex items-center justify-between">
              <div className="flex items-center gap-2 font-mono text-xs text-[#9CA3AF]">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                <span>Inspection-Ready Control Gate</span>
              </div>
              <button
                type="button"
                onClick={() =>
                  setSelectedNodeIndex((prev) => (prev + 1) % currentSpec.nodes.length)
                }
                className="inline-flex items-center gap-1.5 font-mono text-xs text-[#06B6D4] hover:text-[#F9FAFB] transition-colors"
              >
                <span>Next Phase</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
