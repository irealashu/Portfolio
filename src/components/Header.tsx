import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, ShieldCheck, Clock, Layers, Mail, ChevronRight, ExternalLink } from 'lucide-react';

interface HeaderProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({
  theme,
  onToggleTheme,
  activeSection,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const totalDocHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalDocHeight > 0) {
        setScrollProgress((scrollPos / totalDocHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Expertise', href: '#about', id: 'about', icon: ShieldCheck },
    { label: 'Experience', href: '#history', id: 'history', icon: Clock },
    { label: 'Systems', href: '#systems', id: 'systems', icon: Layers },
    { label: 'Contact', href: '#contact', id: 'contact', icon: Mail },
  ];

  return (
    <>
      <div
        className="fixed top-0 left-0 h-[2.5px] bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400 z-50 transition-all duration-100 ease-out shadow-sm shadow-cyan-400/30"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      <header className="fixed top-3 sm:top-4 inset-x-0 z-40 px-3 sm:px-6 pointer-events-none flex justify-center">
        <div className="pointer-events-auto relative w-full max-w-[1060px] flex items-center justify-between px-3.5 sm:px-5 py-2 rounded-[22px] sm:rounded-[26px] bg-white/85 dark:bg-[#0c1222]/85 backdrop-blur-xl border border-slate-200/90 dark:border-slate-800/90 shadow-xl shadow-slate-900/10 dark:shadow-black/50 transition-all duration-300 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-blue-500/30 dark:before:via-blue-400/30 before:to-transparent before:rounded-t-[26px]">
          <a
            href="#home"
            className="flex items-center gap-2.5 sm:gap-3 group outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-xl p-0.5"
            aria-label="Ashutosh Singh - Home"
          >
            <div className="relative w-8.5 h-8.5 sm:w-9 sm:h-9 rounded-full overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 shrink-0 shadow-xs group-hover:border-blue-500/50 transition-colors">
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
            className="hidden md:flex items-center gap-1 bg-slate-100/80 dark:bg-slate-800/80 p-1 rounded-full border border-slate-200/60 dark:border-slate-700/60"
            aria-label="Primary Navigation"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={`text-xs font-semibold px-3.5 sm:px-4 py-1.5 rounded-full transition-all duration-300 whitespace-nowrap ${
                    isActive
                      ? 'btn-dynamic-gradient text-white shadow-md shadow-blue-500/30'
                      : 'text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 dark:hover:from-blue-950/40 dark:hover:to-indigo-950/40 hover:scale-[1.02]'
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
              className="relative w-8 h-8 sm:w-8.5 sm:h-8.5 rounded-full border border-slate-200/80 dark:border-slate-700/80 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-white hover:bg-gradient-to-tr hover:from-blue-600 hover:to-indigo-600 hover:border-transparent transition-all duration-300 cursor-pointer focus-visible:ring-2 focus-visible:ring-blue-500 shadow-xs hover:scale-110 active:scale-95 hover:shadow-md hover:shadow-blue-500/25"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? (
                <Sun className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 group-hover:text-white transition-transform duration-300 rotate-0 hover:rotate-45" />
              ) : (
                <Moon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-700 transition-transform duration-300 rotate-0 hover:-rotate-12" />
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-8 h-8 rounded-full border border-slate-200 dark:border-slate-700 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center text-slate-700 dark:text-slate-200 hover:text-white hover:bg-gradient-to-tr hover:from-blue-600 hover:to-indigo-600 hover:border-transparent cursor-pointer focus-visible:ring-2 focus-visible:ring-blue-500 transition-all duration-300 hover:scale-110 active:scale-95"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <>
            <div
              className="md:hidden fixed inset-0 bg-slate-950/40 backdrop-blur-xs z-40 pointer-events-auto animate-in fade-in duration-200"
              onClick={() => setMobileMenuOpen(false)}
              aria-hidden="true"
            />
            <div className="md:hidden fixed top-16 sm:top-18 left-4 right-4 bg-white/95 dark:bg-[#0c1222]/95 backdrop-blur-2xl border border-slate-200/90 dark:border-slate-800/90 rounded-2xl p-4 shadow-2xl shadow-slate-950/30 z-50 pointer-events-auto animate-in fade-in slide-in-from-top-3 zoom-in-95 duration-200">
              <div className="flex items-center gap-3 pb-3 mb-3 border-b border-slate-100 dark:border-slate-800">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 shrink-0">
                  <img
                    src="/dp.jpg"
                    alt="Ashutosh Singh"
                    className="w-full h-full object-cover"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-bold text-slate-900 dark:text-white">
                    Ashutosh Singh
                  </div>
                  <div className="text-[10.5px] text-slate-500 dark:text-slate-400 truncate">
                    Associate - Cyber &amp; Digital Risk Advisory
                  </div>
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
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                        isActive
                          ? 'btn-dynamic-gradient text-white shadow-sm shadow-blue-500/25'
                          : 'text-slate-700 dark:text-slate-200 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 dark:hover:from-blue-950/50 dark:hover:to-indigo-950/50 hover:text-blue-600 dark:hover:text-sky-400'
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
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <span>{item.label}</span>
                      </div>
                      <ChevronRight
                        className={`w-3.5 h-3.5 ${
                          isActive
                            ? 'text-white translate-x-0.5'
                            : 'text-slate-400 dark:text-slate-500'
                        }`}
                      />
                    </a>
                  );
                })}
              </div>

              <div className="pt-3 mt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <a
                  href="https://www.linkedin.com/in/irealashu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 text-slate-700 dark:text-slate-200 hover:bg-gradient-to-r hover:from-blue-600 hover:via-blue-700 hover:to-indigo-600 hover:text-white transition-all duration-300 shadow-xs hover:shadow-md hover:shadow-blue-500/25"
                >
                  <span>Connect on LinkedIn</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </>
        )}
      </header>
    </>
  );
};
