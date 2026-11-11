import React, { useState } from 'react';
import { Mail, Copy, Check, ArrowUpRight } from 'lucide-react';

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

interface FooterProps {
  onCopySuccess?: (message: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onCopySuccess }) => {
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);

  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText('kshatriya205902@gmail.com');
      setCopiedEmail(true);
      if (onCopySuccess) {
        onCopySuccess('Email address copied to clipboard');
      }
      window.setTimeout(() => {
        setCopiedEmail(false);
      }, 2400);
    } catch {
      // Fallback if clipboard permission denied
    }
  };

  return (
    <footer
      id="contact"
      className="py-20 bg-white dark:bg-[#08090C] text-slate-900 dark:text-[#F9FAFB] transition-colors scroll-mt-24"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <h2
            id="contact-heading"
            className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-[#F9FAFB] mb-3"
          >
            Get in Touch
          </h2>
          <p className="text-base text-slate-600 dark:text-[#9CA3AF] leading-relaxed">
            Connect regarding Cyber &amp; Digital Risk Advisory, Computerized System Validation (CSV), GAMP 5, and 21 CFR Part 11 compliance.
          </p>
        </div>

        {/* 3 Clean Direct Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pb-14 border-b border-slate-200 dark:border-white/[0.08]">
          {/* Email Card */}
          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#161B26]/85 border border-slate-200 dark:border-white/10 flex flex-col justify-between">
            <div>
              <Mail className="w-5 h-5 text-blue-600 dark:text-[#2563EB] mb-3" />
              <h3 className="font-display text-base font-bold text-slate-900 dark:text-[#F9FAFB]">
                Email
              </h3>
              <p className="text-sm text-slate-600 dark:text-[#9CA3AF] truncate mt-1">
                kshatriya205902@gmail.com
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-200 dark:border-white/[0.08] flex items-center justify-between">
              <button
                type="button"
                onClick={copyEmailToClipboard}
                className="inline-flex items-center gap-1.5 font-mono text-xs font-medium text-blue-600 dark:text-[#06B6D4] hover:underline cursor-pointer"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-[#10B981]" />
                    <span className="text-emerald-600 dark:text-[#10B981]">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>

              <a
                href="mailto:kshatriya205902@gmail.com"
                className="font-mono text-xs text-slate-600 dark:text-[#9CA3AF] hover:text-slate-900 dark:hover:text-[#F9FAFB] inline-flex items-center gap-1"
              >
                <span>Send Mail</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* LinkedIn Card */}
          <a
            href="https://www.linkedin.com/in/irealashu/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-slate-50 dark:bg-[#161B26]/85 border border-slate-200 dark:border-white/10 hover:border-blue-500/60 transition-colors flex flex-col justify-between group"
          >
            <div>
              <LinkedinIcon className="w-5 h-5 text-blue-600 dark:text-[#06B6D4] mb-3" />
              <h3 className="font-display text-base font-bold text-slate-900 dark:text-[#F9FAFB]">
                LinkedIn
              </h3>
              <p className="text-sm text-slate-600 dark:text-[#9CA3AF] mt-1">
                linkedin.com/in/irealashu
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-200 dark:border-white/[0.08] font-mono text-xs font-medium text-blue-600 dark:text-[#06B6D4] inline-flex items-center justify-between">
              <span>View Profile</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </a>

          {/* GitHub Profile Card */}
          <a
            href="https://github.com/irealashu"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-slate-50 dark:bg-[#161B26]/85 border border-slate-200 dark:border-white/10 hover:border-emerald-500/60 transition-colors flex flex-col justify-between group"
          >
            <div>
              <GithubIcon className="w-5 h-5 text-emerald-600 dark:text-[#10B981] mb-3" />
              <h3 className="font-display text-base font-bold text-slate-900 dark:text-[#F9FAFB]">
                GitHub
              </h3>
              <p className="text-sm text-slate-600 dark:text-[#9CA3AF] mt-1">
                github.com/irealashu
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-200 dark:border-white/[0.08] font-mono text-xs font-medium text-emerald-600 dark:text-[#10B981] inline-flex items-center justify-between">
              <span>Git Profile</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </a>
        </div>

        {/* Clean Minimal Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-[#9CA3AF]">
          <span>© {new Date().getFullYear()} Ashutosh Singh. All rights reserved.</span>
          <span>Associate — Cyber &amp; Digital Risk Advisory · PwC India</span>
        </div>
      </div>
    </footer>
  );
};
