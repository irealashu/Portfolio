import React, { useEffect, useState } from 'react';
import { WifiOff } from 'lucide-react';

export const OfflineIndicator: React.FC = () => {
  const [isOnline, setIsOnline] = useState(typeof navigator !== 'undefined' ? navigator.onLine : true);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (isOnline) return null;

  return (
    <div className="fixed bottom-20 left-6 z-50 flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-600 text-white text-xs font-semibold shadow-lg shadow-amber-900/30 backdrop-blur-md animate-in fade-in duration-200">
      <WifiOff className="w-3.5 h-3.5 shrink-0 animate-pulse" />
      <span>Offline Mode — Cached offline copy active</span>
    </div>
  );
};
