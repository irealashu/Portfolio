import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [isFinePointer, setIsFinePointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth spring physics for the outer trailing ring
  const ringX = useSpring(cursorX, { stiffness: 420, damping: 28, mass: 0.45 });
  const ringY = useSpring(cursorY, { stiffness: 420, damping: 28, mass: 0.45 });

  // Snappy spring physics for the center precision dot
  const dotX = useSpring(cursorX, { stiffness: 1000, damping: 42, mass: 0.15 });
  const dotY = useSpring(cursorY, { stiffness: 1000, damping: 42, mass: 0.15 });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(pointer: fine)');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    const updatePointerCapability = () => {
      setIsFinePointer(mediaQuery.matches && !reducedMotion.matches);
    };

    updatePointerCapability();
    mediaQuery.addEventListener('change', updatePointerCapability);
    reducedMotion.addEventListener('change', updatePointerCapability);

    return () => {
      mediaQuery.removeEventListener('change', updatePointerCapability);
      reducedMotion.removeEventListener('change', updatePointerCapability);
    };
  }, []);

  useEffect(() => {
    if (!isFinePointer) return;

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest(
          'a, button, input, textarea, select, [role="button"], [role="tab"], article'
        );
        setIsHoveringInteractive(Boolean(interactive));
      }
    };

    const handleMouseDown = () => setIsPressed(true);
    const handleMouseUp = () => setIsPressed(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown, { passive: true });
    window.addEventListener('mouseup', handleMouseUp, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isFinePointer, isVisible, cursorX, cursorY]);

  if (!isFinePointer) return null;

  return (
    <div
      aria-hidden="true"
      data-testid="custom-cursor"
      className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden"
    >
      {/* Outer Trailing Cyber Ring */}
      <motion.div
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isPressed ? 26 : isHoveringInteractive ? 46 : 32,
          height: isPressed ? 26 : isHoveringInteractive ? 46 : 32,
          opacity: isVisible ? 1 : 0,
          scale: isPressed ? 0.9 : 1,
        }}
        transition={{ type: 'spring', stiffness: 420, damping: 28 }}
        className={`fixed top-0 left-0 rounded-full border transition-colors duration-150 ${
          isHoveringInteractive
            ? 'border-[#06B6D4] dark:border-[#38BDF8] bg-[#4F46E5]/10 dark:bg-[#38BDF8]/15 shadow-[0_0_20px_rgba(6,182,212,0.35)]'
            : 'border-[#4F46E5]/70 dark:border-[#38BDF8]/70 bg-transparent'
        }`}
      />

      {/* Inner Precision Core Dot */}
      <motion.div
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isHoveringInteractive ? 6 : 7,
          height: isHoveringInteractive ? 6 : 7,
          opacity: isVisible ? 1 : 0,
          scale: isPressed ? 1.5 : 1,
        }}
        transition={{ type: 'spring', stiffness: 600, damping: 30 }}
        className="fixed top-0 left-0 rounded-full bg-gradient-to-tr from-[#4F46E5] via-[#06B6D4] to-[#10B981] shadow-[0_0_10px_rgba(79,70,229,0.75)]"
      />
    </div>
  );
};
