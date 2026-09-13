import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  isLight?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md', isLight = false }) => {
  const iconSizes = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
  };

  return (
    <Link to="/" className={`inline-flex items-center gap-2.5 group select-none ${className}`}>
      {/* Infinity / Loop SVG Mark */}
      <div className={`relative flex items-center justify-center ${iconSizes[size]} transition-transform duration-300 group-hover:scale-105`}>
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm"
        >
          <defs>
            <linearGradient id="loopGradPrimary" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366F1" />
              <stop offset="35%" stopColor="#8B5CF6" />
              <stop offset="70%" stopColor="#EC4899" />
              <stop offset="100%" stopColor="#F97316" />
            </linearGradient>
            <linearGradient id="loopGradGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366F1" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#F97316" stopOpacity="0.8" />
            </linearGradient>
          </defs>

          {/* Background infinity track */}
          <path
            d="M13 14C8.5 14 6 17.5 6 20C6 22.5 8.5 26 13 26C18 26 22 14 27 14C31.5 14 34 17.5 34 20C34 22.5 31.5 26 27 26C22 26 18 14 13 14Z"
            stroke={isLight ? 'rgba(255,255,255,0.2)' : 'rgba(15,15,14,0.1)'}
            strokeWidth="4"
            strokeLinecap="round"
          />

          {/* Vibrant foreground infinity loop path */}
          <path
            d="M13 14C8.5 14 6 17.5 6 20C6 22.5 8.5 26 13 26C18 26 22 14 27 14C31.5 14 34 17.5 34 20C34 22.5 31.5 26 27 26C22 26 18 14 13 14Z"
            stroke="url(#loopGradPrimary)"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeDasharray="60 40"
            className="animate-[spin-slow_12s_linear_infinite]"
            style={{ transformOrigin: '20px 20px' }}
          />

          {/* Center glowing focal point */}
          <circle cx="20" cy="20" r="2.5" fill="url(#loopGradPrimary)" />
        </svg>
      </div>

      {/* Brand Typography */}
      <span className={`font-display font-black tracking-tight ${textSizes[size]} ${isLight ? 'text-white' : 'text-charcoal-900'}`}>
        Career<span className="gradient-loop-text">Loop</span>
      </span>
    </Link>
  );
};
