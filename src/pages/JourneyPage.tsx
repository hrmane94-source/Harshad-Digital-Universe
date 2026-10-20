import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Milestone, 
  ChevronRight
} from 'lucide-react';

export const JourneyPage: React.FC = () => {
  const timelineEvents = [
    {
      year: "2026 — Present",
      title: "First-Year Engineering & Hackathon Breakthroughs",
      category: "Engineering & Competitions",
      institution: "ADCET Ashta, Sangli",
      badge: "Current Academic Phase",
      badgeColor: "bg-cyan-950 text-cyan-300 border-cyan-700",
      description: "Commenced B.Tech in Computer Science and Engineering. Built FALCON-404 for SIH 2026 as team lead and sole developer. Achieved 2nd Place Runner-Up at the national PixelCraft competition (Neuroverse 2K26). Demonstrated Campus Copilot at Tantraparv and ArtBook AI at Founder's Expo.",
      associatedLinks: [
        { label: "FALCON-404 Case Study", url: "/projects/falcon-404" },
        { label: "PixelCraft Runner-Up", url: "/achievements" }
      ]
    },
    {
      year: "2024 – 2026",
      title: "Junior College Science Foundations",
      category: "Academic",
      institution: "Swami Vivekanand Junior College of Science, Koparkhairane",
      badge: "Completed HSC",
      badgeColor: "bg-blue-950 text-blue-300 border-blue-700",
      description: "Completed higher secondary coursework in Physics, Chemistry, and Mathematics under the Maharashtra State Board. Began exploring AI tools and low-level computing concepts.",
      associatedLinks: [
        { label: "Education History", url: "/education" }
      ]
    },
    {
      year: "2022 – 2024",
      title: "School Head Boy & Academic Honors",
      category: "Leadership & Honors",
      institution: "Padua High School, Mankhurd",
      badge: "2-Year Leadership",
      badgeColor: "bg-purple-950 text-purple-300 border-purple-700",
      description: "Served as elected Head Boy across two consecutive academic years (Classes 9 and 10). Managed overall event coordination for the school Annual Day twice. Achieved Subject Topper in Mathematics, Hindi, and Marathi in Class 10 board examinations.",
      associatedLinks: [
        { label: "Verified Leadership", url: "/achievements" }
      ]
    },
    {
      year: "Classes 9 & 10",
      title: "BARC National Science Day Delegations",
      category: "Scientific Exposure",
      institution: "Bhabha Atomic Research Centre (BARC), Trombay",
      badge: "Scientific Visit",
      badgeColor: "bg-amber-950 text-amber-300 border-amber-700",
      description: "Selected for two guided scientific educational visits to the Bhabha Atomic Research Centre in connection with National Science Day activities, experiencing India's premier atomic and computational facilities.",
      associatedLinks: []
    },
    {
      year: "Class 8",
      title: "National Children's Science Congress (District Level)",
      category: "Innovation",
      institution: "Padua High School / NCSC",
      badge: "District Participant",
      badgeColor: "bg-emerald-950 text-emerald-300 border-emerald-700",
      description: "Collaborated on an eco-friendly planting systems science project, defending the concept through school rounds to advance to the district level.",
      associatedLinks: [
        { label: "Eco-Friendly Planting System", url: "/projects/eco-friendly-planting-system" }
      ]
    },
    {
      year: "2027 – 2030+",
      title: "The Horizon: DevSecOps & Nationwide Motorcycle Circuit",
      category: "Aspirations",
      institution: "Engineering Career & Personal Expeditions",
      badge: "Future Vision",
      badgeColor: "bg-rose-950 text-rose-300 border-rose-700",
      description: "Expanding from first-year fundamentals to DevSecOps pipeline automation, open-source defensive security tools, campus technical leadership, and undertaking the All-India circuit motorcycle expedition.",
      associatedLinks: [
        { label: "Career Roadmap (2030)", url: "/career-roadmap" },
        { label: "Motorcycle Ambition", url: "/explorations" }
      ]
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800 text-cyan-300 text-xs font-mono">
          <Milestone className="w-3.5 h-3.5" />
          <span>INTERACTIVE PERSONAL TIMELINE</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
          The Journey So Far
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          From early school science experiments and head boy governance in Mumbai to competitive national hackathons and modern engineering in Sangli.
        </p>
      </div>

      {/* Vertical Interactive Timeline */}
      <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 space-y-12">
        {timelineEvents.map((event, idx) => (
          <div key={idx} className="relative pl-6 sm:pl-10 group">
            
            {/* Timeline Node Icon */}
            <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-slate-950 border-2 border-cyan-500 flex items-center justify-center text-cyan-400 group-hover:scale-125 transition-transform shadow-lg shadow-cyan-500/20">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
            </div>

            {/* Event Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all space-y-3">
              
              {/* Badge & Period */}
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-950 text-cyan-300 border border-slate-800 font-semibold">
                  {event.year}
                </span>

                <span className={`text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full border font-semibold ${event.badgeColor}`}>
                  {event.badge}
                </span>
              </div>

              {/* Title & Institution */}
              <div>
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-white tracking-tight">
                  {event.title}
                </h3>
                <p className="text-xs text-slate-400 font-mono mt-0.5">
                  {event.institution} • {event.category}
                </p>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-300 leading-relaxed">
                {event.description}
              </p>

              {/* Associated Links */}
              {event.associatedLinks.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {event.associatedLinks.map((link, i) => (
                    <Link
                      key={i}
                      to={link.url}
                      className="inline-flex items-center gap-1 text-xs font-medium text-cyan-400 hover:text-cyan-300 bg-cyan-950/40 px-3 py-1 rounded-lg border border-cyan-800/60"
                    >
                      <span>{link.label}</span>
                      <ChevronRight className="w-3 h-3" />
                    </Link>
                  ))}
                </div>
              )}

            </div>

          </div>
        ))}
      </div>

    </div>
  );
};
