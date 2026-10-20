import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  ArrowUp, 
  ExternalLink, 
  MapPin
} from 'lucide-react';
import { BrandMonogram } from '../ui/BrandMonogram';
import { GithubIcon, LinkedinIcon, InstagramIcon } from '../ui/BrandIcons';
import { contactConfig } from '../../data/contact';

export const ClosingSceneChapter: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      id="chapter-07" 
      className="pt-24 sm:pt-36 pb-16 bg-neutral-950 text-neutral-100 relative overflow-hidden border-t border-white/10"
    >
      {/* Subtle architectural background texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Top Folio Annotation Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono uppercase tracking-widest text-neutral-400 pb-8 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cobalt inline-block" />
            <span className="text-white font-semibold">CHAPTER 07 // FINALE & COLOPHON</span>
          </div>

          <div className="flex items-center gap-4 text-neutral-400">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-coral" />
              <span>ADCET ASHTA, MAHARASHTRA</span>
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">16.9482° N, 74.4093° E</span>
          </div>
        </div>

        {/* Expressive Editorial Headline & Direct Contact Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Bold Personal Statement (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-[11px] font-mono uppercase tracking-widest text-cobalt font-semibold">
                END OF EXHIBITION // CONTINUOUS INQUIRY
              </span>
              <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05]">
                Pressure is a privilege.
              </h2>
              <p className="font-serif text-2xl sm:text-3xl text-neutral-400 font-normal italic">
                Driven enough to build for what comes next.
              </p>
            </div>

            <p className="text-sm sm:text-base text-neutral-300 font-sans leading-relaxed max-w-xl">
              Currently an undergraduate computer science engineer at ADCET Ashta, developing solutions across identity forensics, applied AI systems, and low-level C programming. Open to engineering apprenticeships, hackathons, and technical collaborations.
            </p>

            {/* Direct Email Action Button */}
            <div className="pt-2">
              <a
                href={`mailto:${contactConfig.email}`}
                className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-white text-neutral-950 hover:bg-neutral-200 text-sm font-mono font-semibold transition-all shadow-md group cursor-pointer"
              >
                <Mail className="w-4 h-4 text-cobalt" />
                <span>Contact Harshad ({contactConfig.email})</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>

          {/* Right Column: Verified Connect Directory & Brand Identity (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Identity Card */}
            <div className="bg-neutral-900/80 rounded-2xl p-6 sm:p-8 border border-white/10 space-y-6">
              <div className="flex items-center gap-4">
                <BrandMonogram size={48} />
                <div>
                  <h3 className="font-serif text-lg font-bold text-white">Harshad Rajaram Mane</h3>
                  <p className="text-xs font-mono text-neutral-400">Digital Universe // Vol. 05</p>
                </div>
              </div>

              {/* Verified Links Stack */}
              <div className="space-y-2 pt-2 border-t border-white/10">
                <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
                  Verified Networks
                </span>

                <div className="grid grid-cols-1 gap-2 pt-1">
                  <a
                    href={contactConfig.profiles.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs font-mono text-neutral-200 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <GithubIcon className="w-4 h-4" />
                      <span>GitHub: hrmane94-source</span>
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-neutral-400" />
                  </a>

                  <a
                    href={contactConfig.profiles.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs font-mono text-neutral-200 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <LinkedinIcon className="w-4 h-4 text-sky-400" />
                      <span>LinkedIn: shivpremi1630</span>
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-neutral-400" />
                  </a>

                  <a
                    href="https://www.behance.net/harshadmane11"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs font-mono text-neutral-200 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <span className="font-bold text-blue-400">Bē</span>
                      <span>Behance: harshadmane11</span>
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-neutral-400" />
                  </a>

                  <a
                    href="https://www.instagram.com/shiv.premi_1630?cplk=Y3lhemlkZXM2MWhr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs font-mono text-neutral-200 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <InstagramIcon className="w-4 h-4 text-pink-400" />
                      <span>Instagram: @shiv.premi_1630</span>
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-neutral-400" />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Exhibition Navigation Links */}
            <div className="flex flex-wrap gap-2 text-xs font-mono text-neutral-400">
              <Link to="/projects" className="hover:text-white transition-colors">Projects</Link>
              <span>•</span>
              <Link to="/journey" className="hover:text-white transition-colors">Journey</Link>
              <span>•</span>
              <Link to="/education" className="hover:text-white transition-colors">Education</Link>
              <span>•</span>
              <Link to="/achievements" className="hover:text-white transition-colors">Achievements</Link>
              <span>•</span>
              <Link to="/creative" className="hover:text-white transition-colors">Creative</Link>
              <span>•</span>
              <Link to="/resume" className="hover:text-white transition-colors">Resume</Link>
              <span>•</span>
              <Link to="/owner" className="hover:text-white transition-colors">Owner Workspace</Link>
            </div>
          </div>

        </div>

        {/* Colophon & Bottom Copyright */}
        <div className="pt-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono text-neutral-400">
          <div className="space-y-1 text-center sm:text-left">
            <p>
              &copy; {new Date().getFullYear()} Harshad Rajaram Mane. All rights reserved.
            </p>
            <p className="text-[11px] text-neutral-400">
              Engineered with React 18, TypeScript, Tailwind CSS, Vite & Supabase.
            </p>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-neutral-300 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to Prologue</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
