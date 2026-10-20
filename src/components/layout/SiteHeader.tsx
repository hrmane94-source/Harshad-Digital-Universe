import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Lock, 
  FileText, 
  Award, 
  Calendar, 
  Compass, 
  GraduationCap, 
  Target, 
  Wrench, 
  Route 
} from 'lucide-react';
import { contactConfig } from '../../data/contact';

export const SiteHeader: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);
  const location = useLocation();

  const mainNavLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Journey', path: '/journey' },
    { name: 'Creative', path: '/creative' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const exploreLinks = [
    { name: 'Achievements & Awards', path: '/achievements', icon: Award, desc: 'Verified competition wins and academic honors' },
    { name: 'Events & Hackathons', path: '/events', icon: Calendar, desc: 'SIH 2026, Tantraparv, AARAMBH, and symposiums' },
    { name: 'Technical Skills', path: '/skills', icon: Wrench, desc: 'Transparent proficiencies and tool ecosystem' },
    { name: 'Career Roadmap', path: '/career-roadmap', icon: Route, desc: 'Four-year DevSecOps and engineering plan' },
    { name: 'Explorations & Rides', path: '/explorations', icon: Compass, desc: 'Western Ghats and All-India motorcycle ambition' },
    { name: 'Personal Goals', path: '/goals', icon: Target, desc: 'Long-term aspirations and mindset development' },
    { name: 'Education History', path: '/education', icon: GraduationCap, desc: 'ADCET B.Tech CSE, Junior College, Padua High School' },
    { name: 'Interactive Résumé', path: '/resume', icon: FileText, desc: 'ATS-friendly overview & downloadable PDF' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-slate-950/85 backdrop-blur-xl transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Identity */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-600/20 border border-cyan-500/40 p-1 flex items-center justify-center transition-transform group-hover:scale-105">
            <img src="/assets/brand/logo.svg" alt="Harshad Mane Logo" className="w-full h-full object-contain" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-heading font-bold text-lg text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                {contactConfig.publicDisplayName}
              </span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-cyan-950/80 text-cyan-400 border border-cyan-800/60 hidden sm:inline-block">
                {contactConfig.creativeIdentity}
              </span>
            </div>
            <p className="text-xs text-slate-400 hidden sm:block">
              CSE Student • AI Builder • Aspiring DevSecOps
            </p>
          </div>
        </Link>

        {/* Desktop Main Navigation */}
        <nav className="hidden lg:flex items-center gap-1.5 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
          {mainNavLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                isActive(link.path)
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20 font-semibold'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Explore Dropdown Toggle */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setExploreOpen(!exploreOpen)}
              onBlur={() => setTimeout(() => setExploreOpen(false), 200)}
              className="flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors cursor-pointer"
            >
              <span>Explore</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${exploreOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Explore Dropdown Menu */}
            {exploreOpen && (
              <div className="absolute right-0 mt-3 w-80 rounded-2xl bg-slate-900/95 border border-slate-700/80 p-3 shadow-2xl backdrop-blur-2xl z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 px-3 py-1 border-b border-slate-800 mb-1">
                  More Public Sections
                </div>
                <div className="space-y-1">
                  {exploreLinks.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="flex items-start gap-3 p-2 rounded-xl hover:bg-slate-800/70 transition-colors group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-slate-800/90 border border-slate-700 flex items-center justify-center shrink-0 group-hover:border-cyan-500/50 group-hover:text-cyan-400 text-slate-300">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-medium text-slate-200 group-hover:text-white">
                            {item.name}
                          </div>
                          <div className="text-[11px] text-slate-400 line-clamp-1">
                            {item.desc}
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Action Controls */}
        <div className="hidden sm:flex items-center gap-3">
          <Link
            to="/resume"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border border-slate-700 bg-slate-900/80 hover:border-cyan-500/60 hover:text-cyan-300 text-slate-200 text-xs font-medium transition-all"
          >
            <FileText className="w-3.5 h-3.5 text-cyan-400" />
            <span>Résumé</span>
          </Link>

          {/* Discreet Owner Sign-in */}
          <Link
            to="/owner"
            title="Private Owner Workspace"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-800 bg-slate-950/60 hover:border-slate-600 text-slate-400 hover:text-slate-200 text-xs transition-colors"
          >
            <Lock className="w-3.5 h-3.5" />
            <span className="hidden xl:inline">Owner OS</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex sm:hidden items-center gap-2">
          <Link
            to="/owner"
            className="p-2 rounded-lg border border-slate-800 text-slate-400 hover:text-white"
            aria-label="Owner Workspace"
          >
            <Lock className="w-4 h-4" />
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg border border-slate-800 bg-slate-900 text-slate-300 hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-800/80 bg-slate-950/95 backdrop-blur-2xl px-4 pt-3 pb-6 max-h-[85vh] overflow-y-auto">
          <div className="space-y-1 mb-4">
            <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 px-3 py-1">
              Main Menu
            </div>
            {mainNavLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-xl text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-500/30'
                    : 'text-slate-300 hover:bg-slate-900'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="space-y-1 border-t border-slate-800/80 pt-3">
            <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 px-3 py-1">
              Explore Universe
            </div>
            {exploreLinks.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm text-slate-300 hover:bg-slate-900"
                >
                  <Icon className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>

          <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center justify-between">
            <Link
              to="/resume"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-600 text-white text-xs font-semibold"
            >
              <FileText className="w-4 h-4" />
              <span>View Résumé</span>
            </Link>

            <Link
              to="/owner"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-slate-700 text-slate-300 text-xs"
            >
              <Lock className="w-3.5 h-3.5" />
              <span>Owner Workspace</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
