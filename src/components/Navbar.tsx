import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

const sidebarContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.045,
      delayChildren: 0.03,
    },
  },
};

const sidebarItemVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] as const },
  },
};

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
    <motion.div
      variants={sidebarContainerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center justify-between h-full max-h-[720px] my-auto w-full text-center px-5 py-4 relative overflow-hidden"
    >
      {/* Subtle Ambient Top Glow */}
      <motion.div
        aria-hidden="true"
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -top-16 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full bg-gradient-to-br from-[#4F46E5]/20 via-[#06B6D4]/15 to-transparent blur-2xl"
      />

      {/* Top Profile Identity Block */}
      <motion.div
        variants={sidebarItemVariants}
        className="w-full flex flex-col items-center relative z-10 shrink-0"
      >
        <motion.div
          whileHover={{ scale: 1.05, rotate: 1.5 }}
          transition={{ type: 'spring', stiffness: 320, damping: 20 }}
          className="relative mb-2 p-0.5 rounded-full bg-gradient-to-tr from-[#4F46E5] via-[#06B6D4] to-[#10B981] shadow-md shadow-indigo-500/20"
        >
          <img
            src="./dp.jpg"
            alt="Ashutosh Singh"
            referrerPolicy="no-referrer"
            className="w-18 h-18 xl:w-20 xl:h-20 rounded-full object-cover border-2 border-white dark:border-[#0B0F1A]"
          />
          <span
            title="Verified Cyber & Digital Risk Practitioner"
            className="absolute bottom-0 right-0 w-5 h-5 rounded-full bg-[#10B981] text-white flex items-center justify-center ring-2 ring-white dark:ring-[#0B0F1A] shadow-xs"
          >
            <ShieldCheck className="w-3 h-3" />
          </span>
        </motion.div>

        <motion.h1
          variants={sidebarItemVariants}
          whileHover={{ scale: 1.02 }}
          className="font-display text-lg xl:text-[19px] font-extrabold tracking-tight text-[#0F172A] dark:text-white leading-snug"
        >
          Ashutosh Singh
        </motion.h1>

        <motion.p
          variants={sidebarItemVariants}
          className="font-mono text-[10px] font-semibold uppercase tracking-[0.12em] bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] dark:from-[#38BDF8] dark:to-[#34D399] bg-clip-text text-transparent mt-0.5"
        >
          Cyber &amp; Digital Risk
        </motion.p>

        <motion.p
          variants={sidebarItemVariants}
          className="font-mono text-[10px] text-slate-500 dark:text-slate-400 mt-0.5"
        >
          PwC India · Gurugram
        </motion.p>
      </motion.div>

      {/* Center Vertical Navigation Menu */}
      <nav
        aria-label="Main Navigation"
        className="my-2 w-full relative z-10 flex-1 flex items-center justify-center min-h-0"
      >
        <motion.ul
          variants={sidebarContainerVariants}
          className="flex flex-col items-center justify-center space-y-0.5 w-full"
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <motion.li
                key={link.id}
                variants={sidebarItemVariants}
                className="relative w-full max-w-[185px]"
              >
                <motion.a
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  whileHover={{ x: 4, scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className={`relative z-10 flex items-center justify-center gap-2 w-full px-3.5 py-1.5 rounded-lg font-sans text-[13px] leading-tight tracking-[0.02em] transition-colors whitespace-nowrap ${
                    isActive
                      ? 'text-[#4F46E5] dark:text-[#38BDF8] font-semibold'
                      : 'text-slate-600 dark:text-slate-400 hover:text-[#4F46E5] dark:hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="jackson-sidebar-active-pill"
                      className="absolute inset-0 -z-10 rounded-lg bg-gradient-to-r from-indigo-500/10 via-blue-500/10 to-cyan-500/10 dark:from-indigo-500/20 dark:via-cyan-500/15 dark:to-emerald-500/10 border border-indigo-500/25 dark:border-cyan-400/30 shadow-2xs"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span>{link.label}</span>
                </motion.a>
              </motion.li>
            );
          })}
        </motion.ul>
      </nav>

      {/* Bottom Dock: Theme Switcher Button & Copyright */}
      <motion.div
        variants={sidebarItemVariants}
        className="w-full flex flex-col items-center relative z-10 shrink-0 pt-2.5 border-t border-slate-200/70 dark:border-white/[0.08] space-y-2"
      >
        <motion.button
          type="button"
          whileHover={{ scale: 1.04, y: -1 }}
          whileTap={{ scale: 0.95 }}
          onClick={onToggleTheme}
          aria-label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          className="w-full max-w-[185px] inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl border border-indigo-500/30 dark:border-cyan-400/35 bg-white dark:bg-[#131C2E] font-mono text-xs font-semibold text-[#0F172A] dark:text-white hover:border-[#4F46E5] dark:hover:border-[#38BDF8] transition-colors cursor-pointer shadow-xs whitespace-nowrap"
        >
          <motion.span
            key={theme}
            initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 360, damping: 22 }}
          >
            {theme === 'dark' ? (
              <Sun className="w-3.5 h-3.5 text-amber-400" />
            ) : (
              <Moon className="w-3.5 h-3.5 text-indigo-600" />
            )}
          </motion.span>
          <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
        </motion.button>

        <p className="font-mono text-[10px] text-slate-400 dark:text-slate-500">
          © {new Date().getFullYear()} Ashutosh Singh
        </p>
      </motion.div>
    </motion.div>
  );

  return (
    <>
      {/* Mobile & Tablet Top Bar */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.35 }}
        className="lg:hidden fixed top-0 inset-x-0 z-50 h-15 bg-white/95 dark:bg-[#0B0F1A]/95 backdrop-blur-xl border-b border-slate-200/80 dark:border-white/10 px-4 flex items-center justify-between"
      >
        <div className="flex items-center gap-2.5">
          <img
            src="./dp.jpg"
            alt="Ashutosh Singh"
            referrerPolicy="no-referrer"
            className="w-8 h-8 rounded-full object-cover border border-indigo-500/30 dark:border-cyan-400/30"
          />
          <span className="font-display text-sm font-bold text-[#0F172A] dark:text-white whitespace-nowrap">
            Ashutosh Singh
          </span>
        </div>

        <div className="flex items-center gap-2">
          <motion.button
            type="button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.94 }}
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-white/15 bg-slate-50 dark:bg-[#131C2E] font-mono text-[11px] font-semibold text-slate-700 dark:text-white cursor-pointer whitespace-nowrap"
          >
            {theme === 'dark' ? (
              <>
                <Sun className="w-3.5 h-3.5 text-amber-400" />
                <span>Light</span>
              </>
            ) : (
              <>
                <Moon className="w-3.5 h-3.5 text-indigo-600" />
                <span>Dark</span>
              </>
            )}
          </motion.button>

          <motion.button
            type="button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.94 }}
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle navigation drawer"
            className="p-2 rounded-lg border border-slate-200 dark:border-white/15 bg-slate-50 dark:bg-[#131C2E] text-slate-700 dark:text-white cursor-pointer"
          >
            {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </motion.button>
        </div>
      </motion.div>

      {/* Mobile Animated Slide-Over Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="lg:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-xs"
            onClick={() => setMobileOpen(false)}
          >
            <motion.aside
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="w-[270px] h-dvh bg-[#F8FAFC] dark:bg-[#0B0F1A] border-r border-slate-200/80 dark:border-white/10 pt-15 overflow-hidden flex flex-col justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {renderSidebarContent()}
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Left Sticky Sidebar */}
      <aside className="hidden lg:flex flex-col justify-center w-[275px] xl:w-[295px] shrink-0 h-dvh max-h-dvh sticky top-0 bg-[#F8FAFC] dark:bg-[#0B0F1A] border-r border-slate-200/80 dark:border-white/[0.08] overflow-hidden select-none transition-colors duration-300">
        {renderSidebarContent()}
      </aside>
    </>
  );
};
