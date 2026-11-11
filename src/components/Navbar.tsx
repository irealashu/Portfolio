import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Mail } from 'lucide-react';

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

const LinkedinIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

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
      const yOffset = window.innerWidth < 1024 ? -72 : 0;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const renderSidebarContent = () => (
    <div className="flex flex-col items-center justify-between h-full text-center px-6 py-10">
      {/* Top Profile Block */}
      <div className="w-full flex flex-col items-center">
        <motion.a
          href="#home"
          onClick={(e) => scrollToSection(e, '#home')}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.2 }}
          className="block mb-5 focus:outline-none"
        >
          <img
            src="./dp.jpg"
            alt="Ashutosh Singh"
            className="w-36 h-36 rounded-full object-cover mx-auto border-2 border-white dark:border-white/15 shadow-md"
          />
        </motion.a>

        <h1 className="font-display text-[22px] font-bold tracking-tight text-[#0F172A] dark:text-[#F9FAFB] mb-1.5">
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, '#home')}
            className="hover:text-[#2563EB] dark:hover:text-[#06B6D4] transition-colors"
          >
            Ashutosh Singh
          </a>
        </h1>

        <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-[#2563EB] dark:text-[#06B6D4]">
          Cyber &amp; Digital Risk Advisory
        </p>
        <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-slate-500 dark:text-[#9CA3AF] mt-1">
          PwC India · Gurugram
        </p>
      </div>

      {/* Center Vertical Navigation Menu with Framer Motion Active Pill */}
      <nav aria-label="Main Navigation" className="my-6 w-full">
        <ul className="flex flex-col items-center space-y-1.5">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <li key={link.id} className="relative">
                <a
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`relative z-10 inline-block px-4 py-1.5 rounded-lg font-sans text-[13px] tracking-[0.02em] transition-colors ${
                    isActive
                      ? 'text-[#2563EB] dark:text-[#06B6D4] font-semibold'
                      : 'text-slate-600 dark:text-[#9CA3AF] hover:text-[#2563EB] dark:hover:text-[#F9FAFB]'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="jackson-sidebar-active-pill"
                      className="absolute inset-0 -z-10 rounded-lg bg-[#EBF3FF] dark:bg-[#161B26] border border-blue-200/60 dark:border-white/10"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Bottom Theme Switcher, Copyright & Social Icons */}
      <div className="w-full flex flex-col items-center">
        <motion.button
          type="button"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={onToggleTheme}
          aria-label={theme === 'dark' ? 'Switch to Light mode' : 'Switch to Dark mode'}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-[#161B26] font-mono text-xs font-medium text-slate-700 dark:text-[#F9FAFB] hover:border-[#2563EB] dark:hover:border-[#06B6D4] transition-colors cursor-pointer mb-5 shadow-2xs"
        >
          {theme === 'dark' ? (
            <>
              <Sun className="w-3.5 h-3.5 text-amber-400" />
              <span>Light</span>
            </>
          ) : (
            <>
              <Moon className="w-3.5 h-3.5 text-slate-600" />
              <span>Dark</span>
            </>
          )}
        </motion.button>

        <p className="font-mono text-[11px] leading-relaxed text-slate-500 dark:text-[#9CA3AF] mb-4 max-w-[210px]">
          © {new Date().getFullYear()} Ashutosh Singh.
          <br />
          All rights reserved.
        </p>

        <ul className="flex items-center justify-center gap-4 text-slate-500 dark:text-[#9CA3AF]">
          <li>
            <a
              href="https://www.linkedin.com/in/irealashu/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-[#2563EB] dark:hover:text-[#06B6D4] transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/irealashu"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-[#2563EB] dark:hover:text-[#06B6D4] transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          </li>
          <li>
            <a
              href="mailto:kshatriya205902@gmail.com"
              aria-label="Email"
              className="hover:text-[#2563EB] dark:hover:text-[#06B6D4] transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile & Tablet Top Bar */}
      <div className="lg:hidden fixed top-0 inset-x-0 z-50 h-16 bg-[#F8F9FA]/95 dark:bg-[#0F1219]/95 backdrop-blur-xl border-b border-slate-200 dark:border-white/10 px-4 flex items-center justify-between">
        <a
          href="#home"
          onClick={(e) => scrollToSection(e, '#home')}
          className="flex items-center gap-3"
        >
          <img
            src="./dp.jpg"
            alt="Ashutosh Singh"
            className="w-9 h-9 rounded-full object-cover border border-slate-200 dark:border-white/15"
          />
          <div>
            <span className="font-display text-sm font-bold text-[#0F172A] dark:text-[#F9FAFB] block leading-tight">
              Ashutosh Singh
            </span>
            <span className="font-mono text-[10px] uppercase tracking-wider text-[#2563EB] dark:text-[#06B6D4] block">
              PwC India · Cyber Risk
            </span>
          </div>
        </a>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-[#161B26] text-slate-700 dark:text-[#F9FAFB] cursor-pointer"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle navigation drawer"
            className="p-2 rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-[#161B26] text-slate-700 dark:text-[#F9FAFB] cursor-pointer"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Animated Slide-Over Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-xs"
            onClick={() => setMobileOpen(false)}
          >
            <motion.aside
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="w-[280px] h-full bg-[#F8F9FA] dark:bg-[#0F1219] border-r border-slate-200 dark:border-white/10 pt-14 overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {renderSidebarContent()}
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Left Sticky Sidebar */}
      <aside className="hidden lg:block w-[300px] shrink-0 h-screen sticky top-0 bg-[#F8F9FA] dark:bg-[#0F1219] border-x border-slate-200 dark:border-white/10 overflow-y-auto select-none transition-colors">
        {renderSidebarContent()}
      </aside>
    </>
  );
};
