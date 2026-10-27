import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ExternalLink,
  Video,
  FileText,
  ShieldAlert,
  Award,
  AlertTriangle,
  Cpu,
  Lightbulb,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Compass,
  Activity,
  Bot,
  Palette,
  Leaf,
  Camera
} from 'lucide-react';
import { GithubIcon } from '../components/ui/BrandIcons';
import { verifiedProjects } from '../data/projects';
import { ProjectCoverArtwork } from '../components/ui/ProjectCoverArtwork';

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const project = verifiedProjects.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  const currentIndex = verifiedProjects.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? verifiedProjects[currentIndex - 1] : null;
  const nextProject = currentIndex < verifiedProjects.length - 1 ? verifiedProjects[currentIndex + 1] : null;

  const hasCoverAsset = Boolean(project.assets.cover && project.assets.cover.trim() !== "");
  const hasScreenshots = project.assets.screenshots && project.assets.screenshots.length > 0;
  const hasArchDiagram = Boolean(project.assets.architectureDiagram && project.assets.architectureDiagram.trim() !== "");
  const hasVideoAsset = Boolean(project.assets.demoVideo && project.assets.demoVideo.trim() !== "");

  // Link checks
  const hasRepoLink = Boolean(project.links.repositoryUrl && project.links.repositoryUrl.trim() !== "");
  const hasLiveDemoLink = Boolean(project.links.liveDemoUrl && project.links.liveDemoUrl.trim() !== "");
  const hasWebsiteLink = Boolean(project.links.websiteUrl && project.links.websiteUrl.trim() !== "");
  const hasDocLink = Boolean(project.links.documentationUrl && project.links.documentationUrl.trim() !== "");
  const hasVideoLink = Boolean(project.links.demoVideoUrl && project.links.demoVideoUrl.trim() !== "");

  // Project-specific atmospheric soul
  const getProjectSoul = () => {
    switch (project.slug) {
      case 'falcon-404':
        return {
          badge: 'CYBERSECURITY & DIGITAL TRUST ENGINE',
          themeBorder: 'border-cobalt/40',
          themeShadow: 'shadow-chromatic',
          canvasGrad: 'from-[#EAF3FF] via-[#F4F1FF] to-[#EDE5FF]/40',
          accentColor: '#315EEB',
          accentIcon: ShieldAlert,
          themeBadge: 'bg-cobalt text-white'
        };
      case 'arogya-ai':
        return {
          badge: 'HEALTHCARE CAPACITY & HUMAN PURPOSE',
          themeBorder: 'border-emerald-500/40',
          themeShadow: 'shadow-mint',
          canvasGrad: 'from-[#E8F8F1] via-[#EAF3FF] to-[#D8F6F0]',
          accentColor: '#087F82',
          accentIcon: Activity,
          themeBadge: 'bg-emerald-600 text-white'
        };
      case 'campus-copilot':
        return {
          badge: 'ACCESSIBLE CAMPUS KNOWLEDGE NETWORK',
          themeBorder: 'border-blue-400/40',
          themeShadow: 'shadow-chromatic',
          canvasGrad: 'from-[#EAF3FF] via-[#EDE5FF]/50 to-[#EAF3FF]',
          accentColor: '#3B82F6',
          accentIcon: Bot,
          themeBadge: 'bg-blue-600 text-white'
        };
      case 'neuroverse-2k26-website':
        return {
          badge: 'CREATIVE FRONT-END & SYMPOSIUM STAGE',
          themeBorder: 'border-purple-500/40',
          themeShadow: 'shadow-chromatic',
          canvasGrad: 'from-[#EDE5FF]/60 via-[#F4F1FF] to-[#EDE5FF]/40',
          accentColor: '#7953D6',
          accentIcon: Sparkles,
          themeBadge: 'bg-purple-600 text-white'
        };
      case 'gada-electronics':
        return {
          badge: 'CYBER DIGITAL COMMERCE STOREFRONT CONCEPT',
          themeBorder: 'border-amber-500/40',
          themeShadow: 'shadow-warm',
          canvasGrad: 'from-[#FFF5E6] via-[#FFF0BF]/30 to-[#FFF5E6]',
          accentColor: '#E77936',
          accentIcon: Cpu,
          themeBadge: 'bg-amber-600 text-white'
        };
      case 'artbook-ai':
        return {
          badge: 'CREATIVE TALENT DISCOVERY & MARKETPLACE PROTOTYPE',
          themeBorder: 'border-rose-400/40',
          themeShadow: 'shadow-warm',
          canvasGrad: 'from-[#FFECEA] via-[#FFF5E6] to-[#FFECEA]',
          accentColor: '#E65D59',
          accentIcon: Palette,
          themeBadge: 'bg-rose-500 text-white'
        };
      case 'eco-friendly-planting-system':
      default:
        return {
          badge: 'FOUNDATIONAL SCIENTIFIC ORIGIN (NCSC DISTRICT LEVEL)',
          themeBorder: 'border-lime-500/40',
          themeShadow: 'shadow-mint',
          canvasGrad: 'from-[#E8F8F1] via-[#F4F1FF] to-[#E8F8F1]',
          accentColor: '#15866B',
          accentIcon: Leaf,
          themeBadge: 'bg-emerald-700 text-white'
        };
    }
  };

  const soul = getProjectSoul();
  const AccentIcon = soul.accentIcon;

  return (
    <div className={`min-h-screen bg-gradient-to-b ${soul.canvasGrad} dark:from-paper dark:via-paper dark:to-paper transition-colors duration-250`}>
      <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12">

        {/* Back Navigation Bar */}
        <motion.div initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }} className="flex items-center justify-between">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-muted hover:text-ink transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Return to All 7 Chapters</span>
          </Link>

          <span className="text-[11px] font-mono text-muted">
            CASE STUDY #{currentIndex + 1} OF {verifiedProjects.length}
          </span>
        </motion.div>

        {/* Header Hero Section */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className={`text-[11px] font-mono uppercase px-3 py-1 rounded-full font-bold tracking-wider ${soul.themeBadge} flex items-center gap-1.5 shadow-xs`}>
              <AccentIcon className="w-3.5 h-3.5" />
              <span>{soul.badge}</span>
            </span>

            {project.importance === 'flagship' && (
              <span className="text-xs font-mono uppercase px-3 py-1 rounded-full bg-cobalt text-white font-bold tracking-wider shadow-xs">
                ★ FLAGSHIP ARCHITECTURAL STUDY
              </span>
            )}

            <span className="text-xs font-mono px-3 py-1 rounded-full bg-white dark:bg-card border border-border-hairline capitalize text-ink font-semibold">
              Status: {project.status}
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif text-ink tracking-tight font-normal leading-[1.05]">
            {project.displayTitle}
          </h1>

          <p className="text-base sm:text-xl text-muted font-sans leading-relaxed">
            &mdash; {project.tagline}
          </p>

          {/* Role and Collaboration Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-border-hairline">
            <div className="p-4 rounded-xl bg-white dark:bg-card border border-border-hairline shadow-xs">
              <span className="text-[11px] font-mono uppercase tracking-wider text-muted block mb-1">Confirmed Role</span>
              <span className="text-sm font-semibold text-ink">{project.role}</span>
            </div>

            {project.teamContext && (
              <div className="p-4 rounded-xl bg-white dark:bg-card border border-border-hairline shadow-xs">
                <span className="text-[11px] font-mono uppercase tracking-wider text-muted block mb-1">Team &amp; Context</span>
                <span className="text-xs text-muted leading-relaxed font-sans">{project.teamContext}</span>
              </div>
            )}
          </div>
        </header>

        {/* Workstation Frame with Authentic High-Fidelity Asset */}
        <section className={`rounded-3xl overflow-hidden border ${soul.themeBorder} ${soul.themeShadow} bg-slate-950 shadow-2xl`}>
          {hasCoverAsset ? (
            <div className="flex flex-col">
              {/* Top Workstation Chrome */}
              <div className="px-4 py-2.5 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-[11px] text-slate-300 font-bold pl-2 hidden sm:inline">
                    {project.displayTitle} &bull; Verified Interface View
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700/60 uppercase tracking-wider">
                    {project.domain.split(',')[0]}
                  </span>
                  <span className="text-[10px] text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Authentic Asset
                  </span>
                </div>
              </div>

              {/* Uncropped High-Fidelity Image Container */}
              <div className="w-full bg-slate-950 flex items-center justify-center p-2 sm:p-4 md:p-6">
                <img
                  src={project.assets.cover}
                  alt={project.displayTitle}
                  className="w-full max-h-[580px] object-contain rounded-lg shadow-2xl"
                />
              </div>
            </div>
          ) : (
            <ProjectCoverArtwork
              coverArtwork={project.coverArtwork}
              title={project.displayTitle}
              domain={project.domain}
              importance={project.importance}
              aspectRatio="wide"
            />
          )}
        </section>

        {/* External Verified Links Bar */}
        {(hasRepoLink || hasLiveDemoLink || hasWebsiteLink || hasDocLink || hasVideoLink) && (
          <section className="flex flex-wrap items-center gap-3 p-4 rounded-2xl bg-white dark:bg-card border border-border-hairline shadow-xs">
            <span className="text-xs font-mono text-muted uppercase tracking-wider mr-2 font-semibold">Verified Links:</span>
            {hasRepoLink && (
              <a href={project.links.repositoryUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border-hairline text-xs font-medium text-ink hover:border-cobalt/40 transition-colors">
                <GithubIcon className="w-3.5 h-3.5" />
                <span>Source Code</span>
              </a>
            )}
            {hasLiveDemoLink && (
              <a href={project.links.liveDemoUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cobalt text-xs font-semibold text-white hover:opacity-90 transition-opacity">
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Live Demonstration</span>
              </a>
            )}
            {hasWebsiteLink && (
              <a href={project.links.websiteUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border-hairline text-xs font-medium text-ink hover:border-cobalt/40 transition-colors">
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Website</span>
              </a>
            )}
            {hasDocLink && (
              <a href={project.links.documentationUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border-hairline text-xs font-medium text-ink hover:border-cobalt/40 transition-colors">
                <FileText className="w-3.5 h-3.5" />
                <span>Documentation</span>
              </a>
            )}
            {hasVideoLink && (
              <a href={project.links.demoVideoUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border-hairline text-xs font-medium text-ink hover:border-cobalt/40 transition-colors">
                <Video className="w-3.5 h-3.5 text-coral" />
                <span>Video Walkthrough</span>
              </a>
            )}
          </section>
        )}

        {/* Competition Record Card (If applicable) */}
        {project.competition && (
          <section className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-card border border-border-hairline shadow-xs space-y-4">
            <div className="flex items-center justify-between border-b border-border-hairline pb-3">
              <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400">
                <Award className="w-5 h-5" />
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-ink">
                  Competitive Hackathon &amp; Evaluation Record
                </h2>
              </div>
              <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20 font-bold">
                Verified Dossier
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs font-sans">
              <div>
                <span className="text-muted block font-mono text-[11px]">Event / Contest:</span>
                <span className="font-semibold text-ink">{project.competition.name}</span>
              </div>
              {project.competition.institution && (
                <div>
                  <span className="text-muted block font-mono text-[11px]">Host / Institution:</span>
                  <span className="text-ink font-medium">{project.competition.institution}</span>
                </div>
              )}
              {project.competition.problemStatementId && (
                <div>
                  <span className="text-muted block font-mono text-[11px]">Problem Statement ID:</span>
                  <span className="text-cobalt font-mono font-bold">{project.competition.problemStatementId}</span>
                </div>
              )}
              {project.competition.submissionDate && (
                <div>
                  <span className="text-muted block font-mono text-[11px]">Submission Period:</span>
                  <span className="text-ink">{project.competition.submissionDate}</span>
                </div>
              )}
              <div>
                <span className="text-muted block font-mono text-[11px]">Evaluation Status:</span>
                <span className="text-amber-600 dark:text-amber-400 font-semibold">{project.competition.status}</span>
              </div>
              {project.competition.result && (
                <div>
                  <span className="text-muted block font-mono text-[11px]">Confirmed Outcome:</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">{project.competition.result}</span>
                </div>
              )}
            </div>
          </section>
        )}

        {/* 1. Problem & 2. Solution Split */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 sm:p-8 rounded-3xl bg-coral/5 border border-coral/20 space-y-4 shadow-xs">
            <div className="flex items-center gap-2 text-coral">
              <AlertTriangle className="w-5 h-5" />
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-ink">01. The Problem &amp; Friction</h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
              {project.problem}
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-cobalt/5 border border-cobalt/20 space-y-4 shadow-xs">
            <div className="flex items-center gap-2 text-cobalt">
              <Lightbulb className="w-5 h-5" />
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-ink">02. The Proposed Solution</h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
              {project.solution}
            </p>
          </div>
        </section>

        {/* 3. What Was Actually Implemented */}
        <section className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-card border border-border-hairline shadow-xs space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-border-hairline">
            <div className="flex items-center gap-2 text-cobalt">
              <CheckCircle2 className="w-5 h-5" />
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-ink">
                03. Demonstrated &amp; Implemented Capabilities
              </h2>
            </div>
            <span className="text-[11px] font-mono text-muted">
              {project.features.length} core features
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.features.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-3.5 rounded-xl bg-subtle border border-border-hairline text-xs text-ink font-sans"
              >
                <span className="w-5 h-5 rounded-md bg-cobalt/10 text-cobalt border border-cobalt/20 flex items-center justify-center shrink-0 font-mono text-[10px] font-bold">
                  {idx + 1}
                </span>
                <span className="leading-relaxed">{feature}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Technical Architecture & Stack */}
        <section className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-card border border-border-hairline space-y-4 shadow-xs">
          <div className="flex items-center gap-2 text-cobalt">
            <Cpu className="w-5 h-5" />
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-ink">04. Technical Stack &amp; Tooling</h2>
          </div>
          <div className="flex flex-wrap gap-2 pt-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-xl bg-subtle border border-border-hairline text-xs font-mono text-ink font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
          {project.aiAssisted && (
            <p className="text-xs text-muted italic pt-2 font-sans">
              * Note: Developed using modern AI-assisted workflows to accelerate front-end velocity, while core logic, system architecture, and forensic inspection were directly authored and tested.
            </p>
          )}
        </section>

        {/* 5. Verified Limitations (Engineering Integrity) */}
        <section className="p-6 sm:p-8 rounded-3xl border border-amber-500/25 bg-amber-500/10 space-y-4 shadow-xs">
          <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400">
            <ShieldAlert className="w-5 h-5" />
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-ink">
              05. Honest Technical Scope &amp; Stated Limitations
            </h2>
          </div>
          <p className="text-xs text-muted leading-relaxed font-sans">
            In strict accordance with engineering integrity and realistic evaluation, the following boundaries and current limitations are verified:
          </p>
          <ul className="space-y-2 text-xs text-slate-800 dark:text-slate-200 font-sans">
            {project.limitations.map((lim, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-coral font-mono font-bold">▪</span>
                <span className="leading-relaxed">{lim}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* 6. Lessons Learned & Future Roadmap */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-card border border-border-hairline space-y-3 shadow-xs">
            <h3 className="font-mono text-xs uppercase tracking-wider text-muted font-bold flex items-center gap-1.5">
              <Lightbulb className="w-4 h-4 text-emerald-600" />
              <span>06. Key Lessons Learned</span>
            </h3>
            <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300 font-sans">
              {project.lessonsLearned.map((lesson, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-emerald-600 font-mono font-bold">✔</span>
                  <span className="text-ink">{lesson}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-card border border-border-hairline space-y-3 shadow-xs">
            <h3 className="font-mono text-xs uppercase tracking-wider text-muted font-bold flex items-center gap-1.5">
              <Compass className="w-4 h-4 text-cobalt" />
              <span>07. Future Roadmap &amp; Horizons</span>
            </h3>
            <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300 font-sans">
              {project.futureWork.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-cobalt font-mono font-bold">➜</span>
                  <span className="text-ink">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Supplementary Verified Project Documentation */}
        {(hasScreenshots && project.assets.screenshots.length > 1 || hasArchDiagram || hasVideoAsset) && (
          <section className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-card border border-border-hairline space-y-4 shadow-xs">
            <h3 className="font-serif text-xl font-bold text-ink flex items-center gap-2">
              <Camera className="w-5 h-5 text-cobalt" />
              <span>Supplementary Verified Documentation</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.assets.screenshots.slice(1).map((shot, idx) => (
                <div key={idx} className="rounded-2xl overflow-hidden border border-border-hairline bg-slate-950 p-2 flex items-center justify-center shadow-md">
                  <img src={shot} alt={`${project.displayTitle} Supplementary screenshot ${idx + 2}`} className="w-full max-h-[380px] object-contain rounded" />
                </div>
              ))}
              {hasArchDiagram && (
                <div className="rounded-2xl overflow-hidden border border-border-hairline bg-slate-950 p-2 flex items-center justify-center shadow-md">
                  <img src={project.assets.architectureDiagram} alt="Architecture Diagram" className="w-full object-contain rounded" />
                </div>
              )}
            </div>
          </section>
        )}

        {/* Pagination Navigation */}
        <nav className="flex items-center justify-between pt-8 border-t border-border-hairline text-xs font-mono">
          {prevProject ? (
            <Link
              to={`/projects/${prevProject.slug}`}
              className="flex items-center gap-2 font-bold text-muted hover:text-ink transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span className="hidden sm:inline">Prev Chapter: {prevProject.displayTitle}</span>
              <span className="sm:hidden">Previous</span>
            </Link>
          ) : <div />}

          <Link
            to="/projects"
            className="font-bold text-cobalt hover:underline uppercase tracking-wider"
          >
            All 7 Chapters
          </Link>

          {nextProject ? (
            <Link
              to={`/projects/${nextProject.slug}`}
              className="flex items-center gap-2 font-bold text-muted hover:text-ink transition-colors group"
            >
              <span className="hidden sm:inline">Next Chapter: {nextProject.displayTitle}</span>
              <span className="sm:hidden">Next</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          ) : <div />}
        </nav>

      </div>
    </div>
  );
};
