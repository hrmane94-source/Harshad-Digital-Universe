import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Cpu, 
  Compass, 
  Award, 
  FileText, 
  ChevronRight
} from 'lucide-react';
import { ComputationalSculpture } from '../components/3d/ComputationalSculpture';
import { verifiedProjects } from '../data/projects';
import { contactConfig } from '../data/contact';
import { ProjectCard } from '../components/ui/ProjectCard';

export const HomePage: React.FC = () => {
  const flagshipProject = verifiedProjects.find(p => p.slug === 'falcon-404') || verifiedProjects[0];
  const featuredProjects = verifiedProjects.filter(p => p.slug !== 'falcon-404').slice(0, 3);

  return (
    <div className="space-y-24 pb-20">
      
      {/* Hero Section with 3D Sculpture */}
      <section className="relative min-h-[85vh] flex flex-col justify-center pt-8 pb-12 overflow-hidden border-b border-slate-800/60">
        
        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-80 bg-gradient-to-b from-cyan-500/10 via-blue-600/5 to-transparent blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          
          {/* Left Column: Hero Narrative */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span className="text-[11px] font-mono tracking-wider text-cyan-300 uppercase font-semibold">
                BUILDING, LEARNING &amp; EXPLORING
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-6xl font-heading font-extrabold text-white tracking-tight leading-[1.1]">
              Curious enough to explore. <br />
              <span className="text-gradient-cyan">
                Driven enough to build.
              </span>
            </h1>

            {/* Verified Copy */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              I&apos;m <span className="text-white font-semibold">{contactConfig.publicDisplayName}</span>, a Computer Science Engineering student exploring AI, cybersecurity, and creative technology through practical projects, experimentation, and continuous learning.
            </p>

            {/* Personal Motto */}
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 max-w-xl flex items-center gap-3">
              <div className="w-1.5 h-8 bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full shrink-0" />
              <div>
                <p className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                  Personal Motto
                </p>
                <p className="text-sm font-medium text-slate-200 italic">
                  &ldquo;{contactConfig.motto}&rdquo;
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-sm transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-[1.02]"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 font-medium text-sm transition-all hover:bg-slate-800 hover:border-slate-600"
              >
                <span>Meet the Person Behind It</span>
              </Link>

              <Link
                to="/resume"
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl border border-slate-800 text-xs font-mono text-slate-400 hover:text-cyan-300 transition-colors"
              >
                <FileText className="w-4 h-4" />
                <span>View Résumé</span>
              </Link>
            </div>

            {/* Verified Credentials Ticker */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-800/80 max-w-2xl text-xs">
              <div>
                <span className="text-slate-400 block font-mono text-[10px]">Academic Status</span>
                <span className="text-white font-medium">B.Tech CSE (First Year)</span>
                <span className="text-slate-400 block text-[11px]">ADCET Ashta, 2026–2030</span>
              </div>
              <div>
                <span className="text-slate-400 block font-mono text-[10px]">Flagship Initiative</span>
                <span className="text-cyan-300 font-medium">FALCON-404</span>
                <span className="text-slate-400 block text-[11px]">SIH 2026 Screening</span>
              </div>
              <div>
                <span className="text-slate-400 block font-mono text-[10px]">National Contest</span>
                <span className="text-amber-300 font-medium">PixelCraft Runner-Up</span>
                <span className="text-slate-400 block text-[11px]">Neuroverse 2K26</span>
              </div>
            </div>

          </div>

          {/* Right Column: Original 3D Sculpture */}
          <div className="lg:col-span-5 w-full flex items-center justify-center">
            <ComputationalSculpture />
          </div>

        </div>

      </section>

      {/* Flagship Case Study Feature: FALCON-404 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase text-cyan-400 tracking-wider font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>Flagship Engineering Case Study</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white">
              FALCON-404 Document Screening Pipeline
            </h2>
          </div>
          <Link
            to="/projects/falcon-404"
            className="text-xs font-mono text-cyan-400 hover:underline hidden sm:inline-flex items-center gap-1"
          >
            <span>Read Complete Case Study</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <ProjectCard project={flagshipProject} featuredLayout={true} />
      </section>

      {/* The Four Dimensions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
            Multidimensional Identity
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white">
            Four Dimensions of Harshad Mane
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed">
            Bridging technical logic, natural curiosity, visual storytelling, and a grounded positive mentality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Dimension 1: The Engineer */}
          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 space-y-4 group">
            <div className="w-12 h-12 rounded-xl bg-cyan-950/60 border border-cyan-800 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
              <Cpu className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-heading font-bold text-white">The Engineer</h3>
              <p className="text-xs text-cyan-400 font-mono mt-0.5">Technology &amp; Systems</p>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Curious about cybersecurity, AI systems, and practical full-stack application development. Rapidly transforming ideas into working software.
            </p>
            <Link to="/skills" className="text-xs text-cyan-400 inline-flex items-center gap-1 hover:underline pt-2">
              <span>View Skills &amp; Stack</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Dimension 2: The Explorer */}
          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/40 transition-all duration-300 space-y-4 group">
            <div className="w-12 h-12 rounded-xl bg-emerald-950/60 border border-emerald-800 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-heading font-bold text-white">The Explorer</h3>
              <p className="text-xs text-emerald-400 font-mono mt-0.5">Nature &amp; Motorcycling</p>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Drawn to unexplored trails, the Sahyadri mountains, and an ambitious long-term dream to circuit India by motorcycle in record time.
            </p>
            <Link to="/explorations" className="text-xs text-emerald-400 inline-flex items-center gap-1 hover:underline pt-2">
              <span>Explore Travel Ambitions</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Dimension 3: The Creator */}
          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-purple-500/40 transition-all duration-300 space-y-4 group">
            <div className="w-12 h-12 rounded-xl bg-purple-950/60 border border-purple-800 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-heading font-bold text-white">The Creator</h3>
              <p className="text-xs text-purple-400 font-mono mt-0.5">shiv.premi_1630</p>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Capturing cinematic perspectives, crafting vertical video reels, and documenting authentic moments of life and journey through camera lenses.
            </p>
            <Link to="/creative" className="text-xs text-purple-400 inline-flex items-center gap-1 hover:underline pt-2">
              <span>View Creative Works</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Dimension 4: The Person */}
          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-rose-500/40 transition-all duration-300 space-y-4 group">
            <div className="w-12 h-12 rounded-xl bg-rose-950/60 border border-rose-800 flex items-center justify-center text-rose-400 group-hover:scale-110 transition-transform">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-heading font-bold text-white">The Person</h3>
              <p className="text-xs text-rose-400 font-mono mt-0.5">Positive Mentality &amp; Values</p>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Living with fewer regrets, learning without limits, treating people with fairness, and standing beside teammates when they need support.
            </p>
            <Link to="/about" className="text-xs text-rose-400 inline-flex items-center gap-1 hover:underline pt-2">
              <span>Read Personal Story</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </section>

      {/* Featured Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase text-cyan-400 tracking-wider font-semibold">
              Practical Implementations
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white">
              Selected Projects &amp; Prototypes
            </h2>
          </div>
          <Link
            to="/projects"
            className="text-xs font-mono text-cyan-400 hover:underline flex items-center gap-1"
          >
            <span>All 7 Projects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Verified Milestones & Achievements Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-blue-950/40 border border-slate-800 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase text-cyan-400 tracking-wider font-semibold">
                Verified Milestone
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white mt-1">
                PixelCraft Runner-Up Award (Neuroverse 2K26)
              </h2>
            </div>
            <Link
              to="/achievements"
              className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors shrink-0"
            >
              All Achievements &amp; Leadership
            </Link>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed max-w-3xl">
            Secured 2nd place in the national-level PixelCraft competition at ADCET Ashta across two intensive web-building rounds: designing the GADA ELECTRONICS storefront concept and constructing the dynamic Neuroverse 2K26 official symposium event portal.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800/80 text-xs">
            <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
              <span className="text-slate-400 block font-mono">School Leadership</span>
              <span className="text-white font-semibold">Head Boy (2 Consecutive Years)</span>
              <span className="text-slate-400 block text-[11px]">Padua High School</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
              <span className="text-slate-400 block font-mono">SSC Board Examinations</span>
              <span className="text-white font-semibold">Subject Topper in 3 Subjects</span>
              <span className="text-slate-400 block text-[11px]">Maths, Hindi &amp; Marathi</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
              <span className="text-slate-400 block font-mono">Scientific Exposure</span>
              <span className="text-white font-semibold">BARC National Science Delegations</span>
              <span className="text-slate-400 block text-[11px]">Two Educational Visits</span>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Connect */}
      <section className="max-w-4xl mx-auto px-4 text-center space-y-6">
        <h2 className="text-3xl font-heading font-bold text-white">
          Interested in Collaborating or Connecting?
        </h2>
        <p className="text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
          Whether you want to discuss cybersecurity research, hackathon collaboration, or creative projects, my inbox is always open.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${contactConfig.email}`}
            className="px-6 py-3 rounded-xl bg-cyan-500 text-slate-950 font-bold text-sm hover:bg-cyan-400 transition-colors"
          >
            Contact via Email: {contactConfig.email}
          </a>
          <Link
            to="/contact"
            className="px-6 py-3 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 text-sm font-medium hover:bg-slate-800 transition-colors"
          >
            All Verified Profiles
          </Link>
        </div>
      </section>

    </div>
  );
};
