import React from 'react';
import {
  ShieldAlert,
  Activity,
  Bot,
  Cpu,
  Palette,
  Leaf,
  Globe,
  Layers
} from 'lucide-react';
import type { ProjectCoverArtwork as CoverArtworkType } from '../../types/portfolio';

interface ProjectCoverArtworkProps {
  coverArtwork: CoverArtworkType;
  title: string;
  domain: string;
  importance?: string;
  className?: string;
  aspectRatio?: 'video' | 'square' | 'wide';
}

export const ProjectCoverArtwork: React.FC<ProjectCoverArtworkProps> = ({
  coverArtwork,
  title,
  domain,
  importance,
  className = "",
  aspectRatio = 'video'
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldAlert':
        return ShieldAlert;
      case 'Activity':
        return Activity;
      case 'Bot':
        return Bot;
      case 'Cpu':
        return Cpu;
      case 'Palette':
        return Palette;
      case 'Leaf':
        return Leaf;
      case 'Globe':
        return Globe;
      default:
        return Layers;
    }
  };

  const Icon = getIcon(coverArtwork.iconName);

  const aspectClass =
    aspectRatio === 'square' ? 'aspect-square' :
    aspectRatio === 'wide' ? 'aspect-video sm:aspect-[21/9]' : 'aspect-video';

  // Editorial palette mapping for project types
  const getPalette = () => {
    switch (coverArtwork.type) {
      case 'cyber':
        return {
          bgLight: 'bg-[#F0F4F8] text-[#1E3A8A] border-[#D1DCE8]',
          bgDark: 'dark:bg-[#151922] dark:text-[#93C5FD] dark:border-[#222A38]',
          accentLight: '#1D4ED8',
          accentDark: '#60A5FA',
          label: 'CYBERSECURITY FORENSICS',
          num: '01'
        };
      case 'health':
        return {
          bgLight: 'bg-[#F2F7F6] text-[#0F766E] border-[#D1E5E2]',
          bgDark: 'dark:bg-[#121E1E] dark:text-[#5EEAD4] dark:border-[#1F3333]',
          accentLight: '#0F766E',
          accentDark: '#2DD4BF',
          label: 'HEALTHCARE ANALYTICS',
          num: '02'
        };
      case 'chat':
        return {
          bgLight: 'bg-[#F4F2F8] text-[#5B21B6] border-[#DCD6E8]',
          bgDark: 'dark:bg-[#1A1624] dark:text-[#C4B5FD] dark:border-[#2B233C]',
          accentLight: '#6D28D9',
          accentDark: '#A78BFA',
          label: 'AI CONVERSATIONAL AGENT',
          num: '03'
        };
      case 'marketplace':
        return {
          bgLight: 'bg-[#FAF4ED] text-[#C2410C] border-[#EADACD]',
          bgDark: 'dark:bg-[#201814] dark:text-[#FDBA74] dark:border-[#38261F]',
          accentLight: '#EA580C',
          accentDark: '#FB923C',
          label: 'COMMERCE & WEB DESIGN',
          num: '04'
        };
      case 'eco':
        return {
          bgLight: 'bg-[#F2F7F1] text-[#15803D] border-[#D4E5D2]',
          bgDark: 'dark:bg-[#131C14] dark:text-[#86EFAC] dark:border-[#203022]',
          accentLight: '#16A34A',
          accentDark: '#4ADE80',
          label: 'ENVIRONMENTAL SCIENCE',
          num: '05'
        };
      default:
        return {
          bgLight: 'bg-[#F5F5F7] text-[#374151] border-[#E5E7EB]',
          bgDark: 'dark:bg-[#1A1C20] dark:text-[#D1D5DB] dark:border-[#282B32]',
          accentLight: '#4B5563',
          accentDark: '#9CA3AF',
          label: 'ENGINEERING PROTOTYPE',
          num: '06'
        };
    }
  };

  const palette = getPalette();

  return (
    <div className={`relative ${aspectClass} ${palette.bgLight} ${palette.bgDark} border rounded-xl overflow-hidden p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${className}`}>

      {/* Background Architectural Grid Lines */}
      <div
        className="absolute inset-0 opacity-[0.4] dark:opacity-[0.25] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }}
      />

      {/* Top Metadata Header */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[10px] tracking-widest uppercase font-semibold px-2 py-0.5 rounded-full border border-current/20 bg-white/40 dark:bg-black/20">
            {palette.label}
          </span>
          {importance === 'flagship' && (
            <span className="font-mono text-[10px] font-bold tracking-wider px-2 py-0.5 rounded-full bg-cobalt text-white">
              FLAGSHIP
            </span>
          )}
        </div>
        <span className="font-mono text-xs opacity-60 font-semibold">
          REF #{palette.num}
        </span>
      </div>

      {/* Center Icon & Composition */}
      <div className="relative z-10 my-auto flex flex-col items-center justify-center text-center py-4">
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl border border-current/20 bg-white/60 dark:bg-black/40 backdrop-blur-xs flex items-center justify-center shadow-xs mb-3 group-hover:scale-105 transition-transform duration-300">
          <Icon className="w-7 h-7 sm:w-8 sm:h-8" />
        </div>
        <h4 className="font-serif text-xl sm:text-2xl text-ink font-semibold tracking-tight max-w-sm line-clamp-1">
          {title}
        </h4>
        <span className="text-[11px] font-mono text-muted tracking-wide mt-1">
          {domain}
        </span>
      </div>

      {/* Bottom Editorial Accent Footer */}
      <div className="relative z-10 flex items-center justify-between pt-2 border-t border-current/15 text-[10px] font-mono opacity-70">
        <span>B.Tech Prototype Archive</span>
        <span className="tracking-widest">ADCET CSE // 2026</span>
      </div>

    </div>
  );
};
