import React, { useState, useEffect } from 'react';
import { ArrowUp, CheckCircle2 } from 'lucide-react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { Expertise } from './components/Expertise.tsx';
import { Experience } from './components/Experience.tsx';
import { Systems } from './components/Systems.tsx';
import { Contact } from './components/Contact.tsx';
import { Footer } from './components/Footer.tsx';
import { SystemModal } from './components/SystemModal.tsx';
import { ValidatedSystem } from './data/portfolioData.ts';

export const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('theme-preference');
    if (saved === 'dark' || saved === 'light') return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  const [activeSection, setActiveSection] = useState('home');
  const [selectedSystem, setSelectedSystem] = useState<ValidatedSystem | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isThemeTransitioning, setIsThemeTransitioning] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme-preference', theme);
  }, [theme]);

  useEffect(() => {
    const sections = ['home', 'about', 'history', 'systems', 'contact'];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 140;
      setShowBackToTop(window.scrollY > 300);

      for (const s of sections) {
        const el = document.getElementById(s);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(s);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setIsThemeTransitioning(true);

    if (typeof document !== 'undefined' && 'startViewTransition' in document) {
      (document as unknown as { startViewTransition: (cb: () => void) => void }).startViewTransition(() => {
        setTheme(nextTheme);
      });
    } else {
      setTheme(nextTheme);
    }

    setTimeout(() => {
      setIsThemeTransitioning(false);
    }, 1250);
  };

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-slate-50 dark:bg-[#060913] text-slate-900 dark:text-slate-100 transition-colors duration-700 selection:bg-blue-600 selection:text-white overflow-hidden">
      <div className="fixed inset-0 pointer-events-none -z-20 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-b from-blue-400/15 via-indigo-400/10 to-transparent dark:from-blue-600/20 dark:via-indigo-600/15 dark:to-transparent blur-[120px] rounded-full" />
        <div className="absolute top-[35%] -left-40 w-[550px] h-[550px] bg-gradient-to-tr from-cyan-400/10 via-sky-300/10 to-transparent dark:from-cyan-500/10 dark:via-blue-600/10 dark:to-transparent blur-[130px] rounded-full" />
        <div className="absolute top-[65%] -right-40 w-[600px] h-[600px] bg-gradient-to-tl from-indigo-400/10 via-purple-300/10 to-transparent dark:from-indigo-600/15 dark:via-purple-600/10 dark:to-transparent blur-[140px] rounded-full" />
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-40 dark:opacity-30 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      {isThemeTransitioning && (
        <div
          className="fixed inset-x-0 h-40 pointer-events-none z-[100] bg-gradient-to-b from-blue-500/15 via-cyan-400/25 to-transparent border-t border-cyan-400/40 blur-sm animate-theme-beam shadow-2xl"
          aria-hidden="true"
        />
      )}

      <Header
        theme={theme}
        onToggleTheme={toggleTheme}
        activeSection={activeSection}
      />

      <main className="flex-1 relative z-10">
        <Hero />
        <Expertise />
        <Experience />
        <Systems onSelectSystem={setSelectedSystem} />
        <Contact onShowToast={showToast} />
      </main>

      <Footer />

      <SystemModal
        system={selectedSystem}
        onClose={() => setSelectedSystem(null)}
      />

      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="interactive-icon-btn fixed bottom-6 left-6 w-9 h-9 rounded-full border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 shadow-lg shadow-slate-900/10 dark:shadow-black/40 flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer z-30"
          aria-label="Scroll back to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-slate-900/95 dark:bg-white/95 backdrop-blur-md text-white dark:text-slate-900 shadow-xl shadow-slate-950/20 text-xs font-semibold animate-in fade-in slide-in-from-bottom-3 duration-200 border border-slate-800 dark:border-slate-200">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 dark:text-emerald-600 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
};
