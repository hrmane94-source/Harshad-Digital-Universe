import React from 'react';
import { Link } from 'react-router-dom';
import {
  Milestone,
  ChevronRight,
  Calendar
} from 'lucide-react';

export const JourneyPage: React.FC = () => {
  const timelineEvents = [
    {
      year: "2026 — Present",
      title: "First-Year Engineering & Competitive Hackathon Builds",
      category: "Engineering & Competitions",
      institution: "ADCET Ashta, Sangli",
      badge: "Current Academic Phase",
      badgeColor: "bg-cobalt/10 text-cobalt border-cobalt/20",
      description: "Commenced B.Tech in Computer Science and Engineering. Built FALCON-404 for SIH 2026 as team lead and sole developer. Achieved 2nd Place Runner-Up at the national PixelCraft competition (Neuroverse 2K26). Demonstrated Campus Copilot at Tantraparv and ArtBook AI at Founder's Expo.",
      associatedLinks: [
        { label: "FALCON-404 Case Study", url: "/projects/falcon-404" },
        { label: "PixelCraft Runner-Up", url: "/achievements" }
      ]
    },
    {
      year: "2024 – 2026",
      title: "Junior College Science & Analytical Foundations",
      category: "Academic",
      institution: "Swami Vivekanand Junior College of Science, Koparkhairane",
      badge: "Completed HSC",
      badgeColor: "bg-black/[0.04] dark:bg-white/[0.06] text-muted border-border-hairline",
      description: "Completed higher secondary coursework in Physics, Chemistry, and Mathematics under the Maharashtra State Board. Began exploring AI tools, algorithmic reasoning, and computer systems.",
      associatedLinks: [
        { label: "Education History", url: "/education" }
      ]
    },
    {
      year: "2022 – 2024",
      title: "School Head Boy & Academic Honors",
      category: "Leadership & Honors",
      institution: "Padua High School, Mankhurd",
      badge: "2-Year Elected Leadership",
      badgeColor: "bg-coral/10 text-coral border-coral/20",
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
      badge: "Scientific Delegation",
      badgeColor: "bg-black/[0.04] dark:bg-white/[0.06] text-muted border-border-hairline",
      description: "Selected for two guided scientific educational visits to the Bhabha Atomic Research Centre in connection with National Science Day activities, experiencing India's premier atomic and computational facilities.",
      associatedLinks: []
    },
    {
      year: "Class 8",
      title: "National Children's Science Congress (District Level)",
      category: "Innovation",
      institution: "Padua High School / NCSC",
      badge: "District Participant",
      badgeColor: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20",
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
      badgeColor: "bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/20",
      description: "Expanding from first-year fundamentals to DevSecOps pipeline automation, open-source defensive security tools, campus technical leadership, and undertaking the All-India circuit motorcycle expedition.",
      associatedLinks: [
        { label: "Career Roadmap (2030)", url: "/career-roadmap" },
        { label: "Motorcycle Ambition", url: "/explorations" }
      ]
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

      {/* Editorial Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cobalt/10 border border-cobalt/25 text-cobalt text-[11px] font-mono tracking-widest uppercase font-semibold">
          <Milestone className="w-3.5 h-3.5" />
          <span>PERSONAL CHRONOLOGY</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-serif text-ink tracking-tight font-normal leading-[1.08]">
          The Journey <span className="italic font-normal bg-gradient-to-r from-cobalt via-violet to-sky-400 bg-clip-text text-transparent">So Far</span>
        </h1>
        <p className="text-muted text-sm sm:text-base leading-relaxed">
          From early school science experiments and head boy governance in Mumbai to competitive national hackathons and modern engineering in Sangli.
        </p>
      </div>

      {/* Vertical Fine-Line Timeline */}
      <div className="relative border-l border-border-hairline ml-4 sm:ml-6 space-y-12">
        {timelineEvents.map((event, idx) => (
          <div key={idx} className="relative pl-6 sm:pl-10 group">

            {/* Timeline Node Icon */}
            <div className="absolute -left-[17px] top-2 w-8 h-8 rounded-full bg-surface dark:bg-card border-2 border-cobalt flex items-center justify-center text-cobalt group-hover:scale-110 transition-transform shadow-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-cobalt" />
            </div>

            {/* Event Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-surface dark:bg-card border border-border-hairline hover:border-cobalt/40 transition-all space-y-3.5 shadow-xs hover:shadow-xl hover:-translate-y-0.5">

              {/* Badge & Period */}
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-subtle text-ink border border-border-hairline font-semibold flex items-center gap-1.5">
                  <Calendar className="w-3 h-3 text-cobalt" />
                  <span>{event.year}</span>
                </span>

                <span className={`text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full border font-semibold ${event.badgeColor}`}>
                  {event.badge}
                </span>
              </div>

              {/* Title & Institution */}
              <div>
                <h3 className="font-serif text-2xl font-bold text-ink tracking-tight">
                  {event.title}
                </h3>
                <p className="text-xs text-muted font-mono mt-1">
                  {event.institution} &bull; {event.category}
                </p>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                {event.description}
              </p>

              {/* Associated Links */}
              {event.associatedLinks.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-2 border-t border-border-hairline">
                  {event.associatedLinks.map((link, i) => (
                    <Link
                      key={i}
                      to={link.url}
                      className="inline-flex items-center gap-1 text-xs font-medium text-cobalt hover:underline py-1"
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
