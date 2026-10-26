import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
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
    <header className="sticky top-0 z-50 w-full border-b border-border-hairline bg-paper/85 dark:bg-[#0B1020]/90 backdrop-blur-md transition-colors duration-250">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

        {/* Brand Signature */}
        <Link to="/" className="flex items-center gap-3.5 group">
          <BrandMonogram size={38} className="shrink-0 transition-transform duration-200 group-hover:scale-105" />
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-semibold tracking-[0.08em] text-sm uppercase text-ink group-hover:text-cobalt transition-colors">
                {contactConfig.publicDisplayName}
              </span>
              <span className="text-[10px] font-mono tracking-wider px-1.5 py-0.5 rounded bg-subtle text-muted border border-border-hairline hidden sm:inline-block">
                {contactConfig.creativeIdentity}
              </span>
            </div>
            <span className="text-[11px] font-mono text-muted tracking-tight hidden md:inline-block">
              CSE Student • AI Builder • DevSecOps
            </span>
          </div>
        </Link>

        {/* Desktop Editorial Navigation */}
        <nav className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full border border-border-hairline bg-surface/90 dark:bg-card/90 shadow-xs backdrop-blur-md">
          {mainNavLinks.map((link) => {
            const active = isActive(link.path);
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-150 ${
                  active
                    ? 'font-bold text-ink'
                    : 'text-muted hover:text-ink hover:bg-subtle/70'
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="header-active-pill"
                    className="absolute inset-0 rounded-full bg-cobalt/10 dark:bg-cobalt/25 border border-cobalt/30 -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {link.name}
              </Link>
            );
          })}

          {/* Explore Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setExploreOpen(!exploreOpen)}
              onBlur={() => setTimeout(() => setExploreOpen(false), 220)}
              className="flex items-center gap-1 px-3.5 py-1.5 rounded-full text-xs text-muted hover:text-ink hover:bg-subtle/70 transition-colors cursor-pointer"
            >
              <span>Explore</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${exploreOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {exploreOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.98 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 mt-3 w-84 rounded-2xl bg-surface dark:bg-card border border-border-medium p-2.5 shadow-2xl z-50 backdrop-blur-xl"
                >
                  <div className="text-[10px] font-mono uppercase tracking-widest text-muted px-3 py-1.5 border-b border-border-hairline mb-1.5 flex items-center justify-between">
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
                          <div className="w-7 h-7 rounded-lg bg-subtle border border-border-hairline flex items-center justify-center shrink-0 text-muted group-hover:text-cobalt group-hover:border-cobalt/30 transition-colors">
                            <Icon className="w-3.5 h-3.5" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-xs font-semibold text-ink group-hover:text-cobalt transition-colors flex items-center justify-between">
                              <span>{item.name}</span>
                              <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-cobalt" />
                            </div>
                            <div className="text-[11px] text-muted truncate">
                              {item.desc}
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* Right Action Bar */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Theme Toggle Button */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            className="p-2.5 rounded-xl border border-border-hairline bg-surface dark:bg-card text-ink hover:border-cobalt/40 hover:bg-subtle transition-all cursor-pointer shadow-2xs group relative"
          >
            <motion.div
              key={theme}
              initial={{ rotate: -90, scale: 0.7, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400 group-hover:text-amber-300 drop-shadow-[0_0_8px_rgba(244,207,114,0.4)]" />
              ) : (
                <Moon className="w-4 h-4 text-cobalt group-hover:text-blue-600 drop-shadow-[0_0_8px_rgba(49,94,235,0.3)]" />
              )}
            </motion.div>
          </button>

          {/* Résumé Action */}
          <Link
            to="/resume"
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-ink text-paper hover:opacity-90 active:scale-95 transition-all shadow-xs"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Résumé</span>
          </Link>

          {/* Discreet Owner OS Lock */}
          <Link
            to="/owner"
            title="Private Owner Workspace"
            className="p-2.5 rounded-xl border border-border-hairline bg-surface dark:bg-card text-muted hover:text-ink hover:border-border-medium transition-colors"
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
            className="p-2 rounded-lg border border-border-hairline bg-surface dark:bg-card text-ink"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-cobalt" />}
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg border border-border-hairline bg-surface dark:bg-card text-ink"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-t border-border-hairline bg-surface/98 dark:bg-card/98 backdrop-blur-xl px-5 pt-4 pb-8 max-h-[85vh] overflow-y-auto space-y-5"
          >
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
                      ? 'font-bold bg-cobalt/10 text-cobalt border border-cobalt/20'
                      : 'text-muted hover:text-ink hover:bg-subtle'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="space-y-1 border-t border-border-hairline pt-4">
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

            <div className="pt-4 border-t border-border-hairline flex items-center justify-between gap-3">
              <Link
                to="/resume"
                onClick={() => setMobileMenuOpen(false)}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-ink text-paper text-xs font-semibold shadow-xs"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>View Résumé</span>
              </Link>
              <Link
                to="/owner"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-border-hairline text-muted text-xs font-medium bg-subtle"
              >
                <Lock className="w-3.5 h-3.5" />
                <span>Owner</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
