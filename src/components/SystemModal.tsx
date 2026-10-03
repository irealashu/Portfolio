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
        className="card-dynamic-gradient relative w-full max-w-xl max-h-[85vh] overflow-y-auto p-6 sm:p-7 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl shadow-slate-950/50 animate-in zoom-in-95 duration-200 before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-gradient-to-r before:from-blue-600 before:via-indigo-500 before:to-cyan-400 before:rounded-t-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-300 hover:text-white hover:bg-gradient-to-tr hover:from-blue-600 hover:to-indigo-600 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer shadow-xs"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="mb-4 pr-8 pt-1">
          <div className="flex flex-wrap gap-1.5 mb-2.5">
            {system.badges.map((b, idx) => (
              <span
                key={idx}
                className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-sky-400 border border-blue-100 dark:border-blue-900/40"
              >
                {b}
              </span>
            ))}
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            {system.name}
          </h3>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          <p>{system.modalOverview}</p>

          <div className="pt-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 mb-2.5">
              Key Validation Activities:
            </h4>
            <ul className="space-y-2">
              {system.modalValidationScope.map((scopeItem, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-200">
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
