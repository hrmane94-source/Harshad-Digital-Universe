import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Compass,
  ArrowRight,
  MapPin,
  Sparkles,
  Heart,
  Eye,
  Mountain
} from 'lucide-react';
import { contactConfig } from '../data/contact';
import { assetConfig } from '../data/assets';
import { AboutSculpturalDimension3D } from '../components/about/AboutSculpturalDimension3D';
import { AboutCuriousCanvas } from '../components/about/AboutCuriousCanvas';
import { AboutPhotoSpread } from '../components/about/AboutPhotoSpread';
import { AboutPersonalSWOT } from '../components/about/AboutPersonalSWOT';
import { creativeGalleryItems } from '../data/gallery';

export const AboutPage: React.FC = () => {
  // Ensure page opens at the very top
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // Authentic landscape panorama asset for Theme C
  const wideRidgePhoto = creativeGalleryItems.find(i => i.id === 'gallery-17');
  const morningHaltPhoto = creativeGalleryItems.find(i => i.id === 'gallery-40');

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF5E6] via-[#F4F1FF] to-[#FFECEA] dark:from-[#0B1020] dark:via-[#10182B] dark:to-[#0B1020] text-ink transition-colors duration-300">
      
      {/* 1. CINEMATIC PERSONAL COVER: MEET THE PERSON */}
      <section className="relative pt-12 sm:pt-20 pb-16 sm:pb-24 border-b border-border-hairline overflow-hidden">
        {/* Soft Ambient Radial Illumination */}
        <div 
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-coral/15 dark:bg-coral/10 blur-3xl pointer-events-none" 
          aria-hidden="true" 
        />
        <div 
          className="absolute top-1/2 -right-32 w-96 h-96 rounded-full bg-cobalt/15 dark:bg-cobalt/10 blur-3xl pointer-events-none" 
          aria-hidden="true" 
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
          
          {/* Supertitle & Core Concept */}
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-coral/10 dark:bg-coral/15 border border-coral/25 text-coral text-xs font-mono font-bold uppercase tracking-widest shadow-2xs">
              <Heart className="w-3.5 h-3.5 fill-coral/20" />
              <span>A PERSONAL PORTRAIT &bull; HARSHAD MANE</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-ink tracking-tight leading-[1.04]">
              MORE THAN WHAT YOU SEE. <br />
              <span className="italic font-normal bg-gradient-to-r from-coral via-amber-500 to-rose-400 bg-clip-text text-transparent">
                &ldquo;There is more to me than what I build.&rdquo;
              </span>
            </h1>

            <p className="text-muted text-base sm:text-lg leading-relaxed font-sans">
              I am Harshad. Curious by nature, drawn to creativity, and always interested in what lies beyond the familiar.
              I enjoy exploring ideas, capturing moments, discovering unfamiliar places, and finding new perspectives on the world around me.
            </p>

            <p className="text-muted text-sm sm:text-base leading-relaxed font-sans">
              I am still figuring things out, still growing, and still discovering what I want to become. I think that being a work in progress is one of the most interesting parts of being me.
            </p>

            {/* Identity Ledger */}
            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-mono text-muted">
              <span className="px-3 py-1 rounded-xl bg-white/80 dark:bg-[#141D35] border border-border-hairline font-bold text-ink shadow-2xs">
                Harshad Rajaram Mane
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-coral" />
                <span>Western Ghats, Maharashtra</span>
              </span>
              <span>&bull;</span>
              <span>Work in Progress</span>
            </div>
          </div>

          {/* Portrait & 3D Sculptural Composition */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4">
            
            {/* Left: Authentic Portrait */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-md group">
                {/* Atmospheric Glow Cards behind portrait */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-coral/25 via-amber-500/20 to-cobalt/25 dark:from-coral/30 dark:via-violet/25 dark:to-cobalt/25 rounded-3xl blur-md opacity-80 group-hover:opacity-100 transition-opacity -rotate-1" />
                
                <div className="relative rounded-3xl overflow-hidden bg-white dark:bg-[#141D35] border-2 border-border-hairline dark:border-white/10 shadow-xl">
                  <img
                    src={assetConfig.identity.portrait}
                    alt="Harshad Mane — Personal Portrait"
                    className="w-full aspect-[4/5] object-cover object-top sm:object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  />
                  
                  {/* Subtle caption overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white space-y-0.5">
                    <span className="font-serif text-lg font-normal">Harshad Mane</span>
                    <p className="text-[11px] font-mono text-white/70">
                      Curious by nature &bull; Captured in Maharashtra
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Abstract 3D Sculptural Dimension Artwork */}
            <div className="lg:col-span-6 flex flex-col justify-center items-center text-center space-y-4">
              <div className="w-full h-72 sm:h-80 relative flex items-center justify-center">
                <AboutSculpturalDimension3D className="w-full h-full" />
              </div>
              <p className="text-xs font-mono text-muted max-w-sm">
                Interactive digital sculpture &bull; Drag to rotate perspective &bull; Multi-dimensional facets of a person
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 2. MAIN STORY CHAPTERS: THE THINGS THAT MAKE ME, ME */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-24">
        
        {/* THEME A: CURIOUS BY NATURE */}
        <section className="space-y-6">
          <AboutCuriousCanvas />
        </section>

        {/* THEME B: THE WORLD THROUGH MY LENS */}
        <AboutPhotoSpread />

        {/* THEME C: ALWAYS LOOKING BEYOND THE FAMILIAR */}
        <section className="space-y-10">
          <div className="space-y-3 max-w-2xl border-b border-border-hairline pb-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase text-teal font-bold tracking-widest">
              <Mountain className="w-3.5 h-3.5" />
              <span>HORIZONS &amp; EXPLORATION</span>
            </div>

            <h3 className="font-serif text-3xl sm:text-5xl text-ink font-normal tracking-tight leading-tight">
              &ldquo;Stepping outside the familiar <br className="hidden sm:inline" />
              <span className="italic text-teal font-normal">to see things differently.&rdquo;</span>
            </h3>

            <p className="text-muted text-sm sm:text-base leading-relaxed font-sans">
              I enjoy finding places I have not seen before, and discovering the details that make an experience memorable. Sometimes it is about the destination. Sometimes it is simply about seeing something differently.
            </p>
          </div>

          {/* Panoramic Horizon Display */}
          <div className="space-y-6">
            {wideRidgePhoto && (
              <div className="group rounded-3xl bg-white dark:bg-[#141D35] border border-border-hairline hover:border-teal/40 p-3 sm:p-4 shadow-sm hover:shadow-md transition-all space-y-3">
                <div className="relative aspect-[21/9] sm:aspect-[24/9] rounded-2xl overflow-hidden bg-slate-950">
                  <img
                    src={wideRidgePhoto.thumbnail || wideRidgePhoto.source}
                    alt={wideRidgePhoto.alt}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[9px] font-mono uppercase bg-black/70 text-white backdrop-blur-xs flex items-center gap-1 shadow">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal inline-block" />
                    <span>PANORAMIC SAHYADRI RIDGE &bull; 2026</span>
                  </div>
                </div>

                <div className="px-1 flex items-center justify-between text-xs font-mono text-muted">
                  <span className="font-serif font-bold text-base text-ink group-hover:text-teal transition-colors">
                    {wideRidgePhoto.title}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-teal" />
                    <span>Western Ghats Mountain Pass</span>
                  </span>
                </div>
              </div>
            )}

            {/* Travel Reflection Quote Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#DDEBFF]/70 via-[#E8F8F1]/60 to-[#EDE5FF]/60 dark:from-[#132238]/60 dark:via-[#0E2428]/50 dark:to-[#181E38]/60 border border-teal/20 shadow-2xs space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-teal font-bold uppercase tracking-wider">
                <Compass className="w-4 h-4" />
                <span>FIELD PERSPECTIVE</span>
              </div>
              <p className="font-serif text-lg sm:text-xl text-ink font-normal leading-relaxed">
                &ldquo;Riding through the Western Ghats at sunrise, wandering down an unpaved rural road, or standing at an overlook where the fog rolls over the ridge &mdash; those are the moments that reset my thinking and remind me how vast the world really is.&rdquo;
              </p>
              {morningHaltPhoto && (
                <p className="text-xs font-mono text-muted pt-1">
                  Documented during morning travel halt &bull; {morningHaltPhoto.location || 'Maharashtra'}
                </p>
              )}
            </div>
          </div>
        </section>

        {/* THEME D: STILL BECOMING */}
        <section className="space-y-8 pt-4">
          <div className="space-y-3 max-w-2xl border-b border-border-hairline pb-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase text-cobalt font-bold tracking-widest">
              <Eye className="w-3.5 h-3.5" />
              <span>THE PERSONAL JOURNEY</span>
            </div>

            <h3 className="font-serif text-3xl sm:text-5xl text-ink font-normal tracking-tight leading-tight">
              &ldquo;I do not think I need to have <br className="hidden sm:inline" />
              <span className="italic text-cobalt font-normal">every answer right now.&rdquo;</span>
            </h3>

            <p className="text-muted text-sm sm:text-base leading-relaxed font-sans">
              I would rather keep exploring, learn from the things I experience, remain open to unfamiliar perspectives, and see how far that curiosity takes me.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#141D35] border border-border-hairline shadow-2xs space-y-3">
              <span className="text-[11px] font-mono text-cobalt uppercase font-bold tracking-wider">
                01 // HUMILITY
              </span>
              <h4 className="font-serif text-xl font-bold text-ink">
                Stay Humble to What I Do Not Know
              </h4>
              <p className="text-xs sm:text-sm text-muted font-sans leading-relaxed">
                Accepting that I am a work in progress is not a weakness; it is the prerequisite for learning anything genuine.
              </p>
            </div>

            <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#141D35] border border-border-hairline shadow-2xs space-y-3">
              <span className="text-[11px] font-mono text-teal uppercase font-bold tracking-wider">
                02 // SUBSTANCE
              </span>
              <h4 className="font-serif text-xl font-bold text-ink">
                Value Experience Over Noise
              </h4>
              <p className="text-xs sm:text-sm text-muted font-sans leading-relaxed">
                Prioritizing real physical journeys, authentic friendships, and hands-on discovery over superficial status or digital noise.
              </p>
            </div>

            <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#141D35] border border-border-hairline shadow-2xs space-y-3">
              <span className="text-[11px] font-mono text-coral uppercase font-bold tracking-wider">
                03 // CURIOSITY
              </span>
              <h4 className="font-serif text-xl font-bold text-ink">
                Protect What Started It All
              </h4>
              <p className="text-xs sm:text-sm text-muted font-sans leading-relaxed">
                Holding onto the original spark: the joy of asking how things work, looking through the lens, and seeing what lies around the next curve.
              </p>
            </div>
          </div>
        </section>

        {/* PERSONAL SWOT ANALYSIS: A LITTLE SELF-AWARENESS */}
        <AboutPersonalSWOT />

        {/* 3. CLOSING STATEMENT: PRESSURE IS A PRIVILEGE */}
        <section className="pt-8 border-t border-border-hairline">
          <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-br from-[#FFECEA] via-[#FFF5E6] to-[#EDE5FF] dark:from-[#141D35] dark:via-[#10182B] dark:to-[#18233E] border border-border-hairline shadow-sm space-y-8 text-center relative overflow-hidden">
            
            {/* Ambient Watermark */}
            <div 
              className="absolute -bottom-8 -right-8 text-[110px] sm:text-[140px] font-serif text-ink/3 dark:text-white/3 select-none pointer-events-none" 
              aria-hidden="true"
            >
              PRIVILEGE
            </div>

            <div className="space-y-5 max-w-2xl mx-auto relative z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-coral/10 border border-coral/25 text-coral text-xs font-mono uppercase font-bold">
                <Sparkles className="w-3.5 h-3.5 text-sunny" />
                <span>PERSONAL MOTTO &amp; ATTITUDE</span>
              </div>

              <h2 className="font-serif text-4xl sm:text-6xl text-ink font-normal tracking-tight">
                &ldquo;PRESSURE IS A <br />
                <span className="italic text-coral font-normal">PRIVILEGE.&rdquo;</span>
              </h2>

              <p className="text-sm sm:text-base text-muted font-sans leading-relaxed max-w-xl mx-auto">
                Pressure is not something to run away from; it signals that you have been trusted with an opportunity that matters.
              </p>

              <p className="text-xs sm:text-sm text-muted font-sans leading-relaxed max-w-lg mx-auto">
                I want to keep exploring, keep creating, and keep becoming someone who can take on meaningful challenges without losing the curiosity that started it all.
              </p>

              {/* Understated Portfolio Exploration Link */}
              <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-ink text-white dark:bg-white dark:text-slate-900 text-xs font-mono font-bold hover:bg-coral dark:hover:bg-coral dark:hover:text-white transition-all shadow-md active:scale-95"
                >
                  <span>Explore Harshad&apos;s Digital Universe</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <a
                  href={contactConfig.profiles.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white dark:bg-[#141D35] border border-border-hairline text-xs font-mono font-bold text-muted hover:text-ink hover:border-coral/40 transition-all shadow-2xs active:scale-95"
                >
                  <span>@{contactConfig.creativeIdentity}</span>
                </a>
              </div>
            </div>

          </div>
        </section>

      </main>

    </div>
  );
};
