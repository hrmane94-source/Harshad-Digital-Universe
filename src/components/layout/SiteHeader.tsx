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
  Route,
  Sun,
  Moon,
  ArrowUpRight
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { BrandMonogram } from '../ui/BrandMonogram';
import { contactConfig } from '../../data/contact';

export const SiteHeader: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
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
    { name: 'Achievements & Awards', path: '/achievements', icon: Award, desc: 'Verified competition wins and honors' },
    { name: 'Events & Hackathons', path: '/events', icon: Calendar, desc: 'SIH 2026, Tantraparv, AARAMBH' },
    { name: 'Technical Skills', path: '/skills', icon: Wrench, desc: 'Honest tool competencies & learning' },
    { name: 'Career Roadmap', path: '/career-roadmap', icon: Route, desc: 'DevSecOps & engineering progression' },
    { name: 'Explorations & Rides', path: '/explorations', icon: Compass, desc: 'Motorcycle expedition ambitions' },
    { name: 'Personal Goals', path: '/goals', icon: Target, desc: 'Long-term aspirations & development' },
    { name: 'Education History', path: '/education', icon: GraduationCap, desc: 'ADCET B.Tech CSE & schooling' },
    { name: 'Interactive Résumé', path: '/resume', icon: FileText, desc: 'ATS format & downloadable PDF' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/[0.07] dark:border-white/[0.08] bg-paper/90 dark:bg-paper/90 backdrop-blur-md transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

        {/* Brand Signature */}
        <Link to="/" className="flex items-center gap-3.5 group">
          <BrandMonogram size={38} className="shrink-0 transition-transform duration-200 group-hover:scale-105" />
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-semibold tracking-[0.08em] text-sm uppercase text-ink">
                {contactConfig.publicDisplayName}
              </span>
              <span className="text-[10px] font-mono tracking-wider px-1.5 py-0.5 rounded bg-black/[0.04] dark:bg-white/[0.06] text-muted border border-black/[0.06] dark:border-white/[0.08] hidden sm:inline-block">
                {contactConfig.creativeIdentity}
              </span>
            </div>
            <span className="text-[11px] font-mono text-muted tracking-tight hidden md:inline-block">
              CSE Student • AI Builder • DevSecOps
            </span>
          </div>
        </Link>

        {/* Desktop Editorial Navigation */}
        <nav className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full border border-black/[0.08] dark:border-white/[0.1] bg-surface/80 shadow-xs">
          {mainNavLinks.map((link) => {
            const active = isActive(link.path);
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-1.5 rounded-full text-xs transition-all duration-150 ${
                  active
                    ? 'font-semibold text-ink bg-black/[0.06] dark:bg-white/[0.1]'
                    : 'text-muted hover:text-ink hover:bg-black/[0.03] dark:hover:bg-white/[0.05]'
                }`}
              >
                {link.name}
                {active && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-0.5 rounded-full bg-cobalt" />
                )}
              </Link>
            );
          })}

          {/* Explore Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setExploreOpen(!exploreOpen)}
              onBlur={() => setTimeout(() => setExploreOpen(false), 220)}
              className="flex items-center gap-1 px-3.5 py-1.5 rounded-full text-xs text-muted hover:text-ink hover:bg-black/[0.03] dark:hover:bg-white/[0.05] transition-colors cursor-pointer"
            >
              <span>Explore</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${exploreOpen ? 'rotate-180' : ''}`} />
            </button>

            {exploreOpen && (
              <div className="absolute right-0 mt-3 w-84 rounded-2xl bg-surface border border-black/[0.08] dark:border-white/[0.12] p-2.5 shadow-xl z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="text-[10px] font-mono uppercase tracking-widest text-muted px-3 py-1.5 border-b border-black/[0.06] dark:border-white/[0.08] mb-1.5 flex items-center justify-between">
                  <span>Sections &amp; Records</span>
                  <span className="text-cobalt font-bold">8 Chapters</span>
                </div>
                <div className="space-y-0.5">
                  {exploreLinks.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="flex items-start gap-3 p-2 rounded-xl hover:bg-subtle transition-colors group"
                      >
                        <div className="w-7 h-7 rounded-lg bg-black/[0.03] dark:bg-white/[0.06] border border-black/[0.06] dark:border-white/[0.08] flex items-center justify-center shrink-0 text-muted group-hover:text-cobalt transition-colors">
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs font-semibold text-ink group-hover:text-cobalt transition-colors flex items-center justify-between">
                            <span>{item.name}</span>
                            <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                          <div className="text-[11px] text-muted truncate">
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

        {/* Right Action Bar */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Theme Toggle Button */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            title={theme === 'dark' ? 'Switch to Light Mode (Default)' : 'Switch to Dark Mode'}
            className="p-2 rounded-xl border border-black/[0.08] dark:border-white/[0.1] bg-surface text-ink hover:border-black/[0.2] dark:hover:border-white/[0.3] transition-all cursor-pointer"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-cobalt" />
            )}
          </button>

          {/* Résumé Action */}
          <Link
            to="/resume"
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-ink text-paper hover:opacity-90 transition-opacity shadow-xs"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Résumé</span>
          </Link>

          {/* Discreet Owner OS Lock */}
          <Link
            to="/owner"
            title="Private Owner Workspace"
            className="p-2 rounded-xl border border-black/[0.08] dark:border-white/[0.1] text-muted hover:text-ink hover:border-black/[0.2] dark:hover:border-white/[0.3] transition-colors"
          >
            <Lock className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Header Controls */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="p-2 rounded-lg border border-black/[0.08] dark:border-white/[0.1] bg-surface text-ink"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-cobalt" />}
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg border border-black/[0.08] dark:border-white/[0.1] bg-surface text-ink"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-black/[0.08] dark:border-white/[0.1] bg-surface/98 backdrop-blur-xl px-5 pt-4 pb-8 max-h-[85vh] overflow-y-auto space-y-5 animate-in fade-in duration-150">
          <div className="space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-widest text-muted px-2 block mb-1">
              Main Pages
            </span>
            {mainNavLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-xl text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'font-bold bg-black/[0.06] dark:bg-white/[0.1] text-ink'
                    : 'text-muted hover:text-ink'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="space-y-1 border-t border-black/[0.08] dark:border-white/[0.1] pt-4">
            <span className="text-[10px] font-mono uppercase tracking-widest text-muted px-2 block mb-1">
              Explore Collections
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
              {exploreLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs text-muted hover:text-ink hover:bg-subtle"
                  >
                    <Icon className="w-3.5 h-3.5 text-cobalt shrink-0" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="pt-4 border-t border-black/[0.08] dark:border-white/[0.1] flex items-center justify-between gap-3">
            <Link
              to="/resume"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-ink text-paper text-xs font-semibold"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>View Résumé</span>
            </Link>
            <Link
              to="/owner"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-black/[0.08] dark:border-white/[0.1] text-muted text-xs font-medium"
            >
              <Lock className="w-3.5 h-3.5" />
              <span>Owner</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
