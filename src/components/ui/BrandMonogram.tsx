import React from 'react';

interface BrandMonogramProps {
  className?: string;
  size?: number;
}

/**
 * Custom Editorial HM Signature Monogram
 * Inspired by Swiss typography and contemporary editorial publication marks.
 */
export const BrandMonogram: React.FC<BrandMonogramProps> = ({ 
  className = "w-8 h-8", 
  size = 32 
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Harshad Mane Monogram"
    >
      {/* Outer Editorial Framing Square with chamfered corner */}
      <rect
        x="3"
        y="3"
        width="42"
        height="42"
        rx="6"
        className="stroke-ink/20 dark:stroke-ink/30 transition-colors"
        strokeWidth="1.25"
      />
      
      {/* Fine-line coordinate hairline */}
      <circle cx="6" cy="6" r="1.5" className="fill-cobalt" />
      <circle cx="42" cy="42" r="1" className="fill-coral" />

      {/* Monogram 'H' left vertical stem */}
      <path
        d="M13 14V34"
        className="stroke-ink"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Serifs / Terminals on Left Stem */}
      <path d="M11 14H15" className="stroke-ink" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M11 34H15" className="stroke-ink" strokeWidth="1.5" strokeLinecap="round" />

      {/* Crossbar connecting H to M */}
      <path
        d="M13 24H23"
        className="stroke-ink"
        strokeWidth="2"
      />

      {/* Shared stem between H and M */}
      <path
        d="M23 14V34"
        className="stroke-ink"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path d="M21 14H25" className="stroke-ink" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M21 34H25" className="stroke-ink" strokeWidth="1.5" strokeLinecap="round" />

      {/* 'M' diagonal vertex */}
      <path
        d="M23 16L29.5 28L35 16"
        className="stroke-cobalt"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* 'M' right vertical stem */}
      <path
        d="M35 14V34"
        className="stroke-ink"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path d="M33 14H37" className="stroke-ink" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M33 34H37" className="stroke-ink" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
};
