import React, { useState } from 'react';
import { ChevronDown, GraduationCap } from 'lucide-react';
import {
  COMPETENCY_GROUPS,
  EDUCATION_ITEMS,
  CAREER_MILESTONES,
} from '../data/portfolioData';

export const TechStack: React.FC = () => {
  const [openAccordionId, setOpenAccordionId] = useState<string>(EDUCATION_ITEMS[0].id);

  const toggleAccordion = (id: string) => {
    setOpenAccordionId((prev) => (prev === id ? '' : id));
  };

  return (
    <>
      {/* 1. Skills & Deliverables Section (#skills) */}
      <section
        id="skills"
        className="px-5 sm:px-10 lg:px-12 py-10 lg:py-14"
      >
        <div>
          <span className="inline-block font-mono text-xs font-medium uppercase tracking-[0.2em] text-[#5E6878] mb-2">
            Core Skills
          </span>
          <h2 className="font-display text-2xl sm:text-[28px] font-bold tracking-tight text-[#1D222B] mb-3">
            Skills &amp; Deliverables
          </h2>

          <p className="font-sans text-[15px] sm:text-base text-[#4C5564] leading-[1.75] max-w-3xl mb-8">
            The documents, assessments and controls I build and test every week across CSV and ITGC projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {COMPETENCY_GROUPS.map((group) => (
            <div
              key={group.id}
              className="rounded-2xl neu-surface p-6 sm:p-7 transition-transform duration-200 ease-out hover:-translate-y-1 will-change-transform"
            >
              <p className="font-mono text-xs font-medium text-[#5E6878] mb-1">
                {group.focus}
              </p>
              <h3 className="font-display text-base sm:text-lg font-bold text-[#1D222B] mb-3.5">
                {group.category}
              </h3>
              <ul className="space-y-2 font-sans text-xs sm:text-sm text-[#4C5564] list-disc pl-4 marker:text-[#667082]">
                {group.deliverables.map((item) => (
                  <li key={item} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="neu-divider mt-14" />
      </section>

      {/* 2. Education Accordion Section (#education) — VBSPU, Jaunpur */}
      <section
        id="education"
        className="px-5 sm:px-10 lg:px-12 py-10 lg:py-14"
      >
        <div>
          <span className="inline-block font-mono text-xs font-medium uppercase tracking-[0.2em] text-[#5E6878] mb-2">
            Academic Background
          </span>
          <h2 className="font-display text-2xl sm:text-[28px] font-bold tracking-tight text-[#1D222B] mb-8">
            Education
          </h2>
        </div>

        <div className="space-y-5">
          {EDUCATION_ITEMS.map((item) => {
            const isOpen = openAccordionId === item.id;
            return (
              <div
                key={item.id}
                className="rounded-2xl neu-surface p-2 sm:p-2.5"
              >
                <h3 className="m-0">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => toggleAccordion(item.id)}
                    className={`w-full flex items-center justify-between px-4 sm:px-5 py-3.5 rounded-xl text-left font-display text-sm sm:text-base font-bold cursor-pointer transition-transform duration-150 active:scale-[0.995] ${
                      isOpen ? 'text-[#1D222B]' : 'text-[#3A4352]'
                    }`}
                  >
                    <span className="flex items-center gap-3.5 min-w-0">
                      <span className="w-10 h-10 rounded-full neu-icon-well flex items-center justify-center shrink-0">
                        <GraduationCap className="w-4.5 h-4.5 text-[#2E3746] stroke-[1.7]" />
                      </span>
                      <span className="truncate sm:whitespace-normal">{item.degree}</span>
                    </span>
                    <div className="flex items-center gap-3 shrink-0 ml-2">
                      <span className="hidden sm:inline-block font-mono text-xs font-medium text-[#5E6878]">
                        {item.period}
                      </span>
                      <span
                        className={`w-8 h-8 rounded-full neu-btn flex items-center justify-center shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-[#1D222B]' : 'rotate-0 text-[#555F70]'
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </span>
                    </div>
                  </button>
                </h3>

                <div
                  className={`${
                    isOpen ? 'block' : 'hidden print:block'
                  } mt-2 p-5 sm:p-6 rounded-xl neu-inset animate-gpu-fade-up`}
                >
                  <p className="font-mono text-xs font-medium uppercase tracking-wider text-[#5E6878] mb-3">
                    {item.institution} · {item.period}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans text-sm text-[#4C5564] leading-relaxed">
                    <p>{item.leftColumn}</p>
                    <p>{item.rightColumn}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="neu-divider mt-14" />
      </section>

      {/* 3. Work Experience Section (#experience) */}
      <section
        id="experience"
        className="px-5 sm:px-10 lg:px-12 py-10 lg:py-14"
      >
        <div>
          <span className="inline-block font-mono text-xs font-medium uppercase tracking-[0.2em] text-[#5E6878] mb-2">
            Experience
          </span>
          <h2 className="font-display text-2xl sm:text-[28px] font-bold tracking-tight text-[#1D222B] mb-8">
            Work Experience
          </h2>
        </div>

        <div className="space-y-6">
          {CAREER_MILESTONES.map((milestone) => (
            <article
              key={milestone.organization}
              className="rounded-2xl neu-surface p-6 sm:p-7 transition-transform duration-200 ease-out hover:-translate-y-1 will-change-transform"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-12 rounded-xl bg-white/95 p-1.5 shadow-[inset_2px_2px_5px_rgba(163,173,190,0.34),inset_-2px_-2px_5px_rgba(255,255,255,0.92)] border border-white/80 flex items-center justify-center shrink-0">
                    <img
                      src={milestone.logoUrl}
                      alt={`${milestone.organization} logo`}
                      width={72}
                      height={40}
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-display text-base sm:text-lg font-bold text-[#1D222B] leading-snug">
                      {milestone.role}
                    </h3>
                    <p className="font-display text-sm font-semibold text-[#4C5564]">
                      {milestone.organization}
                    </p>
                  </div>
                </div>
                <span className="font-mono text-xs font-medium text-[#5E6878] tabular-nums shrink-0">
                  {milestone.period} · {milestone.location}
                </span>
              </div>

              <p className="font-sans text-sm text-[#4C5564] leading-relaxed mb-3.5">
                {milestone.summary}
              </p>

              <ul className="space-y-1.5 font-sans text-xs sm:text-sm text-[#4C5564] list-disc pl-5 marker:text-[#667082]">
                {milestone.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="neu-divider mt-14" />
      </section>
    </>
  );
};

export default TechStack;
