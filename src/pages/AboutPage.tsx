import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  Compass,
  Cpu,
  Calendar,
  UserCheck,
  Camera,
  Bike,
  ArrowRight
} from 'lucide-react';
import { EditorialPortrait } from '../components/ui/EditorialPortrait';

export const AboutPage: React.FC = () => {

  const personalInterests = [
    { title: "Cinematography & Visual Framing", icon: Camera, desc: "Capturing movement, lighting, and landscape perspectives." },
    { title: "Photography & Short-Form Reels", icon: Sparkles, desc: "Visual storytelling under creator identity @shiv.premi_1630." },
    { title: "Exploring Hidden Locations", icon: Compass, desc: "Discovering untouched trails, waterfalls, and natural sanctuaries." },
    { title: "Motorcycle Travel & Motovlogging", icon: Bike, desc: "Highway endurance and long-distance exploration on two wheels." },
    { title: "Technical Event Coordination", icon: Calendar, desc: "Collaborating with student teams to manage smooth campus events." },
    { title: "Continuous Self-Directed Learning", icon: Cpu, desc: "Testing new AI tools, Linux utilities, and coding paradigms." },
  ];

  const corePillars = [
    {
      title: "Pressure is a Privilege",
      desc: "Pressure is not something to run away from; it signals that you have been trusted with an opportunity that matters."
    },
    {
      title: "Build a Life Worth Experiencing",
      desc: "Live with fewer regrets, explore the physical world, document nature, and seek depth over superficial noise."
    },
    {
      title: "Keep Learning Without Limits",
      desc: "Proving to myself every single day that curiosity and disciplined effort can conquer any knowledge deficit."
    },
    {
      title: "Leave People Better Than You Found Them",
      desc: "Treat people fairly, stand beside teammates through difficulty, and be someone others can genuinely rely on."
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">

      {/* Intro Editorial Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        {/* Left: Bio Story */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cobalt/10 border border-cobalt/25 text-cobalt text-[11px] font-mono tracking-widest uppercase font-semibold">
            <UserCheck className="w-3.5 h-3.5" />
            <span>PERSONAL PHILOSOPHY &amp; BACKGROUND</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif text-ink tracking-tight font-normal leading-[1.08]">
            Curious about systems. <br />
            <span className="italic font-normal bg-gradient-to-r from-cobalt via-violet to-sky-400 bg-clip-text text-transparent">Grounded in human values.</span>
          </h1>

          <p className="text-muted text-base leading-relaxed">
            I became interested in technology through experimenting with modern AI tools and developing a persistent curiosity about how computer networks, software, and cybersecurity actually function behind the scenes.
          </p>

          <p className="text-muted text-base leading-relaxed">
            I enjoy creating practical applications, exploring emerging ideas, taking part in technical hackathons, and learning through hands-on building. I don&apos;t claim senior mastery or celebrity accolades—I simply love the craft of building useful software, solving difficult problems with teammates, and expanding what I know.
          </p>

          <div className="p-5 rounded-2xl bg-surface dark:bg-card border border-border-hairline space-y-1.5 shadow-xs">
            <span className="text-[11px] font-mono text-coral uppercase font-bold tracking-wider">What Motivates Me</span>
            <p className="text-xs sm:text-sm text-ink leading-relaxed">
              Improving my life through continuous education, testing my limits, building tangible practical capabilities, supporting friends and teammates when they face challenges, and living an adventurous life without regrets.
            </p>
          </div>
        </div>

        {/* Right: Editorial Portrait Showcase */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <EditorialPortrait variant="about" className="w-full max-w-sm mx-auto" />
        </div>

      </section>

      {/* Core Personal Pillars */}
      <section className="space-y-8">
        <div className="space-y-1 pb-4 border-b border-border-hairline">
          <span className="text-[11px] font-mono uppercase tracking-widest text-muted font-semibold">
            CORE PRINCIPLES
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-ink font-normal tracking-tight">
            How I Approach Engineering &amp; Life
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {corePillars.map((pillar, idx) => (
            <article
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-surface dark:bg-card border border-border-hairline hover:border-cobalt/40 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-200 space-y-3"
            >
              <div className="flex items-center gap-2 text-xs font-mono text-cobalt font-bold">
                <span>0{idx + 1} //</span>
                <span className="uppercase tracking-wider">PILLAR</span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-ink tracking-tight">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                {pillar.desc}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Interests Beyond Code */}
      <section className="space-y-8">
        <div className="space-y-1 pb-4 border-b border-border-hairline">
          <span className="text-[11px] font-mono uppercase tracking-widest text-muted font-semibold">
            BEYOND THE TERMINAL
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-ink font-normal tracking-tight">
            Curiosities, Perspectives &amp; Visual Crafts
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {personalInterests.map((interest, idx) => {
            const Icon = interest.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-card border border-border-hairline hover:border-border-medium transition-all space-y-3 tech-card"
              >
                <div className="w-9 h-9 rounded-xl bg-subtle border border-border-hairline flex items-center justify-center text-cobalt">
                  <Icon className="w-4 h-4" />
                </div>
                <h4 className="font-serif text-lg font-bold text-ink">
                  {interest.title}
                </h4>
                <p className="text-xs text-muted leading-relaxed">
                  {interest.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA to Journey & Education */}
      <section className="pt-8 border-t border-border-hairline flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="font-serif text-xl font-bold text-ink">Want to trace the educational timeline?</h4>
          <p className="text-xs text-muted">Explore schools, colleges, and developmental milestones.</p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            to="/journey"
            className="px-5 py-2.5 rounded-xl border border-border-hairline bg-surface text-ink text-xs font-semibold hover:border-black/[0.3] transition-colors"
          >
            Personal Journey
          </Link>
          <Link
            to="/education"
            className="px-5 py-2.5 rounded-xl bg-ink text-paper text-xs font-semibold flex items-center gap-1.5 hover:opacity-90 transition-opacity"
          >
            <span>Education History</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

    </div>
  );
};
