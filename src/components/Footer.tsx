import React, { useState, useEffect } from 'react';
import {
  Mail,
  Copy,
  Check,
  KeyRound,
  ArrowUpRight,
  Clock,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { GPG_IDENTITY } from '../data/portfolioData';

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
  const [copiedItem, setCopiedItem] = useState<'email' | 'fingerprint' | 'pgp' | null>(null);
  const [showPgpBlock, setShowPgpBlock] = useState<boolean>(false);
  const [istTime, setIstTime] = useState<string>('');

  useEffect(() => {
    const updateClock = () => {
      try {
        const formatter = new Intl.DateTimeFormat('en-IN', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        });
        setIstTime(`${formatter.format(new Date())} IST (UTC+05:30)`);
      } catch {
        setIstTime('IST (UTC+05:30)');
      }
    };
    updateClock();
    const timer = window.setInterval(updateClock, 1000);
    return () => window.clearInterval(timer);
  }, []);

  const copyToClipboard = async (
    value: string,
    type: 'email' | 'fingerprint' | 'pgp',
    toastLabel: string
  ) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedItem(type);
      if (onCopySuccess) {
        onCopySuccess(toastLabel);
      }
      window.setTimeout(() => {
        setCopiedItem((prev) => (prev === type ? null : prev));
      }, 2400);
    } catch {
      // Fallback if clipboard permission denied
    }
  };

  return (
    <footer
      id="contact"
      className="relative pt-24 pb-16 bg-[#08090C] text-[#F9FAFB]"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
        {/* Top Executive Contact Callout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-16 border-b border-white/[0.08]">
          {/* Left 7 Columns: Status & Direct Channels */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2.5 font-mono text-xs text-[#10B981] uppercase tracking-[0.18em] mb-4">
                <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                <span>Available for Advisory &amp; Systems Engineering</span>
              </div>

              <h2
                id="contact-heading"
                className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F9FAFB] leading-[1.08] mb-5"
              >
                Initiate a Verified Conversation.
              </h2>

              <p className="text-base sm:text-lg text-[#9CA3AF] max-w-2xl leading-relaxed mb-8">
                Available for enterprise cyber risk advisory, GAMP 5 / 21 CFR Part 11 computerized system validation, and open-source local-first engineering collaborations.
              </p>
            </div>

            {/* 3 Direct Channel Action Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Email Card with Instant Copy */}
              <div className="p-5 rounded-2xl bg-[#161B26]/85 border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <Mail className="w-4 h-4 text-[#2563EB]" />
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#9CA3AF]">
                      Direct Mail
                    </span>
                  </div>
                  <p className="font-display text-sm font-semibold text-[#F9FAFB] truncate">
                    kshatriya205902@gmail.com
                  </p>
                  <p className="font-mono text-[11px] text-[#9CA3AF] mt-1">
                    Primary Advisory Inbox
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/[0.08] flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      copyToClipboard(
                        'kshatriya205902@gmail.com',
                        'email',
                        'Email address copied to clipboard'
                      )
                    }
                    className="inline-flex items-center gap-1.5 font-mono text-xs text-[#06B6D4] hover:text-[#F9FAFB] transition-colors"
                  >
                    {copiedItem === 'email' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#10B981]" />
                        <span className="text-[#10B981]">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Address</span>
                      </>
                    )}
                  </button>

                  <a
                    href="mailto:kshatriya205902@gmail.com"
                    className="font-mono text-xs text-[#9CA3AF] hover:text-[#F9FAFB] inline-flex items-center gap-1"
                  >
                    <span>Compose</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* LinkedIn Card */}
              <a
                href="https://www.linkedin.com/in/irealashu/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-[#161B26]/85 border border-white/10 hover:border-[#2563EB]/60 transition-colors flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <LinkedinIcon className="w-4 h-4 text-[#06B6D4]" />
                    <ArrowUpRight className="w-4 h-4 text-[#9CA3AF] group-hover:text-[#F9FAFB] transition-colors" />
                  </div>
                  <p className="font-display text-sm font-semibold text-[#F9FAFB]">
                    linkedin.com/in/irealashu
                  </p>
                  <p className="font-mono text-[11px] text-[#9CA3AF] mt-1">
                    PwC India · Executive Profile
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-white/[0.08] font-mono text-xs text-[#06B6D4] group-hover:text-[#F9FAFB] transition-colors">
                  Connect on LinkedIn →
                </div>
              </a>

              {/* GitHub Card */}
              <a
                href="https://github.com/irealashu"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-[#161B26]/85 border border-white/10 hover:border-[#10B981]/60 transition-colors flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <GithubIcon className="w-4 h-4 text-[#10B981]" />
                    <ArrowUpRight className="w-4 h-4 text-[#9CA3AF] group-hover:text-[#F9FAFB] transition-colors" />
                  </div>
                  <p className="font-display text-sm font-semibold text-[#F9FAFB]">
                    github.com/irealashu
                  </p>
                  <p className="font-mono text-[11px] text-[#9CA3AF] mt-1">
                    Open-Source Systems &amp; Tools
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-white/[0.08] font-mono text-xs text-[#10B981] group-hover:text-[#F9FAFB] transition-colors">
                  Explore Repositories →
                </div>
              </a>
            </div>
          </div>

          {/* Right 5 Columns: Cryptographic Identity & GPG Key Block */}
          <div className="lg:col-span-5 rounded-2xl bg-[#0F1219] border border-white/10 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/[0.08]">
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-[#06B6D4]">
                  <KeyRound className="w-4 h-4 text-[#10B981]" />
                  <span>Cryptographic Identity (PGP)</span>
                </div>
                <span className="font-mono text-[11px] text-[#10B981]">
                  {GPG_IDENTITY.keyId}
                </span>
              </div>

              <div className="space-y-4 font-mono text-xs">
                <div>
                  <span className="block text-[10px] uppercase tracking-[0.16em] text-[#9CA3AF] mb-1">
                    Signed UID &amp; Cipher Suite
                  </span>
                  <p className="text-[#F9FAFB] break-all">{GPG_IDENTITY.uid}</p>
                  <p className="text-[#9CA3AF] text-[11px] mt-0.5">{GPG_IDENTITY.algorithm}</p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#08090C] border border-white/[0.08]">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] uppercase tracking-[0.16em] text-[#9CA3AF]">
                      Key Fingerprint
                    </span>
                    <button
                      type="button"
                      onClick={() =>
                        copyToClipboard(
                          GPG_IDENTITY.fingerprint,
                          'fingerprint',
                          'GPG fingerprint copied to clipboard'
                        )
                      }
                      className="inline-flex items-center gap-1 text-[11px] text-[#06B6D4] hover:text-[#F9FAFB]"
                    >
                      {copiedItem === 'fingerprint' ? (
                        <>
                          <Check className="w-3 h-3 text-[#10B981]" />
                          <span className="text-[#10B981]">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                  <p className="text-[#10B981] text-xs tracking-wider leading-relaxed select-all">
                    {GPG_IDENTITY.fingerprint}
                  </p>
                </div>
              </div>

              {/* Expandable Public Key Block */}
              <div className="mt-5">
                <div className="flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setShowPgpBlock((prev) => !prev)}
                    className="inline-flex items-center gap-1.5 font-mono text-xs text-[#9CA3AF] hover:text-[#F9FAFB] transition-colors"
                  >
                    {showPgpBlock ? (
                      <>
                        <ChevronUp className="w-3.5 h-3.5 text-[#06B6D4]" />
                        <span>Hide Public Key Block</span>
                      </>
                    ) : (
                      <>
                        <ChevronDown className="w-3.5 h-3.5 text-[#06B6D4]" />
                        <span>Inspect Public Key Block</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      copyToClipboard(
                        GPG_IDENTITY.publicKeyBlock,
                        'pgp',
                        'PGP public key block copied to clipboard'
                      )
                    }
                    className="inline-flex items-center gap-1.5 font-mono text-xs text-[#06B6D4] hover:text-[#F9FAFB] transition-colors"
                  >
                    {copiedItem === 'pgp' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#10B981]" />
                        <span className="text-[#10B981]">Key Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Armored Key</span>
                      </>
                    )}
                  </button>
                </div>

                {showPgpBlock && (
                  <pre className="mt-3 p-3.5 rounded-xl bg-[#08090C] border border-white/[0.08] font-mono text-[10px] text-[#9CA3AF] overflow-x-auto leading-relaxed">
                    {GPG_IDENTITY.publicKeyBlock}
                  </pre>
                )}
              </div>
            </div>

            {/* Bottom Live IST Telemetry */}
            <div className="mt-6 pt-4 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-2 font-mono text-xs text-[#9CA3AF]">
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#06B6D4]" />
                <span>Gurugram / New Delhi</span>
              </span>
              <span className="text-[#F9FAFB] tabular-nums">{istTime}</span>
            </div>
          </div>
        </div>

        {/* Bottom Colophon & Static Deployment Verification */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs text-[#9CA3AF]">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="text-[#F9FAFB] font-semibold">
              © {new Date().getFullYear()} Ashutosh Singh (irealashu.in)
            </span>
            <span className="text-white/20">·</span>
            <span>All rights reserved.</span>
          </div>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[#9CA3AF]">
            <span className="inline-flex items-center gap-1.5 text-[#10B981]">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>100% Client-Side</span>
            </span>
            <span className="text-white/20">·</span>
            <span>Zero Telemetry</span>
            <span className="text-white/20">·</span>
            <span>Hosted on GitHub Pages</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
