import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Shield,
  AlertTriangle,
  Cpu,
  HardDrive,
  Activity,
  Lock,
  ServerCrash,
  ArrowRight,
  RefreshCw,
} from 'lucide-react';
import { ARCHITECTURE_MODES, ArchitectureNode } from '../data/portfolioData';

export const ArchitectureShowcase: React.FC = () => {
  const [activeModeKey, setActiveModeKey] = useState<'local-first' | 'server-centric'>('local-first');
  const [selectedNodeIndex, setSelectedNodeIndex] = useState<number>(0);
  const [packetSweepCount, setPacketSweepCount] = useState<number>(0);

  const currentSpec = ARCHITECTURE_MODES[activeModeKey];
  const activeNode: ArchitectureNode =
    currentSpec.nodes[selectedNodeIndex] || currentSpec.nodes[0];
  const isLocalFirst = activeModeKey === 'local-first';

  const handleModeSwitch = (mode: 'local-first' | 'server-centric') => {
    setActiveModeKey(mode);
    setSelectedNodeIndex(0);
    setPacketSweepCount((c) => c + 1);
  };

  return (
    <section
      id="systems"
      className="relative py-24 lg:py-32 border-b border-white/[0.08] bg-[#0F1219]/60"
      aria-labelledby="systems-heading"
    >
      <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
        {/* Section Header & Mode Switcher */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 border-b border-white/[0.08]">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#06B6D4] mb-3">
              02 · Interactive System Architecture Inspector
            </p>
            <h2
              id="systems-heading"
              className="font-display text-3xl sm:text-4xl lg:text-[2.65rem] font-bold tracking-tight text-[#F9FAFB] leading-[1.1]"
            >
              Zero-Backend Execution vs. Cloud Relay Topology.
            </h2>
            <p className="mt-4 text-base text-[#9CA3AF] leading-relaxed">
              Inspect how local-first browser and native Android pipelines eliminate third-party data custody, TLS proxy inspection, and multi-tenant cloud exposure.
            </p>
          </div>

          {/* Interactive Architecture Mode Toggle */}
          <div
            className="inline-flex p-1.5 rounded-xl bg-[#08090C] border border-white/10 self-start lg:self-auto"
            role="tablist"
            aria-label="System Architecture Topology Mode"
          >
            <button
              type="button"
              role="tab"
              aria-selected={isLocalFirst}
              onClick={() => handleModeSwitch('local-first')}
              className={`px-4 sm:px-5 py-2.5 rounded-lg font-mono text-xs font-medium transition-all flex items-center gap-2 ${
                isLocalFirst
                  ? 'bg-[#2563EB] text-[#F9FAFB] shadow-sm'
                  : 'text-[#9CA3AF] hover:text-[#F9FAFB]'
              }`}
            >
              <Shield className="w-3.5 h-3.5" />
              <span>Local-First / Zero-Backend</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={!isLocalFirst}
              onClick={() => handleModeSwitch('server-centric')}
              className={`px-4 sm:px-5 py-2.5 rounded-lg font-mono text-xs font-medium transition-all flex items-center gap-2 ${
                !isLocalFirst
                  ? 'bg-amber-600/90 text-[#F9FAFB] shadow-sm'
                  : 'text-[#9CA3AF] hover:text-[#F9FAFB]'
              }`}
            >
              <ServerCrash className="w-3.5 h-3.5" />
              <span>Traditional Server-Centric</span>
            </button>
          </div>
        </div>

        {/* Telemetry Summary Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 border-b border-x border-white/[0.08] bg-[#08090C]/90 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.08]">
          <div className="p-5">
            <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-[#9CA3AF] mb-1">
              End-to-End Latency
            </span>
            <span
              className={`font-mono text-sm font-semibold tabular-nums ${
                isLocalFirst ? 'text-[#10B981]' : 'text-amber-400'
              }`}
            >
              {currentSpec.roundTripLatency}
            </span>
          </div>
          <div className="p-5">
            <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-[#9CA3AF] mb-1">
              Remote Attack Surface
            </span>
            <span
              className={`font-mono text-sm font-semibold ${
                isLocalFirst ? 'text-[#10B981]' : 'text-rose-400'
              }`}
            >
              {currentSpec.serverAttackSurface}
            </span>
          </div>
          <div className="p-5">
            <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-[#9CA3AF] mb-1">
              Data Residency Boundary
            </span>
            <span className="font-mono text-sm text-[#F9FAFB] font-medium">
              {currentSpec.dataResidency}
            </span>
          </div>
          <div className="p-5">
            <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-[#9CA3AF] mb-1">
              Air-Gapped / Offline Mode
            </span>
            <span
              className={`font-mono text-sm font-medium ${
                isLocalFirst ? 'text-[#06B6D4]' : 'text-[#9CA3AF]'
              }`}
            >
              {currentSpec.offlineCapability}
            </span>
          </div>
          <div className="p-5">
            <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-[#9CA3AF] mb-1">
              Governance &amp; Compliance
            </span>
            <span className="font-mono text-xs text-[#F9FAFB]">
              {currentSpec.compliancePosture}
            </span>
          </div>
        </div>

        {/* Interactive Pipeline Diagram & Node Inspector */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left 7 Columns: Visual SVG + Interactive Pipeline Stage Cards */}
          <div className="lg:col-span-7 rounded-2xl bg-[#08090C] border border-white/10 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-4 pb-5 mb-6 border-b border-white/[0.08]">
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#06B6D4] block">
                    Active Execution Topology
                  </span>
                  <h3 className="font-display text-xl font-bold text-[#F9FAFB] mt-0.5">
                    {currentSpec.name}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setPacketSweepCount((c) => c + 1)}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#161B26] hover:bg-[#1f2637] border border-white/10 font-mono text-xs text-[#F9FAFB] transition-colors"
                >
                  <RefreshCw className="w-3.5 h-3.5 text-[#06B6D4]" />
                  <span>Trace Data Flow</span>
                </button>
              </div>

              {/* Animated SVG Vector Bus */}
              <div className="relative rounded-xl bg-[#0F1219] border border-white/[0.08] p-4 mb-6 overflow-hidden">
                <div className="flex items-center justify-between font-mono text-[11px] text-[#9CA3AF] mb-2">
                  <span>
                    {isLocalFirst
                      ? 'SANDBOX BOUNDARY: ORIGIN-ISOLATED CLIENT MEMORY (connect-src \'none\')'
                      : 'PUBLIC NETWORK BOUNDARY: MULTI-HOP TLS PROXY & CLOUD TENANT POOL'}
                  </span>
                  <span
                    className={
                      isLocalFirst ? 'text-[#10B981] font-semibold' : 'text-amber-400 font-semibold'
                    }
                  >
                    {isLocalFirst ? '0 EXTERNAL HOPS' : '4 EXTERNAL NETWORK HOPS'}
                  </span>
                </div>

                <svg
                  viewBox="0 0 760 110"
                  className="w-full h-24 sm:h-28 overflow-visible"
                  role="img"
                  aria-label={`Data flow diagram for ${currentSpec.name}`}
                >
                  <defs>
                    <linearGradient id="localFlowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#2563EB" />
                      <stop offset="50%" stopColor="#06B6D4" />
                      <stop offset="100%" stopColor="#10B981" />
                    </linearGradient>
                    <linearGradient id="serverFlowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#F59E0B" />
                      <stop offset="50%" stopColor="#EF4444" />
                      <stop offset="100%" stopColor="#F59E0B" />
                    </linearGradient>
                  </defs>

                  {/* Enclosure Boundary Box */}
                  <rect
                    x="12"
                    y="12"
                    width="736"
                    height="86"
                    rx="10"
                    fill="none"
                    stroke={isLocalFirst ? '#10B981' : '#EF4444'}
                    strokeOpacity="0.3"
                    strokeDasharray={isLocalFirst ? 'none' : '6 6'}
                    strokeWidth="1.5"
                  />

                  {/* Base Connecting Track */}
                  <path
                    d="M 95 55 L 665 55"
                    stroke="rgba(255,255,255,0.12)"
                    strokeWidth="2"
                    fill="none"
                  />

                  {/* Animated Active Vector Stream */}
                  <motion.path
                    key={`${activeModeKey}-${packetSweepCount}`}
                    d="M 95 55 L 665 55"
                    stroke={isLocalFirst ? 'url(#localFlowGrad)' : 'url(#serverFlowGrad)'}
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0.4 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: isLocalFirst ? 0.55 : 1.4, ease: 'easeInOut' }}
                  />

                  {/* 4 Interactive SVG Stage Nodes */}
                  {currentSpec.nodes.map((node, index) => {
                    const cx = 95 + index * 190;
                    const isSelected = index === selectedNodeIndex;
                    const strokeColor = isLocalFirst
                      ? isSelected
                        ? '#10B981'
                        : '#06B6D4'
                      : isSelected
                      ? '#EF4444'
                      : '#F59E0B';

                    return (
                      <g
                        key={node.id}
                        className="cursor-pointer"
                        onClick={() => setSelectedNodeIndex(index)}
                      >
                        <circle
                          cx={cx}
                          cy={55}
                          r={isSelected ? 22 : 17}
                          fill="#08090C"
                          stroke={strokeColor}
                          strokeWidth={isSelected ? 2.5 : 1.5}
                        />
                        <text
                          x={cx}
                          y={59}
                          textAnchor="middle"
                          fill="#F9FAFB"
                          fontSize="11"
                          fontFamily="JetBrains Mono, monospace"
                          fontWeight="600"
                        >
                          {node.step}
                        </text>
                        <text
                          x={cx}
                          y={90}
                          textAnchor="middle"
                          fill={isSelected ? '#F9FAFB' : '#9CA3AF'}
                          fontSize="10"
                          fontFamily="JetBrains Mono, monospace"
                        >
                          {node.latency}
                        </text>
                      </g>
                    );
                  })}
                </svg>
              </div>

              {/* 4 Clickable Pipeline Stage Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {currentSpec.nodes.map((node, idx) => {
                  const isSelected = idx === selectedNodeIndex;
                  return (
                    <button
                      key={node.id}
                      type="button"
                      onClick={() => setSelectedNodeIndex(idx)}
                      className={`text-left p-4 rounded-xl border transition-all ${
                        isSelected
                          ? isLocalFirst
                            ? 'bg-[#161B26] border-[#06B6D4] shadow-sm'
                            : 'bg-[#161B26] border-amber-500/80 shadow-sm'
                          : 'bg-[#0F1219]/70 border-white/[0.08] hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center justify-between font-mono text-xs mb-1.5">
                        <span className="text-[#06B6D4] font-semibold">STAGE {node.step}</span>
                        <span
                          className={`tabular-nums ${
                            isLocalFirst ? 'text-[#10B981]' : 'text-amber-400'
                          }`}
                        >
                          {node.latency}
                        </span>
                      </div>
                      <h4 className="font-display text-sm font-bold text-[#F9FAFB] mb-0.5">
                        {node.label}
                      </h4>
                      <p className="font-mono text-[11px] text-[#9CA3AF] truncate">
                        {node.sublabel}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs text-[#9CA3AF]">
              <span>Select any pipeline stage above to inspect its memory and security boundary.</span>
              <span className="font-mono text-[#F9FAFB] tabular-nums">
                Stage 0{selectedNodeIndex + 1} / 04
              </span>
            </div>
          </div>

          {/* Right 5 Columns: Deep Stage Telemetry Inspector */}
          <div className="lg:col-span-5 rounded-2xl bg-[#161B26]/90 border border-white/10 p-6 sm:p-8 flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeNode.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.22 }}
              >
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.08]">
                  <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#06B6D4]">
                    Stage {activeNode.step} Telemetry
                  </span>
                  <span
                    className={`inline-flex items-center gap-1.5 font-mono text-xs font-medium ${
                      activeNode.exposureLevel === 'Zero External Exposure'
                        ? 'text-[#10B981]'
                        : activeNode.exposureLevel === 'Elevated Exposure'
                        ? 'text-amber-400'
                        : 'text-rose-400'
                    }`}
                  >
                    {activeNode.exposureLevel === 'Zero External Exposure' ? (
                      <Lock className="w-3.5 h-3.5" />
                    ) : (
                      <AlertTriangle className="w-3.5 h-3.5" />
                    )}
                    {activeNode.exposureLevel}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-bold text-[#F9FAFB] mb-1">
                  {activeNode.label}
                </h3>
                <p className="font-mono text-xs text-[#06B6D4] mb-5">
                  {activeNode.sublabel} · Stage Latency: {activeNode.latency}
                </p>

                <p className="text-sm sm:text-base text-[#9CA3AF] leading-relaxed mb-6">
                  {activeNode.description}
                </p>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-[#08090C]/90 border border-white/[0.08]">
                    <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.15em] text-[#06B6D4] mb-1.5">
                      <Cpu className="w-3.5 h-3.5" />
                      <span>Runtime Execution Mechanism</span>
                    </div>
                    <p className="font-mono text-xs text-[#F9FAFB] leading-relaxed">
                      {activeNode.technicalMechanism}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#08090C]/90 border border-white/[0.08]">
                    <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.15em] text-[#10B981] mb-1.5">
                      <HardDrive className="w-3.5 h-3.5" />
                      <span>Security &amp; Isolation Boundary</span>
                    </div>
                    <p className="font-mono text-xs text-[#F9FAFB] leading-relaxed">
                      {activeNode.securityBoundary}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Bottom Stepper Navigation */}
            <div className="mt-8 pt-5 border-t border-white/[0.08] flex items-center justify-between">
              <div className="flex items-center gap-2 font-mono text-xs text-[#9CA3AF]">
                <Activity className="w-4 h-4 text-[#2563EB]" />
                <span>Deterministic Pipeline Verification</span>
              </div>
              <button
                type="button"
                onClick={() =>
                  setSelectedNodeIndex((prev) => (prev + 1) % currentSpec.nodes.length)
                }
                className="inline-flex items-center gap-1.5 font-mono text-xs text-[#06B6D4] hover:text-[#F9FAFB] transition-colors"
              >
                <span>Next Stage</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
