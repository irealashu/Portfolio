import React, { useEffect } from 'react';
import { X, CheckCircle2 } from 'lucide-react';
import { ValidatedSystem } from '../data/portfolioData.ts';

interface SystemModalProps {
  system: ValidatedSystem | null;
  onClose: () => void;
}

export const SystemModal: React.FC<SystemModalProps> = ({ system, onClose }) => {
  useEffect(() => {
    if (!system) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [system, onClose]);

  if (!system) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="card-dynamic-gradient relative w-full max-w-xl max-h-[85vh] overflow-y-auto p-6 sm:p-8 rounded-[2rem] border border-slate-200/90 dark:border-slate-800 shadow-2xl shadow-slate-950/60 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-xl bg-slate-100/90 dark:bg-slate-800/90 border border-slate-200/70 dark:border-slate-700/70 text-slate-500 dark:text-slate-300 hover:text-white hover:bg-gradient-to-tr hover:from-blue-600 hover:to-indigo-600 flex items-center justify-center transition-all duration-250 hover:scale-105 active:scale-95 cursor-pointer shadow-xs"
          aria-label="Close modal"
        >
          <X className="w-4.5 h-4.5" />
        </button>

        <div className="mb-5 pr-8 pt-1">
          <div className="flex flex-wrap items-center gap-1.5 mb-2.5">
            <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-100/90 dark:bg-blue-900/50 text-blue-700 dark:text-sky-300 border border-blue-200/70 dark:border-blue-800/60">
              {system.category}
            </span>
            {system.badges.map((b, idx) => (
              <span
                key={idx}
                className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-100/90 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 border border-slate-200/60 dark:border-slate-700/70"
              >
                {b}
              </span>
            ))}
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white leading-tight">
            {system.name}
          </h3>
        </div>

        <div className="space-y-5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          <div className="p-4 rounded-2xl bg-slate-50/80 dark:bg-slate-900/50 border border-slate-200/60 dark:border-slate-800/70">
            <p className="leading-relaxed">{system.modalOverview}</p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-sky-400" />
              <span>Key Qualification &amp; Validation Scope:</span>
            </h4>
            <ul className="space-y-2.5">
              {system.modalValidationScope.map((scopeItem, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 p-3 rounded-xl bg-white/70 dark:bg-slate-900/30 border border-slate-200/50 dark:border-slate-800/60 text-xs sm:text-[13px] text-slate-700 dark:text-slate-200 leading-relaxed"
                >
                  <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-sky-400 shrink-0 mt-0.5" />
                  <span>{scopeItem}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
