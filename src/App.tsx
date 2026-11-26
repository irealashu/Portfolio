import React, { useState, useEffect, useRef, Suspense, lazy } from 'react';
import { ArrowUp, CheckCircle2, WifiOff } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { useOnlineStatus } from './hooks/usePWAInstall';

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
  const [activeSection, setActiveSection] = useState<string>('home');
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const toastTimerRef = useRef<number | null>(null);
  const isOnline = useOnlineStatus();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowBackToTop(scrollY > 520);

      if (scrollY < 120) {
        setActiveSection('home');
        return;
      }

      const nearBottom =
        window.innerHeight + scrollY >= document.documentElement.scrollHeight - 48;
      if (nearBottom) {
        setActiveSection('contact');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    const visibleSections = new Map<string, IntersectionObserverEntry>();
    const observed = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visibleSections.set(entry.target.id, entry);
          } else {
            visibleSections.delete(entry.target.id);
          }
        }

        const nearBottom =
          window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 48;
        if (nearBottom) {
          setActiveSection('contact');
          return;
        }

        if (visibleSections.size > 0) {
          const topMost = Array.from(visibleSections.values()).sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
          )[0];
          if (topMost?.target.id) {
            setActiveSection(topMost.target.id);
          }
        }
      },
      {
        rootMargin: '-18% 0px -55% 0px',
        threshold: 0,
      }
    );

    const observeAvailableSections = () => {
      for (const id of SECTION_IDS) {
        if (observed.has(id)) continue;
        const el = document.getElementById(id);
        if (el) {
          observer.observe(el);
          observed.add(id);
        }
      }
    };

    observeAvailableSections();

    const mainEl = document.getElementById('main-content');
    const mutationObserver = new MutationObserver(() => {
      observeAvailableSections();
      if (observed.size === SECTION_IDS.length) {
        mutationObserver.disconnect();
      }
    });

    if (mainEl && observed.size < SECTION_IDS.length) {
      mutationObserver.observe(mainEl, { childList: true, subtree: true });
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    return () => {
      if (toastTimerRef.current !== null) {
        window.clearTimeout(toastTimerRef.current);
      }
    };
  }, []);

  const [isDesktopMouse, setIsDesktopMouse] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return (
      window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
      window.innerWidth >= 1024
    );
  });

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
    const sync = () => setIsDesktopMouse(mq.matches && window.innerWidth >= 1024);
    sync();
    mq.addEventListener('change', sync);
    window.addEventListener('resize', sync, { passive: true });
    return () => {
      mq.removeEventListener('change', sync);
      window.removeEventListener('resize', sync);
    };
  }, []);

  const triggerToast = (message: string) => {
    setToastMessage(message);
    if (toastTimerRef.current !== null) {
      window.clearTimeout(toastTimerRef.current);
    }
    toastTimerRef.current = window.setTimeout(() => {
      setToastMessage(null);
      toastTimerRef.current = null;
    }, 3000);
  };

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  };

  return (
    <div className="min-h-dvh bg-[#E0E5EC] text-[#1D222B] selection:bg-[#2E3746] selection:text-white antialiased">
      {/* Custom Cursor (Desktop mouse only — never loaded on mobile/touch) */}
      {isDesktopMouse && (
        <Suspense fallback={null}>
          <CustomCursor />
        </Suspense>
      )}

      {/* Skip to Main Content Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-xl focus:bg-[#2E3746] focus:text-white focus:font-mono focus:text-xs focus:font-semibold"
      >
        Skip to content
      </a>

      {/* Unified Neumorphic 2-Column Container */}
      <div className="max-w-[1440px] w-full mx-auto flex flex-col lg:flex-row min-h-dvh">
        <Navbar activeSection={activeSection} />

        <main
          id="main-content"
          className="flex-1 min-w-0 pt-[calc(4rem+env(safe-area-inset-top))] lg:pt-0 pb-[env(safe-area-inset-bottom)]"
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

      {/* Subtle Offline Notice (only shown when network disconnects) */}
      {!isOnline && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-[calc(1.5rem+env(safe-area-inset-bottom))] left-5 z-50 flex items-center gap-2 px-4 py-2.5 rounded-2xl neu-raised text-[#1D222B] font-mono text-[11px] font-semibold animate-gpu-fade-up"
        >
          <WifiOff className="w-3.5 h-3.5 text-[#5E6878] shrink-0" />
          <span>Offline · Viewing cached copy</span>
        </div>
      )}

      {/* Neumorphic Clipboard Toast */}
      {toastMessage && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-[calc(1.5rem+env(safe-area-inset-bottom))] left-1/2 -translate-x-1/2 z-50 flex items-center gap-2.5 px-5 py-3 rounded-2xl neu-raised text-[#1D222B] text-xs font-semibold animate-gpu-fade-up"
        >
          <CheckCircle2 className="w-4 h-4 text-[#2E3746] shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Neumorphic Back to Top Button */}
      {showBackToTop && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          className="fixed bottom-[calc(1.5rem+env(safe-area-inset-bottom))] right-6 z-40 w-12 h-12 inline-flex items-center justify-center rounded-full neu-btn text-[#1D222B] transition-transform duration-150 hover:scale-105 hover:-translate-y-0.5 active:scale-95 cursor-pointer animate-gpu-scale-in"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};

export default App;
