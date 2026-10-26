import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';
import { BrandMonogram } from '../components/ui/BrandMonogram';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center space-y-6">
      <BrandMonogram size={56} className="mx-auto" />

      <div className="space-y-2 max-w-md mx-auto">
        <span className="text-[11px] font-mono uppercase tracking-widest text-cobalt font-bold">
          404 &bull; UNCHARTED PATH
        </span>
        <h1 className="text-3xl sm:text-5xl font-serif text-ink tracking-tight font-normal">
          Page Not Found
        </h1>
        <p className="text-xs sm:text-sm text-muted leading-relaxed">
          The requested page or case study slug does not exist in Harshad Mane&apos;s digital universe. Please return to known pathways.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-ink text-paper text-xs font-semibold uppercase tracking-wider hover:opacity-90 transition-opacity"
        >
          <Home className="w-3.5 h-3.5" />
          <span>Return Home</span>
        </Link>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border-hairline bg-surface text-ink text-xs font-semibold uppercase tracking-wider hover:border-black/[0.3] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Explore Projects</span>
        </Link>
      </div>
    </div>
  );
};
