import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Award,
  FileText,
  Compass,
  Camera,
  Sparkles,
  Terminal,
  Layers,
  MapPin
} from 'lucide-react';
import { verifiedProjects } from '../data/projects';
import { contactConfig } from '../data/contact';
import { verifiedAchievements } from '../data/achievements';
import { ProjectCard } from '../components/ui/ProjectCard';
import { BrandMonogram } from '../components/ui/BrandMonogram';

export const HomePage: React.FC = () => {
  const flagshipProject = verifiedProjects.find(p => p.slug === 'falcon-404') || verifiedProjects[0];
  const featuredProjects = verifiedProjects.filter(p => p.slug !== 'falcon-404').slice(0, 4);
  const keyAchievements = verifiedAchievements.slice(0, 3);

  return (
    <div className="space-y-28 sm:space-y-36 pb-24">

      {/* ============================================================
          SECTION 01: EDITORIAL FIRST SCREEN / HERO
          ============================================================ */}
      <section className="pt-8 sm:pt-16 pb-12 border-b border-black/[0.08] dark:border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Top Issue Kicker / Metadata Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono uppercase tracking-widest text-muted pb-6 border-b border-black/[0.06] dark:border-white/[0.08]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cobalt inline-block" />
              <span className="font-semibold text-ink">HARSHAD RAJARAM MANE</span>
              <span className="text-faint">/</span>
              <span>VOL. 01 // 2026 EDITION</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-coral" />
                <span>ADCET ASHTA, MAHARASHTRA</span>
              </span>
              <span className="text-faint hidden sm:inline">•</span>
              <span className="hidden sm:inline">16.9482° N, 74.4093° E</span>
            </div>
          </div>

          {/* Main Hero Spread: Asymmetric Editorial Composition */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 pt-12 lg:pt-16 items-start">

            {/* Left Column: Headline, Motto, & Narrative (7 cols) */}
            <div className="lg:col-span-7 space-y-8">

              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-subtle border border-black/[0.06] dark:border-white/[0.08] text-[11px] font-mono text-muted">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>FIRST-YEAR COMPUTER SCIENCE ENGINEERING</span>
              </div>

              {/* Major Display Headline */}
              <div className="space-y-1">
                <h1 className="font-serif text-5xl sm:text-7xl lg:text-[5.25rem] text-ink leading-[1.04] tracking-tight font-normal">
                  Curious enough <br />
                  <span className="italic font-normal text-cobalt">to explore.</span> <br />
                  Driven enough <br />
                  <span className="text-ink font-semibold">to build.</span>
                </h1>
              </div>

              {/* Personal Motto Frame */}
              <div className="p-5 rounded-2xl border-l-3 border-coral bg-subtle/80 space-y-1 max-w-xl">
                <div className="text-[10px] font-mono uppercase tracking-widest text-coral font-bold">
                  Guiding Philosophy
                </div>
                <p className="font-serif text-2xl sm:text-3xl text-ink italic font-normal tracking-tight">
                  &ldquo;Pressure is a privilege.&rdquo;
                </p>
                <p className="text-[11px] font-mono text-muted pt-1">
                  — Embracing engineering challenges, disciplined practice, and steady growth.
                </p>
              </div>

              {/* Credible Personal Introduction */}
              <p className="text-base sm:text-lg text-muted leading-relaxed max-w-2xl font-sans">
                I&apos;m <strong className="text-ink font-semibold">{contactConfig.publicDisplayName}</strong>, an aspiring cybersecurity and DevSecOps engineer, AI enthusiast, and practical application builder at Annasaheb Dange College of Engineering and Technology. I combine engineering logic with creative cinematography.
              </p>

              {/* Navigation CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-ink text-paper text-xs font-semibold uppercase tracking-wider hover:opacity-90 transition-all shadow-md group"
                >
                  <span>Explore Practical Work</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  to="/journey"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-black/[0.1] dark:border-white/[0.15] bg-surface text-ink text-xs font-semibold uppercase tracking-wider hover:border-black/[0.3] dark:hover:border-white/[0.3] transition-colors"
                >
                  <span>My Journey</span>
                </Link>

                <Link
                  to="/resume"
                  className="inline-flex items-center gap-1.5 px-4 py-3.5 rounded-xl text-xs font-mono text-muted hover:text-ink transition-colors"
                >
                  <FileText className="w-3.5 h-3.5 text-cobalt" />
                  <span>Interactive Résumé</span>
                </Link>
              </div>

            </div>

            {/* Right Column: Art-Directed Editorial Identity Portrait Frame (5 cols) */}
            <div className="lg:col-span-5 space-y-5">

              <div className="relative rounded-3xl border border-black/[0.1] dark:border-white/[0.12] bg-surface p-7 sm:p-9 shadow-lg overflow-hidden space-y-6">

                {/* Decorative Subtle Grid Lines */}
                <div
                  className="absolute inset-0 opacity-[0.25] dark:opacity-[0.15] pointer-events-none"
                  style={{
                    backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
                    backgroundSize: '32px 32px'
                  }}
                />

                {/* Identity Header */}
                <div className="relative z-10 flex items-center justify-between pb-4 border-b border-black/[0.06] dark:border-white/[0.08]">
                  <div className="flex items-center gap-2.5">
                    <BrandMonogram size={32} />
                    <div>
                      <span className="font-mono text-xs font-bold tracking-widest uppercase text-ink block">
                        HRM // IDENTITY
                      </span>
                      <span className="font-mono text-[10px] text-muted">
                        DESIGN SIGNATURE
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cobalt/10 text-cobalt font-semibold border border-cobalt/20">
                    B.Tech CSE &apos;26–&apos;30
                  </span>
                </div>

                {/* Architectural Monogram Display (Clean & intentional without fake photos) */}
                <div className="relative z-10 aspect-4/3 rounded-2xl border border-black/[0.08] dark:border-white/[0.1] bg-subtle/70 flex flex-col items-center justify-center p-6 text-center group">
                  <BrandMonogram size={72} className="transition-transform duration-300 group-hover:scale-105" />
                  <div className="mt-4 space-y-1">
                    <span className="font-serif text-2xl text-ink font-semibold tracking-tight block">
                      Harshad Rajaram Mane
                    </span>
                    <span className="font-mono text-xs text-coral font-medium tracking-wide block">
                      @{contactConfig.creativeIdentity}
                    </span>
                  </div>
                  <p className="text-[11px] text-muted font-sans mt-3 max-w-xs leading-relaxed">
                    Student, builder, and visual creator based in Sangli, Maharashtra. Developing hands-on engineering solutions.
                  </p>
                </div>

                {/* Real-time Engineering Snapshot */}
                <div className="relative z-10 space-y-3 pt-2">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-muted flex items-center justify-between">
                    <span>Active Technical Foundations</span>
                    <span className="text-cobalt font-semibold">Semester 01</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                    <div className="p-3 rounded-xl bg-subtle border border-black/[0.04] dark:border-white/[0.06] space-y-1">
                      <span className="text-muted text-[10px] block">CORE DISCIPLINE</span>
                      <span className="text-ink font-semibold">C Pointers &amp; Logic</span>
                    </div>
                    <div className="p-3 rounded-xl bg-subtle border border-black/[0.04] dark:border-white/[0.06] space-y-1">
                      <span className="text-muted text-[10px] block">SECURITY LAB</span>
                      <span className="text-ink font-semibold">Linux CLI &amp; Bandit</span>
                    </div>
                    <div className="p-3 rounded-xl bg-subtle border border-black/[0.04] dark:border-white/[0.06] space-y-1">
                      <span className="text-muted text-[10px] block">COMPETITIVE WORK</span>
                      <span className="text-ink font-semibold">SIH 2026 Falcon-404</span>
                    </div>
                    <div className="p-3 rounded-xl bg-subtle border border-black/[0.04] dark:border-white/[0.06] space-y-1">
                      <span className="text-muted text-[10px] block">CREATIVE OUTLET</span>
                      <span className="text-ink font-semibold">Visual Cinematography</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ============================================================
          SECTION 02: FLAGSHIP CASE STUDY — FALCON-404
          ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-black/[0.08] dark:border-white/[0.08]">
            <div className="space-y-1">
              <span className="text-[11px] font-mono uppercase tracking-widest text-cobalt font-bold">
                FLAGSHIP ENGINEERING CASE STUDY
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-ink font-normal tracking-tight">
                FALCON-404: AI Document &amp; Screening Prototype
              </h2>
            </div>
            <Link
              to={`/projects/${flagshipProject.slug}`}
              className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-cobalt hover:underline shrink-0"
            >
              <span>Detailed Case Study</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <ProjectCard project={flagshipProject} featuredLayout={true} />

          {/* Honest Screening Disclaimer Notice */}
          <div className="p-4 rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-subtle/60 flex items-start gap-3 text-xs text-muted">
            <ShieldCheck className="w-4 h-4 text-cobalt shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong className="text-ink">Technical Transparency:</strong> FALCON-404 is an AI-assisted screening prototype developed for Problem Statement 26188 in SIH 2026 and the Seva First Challenge. OCR and anomaly detection provide preliminary risk indicators for human investigators, not definitive forensic proof. It does not claim direct government database authorization.
            </p>
          </div>

        </div>
      </section>


      {/* ============================================================
          SECTION 03: CURATED PROJECTS, PROTOTYPES & EXPERIMENTS
          ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-black/[0.08] dark:border-white/[0.08]">
          <div className="space-y-2 max-w-2xl">
            <span className="text-[11px] font-mono uppercase tracking-widest text-muted font-semibold">
              PROJECTS, PROTOTYPES &amp; EXPERIMENTS
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-ink font-normal tracking-tight">
              &ldquo;Ideas are interesting. Building them is better.&rdquo;
            </h2>
            <p className="text-xs sm:text-sm text-muted">
              Every project represents hands-on technical work, competitive hackathon problem-solving, or early scientific innovation.
            </p>
          </div>

          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-black/[0.1] dark:border-white/[0.12] bg-surface text-ink text-xs font-semibold hover:border-black/[0.3] transition-colors shrink-0"
          >
            <span>View All 7 Projects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Varied Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </section>


      {/* ============================================================
          SECTION 04: THE TECHNICAL JOURNEY & ACADEMIC GROUNDING
          ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-black/[0.08] dark:border-white/[0.08] bg-surface p-8 sm:p-12 lg:p-16 space-y-10">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            <div className="lg:col-span-5 space-y-4">
              <span className="text-[11px] font-mono uppercase tracking-widest text-cobalt font-bold">
                ACADEMIC &amp; TECHNICAL FOUNDATION
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-ink font-normal tracking-tight">
                Disciplined foundations over superficial shortcuts.
              </h2>
              <p className="text-muted text-xs sm:text-sm leading-relaxed">
                Rather than claiming premature expertise across dozens of frameworks, my focus during Year 01 is mastering computational logic in C, understanding Linux system calls, and responsibly using modern AI-assisted tools to architect real applications.
              </p>

              <Link
                to="/journey"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink hover:text-cobalt transition-colors pt-2"
              >
                <span>Read the complete narrative</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-subtle/80 border border-black/[0.04] dark:border-white/[0.06] space-y-2">
                <div className="w-8 h-8 rounded-lg bg-surface border border-black/[0.06] dark:border-white/[0.08] flex items-center justify-center text-cobalt">
                  <Terminal className="w-4 h-4" />
                </div>
                <h4 className="font-semibold text-sm text-ink">B.Tech Computer Science</h4>
                <p className="text-[11px] text-muted leading-relaxed">
                  Enrolled at ADCET Ashta (2026–2030). Currently mastering pointers, memory management, and engineering algorithms.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-subtle/80 border border-black/[0.04] dark:border-white/[0.06] space-y-2">
                <div className="w-8 h-8 rounded-lg bg-surface border border-black/[0.06] dark:border-white/[0.08] flex items-center justify-center text-coral">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h4 className="font-semibold text-sm text-ink">Cybersecurity &amp; DevSecOps</h4>
                <p className="text-[11px] text-muted leading-relaxed">
                  Long-term career focus. Practicing Linux permissions, OverTheWire Bandit labs, and secure code screening patterns.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-subtle/80 border border-black/[0.04] dark:border-white/[0.06] space-y-2">
                <div className="w-8 h-8 rounded-lg bg-surface border border-black/[0.06] dark:border-white/[0.08] flex items-center justify-center text-cobalt">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h4 className="font-semibold text-sm text-ink">AI-Assisted Development</h4>
                <p className="text-[11px] text-muted leading-relaxed">
                  Leveraging LLMs and modern coding agents to rapidly prototype full-stack applications with architectural rigor.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-subtle/80 border border-black/[0.04] dark:border-white/[0.06] space-y-2">
                <div className="w-8 h-8 rounded-lg bg-surface border border-black/[0.06] dark:border-white/[0.08] flex items-center justify-center text-coral">
                  <Award className="w-4 h-4" />
                </div>
                <h4 className="font-semibold text-sm text-ink">Competitive Problem-Solving</h4>
                <p className="text-[11px] text-muted leading-relaxed">
                  Runner-up at PixelCraft Neuroverse 2K26; hackathon participant at SIH 2026, Tantraparv, and AARAMBH WCE.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ============================================================
          SECTION 05: THE VISUAL JOURNAL (CREATIVE & PHOTOGRAPHY)
          ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-black/[0.08] dark:border-white/[0.08]">
          <div className="space-y-1 max-w-xl">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono uppercase tracking-widest text-coral font-bold">
                THE VISUAL JOURNAL
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-subtle text-muted">
                @{contactConfig.creativeIdentity}
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-ink font-normal tracking-tight">
              &ldquo;Frames, places, and stories — collected along the way.&rdquo;
            </h2>
          </div>

          <Link
            to="/creative"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-black/[0.1] dark:border-white/[0.12] bg-surface text-ink text-xs font-semibold hover:border-black/[0.3] transition-colors shrink-0"
          >
            <span>Open Visual Journal</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Editorial Photo Placeholders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="p-6 rounded-2xl border border-black/[0.08] dark:border-white/[0.08] bg-surface space-y-4 flex flex-col justify-between">
            <div className="aspect-4/3 rounded-xl bg-subtle border border-black/[0.06] dark:border-white/[0.08] flex flex-col items-center justify-center p-6 text-center">
              <Camera className="w-8 h-8 text-muted mb-2" />
              <span className="font-serif text-lg text-ink font-medium">Western Ghats Studies</span>
              <span className="text-[10px] font-mono text-faint mt-1">CURATED MEDIA ARCHIVE</span>
            </div>
            <div>
              <h4 className="font-semibold text-sm text-ink">Landscape &amp; Nature Photography</h4>
              <p className="text-xs text-muted leading-relaxed mt-1">
                Atmospheric stills captured across Maharashtra trails, misty ghats, and monsoon journeys.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl border border-black/[0.08] dark:border-white/[0.08] bg-surface space-y-4 flex flex-col justify-between">
            <div className="aspect-4/3 rounded-xl bg-subtle border border-black/[0.06] dark:border-white/[0.08] flex flex-col items-center justify-center p-6 text-center">
              <Compass className="w-8 h-8 text-coral mb-2" />
              <span className="font-serif text-lg text-ink font-medium">All-India Motorcycle Circuit</span>
              <span className="text-[10px] font-mono text-coral mt-1">FUTURE EXPEDITION AMBITION</span>
            </div>
            <div>
              <h4 className="font-semibold text-sm text-ink">Motovlogging &amp; Long-Distance Rides</h4>
              <p className="text-xs text-muted leading-relaxed mt-1">
                Documenting planned high-altitude circuits, endurance riding routes, and mountain passes.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl border border-black/[0.08] dark:border-white/[0.08] bg-surface space-y-4 flex flex-col justify-between">
            <div className="aspect-4/3 rounded-xl bg-subtle border border-black/[0.06] dark:border-white/[0.08] flex flex-col items-center justify-center p-6 text-center">
              <Layers className="w-8 h-8 text-cobalt mb-2" />
              <span className="font-serif text-lg text-ink font-medium">Short-Form Cinematography</span>
              <span className="text-[10px] font-mono text-faint mt-1">VERTICAL REELS &amp; SOUND DESIGN</span>
            </div>
            <div>
              <h4 className="font-semibold text-sm text-ink">Visual Storytelling &amp; Color Grading</h4>
              <p className="text-xs text-muted leading-relaxed mt-1">
                Paced edits exploring pacing, sound design, and color grading under the creative identity of shiv.premi_1630.
              </p>
            </div>
          </div>

        </div>

      </section>


      {/* ============================================================
          SECTION 06: VERIFIED HONORS & COMPETITIVE MILESTONES
          ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-black/[0.08] dark:border-white/[0.08]">
          <div className="space-y-1">
            <span className="text-[11px] font-mono uppercase tracking-widest text-muted font-semibold">
              HONORS &amp; COMPETITIONS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-ink font-normal tracking-tight">
              Verified Achievements
            </h2>
          </div>
          <Link
            to="/achievements"
            className="text-xs font-mono font-semibold text-cobalt hover:underline"
          >
            All Achievements &amp; Events →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {keyAchievements.map((ach) => (
            <article
              key={ach.id}
              className="p-6 rounded-2xl border border-black/[0.08] dark:border-white/[0.08] bg-surface space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="text-cobalt font-semibold uppercase">{ach.category}</span>
                  <span className="text-muted">{ach.date || '2026'}</span>
                </div>
                <h3 className="font-serif text-xl text-ink font-semibold tracking-tight">
                  {ach.title}
                </h3>
                <div className="inline-block px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20 text-[10px] font-mono font-bold uppercase">
                  {ach.result}
                </div>
                <p className="text-xs text-muted leading-relaxed line-clamp-3">
                  {ach.description}
                </p>
              </div>

              <div className="text-[10px] font-mono text-faint pt-3 border-t border-black/[0.04] dark:border-white/[0.06]">
                {ach.institution}
              </div>
            </article>
          ))}
        </div>

      </section>


      {/* ============================================================
          SECTION 07: DIRECT CONTACT & INVITATION TO CONVERSE
          ============================================================ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-black/[0.1] dark:border-white/[0.12] bg-subtle/90 p-8 sm:p-14 lg:p-16 text-center space-y-6">
          <span className="text-[11px] font-mono uppercase tracking-widest text-cobalt font-bold block">
            GET IN TOUCH
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-ink font-normal tracking-tight max-w-2xl mx-auto">
            Open to technical dialogue, hackathons, and ambitious ideas.
          </h2>
          <p className="text-xs sm:text-sm text-muted max-w-xl mx-auto leading-relaxed">
            Whether discussing an upcoming cybersecurity challenge, DevSecOps architecture, or creative cinematography collaboration — feel free to write.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href={`mailto:${contactConfig.email}`}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-ink text-paper text-xs font-semibold uppercase tracking-wider hover:opacity-90 transition-opacity shadow-md"
            >
              <span>Compose Email ({contactConfig.email})</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-black/[0.1] dark:border-white/[0.15] bg-surface text-ink text-xs font-semibold uppercase tracking-wider hover:border-black/[0.3] transition-colors"
            >
              <span>Contact Page &amp; Socials</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
