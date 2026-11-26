import React, { useEffect, useState } from 'react';
import { Download, Share, X } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';

interface PWAInstallButtonProps {
  onInstalled?: () => void;
  className?: string;
}

export const PWAInstallButton: React.FC<PWAInstallButtonProps> = ({
  onInstalled,
  className = '',
}) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState(false);

  useEffect(() => {
    if (!showIOSGuide) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowIOSGuide(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showIOSGuide]);

  if (isInstalled) {
    return null;
  }

  if (isInstallable) {
    return (
      <button
        type="button"
        onClick={async () => {
          const accepted = await install();
          if (accepted) onInstalled?.();
        }}
        className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl neu-btn font-mono text-xs font-semibold text-[#1D222B] transition-transform duration-150 hover:-translate-y-0.5 active:scale-97 cursor-pointer whitespace-nowrap ${className}`}
      >
        <Download className="w-3.5 h-3.5 text-[#2E3746] shrink-0" />
        <span>Install App</span>
      </button>
    );
  }

  if (isIOS) {
    return (
      <>
        <button
          type="button"
          onClick={() => setShowIOSGuide(true)}
          className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl neu-btn font-mono text-xs font-semibold text-[#1D222B] transition-transform duration-150 hover:-translate-y-0.5 active:scale-97 cursor-pointer whitespace-nowrap ${className}`}
        >
          <Download className="w-3.5 h-3.5 text-[#2E3746] shrink-0" />
          <span>Install App</span>
        </button>

        {showIOSGuide && (
          <div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-[#1D222B]/35 backdrop-blur-xs p-5 animate-gpu-fade-in"
            onClick={() => setShowIOSGuide(false)}
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="ios-install-title"
              className="w-full max-w-sm rounded-3xl neu-raised p-6 text-left animate-gpu-scale-in"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between gap-3 mb-4">
                <h3
                  id="ios-install-title"
                  className="font-display text-base font-bold text-[#1D222B]"
                >
                  Install on iPhone or iPad
                </h3>
                <button
                  type="button"
                  onClick={() => setShowIOSGuide(false)}
                  aria-label="Close install instructions"
                  className="w-9 h-9 rounded-full neu-btn inline-flex items-center justify-center text-[#1D222B] cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <ol className="space-y-2.5 font-sans text-sm text-[#4C5564] leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <span className="font-mono text-xs font-semibold text-[#1D222B] mt-0.5">1.</span>
                  <span>
                    Tap the{' '}
                    <strong className="inline-flex items-center gap-1 text-[#1D222B] font-semibold">
                      Share <Share className="w-3.5 h-3.5 inline" />
                    </strong>{' '}
                    button in Safari.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-mono text-xs font-semibold text-[#1D222B] mt-0.5">2.</span>
                  <span>
                    Scroll down and tap <strong className="text-[#1D222B] font-semibold">Add to Home Screen</strong>.
                  </span>
                </li>
              </ol>

              <button
                type="button"
                onClick={() => setShowIOSGuide(false)}
                className="mt-5 w-full py-2.5 rounded-xl neu-btn font-mono text-xs font-semibold text-[#1D222B] cursor-pointer"
              >
                Got it
              </button>
            </div>
          </div>
        )}
      </>
    );
  }

  return null;
};

export default PWAInstallButton;
