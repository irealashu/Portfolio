import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Check, Copy, ArrowUpRight, Send } from 'lucide-react';

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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      formData.subject || `Portfolio Inquiry from ${formData.name || 'Visitor'}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );
    window.location.href = `mailto:kshatriya205902@gmail.com?subject=${subject}&body=${body}`;
    if (onCopySuccess) {
      onCopySuccess('Opening mail client to send message');
    }
  };

  return (
    <section
      id="contact"
      className="px-6 sm:px-12 lg:px-16 py-20 lg:py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.45 }}
      >
        <motion.span
          whileHover={{ x: 3 }}
          className="inline-block font-mono text-[11px] font-semibold uppercase tracking-[0.22em] bg-gradient-to-r from-[#4F46E5] to-[#06B6D4] dark:from-[#38BDF8] dark:to-[#34D399] bg-clip-text text-transparent mb-2"
        >
          Get in Touch
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="font-display text-xl sm:text-2xl font-bold uppercase tracking-[0.14em] text-[#0F172A] dark:text-white mb-12"
        >
          Contact
        </motion.h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: 4 Unique, Deduplicated Animated Contact Cards */}
        <div className="lg:col-span-5 space-y-4">
          {/* 1. Unified Copy Email Card */}
          <motion.button
            type="button"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            whileHover={{ y: -3, scale: 1.015 }}
            whileTap={{ scale: 0.98 }}
            onClick={copyEmailToClipboard}
            className="w-full text-left flex items-center justify-between gap-4 p-4 rounded-2xl bg-gradient-to-b from-white to-slate-50/70 dark:from-[#131C2E] dark:to-[#0D1322] border border-slate-200/90 dark:border-white/10 hover:border-[#4F46E5]/55 dark:hover:border-[#38BDF8]/55 shadow-2xs transition-all cursor-pointer group"
          >
            <div className="flex items-center gap-4 min-w-0">
              <motion.div
                whileHover={{ rotate: 8, scale: 1.1 }}
                className="w-12 h-12 rounded-2xl bg-indigo-500/10 dark:bg-white/[0.06] border border-indigo-500/20 dark:border-white/10 text-[#4F46E5] dark:text-[#38BDF8] flex items-center justify-center shrink-0"
              >
                <Mail className="w-5 h-5" />
              </motion.div>
              <div className="min-w-0">
                <span className="block font-mono text-[10px] uppercase tracking-wider text-slate-400 dark:text-slate-400">
                  Direct Email (Click to Copy)
                </span>
                <span className="font-mono text-xs sm:text-sm font-semibold text-[#0F172A] dark:text-white group-hover:text-[#4F46E5] dark:group-hover:text-[#38BDF8] transition-colors block truncate">
                  kshatriya205902@gmail.com
                </span>
              </div>
            </div>
            <span className="shrink-0 p-2 rounded-xl bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-300">
              {copiedEmail ? (
                <Check className="w-4 h-4 text-[#10B981]" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </span>
          </motion.button>

          {/* 2. Single LinkedIn Card */}
          <motion.a
            href="https://www.linkedin.com/in/irealashu/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.06 }}
            whileHover={{ y: -3, scale: 1.015 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center justify-between gap-4 p-4 rounded-2xl bg-gradient-to-b from-white to-slate-50/70 dark:from-[#131C2E] dark:to-[#0D1322] border border-slate-200/90 dark:border-white/10 hover:border-[#4F46E5]/55 dark:hover:border-[#38BDF8]/55 shadow-2xs transition-all group"
          >
            <div className="flex items-center gap-4 min-w-0">
              <motion.div
                whileHover={{ rotate: 8, scale: 1.1 }}
                className="w-12 h-12 rounded-2xl bg-indigo-500/10 dark:bg-white/[0.06] border border-indigo-500/20 dark:border-white/10 text-[#4F46E5] dark:text-[#38BDF8] flex items-center justify-center shrink-0"
              >
                <LinkedinIcon className="w-5 h-5" />
              </motion.div>
              <div className="min-w-0">
                <span className="block font-mono text-[10px] uppercase tracking-wider text-slate-400">
                  LinkedIn Network
                </span>
                <span className="font-mono text-xs sm:text-sm font-semibold text-[#0F172A] dark:text-white group-hover:text-[#4F46E5] dark:group-hover:text-[#38BDF8] transition-colors block truncate">
                  linkedin.com/in/irealashu
                </span>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#4F46E5] dark:group-hover:text-[#38BDF8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
          </motion.a>

          {/* 3. Single GitHub Profile Card */}
          <motion.a
            href="https://github.com/irealashu"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.12 }}
            whileHover={{ y: -3, scale: 1.015 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center justify-between gap-4 p-4 rounded-2xl bg-gradient-to-b from-white to-slate-50/70 dark:from-[#131C2E] dark:to-[#0D1322] border border-slate-200/90 dark:border-white/10 hover:border-[#4F46E5]/55 dark:hover:border-[#38BDF8]/55 shadow-2xs transition-all group"
          >
            <div className="flex items-center gap-4 min-w-0">
              <motion.div
                whileHover={{ rotate: 8, scale: 1.1 }}
                className="w-12 h-12 rounded-2xl bg-indigo-500/10 dark:bg-white/[0.06] border border-indigo-500/20 dark:border-white/10 text-[#4F46E5] dark:text-[#38BDF8] flex items-center justify-center shrink-0"
              >
                <GithubIcon className="w-5 h-5" />
              </motion.div>
              <div className="min-w-0">
                <span className="block font-mono text-[10px] uppercase tracking-wider text-slate-400">
                  Git Profile
                </span>
                <span className="font-mono text-xs sm:text-sm font-semibold text-[#0F172A] dark:text-white group-hover:text-[#4F46E5] dark:group-hover:text-[#38BDF8] transition-colors block truncate">
                  github.com/irealashu
                </span>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#4F46E5] dark:group-hover:text-[#38BDF8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
          </motion.a>

          {/* 4. Location Card */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.18 }}
            whileHover={{ y: -3, scale: 1.01 }}
            className="w-full flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-b from-white to-slate-50/70 dark:from-[#131C2E] dark:to-[#0D1322] border border-slate-200/90 dark:border-white/10 shadow-2xs"
          >
            <motion.div
              whileHover={{ rotate: 8, scale: 1.1 }}
              className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 text-[#059669] dark:text-[#34D399] flex items-center justify-center shrink-0"
            >
              <MapPin className="w-5 h-5" />
            </motion.div>
            <div>
              <span className="block font-mono text-[10px] uppercase tracking-wider text-slate-400">
                Advisory Location
              </span>
              <p className="font-sans text-sm font-semibold text-[#0F172A] dark:text-white">
                PwC India · Gurugram, Haryana
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Jackson Contact Form with Animated Fields */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="lg:col-span-7"
        >
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl bg-gradient-to-b from-white to-slate-50/70 dark:from-[#131C2E] dark:to-[#0D1322] border border-slate-200/90 dark:border-white/10 p-6 sm:p-8 space-y-4 shadow-sm"
          >
            <motion.div whileHover={{ scale: 1.005 }}>
              <label htmlFor="contact-name" className="sr-only">
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                required
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full rounded-xl bg-[#F8FAFC] dark:bg-[#090D16] border border-slate-200/90 dark:border-white/10 px-4 py-3.5 font-sans text-sm text-[#0F172A] dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-[#4F46E5] dark:focus:border-[#38BDF8] transition-colors"
              />
            </motion.div>

            <motion.div whileHover={{ scale: 1.005 }}>
              <label htmlFor="contact-email" className="sr-only">
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                required
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full rounded-xl bg-[#F8FAFC] dark:bg-[#090D16] border border-slate-200/90 dark:border-white/10 px-4 py-3.5 font-sans text-sm text-[#0F172A] dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-[#4F46E5] dark:focus:border-[#38BDF8] transition-colors"
              />
            </motion.div>

            <motion.div whileHover={{ scale: 1.005 }}>
              <label htmlFor="contact-subject" className="sr-only">
                Subject
              </label>
              <input
                id="contact-subject"
                type="text"
                required
                placeholder="Subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full rounded-xl bg-[#F8FAFC] dark:bg-[#090D16] border border-slate-200/90 dark:border-white/10 px-4 py-3.5 font-sans text-sm text-[#0F172A] dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-[#4F46E5] dark:focus:border-[#38BDF8] transition-colors"
              />
            </motion.div>

            <motion.div whileHover={{ scale: 1.005 }}>
              <label htmlFor="contact-message" className="sr-only">
                Message
              </label>
              <textarea
                id="contact-message"
                rows={4}
                required
                placeholder="Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full rounded-xl bg-[#F8FAFC] dark:bg-[#090D16] border border-slate-200/90 dark:border-white/10 px-4 py-3.5 font-sans text-sm text-[#0F172A] dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-[#4F46E5] dark:focus:border-[#38BDF8] transition-colors"
              />
            </motion.div>

            <motion.button
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#4F46E5] via-[#2563EB] to-[#06B6D4] text-white font-mono text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer shadow-md shadow-indigo-500/20"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Send Message</span>
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
