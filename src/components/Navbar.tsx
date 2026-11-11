import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

const NAV_LINKS = [
  { label: 'Overview', href: '#overview', id: 'overview' },
  { label: 'Advisory', href: '#advisory', id: 'advisory' },
  { label: 'Architecture', href: '#systems', id: 'systems' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -96;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-4 z-50 mx-auto max-w-5xl px-4 sm:px-6">
      <div className="flex items-center justify-between gap-8 backdrop-blur-xl bg-[#08090C]/85 border border-white/10 rounded-full px-6 py-3 shadow-[0_16px_40px_-16px_rgba(0,0,0,0.85)]">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#overview"
          onClick={(e) => scrollToSection(e, '#overview')}
          className="font-display text-base sm:text-lg font-bold tracking-tight text-[#F9FAFB] hover:text-[#06B6D4] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2563EB] rounded-sm"
        >
          Ashutosh Singh
        </a>

        {/* Zone 2: 5 Single-Line Navigation Links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#9CA3AF]"
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`relative py-1 whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2563EB] rounded-sm ${
                  isActive
                    ? 'text-[#F9FAFB] font-semibold after:absolute after:bottom-0 after:inset-x-0 after:h-[2px] after:bg-[#06B6D4]'
                    : 'hover:text-[#F9FAFB] after:absolute after:bottom-0 after:inset-x-0 after:h-[1px] after:bg-white/0 hover:after:bg-white/40 after:transition-colors'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Single Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, '#contact')}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs sm:text-sm font-semibold text-[#F9FAFB] bg-[#2563EB] hover:bg-[#1D4ED8] rounded-full transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#06B6D4]"
          >
            Get in Touch
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-[#0F1219] text-[#F9FAFB] hover:border-[#06B6D4]/50 transition-colors cursor-pointer"
          >
            {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="md:hidden mt-2 rounded-2xl bg-[#0F1219]/95 backdrop-blur-xl border border-white/10 p-4 shadow-2xl">
          <nav aria-label="Mobile Navigation" className="flex flex-col space-y-1">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-[#161B26] text-[#F9FAFB] font-semibold border border-white/10'
                      : 'text-[#9CA3AF] hover:text-[#F9FAFB] hover:bg-[#161B26]/60'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            <div className="pt-2 mt-2 border-t border-white/10">
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="flex items-center justify-center w-full px-4 py-2.5 text-sm font-semibold text-[#F9FAFB] bg-[#2563EB] hover:bg-[#1D4ED8] rounded-xl transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
