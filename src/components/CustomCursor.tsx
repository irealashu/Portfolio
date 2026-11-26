import React, { useEffect, useRef, useState } from 'react';

const isDesktopPointer = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
  window.innerWidth >= 1024;

export const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);

  const [enabled, setEnabled] = useState<boolean>(isDesktopPointer);
  const [isVisible, setIsVisible] = useState(false);
  const [isInteractive, setIsInteractive] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');

    const updateEnabled = () => {
      const next = mediaQuery.matches && window.innerWidth >= 1024;
      setEnabled(next);
      if (!next) {
        setIsVisible(false);
        document.documentElement.classList.remove('custom-cursor-active');
      }
    };

    updateEnabled();
    mediaQuery.addEventListener('change', updateEnabled);
    window.addEventListener('resize', updateEnabled, { passive: true });

    return () => {
      mediaQuery.removeEventListener('change', updateEnabled);
      window.removeEventListener('resize', updateEnabled);
    };
  }, []);

  useEffect(() => {
    if (!enabled) {
      document.documentElement.classList.remove('custom-cursor-active');
      return;
    }

    let hasInitialized = false;

    const handlePointerMove = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') {
        setIsVisible(false);
        hasInitialized = false;
        document.documentElement.classList.remove('custom-cursor-active');
        return;
      }

      if (!hasInitialized) {
        hasInitialized = true;
        setIsVisible(true);
        document.documentElement.classList.add('custom-cursor-active');
      }

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }

      if (e.target && e.target instanceof Element) {
        const interactiveEl = e.target.closest(
          'a, button, input, textarea, select, label, [role="button"], [role="tab"]'
        );
        setIsInteractive(Boolean(interactiveEl));
      }
    };

    const handlePointerDown = (e: PointerEvent) => {
      if (e.pointerType === 'mouse') setIsPressed(true);
    };

    const handlePointerUp = () => setIsPressed(false);

    const handleMouseLeave = () => {
      setIsVisible(false);
      hasInitialized = false;
      document.documentElement.classList.remove('custom-cursor-active');
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerdown', handlePointerDown, { passive: true });
    window.addEventListener('pointerup', handlePointerUp, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.documentElement.classList.remove('custom-cursor-active');
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointerup', handlePointerUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      aria-hidden="true"
      data-testid="custom-cursor"
      className={`pointer-events-none fixed inset-0 z-[99999] overflow-hidden transition-opacity duration-150 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Subtle Ambient Shadow / Aura Follower */}
      <div
        ref={glowRef}
        className="fixed top-0 left-0 w-24 h-24 rounded-full bg-gradient-to-tr from-[#3A4556]/10 to-[#647084]/10 blur-xl will-change-transform"
      />

      {/* Precision Pointer (SVG Arrow + Drop Shadow, No Circle Ring) */}
      <div
        ref={dotRef}
        data-testid="custom-cursor-dot"
        className="fixed top-0 left-0 will-change-transform"
      >
        <div
          className={`relative -translate-x-1 -translate-y-1 transition-transform duration-100 ${
            isPressed ? 'scale-90' : isInteractive ? 'scale-110' : 'scale-100'
          }`}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-[0_2px_6px_rgba(30,36,46,0.38)]"
          >
            <path
              d="M3.5 2.5L20.5 10.2L12.6 12.9L9.8 20.8L3.5 2.5Z"
              fill="url(#cursorGrad)"
              stroke="#FFFFFF"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
            <defs>
              <linearGradient id="cursorGrad" x1="3.5" y1="2.5" x2="20.5" y2="20.8" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#3A4556" />
                <stop offset="100%" stopColor="#1E242E" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CustomCursor;
