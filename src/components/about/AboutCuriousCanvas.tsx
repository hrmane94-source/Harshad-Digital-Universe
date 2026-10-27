import React, { useState, useRef, useEffect } from 'react';
import { Compass, Sparkles, Eye, Lightbulb } from 'lucide-react';

interface CuriosityFacet {
  id: string;
  icon: typeof Compass;
  title: string;
  expression: string;
  accentColor: string;
}

export const AboutCuriousCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeFacet, setActiveFacet] = useState<string>('investigate');
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isHoverable, setIsHoverable] = useState<boolean>(false);

  useEffect(() => {
    const hoverQuery = window.matchMedia('(hover: hover)');
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const update = () => {
      setIsHoverable(hoverQuery.matches && !motionQuery.matches);
    };

    update();
    hoverQuery.addEventListener('change', update);
    motionQuery.addEventListener('change', update);

    return () => {
      hoverQuery.removeEventListener('change', update);
      motionQuery.removeEventListener('change', update);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isHoverable || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  const facets: CuriosityFacet[] = [
    {
      id: 'investigate',
      icon: Eye,
      title: 'The Impulse to Look Beneath',
      expression: 'Something interesting rarely stays interesting for long from a distance without making me wonder how it functions and why it was constructed that way.',
      accentColor: 'text-cobalt border-cobalt/30 bg-cobalt/10'
    },
    {
      id: 'explore',
      icon: Compass,
      title: 'The Pull of Unfamiliar Ground',
      expression: 'A new idea makes me curious; a new location makes me want to explore. I prefer stepping onto an unknown road over staying with what is already completely familiar.',
      accentColor: 'text-teal border-teal/30 bg-teal/10'
    },
    {
      id: 'experiment',
      icon: Lightbulb,
      title: 'Action Over Passive Observation',
      expression: 'I like turning curiosity into action. Theorizing is interesting, but testing, modifying, and discovering through firsthand experience is where understanding really begins.',
      accentColor: 'text-amber-600 dark:text-amber-400 border-amber-400/30 bg-amber-400/10'
    }
  ];

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-[#E8F8F1]/70 via-[#EDE5FF]/40 to-[#EAF3FF]/80 dark:from-[#0E2428]/40 dark:via-[#181E38]/50 dark:to-[#10182B] border border-border-hairline shadow-sm overflow-hidden"
    >
      {/* Ambient Radial Spotlight */}
      {isHoverable && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle 500px at ${50 + mousePos.x * 40}% ${50 + mousePos.y * 40}%, rgba(13, 148, 136, 0.12), transparent 70%)`
          }}
          aria-hidden="true"
        />
      )}

      <div className="relative z-10 space-y-8">
        {/* Header */}
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal/10 border border-teal/25 text-teal text-[11px] font-mono uppercase font-bold tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>THE CURIOUS MINDSET</span>
          </div>

          <h3 className="font-serif text-2xl sm:text-4xl text-ink font-normal tracking-tight leading-snug">
            &ldquo;An unfamiliar idea makes me curious. <br />
            <span className="italic text-teal font-normal">A new place makes me want to explore.&rdquo;</span>
          </h3>

          <p className="text-muted text-sm sm:text-base leading-relaxed font-sans">
            Curiosity is not an analytical technique or a professional trait—it is simply how I experience reality. When something sparks my interest, I want to explore it, learn what lies beneath it, and see what possibilities open up.
          </p>
        </div>

        {/* Interactive Facet Selectors */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {facets.map((facet) => {
            const Icon = facet.icon;
            const isSelected = activeFacet === facet.id;

            return (
              <div
                key={facet.id}
                role="button"
                tabIndex={0}
                onClick={() => setActiveFacet(facet.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveFacet(facet.id);
                  }
                }}
                className={`p-6 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between space-y-4 ${
                  isSelected
                    ? 'bg-white dark:bg-[#141D35] border-teal/50 shadow-md ring-1 ring-teal/30 scale-[1.02]'
                    : 'bg-white/70 dark:bg-[#141D35]/60 border-border-hairline hover:border-teal/30 hover:bg-white dark:hover:bg-[#141D35] shadow-2xs'
                }`}
              >
                <div className="space-y-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${facet.accentColor}`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  <h4 className="font-serif text-lg font-bold text-ink tracking-tight">
                    {facet.title}
                  </h4>

                  <p className="text-xs text-muted font-sans leading-relaxed">
                    {facet.expression}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 text-[10px] font-mono text-faint pt-2 border-t border-border-hairline">
                  <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-teal animate-pulse' : 'bg-muted/40'}`} />
                  <span className="uppercase">{isSelected ? 'Active Perspective' : 'Tap to focus'}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
