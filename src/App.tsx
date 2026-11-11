import React, { useState, useEffect } from 'react';
import { ArrowUp, CheckCircle2 } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { RiskAdvisory } from './components/RiskAdvisory';
import { TechStack } from './components/TechStack';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';

const SECTION_IDS = [
  'home',
  'about',
  'services',
  'skills',
  'education',
  'experience',
  'work',
  'contact',
];

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
    return 'light';
  });

  const [activeSection, setActiveSection] = useState<string>('home');
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

      let currentSection = 'home';
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 240) {
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
    <div className="min-h-screen bg-white dark:bg-[#08090C] text-[#0F172A] dark:text-[#F9FAFB] selection:bg-[#2563EB] selection:text-white antialiased transition-colors duration-200">
      {/* Skip to Main Content Link */}
      <a
        href="#colorlib-main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-[#2563EB] focus:text-white focus:font-mono focus:text-xs focus:font-semibold"
      >
        Skip to content
      </a>

      {/* Centered Jackson 2-Column Container (Left Sticky Sidebar + Right Scrolling Content) */}
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row min-h-screen">
        <Navbar
          activeSection={activeSection}
          theme={theme}
          onToggleTheme={toggleTheme}
        />

        <main
          id="colorlib-main"
          className="flex-1 min-w-0 pt-16 lg:pt-0 bg-white dark:bg-[#08090C] transition-colors"
        >
          <Hero />
          <RiskAdvisory />
          <TechStack />
          <Projects />
          <Footer onCopySuccess={triggerToast} />
        </main>
      </div>

      {/* Clipboard / Form Toast */}
      {toastMessage && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white dark:bg-[#1E1E1E] border border-[#0066FF]/40 text-[#111111] dark:text-white text-xs font-medium shadow-xl"
        >
          <CheckCircle2 className="w-4 h-4 text-[#0066FF] shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Back to Top Button */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll back to top"
        className={`fixed bottom-6 right-6 z-40 p-3 rounded-full bg-white dark:bg-[#1E1E1E] hover:bg-[#0066FF] hover:text-white text-[#111111] dark:text-white border border-[#E5E5E5] dark:border-[#333333] shadow-md transition-all duration-300 cursor-pointer ${
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
