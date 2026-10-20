import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, ArrowLeft, Home } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center space-y-6">
      <div className="w-20 h-20 rounded-3xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400">
        <Compass className="w-10 h-10 animate-spin" />
      </div>

      <div className="space-y-2">
        <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">
          404 — UNCHARTED COORDINATES
        </span>
        <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-white">
          Digital Horizon Not Found
        </h1>
        <p className="text-sm text-slate-400 max-w-md mx-auto leading-relaxed">
          The requested route or draft does not exist in Harshad Mane&apos;s digital universe. Please return to known pathways.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs hover:bg-cyan-400 transition-colors"
        >
          <Home className="w-4 h-4" />
          <span>Return Home</span>
        </Link>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-xs hover:bg-slate-800 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Explore Projects</span>
        </Link>
      </div>
    </div>
  );
};
