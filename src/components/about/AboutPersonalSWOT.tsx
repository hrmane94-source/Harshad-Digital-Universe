import React from 'react';
import { 
  Sparkles, 
  Target, 
  Compass, 
  ShieldAlert, 
  Layers
} from 'lucide-react';

interface SWOTQuadrant {
  type: 'Strengths' | 'Weaknesses' | 'Opportunities' | 'Threats';
  dimension: 'Internal Factor' | 'External Factor';
  title: string;
  tagline: string;
  accentClass: {
    border: string;
    bg: string;
    text: string;
    badgeBg: string;
    glow: string;
  };
  icon: typeof Sparkles;
  items: Array<{
    title: string;
    description: string;
  }>;
}

export const AboutPersonalSWOT: React.FC = () => {
  const quadrants: SWOTQuadrant[] = [
    {
      type: 'Strengths',
      dimension: 'Internal Factor',
      title: 'Personal Attributes & Strengths',
      tagline: 'Positive qualities, personal characteristics, and abilities.',
      icon: Sparkles,
      accentClass: {
        border: 'border-cobalt/30 hover:border-cobalt/60 dark:border-cobalt/25 dark:hover:border-cobalt/50',
        bg: 'bg-white/80 dark:bg-[#141D35]/80 hover:bg-white dark:hover:bg-[#141D35]',
        text: 'text-cobalt',
        badgeBg: 'bg-cobalt/10 text-cobalt border-cobalt/25',
        glow: 'hover:shadow-cobalt/10'
      },
      items: [
        {
          title: 'Curiosity & Rapid Hands-On Learning',
          description: 'A natural drive to explore unfamiliar domains, learn by doing, and turn abstract ideas into tangible prototypes.'
        },
        {
          title: 'Visual & Perspective Sensitivity',
          description: 'A trained eye for framing, contrast, and visual storytelling developed through genuine photography and cinematography.'
        },
        {
          title: 'Resilience Under Pressure',
          description: 'Living by the personal motto "Pressure is a privilege" — viewing demanding challenges as opportunities for growth.'
        },
        {
          title: 'Reliable Team Collaboration',
          description: 'Grounded interpersonal values: treating teammates fairly, communicating transparently, and standing by peers through friction.'
        }
      ]
    },
    {
      type: 'Weaknesses',
      dimension: 'Internal Factor',
      title: 'Recognized Areas for Growth',
      tagline: 'Personal dimensions where I recognize the need to improve.',
      icon: Target,
      accentClass: {
        border: 'border-amber-400/30 hover:border-amber-400/60 dark:border-amber-400/25 dark:hover:border-amber-400/50',
        bg: 'bg-white/80 dark:bg-[#141D35]/80 hover:bg-white dark:hover:bg-[#141D35]',
        text: 'text-amber-600 dark:text-amber-400',
        badgeBg: 'bg-amber-400/10 text-amber-700 dark:text-amber-400 border-amber-400/25',
        glow: 'hover:shadow-amber-400/10'
      },
      items: [
        {
          title: 'Balancing Breadth vs. Sustained Depth',
          description: 'An instinct to explore multiple exciting ideas at once, requiring conscious discipline to focus on deep mastery.'
        },
        {
          title: 'Undergraduate Foundations in Progress',
          description: 'As a first-year engineering student, low-level algorithmic rigor and deep theoretical foundations are actively being built.'
        },
        {
          title: 'Tendency to Over-Refine Solo Details',
          description: 'Spending excessive energy polishing visual micro-elements before validating or sharing early iterations with others.'
        },
        {
          title: 'Public Communication Restraint',
          description: 'A naturally reserved instinct that can delay stepping into public speaking and large-stage verbal advocacy.'
        }
      ]
    },
    {
      type: 'Opportunities',
      dimension: 'External Factor',
      title: 'Developmental Opportunities',
      tagline: 'External possibilities that can support growth and development.',
      icon: Compass,
      accentClass: {
        border: 'border-teal/30 hover:border-teal/60 dark:border-teal/25 dark:hover:border-teal/50',
        bg: 'bg-white/80 dark:bg-[#141D35]/80 hover:bg-white dark:hover:bg-[#141D35]',
        text: 'text-teal',
        badgeBg: 'bg-teal/10 text-teal border-teal/25',
        glow: 'hover:shadow-teal/10'
      },
      items: [
        {
          title: 'Engineering & Innovation Arenas',
          description: 'Access to college laboratories, technical symposiums, and regional builder hackathons across Maharashtra.'
        },
        {
          title: 'The AI-Augmented Prototyping Era',
          description: 'Accelerators that multiply individual execution speed, enabling rapid experimentation while studying core foundations.'
        },
        {
          title: 'Mentorship & Senior Guidance',
          description: 'Guidance from experienced faculty, industry mentors, and community peers who challenge assumptions.'
        },
        {
          title: 'Creative Expedition Dispatches',
          description: 'Untapped potential in motorcycle travel documentation and regional visual essays across the Western Ghats.'
        }
      ]
    },
    {
      type: 'Threats',
      dimension: 'External Factor',
      title: 'External Challenges & Constraints',
      tagline: 'External circumstances that make continuous growth more demanding.',
      icon: ShieldAlert,
      accentClass: {
        border: 'border-coral/30 hover:border-coral/60 dark:border-coral/25 dark:hover:border-coral/50',
        bg: 'bg-white/80 dark:bg-[#141D35]/80 hover:bg-white dark:hover:bg-[#141D35]',
        text: 'text-coral',
        badgeBg: 'bg-coral/10 text-coral border-coral/25',
        glow: 'hover:shadow-coral/10'
      },
      items: [
        {
          title: 'Rapid Shifting of Technology Tooling',
          description: 'The dizzying turnover of tools creates the risk of shallow familiarity over durable first-principles understanding.'
        },
        {
          title: 'Digital Clutter & Information Saturation',
          description: 'Navigating overwhelming social noise, trend feeds, and distractions while protecting uninterrupted focus.'
        },
        {
          title: 'Academic Bandwidth vs. Creative Ambitions',
          description: 'Balancing rigorous engineering coursework with independent photography, endurance riding, and self-directed study.'
        },
        {
          title: 'Accelerating Peer & Industry Benchmarks',
          description: 'Rising expectations across global developer spaces that demand constant self-renewal and disciplined pace.'
        }
      ]
    }
  ];

  return (
    <section className="space-y-10 pt-8 border-t border-border-hairline">
      {/* Chapter Subtitle & Context */}
      <div className="space-y-3 max-w-3xl border-b border-border-hairline pb-4">
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase text-coral font-bold tracking-widest">
          <Layers className="w-3.5 h-3.5" />
          <span>A LITTLE SELF-AWARENESS</span>
        </div>

        <h3 className="font-serif text-3xl sm:text-5xl text-ink font-normal tracking-tight leading-tight">
          My Personal SWOT Analysis. <br className="hidden sm:inline" />
          <span className="italic text-coral font-normal">&ldquo;Honest reflection is where growth starts.&rdquo;</span>
        </h3>

        <p className="text-muted text-sm sm:text-base leading-relaxed font-sans">
          Self-awareness requires separating what is internal &mdash; my personal qualities and areas where I need to improve &mdash; from the external world of opportunities to embrace and challenges to navigate.
        </p>

        {/* Legend Pills */}
        <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-mono text-muted">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-cobalt" />
            <span>Internal: Strengths &amp; Weaknesses</span>
          </div>
          <span>&bull;</span>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-teal" />
            <span>External: Opportunities &amp; Threats</span>
          </div>
        </div>
      </div>

      {/* 2x2 SWOT Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        {quadrants.map((q) => {
          const Icon = q.icon;
          return (
            <article
              key={q.type}
              className={`p-6 sm:p-7 rounded-3xl border ${q.accentClass.border} ${q.accentClass.bg} shadow-sm hover:shadow-lg ${q.accentClass.glow} transition-all duration-300 flex flex-col justify-between space-y-6 tech-card`}
            >
              {/* Header */}
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-3 text-xs font-mono">
                  <span className={`px-2.5 py-1 rounded-full border text-[10px] font-bold uppercase tracking-wider ${q.accentClass.badgeBg}`}>
                    {q.dimension}
                  </span>

                  <span className={`font-bold font-mono uppercase tracking-widest flex items-center gap-1.5 ${q.accentClass.text}`}>
                    <Icon className="w-4 h-4" />
                    <span>{q.type}</span>
                  </span>
                </div>

                <div className="space-y-1">
                  <h4 className="font-serif text-2xl font-bold text-ink tracking-tight">
                    {q.title}
                  </h4>
                  <p className="text-xs text-muted font-sans leading-relaxed">
                    {q.tagline}
                  </p>
                </div>
              </div>

              {/* Items List */}
              <div className="space-y-3 pt-2 border-t border-border-hairline">
                {q.items.map((item, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex items-start gap-2">
                      <span className={`font-mono text-xs font-bold pt-0.5 ${q.accentClass.text}`}>
                        0{idx + 1}.
                      </span>
                      <h5 className="font-serif text-base font-bold text-ink leading-snug">
                        {item.title}
                      </h5>
                    </div>
                    <p className="text-xs text-muted font-sans leading-relaxed pl-5">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
