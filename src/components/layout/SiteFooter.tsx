import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Mail,
  ArrowUpRight,
  Lock,
  ArrowUp
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from '../ui/BrandIcons';
import { BrandMonogram } from '../ui/BrandMonogram';
import { contactConfig } from '../../data/contact';
import { getSupabaseStatus } from '../../lib/supabase';

export const SiteFooter: React.FC = () => {
  const status = getSupabaseStatus();
  const location = useLocation();

  // On the homepage, Chapter 07 (ClosingSceneChapter) serves as the exhibition finale
  if (location.pathname === '/') {
    return null;
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-black/[0.08] dark:border-white/[0.08] bg-paper text-muted text-xs transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-black/[0.06] dark:border-white/[0.08]">

          {/* Brand & Persona */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <BrandMonogram size={36} />
              <div>
                <span className="font-semibold text-ink text-sm tracking-[0.06em] uppercase block">
                  {contactConfig.publicDisplayName}
                </span>
                <span className="text-[11px] font-mono text-muted">
                  @{contactConfig.creativeIdentity}
                </span>
              </div>
            </div>

            <p className="text-ink/80 text-xs italic font-serif text-sm">
              &ldquo;{contactConfig.motto}&rdquo;
            </p>
            <p className="text-muted text-xs leading-relaxed max-w-sm">
              First-year Computer Science Engineering student at ADCET Ashta. Developing software, cybersecurity foundations, and visual cinematography with genuine curiosity.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pt-1">
              <a
                href={contactConfig.profiles.github}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg border border-black/[0.08] dark:border-white/[0.1] bg-surface flex items-center justify-center text-ink hover:text-cobalt hover:border-cobalt transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href={contactConfig.profiles.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg border border-black/[0.08] dark:border-white/[0.1] bg-surface flex items-center justify-center text-ink hover:text-cobalt hover:border-cobalt transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href={contactConfig.profiles.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg border border-black/[0.08] dark:border-white/[0.1] bg-surface flex items-center justify-center text-ink hover:text-coral hover:border-coral transition-colors"
                aria-label="Instagram Creative Profile"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href={contactConfig.profiles.behance}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg border border-black/[0.08] dark:border-white/[0.1] bg-surface flex items-center justify-center text-ink hover:text-cobalt hover:border-cobalt transition-colors font-bold text-[10px]"
                aria-label="Behance Portfolio"
              >
                Bē
              </a>
              <a
                href={`mailto:${contactConfig.email}`}
                className="w-8 h-8 rounded-lg border border-black/[0.08] dark:border-white/[0.1] bg-surface flex items-center justify-center text-ink hover:text-cobalt hover:border-cobalt transition-colors"
                aria-label="Email Harshad Mane"
              >
                <Mail className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Navigation Column 1: Projects */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-mono uppercase tracking-widest text-ink font-semibold">
              Selected Work
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/projects/falcon-404" className="hover:text-ink transition-colors flex items-center gap-1 group">
                  <span>FALCON-404</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/projects/arogya-ai" className="hover:text-ink transition-colors">
                  Arogya AI
                </Link>
              </li>
              <li>
                <Link to="/projects/campus-copilot" className="hover:text-ink transition-colors">
                  Campus Copilot
                </Link>
              </li>
              <li>
                <Link to="/projects/neuroverse-2k26-website" className="hover:text-ink transition-colors">
                  Neuroverse 2K26
                </Link>
              </li>
              <li>
                <Link to="/projects/gada-electronics" className="hover:text-ink transition-colors">
                  Gada Electronics
                </Link>
              </li>
              <li>
                <Link to="/projects/artbook-ai" className="hover:text-ink transition-colors">
                  ArtBook AI
                </Link>
              </li>
              <li>
                <Link to="/projects/eco-friendly-planting-system" className="hover:text-ink transition-colors">
                  Eco-Friendly Planting
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation Column 2: Narrative & Chapters */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-mono uppercase tracking-widest text-ink font-semibold">
              Chapters
            </h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/journey" className="hover:text-ink transition-colors">Personal Journey</Link></li>
              <li><Link to="/education" className="hover:text-ink transition-colors">Education History</Link></li>
              <li><Link to="/achievements" className="hover:text-ink transition-colors">Achievements &amp; Honors</Link></li>
              <li><Link to="/events" className="hover:text-ink transition-colors">Events &amp; Hackathons</Link></li>
              <li><Link to="/skills" className="hover:text-ink transition-colors">Technical Skills</Link></li>
              <li><Link to="/career-roadmap" className="hover:text-ink transition-colors">Career Roadmap</Link></li>
              <li><Link to="/creative" className="hover:text-ink transition-colors">Creative Journal</Link></li>
              <li><Link to="/explorations" className="hover:text-ink transition-colors">Motorcycle Ambitions</Link></li>
              <li><Link to="/goals" className="hover:text-ink transition-colors">Personal Goals</Link></li>
            </ul>
          </div>

          {/* Navigation Column 3: System & Contact */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-mono uppercase tracking-widest text-ink font-semibold">
              Connect &amp; System
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href={`mailto:${contactConfig.email}`} className="text-cobalt font-medium hover:underline">
                  {contactConfig.email}
                </a>
              </li>
              <li>
                <Link to="/contact" className="hover:text-ink transition-colors">
                  Send a Direct Message
                </Link>
              </li>
              <li>
                <Link to="/resume" className="hover:text-ink transition-colors flex items-center gap-1">
                  <span>ATS-Friendly Résumé</span>
                </Link>
              </li>
              <li className="pt-2">
                <Link
                  to="/owner"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-black/[0.08] dark:border-white/[0.1] bg-surface text-ink hover:border-black/[0.2] transition-colors"
                >
                  <Lock className="w-3 h-3 text-muted" />
                  <span>Private Owner OS</span>
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Colophon & Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-muted">
          <div>
            © {new Date().getFullYear()} Harshad Rajaram Mane. Built with React, Vite &amp; Tailwind.
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>{status.mode}</span>
            </span>

            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-ink transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
