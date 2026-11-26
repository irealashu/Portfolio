import React, { useState, useRef, useEffect } from 'react';
import { Mail, MapPin, Check, Copy, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onCopySuccess?: (message: string) => void;
}

const EMAIL_ADDRESS = 'kshatriya205902@gmail.com';

const copyTextWithFallback = async (text: string): Promise<boolean> => {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // Fall back for sandboxed iframes or restricted clipboard contexts
    }
  }

  try {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    textarea.style.pointerEvents = 'none';
    document.body.appendChild(textarea);
    textarea.select();
    const copied = document.execCommand('copy');
    document.body.removeChild(textarea);
    return copied;
  } catch {
    return false;
  }
};

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
  const copyTimerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (copyTimerRef.current !== null) {
        window.clearTimeout(copyTimerRef.current);
      }
    };
  }, []);

  const copyEmailToClipboard = async () => {
    const copied = await copyTextWithFallback(EMAIL_ADDRESS);
    if (copied) {
      setCopiedEmail(true);
      onCopySuccess?.('Email address copied to clipboard');
      if (copyTimerRef.current !== null) {
        window.clearTimeout(copyTimerRef.current);
      }
      copyTimerRef.current = window.setTimeout(() => {
        setCopiedEmail(false);
        copyTimerRef.current = null;
      }, 2400);
    } else {
      onCopySuccess?.(`Email: ${EMAIL_ADDRESS}`);
    }
  };

  return (
    <section
      id="contact"
      className="px-5 sm:px-10 lg:px-12 pt-10 pb-16 lg:pt-14 lg:pb-20"
    >
      <div>
        <span className="inline-block font-mono text-xs font-medium uppercase tracking-[0.2em] text-[#5E6878] mb-2">
          Get in Touch
        </span>
        <h2 className="font-display text-2xl sm:text-[28px] font-bold tracking-tight text-[#1D222B] mb-3">
          Contact
        </h2>
        <p className="font-sans text-sm sm:text-base text-[#4C5564] leading-relaxed max-w-2xl mb-8">
          Got a question about CSV, IT risk work or just want to connect? Drop me a note anytime.
        </p>
      </div>

      {/* 2x2 Grid of Tactile Neumorphic Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* 1. Direct Email (Tap to Copy) Card */}
        <button
          type="button"
          onClick={copyEmailToClipboard}
          className="w-full text-left flex items-center justify-between gap-4 p-5 rounded-2xl neu-surface transition-transform duration-200 ease-out hover:-translate-y-1 active:scale-98 will-change-transform cursor-pointer group"
        >
          <div className="flex items-center gap-4 min-w-0">
            <div className="w-12 h-12 rounded-full neu-icon-well text-[#2E3746] flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-105">
              <Mail className="w-5 h-5 stroke-[1.7]" />
            </div>
            <div className="min-w-0">
              <span className="block font-mono text-[10px] font-medium uppercase tracking-wider text-[#5E6878]">
                Email (Tap to Copy)
              </span>
              <span className="font-mono text-xs sm:text-sm font-semibold text-[#1D222B] block truncate mt-0.5">
                kshatriya205902@gmail.com
              </span>
            </div>
          </div>
          <span className="shrink-0 w-9 h-9 rounded-full neu-btn flex items-center justify-center text-[#3A4352]">
            {copiedEmail ? (
              <Check className="w-4 h-4 text-[#1D222B]" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </span>
        </button>

        {/* 2. LinkedIn Card */}
        <a
          href="https://www.linkedin.com/in/irealashu/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-between gap-4 p-5 rounded-2xl neu-surface transition-transform duration-200 ease-out hover:-translate-y-1 active:scale-98 will-change-transform group"
        >
          <div className="flex items-center gap-4 min-w-0">
            <div className="w-12 h-12 rounded-full neu-icon-well text-[#2E3746] flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-105">
              <LinkedinIcon className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <span className="block font-mono text-[10px] font-medium uppercase tracking-wider text-[#5E6878]">
                LinkedIn Profile
              </span>
              <span className="font-mono text-xs sm:text-sm font-semibold text-[#1D222B] block truncate mt-0.5">
                irealashu
              </span>
            </div>
          </div>
          <span className="shrink-0 w-9 h-9 rounded-full neu-btn flex items-center justify-center text-[#3A4352] group-hover:text-[#1D222B]">
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-150" />
          </span>
        </a>

        {/* 3. GitHub Profile Card */}
        <a
          href="https://github.com/irealashu"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-between gap-4 p-5 rounded-2xl neu-surface transition-transform duration-200 ease-out hover:-translate-y-1 active:scale-98 will-change-transform group"
        >
          <div className="flex items-center gap-4 min-w-0">
            <div className="w-12 h-12 rounded-full neu-icon-well text-[#2E3746] flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-105">
              <GithubIcon className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <span className="block font-mono text-[10px] font-medium uppercase tracking-wider text-[#5E6878]">
                Git Profile
              </span>
              <span className="font-mono text-xs sm:text-sm font-semibold text-[#1D222B] block truncate mt-0.5">
                irealashu
              </span>
            </div>
          </div>
          <span className="shrink-0 w-9 h-9 rounded-full neu-btn flex items-center justify-center text-[#3A4352] group-hover:text-[#1D222B]">
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-150" />
          </span>
        </a>

        {/* 4. Location Card */}
        <div className="w-full flex items-center gap-4 p-5 rounded-2xl neu-surface transition-transform duration-200 ease-out hover:-translate-y-1 will-change-transform">
          <div className="w-12 h-12 rounded-full neu-icon-well text-[#2E3746] flex items-center justify-center shrink-0">
            <MapPin className="w-5 h-5 stroke-[1.7]" />
          </div>
          <div>
            <span className="block font-mono text-[10px] font-medium uppercase tracking-wider text-[#5E6878]">
              Location
            </span>
            <p className="font-sans text-sm font-semibold text-[#1D222B] mt-0.5">
              Gurugram, Haryana · PwC India
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
