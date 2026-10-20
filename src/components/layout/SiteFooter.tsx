import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  ArrowUpRight, 
  Lock,
  Heart
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from '../ui/BrandIcons';
import { contactConfig } from '../../data/contact';
import { getSupabaseStatus } from '../../lib/supabase';

export const SiteFooter: React.FC = () => {
  const status = getSupabaseStatus();

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-800/80">
          
          {/* Brand & Personal Philosophy */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-600/20 border border-cyan-500/40 p-1 flex items-center justify-center">
                <img src="/assets/brand/logo.svg" alt="Harshad Mane" className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="font-heading font-bold text-lg text-white tracking-tight">
                  {contactConfig.publicDisplayName}
                </span>
                <span className="text-xs text-cyan-400 block font-mono">
                  @{contactConfig.creativeIdentity}
                </span>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
              &ldquo;{contactConfig.motto}&rdquo;
            </p>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Computer Science Engineering student at ADCET Ashta. Exploring AI, cybersecurity, DevSecOps, and creative cinematography through practical experimentation.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-2 pt-2">
              <a
                href={contactConfig.profiles.github}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-cyan-500/50 hover:bg-slate-800 transition-all"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={contactConfig.profiles.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-cyan-500/50 hover:bg-slate-800 transition-all"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={contactConfig.profiles.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-cyan-500/50 hover:bg-slate-800 transition-all"
                aria-label="Instagram Creative Profile"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={contactConfig.profiles.behance}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-cyan-500/50 hover:bg-slate-800 transition-all font-bold text-xs"
                aria-label="Behance Portfolio"
              >
                Bē
              </a>
              <a
                href={`mailto:${contactConfig.email}`}
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-cyan-500/50 hover:bg-slate-800 transition-all"
                aria-label="Email Harshad Mane"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Column 1: Projects */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-200 font-semibold">
              Selected Work
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/projects/falcon-404" className="hover:text-cyan-300 transition-colors flex items-center gap-1 group">
                  <span>FALCON-404 (Flagship)</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/projects/arogya-ai" className="hover:text-cyan-300 transition-colors">
                  Arogya AI
                </Link>
              </li>
              <li>
                <Link to="/projects/campus-copilot" className="hover:text-cyan-300 transition-colors">
                  Campus Copilot
                </Link>
              </li>
              <li>
                <Link to="/projects/neuroverse-2k26-website" className="hover:text-cyan-300 transition-colors">
                  Neuroverse 2K26 (Runner-up)
                </Link>
              </li>
              <li>
                <Link to="/projects/gada-electronics" className="hover:text-cyan-300 transition-colors">
                  GADA ELECTRONICS
                </Link>
              </li>
              <li>
                <Link to="/projects/artbook-ai" className="hover:text-cyan-300 transition-colors">
                  ArtBook AI
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-cyan-400 hover:underline">
                  View All Case Studies →
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation Column 2: Foundations & Narrative */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-200 font-semibold">
              Foundations
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/about" className="hover:text-cyan-300 transition-colors">
                  About & Mindset
                </Link>
              </li>
              <li>
                <Link to="/education" className="hover:text-cyan-300 transition-colors">
                  Education History
                </Link>
              </li>
              <li>
                <Link to="/achievements" className="hover:text-cyan-300 transition-colors">
                  Verified Achievements
                </Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-cyan-300 transition-colors">
                  Events & Hackathons
                </Link>
              </li>
              <li>
                <Link to="/journey" className="hover:text-cyan-300 transition-colors">
                  Interactive Journey
                </Link>
              </li>
              <li>
                <Link to="/resume" className="hover:text-cyan-300 transition-colors">
                  ATS Résumé (PDF)
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation Column 3: Creative & Future */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-200 font-semibold">
              Creative & Horizon
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/creative" className="hover:text-cyan-300 transition-colors">
                  Creative Portfolio
                </Link>
              </li>
              <li>
                <Link to="/skills" className="hover:text-cyan-300 transition-colors">
                  Skills & Tools Used
                </Link>
              </li>
              <li>
                <Link to="/career-roadmap" className="hover:text-cyan-300 transition-colors">
                  Career Roadmap (2030)
                </Link>
              </li>
              <li>
                <Link to="/explorations" className="hover:text-cyan-300 transition-colors">
                  India Motorcycle Ambition
                </Link>
              </li>
              <li>
                <Link to="/goals" className="hover:text-cyan-300 transition-colors">
                  Long-Term Goals
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-cyan-300 transition-colors">
                  Contact Information
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Harshad Rajaram Mane.</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              Built with curiosity &amp; resilience <Heart className="w-3 h-3 text-red-500 fill-red-500 inline" />
            </span>
          </div>

          <div className="flex items-center gap-4">
            {/* System Status Pill */}
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-400">
              <span className={`w-1.5 h-1.5 rounded-full ${status.isConfigured ? 'bg-emerald-400' : 'bg-cyan-400'}`} />
              <span>{status.mode}</span>
            </div>

            {/* Owner Workspace Access */}
            <Link
              to="/owner"
              className="flex items-center gap-1 text-slate-400 hover:text-slate-200 transition-colors"
            >
              <Lock className="w-3.5 h-3.5" />
              <span>Owner Workspace</span>
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
