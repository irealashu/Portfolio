import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Share2, Copy, Check } from 'lucide-react';

interface FooterProps {
  onCopySuccess?: (message: string) => void;
}

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
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.4 }}
      >
        <span className="block font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-[#2563EB] dark:text-[#06B6D4] mb-2">
          Get in Touch
        </span>
        <h2 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-[0.14em] text-[#0F172A] dark:text-[#F9FAFB] mb-12">
          Contact
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: 3 Jackson Icon-Box Contact Rows */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.4 }}
          className="lg:col-span-5 space-y-7"
        >
          {/* Email Row */}
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#EBF3FF] dark:bg-[#161B26] border border-blue-200/60 dark:border-white/10 text-[#2563EB] dark:text-[#06B6D4] flex items-center justify-center shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <a
                href="mailto:kshatriya205902@gmail.com"
                className="font-mono text-sm font-medium text-[#2563EB] dark:text-[#06B6D4] hover:underline block truncate"
              >
                kshatriya205902@gmail.com
              </a>
              <button
                type="button"
                onClick={copyEmailToClipboard}
                className="inline-flex items-center gap-1 font-mono text-xs text-slate-500 dark:text-[#9CA3AF] hover:text-[#0F172A] dark:hover:text-white mt-1 cursor-pointer"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#10B981]" />
                    <span className="text-[#10B981]">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy email</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Location Row */}
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#EBF3FF] dark:bg-[#161B26] border border-blue-200/60 dark:border-white/10 text-[#2563EB] dark:text-[#06B6D4] flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="font-sans text-sm font-medium text-[#0F172A] dark:text-[#F9FAFB] leading-relaxed">
                PwC India · Gurugram, Haryana
                <br />
                <span className="font-mono text-xs text-slate-500 dark:text-[#9CA3AF]">
                  Cyber &amp; Digital Risk Advisory
                </span>
              </p>
            </div>
          </div>

          {/* Professional Links Row (LinkedIn & Minimal GitHub Link) */}
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#EBF3FF] dark:bg-[#161B26] border border-blue-200/60 dark:border-white/10 text-[#2563EB] dark:text-[#06B6D4] flex items-center justify-center shrink-0">
              <Share2 className="w-5 h-5" />
            </div>
            <div className="flex flex-col space-y-1 font-mono text-xs sm:text-sm">
              <a
                href="https://www.linkedin.com/in/irealashu/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2563EB] dark:text-[#06B6D4] hover:underline font-medium"
              >
                linkedin.com/in/irealashu
              </a>
              <a
                href="https://github.com/irealashu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-slate-500 dark:text-[#9CA3AF] hover:text-[#2563EB] dark:hover:text-[#06B6D4] transition-colors"
              >
                github.com/irealashu
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Jackson Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.4, delay: 0.08 }}
          className="lg:col-span-7"
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
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
                className="w-full rounded-xl bg-[#F8F9FA] dark:bg-[#161B26]/90 border border-slate-200 dark:border-white/10 px-4 py-3.5 font-sans text-sm text-[#0F172A] dark:text-[#F9FAFB] placeholder:text-slate-400 dark:placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#2563EB] dark:focus:border-[#06B6D4] transition-colors"
              />
            </div>

            <div>
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
                className="w-full rounded-xl bg-[#F8F9FA] dark:bg-[#161B26]/90 border border-slate-200 dark:border-white/10 px-4 py-3.5 font-sans text-sm text-[#0F172A] dark:text-[#F9FAFB] placeholder:text-slate-400 dark:placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#2563EB] dark:focus:border-[#06B6D4] transition-colors"
              />
            </div>

            <div>
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
                className="w-full rounded-xl bg-[#F8F9FA] dark:bg-[#161B26]/90 border border-slate-200 dark:border-white/10 px-4 py-3.5 font-sans text-sm text-[#0F172A] dark:text-[#F9FAFB] placeholder:text-slate-400 dark:placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#2563EB] dark:focus:border-[#06B6D4] transition-colors"
              />
            </div>

            <div>
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
                className="w-full rounded-xl bg-[#F8F9FA] dark:bg-[#161B26]/90 border border-slate-200 dark:border-white/10 px-4 py-3.5 font-sans text-sm text-[#0F172A] dark:text-[#F9FAFB] placeholder:text-slate-400 dark:placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#2563EB] dark:focus:border-[#06B6D4] transition-colors"
              />
            </div>

            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="px-6 py-3.5 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-mono text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer shadow-sm"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
