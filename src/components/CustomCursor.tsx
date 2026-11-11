import React, { useEffect, useRef, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);

  const [isVisible, setIsVisible] = useState(false);
  const [isInteractive, setIsInteractive] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    let hasInitialized = false;

    const updateCursorPosition = (clientX: number, clientY: number, target: EventTarget | null) => {
      if (!hasInitialized) {
        hasInitialized = true;
        setIsVisible(true);
        document.documentElement.classList.add('custom-cursor-active');
      }

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
      }
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0) translate(-50%, -50%)`;
      }

      if (target && target instanceof Element) {
        const interactiveEl = target.closest(
          'a, button, input, textarea, select, label, [role="button"], [role="tab"], article'
        );
        setIsInteractive(Boolean(interactiveEl));
      }
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (e.pointerType === 'touch') {
        setIsTouchDevice(true);
        document.documentElement.classList.remove('custom-cursor-active');
        return;
      }
      setIsTouchDevice(false);
      updateCursorPosition(e.clientX, e.clientY, e.target);
    };

    const handleMouseMove = (e: MouseEvent) => {
      updateCursorPosition(e.clientX, e.clientY, e.target);
    };

    const handleMouseDown = () => setIsPressed(true);
    const handleMouseUp = () => setIsPressed(false);

    const handleMouseLeave = () => {
      setIsVisible(false);
      hasInitialized = false;
      document.documentElement.classList.remove('custom-cursor-active');
    };

    const handleMouseEnter = (e: MouseEvent) => {
      updateCursorPosition(e.clientX, e.clientY, e.target);
      setIsVisible(true);
      document.documentElement.classList.add('custom-cursor-active');
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown, { passive: true });
    window.addEventListener('mouseup', handleMouseUp, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.documentElement.classList.remove('custom-cursor-active');
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  if (isTouchDevice) return null;

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
        className="fixed top-0 left-0 w-24 h-24 rounded-full bg-gradient-to-tr from-[#4338CA]/12 to-[#0284C7]/12 blur-xl will-change-transform"
      />

      {/* Zero-Latency Precision Pointer (SVG Arrow + Drop Shadow, No Circle Ring) */}
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
            className="drop-shadow-[0_2px_6px_rgba(37,99,235,0.45)]"
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
                <stop offset="0%" stopColor="#4338CA" />
                <stop offset="100%" stopColor="#0284C7" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CustomCursor;
