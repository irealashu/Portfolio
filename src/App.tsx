import React, { useState, useEffect, Suspense, lazy } from 'react';
import { ArrowUp, CheckCircle2 } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';

const RiskAdvisory = lazy(() => import('./components/RiskAdvisory'));
const TechStack = lazy(() => import('./components/TechStack'));
const Projects = lazy(() => import('./components/Projects'));
const Footer = lazy(() => import('./components/Footer'));
const CustomCursor = lazy(() => import('./components/CustomCursor'));

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
    return 'dark';
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
    <div className="min-h-dvh bg-[#F1F5F9] dark:bg-[#06080E] text-[#0F172A] dark:text-[#F8FAFC] selection:bg-[#4338CA] selection:text-white antialiased">
      {/* Custom Interactive Cursor (Lazy-loaded so it never blocks FCP/LCP) */}
      <Suspense fallback={null}>
        <CustomCursor />
      </Suspense>

      {/* Skip to Main Content Link */}
      <a
        href="#colorlib-main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-[#4338CA] focus:text-white focus:font-mono focus:text-xs focus:font-semibold"
      >
        Skip to content
      </a>

      {/* Centered Jackson 2-Column Container (Left Sticky Sidebar + Right Scrolling Content) */}
      <div className="max-w-[1440px] w-full mx-auto flex flex-col lg:flex-row min-h-dvh">
        <Navbar
          activeSection={activeSection}
          theme={theme}
          onToggleTheme={toggleTheme}
        />

        <main
          id="colorlib-main"
          className="flex-1 min-w-0 pt-15 lg:pt-0 bg-white dark:bg-[#090D16]"
        >
          <Hero />
          <Suspense fallback={<div className="min-h-[600px]" aria-hidden="true" />}>
            <RiskAdvisory />
            <TechStack />
            <Projects />
            <Footer onCopySuccess={triggerToast} />
          </Suspense>
        </main>
      </div>

      {/* GPU-Composited Clipboard Toast */}
      {toastMessage && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2.5 px-5 py-3 rounded-2xl bg-white/95 dark:bg-[#111827]/95 backdrop-blur-xl border border-slate-200 dark:border-white/15 text-[#0F172A] dark:text-white text-xs font-medium shadow-xl animate-gpu-fade-up"
        >
          <CheckCircle2 className="w-4 h-4 text-[#059669] dark:text-[#34D399] shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* GPU-Composited Back to Top Button */}
      {showBackToTop && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-[#4338CA] dark:bg-[#2563EB] text-white shadow-lg shadow-indigo-900/20 border border-white/20 transition-transform duration-150 hover:scale-108 hover:-translate-y-0.5 active:scale-95 cursor-pointer animate-gpu-scale-in"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};

export default App;
