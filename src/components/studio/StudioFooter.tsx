import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowUp, 
  ExternalLink, 
  MapPin, 
  Check, 
  Copy,
  Lock
} from 'lucide-react';
import { BrandMonogram } from '../ui/BrandMonogram';
import { GithubIcon, LinkedinIcon, InstagramIcon } from '../ui/BrandIcons';
import { contactConfig } from '../../data/contact';
import { getSupabaseStatus } from '../../lib/supabase';

export const StudioFooter: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const status = getSupabaseStatus();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      id="chapter-07" 
      className="pt-20 sm:pt-28 pb-16 bg-gradient-to-b from-paper via-secondary/30 to-paper text-ink relative overflow-hidden border-t border-border-hairline transition-colors duration-250"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Top Folio Strip */}
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono uppercase tracking-widest text-muted pb-6 border-b border-border-hairline">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-coral inline-block animate-pulse shadow-[0_0_8px_rgba(249,115,22,0.6)]" />
            <span className="text-ink font-bold">SECTION 08 // DISPATCH &amp; CONTACT</span>
          </div>

          <div className="flex items-center gap-4 text-muted font-medium">
            <span className="flex items-center gap-1.5 text-ink">
              <MapPin className="w-3.5 h-3.5 text-coral" />
              <span>ADCET ASHTA, MAHARASHTRA</span>
            </span>
            <span className="hidden sm:inline text-muted/40">&bull;</span>
            <span className="hidden sm:inline">16.9482° N, 74.4093° E</span>
          </div>
        </div>

        {/* Closing Headline & Direct Dispatch Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Bold Closing Statement (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-400/30 text-[11px] font-mono font-bold tracking-wider">
                <span>OPEN FOR ENGINEERING DIALOGUE</span>
              </div>

              <h2 className="font-serif text-4xl sm:text-6xl lg:text-[4.75rem] font-normal text-ink leading-[1.02] tracking-tight">
                Curious about systems, <br />
                applied AI tooling, or <br />
                <span className="italic font-serif text-cobalt font-bold bg-gradient-to-r from-cobalt via-violet to-blue-400 bg-clip-text text-transparent">
                  collaborating on a hackathon?
                </span>
              </h2>
            </div>

            <p className="text-base sm:text-lg text-muted font-sans max-w-xl leading-relaxed">
              Available for technical internships, DevSecOps discussions, and collaborative engineering hackathons. Rooted in structured procedural C and applied artificial intelligence.
            </p>

            {/* Direct Email Dispatch Box */}
            <div className="p-6 rounded-2xl bg-surface dark:bg-card border border-border-hairline shadow-xs space-y-4 max-w-xl">
              <div className="flex items-center justify-between text-xs font-mono text-muted">
                <span className="font-bold text-ink uppercase">PRIMARY DIRECT DISPATCH</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold">INBOX CHECKED DAILY</span>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${contactConfig.email}`}
                  className="font-mono text-base sm:text-lg font-bold text-cobalt hover:underline truncate"
                >
                  {contactConfig.email}
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-subtle border border-border-hairline text-xs font-mono font-bold text-ink hover:text-cobalt hover:border-cobalt transition-colors cursor-pointer shadow-2xs active:scale-95"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-muted" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-xs font-mono text-muted">
                Fastest response for engineering inquiries, team invitations, and academic questions.
              </p>
            </div>

            {/* Social Channels */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={contactConfig.profiles.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-surface dark:bg-card border border-border-hairline text-xs font-mono font-bold text-ink hover:text-cobalt hover:border-cobalt/40 transition-colors shadow-2xs"
              >
                <GithubIcon className="w-4 h-4 text-ink" />
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3 text-muted" />
              </a>

              <a
                href={contactConfig.profiles.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-surface dark:bg-card border border-border-hairline text-xs font-mono font-bold text-ink hover:text-cobalt hover:border-cobalt/40 transition-colors shadow-2xs"
              >
                <LinkedinIcon className="w-4 h-4 text-cobalt" />
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 text-muted" />
              </a>

              <a
                href={contactConfig.profiles.instagram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-surface dark:bg-card border border-border-hairline text-xs font-mono font-bold text-ink hover:text-coral hover:border-coral/40 transition-colors shadow-2xs"
              >
                <InstagramIcon className="w-4 h-4 text-coral" />
                <span>@{contactConfig.creativeIdentity}</span>
                <ExternalLink className="w-3 h-3 text-muted" />
              </a>
            </div>
          </div>

          {/* Right Column: Full Directory Ledger (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-surface dark:bg-card border border-border-hairline shadow-xs space-y-6">
              
              <div className="flex items-center justify-between border-b border-border-hairline pb-4">
                <span className="font-mono text-xs font-bold text-ink uppercase tracking-wider">
                  COMPLETE DOSSIER DIRECTORY
                </span>
                <span className="text-[11px] font-mono text-muted">16 ROUTES</span>
              </div>

              {/* Multi-Column Route Directory */}
              <div className="grid grid-cols-2 gap-y-2.5 gap-x-4 text-xs font-mono">
                <Link to="/" className="text-muted hover:text-cobalt transition-colors">01. Studio Home</Link>
                <Link to="/projects" className="text-muted hover:text-cobalt transition-colors">02. All Projects</Link>
                <Link to="/journey" className="text-muted hover:text-cobalt transition-colors">03. Full Journey</Link>
                <Link to="/education" className="text-muted hover:text-cobalt transition-colors">04. Education Record</Link>
                <Link to="/skills" className="text-muted hover:text-cobalt transition-colors">05. Technical Skills</Link>
                <Link to="/achievements" className="text-muted hover:text-cobalt transition-colors">06. Achievements</Link>
                <Link to="/events" className="text-muted hover:text-cobalt transition-colors">07. Hackathons &amp; Events</Link>
                <Link to="/creative" className="text-muted hover:text-cobalt transition-colors">08. Creative Gallery</Link>
                <Link to="/explorations" className="text-muted hover:text-cobalt transition-colors">09. Rides &amp; Expedit.</Link>
                <Link to="/goals" className="text-muted hover:text-cobalt transition-colors">10. Personal Goals</Link>
                <Link to="/career-roadmap" className="text-muted hover:text-cobalt transition-colors">11. Career Roadmap</Link>
                <Link to="/resume" className="text-muted hover:text-cobalt transition-colors">12. ATS Résumé</Link>
                <Link to="/about" className="text-muted hover:text-cobalt transition-colors">13. Full Biography</Link>
                <Link to="/contact" className="text-muted hover:text-cobalt transition-colors">14. Contact Studio</Link>
              </div>

              {/* Owner Workspace Portal Link */}
              <div className="pt-4 border-t border-border-hairline flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2 text-muted">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[11px]">Database: {status.isConfigured ? 'Connected' : 'Offline'}</span>
                </div>

                <Link
                  to="/owner"
                  className="inline-flex items-center gap-1.5 text-muted hover:text-ink text-[11px]"
                >
                  <Lock className="w-3 h-3" />
                  <span>Owner Portal</span>
                </Link>
              </div>

            </div>

            {/* Back to Top Jumper */}
            <button
              type="button"
              onClick={scrollToTop}
              className="w-full p-4 rounded-xl bg-surface dark:bg-card hover:bg-subtle border border-border-hairline text-xs font-mono font-bold text-ink transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-2xs active:scale-98"
            >
              <ArrowUp className="w-4 h-4 text-cobalt" />
              <span>Return to Folio Top</span>
            </button>
          </div>

        </div>

        {/* Bottom Colophon Bar */}
        <div className="pt-8 border-t border-border-hairline flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-muted">
          <div className="flex items-center gap-3">
            <BrandMonogram size={28} />
            <span>
              &copy; {new Date().getFullYear()} {contactConfig.publicDisplayName}. All rights reserved.
            </span>
          </div>

          <p className="text-[11px] text-muted">
            Swiss Editorial Architecture &bull; Built with React, TypeScript &amp; Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  );
};
