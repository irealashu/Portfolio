import React, { useState } from 'react';
import { Menu, X, Sun, Moon, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

const NAV_LINKS = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Expertise', href: '#services', id: 'services' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Education', href: '#education', id: 'education' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Systems', href: '#work', id: 'work' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  theme,
  onToggleTheme,
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      const yOffset = window.innerWidth < 1024 ? -64 : 0;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const renderSidebarContent = () => (
    <div className="flex flex-col items-center justify-between h-full max-h-[720px] my-auto w-full text-center px-5 py-4 relative overflow-hidden animate-gpu-fade-up">
      {/* Top Profile Identity Block */}
      <div className="w-full flex flex-col items-center relative z-10 shrink-0">
        <div className="relative mb-2.5 p-0.5 rounded-full bg-gradient-to-tr from-[#4338CA] to-[#0284C7] dark:from-[#38BDF8] dark:to-[#6366F1] shadow-sm transition-transform duration-200 ease-out hover:scale-105 will-change-transform">
          <img
            src="./dp.jpg"
            alt="Ashutosh Singh"
            width={80}
            height={80}
            fetchPriority="high"
            decoding="async"
            referrerPolicy="no-referrer"
            className="w-18 h-18 xl:w-20 xl:h-20 rounded-full object-cover border-2 border-white dark:border-[#0B0F1A]"
          />
          <span
            title="Verified Cyber & Digital Risk Practitioner"
            className="absolute bottom-0 right-0 w-5 h-5 rounded-full bg-[#4338CA] dark:bg-[#0284C7] text-white flex items-center justify-center ring-2 ring-white dark:ring-[#0B0F1A] shadow-xs"
          >
            <ShieldCheck className="w-3 h-3" />
          </span>
        </div>

        <h1 className="font-display text-lg xl:text-[19px] font-extrabold tracking-tight text-[#0F172A] dark:text-white leading-snug">
          Ashutosh Singh
        </h1>

        <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-[#4338CA] dark:text-[#38BDF8] mt-0.5">
          Cyber &amp; Digital Risk
        </p>

        <p className="font-mono text-[10px] text-slate-600 dark:text-slate-400 mt-0.5">
          PwC India · Gurugram
        </p>
      </div>

      {/* Center Vertical Navigation Menu */}
      <nav
        aria-label="Main Navigation"
        className="my-2 w-full relative z-10 flex-1 flex items-center justify-center min-h-0"
      >
        <ul className="flex flex-col items-center justify-center space-y-0.5 w-full">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <li
                key={link.id}
                className="relative w-full max-w-[185px]"
              >
                <a
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`relative isolate flex items-center justify-center gap-2 w-full px-3.5 py-1.5 rounded-lg font-sans text-[13px] leading-tight tracking-[0.02em] transition-transform duration-150 ease-out hover:translate-x-1 active:scale-97 whitespace-nowrap ${
                    isActive
                      ? 'text-[#4338CA] dark:text-[#38BDF8] font-semibold'
                      : 'text-slate-700 dark:text-slate-400 hover:text-[#4338CA] dark:hover:text-white'
                  }`}
                >
                  {isActive && (
                    <span className="absolute inset-0 z-0 rounded-lg bg-indigo-500/10 dark:bg-sky-500/15 border border-[#4338CA]/25 dark:border-[#38BDF8]/30 shadow-2xs animate-gpu-scale-in" />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Bottom Dock: Theme Switcher Button & Copyright */}
      <div className="w-full flex flex-col items-center relative z-10 shrink-0 pt-2.5 border-t border-slate-200 dark:border-white/[0.08] space-y-2">
        <button
          type="button"
          onClick={onToggleTheme}
          aria-label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          className="w-full max-w-[185px] inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl border border-slate-300 dark:border-white/15 bg-white dark:bg-[#131C2E] font-mono text-xs font-semibold text-[#0F172A] dark:text-white hover:border-[#4338CA] dark:hover:border-[#38BDF8] transition-transform duration-150 ease-out hover:-translate-y-0.5 active:scale-96 cursor-pointer shadow-2xs whitespace-nowrap"
        >
          <span className="inline-flex items-center justify-center">
            {theme === 'dark' ? (
              <Sun className="w-3.5 h-3.5 text-amber-400" />
            ) : (
              <Moon className="w-3.5 h-3.5 text-[#4338CA]" />
            )}
          </span>
          <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
        </button>

        <p className="font-mono text-[10px] text-slate-600 dark:text-slate-400">
          © {new Date().getFullYear()} Ashutosh Singh
        </p>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile & Tablet Top Bar */}
      <div className="lg:hidden fixed top-0 inset-x-0 z-50 h-15 bg-white/95 dark:bg-[#0B0F1A]/95 backdrop-blur-xl border-b border-slate-200 dark:border-white/10 px-4 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <img
            src="./dp.jpg"
            alt="Ashutosh Singh"
            width={32}
            height={32}
            decoding="async"
            referrerPolicy="no-referrer"
            className="w-8 h-8 rounded-full object-cover border border-slate-300 dark:border-white/20"
          />
          <span className="font-display text-sm font-bold text-[#0F172A] dark:text-white whitespace-nowrap">
            Ashutosh Singh
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-white/15 bg-slate-50 dark:bg-[#131C2E] font-mono text-[11px] font-semibold text-slate-800 dark:text-white transition-transform duration-150 active:scale-95 cursor-pointer whitespace-nowrap"
          >
            {theme === 'dark' ? (
              <>
                <Sun className="w-3.5 h-3.5 text-amber-400" />
                <span>Light</span>
              </>
            ) : (
              <>
                <Moon className="w-3.5 h-3.5 text-[#4338CA]" />
                <span>Dark</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle navigation drawer"
            className="p-2 rounded-lg border border-slate-200 dark:border-white/15 bg-slate-50 dark:bg-[#131C2E] text-slate-800 dark:text-white transition-transform duration-150 active:scale-95 cursor-pointer"
          >
            {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-Over Drawer */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-xs animate-gpu-scale-in"
          onClick={() => setMobileOpen(false)}
        >
          <aside
            className="w-[270px] h-dvh bg-[#F1F5F9] dark:bg-[#0B0F1A] border-r border-slate-200 dark:border-white/10 pt-15 overflow-hidden flex flex-col justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {renderSidebarContent()}
          </aside>
        </div>
      )}

      {/* Desktop Left Sticky Sidebar */}
      <aside className="hidden lg:flex flex-col justify-center w-[275px] xl:w-[295px] shrink-0 h-dvh max-h-dvh sticky top-0 bg-[#F1F5F9] dark:bg-[#0B0F1A] border-r border-slate-200 dark:border-white/[0.08] overflow-hidden select-none">
        {renderSidebarContent()}
      </aside>
    </>
  );
};
