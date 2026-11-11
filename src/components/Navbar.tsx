import React, { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

const NAV_LINKS = [
  { label: 'Overview', href: '#overview', id: 'overview' },
  { label: 'Advisory', href: '#advisory', id: 'advisory' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Systems', href: '#projects', id: 'projects' },
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
      const yOffset = -96;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-4 z-50 mx-auto max-w-5xl px-4 sm:px-6">
      <div className="flex items-center justify-between gap-6 backdrop-blur-xl bg-white/90 dark:bg-[#0B0E14]/90 border border-slate-200 dark:border-white/10 rounded-full px-6 py-3 shadow-sm dark:shadow-[0_16px_40px_-16px_rgba(0,0,0,0.85)] transition-colors">
        {/* Brand Wordmark */}
        <a
          href="#overview"
          onClick={(e) => scrollToSection(e, '#overview')}
          className="font-display text-base sm:text-lg font-bold tracking-tight text-slate-900 dark:text-[#F9FAFB] hover:text-blue-600 dark:hover:text-[#06B6D4] transition-colors whitespace-nowrap shrink-0"
        >
          Ashutosh Singh
        </a>

        {/* Desktop Navigation Links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600 dark:text-[#9CA3AF]"
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`relative py-1 whitespace-nowrap shrink-0 transition-colors duration-150 ${
                  isActive
                    ? 'text-slate-900 dark:text-[#F9FAFB] font-semibold after:absolute after:bottom-0 after:inset-x-0 after:h-[2px] after:bg-blue-600 dark:after:bg-[#06B6D4]'
                    : 'hover:text-slate-900 dark:hover:text-[#F9FAFB]'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Theme Switcher & Primary CTA */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-[#161B26] text-slate-700 dark:text-[#F9FAFB] hover:border-blue-500/50 dark:hover:border-[#06B6D4]/50 transition-colors cursor-pointer"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700" />
            )}
          </button>

          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, '#contact')}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-full transition-colors duration-150 whitespace-nowrap shrink-0"
          >
            Get in Touch
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-[#161B26] text-slate-700 dark:text-[#F9FAFB] transition-colors cursor-pointer"
          >
            {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="md:hidden mt-2 rounded-2xl bg-white/95 dark:bg-[#0F1219]/95 backdrop-blur-xl border border-slate-200 dark:border-white/10 p-4 shadow-xl">
          <nav aria-label="Mobile Navigation" className="flex flex-col space-y-1">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-slate-100 dark:bg-[#161B26] text-slate-900 dark:text-[#F9FAFB] font-semibold'
                      : 'text-slate-600 dark:text-[#9CA3AF] hover:text-slate-900 dark:hover:text-[#F9FAFB]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            <div className="pt-2 mt-2 border-t border-slate-200 dark:border-white/10">
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="flex items-center justify-center w-full px-4 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
