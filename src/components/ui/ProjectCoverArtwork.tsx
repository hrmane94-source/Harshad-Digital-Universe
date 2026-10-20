import React from 'react';
import { 
  ShieldAlert, 
  Activity, 
  Bot, 
  Sparkles, 
  Cpu, 
  Palette, 
  Leaf 
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
      default:
        return Sparkles;
    }
  };

  const Icon = getIcon(coverArtwork.iconName);

  const aspectClass = 
    aspectRatio === 'square' ? 'aspect-square' :
    aspectRatio === 'wide' ? 'aspect-video sm:aspect-[21/9]' : 'aspect-video';

  // Distinct procedural themes based on coverArtwork.type
  const getThemeDetails = () => {
    switch (coverArtwork.type) {
      case 'cyber':
        return {
          gradient: 'from-cyan-950/80 via-slate-950 to-blue-950/90',
          accent: '#00f0ff',
          gridColor: 'rgba(0, 240, 255, 0.08)',
          badge: 'CYBERSECURITY & OCR FORENSICS',
          badgeClass: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30'
        };
      case 'health':
        return {
          gradient: 'from-teal-950/80 via-slate-950 to-blue-950/90',
          accent: '#06b6d4',
          gridColor: 'rgba(6, 182, 212, 0.08)',
          badge: 'HEALTHCARE PREDICTIVE ANALYTICS',
          badgeClass: 'bg-teal-500/10 text-teal-300 border-teal-500/30'
        };
      case 'chat':
        return {
          gradient: 'from-blue-950/80 via-slate-950 to-indigo-950/90',
          accent: '#3b82f6',
          gridColor: 'rgba(59, 130, 246, 0.08)',
          badge: 'GROUNDED CAMPUS AI AGENT',
          badgeClass: 'bg-blue-500/10 text-blue-300 border-blue-500/30'
        };
      case 'marketplace':
        return {
          gradient: 'from-amber-950/80 via-slate-950 to-rose-950/90',
          accent: '#f97316',
          gridColor: 'rgba(249, 115, 22, 0.08)',
          badge: 'CREATIVE DISCOVERY MARKETPLACE',
          badgeClass: 'bg-amber-500/10 text-amber-300 border-amber-500/30'
        };
      case 'eco':
        return {
          gradient: 'from-emerald-950/80 via-slate-950 to-slate-950/90',
          accent: '#10b981',
          gridColor: 'rgba(16, 185, 129, 0.08)',
          badge: 'SUSTAINABLE SCIENCE INNOVATION',
          badgeClass: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30'
        };
      default:
        return {
          gradient: 'from-purple-950/80 via-slate-950 to-slate-900/90',
          accent: '#8b5cf6',
          gridColor: 'rgba(139, 92, 246, 0.08)',
          badge: 'CREATIVE WEB ENGINEERING',
          badgeClass: 'bg-purple-500/10 text-purple-300 border-purple-500/30'
        };
    }
  };

  const theme = getThemeDetails();

  return (
    <div className={`relative w-full ${aspectClass} rounded-2xl overflow-hidden border border-slate-800 bg-gradient-to-br ${theme.gradient} flex flex-col justify-between p-6 sm:p-8 select-none group ${className}`}>
      
      {/* Background Graphic Grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40 transition-opacity group-hover:opacity-60"
        style={{
          backgroundImage: `linear-gradient(to right, ${theme.gridColor} 1px, transparent 1px), linear-gradient(to bottom, ${theme.gridColor} 1px, transparent 1px)`,
          backgroundSize: '28px 28px'
        }}
      />

      {/* Luminous Glow Orbs */}
      <div 
        className="absolute top-1/4 right-1/4 w-48 h-48 rounded-full blur-[80px] pointer-events-none transition-transform group-hover:scale-125"
        style={{ backgroundColor: `${theme.accent}20` }}
      />
      <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-blue-600/15 blur-[60px] pointer-events-none" />

      {/* Top Header Badge Row */}
      <div className="relative z-10 flex items-center justify-between gap-2">
        <div className={`px-2.5 py-1 rounded-md text-[10px] font-mono tracking-wider font-semibold border ${theme.badgeClass}`}>
          {theme.badge}
        </div>

        {importance === 'flagship' && (
          <div className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase bg-cyan-400 text-slate-950 font-bold shadow-md shadow-cyan-400/30">
            ★ FLAGSHIP
          </div>
        )}
      </div>

      {/* Center Icon & Geometric Art */}
      <div className="relative z-10 my-auto flex items-center justify-center py-4">
        <div className="relative flex items-center justify-center">
          {/* Concentric subtle rings */}
          <div 
            className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border border-dashed opacity-40 animate-[spin_20s_linear_infinite]"
            style={{ borderColor: theme.accent }}
          />
          <div className="absolute inset-2 rounded-full border border-slate-700/60" />
          
          {/* Central domain icon container */}
          <div 
            className="absolute w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-slate-900/90 border flex items-center justify-center shadow-xl transition-transform group-hover:scale-110"
            style={{ borderColor: `${theme.accent}60`, color: theme.accent }}
          >
            <Icon className="w-7 h-7 sm:w-8 sm:h-8" />
          </div>
        </div>
      </div>

      {/* Bottom Title & Domain info */}
      <div className="relative z-10 space-y-1">
        <h3 className="text-xl sm:text-2xl font-heading font-bold text-white tracking-tight group-hover:text-cyan-200 transition-colors">
          {title}
        </h3>
        <p className="text-xs text-slate-400 line-clamp-1 font-mono">
          {domain}
        </p>
      </div>

      {/* Technical verification watermark */}
      <div className="absolute bottom-2 right-4 text-[9px] font-mono text-slate-400 uppercase tracking-widest pointer-events-none">
        Architectural Design Artwork
      </div>
    </div>
  );
};
