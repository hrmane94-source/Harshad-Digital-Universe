import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ExternalLink,
  Award
} from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import type { ProjectItem } from '../../types/portfolio';
import { ProjectCoverArtwork } from './ProjectCoverArtwork';

interface ProjectCardProps {
  project: ProjectItem;
  featuredLayout?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  featuredLayout = false
}) => {
  const hasCoverAsset = Boolean(project.assets.cover && project.assets.cover.trim() !== "");
  const hasRepoLink = Boolean(project.links.repositoryUrl && project.links.repositoryUrl.trim() !== "");
  const hasLiveDemoLink = Boolean(project.links.liveDemoUrl && project.links.liveDemoUrl.trim() !== "");

  return (
    <article className={`rounded-2xl border border-black/[0.08] dark:border-white/[0.1] bg-surface transition-all duration-300 hover:border-black/[0.2] dark:hover:border-white/[0.25] hover:shadow-lg flex flex-col group ${
      featuredLayout ? 'lg:grid lg:grid-cols-12 lg:gap-8 items-center p-2 sm:p-3' : 'p-2 sm:p-2.5'
    }`}>

      {/* Cover Artwork / Image */}
      <div className={`${featuredLayout ? 'lg:col-span-7' : 'w-full'}`}>
        <Link to={`/projects/${project.slug}`} className="block overflow-hidden rounded-xl bg-slate-950 border border-black/[0.08] dark:border-white/[0.08]">
          {hasCoverAsset ? (
            <div className="relative overflow-hidden aspect-video bg-slate-950 flex items-center justify-center p-1.5 group-hover:bg-slate-900 transition-colors">
              <img
                src={project.assets.cover}
                alt={project.title}
                className="w-full h-full object-contain rounded-lg transition-transform duration-500 group-hover:scale-[1.02]"
                loading="lazy"
              />
              <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-slate-900/90 border border-slate-700/80 backdrop-blur-sm text-[10px] font-mono text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Live Dashboard</span>
              </div>
            </div>
          ) : (
            <ProjectCoverArtwork
              coverArtwork={project.coverArtwork}
              title={project.displayTitle}
              domain={project.domain}
              importance={project.importance}
            />
          )}
        </Link>
      </div>

      {/* Content Section */}
      <div className={`p-5 sm:p-6 flex flex-col flex-1 justify-between ${
        featuredLayout ? 'lg:col-span-5' : ''
      }`}>
        <div className="space-y-3.5">

          {/* Header Badges */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-subtle text-muted border border-black/[0.06] dark:border-white/[0.08]">
              {project.domain.split(',')[0]}
            </span>

            {project.importance === 'flagship' && (
              <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-cobalt text-white font-bold tracking-wider">
                Flagship Case Study
              </span>
            )}

            {project.competition?.result && (
              <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20 flex items-center gap-1 font-semibold">
                <Award className="w-3 h-3" />
                <span>{project.competition.result}</span>
              </span>
            )}
          </div>

          {/* Title & Tagline */}
          <div>
            <h3 className="text-2xl font-serif text-ink tracking-tight font-semibold leading-snug">
              <Link to={`/projects/${project.slug}`} className="hover:text-cobalt transition-colors">
                {project.displayTitle}
              </Link>
            </h3>
            <p className="text-xs sm:text-sm text-muted font-medium mt-1 leading-relaxed">
              {project.tagline}
            </p>
          </div>

          {/* Role badge */}
          <div className="text-[11px] text-muted font-mono bg-subtle px-3 py-1.5 rounded-lg border border-black/[0.04] dark:border-white/[0.06] inline-block">
            <span className="text-faint">Role: </span>
            <span className="text-ink font-medium">{project.role}</span>
          </div>

          {/* Summary */}
          <p className="text-muted text-xs sm:text-sm leading-relaxed line-clamp-2">
            {project.summary}
          </p>

          {/* Key Technologies */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/[0.03] dark:bg-white/[0.04] text-muted border border-black/[0.04] dark:border-white/[0.06]"
              >
                {tech}
              </span>
            ))}
          </div>

        </div>

        {/* Footer CTAs */}
        <div className="pt-5 mt-5 border-t border-black/[0.06] dark:border-white/[0.08] flex items-center justify-between gap-3">
          <Link
            to={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink hover:text-cobalt transition-colors group/link"
          >
            <span>Read Architecture</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
          </Link>

          <div className="flex items-center gap-2">
            {hasRepoLink && (
              <a
                href={project.links.repositoryUrl}
                target="_blank"
                rel="noreferrer"
                className="p-1.5 rounded-lg text-muted hover:text-ink hover:bg-subtle transition-colors"
                title="View Source Repository"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            )}

            {hasLiveDemoLink && (
              <a
                href={project.links.liveDemoUrl}
                target="_blank"
                rel="noreferrer"
                className="p-1.5 rounded-lg text-muted hover:text-ink hover:bg-subtle transition-colors"
                title="Open Live Demonstration"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

      </div>

    </article>
  );
};
