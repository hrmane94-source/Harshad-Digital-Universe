import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Compass, 
  Cpu, 
  Calendar, 
  UserCheck, 
  Camera, 
  Bike
} from 'lucide-react';
import { assetConfig } from '../data/assets';

export const AboutPage: React.FC = () => {
  const hasPortrait = Boolean(assetConfig.identity.portrait && assetConfig.identity.portrait.trim() !== "");

  const personalInterests = [
    { title: "Cinematography & Visual Framing", icon: Camera, desc: "Capturing movement, lighting, and landscape perspectives." },
    { title: "Photography & Reels", icon: Sparkles, desc: "Short-form vertical video storytelling as shiv.premi_1630." },
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
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      
      {/* Intro Editorial Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left: Bio Story */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800 text-cyan-300 text-xs font-mono">
            <UserCheck className="w-3.5 h-3.5" />
            <span>PERSONAL PHILOSOPHY &amp; BACKGROUND</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
            Curious about systems. <br />
            <span className="text-gradient-cyan">Grounded in human values.</span>
          </h1>

          <p className="text-slate-300 text-base leading-relaxed">
            I became interested in technology through experimenting with modern AI tools and developing a persistent curiosity about how computer networks, software, and cybersecurity actually function behind the scenes.
          </p>

          <p className="text-slate-300 text-base leading-relaxed">
            I enjoy creating practical applications, exploring emerging ideas, taking part in technical hackathons, and learning through hands-on building. I don&apos;t claim senior mastery or celebrity accolades—I simply love the craft of building useful software, solving difficult problems with teammates, and expanding what I know.
          </p>

          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
            <span className="text-xs font-mono text-cyan-400 uppercase font-semibold">What Motivates Me</span>
            <p className="text-xs text-slate-300 leading-relaxed">
              Improving my life through continuous education, testing my limits, building tangible practical capabilities, supporting friends and teammates when they face challenges, and living an adventurous life without regrets.
            </p>
          </div>
        </div>

        {/* Right: Portrait Slot or Designed Placeholder (Rule 4 & 20) */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="w-full max-w-sm aspect-[4/5] rounded-3xl overflow-hidden border border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950 p-6 flex flex-col justify-between shadow-2xl relative group">
            
            <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
              <span>AUTHENTIC IDENTITY</span>
              <span>@shiv.premi_1630</span>
            </div>

            {hasPortrait ? (
              <img
                src={assetConfig.identity.portrait}
                alt={assetConfig.identity.portraitAlt}
                className="w-full h-full object-cover rounded-2xl"
              />
            ) : (
              <div className="my-auto text-center space-y-3 py-8">
                <div className="w-20 h-20 rounded-2xl bg-cyan-950/80 border border-cyan-500/40 mx-auto flex items-center justify-center text-cyan-400 shadow-xl shadow-cyan-500/10">
                  <UserCheck className="w-10 h-10" />
                </div>
                <div>
                  <h3 className="text-lg font-heading font-bold text-white">Harshad Mane</h3>
                  <p className="text-xs text-cyan-400 font-mono mt-0.5">B.Tech CSE Student • ADCET Ashta</p>
                </div>
                <p className="text-[11px] text-slate-400 max-w-[220px] mx-auto leading-relaxed">
                  Actual personal portrait will be attached directly at <code className="text-cyan-400 font-mono">/assets/identity/portrait.jpg</code>.
                </p>
              </div>
            )}

            <div className="pt-4 border-t border-slate-800/80 text-center">
              <span className="text-xs font-medium text-slate-300 italic">
                &ldquo;Leave people better than you found them.&rdquo;
              </span>
            </div>
          </div>
        </div>

      </section>

      {/* Core Personal Principles */}
      <section className="space-y-8">
        <div className="space-y-2">
          <span className="text-xs font-mono uppercase text-cyan-400 tracking-wider font-semibold">
            Guiding Philosophy
          </span>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white">
            Core Beliefs &amp; Work Ethic
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {corePillars.map((pillar, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
              <span className="text-xs font-mono text-cyan-400 font-bold">0{idx + 1}.</span>
              <h3 className="text-lg font-heading font-bold text-white">{pillar.title}</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Interests & Creative Passions */}
      <section className="space-y-8">
        <div className="space-y-2">
          <span className="text-xs font-mono uppercase text-cyan-400 tracking-wider font-semibold">
            Beyond The Code
          </span>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white">
            Personal Interests &amp; Passions
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {personalInterests.map((interest, idx) => {
            const Icon = interest.icon;
            return (
              <div key={idx} className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 space-y-2 hover:border-slate-700 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-cyan-400">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-heading font-bold text-white">{interest.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{interest.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Event Management Aspiration Section */}
      <section className="p-8 rounded-3xl bg-gradient-to-r from-blue-950/40 to-slate-900 border border-slate-800 space-y-4">
        <div className="flex items-center gap-2 text-cyan-400">
          <Calendar className="w-5 h-5" />
          <h3 className="text-lg font-heading font-bold text-white">
            Campus Event Management &amp; Leadership Aspiration
          </h3>
        </div>
        <p className="text-sm text-slate-300 leading-relaxed">
          Having previously served as School Head Boy across two years and coordinated Padua High School&apos;s Annual Day celebrations twice, Harshad is passionate about event organization. As a first-year engineering student, he currently participates actively in symposiums and hackathons. He plans to develop toward organizing and managing department and college-wide technical and cultural events from his second year onward.
        </p>
        <span className="text-xs text-cyan-400 font-mono block">
          * Represented as a future leadership aspiration for upcoming academic semesters.
        </span>
      </section>

      {/* Navigation footer */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-8 border-t border-slate-800">
        <Link to="/education" className="text-xs font-mono text-cyan-400 hover:underline">
          View Complete Education History →
        </Link>
        <Link to="/contact" className="text-xs font-mono text-slate-400 hover:text-white">
          Get in Touch Directly →
        </Link>
      </div>

    </div>
  );
};
