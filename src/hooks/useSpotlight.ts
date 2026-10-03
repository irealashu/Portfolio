import React from 'react';

export const handleSpotlightMove = (e: React.MouseEvent<HTMLElement>) => {
  const rect = e.currentTarget.getBoundingClientRect();
  const x = `${e.clientX - rect.left}px`;
  const y = `${e.clientY - rect.top}px`;
  e.currentTarget.style.setProperty('--mouse-x', x);
  e.currentTarget.style.setProperty('--mouse-y', y);
};
