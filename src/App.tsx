import React, { useState, useEffect } from 'react';
import { ArrowUp, CheckCircle2 } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { RiskAdvisory } from './components/RiskAdvisory';
import { Projects } from './components/Projects';
import { TechStack } from './components/TechStack';
import { Footer } from './components/Footer';

const SECTION_IDS = ['overview', 'advisory', 'experience', 'projects', 'contact'];

export const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    try {
      const saved = localStorage.getItem('theme-preference');
      if (saved === 'light' || saved === 'dark') {
        return saved;
      }
    } catch {
      // Ignore storage access errors
    }
    return 'dark';
  });

  const [activeSection, setActiveSection] = useState<string>('overview');
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    try {
      localStorage.setItem('theme-preference', theme);
    } catch {
      // Ignore storage access errors
    }
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowBackToTop(scrollY > 520);

      let currentSection = 'overview';
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 220) {
            currentSection = id;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const triggerToast = (message: string) => {
    setToastMessage(message);
    window.setTimeout(() => {
      setToastMessage((prev) => (prev === message ? null : prev));
    }, 3000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#08090C] text-slate-900 dark:text-[#F9FAFB] selection:bg-blue-600 selection:text-white antialiased transition-colors duration-200">
      {/* Skip to Main Content Accessibility Link */}
      <a
        href="#overview"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-blue-600 focus:text-white focus:font-mono focus:text-xs"
      >
        Skip to main content
      </a>

      {/* Global Floating Pill Navigation */}
      <Navbar
        activeSection={activeSection}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* Main Single-Page Application Content */}
      <main>
        <Hero />
        <RiskAdvisory />
        <Projects />
        <TechStack />
      </main>

      {/* Contact Footer */}
      <Footer onCopySuccess={triggerToast} />

      {/* Clipboard Verification Toast */}
      {toastMessage && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white dark:bg-[#161B26] border border-emerald-500/50 text-slate-900 dark:text-[#F9FAFB] font-mono text-xs shadow-xl backdrop-blur-xl"
        >
          <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-[#10B981] shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Back to Top Button */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll back to top"
        className={`fixed bottom-6 right-6 z-40 p-3 rounded-xl bg-white dark:bg-[#161B26]/90 hover:bg-blue-600 hover:text-white text-slate-900 dark:text-[#F9FAFB] border border-slate-200 dark:border-white/15 shadow-lg backdrop-blur-md transition-all duration-300 cursor-pointer ${
          showBackToTop
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <ArrowUp className="w-4 h-4" />
      </button>
    </div>
  );
};

export default App;
