import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'icon' | 'footer' | 'dark-background';
  height?: number | string;
}

export default function Logo({
  className = '',
  variant = 'full',
  height = 60,
}: LogoProps) {
  return (
    <img
      src="/images/logo.png"
      alt="Kasturag Tech Logo"
      style={{ height: `${height}px` }}
      className={`w-auto object-contain ${className}`}
    />
  );
}
