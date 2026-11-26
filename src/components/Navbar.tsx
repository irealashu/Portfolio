import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  ShieldCheck,
  Home,
  User,
  Award,
  Layers,
  GraduationCap,
  Briefcase,
  Cpu,
  Mail,
  ChevronRight,
} from 'lucide-react';
import { PWAInstallButton } from './PWAInstallButton';

interface NavbarProps {
  activeSection: string;
}

const NAV_LINKS = [
  { label: 'Home', href: '#home', id: 'home', Icon: Home },
  { label: 'About', href: '#about', id: 'about', Icon: User },
  { label: 'Expertise', href: '#services', id: 'services', Icon: Award },
  { label: 'Skills', href: '#skills', id: 'skills', Icon: Layers },
  { label: 'Education', href: '#education', id: 'education', Icon: GraduationCap },
  { label: 'Experience', href: '#experience', id: 'experience', Icon: Briefcase },
  { label: 'Systems', href: '#work', id: 'work', Icon: Cpu },
  { label: 'Contact', href: '#contact', id: 'contact', Icon: Mail },
];

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!mobileOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileOpen]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const wasMobileOpen = mobileOpen;
    setMobileOpen(false);
    if (wasMobileOpen) {
      document.body.style.overflow = '';
    }

    const id = href.replace('#', '');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const performScroll = () => {
      const element = document.getElementById(id);
      if (element) {
        const yOffset = window.innerWidth < 1024 ? -68 : 0;
        const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
      }
    };

    if (wasMobileOpen) {
      window.requestAnimationFrame(performScroll);
    } else {
      performScroll();
    }
  };

  return (
    <>
      {/* Mobile & Tablet Top Bar (extends seamlessly behind translucent standalone status bar) */}
      <header className="lg:hidden fixed top-0 inset-x-0 z-50 pt-[env(safe-area-inset-top)] bg-[#E0E5EC]/94 backdrop-blur-xl shadow-[0_6px_16px_rgba(163,173,190,0.40)] border-b border-white/55 px-4">
        <div className="h-16 flex items-center justify-between">
        <a
          href="#home"
          onClick={(e) => scrollToSection(e, '#home')}
          className="flex items-center gap-3 min-w-0"
        >
          <span className="p-0.5 rounded-full neu-avatar-ring shrink-0">
            <img
              src="./dp.jpg"
              alt="Ashutosh Singh"
              width={34}
              height={34}
              fetchPriority="high"
              decoding="async"
              referrerPolicy="no-referrer"
              className="w-8.5 h-8.5 rounded-full object-cover"
            />
          </span>
          <div className="min-w-0">
            <span className="block font-display text-sm font-bold text-[#1D222B] leading-tight truncate">
              Ashutosh Singh
            </span>
            <span className="block font-mono text-[10px] font-medium text-[#555F70] leading-tight truncate">
              Associate - PwC India
            </span>
          </div>
        </a>

        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle navigation drawer"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav-drawer"
          className="w-10 h-10 inline-flex items-center justify-center rounded-xl neu-btn text-[#1D222B] transition-transform duration-150 active:scale-95 cursor-pointer shrink-0"
        >
          <Menu className="w-4.5 h-4.5" />
        </button>
        </div>
      </header>

      {/* Dedicated Mobile Neumorphic Slide-Over Sheet */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 z-[60] flex justify-end bg-[#1D222B]/30 backdrop-blur-xs animate-gpu-fade-in"
          onClick={() => setMobileOpen(false)}
        >
          <div
            id="mobile-nav-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            className="w-[min(82vw,300px)] h-dvh bg-[#E0E5EC] border-l border-white/60 shadow-[-12px_0_28px_rgba(148,158,176,0.48)] flex flex-col animate-gpu-slide-right"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Compact Sheet Header */}
            <div className="pt-[env(safe-area-inset-top)] px-5 shrink-0">
              <div className="flex items-center justify-between gap-3 h-16">
              <div className="min-w-0">
                <p className="font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-[#5E6878]">
                  Navigation
                </p>
                <p className="font-display text-sm font-bold text-[#1D222B] truncate">
                  Ashutosh Singh
                </p>
              </div>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label="Close navigation drawer"
                className="w-10 h-10 inline-flex items-center justify-center rounded-xl neu-btn text-[#1D222B] transition-transform duration-150 active:scale-95 cursor-pointer shrink-0"
              >
                <X className="w-4.5 h-4.5" />
              </button>
              </div>
            </div>

            <div className="px-5">
              <div className="neu-divider" />
            </div>

            {/* Left-Aligned, Thumb-Friendly Navigation Links */}
            <nav
              aria-label="Mobile Navigation"
              className="flex-1 overflow-y-auto px-4 py-4"
            >
              <ul className="space-y-1.5">
                {NAV_LINKS.map((link) => {
                  const isActive = activeSection === link.id;
                  const IconComponent = link.Icon;
                  return (
                    <li key={link.id}>
                      <a
                        href={link.href}
                        aria-current={isActive ? 'location' : undefined}
                        onClick={(e) => scrollToSection(e, link.href)}
                        className={`flex items-center justify-between px-4 py-3 rounded-xl font-sans text-sm transition-transform duration-150 active:scale-98 ${
                          isActive
                            ? 'neu-inset text-[#1D222B] font-semibold'
                            : 'text-[#555F70] font-medium hover:text-[#1D222B]'
                        }`}
                      >
                        <span className="flex items-center gap-3">
                          <IconComponent
                            className={`w-4 h-4 shrink-0 ${
                              isActive ? 'text-[#1D222B]' : 'text-[#667082]'
                            }`}
                          />
                          <span>{link.label}</span>
                        </span>
                        {isActive && (
                          <ChevronRight className="w-4 h-4 text-[#3A4352] shrink-0" />
                        )}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Compact Sheet Footer */}
            <div className="px-5 pt-4 pb-[calc(1rem+env(safe-area-inset-bottom))] shrink-0">
              <div className="neu-divider mb-4" />
              <PWAInstallButton
                onInstalled={() => setMobileOpen(false)}
                className="w-full mb-3.5"
              />
              <p className="font-mono text-[11px] font-medium text-[#4C5564]">
                PwC India · Gurugram
              </p>
              <p className="font-mono text-[10px] text-[#5E6878] mt-0.5">
                © {new Date().getFullYear()} Ashutosh Singh
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Left Sticky Neumorphic Rail */}
      <aside className="hidden lg:flex flex-col justify-center w-[280px] xl:w-[300px] shrink-0 h-dvh sticky top-0 py-6 pl-6 pr-2 select-none">
        <div className="neu-raised rounded-3xl flex flex-col items-center w-full text-center px-5 py-7 overflow-y-auto max-h-[calc(100dvh-3rem)] animate-gpu-fade-up">
          {/* Top Profile Identity Block */}
          <div className="w-full flex flex-col items-center shrink-0">
            <div className="relative mb-4 p-1.5 rounded-full neu-avatar-ring transition-transform duration-200 ease-out hover:scale-103 will-change-transform">
              <img
                src="./dp.jpg"
                alt="Ashutosh Singh"
                width={84}
                height={84}
                fetchPriority="high"
                decoding="async"
                referrerPolicy="no-referrer"
                className="w-20 h-20 rounded-full object-cover"
              />
              <span
                title="Verified Cyber & Digital Risk Practitioner"
                className="absolute bottom-0.5 right-0.5 w-6 h-6 rounded-full neu-btn-accent text-white flex items-center justify-center ring-2 ring-[#E0E5EC]"
              >
                <ShieldCheck className="w-3.5 h-3.5" />
              </span>
            </div>

            <p className="font-display text-lg xl:text-[19px] font-bold tracking-tight text-[#1D222B] leading-snug">
              Ashutosh Singh
            </p>

            <p className="font-mono text-[11px] font-medium tracking-[0.06em] text-[#4C5564] mt-1">
              Associate - PwC India
            </p>

            <p className="font-mono text-[11px] text-[#5E6878] mt-0.5">
              Cyber &amp; Digital Risk · Gurugram
            </p>
          </div>

          <div className="w-full px-1 my-5 shrink-0">
            <div className="neu-divider" />
          </div>

          {/* Center Vertical Navigation Menu (Recessed Concave Active State like Reference) */}
          <nav
            aria-label="Main Navigation"
            className="w-full"
          >
            <ul className="flex flex-col items-center space-y-1.5 w-full">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.id;
                const IconComponent = link.Icon;
                return (
                  <li key={link.id} className="w-full">
                    <a
                      href={link.href}
                      aria-current={isActive ? 'location' : undefined}
                      onClick={(e) => scrollToSection(e, link.href)}
                      className={`flex items-center gap-3 w-full px-4 py-2.5 rounded-xl font-sans text-[13px] leading-tight transition-transform duration-150 ease-out hover:translate-x-0.5 active:scale-98 whitespace-nowrap ${
                        isActive
                          ? 'neu-inset text-[#1D222B] font-semibold'
                          : 'text-[#555F70] font-medium hover:text-[#1D222B]'
                      }`}
                    >
                      <IconComponent
                        className={`w-4 h-4 shrink-0 stroke-[1.6] ${
                          isActive ? 'text-[#1D222B]' : 'text-[#667082]'
                        }`}
                      />
                      <span>{link.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Clean Bottom Install Action & Copyright */}
          <div className="w-full mt-5 shrink-0">
            <div className="neu-divider mb-4" />
            <PWAInstallButton className="w-full mb-3.5" />
            <p className="font-mono text-[10px] text-[#5E6878]">
              © {new Date().getFullYear()} Ashutosh Singh
            </p>
          </div>
        </div>
      </aside>
    </>
  );
};
