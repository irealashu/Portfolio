import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative py-8 sm:py-10 px-4 sm:px-6 border-t border-slate-200/80 dark:border-slate-800/80 bg-white/60 dark:bg-[#0c1222]/60 backdrop-blur-md before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-blue-500/20 dark:before:via-blue-400/20 before:to-transparent">
      <div className="max-w-[1200px] mx-auto text-center space-y-3">
        <div className="text-base font-bold text-slate-900 dark:text-white">
          Ashutosh Singh
        </div>
        <p className="text-xs text-slate-600 dark:text-slate-300 max-w-lg mx-auto leading-relaxed">
          Associate in Cyber &amp; Digital Risk Advisory at PwC India. Working across computerized system validation, IT risk, and pharmaceutical data integrity.
        </p>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-5 text-xs font-medium text-slate-700 dark:text-slate-300">
          <a href="#home" className="hover:text-blue-600 dark:hover:text-sky-400 transition-colors">
            Overview
          </a>
          <a href="#about" className="hover:text-blue-600 dark:hover:text-sky-400 transition-colors">
            Skills
          </a>
          <a href="#history" className="hover:text-blue-600 dark:hover:text-sky-400 transition-colors">
            Experience
          </a>
          <a href="#systems" className="hover:text-blue-600 dark:hover:text-sky-400 transition-colors">
            Systems
          </a>
          <a href="#contact" className="hover:text-blue-600 dark:hover:text-sky-400 transition-colors">
            Contact
          </a>
          <a
            href="https://www.linkedin.com/in/irealashu/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-sky-400 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/irealashu"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-sky-400 transition-colors"
          >
            GitHub
          </a>
        </div>
        <div className="text-[11px] text-slate-500 dark:text-slate-400 pt-1">
          &copy; {new Date().getFullYear()} Ashutosh Singh. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};
