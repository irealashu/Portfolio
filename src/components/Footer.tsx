import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Check, Copy, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onCopySuccess?: (message: string) => void;
}

const LinkedinIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
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

const GithubIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
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

export const Footer: React.FC<FooterProps> = ({ onCopySuccess }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText('kshatriya205902@gmail.com');
      setCopiedEmail(true);
      if (onCopySuccess) {
        onCopySuccess('Email address copied to clipboard');
      }
      window.setTimeout(() => setCopiedEmail(false), 2400);
    } catch {
      // Ignore clipboard error
    }
  };

  return (
    <section
      id="contact"
      className="px-6 sm:px-12 lg:px-16 py-16 lg:py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.42 }}
      >
        <motion.span
          whileHover={{ x: 3 }}
          className="inline-block font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#4338CA] dark:text-[#38BDF8] mb-2"
        >
          Get in Touch
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.42, delay: 0.05 }}
          className="font-display text-2xl sm:text-[26px] font-bold tracking-tight text-[#0F172A] dark:text-white mb-4"
        >
          Contact
        </motion.h2>
        <p className="font-sans text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed max-w-2xl mb-8">
          Direct channels for Cyber &amp; Digital Risk Advisory, Computerized System Validation (CSV),
          and professional inquiries.
        </p>
      </motion.div>

      {/* 2x2 Grid of Direct Contact Cards (No Mailto Form) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* 1. Direct Email (Click to Copy) Card */}
        <motion.button
          type="button"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.38 }}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.98 }}
          onClick={copyEmailToClipboard}
          className="w-full text-left flex items-center justify-between gap-4 p-5 rounded-2xl bg-slate-50/70 dark:bg-[#131C2E] border border-slate-200 dark:border-white/10 hover:bg-white dark:hover:bg-[#162036] hover:border-[#4338CA]/55 dark:hover:border-[#38BDF8]/55 shadow-2xs hover:shadow-md transition-all cursor-pointer group"
        >
          <div className="flex items-center gap-4 min-w-0">
            <motion.div
              whileHover={{ scale: 1.06 }}
              className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-white/[0.06] border border-indigo-200/70 dark:border-white/10 text-[#4338CA] dark:text-[#38BDF8] flex items-center justify-center shrink-0"
            >
              <Mail className="w-5 h-5" />
            </motion.div>
            <div className="min-w-0">
              <span className="block font-mono text-[10px] font-medium uppercase tracking-wider text-slate-600 dark:text-slate-400">
                Direct Email (Click to Copy)
              </span>
              <span className="font-mono text-xs sm:text-sm font-semibold text-[#0F172A] dark:text-white group-hover:text-[#4338CA] dark:group-hover:text-[#38BDF8] transition-colors block truncate mt-0.5">
                kshatriya205902@gmail.com
              </span>
            </div>
          </div>
          <span className="shrink-0 p-2 rounded-xl bg-slate-200/60 dark:bg-white/5 text-slate-600 dark:text-slate-300">
            {copiedEmail ? (
              <Check className="w-4 h-4 text-[#059669] dark:text-[#34D399]" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </span>
        </motion.button>

        {/* 2. LinkedIn Card */}
        <motion.a
          href="https://www.linkedin.com/in/irealashu/"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.38, delay: 0.05 }}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.98 }}
          className="w-full flex items-center justify-between gap-4 p-5 rounded-2xl bg-slate-50/70 dark:bg-[#131C2E] border border-slate-200 dark:border-white/10 hover:bg-white dark:hover:bg-[#162036] hover:border-[#4338CA]/55 dark:hover:border-[#38BDF8]/55 shadow-2xs hover:shadow-md transition-all group"
        >
          <div className="flex items-center gap-4 min-w-0">
            <motion.div
              whileHover={{ scale: 1.06 }}
              className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-white/[0.06] border border-indigo-200/70 dark:border-white/10 text-[#4338CA] dark:text-[#38BDF8] flex items-center justify-center shrink-0"
            >
              <LinkedinIcon className="w-5 h-5" />
            </motion.div>
            <div className="min-w-0">
              <span className="block font-mono text-[10px] font-medium uppercase tracking-wider text-slate-600 dark:text-slate-400">
                LinkedIn Profile
              </span>
              <span className="font-mono text-xs sm:text-sm font-semibold text-[#0F172A] dark:text-white group-hover:text-[#4338CA] dark:group-hover:text-[#38BDF8] transition-colors block truncate mt-0.5">
                linkedin.com/in/irealashu
              </span>
            </div>
          </div>
          <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-[#4338CA] dark:group-hover:text-[#38BDF8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
        </motion.a>

        {/* 3. GitHub Profile Card */}
        <motion.a
          href="https://github.com/irealashu"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.38, delay: 0.1 }}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.98 }}
          className="w-full flex items-center justify-between gap-4 p-5 rounded-2xl bg-slate-50/70 dark:bg-[#131C2E] border border-slate-200 dark:border-white/10 hover:bg-white dark:hover:bg-[#162036] hover:border-[#4338CA]/55 dark:hover:border-[#38BDF8]/55 shadow-2xs hover:shadow-md transition-all group"
        >
          <div className="flex items-center gap-4 min-w-0">
            <motion.div
              whileHover={{ scale: 1.06 }}
              className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-white/[0.06] border border-indigo-200/70 dark:border-white/10 text-[#4338CA] dark:text-[#38BDF8] flex items-center justify-center shrink-0"
            >
              <GithubIcon className="w-5 h-5" />
            </motion.div>
            <div className="min-w-0">
              <span className="block font-mono text-[10px] font-medium uppercase tracking-wider text-slate-600 dark:text-slate-400">
                Git Profile
              </span>
              <span className="font-mono text-xs sm:text-sm font-semibold text-[#0F172A] dark:text-white group-hover:text-[#4338CA] dark:group-hover:text-[#38BDF8] transition-colors block truncate mt-0.5">
                github.com/irealashu
              </span>
            </div>
          </div>
          <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-[#4338CA] dark:group-hover:text-[#38BDF8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
        </motion.a>

        {/* 4. Location Card */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.38, delay: 0.15 }}
          whileHover={{ y: -3 }}
          className="w-full flex items-center gap-4 p-5 rounded-2xl bg-slate-50/70 dark:bg-[#131C2E] border border-slate-200 dark:border-white/10 shadow-2xs"
        >
          <motion.div
            whileHover={{ scale: 1.06 }}
            className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-white/[0.06] border border-indigo-200/70 dark:border-white/10 text-[#4338CA] dark:text-[#38BDF8] flex items-center justify-center shrink-0"
          >
            <MapPin className="w-5 h-5" />
          </motion.div>
          <div>
            <span className="block font-mono text-[10px] font-medium uppercase tracking-wider text-slate-600 dark:text-slate-400">
              Advisory Location
            </span>
            <p className="font-sans text-sm font-semibold text-[#0F172A] dark:text-white mt-0.5">
              PwC India · Gurugram, Haryana
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
