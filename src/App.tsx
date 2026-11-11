import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, CheckCircle2 } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { RiskAdvisory } from './components/RiskAdvisory';
import { TechStack } from './components/TechStack';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';

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
    <div className="min-h-dvh bg-[#F8FAFC] dark:bg-[#06080E] text-[#0F172A] dark:text-[#F8FAFC] selection:bg-[#4F46E5] selection:text-white antialiased transition-colors duration-300">
      {/* Custom Interactive Cursor */}
      <CustomCursor />

      {/* Skip to Main Content Link */}
      <a
        href="#colorlib-main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-[#4F46E5] focus:text-white focus:font-mono focus:text-xs focus:font-semibold"
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
          className="flex-1 min-w-0 pt-15 lg:pt-0 bg-white dark:bg-[#090D16] transition-colors duration-300"
        >
          <Hero />
          <RiskAdvisory />
          <TechStack />
          <Projects />
          <Footer onCopySuccess={triggerToast} />
        </main>
      </div>

      {/* Animated Clipboard / Form Toast */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            key="status-toast"
            role="status"
            aria-live="polite"
            initial={{ opacity: 0, y: 24, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.94 }}
            transition={{ type: 'spring', stiffness: 420, damping: 28 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2.5 px-5 py-3 rounded-2xl bg-white/95 dark:bg-[#111827]/95 backdrop-blur-xl border border-indigo-500/40 dark:border-cyan-400/35 text-[#0F172A] dark:text-white text-xs font-medium shadow-2xl"
          >
            <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Animated Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            key="back-to-top"
            type="button"
            initial={{ opacity: 0, scale: 0.7, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.7, y: 20 }}
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.92 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-gradient-to-tr from-[#4F46E5] via-[#2563EB] to-[#06B6D4] text-white shadow-lg shadow-indigo-500/25 border border-white/20 cursor-pointer"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
