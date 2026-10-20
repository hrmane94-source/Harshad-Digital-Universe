import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  ArrowUp, 
  ExternalLink, 
  MapPin,
  Sun
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
      className="pt-20 sm:pt-28 pb-16 bg-gradient-to-b from-[#FFFDF9] via-[#FAF8F5] to-[#EEF7FF] text-slate-900 relative overflow-hidden border-t border-slate-200/90"
    >
      {/* Radiant Sunlit Background Auras */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(circle, #0284C7 1.5px, transparent 1.5px)', backgroundSize: '36px 36px' }}
      />
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-amber-200/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] rounded-full bg-sky-200/30 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Top Folio Scene Slate */}
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono uppercase tracking-widest text-slate-500 pb-6 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-coral inline-block animate-pulse" />
            <span className="text-slate-900 font-bold">SCENE 08 // THE FINAL FRAME</span>
          </div>

          <div className="flex items-center gap-4 text-slate-500 font-medium">
            <span className="flex items-center gap-1.5 text-slate-700">
              <MapPin className="w-3.5 h-3.5 text-coral" />
              <span>ADCET ASHTA, MAHARASHTRA</span>
            </span>
            <span className="hidden sm:inline">&bull;</span>
            <span className="hidden sm:inline">16.9482° N, 74.4093° E</span>
          </div>
        </div>

        {/* Expressive Editorial Headline & Direct Contact Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Bold Personal Statement (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100/80 border border-amber-300 text-amber-900 text-[11px] font-mono font-bold tracking-wider">
                <Sun className="w-3.5 h-3.5 text-amber-600" />
                <span>CLOSING SCENE &bull; CONTINUOUS FORWARD MOTION</span>
              </div>

              <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.04]">
                Pressure is a privilege.
              </h2>
              <p className="font-serif text-2xl sm:text-3xl text-cobalt font-normal italic">
                Driven enough to build for what comes next.
              </p>
            </div>

            <p className="text-base sm:text-lg text-slate-700 font-sans leading-relaxed max-w-xl font-normal">
              Currently an undergraduate computer science engineer at ADCET Ashta, developing solutions across identity forensics, applied AI systems, and low-level C programming. Open to engineering apprenticeships, hackathons, and technical collaborations.
            </p>

            {/* Direct Email Action Button in Radiant Cobalt */}
            <div className="pt-2">
              <a
                href={`mailto:${contactConfig.email}`}
                className="inline-flex items-center gap-3 px-7 py-4 rounded-2xl bg-cobalt text-white hover:bg-blue-700 text-sm font-mono font-bold uppercase tracking-wider transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 group cursor-pointer"
              >
                <Mail className="w-4 h-4 text-white" />
                <span>Contact Harshad ({contactConfig.email})</span>
                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </a>
            </div>
          </div>

          {/* Right Column: Verified Connect Directory & Brand Identity (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Identity Card in Clean White */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-2xl bg-slate-50 border border-slate-100 shadow-2xs">
                  <BrandMonogram size={48} />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-slate-900">Harshad Rajaram Mane</h3>
                  <p className="text-xs font-mono text-slate-500 font-medium">Digital Universe // Vol. 06</p>
                </div>
              </div>

              {/* Verified Links Stack */}
              <div className="space-y-2 pt-2 border-t border-slate-100">
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold">
                  Verified Networks
                </span>

                <div className="grid grid-cols-1 gap-2 pt-1">
                  <a
                    href={contactConfig.profiles.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 hover:bg-sky-50/60 border border-slate-200 text-xs font-mono font-semibold text-slate-800 transition-colors shadow-2xs"
                  >
                    <span className="flex items-center gap-2.5">
                      <GithubIcon className="w-4 h-4 text-slate-800" />
                      <span>GitHub: hrmane94-source</span>
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  </a>

                  <a
                    href={contactConfig.profiles.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 hover:bg-sky-50/60 border border-slate-200 text-xs font-mono font-semibold text-slate-800 transition-colors shadow-2xs"
                  >
                    <span className="flex items-center gap-2.5">
                      <LinkedinIcon className="w-4 h-4 text-sky-600" />
                      <span>LinkedIn: shivpremi1630</span>
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  </a>

                  <a
                    href="https://www.behance.net/harshadmane11"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 hover:bg-sky-50/60 border border-slate-200 text-xs font-mono font-semibold text-slate-800 transition-colors shadow-2xs"
                  >
                    <span className="flex items-center gap-2.5">
                      <span className="font-bold text-blue-600 text-sm">Bē</span>
                      <span>Behance: harshadmane11</span>
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  </a>

                  <a
                    href="https://www.instagram.com/shiv.premi_1630?cplk=Y3lhemlkZXM2MWhr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 hover:bg-pink-50/60 border border-slate-200 text-xs font-mono font-semibold text-slate-800 transition-colors shadow-2xs"
                  >
                    <span className="flex items-center gap-2.5">
                      <InstagramIcon className="w-4 h-4 text-pink-500" />
                      <span>Instagram: @shiv.premi_1630</span>
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Exhibition Navigation Links */}
            <div className="flex flex-wrap gap-2 text-xs font-mono text-slate-500 font-medium">
              <Link to="/projects" className="hover:text-slate-900 transition-colors">Projects</Link>
              <span>&bull;</span>
              <Link to="/journey" className="hover:text-slate-900 transition-colors">Journey</Link>
              <span>&bull;</span>
              <Link to="/education" className="hover:text-slate-900 transition-colors">Education</Link>
              <span>&bull;</span>
              <Link to="/achievements" className="hover:text-slate-900 transition-colors">Achievements</Link>
              <span>&bull;</span>
              <Link to="/creative" className="hover:text-slate-900 transition-colors">Creative</Link>
              <span>&bull;</span>
              <Link to="/resume" className="hover:text-slate-900 transition-colors">Resume</Link>
              <span>&bull;</span>
              <Link to="/owner" className="hover:text-slate-900 transition-colors">Owner Workspace</Link>
            </div>
          </div>

        </div>

        {/* Colophon & Bottom Copyright */}
        <div className="pt-10 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono text-slate-500">
          <div className="space-y-1 text-center sm:text-left">
            <p>
              &copy; {new Date().getFullYear()} Harshad Rajaram Mane. All rights reserved.
            </p>
            <p className="text-[11px] text-slate-400">
              Engineered with React 18, TypeScript, Tailwind CSS, Vite &amp; Supabase.
            </p>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 hover:text-slate-900 font-bold transition-all cursor-pointer shadow-2xs"
          >
            <span>Back to Scene 01</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
