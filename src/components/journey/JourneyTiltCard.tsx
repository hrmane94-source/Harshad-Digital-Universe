import React, { useRef, useState, useEffect } from 'react';
import type { JourneyMilestone } from '../../data/journeyTimeline';

interface JourneyTiltCardProps {
  milestone: JourneyMilestone;
  children: React.ReactNode;
  className?: string;
  isLeftAligned?: boolean;
}

export const JourneyTiltCard: React.FC<JourneyTiltCardProps> = ({
  milestone,
  children,
  className = '',
  isLeftAligned = false
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState<number>(0);
  const [rotateY, setRotateY] = useState<number>(0);
  const [glarePos, setGlarePos] = useState<{ x: number; y: number; opacity: number }>({ x: 50, y: 50, opacity: 0 });
  const [isHoverable, setIsHoverable] = useState<boolean>(true);

  useEffect(() => {
    // Check for touch device or reduced motion
    const hoverQuery = window.matchMedia('(hover: hover)');
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const updateCapabilities = () => {
      setIsHoverable(hoverQuery.matches && !motionQuery.matches);
    };

    updateCapabilities();
    hoverQuery.addEventListener('change', updateCapabilities);
    motionQuery.addEventListener('change', updateCapabilities);

    return () => {
      hoverQuery.removeEventListener('change', updateCapabilities);
      motionQuery.removeEventListener('change', updateCapabilities);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isHoverable || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate restrained tilt (max 2.8 degrees)
    const rotX = -((y - centerY) / centerY) * 2.8;
    const rotY = ((x - centerX) / centerX) * 2.8;

    setRotateX(rotX);
    setRotateY(rotY);

    // Calculate glare percentage position
    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;
    setGlarePos({ x: glareX, y: glareY, opacity: 0.18 });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      style={{ perspective: '1100px' }}
      className={`relative w-full ${className}`}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: isHoverable
            ? `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`
            : 'none',
          transition: rotateX === 0 && rotateY === 0 ? 'transform 0.5s ease-out' : 'transform 0.1s ease-out',
          transformStyle: 'preserve-3d'
        }}
        className={`group relative rounded-3xl bg-card border ${milestone.accent.borderClass} p-6 sm:p-8 lg:p-9 shadow-sm hover:shadow-xl hover:shadow-cobalt/5 transition-colors overflow-hidden tech-card`}
      >
        {/* Dynamic Glare Reflection Layer */}
        {isHoverable && (
          <div
            className="pointer-events-none absolute -inset-px rounded-3xl transition-opacity duration-300 z-20"
            style={{
              background: `radial-gradient(circle 260px at ${glarePos.x}% ${glarePos.y}%, rgba(255, 255, 255, ${glarePos.opacity}), transparent 80%)`,
              opacity: glarePos.opacity > 0 ? 1 : 0
            }}
          />
        )}

        {/* Ambient Corner Glow */}
        <div
          className={`pointer-events-none absolute -top-16 ${
            isLeftAligned ? '-left-16' : '-right-16'
          } w-48 h-48 rounded-full bg-gradient-to-br ${milestone.accent.glowClass} blur-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-500`}
        />

        {/* Card Content Layer */}
        <div className="relative z-10 space-y-4">
          {children}
        </div>
      </div>
    </div>
  );
};
