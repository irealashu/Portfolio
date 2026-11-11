import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowUpRight,
  Cpu,
  CheckCircle2,
  X,
  Layers,
  ShieldCheck,
} from 'lucide-react';
import { PROJECTS, ProjectCategory, ProjectItem } from '../data/portfolioData';

const GithubIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const CATEGORIES: ProjectCategory[] = [
  'All',
  'Mobile & Systems',
  'Networking & Diagnostics',
  'Client-Side Utilities',
];

interface TiltCardProps {
  project: ProjectItem;
  index: number;
  onInspect: (project: ProjectItem) => void;
}

const ProjectTiltCard: React.FC<TiltCardProps> = ({ project, index, onInspect }) => {
  const [tilt, setTilt] = useState<{ rotateX: number; rotateY: number; glareX: number; glareY: number }>({
    rotateX: 0,
    rotateY: 0,
    glareX: 50,
    glareY: 50,
  });

  const handlePointerMove = (e: React.PointerEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rotateY = (x - 0.5) * 7;
    const rotateX = (0.5 - y) * 7;
    setTilt({
      rotateX,
      rotateY,
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
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
        transition: 'transform 160ms cubic-bezier(0.22, 1, 0.36, 1)',
      }}
      className="group relative rounded-2xl bg-[#161B26]/90 border border-white/10 hover:border-[#06B6D4]/50 p-7 sm:p-8 flex flex-col justify-between overflow-hidden"
    >
      {/* Dynamic Cursor Glare */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(420px circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(37, 99, 235, 0.14), transparent 70%)`,
        }}
      />

      <div className="relative z-10">
        {/* Top Metadata Row: Unboxed Editorial Separators */}
        <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-5 border-b border-white/[0.08] font-mono text-xs">
          <div className="flex items-center gap-2 text-[#9CA3AF]">
            <span className="text-[#06B6D4] font-semibold">0{index + 1}</span>
            <span className="text-white/25">·</span>
            <span>{project.category}</span>
          </div>
          <span className="text-[#10B981] font-medium tracking-tight">
            {project.architectureType}
          </span>
        </div>

        {/* Project Name & Tagline */}
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="font-display text-2xl font-bold text-[#F9FAFB] tracking-tight group-hover:text-[#06B6D4] transition-colors">
            {project.name}
          </h3>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.name} source code on GitHub`}
            className="p-2 rounded-lg bg-[#0F1219] border border-white/10 text-[#9CA3AF] hover:text-[#F9FAFB] hover:border-white/25 transition-colors shrink-0"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
        </div>

        <p className="font-medium text-sm sm:text-base text-[#F9FAFB]/90 mb-3 leading-snug">
          {project.tagline}
        </p>

        <p className="text-sm text-[#9CA3AF] leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Key Architectural Guarantees */}
        <div className="space-y-2 mb-7 pt-4 border-t border-white/[0.06]">
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#9CA3AF] mb-2">
            Engineering &amp; Security Guarantees
          </p>
          {project.keyGuarantees.map((guarantee) => (
            <div key={guarantee} className="flex items-start gap-2.5 text-xs text-[#F9FAFB]/85 leading-relaxed">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
              <span>{guarantee}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Stack & Action Triggers */}
      <div className="relative z-10 pt-5 border-t border-white/[0.08]">
        <div className="mb-4">
          <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-[#9CA3AF] mb-1">
            Stack &amp; Runtime Primitives
          </span>
          <p className="font-mono text-xs text-[#06B6D4] leading-relaxed">
            {project.techStack.join('  /  ')}
          </p>
        </div>

        <div className="flex items-center justify-between gap-4 pt-3 border-t border-white/[0.06]">
          <button
            type="button"
            onClick={() => onInspect(project)}
            className="inline-flex items-center gap-2 font-mono text-xs font-medium text-[#F9FAFB] hover:text-[#06B6D4] transition-colors"
          >
            <Cpu className="w-3.5 h-3.5 text-[#2563EB]" />
            <span>Inspect System Notes</span>
          </button>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-[#9CA3AF] hover:text-[#F9FAFB] transition-colors"
          >
            <span>Repository</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#06B6D4]" />
          </a>
        </div>
      </div>
    </motion.article>
  );
};

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [inspectedProject, setInspectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects =
    selectedCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

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
              03 · Systems Engineering &amp; Open-Source Portfolio
            </p>
            <h2
              id="projects-heading"
              className="font-display text-3xl sm:text-4xl lg:text-[2.65rem] font-bold tracking-tight text-[#F9FAFB] leading-[1.1]"
            >
              Local-First Tools &amp; Mobile Internals.
            </h2>
            <p className="mt-4 text-base text-[#9CA3AF] leading-relaxed">
              Open-source utilities engineered with strict privacy boundaries, native POSIX/Android execution, and zero cloud dependencies.
            </p>
          </div>

          {/* Interactive Category Filter Tabs */}
          <div
            className="flex flex-wrap gap-2"
            role="tablist"
            aria-label="Filter projects by engineering category"
          >
            {CATEGORIES.map((category) => {
              const isActive = selectedCategory === category;
              const count =
                category === 'All'
                  ? PROJECTS.length
                  : PROJECTS.filter((p) => p.category === category).length;

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

        {/* Project Cards Grid */}
        <motion.div
          layout
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <ProjectTiltCard
                key={project.id}
                project={project}
                index={idx}
                onInspect={(proj) => setInspectedProject(proj)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* System Architecture Inspection Modal */}
      <AnimatePresence>
        {inspectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-project-title"
            onClick={() => setInspectedProject(null)}
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
                    {inspectedProject.architectureType}
                  </p>
                  <h3
                    id="modal-project-title"
                    className="font-display text-2xl font-bold text-[#F9FAFB]"
                  >
                    {inspectedProject.name} — System Internals
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setInspectedProject(null)}
                  aria-label="Close architecture inspector"
                  className="p-2 rounded-lg bg-[#161B26] border border-white/10 text-[#9CA3AF] hover:text-[#F9FAFB]"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-[0.16em] text-[#06B6D4] mb-2 flex items-center gap-2">
                    <Layers className="w-4 h-4" />
                    <span>Internal Pipeline &amp; Execution Model</span>
                  </h4>
                  <p className="text-sm sm:text-base text-[#F9FAFB]/90 leading-relaxed bg-[#08090C] p-4 rounded-xl border border-white/[0.08] font-mono">
                    {inspectedProject.systemArchitectureNotes}
                  </p>
                </div>

                <div>
                  <h4 className="font-mono text-xs uppercase tracking-[0.16em] text-[#10B981] mb-3 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Security &amp; Zero-Trust Verification</span>
                  </h4>
                  <ul className="space-y-2.5">
                    {inspectedProject.keyGuarantees.map((item) => (
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
                    Stack: <span className="text-[#F9FAFB]">{inspectedProject.techStack.join(' · ')}</span>
                  </div>
                  <a
                    href={inspectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-xs font-mono font-semibold text-[#F9FAFB] transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>Inspect Source on GitHub</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
