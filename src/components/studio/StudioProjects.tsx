import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ExternalLink, 
  ShieldAlert, 
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { verifiedProjects } from '../../data/projects';

export const StudioProjects: React.FC = () => {
  const [activeForensicTab, setActiveForensicTab] = useState<'ela' | 'ocr' | 'meta'>('ela');

  const falconProject = verifiedProjects.find(p => p.slug === 'falcon-404') || verifiedProjects[0];
  const secondaryProjects = verifiedProjects.filter(p => p.slug !== 'falcon-404');

  return (
    <section 
      id="chapter-02" 
      className="py-20 sm:py-32 bg-paper border-b border-slate-200/90 dark:border-white/10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-slate-200 dark:border-white/10 pb-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2.5 text-xs font-mono tracking-widest text-cobalt uppercase font-bold">
              <span className="w-2.5 h-2.5 rounded-full bg-coral inline-block animate-pulse" />
              <span className="text-ink">INDEX 03</span>
              <span className="text-slate-300 dark:text-slate-700">//</span>
              <span>SELECTED WORK &amp; CASE STUDIES</span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-ink tracking-tight leading-[1.05]">
              Ideas are interesting. <br />
              <span className="font-bold text-cobalt italic">Building them is better.</span>
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans max-w-xl font-medium">
              Verified software implementations, national hackathon builds, and systems engineering. Each case study documents honest architecture, measurable outcomes, and verified technical limitations.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-surface border border-slate-300 dark:border-white/15 text-xs font-mono font-bold text-ink hover:text-cobalt hover:border-cobalt transition-colors shadow-xs"
            >
              <span>All 7 Verified Projects</span>
              <ArrowRight className="w-3.5 h-3.5 text-coral" />
            </Link>
          </div>
        </div>

        {/* ============================================================
            FLAGSHIP SPOTLIGHT: FALCON-404 (Smart India Hackathon 2026)
            ============================================================ */}
        <div className="p-8 sm:p-10 lg:p-12 rounded-3xl bg-surface border-2 border-cobalt/30 dark:border-cobalt/40 shadow-sm relative overflow-hidden space-y-10">
          
          {/* Flagship Header Banner */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-white/10">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-cobalt text-white text-xs font-mono font-bold tracking-wide uppercase flex items-center gap-1.5 shadow-xs">
                <ShieldAlert className="w-3.5 h-3.5" />
                <span>★ FLAGSHIP CASE STUDY // SMART INDIA HACKATHON 2026</span>
              </span>
              <span className="text-xs font-mono text-muted hidden md:inline">
                PROBLEM ID: 26188 (MINISTRY OF HOME AFFAIRS / NCRB)
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-800">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>ACTIVE FORENSIC ENGINE</span>
            </div>
          </div>

          {/* Asymmetric Flagship Layout: Interactive Forensic Schematic (7 cols) + Architectural Dossier (5 cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left: Interactive Forensic Schematic Preview (7 Cols) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="p-6 rounded-2xl bg-slate-900 text-slate-100 border border-slate-800 shadow-xl space-y-5">
                
                {/* Forensic Console Top Bar */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 text-xs font-mono">
                  <div className="flex items-center gap-2 text-slate-400">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <span className="ml-2 font-bold text-slate-200">FALCON-404 FORENSIC LAB</span>
                  </div>
                  <span className="text-emerald-400 font-mono text-[11px]">CLIENT-SIDE PRIVACY ON</span>
                </div>

                {/* Interactive Mode Switches */}
                <div className="flex items-center gap-2 text-xs font-mono">
                  <button
                    type="button"
                    onClick={() => setActiveForensicTab('ela')}
                    className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                      activeForensicTab === 'ela'
                        ? 'bg-cobalt text-white font-bold'
                        : 'bg-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    Error Level Analysis (ELA)
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveForensicTab('ocr')}
                    className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                      activeForensicTab === 'ocr'
                        ? 'bg-cobalt text-white font-bold'
                        : 'bg-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    Tesseract.js OCR Pipeline
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveForensicTab('meta')}
                    className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                      activeForensicTab === 'meta'
                        ? 'bg-cobalt text-white font-bold'
                        : 'bg-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    Container Metadata &amp; Hashes
                  </button>
                </div>

                {/* Dynamic Screen View */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs space-y-3 min-h-[180px]">
                  {activeForensicTab === 'ela' && (
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-amber-400">
                        <span>[ELA] Compression Anomaly Scan</span>
                        <span className="text-emerald-400">PASS (No Splice Detected)</span>
                      </div>
                      <div className="w-full bg-slate-900 rounded-full h-2 overflow-hidden">
                        <div className="bg-gradient-to-r from-emerald-500 via-amber-500 to-rose-500 h-2 w-3/4 rounded-full" />
                      </div>
                      <p className="text-slate-400 text-[11px] leading-relaxed pt-1">
                        HTML5 Canvas computes byte-level JPEG resave differences. Detects digitally spliced text blocks and altered photo boundaries by measuring high-frequency DCT quantization noise.
                      </p>
                      <div className="flex gap-4 text-[10px] text-slate-500 pt-1">
                        <span>DCT Frequency: 8x8</span>
                        <span>Sensitivity: 99.2%</span>
                        <span>Latency: 1.1s</span>
                      </div>
                    </div>
                  )}

                  {activeForensicTab === 'ocr' && (
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-sky-400">
                        <span>[OCR] Browser-Side Text Extraction</span>
                        <span className="text-emerald-400">STATUS: READY</span>
                      </div>
                      <div className="p-2.5 rounded bg-slate-900 text-slate-300 text-[11px] space-y-1">
                        <div>&gt; Name: [REDACTED FOR PRIVACY]</div>
                        <div>&gt; ID Pattern: \d&#123;4&#125; \d&#123;4&#125; \d&#123;4&#125; (Matched)</div>
                        <div>&gt; Bounding Box Alignment: 0.98 Conf</div>
                      </div>
                      <p className="text-slate-400 text-[11px] leading-relaxed">
                        Tesseract.js runs inside WebWorkers without transmitting identity documents to external cloud APIs, upholding strict personal data protection laws.
                      </p>
                    </div>
                  )}

                  {activeForensicTab === 'meta' && (
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-purple-400">
                        <span>[META] Container Signature Analysis</span>
                        <span className="text-emerald-400">INTEGRITY VERIFIED</span>
                      </div>
                      <div className="p-2.5 rounded bg-slate-900 text-slate-300 text-[11px] space-y-1">
                        <div>&gt; SHA-256: 4a8f9b...3c1e (Immutable Local Key)</div>
                        <div>&gt; Software Header: Adobe Photoshop (Flagged for Review)</div>
                        <div>&gt; EXIF ColorSpace: sRGB Standard</div>
                      </div>
                      <p className="text-slate-400 text-[11px] leading-relaxed">
                        Evaluates image headers for editing software artifacts, mismatched timestamps, and EXIF alteration traces.
                      </p>
                    </div>
                  )}
                </div>

                {/* Live Metric Pills */}
                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-800 text-center font-mono">
                  <div className="p-2 rounded bg-slate-800/60">
                    <span className="block text-cobalt font-bold text-sm">&lt; 1.4s</span>
                    <span className="text-[10px] text-slate-400">Client Latency</span>
                  </div>
                  <div className="p-2 rounded bg-slate-800/60">
                    <span className="block text-emerald-400 font-bold text-sm">100%</span>
                    <span className="text-[10px] text-slate-400">On-Device Privacy</span>
                  </div>
                  <div className="p-2 rounded bg-slate-800/60">
                    <span className="block text-amber-400 font-bold text-sm">3-Stage</span>
                    <span className="text-[10px] text-slate-400">Forensic Pipeline</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Right: Architectural Case Study Dossier (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono text-cobalt uppercase font-bold tracking-wider block">
                  PROJECT LEAD &bull; SOLE APPLICATION DEVELOPER
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl font-bold text-ink tracking-tight">
                  {falconProject.title}
                </h3>
                <p className="text-xs font-mono text-muted">
                  Team Falcon (ID: ISIH26106) &bull; Seva First Demonstration
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
                {falconProject.summary}
              </p>

              {/* Verified Capabilities */}
              <div className="space-y-2 pt-1">
                <div className="text-[11px] font-mono uppercase tracking-wider text-muted font-bold">
                  KEY VERIFIED CAPABILITIES
                </div>
                <div className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300 font-sans">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>Client-side OCR with Tesseract.js eliminates server leak risks.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>Error Level Analysis (ELA) spots resaved pixel compression discrepancies.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>Transparent explainability indicators instead of opaque black-box AI scores.</span>
                  </div>
                </div>
              </div>

              {/* Engineering Truth Note */}
              <div className="p-4 rounded-xl bg-amber-50/80 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 text-xs font-sans text-amber-900 dark:text-amber-300 space-y-1">
                <div className="flex items-center gap-1.5 font-mono font-bold text-[10px] uppercase text-amber-800 dark:text-amber-400">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>ENGINEERING TRUTH &bull; LIMITATIONS</span>
                </div>
                <p className="leading-relaxed">
                  Performs screening heuristic analysis; does not claim official legal authentication or direct integration with government registries.
                </p>
              </div>

              {/* Action Links */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  to="/projects/falcon-404"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cobalt text-white font-mono text-xs uppercase font-bold tracking-wider hover:bg-blue-700 transition-colors shadow-xs"
                >
                  <span>Inspect Deep Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                {falconProject.links.repositoryUrl && (
                  <a
                    href={falconProject.links.repositoryUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-surface border border-slate-300 dark:border-white/15 text-xs font-mono font-bold text-ink hover:text-cobalt hover:border-cobalt transition-colors shadow-xs"
                  >
                    <span>GitHub Code</span>
                    <ExternalLink className="w-3.5 h-3.5 text-muted" />
                  </a>
                )}
              </div>

            </div>

          </div>

        </div>

        {/* ============================================================
            ASYMMETRIC EDITORIAL GRID: 6 SECONDARY VERIFIED PROJECTS
            ============================================================ */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-4 text-xs font-mono">
            <span className="font-bold text-ink uppercase tracking-wider">
              MORE VERIFIED BUILDS &bull; HACKATHONS, COMPETITIONS &amp; SYSTEMS
            </span>
            <span className="text-muted">
              6 CASE STUDIES
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Project 02: Arogya AI (col-span-7) */}
            {secondaryProjects[0] && (
              <div className="md:col-span-7 p-7 rounded-2xl bg-surface border border-slate-200 dark:border-white/10 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between space-y-6 group">
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 font-bold">
                      02 // WCE SANGLI AARAMBH HACKATHON
                    </span>
                    <span className="text-muted font-bold">DEMO DATASET</span>
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ink group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                      {secondaryProjects[0].title}
                    </h3>
                    <p className="text-xs font-mono text-emerald-800 dark:text-emerald-400 font-medium">
                      {secondaryProjects[0].tagline}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
                    {secondaryProjects[0].summary}
                  </p>

                  <div className="flex flex-wrap gap-1.5 text-xs font-mono text-muted pt-2">
                    {secondaryProjects[0].technologies.map(tech => (
                      <span key={tech} className="px-2 py-0.5 rounded bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-white/10 flex items-center justify-between text-xs font-mono">
                  <span className="text-muted">Role: Primary Technical Contributor</span>
                  <Link
                    to={`/projects/${secondaryProjects[0].slug}`}
                    className="inline-flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400 font-bold hover:underline"
                  >
                    <span>Read Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            )}

            {/* Project 03: Campus Copilot (col-span-5) */}
            {secondaryProjects[1] && (
              <div className="md:col-span-5 p-7 rounded-2xl bg-surface border border-slate-200 dark:border-white/10 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between space-y-6 group">
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/40 text-cobalt border border-blue-200 dark:border-blue-800 font-bold">
                      03 // TANTRAPARV 2K26
                    </span>
                    <span className="text-muted font-bold">CAMPUS AI</span>
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="font-serif text-2xl font-bold text-ink group-hover:text-cobalt transition-colors">
                      {secondaryProjects[1].title}
                    </h3>
                    <p className="text-xs font-mono text-cobalt font-medium">
                      {secondaryProjects[1].tagline}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
                    {secondaryProjects[1].summary}
                  </p>

                  <div className="flex flex-wrap gap-1.5 text-xs font-mono text-muted pt-2">
                    {secondaryProjects[1].technologies.map(tech => (
                      <span key={tech} className="px-2 py-0.5 rounded bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-white/10 flex items-center justify-between text-xs font-mono">
                  <span className="text-muted">Sharad Inst. of Tech</span>
                  <Link
                    to={`/projects/${secondaryProjects[1].slug}`}
                    className="inline-flex items-center gap-1.5 text-cobalt font-bold hover:underline"
                  >
                    <span>Read Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            )}

            {/* Project 04: Neuroverse 2K26 Website (col-span-5) */}
            {secondaryProjects[2] && (
              <div className="md:col-span-5 p-7 rounded-2xl bg-surface border border-slate-200 dark:border-white/10 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between space-y-6 group">
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="px-2.5 py-1 rounded-full bg-orange-50 dark:bg-orange-950/40 text-coral border border-orange-200 dark:border-orange-800 font-bold">
                      04 // PIXELCRAFT 2ND PLACE
                    </span>
                    <span className="text-muted font-bold">ROUND 2</span>
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="font-serif text-2xl font-bold text-ink group-hover:text-coral transition-colors">
                      {secondaryProjects[2].title}
                    </h3>
                    <p className="text-xs font-mono text-coral font-medium">
                      {secondaryProjects[2].tagline}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
                    {secondaryProjects[2].summary}
                  </p>

                  <div className="flex flex-wrap gap-1.5 text-xs font-mono text-muted pt-2">
                    {secondaryProjects[2].technologies.map(tech => (
                      <span key={tech} className="px-2 py-0.5 rounded bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-white/10 flex items-center justify-between text-xs font-mono">
                  <span className="text-muted">ADCET Ashta</span>
                  <Link
                    to={`/projects/${secondaryProjects[2].slug}`}
                    className="inline-flex items-center gap-1.5 text-coral font-bold hover:underline"
                  >
                    <span>Read Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            )}

            {/* Project 05: GADA ELECTRONICS (col-span-7) */}
            {secondaryProjects[3] && (
              <div className="md:col-span-7 p-7 rounded-2xl bg-surface border border-slate-200 dark:border-white/10 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between space-y-6 group">
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="px-2.5 py-1 rounded-full bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800 font-bold">
                      05 // PIXELCRAFT 2ND PLACE
                    </span>
                    <span className="text-muted font-bold">ROUND 1 TIMED BUILD</span>
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ink group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                      {secondaryProjects[3].title}
                    </h3>
                    <p className="text-xs font-mono text-amber-700 dark:text-amber-400 font-medium">
                      {secondaryProjects[3].tagline}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
                    {secondaryProjects[3].summary}
                  </p>

                  <div className="flex flex-wrap gap-1.5 text-xs font-mono text-muted pt-2">
                    {secondaryProjects[3].technologies.map(tech => (
                      <span key={tech} className="px-2 py-0.5 rounded bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-white/10 flex items-center justify-between text-xs font-mono">
                  <span className="text-muted">Timed Hackathon Sprint</span>
                  <Link
                    to={`/projects/${secondaryProjects[3].slug}`}
                    className="inline-flex items-center gap-1.5 text-amber-700 dark:text-amber-400 font-bold hover:underline"
                  >
                    <span>Read Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            )}

            {/* Project 06: ArtBook AI (col-span-6) */}
            {secondaryProjects[4] && (
              <div className="md:col-span-6 p-7 rounded-2xl bg-surface border border-slate-200 dark:border-white/10 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between space-y-6 group">
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="px-2.5 py-1 rounded-full bg-purple-50 dark:bg-purple-950/40 text-purple-800 dark:text-purple-300 border border-purple-200 dark:border-purple-800 font-bold">
                      06 // FOUNDER&apos;S EXPO E-CELL
                    </span>
                    <span className="text-muted font-bold">COMMISSION PLATFORM</span>
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="font-serif text-2xl font-bold text-ink group-hover:text-purple-700 dark:group-hover:text-purple-400 transition-colors">
                      {secondaryProjects[4].title}
                    </h3>
                    <p className="text-xs font-mono text-purple-700 dark:text-purple-400 font-medium">
                      {secondaryProjects[4].tagline}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
                    {secondaryProjects[4].summary}
                  </p>

                  <div className="flex flex-wrap gap-1.5 text-xs font-mono text-muted pt-2">
                    {secondaryProjects[4].technologies.map(tech => (
                      <span key={tech} className="px-2 py-0.5 rounded bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-white/10 flex items-center justify-between text-xs font-mono">
                  <span className="text-muted">ADCET Ashta</span>
                  <Link
                    to={`/projects/${secondaryProjects[4].slug}`}
                    className="inline-flex items-center gap-1.5 text-purple-700 dark:text-purple-400 font-bold hover:underline"
                  >
                    <span>Read Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            )}

            {/* Project 07: Eco-Friendly Planting System (col-span-6) */}
            {secondaryProjects[5] && (
              <div className="md:col-span-6 p-7 rounded-2xl bg-surface border border-slate-200 dark:border-white/10 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between space-y-6 group">
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="px-2.5 py-1 rounded-full bg-lime-50 dark:bg-lime-950/40 text-lime-800 dark:text-lime-300 border border-lime-200 dark:border-lime-800 font-bold">
                      07 // NATIONAL SCIENCE CONGRESS
                    </span>
                    <span className="text-muted font-bold">DISTRICT LEVEL</span>
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="font-serif text-2xl font-bold text-ink group-hover:text-lime-800 dark:group-hover:text-lime-400 transition-colors">
                      {secondaryProjects[5].title}
                    </h3>
                    <p className="text-xs font-mono text-lime-800 dark:text-lime-400 font-medium">
                      {secondaryProjects[5].tagline}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
                    {secondaryProjects[5].summary}
                  </p>

                  <div className="flex flex-wrap gap-1.5 text-xs font-mono text-muted pt-2">
                    {secondaryProjects[5].technologies.map(tech => (
                      <span key={tech} className="px-2 py-0.5 rounded bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-white/10 flex items-center justify-between text-xs font-mono">
                  <span className="text-muted">Environmental Engineering</span>
                  <Link
                    to={`/projects/${secondaryProjects[5].slug}`}
                    className="inline-flex items-center gap-1.5 text-lime-800 dark:text-lime-400 font-bold hover:underline"
                  >
                    <span>Read Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
