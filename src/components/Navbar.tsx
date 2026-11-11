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
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
};

const sidebarItemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const },
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
      const yOffset = window.innerWidth < 1024 ? -72 : 0;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const renderSidebarContent = () => (
    <motion.div
      variants={sidebarContainerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center justify-between h-full text-center px-6 py-9 relative overflow-hidden"
    >
      {/* Subtle Ambient Top Glow */}
      <motion.div
        aria-hidden="true"
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.35, 0.55, 0.35],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-56 h-56 rounded-full bg-gradient-to-br from-[#4F46E5]/20 via-[#06B6D4]/15 to-transparent blur-2xl"
      />

      {/* Top Profile Identity Block (Non-redundant — no duplicate #home anchor) */}
      <motion.div variants={sidebarItemVariants} className="w-full flex flex-col items-center relative z-10">
        <motion.div
          whileHover={{ scale: 1.05, rotate: 1.5 }}
          transition={{ type: 'spring', stiffness: 320, damping: 20 }}
          className="relative mb-4 p-1 rounded-full bg-gradient-to-tr from-[#4F46E5] via-[#06B6D4] to-[#10B981] shadow-lg shadow-indigo-500/20"
        >
          <img
            src="./dp.jpg"
            alt="Ashutosh Singh"
            className="w-32 h-32 rounded-full object-cover border-2 border-white dark:border-[#0B0F1A]"
          />
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
            title="Verified Cyber & Digital Risk Practitioner"
            className="absolute bottom-1.5 right-1.5 w-6 h-6 rounded-full bg-[#10B981] text-white flex items-center justify-center ring-2 ring-white dark:ring-[#0B0F1A] shadow-sm"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
          </motion.span>
        </motion.div>

        <motion.h1
          variants={sidebarItemVariants}
          whileHover={{ scale: 1.02 }}
          className="font-display text-[22px] font-extrabold tracking-tight bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#334155] dark:from-[#FFFFFF] dark:via-[#E2E8F0] dark:to-[#94A3B8] bg-clip-text text-transparent mb-1.5"
        >
          Ashutosh Singh
        </motion.h1>

        <motion.p
          variants={sidebarItemVariants}
          className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] dark:from-[#38BDF8] dark:to-[#34D399] bg-clip-text text-transparent"
        >
          Cyber &amp; Digital Risk Advisory
        </motion.p>

        <motion.p
          variants={sidebarItemVariants}
          className="font-mono text-[10px] uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400 mt-1"
        >
          PwC India · Gurugram
        </motion.p>
      </motion.div>

      {/* Center Vertical Navigation Menu with Framer Motion Active Pill & Item Micro-Interactions */}
      <nav aria-label="Main Navigation" className="my-5 w-full relative z-10">
        <motion.ul variants={sidebarContainerVariants} className="flex flex-col items-center space-y-1">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <motion.li
                key={link.id}
                variants={sidebarItemVariants}
                className="relative w-full max-w-[190px]"
              >
                <motion.a
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  whileHover={{ x: 4, scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className={`relative z-10 flex items-center justify-center gap-2 w-full px-4 py-1.5 rounded-xl font-sans text-[13px] tracking-[0.02em] transition-colors ${
                    isActive
                      ? 'text-[#4F46E5] dark:text-[#38BDF8] font-semibold'
                      : 'text-slate-600 dark:text-slate-400 hover:text-[#4F46E5] dark:hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="jackson-sidebar-active-pill"
                      className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-indigo-500/10 via-blue-500/10 to-cyan-500/10 dark:from-indigo-500/20 dark:via-cyan-500/15 dark:to-emerald-500/10 border border-indigo-500/25 dark:border-cyan-400/30 shadow-xs"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span>{link.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="jackson-sidebar-dot"
                      className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] dark:from-[#38BDF8] dark:to-[#10B981]"
                    />
                  )}
                </motion.a>
              </motion.li>
            );
          })}
        </motion.ul>
      </nav>

      {/* Bottom Theme Switcher, Live Status Badge & Copyright (No Duplicate Social Links) */}
      <motion.div
        variants={sidebarItemVariants}
        className="w-full flex flex-col items-center relative z-10 space-y-3.5"
      >
        <motion.button
          type="button"
          whileHover={{ scale: 1.04, y: -1 }}
          whileTap={{ scale: 0.95 }}
          onClick={onToggleTheme}
          aria-label={theme === 'dark' ? 'Switch to Light mode' : 'Switch to Dark mode'}
          className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-slate-200/90 dark:border-white/10 bg-white/90 dark:bg-[#131C2E]/90 font-mono text-xs font-medium text-slate-700 dark:text-slate-100 hover:border-[#4F46E5] dark:hover:border-[#38BDF8] transition-colors cursor-pointer shadow-sm"
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

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 font-mono text-[10px] font-medium text-emerald-700 dark:text-emerald-300"
        >
          <motion.span
            animate={{ opacity: [1, 0.35, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1.5 h-1.5 rounded-full bg-[#10B981]"
          />
          <span>GAMP 5 &amp; CSV Validated</span>
        </motion.div>

        <motion.p
          variants={sidebarItemVariants}
          className="font-mono text-[11px] leading-relaxed text-slate-400 dark:text-slate-500 max-w-[210px]"
        >
          © {new Date().getFullYear()} Ashutosh Singh
        </motion.p>
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
        className="lg:hidden fixed top-0 inset-x-0 z-50 h-16 bg-white/90 dark:bg-[#0B0F1A]/90 backdrop-blur-xl border-b border-slate-200/80 dark:border-white/10 px-4 flex items-center justify-between"
      >
        <div className="flex items-center gap-3">
          <motion.img
            whileHover={{ scale: 1.06 }}
            src="./dp.jpg"
            alt="Ashutosh Singh"
            className="w-9 h-9 rounded-full object-cover border border-indigo-500/30 dark:border-cyan-400/30"
          />
          <div>
            <span className="font-display text-sm font-bold text-[#0F172A] dark:text-white block leading-tight">
              Ashutosh Singh
            </span>
            <span className="font-mono text-[10px] uppercase tracking-wider text-[#4F46E5] dark:text-[#38BDF8] block">
              PwC India · Cyber Risk
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <motion.button
            type="button"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.92 }}
            onClick={onToggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-full border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#131C2E] text-slate-700 dark:text-white cursor-pointer"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-indigo-600" />
            )}
          </motion.button>

          <motion.button
            type="button"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.92 }}
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle navigation drawer"
            className="p-2 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#131C2E] text-slate-700 dark:text-white cursor-pointer"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
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
              initial={{ x: -290 }}
              animate={{ x: 0 }}
              exit={{ x: -290 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="w-[285px] h-full bg-[#F8FAFC] dark:bg-[#0B0F1A] border-r border-slate-200/80 dark:border-white/10 pt-14 overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {renderSidebarContent()}
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Left Sticky Sidebar */}
      <aside className="hidden lg:block w-[300px] shrink-0 h-screen sticky top-0 bg-[#F8FAFC] dark:bg-[#0B0F1A] border-x border-slate-200/80 dark:border-white/[0.08] overflow-y-auto select-none transition-colors duration-300">
        {renderSidebarContent()}
      </aside>
    </>
  );
};
