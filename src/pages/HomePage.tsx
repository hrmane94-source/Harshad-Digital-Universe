import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Sparkles,
  Terminal,
  MapPin,
  Camera,
  Activity,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Bot
} from 'lucide-react';
import { verifiedProjects } from '../data/projects';
import { contactConfig } from '../data/contact';
import { BrandMonogram } from '../components/ui/BrandMonogram';
import { sendChatMessage } from '../lib/aiService';

export const HomePage: React.FC = () => {
  const falconProject = verifiedProjects.find(p => p.slug === 'falcon-404') || verifiedProjects[0];
  const arogyaProject = verifiedProjects.find(p => p.slug === 'arogya-ai') || verifiedProjects[1];
  const campusProject = verifiedProjects.find(p => p.slug === 'campus-copilot') || verifiedProjects[2];
  const neuroverseProject = verifiedProjects.find(p => p.slug === 'neuroverse-2k26-website') || verifiedProjects[3];

  // Interactive AI Terminal State on Section 08
  const [interactiveQuestion, setInteractiveQuestion] = useState('');
  const [interactiveResponse, setInteractiveResponse] = useState<string | null>(null);
  const [interactiveLoading, setInteractiveLoading] = useState(false);
  const [interactiveRoute, setInteractiveRoute] = useState<string | null>(null);
  const [interactiveRouteLabel, setInteractiveRouteLabel] = useState<string | null>(null);

  // Interactive Tab State for FALCON-404 Inspection
  const [activeFalconTab, setActiveFalconTab] = useState<'overview' | 'forensics' | 'limitations'>('overview');

  const handleInlineAsk = async (presetQuestion?: string) => {
    const q = (presetQuestion || interactiveQuestion).trim();
    if (!q || interactiveLoading) return;

    setInteractiveQuestion(q);
    setInteractiveLoading(true);
    setInteractiveResponse(null);
    setInteractiveRoute(null);
    setInteractiveRouteLabel(null);

    try {
      const res = await sendChatMessage(q);
      setInteractiveResponse(res.reply);
      setInteractiveRoute(res.suggestedRoute || null);
      setInteractiveRouteLabel(res.routeLabel || null);
    } catch {
      setInteractiveResponse("Unable to complete query. Please use the floating assistant on the bottom-right.");
    } finally {
      setInteractiveLoading(false);
    }
  };

  return (
    <div className="space-y-0 selection:bg-cobalt/20 selection:text-cobalt">

      {/* ============================================================
          SECTION 01: HERO — ASYMMETRIC EDITORIAL SPREAD
          ============================================================ */}
      <section className="relative pt-8 sm:pt-16 pb-16 sm:pb-24 border-b border-black/[0.08] dark:border-white/[0.08] overflow-hidden">
        {/* Subtle architectural background grid */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '32px 32px' }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Top Editorial Folio Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono uppercase tracking-widest text-muted pb-6 border-b border-black/[0.06] dark:border-white/[0.08]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cobalt inline-block" />
              <span className="font-semibold text-ink">HARSHAD RAJARAM MANE</span>
              <span className="text-faint">/</span>
              <span>VOL. 04 // 2026 EDITION</span>
            </div>
            <div className="flex items-center gap-4 text-faint">
              <span className="flex items-center gap-1 text-muted">
                <MapPin className="w-3 h-3 text-coral" />
                <span>ADCET ASHTA, MAHARASHTRA</span>
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">16.9482° N, 74.4093° E</span>
            </div>
          </div>

          {/* Main Hero Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 pt-12 lg:pt-16 items-start">

            {/* Left 7 Columns: Headline, Motto, & Narrative */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-8"
            >
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-subtle border border-black/[0.06] dark:border-white/[0.08] text-[11px] font-mono text-muted">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>FIRST-YEAR COMPUTER SCIENCE UNDERGRADUATE</span>
              </div>

              {/* Major Display Headline */}
              <div className="space-y-1">
                <h1 className="font-serif text-5xl sm:text-7xl lg:text-[5.5rem] text-ink leading-[1.03] tracking-tight font-normal">
                  Curious enough <br />
                  <span className="italic text-cobalt font-serif">to explore.</span> <br />
                  Driven enough <br />
                  <span className="text-ink font-semibold">to build.</span>
                </h1>
              </div>

              {/* Motto Frame */}
              <div className="p-5 sm:p-6 rounded-2xl border-l-4 border-coral bg-subtle/80 space-y-1.5 max-w-xl">
                <div className="text-[10px] font-mono uppercase tracking-widest text-coral font-bold flex items-center gap-1.5">
                  <span>GUIDING PHILOSOPHY</span>
                </div>
                <p className="font-serif text-2xl sm:text-3xl text-ink italic font-normal tracking-tight">
                  &ldquo;Pressure is a privilege.&rdquo;
                </p>
                <p className="text-[11px] font-mono text-muted pt-1">
                  — Embracing engineering friction, disciplined learning, and building through grit.
                </p>
              </div>

              {/* Bio Narrative */}
              <p className="text-base sm:text-lg text-muted leading-relaxed max-w-2xl font-sans">
                I&apos;m <strong className="text-ink font-semibold">{contactConfig.publicDisplayName}</strong>, an aspiring cybersecurity &amp; DevSecOps engineer, AI-accelerated builder, and first-year CSE student at Annasaheb Dange College of Engineering and Technology (ADCET), Ashta. Outside the terminal, I capture visual journeys under <span className="font-mono text-xs text-cobalt">shiv.premi_1630</span>.
              </p>

              {/* Navigation CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-ink text-paper text-xs font-semibold uppercase tracking-wider hover:opacity-90 transition-all shadow-md group font-mono"
                >
                  <span>Explore Practical Work</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  to="/resume"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-surface border border-black/[0.1] dark:border-white/[0.12] text-ink hover:border-black/30 dark:hover:border-white/30 text-xs font-semibold uppercase tracking-wider transition-all font-mono shadow-xs"
                >
                  <span>Official ATS Résumé</span>
                  <ArrowUpRight className="w-4 h-4 text-cobalt" />
                </Link>

                <button
                  type="button"
                  onClick={() => handleInlineAsk("Who is Harshad Mane and what are his top projects?")}
                  className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl bg-cobalt/10 hover:bg-cobalt/15 text-cobalt border border-cobalt/20 text-xs font-mono font-semibold transition-colors cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5 text-coral animate-spin duration-3000" />
                  <span>Ask AI Guide</span>
                </button>
              </div>
            </motion.div>

            {/* Right 5 Columns: Identity Monogram Frame & Architectural Data Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-5 space-y-6"
            >
              {/* Monogram Graphic Poster */}
              <div className="p-8 sm:p-10 rounded-3xl bg-surface border border-black/[0.08] dark:border-white/[0.1] space-y-6 shadow-sm relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-black/[0.06] dark:border-white/[0.08] pb-4">
                  <span className="text-[10px] font-mono text-muted uppercase tracking-widest font-bold">
                    IDENTITY MARK // 01
                  </span>
                  <span className="text-[10px] font-mono text-cobalt">
                    VERIFIED ARTIFACT
                  </span>
                </div>

                <div className="flex flex-col items-center justify-center py-6 text-center space-y-4">
                  <div className="w-24 h-24 rounded-2xl bg-subtle/80 border border-black/[0.08] dark:border-white/[0.1] flex items-center justify-center shadow-xs">
                    <BrandMonogram size={56} className="w-14 h-14" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-ink tracking-tight">
                      Harshad Rajaram Mane
                    </h3>
                    <p className="text-xs text-muted font-mono mt-0.5">
                      B.Tech CSE &bull; Class of 2026–2030
                    </p>
                  </div>
                </div>

                {/* Micro Metric Matrix */}
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-black/[0.06] dark:border-white/[0.08] text-[11px] font-mono">
                  <div className="p-3 rounded-xl bg-subtle/60 border border-black/[0.04] dark:border-white/[0.06] space-y-1">
                    <span className="text-muted block text-[10px] uppercase">Primary Focus</span>
                    <span className="text-ink font-semibold">DevSecOps &amp; Security</span>
                  </div>
                  <div className="p-3 rounded-xl bg-subtle/60 border border-black/[0.04] dark:border-white/[0.06] space-y-1">
                    <span className="text-muted block text-[10px] uppercase">PixelCraft 2K26</span>
                    <span className="text-coral font-semibold">Runner-Up (2nd Place)</span>
                  </div>
                  <div className="p-3 rounded-xl bg-subtle/60 border border-black/[0.04] dark:border-white/[0.06] space-y-1">
                    <span className="text-muted block text-[10px] uppercase">Hackathon Lead</span>
                    <span className="text-cobalt font-semibold">SIH 2026 (Team Falcon)</span>
                  </div>
                  <div className="p-3 rounded-xl bg-subtle/60 border border-black/[0.04] dark:border-white/[0.06] space-y-1">
                    <span className="text-muted block text-[10px] uppercase">Creative Persona</span>
                    <span className="text-ink font-semibold">shiv.premi_1630</span>
                  </div>
                </div>
              </div>

              {/* Reserved Personal Portrait Frame (Honest Placeholder) */}
              <div className="p-4 rounded-2xl bg-subtle/60 border border-black/[0.06] dark:border-white/[0.08] text-xs font-mono text-muted flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <Camera className="w-3.5 h-3.5 text-cobalt" />
                  <span>Curated Visual Identity Reserve</span>
                </span>
                <span className="text-[10px] text-faint">portrait.jpg (Reserved)</span>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 02: PERSONAL STATEMENT — COLOR-BLOCKED MANIFESTO
          ============================================================ */}
      <section className="py-20 sm:py-28 bg-[#111215] text-[#FAF7F2] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">

          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.12] pb-6">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#A4A4AF] uppercase">
              <span className="w-2 h-2 rounded-full bg-coral inline-block" />
              <span>SECTION 02 // ARCHITECTURAL MANIFESTO</span>
            </div>
            <span className="text-xs font-mono text-[#A4A4AF]">THE INTERSECTION OF DISCIPLINE &amp; ACCELERATION</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-6">
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#FAF7F2] font-normal leading-[1.08] tracking-tight">
                Curiosity without execution is merely entertainment. <br />
                <span className="italic text-[#3B82F6]">Building is where understanding begins.</span>
              </h2>
              <p className="text-sm sm:text-base text-[#A4A4AF] leading-relaxed max-w-2xl font-sans">
                My approach to software engineering is grounded in honest distinction: I leverage modern AI tooling to accelerate interface prototyping and architecture scaffolding, while committing daily academic hours to low-level computational fundamentals in C, memory management, and data structures.
              </p>
            </div>

            <div className="lg:col-span-4 space-y-4">
              <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/[0.08] space-y-3">
                <div className="text-[11px] font-mono text-[#FB923C] uppercase tracking-wider font-bold">
                  01. Low-Level Rigor
                </div>
                <p className="text-xs text-[#A4A4AF] leading-relaxed">
                  Deep foundations in C, algorithms, procedural memory mechanics, and network protocols taught in the college syllabus.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/[0.08] space-y-3">
                <div className="text-[11px] font-mono text-[#3B82F6] uppercase tracking-wider font-bold">
                  02. AI-Accelerated Prototyping
                </div>
                <p className="text-xs text-[#A4A4AF] leading-relaxed">
                  Rapid deployment of full-stack TypeScript, React, and Supabase prototypes to test ideas against real operational friction.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================
          SECTION 03: FLAGSHIP PROJECT SHOWCASE — FALCON-404
          ============================================================ */}
      <section className="py-20 sm:py-28 border-b border-black/[0.08] dark:border-white/[0.08] bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* Section Kicker */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-black/[0.08] dark:border-white/[0.08] pb-6">
            <div className="space-y-1">
              <span className="text-[11px] font-mono uppercase tracking-widest text-cobalt font-bold">
                FLAGSHIP CYBERSECURITY PROTOTYPE &bull; SIH 2026
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-ink tracking-tight">
                FALCON-404: Forensic Screening System
              </h2>
            </div>
            <Link
              to="/projects/falcon-404"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-cobalt hover:underline"
            >
              <span>Full Case Study Architecture</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Interactive Flagship Showcase Spread */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Left 7 Columns: Interactive Inspection Console */}
            <div className="lg:col-span-7 rounded-3xl bg-subtle border border-black/[0.08] dark:border-white/[0.1] p-6 sm:p-8 space-y-6">

              {/* Tab Navigation */}
              <div className="flex items-center gap-2 border-b border-black/[0.08] dark:border-white/[0.1] pb-3 text-xs font-mono">
                <button
                  type="button"
                  onClick={() => setActiveFalconTab('overview')}
                  className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${activeFalconTab === 'overview' ? 'bg-ink text-paper font-semibold' : 'text-muted hover:text-ink'}`}
                >
                  01. Overview
                </button>
                <button
                  type="button"
                  onClick={() => setActiveFalconTab('forensics')}
                  className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${activeFalconTab === 'forensics' ? 'bg-ink text-paper font-semibold' : 'text-muted hover:text-ink'}`}
                >
                  02. Forensic Signals
                </button>
                <button
                  type="button"
                  onClick={() => setActiveFalconTab('limitations')}
                  className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${activeFalconTab === 'limitations' ? 'bg-ink text-paper font-semibold' : 'text-muted hover:text-ink'}`}
                >
                  03. Integrity &amp; Limitations
                </button>
              </div>

              {/* Tab 1: Overview */}
              {activeFalconTab === 'overview' && (
                <div className="space-y-4 animate-in fade-in duration-150">
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono uppercase text-muted">Problem Stated</span>
                    <p className="text-xs text-ink/90 leading-relaxed">
                      Manual document screening in government and institutional onboarding is slow, prone to oversight, and vulnerable to digitized document tampering.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono uppercase text-muted">Technical Solution</span>
                    <p className="text-xs text-ink/90 leading-relaxed">
                      A client-side verification utility that executes optical character recognition (OCR), metadata parsing, and edge tampering anomaly detection directly inside the browser.
                    </p>
                  </div>
                  <div className="pt-2 flex flex-wrap gap-2 text-[10px] font-mono">
                    <span className="px-2 py-1 rounded bg-surface border border-black/[0.06] dark:border-white/[0.08] text-ink font-semibold">React 19</span>
                    <span className="px-2 py-1 rounded bg-surface border border-black/[0.06] dark:border-white/[0.08] text-ink font-semibold">TypeScript</span>
                    <span className="px-2 py-1 rounded bg-surface border border-black/[0.06] dark:border-white/[0.08] text-ink font-semibold">Tesseract.js OCR</span>
                    <span className="px-2 py-1 rounded bg-surface border border-black/[0.06] dark:border-white/[0.08] text-ink font-semibold">HTML5 Canvas Image Forensics</span>
                  </div>
                </div>
              )}

              {/* Tab 2: Forensics */}
              {activeFalconTab === 'forensics' && (
                <div className="space-y-3 animate-in fade-in duration-150 text-xs">
                  <div className="p-3.5 rounded-xl bg-surface border border-black/[0.06] dark:border-white/[0.08] flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-ink block font-mono text-[11px]">Multi-Zone OCR Parsing:</strong>
                      <span className="text-muted leading-relaxed">Extracts text fields with probabilistic confidence percentages per character stream.</span>
                    </div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-surface border border-black/[0.06] dark:border-white/[0.08] flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-ink block font-mono text-[11px]">Image Anomaly Heatmap:</strong>
                      <span className="text-muted leading-relaxed">Scans for pixel discontinuities, font mismatches, and copy-paste border artifacts.</span>
                    </div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-surface border border-black/[0.06] dark:border-white/[0.08] flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-ink block font-mono text-[11px]">Zero-Server Privacy:</strong>
                      <span className="text-muted leading-relaxed">All computation runs client-side; zero citizen document bytes leave the browser.</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 3: Limitations */}
              {activeFalconTab === 'limitations' && (
                <div className="space-y-3 animate-in fade-in duration-150 text-xs">
                  <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-ink flex items-start gap-3">
                    <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-amber-800 dark:text-amber-400 block font-mono text-[11px]">Screening Signals, Not Legal Proof:</strong>
                      <span className="text-muted leading-relaxed">FALCON-404 outputs risk indicators. It is an auxiliary screening aid, never proof of fraud.</span>
                    </div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-subtle border border-black/[0.06] dark:border-white/[0.08] flex items-start gap-3">
                    <ShieldCheck className="w-4 h-4 text-cobalt shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-ink block font-mono text-[11px]">No Live Government Database Access:</strong>
                      <span className="text-muted leading-relaxed">Does not query UIDAI or Income Tax live APIs without official agency access tokens.</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="pt-4 border-t border-black/[0.08] dark:border-white/[0.1] flex flex-wrap items-center gap-3">
                <Link
                  to="/projects/falcon-404"
                  className="px-5 py-2.5 rounded-xl bg-ink text-paper text-xs font-semibold uppercase tracking-wider hover:opacity-90 transition-opacity font-mono"
                >
                  Inspect Case Study
                </Link>
                {falconProject.links.repositoryUrl && (
                  <a
                    href={falconProject.links.repositoryUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-surface border border-black/[0.08] dark:border-white/[0.1] text-xs font-mono font-medium text-ink hover:border-black/30 transition-colors"
                  >
                    <span>View GitHub Repo</span>
                    <ExternalLink className="w-3.5 h-3.5 text-muted" />
                  </a>
                )}
              </div>
            </div>

            {/* Right 5 Columns: SIH 2026 Leadership Badge & Role Breakdown */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-6 sm:p-8 rounded-3xl bg-surface border border-black/[0.08] dark:border-white/[0.1] space-y-5 shadow-xs">
                <div className="flex items-center justify-between border-b border-black/[0.06] dark:border-white/[0.08] pb-3 text-[11px] font-mono">
                  <span className="text-coral uppercase font-bold">COMPETITION RECORD</span>
                  <span className="text-muted">Smart India Hackathon</span>
                </div>

                <div className="space-y-2">
                  <div className="inline-block px-2.5 py-1 rounded bg-cobalt/10 text-cobalt font-mono text-[10px] font-bold">
                    SIH PROBLEM ID: 26188
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-ink">
                    Team Falcon Leadership
                  </h3>
                  <p className="text-xs text-muted leading-relaxed">
                    Harshad served as the <strong>Team Lead &amp; Sole Application Developer</strong>, single-handedly architecting and building the functional verification prototype for the national evaluation round.
                  </p>
                </div>

                <div className="pt-3 border-t border-black/[0.06] dark:border-white/[0.08] space-y-2 text-xs font-mono text-muted">
                  <div className="flex justify-between">
                    <span>Role:</span>
                    <span className="text-ink font-semibold">Lead &amp; Sole App Developer</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Team Code:</span>
                    <span className="text-ink font-semibold">ISIH26106</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Target:</span>
                    <span className="text-ink font-semibold">Identity Tampering Detection</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ============================================================
          SECTION 04: SELECTED ENGINEERING WORKS (VARIED SHOWCASE)
          ============================================================ */}
      <section className="py-20 sm:py-28 border-b border-black/[0.08] dark:border-white/[0.08] bg-paper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-black/[0.08] dark:border-white/[0.08] pb-6">
            <div className="space-y-1">
              <span className="text-[11px] font-mono uppercase tracking-widest text-muted font-semibold">
                PROJECTS, PROTOTYPES &amp; EXPERIMENTS
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-ink tracking-tight">
                Ideas are interesting. Building them is better.
              </h2>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-cobalt hover:underline"
            >
              <span>View All 7 Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* 3 Varied Showcase Panels */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Panel 1: Arogya AI */}
            <div className="p-6 sm:p-8 rounded-3xl bg-surface border border-black/[0.08] dark:border-white/[0.1] space-y-4 flex flex-col justify-between shadow-xs">
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="text-cobalt uppercase font-bold">HEALTHCARE SYSTEMS</span>
                  <span className="text-faint">2026</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-ink">
                  {arogyaProject.displayTitle}
                </h3>
                <p className="text-xs text-muted leading-relaxed line-clamp-3">
                  {arogyaProject.tagline}
                </p>
                <div className="p-3 rounded-xl bg-subtle/80 text-[10px] font-mono text-muted space-y-1">
                  <div><strong>Role:</strong> {arogyaProject.role}</div>
                  <div><strong>Scope:</strong> Evaluated on synthetic demonstration datasets; not clinically validated.</div>
                </div>
              </div>

              <div className="pt-4 border-t border-black/[0.06] dark:border-white/[0.08] flex items-center justify-between">
                <span className="text-[11px] font-mono text-faint">React &bull; TypeScript</span>
                <Link
                  to="/projects/arogya-ai"
                  className="text-xs font-mono font-semibold text-cobalt hover:underline inline-flex items-center gap-1"
                >
                  <span>Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Panel 2: Campus Copilot */}
            <div className="p-6 sm:p-8 rounded-3xl bg-surface border border-black/[0.08] dark:border-white/[0.1] space-y-4 flex flex-col justify-between shadow-xs">
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="text-coral uppercase font-bold">EDTECH &amp; CHATBOTS</span>
                  <span className="text-faint">2026</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-ink">
                  {campusProject.displayTitle}
                </h3>
                <p className="text-xs text-muted leading-relaxed line-clamp-3">
                  {campusProject.tagline}
                </p>
                <div className="p-3 rounded-xl bg-subtle/80 text-[10px] font-mono text-muted space-y-1">
                  <div><strong>Role:</strong> {campusProject.role}</div>
                  <div><strong>Scope:</strong> College syllabus and circular assistant running on curated JSON guides.</div>
                </div>
              </div>

              <div className="pt-4 border-t border-black/[0.06] dark:border-white/[0.08] flex items-center justify-between">
                <span className="text-[11px] font-mono text-faint">Conversational AI</span>
                <Link
                  to="/projects/campus-copilot"
                  className="text-xs font-mono font-semibold text-cobalt hover:underline inline-flex items-center gap-1"
                >
                  <span>Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Panel 3: Neuroverse 2K26 Website */}
            <div className="p-6 sm:p-8 rounded-3xl bg-surface border border-black/[0.08] dark:border-white/[0.1] space-y-4 flex flex-col justify-between shadow-xs">
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="text-emerald-600 dark:text-emerald-400 uppercase font-bold">COMPETITION RUNNER-UP</span>
                  <span className="text-faint">2026</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-ink">
                  {neuroverseProject.displayTitle}
                </h3>
                <p className="text-xs text-muted leading-relaxed line-clamp-3">
                  Official national symposium event website built during Round 2 of the PixelCraft competition at ADCET, earning 2nd Place nationally.
                </p>
                <div className="p-3 rounded-xl bg-subtle/80 text-[10px] font-mono text-muted space-y-1">
                  <div><strong>Result:</strong> Runner-Up (2nd Place National)</div>
                  <div><strong>Built in:</strong> Under timed competition constraints.</div>
                </div>
              </div>

              <div className="pt-4 border-t border-black/[0.06] dark:border-white/[0.08] flex items-center justify-between">
                <span className="text-[11px] font-mono text-faint">Event Web App</span>
                <Link
                  to="/projects/neuroverse-2k26-website"
                  className="text-xs font-mono font-semibold text-cobalt hover:underline inline-flex items-center gap-1"
                >
                  <span>Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ============================================================
          SECTION 05: TECHNICAL RADAR & TRANSPARENCY MATRIX
          ============================================================ */}
      <section className="py-20 sm:py-28 border-b border-black/[0.08] dark:border-white/[0.08] bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-black/[0.08] dark:border-white/[0.08] pb-6">
            <div className="space-y-1">
              <span className="text-[11px] font-mono uppercase tracking-widest text-cobalt font-bold">
                TECHNICAL ECOSYSTEM &bull; ZERO FABRICATION
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-ink tracking-tight">
                Discipline, Tools &amp; Foundations
              </h2>
            </div>
            <Link
              to="/skills"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-cobalt hover:underline"
            >
              <span>Explore Full Ecosystem</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Box 1: Core Foundations */}
            <div className="p-6 rounded-2xl bg-subtle border border-black/[0.06] dark:border-white/[0.08] space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-ink uppercase">
                <Terminal className="w-4 h-4 text-cobalt" />
                <span>Foundational Study</span>
              </div>
              <ul className="text-xs text-muted space-y-2 pt-1 font-mono">
                <li>&bull; C Procedural Programming</li>
                <li>&bull; Memory Allocation &amp; Pointers</li>
                <li>&bull; Data Structures &amp; Complexity</li>
                <li>&bull; Computational Logic</li>
              </ul>
              <div className="pt-3 border-t border-black/[0.06] dark:border-white/[0.08] text-[10px] font-mono text-faint">
                Academically practiced daily in college coursework.
              </div>
            </div>

            {/* Box 2: Active Learning */}
            <div className="p-6 rounded-2xl bg-subtle border border-black/[0.06] dark:border-white/[0.08] space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-ink uppercase">
                <Activity className="w-4 h-4 text-coral" />
                <span>Currently Learning</span>
              </div>
              <ul className="text-xs text-muted space-y-2 pt-1 font-mono">
                <li>&bull; Linux Systems &amp; Bash Scripting</li>
                <li>&bull; Python for Data Analysis</li>
                <li>&bull; Network Protocols (TCP/IP, DNS)</li>
                <li>&bull; Object-Oriented Principles in C++</li>
              </ul>
              <div className="pt-3 border-t border-black/[0.06] dark:border-white/[0.08] text-[10px] font-mono text-faint">
                Targeting post-midsem structured milestones.
              </div>
            </div>

            {/* Box 3: Modern Prototyping */}
            <div className="p-6 rounded-2xl bg-subtle border border-black/[0.06] dark:border-white/[0.08] space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-ink uppercase">
                <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <span>Frameworks Explored</span>
              </div>
              <ul className="text-xs text-muted space-y-2 pt-1 font-mono">
                <li>&bull; TypeScript &amp; React 19</li>
                <li>&bull; Tailwind CSS v4 &amp; Vite</li>
                <li>&bull; Supabase PostgreSQL &amp; RLS</li>
                <li>&bull; Tesseract.js &amp; HTML5 Canvas</li>
              </ul>
              <div className="pt-3 border-t border-black/[0.06] dark:border-white/[0.08] text-[10px] font-mono text-faint">
                Used in hackathons &amp; application prototyping.
              </div>
            </div>

            {/* Box 4: AI Acceleration */}
            <div className="p-6 rounded-2xl bg-subtle border border-black/[0.06] dark:border-white/[0.08] space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-ink uppercase">
                <Bot className="w-4 h-4 text-emerald-600" />
                <span>AI Engineering Tooling</span>
              </div>
              <ul className="text-xs text-muted space-y-2 pt-1 font-mono">
                <li>&bull; Google Gemini API &amp; LLM Endpoints</li>
                <li>&bull; Cursor IDE &amp; Copilot Accelerators</li>
                <li>&bull; Prompt Engineering &amp; Evaluation</li>
                <li>&bull; Claude &amp; ChatGPT Synthesis</li>
              </ul>
              <div className="pt-3 border-t border-black/[0.06] dark:border-white/[0.08] text-[10px] font-mono text-faint">
                Leveraged to accelerate building and iteration speed.
              </div>
            </div>

          </div>

          {/* Honesty Disclosure Banner */}
          <div className="p-5 rounded-2xl bg-subtle/80 border border-black/[0.06] dark:border-white/[0.08] flex items-start gap-3.5 text-xs text-muted">
            <ShieldCheck className="w-4 h-4 text-cobalt shrink-0 mt-0.5" />
            <p className="leading-relaxed font-sans">
              <strong className="text-ink">Transparency Policy:</strong> Harshad openly differentiates between core computational languages (such as C) independently mastered in collegiate study versus higher-level frontend and cloud frameworks deployed with AI assistance during hackathons.
            </p>
          </div>

        </div>
      </section>

      {/* ============================================================
          SECTION 06: CREATIVE JOURNAL — SHIV.PREMI_1630
          ============================================================ */}
      <section className="py-20 sm:py-28 border-b border-black/[0.08] dark:border-white/[0.08] bg-paper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-black/[0.08] dark:border-white/[0.08] pb-6">
            <div className="space-y-1">
              <span className="text-[11px] font-mono uppercase tracking-widest text-coral font-bold">
                VISUAL JOURNAL &bull; SHIV.PREMI_1630
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-ink tracking-tight">
                Frames, places, and stories — collected along the way.
              </h2>
            </div>
            <Link
              to="/creative"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-cobalt hover:underline"
            >
              <span>Explore Creative Gallery</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">

            {/* Visual Narrative Left */}
            <div className="md:col-span-5 space-y-5">
              <p className="text-sm sm:text-base text-muted leading-relaxed font-sans">
                When I step away from code, I view the world through lens glass and open asphalt. Under the moniker <strong className="text-ink font-mono text-xs">shiv.premi_1630</strong>, I document candid moments across Maharashtra, heritage forts, and motorcycling touring paths.
              </p>

              <div className="p-4 rounded-2xl bg-surface border border-black/[0.08] dark:border-white/[0.1] space-y-2">
                <span className="text-[10px] font-mono uppercase text-coral font-bold block">
                  Aspirational Circuit
                </span>
                <h4 className="font-serif text-lg font-bold text-ink">
                  The All-India Motorcycle Expedition
                </h4>
                <p className="text-xs text-muted leading-relaxed">
                  A long-term personal ambition to journey across the expanses of India on two wheels, progressively training saddle endurance and field repair skills throughout college.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  to="/explorations"
                  className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-cobalt hover:underline"
                >
                  <span>View Exploration Readiness Plan</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Visual Grid Right */}
            <div className="md:col-span-7 grid grid-cols-2 gap-4">
              <div className="p-6 rounded-3xl bg-surface border border-black/[0.08] dark:border-white/[0.1] space-y-3 shadow-xs">
                <div className="text-[10px] font-mono text-muted uppercase">DISCIPLINE // 01</div>
                <h4 className="font-serif text-xl font-bold text-ink">Heritage &amp; Architecture</h4>
                <p className="text-xs text-muted leading-relaxed">
                  Capturing centuries-old stone forts, temple geometry, and cultural textures in natural sunlight.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-surface border border-black/[0.08] dark:border-white/[0.1] space-y-3 shadow-xs">
                <div className="text-[10px] font-mono text-muted uppercase">DISCIPLINE // 02</div>
                <h4 className="font-serif text-xl font-bold text-ink">Highway Landscapes</h4>
                <p className="text-xs text-muted leading-relaxed">
                  Monsoon ghats, coastal corridors of the Konkan, and sweeping misty mountain ridges.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-surface border border-black/[0.08] dark:border-white/[0.1] space-y-3 shadow-xs">
                <div className="text-[10px] font-mono text-muted uppercase">DISCIPLINE // 03</div>
                <h4 className="font-serif text-xl font-bold text-ink">Cinematography</h4>
                <p className="text-xs text-muted leading-relaxed">
                  Rhythmic pacing, color grading, and short-form storytelling capturing the raw feeling of movement.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-surface border border-black/[0.08] dark:border-white/[0.1] space-y-3 shadow-xs">
                <div className="text-[10px] font-mono text-muted uppercase">DISCIPLINE // 04</div>
                <h4 className="font-serif text-xl font-bold text-ink">Field Storytelling</h4>
                <p className="text-xs text-muted leading-relaxed">
                  Collecting candid conversations, remote roadside chai stalls, and spontaneous human connection.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ============================================================
          SECTION 07: ACHIEVEMENTS & LEADERSHIP ARCHIVE
          ============================================================ */}
      <section className="py-20 sm:py-28 border-b border-black/[0.08] dark:border-white/[0.08] bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-black/[0.08] dark:border-white/[0.08] pb-6">
            <div className="space-y-1">
              <span className="text-[11px] font-mono uppercase tracking-widest text-muted font-bold">
                CONFIRMED RECOGNITION &bull; AUDITED RECORD
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-ink tracking-tight">
                Honors, Competition &amp; Governance
              </h2>
            </div>
            <Link
              to="/achievements"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-cobalt hover:underline"
            >
              <span>View All Certificates</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Achievement 1: PixelCraft */}
            <div className="p-6 sm:p-8 rounded-3xl bg-subtle border border-black/[0.08] dark:border-white/[0.1] space-y-3 shadow-xs">
              <div className="flex items-center justify-between text-[11px] font-mono">
                <span className="text-coral font-bold uppercase">NATIONAL 2ND PLACE</span>
                <span className="text-faint">2026</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-ink">
                PixelCraft Runner-Up
              </h3>
              <p className="text-xs text-muted leading-relaxed">
                Secured 2nd place in PixelCraft at the Neuroverse 2K26 National Symposium across two intense competitive web building rounds.
              </p>
              <div className="pt-3 border-t border-black/[0.06] dark:border-white/[0.08] text-[10px] font-mono text-faint">
                ADCET Ashta, Sangli
              </div>
            </div>

            {/* Achievement 2: SSC Subject Topper */}
            <div className="p-6 sm:p-8 rounded-3xl bg-subtle border border-black/[0.08] dark:border-white/[0.1] space-y-3 shadow-xs">
              <div className="flex items-center justify-between text-[11px] font-mono">
                <span className="text-cobalt font-bold uppercase">ACADEMIC HONORS</span>
                <span className="text-faint">2024</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-ink">
                Subject Topper (Maths, Hindi, Marathi)
              </h3>
              <p className="text-xs text-muted leading-relaxed">
                Achieved highest marks in Mathematics, Hindi, and Marathi in Class 10 SSC board examinations at Padua High School.
              </p>
              <div className="pt-3 border-t border-black/[0.06] dark:border-white/[0.08] text-[10px] font-mono text-faint">
                Padua High School / State Board
              </div>
            </div>

            {/* Achievement 3: Head Boy */}
            <div className="p-6 sm:p-8 rounded-3xl bg-subtle border border-black/[0.08] dark:border-white/[0.1] space-y-3 shadow-xs">
              <div className="flex items-center justify-between text-[11px] font-mono">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold uppercase">ELECTED LEADERSHIP</span>
                <span className="text-faint">2022 – 2024</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-ink">
                School Head Boy (2 Consecutive Years)
              </h3>
              <p className="text-xs text-muted leading-relaxed">
                Elected to lead the student council across Classes 9 and 10, managing morning assemblies and orchestrating Annual Day celebrations twice.
              </p>
              <div className="pt-3 border-t border-black/[0.06] dark:border-white/[0.08] text-[10px] font-mono text-faint">
                Padua High School, Mankhurd
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ============================================================
          SECTION 08: MONUMENTAL PHILOSOPHY MOMENT
          ============================================================ */}
      <section className="py-24 sm:py-36 bg-[#111215] text-[#FAF7F2] text-center relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#FB923C] font-bold">
            THE INTERNAL NORTH STAR
          </span>
          <h2 className="font-serif text-4xl sm:text-7xl lg:text-8xl italic font-normal text-[#FAF7F2] tracking-tight leading-[1.05]">
            &ldquo;Pressure is a privilege.&rdquo;
          </h2>
          <p className="text-sm sm:text-base text-[#A4A4AF] max-w-xl mx-auto font-sans leading-relaxed pt-2">
            Expectations exist because capability exists. Every high-stakes hackathon, difficult C bug, and academic milestone is an opportunity to prove resilience.
          </p>
        </div>
      </section>

      {/* ============================================================
          SECTION 09: INTERACTIVE PERSONAL AI GATEWAY
          ============================================================ */}
      <section className="py-20 sm:py-28 border-b border-black/[0.08] dark:border-white/[0.08] bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cobalt/10 text-cobalt text-xs font-mono font-bold uppercase tracking-wider">
              <Bot className="w-3.5 h-3.5" />
              <span>NATURAL LANGUAGE EXPLORATION</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-ink tracking-tight">
              Ask Harshad AI
            </h2>
            <p className="text-xs sm:text-sm text-muted max-w-xl mx-auto font-sans leading-relaxed">
              Explore Harshad&apos;s verified work, compare projects, or inspect his engineering roadmap through natural conversation grounded in public facts.
            </p>
          </div>

          {/* Interactive In-Page Query Console */}
          <div className="p-6 sm:p-8 rounded-3xl bg-subtle border border-black/[0.08] dark:border-white/[0.1] space-y-5 shadow-sm">

            {/* Quick Chips */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              <button
                type="button"
                onClick={() => handleInlineAsk("Tell me about the FALCON-404 project.")}
                className="px-3 py-1.5 rounded-xl bg-surface border border-black/[0.08] dark:border-white/[0.1] text-xs font-mono text-ink hover:text-cobalt hover:border-cobalt transition-colors cursor-pointer"
              >
                Tell me about FALCON-404 →
              </button>
              <button
                type="button"
                onClick={() => handleInlineAsk("What skills is he actively learning?")}
                className="px-3 py-1.5 rounded-xl bg-surface border border-black/[0.08] dark:border-white/[0.1] text-xs font-mono text-ink hover:text-cobalt hover:border-cobalt transition-colors cursor-pointer"
              >
                What skills is he learning? →
              </button>
              <button
                type="button"
                onClick={() => handleInlineAsk("Compare FALCON-404 and Arogya AI.")}
                className="px-3 py-1.5 rounded-xl bg-surface border border-black/[0.08] dark:border-white/[0.1] text-xs font-mono text-ink hover:text-cobalt hover:border-cobalt transition-colors cursor-pointer"
              >
                Compare FALCON-404 &amp; Arogya AI →
              </button>
              <button
                type="button"
                onClick={() => handleInlineAsk("How can I contact Harshad?")}
                className="px-3 py-1.5 rounded-xl bg-surface border border-black/[0.08] dark:border-white/[0.1] text-xs font-mono text-ink hover:text-cobalt hover:border-cobalt transition-colors cursor-pointer"
              >
                How can I contact him? →
              </button>
            </div>

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleInlineAsk();
              }}
              className="flex items-center gap-2 pt-2"
            >
              <input
                type="text"
                value={interactiveQuestion}
                onChange={(e) => setInteractiveQuestion(e.target.value)}
                placeholder="Ask any question about Harshad's work, tech stack, or SIH 2026..."
                className="flex-1 px-4 py-3 rounded-xl bg-surface border border-black/[0.1] dark:border-white/[0.12] text-ink text-xs font-sans focus:border-cobalt focus:outline-none transition-colors"
              />
              <button
                type="submit"
                disabled={!interactiveQuestion.trim() || interactiveLoading}
                className="px-5 py-3 rounded-xl bg-ink text-paper text-xs font-mono font-semibold uppercase tracking-wider hover:opacity-90 disabled:opacity-40 transition-all cursor-pointer shrink-0"
              >
                {interactiveLoading ? 'Thinking...' : 'Ask AI'}
              </button>
            </form>

            {/* Response Area */}
            {interactiveLoading && (
              <div className="flex items-center gap-2 p-4 rounded-xl bg-surface border border-black/[0.06] dark:border-white/[0.08] text-xs font-mono text-muted">
                <span className="w-2 h-2 rounded-full bg-cobalt animate-ping" />
                <span>Consulting verified portfolio knowledge base...</span>
              </div>
            )}

            {interactiveResponse && !interactiveLoading && (
              <div className="p-5 rounded-2xl bg-surface border border-black/[0.08] dark:border-white/[0.1] space-y-3 text-xs leading-relaxed text-ink animate-in fade-in duration-150">
                <div className="flex items-center justify-between border-b border-black/[0.06] dark:border-white/[0.08] pb-2 text-[10px] font-mono text-muted">
                  <span className="text-cobalt font-bold uppercase">AI ANSWER (GROUNDED)</span>
                  <span>Grounded in verified records</span>
                </div>
                <div className="whitespace-pre-wrap font-sans leading-relaxed text-ink/90">
                  {interactiveResponse}
                </div>
                {interactiveRoute && (
                  <div className="pt-2">
                    <Link
                      to={interactiveRoute}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-subtle text-cobalt font-mono text-[11px] font-semibold hover:underline"
                    >
                      <span>{interactiveRouteLabel || `Explore ${interactiveRoute}`}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                )}
              </div>
            )}

          </div>

        </div>
      </section>

      {/* ============================================================
          SECTION 10: CLOSING CONTACT & EDITORIAL INVITATION
          ============================================================ */}
      <section className="py-20 sm:py-28 bg-paper">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-center">
          <span className="text-[11px] font-mono uppercase tracking-widest text-cobalt font-bold">
            OPEN TO OPPORTUNITIES &bull; 2026 – 2030
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl font-normal text-ink tracking-tight">
            Interested in collaborating <br />
            or discussing engineering?
          </h2>
          <p className="text-sm sm:text-base text-muted max-w-lg mx-auto font-sans leading-relaxed">
            I am always open to discussing cybersecurity research, AI-assisted prototype design, DevSecOps workflows, or creative photography.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href={`mailto:${contactConfig.email}`}
              className="px-8 py-4 rounded-xl bg-ink text-paper text-xs font-mono font-semibold uppercase tracking-wider hover:opacity-90 shadow-md transition-all"
            >
              Send an Email: {contactConfig.email}
            </a>
            <Link
              to="/contact"
              className="px-8 py-4 rounded-xl bg-surface border border-black/[0.1] dark:border-white/[0.12] text-ink hover:border-black/30 text-xs font-mono font-semibold uppercase tracking-wider transition-all"
            >
              Direct Message Composer
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
