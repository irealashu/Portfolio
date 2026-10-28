import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, ShieldCheck, Clock, Layers, Mail, ChevronRight, ExternalLink } from 'lucide-react';

interface HeaderProps {
  theme: 'light' | 'dark';
  onToggleTheme: (e: React.MouseEvent<HTMLButtonElement>) => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({
  theme,
  onToggleTheme,
  activeSection,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Expertise', href: '#about', id: 'about', icon: ShieldCheck },
    { label: 'Experience', href: '#history', id: 'history', icon: Clock },
    { label: 'Systems', href: '#systems', id: 'systems', icon: Layers },
    { label: 'Contact', href: '#contact', id: 'contact', icon: Mail },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className="fixed top-3 sm:top-4 inset-x-0 z-40 px-3 sm:px-6 pointer-events-none flex justify-center">
        <div className="pointer-events-auto relative w-full max-w-[1100px] flex items-center justify-between px-3.5 sm:px-5 py-2 rounded-[22px] sm:rounded-[26px] border border-slate-200/70 dark:border-slate-800/80 bg-white/80 dark:bg-[#0c1222]/80 backdrop-blur-xl shadow-[0_12px_30px_-18px_rgba(15,23,42,0.35)] dark:shadow-[0_18px_32px_-18px_rgba(2,6,23,0.9)]">
          <a
            href="#home"
            onClick={handleLogoClick}
            className="flex items-center gap-2.5 sm:gap-3 group outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-xl p-0.5 cursor-pointer"
            aria-label="Ashutosh Singh - Home"
          >
            <div className="relative w-8.5 h-8.5 sm:w-9 sm:h-9 rounded-full overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 shrink-0 shadow-xs group-hover:shadow-md transition-shadow duration-300">
              <img
                src="/dp.jpg"
                alt="Ashutosh Singh"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                width={36}
                height={36}
                loading="eager"
                decoding="async"
              />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Ashutosh Singh
              </span>
              <span className="text-[10px] sm:text-[11px] font-medium text-slate-500 dark:text-slate-400 leading-tight truncate">
                Associate - Cyber &amp; Digital Risk Advisory
              </span>
            </div>
          </a>

          <nav
            className="hidden md:flex items-center gap-1.5 bg-slate-100/90 dark:bg-slate-800/90 p-1.5 rounded-full border border-slate-200/80 dark:border-slate-700/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.25)]"
            aria-label="Primary Navigation"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`text-xs font-semibold px-4 py-1.5 rounded-full transition-all duration-250 whitespace-nowrap cursor-pointer select-none ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 text-white shadow-md shadow-blue-500/30 scale-100 font-bold'
                      : 'text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white hover:bg-white/80 dark:hover:bg-slate-700/70 active:scale-95'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={onToggleTheme}
              className="relative w-9 h-9 sm:w-9.5 sm:h-9.5 rounded-xl border border-slate-200/80 dark:border-slate-700/80 bg-white/90 dark:bg-slate-800/90 flex items-center justify-center shadow-xs transition-all duration-250 hover:scale-105 hover:border-blue-400 dark:hover:border-sky-400 active:scale-95 cursor-pointer"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <div className="relative w-4 h-4 flex items-center justify-center transition-transform duration-500">
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-amber-400 rotate-0 scale-100 transition-all duration-300" />
                ) : (
                  <Moon className="w-4 h-4 text-slate-700 rotate-0 scale-100 transition-all duration-300" />
                )}
              </div>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden relative w-9 h-9 sm:w-9.5 sm:h-9.5 rounded-xl border flex items-center justify-center transition-all duration-250 active:scale-95 cursor-pointer ${
                mobileMenuOpen
                  ? 'bg-blue-50/90 dark:bg-blue-950/80 border-blue-400 dark:border-sky-500 ring-2 ring-blue-500/30 text-blue-600 dark:text-sky-300 shadow-sm'
                  : 'bg-white/90 dark:bg-slate-800/90 border-slate-200/80 dark:border-slate-700/80 text-slate-700 dark:text-slate-200 hover:border-blue-400 dark:hover:border-sky-400 shadow-xs'
              }`}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              <div className="w-4.5 h-3.5 flex flex-col justify-between items-center relative" aria-hidden="true">
                <span
                  className={`block h-0.5 w-full rounded-full transition-all duration-300 ease-out origin-center ${
                    mobileMenuOpen
                      ? 'rotate-45 translate-y-[6px] bg-blue-600 dark:bg-sky-400'
                      : 'bg-slate-700 dark:bg-slate-200'
                  }`}
                />
                <span
                  className={`block h-0.5 w-full rounded-full transition-all duration-200 ease-out ${
                    mobileMenuOpen
                      ? 'opacity-0 scale-x-0'
                      : 'bg-slate-700 dark:bg-slate-200 opacity-100'
                  }`}
                />
                <span
                  className={`block h-0.5 w-full rounded-full transition-all duration-300 ease-out origin-center ${
                    mobileMenuOpen
                      ? '-rotate-45 -translate-y-[6px] bg-blue-600 dark:bg-sky-400'
                      : 'bg-slate-700 dark:bg-slate-200'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <>
            <div
              className="md:hidden fixed inset-0 bg-slate-950/45 backdrop-blur-xs z-40 pointer-events-auto animate-in fade-in duration-200"
              onClick={() => setMobileMenuOpen(false)}
              aria-hidden="true"
            />
            <div
              id="mobile-navigation"
              className="md:hidden fixed top-16 sm:top-18 left-3.5 right-3.5 bg-white/95 dark:bg-[#0c1222]/95 backdrop-blur-2xl border border-slate-200/90 dark:border-slate-800/90 rounded-[1.8rem] p-4.5 shadow-[0_20px_45px_-18px_rgba(15,23,42,0.45)] dark:shadow-[0_24px_50px_-18px_rgba(0,0,0,0.85)] z-50 animate-in zoom-in-95 fade-in duration-200"
            >
              <div className="flex items-center justify-between pb-3.5 mb-3 border-b border-slate-100 dark:border-slate-800/80">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 shrink-0 shadow-xs">
                    <img
                      src="/dp.jpg"
                      alt="Ashutosh Singh"
                      className="w-full h-full object-cover"
                      width={40}
                      height={40}
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-bold text-slate-900 dark:text-white leading-tight">
                      Ashutosh Singh
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
                      PwC India &bull; Cyber &amp; Digital Risk
                    </div>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/80 dark:border-emerald-800/60 text-[10px] font-semibold text-emerald-700 dark:text-emerald-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Available</span>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.id;
                  return (
                    <a
                      key={item.id}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                        isActive
                          ? 'btn-dynamic-gradient text-white shadow-md shadow-blue-500/25 scale-[1.01]'
                          : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100/80 dark:hover:bg-slate-800/80 hover:text-blue-600 dark:hover:text-sky-300 active:scale-[0.99]'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`p-1.5 rounded-lg ${
                            isActive
                              ? 'bg-white/20 text-white'
                              : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-sm font-medium">{item.label}</span>
                      </div>
                      <ChevronRight
                        className={`w-4 h-4 transition-transform ${
                          isActive
                            ? 'text-white translate-x-0.5'
                            : 'text-slate-400 dark:text-slate-500'
                        }`}
                      />
                    </a>
                  );
                })}
              </div>

              <div className="grid grid-cols-2 gap-2 pt-3.5 mt-3 border-t border-slate-100 dark:border-slate-800/80">
                <a
                  href="https://www.linkedin.com/in/irealashu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-slate-100 transition-colors"
                >
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href="mailto:kshatriya205902@gmail.com"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 hover:bg-blue-100 dark:hover:bg-blue-900/60 text-blue-600 dark:text-sky-300 border border-blue-200/60 dark:border-blue-800/60 transition-colors"
                >
                  <Mail className="w-3 h-3" />
                  <span>Email</span>
                </a>
              </div>
            </div>
          </>
        )}
      </header>
    </>
  );
};
