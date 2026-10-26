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
  Layers,
  Cpu,
  Lightbulb,
  CheckCircle2,
  ArrowRight
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

  // Link checks (Rule 14 & 22)
  const hasRepoLink = Boolean(project.links.repositoryUrl && project.links.repositoryUrl.trim() !== "");
  const hasLiveDemoLink = Boolean(project.links.liveDemoUrl && project.links.liveDemoUrl.trim() !== "");
  const hasWebsiteLink = Boolean(project.links.websiteUrl && project.links.websiteUrl.trim() !== "");
  const hasDocLink = Boolean(project.links.documentationUrl && project.links.documentationUrl.trim() !== "");
  const hasVideoLink = Boolean(project.links.demoVideoUrl && project.links.demoVideoUrl.trim() !== "");

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12">

      {/* Back to Projects */}
      <motion.div initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-muted hover:text-ink transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to All Case Studies</span>
        </Link>
      </motion.div>

      {/* Header Info */}
      <header className="space-y-4">

        <div className="flex flex-wrap items-center gap-2.5">
          <span className="text-xs font-mono px-3 py-1 rounded-full bg-subtle text-muted border border-border-hairline">
            {project.domain}
          </span>

          {project.importance === 'flagship' && (
            <span className="text-xs font-mono uppercase px-3 py-1 rounded-full bg-cobalt text-white font-bold tracking-wider shadow-xs">
              ★ FLAGSHIP CASE STUDY
            </span>
          )}

          <span className="text-xs font-mono px-3 py-1 rounded-full bg-subtle text-muted border border-border-hairline capitalize">
            Status: {project.status}
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-serif text-ink tracking-tight font-normal leading-tight">
          {project.displayTitle}
        </h1>

        <p className="text-base sm:text-xl text-muted font-sans leading-relaxed">
          {project.tagline}
        </p>

        {/* Roles & Team Context */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-border-hairline">
          <div className="p-4 rounded-xl bg-surface dark:bg-card border border-border-hairline">
            <span className="text-[11px] font-mono uppercase tracking-wider text-muted block mb-1">Confirmed Role</span>
            <span className="text-sm font-semibold text-ink">{project.role}</span>
          </div>

          {project.teamContext && (
            <div className="p-4 rounded-xl bg-surface dark:bg-card border border-border-hairline">
              <span className="text-[11px] font-mono uppercase tracking-wider text-muted block mb-1">Team &amp; Collaboration Context</span>
              <span className="text-xs text-muted leading-relaxed">{project.teamContext}</span>
            </div>
          )}
        </div>

      </header>

      {/* Cover Showcase or Procedural Artwork */}
      <section className="rounded-2xl overflow-hidden border border-border-hairline shadow-2xl bg-slate-950">
        {hasCoverAsset ? (
          <div className="flex flex-col">
            {/* Workstation top bar */}
            <div className="px-4 py-2.5 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-[11px] text-slate-400 pl-2 hidden sm:inline">{project.displayTitle} &bull; Verified Interface View</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700/60 uppercase tracking-wider">
                  {project.domain}
                </span>
                <span className="text-[10px] text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Verified Asset
                </span>
              </div>
            </div>
            {/* Dashboard display (uncropped, preserving tables/charts/toolbars) */}
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

      {/* External Verified Actions (If any provided) */}
      {(hasRepoLink || hasLiveDemoLink || hasWebsiteLink || hasDocLink || hasVideoLink) && (
        <section className="flex flex-wrap items-center gap-3 p-4 rounded-2xl bg-surface dark:bg-card border border-border-hairline shadow-xs">
          <span className="text-xs font-mono text-muted uppercase tracking-wider mr-2 font-semibold">Verified Links:</span>
          {hasRepoLink && (
            <a href={project.links.repositoryUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border-hairline text-xs font-medium text-ink hover:border-cobalt/40 transition-colors">
              <GithubIcon className="w-3.5 h-3.5" />
              <span>Source Repository</span>
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
              <span>Project Documentation</span>
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

      {/* Competition Ledger (If Hackathon project) */}
      {project.competition && (
        <section className="p-6 sm:p-8 rounded-2xl bg-surface dark:bg-card border border-border-hairline space-y-4 shadow-xs">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
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

      {/* Problem & Solution Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">

        <div className="p-6 sm:p-8 rounded-2xl bg-coral/5 border border-coral/20 space-y-4 shadow-xs">
          <div className="flex items-center gap-2 text-coral">
            <AlertTriangle className="w-5 h-5" />
            <h2 className="font-serif text-xl font-bold text-ink">The Challenge &amp; Problem</h2>
          </div>
          <p className="text-xs sm:text-sm text-ink/80 leading-relaxed">
            {project.problem}
          </p>
        </div>

        <div className="p-6 sm:p-8 rounded-2xl bg-cobalt/5 border border-cobalt/20 space-y-4 shadow-xs">
          <div className="flex items-center gap-2 text-cobalt">
            <Lightbulb className="w-5 h-5" />
            <h2 className="font-serif text-xl font-bold text-ink">The Proposed Solution</h2>
          </div>
          <p className="text-xs sm:text-sm text-ink/80 leading-relaxed">
            {project.solution}
          </p>
        </div>

      </section>

      {/* Actual Features Implemented */}
      <section className="p-6 sm:p-8 rounded-2xl bg-surface dark:bg-card border border-border-hairline space-y-6 shadow-xs">
        <div className="flex items-center justify-between pb-2 border-b border-border-hairline">
          <div className="flex items-center gap-2 text-cobalt">
            <CheckCircle2 className="w-5 h-5" />
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-ink">
              Demonstrated &amp; Implemented Features
            </h2>
          </div>
          <span className="text-[11px] font-mono text-muted">
            {project.features.length} core capabilities
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {project.features.map((feature, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 p-3.5 rounded-xl bg-subtle border border-border-hairline text-xs text-ink"
            >
              <span className="w-5 h-5 rounded-md bg-cobalt/10 text-cobalt border border-cobalt/20 flex items-center justify-center shrink-0 font-mono text-[10px] font-bold">
                {idx + 1}
              </span>
              <span className="leading-relaxed">{feature}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Critical Technical Limitations (Engineering Integrity) */}
      <section className="p-6 sm:p-8 rounded-2xl border border-amber-500/25 bg-amber-500/8 space-y-4 shadow-xs">
        <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400">
          <ShieldAlert className="w-5 h-5" />
          <h2 className="font-serif text-xl font-bold text-ink">
            Honest Technical Scope &amp; Stated Limitations
          </h2>
        </div>
        <p className="text-xs text-muted leading-relaxed">
          In strict accordance with engineering integrity and realistic evaluation, the following boundaries and current limitations are verified:
        </p>
        <ul className="space-y-2 text-xs text-ink/90">
          {project.limitations.map((lim, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="text-coral font-mono">▪</span>
              <span className="leading-relaxed">{lim}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Technologies & Tools Used */}
      <section className="p-6 sm:p-8 rounded-2xl bg-surface dark:bg-card border border-border-hairline space-y-4 shadow-xs">
        <div className="flex items-center gap-2 text-cobalt">
          <Cpu className="w-5 h-5" />
          <h2 className="font-serif text-xl font-bold text-ink">Technology Stack &amp; Tooling</h2>
        </div>
        <div className="flex flex-wrap gap-2 pt-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 rounded-lg bg-subtle border border-border-hairline text-xs font-mono text-ink font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        {project.aiAssisted && (
          <p className="text-xs text-muted italic pt-2">
            * Note: Application developed using AI-assisted workflows to accelerate iterative development, while architectural reasoning and core debugging were performed directly.
          </p>
        )}
      </section>

      {/* Lessons Learned & Future Work */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">

        <div className="p-6 rounded-2xl bg-surface dark:bg-card border border-border-hairline space-y-3 shadow-xs">
          <h3 className="font-mono text-xs uppercase tracking-wider text-muted font-bold">
            Key Lessons Learned
          </h3>
          <ul className="space-y-2 text-xs text-muted">
            {project.lessonsLearned.map((lesson, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-emerald-600 font-mono">✔</span>
                <span className="text-ink">{lesson}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-6 rounded-2xl bg-surface dark:bg-card border border-border-hairline space-y-3 shadow-xs">
          <h3 className="font-mono text-xs uppercase tracking-wider text-muted font-bold">
            Future Development Roadmap
          </h3>
          <ul className="space-y-2 text-xs text-muted">
            {project.futureWork.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-cobalt font-mono">➜</span>
                <span className="text-ink">{item}</span>
              </li>
            ))}
          </ul>
        </div>

      </section>

      {/* Media & Screenshots Section */}
      <section className="p-6 sm:p-8 rounded-2xl bg-surface dark:bg-card border border-border-hairline space-y-4 shadow-xs">
        <h3 className="font-serif text-xl font-bold text-ink">Project Visual Documentation</h3>

        {hasScreenshots || hasArchDiagram || hasVideoAsset ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.assets.screenshots.map((shot, idx) => (
              <div key={idx} className="rounded-xl overflow-hidden border border-border-hairline bg-slate-950 p-2 flex items-center justify-center shadow-md">
                <img key={idx} src={shot} alt={`${project.displayTitle} screenshot ${idx + 1}`} className="w-full max-h-[380px] object-contain rounded" />
              </div>
            ))}
            {hasArchDiagram && (
              <div className="rounded-xl overflow-hidden border border-border-hairline bg-slate-950 p-2 flex items-center justify-center shadow-md">
                <img src={project.assets.architectureDiagram} alt="Architecture Diagram" className="w-full object-contain rounded" />
              </div>
            )}
          </div>
        ) : (
          <div className="p-8 rounded-xl border border-dashed border-border-hairline text-center space-y-2 bg-subtle/50">
            <Layers className="w-8 h-8 text-muted mx-auto" />
            <h4 className="text-sm font-semibold text-ink">Screenshots &amp; Live Media Registry</h4>
            <p className="text-xs text-muted max-w-md mx-auto">
              Real screenshots and architecture diagrams will populate as assets are placed into <code className="text-cobalt font-mono">/public/assets/projects/{project.slug}/</code>.
            </p>
          </div>
        )}
      </section>

      {/* Pagination Footer */}
      <nav className="flex items-center justify-between pt-8 border-t border-border-hairline">
        {prevProject ? (
          <Link
            to={`/projects/${prevProject.slug}`}
            className="flex items-center gap-2 text-xs font-semibold text-muted hover:text-ink group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span className="hidden sm:inline">Previous: {prevProject.displayTitle}</span>
            <span className="sm:hidden">Previous</span>
          </Link>
        ) : <div />}

        <Link
          to="/projects"
          className="text-xs font-mono font-semibold text-cobalt hover:underline"
        >
          All Projects
        </Link>

        {nextProject ? (
          <Link
            to={`/projects/${nextProject.slug}`}
            className="flex items-center gap-2 text-xs font-semibold text-muted hover:text-ink group"
          >
            <span className="hidden sm:inline">Next: {nextProject.displayTitle}</span>
            <span className="sm:hidden">Next</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        ) : <div />}
      </nav>

    </div>
  );
};
