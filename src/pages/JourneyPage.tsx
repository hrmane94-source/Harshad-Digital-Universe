import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import {
  Compass,
  Milestone,
  Calendar,
  MapPin,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  Award,
  Shield,
  Cpu,
  BookOpen,
  Terminal,
  ArrowDown,
  Layers
} from 'lucide-react';
import {
  verifiedJourneyMilestones,
  journeyCategories,
  type JourneyCategory,
  type JourneyMilestone
} from '../data/journeyTimeline';
import { Journey3DSculpture } from '../components/journey/Journey3DSculpture';
import { JourneyTiltCard } from '../components/journey/JourneyTiltCard';
import {
  staggerContainer,
  staggerItem,
  defaultViewport
} from '../lib/motionVariants';

export const JourneyPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<JourneyCategory>('all');
  const timelineRef = useRef<HTMLDivElement>(null);

  // Filter milestones based on selected category
  const filteredMilestones = selectedCategory === 'all'
    ? verifiedJourneyMilestones
    : verifiedJourneyMilestones.filter((m) => m.category === selectedCategory);

  // Scroll progress for vertical timeline spine
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 80%', 'end 90%']
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001
  });

  const scrollToTimeline = () => {
    timelineRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const getCategoryIcon = (category: JourneyMilestone['category']) => {
    switch (category) {
      case 'engineering':
        return <Cpu className="w-3.5 h-3.5 text-cobalt" />;
      case 'leadership':
        return <Award className="w-3.5 h-3.5 text-coral" />;
      case 'scientific':
        return <Sparkles className="w-3.5 h-3.5 text-mint" />;
      case 'academic':
        return <BookOpen className="w-3.5 h-3.5 text-cobalt" />;
      case 'systems':
        return <Terminal className="w-3.5 h-3.5 text-mint" />;
      case 'horizon':
        return <Shield className="w-3.5 h-3.5 text-violet" />;
      default:
        return <Milestone className="w-3.5 h-3.5 text-cobalt" />;
    }
  };

  return (
    <div className="relative selection:bg-cobalt/20 selection:text-cobalt overflow-hidden bg-gradient-to-b from-[#F4F1FF] via-[#EAF3FF] to-[#EDE5FF]/40 dark:from-paper dark:via-paper dark:to-paper transition-colors duration-250">
      
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute top-24 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-b from-cobalt/10 via-violet/5 to-transparent blur-3xl -z-10" />
      <div className="pointer-events-none absolute top-[900px] right-0 w-[500px] h-[500px] bg-violet/5 blur-3xl -z-10" />
      <div className="pointer-events-none absolute bottom-[600px] left-0 w-[500px] h-[500px] bg-mint/5 blur-3xl -z-10" />

      {/* SECTION 1: VISUALLY IMPRESSIVE ASYMMETRIC OPENING HERO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20 pb-16 sm:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column (7 Cols): Editorial Narrative & Credentials */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="lg:col-span-7 space-y-6 sm:space-y-8"
          >
            {/* Supertag Badge */}
            <motion.div variants={staggerItem} className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cobalt/10 text-cobalt border border-cobalt/25 text-xs font-mono font-bold tracking-wider uppercase shadow-2xs">
                <Compass className="w-3.5 h-3.5" />
                <span>CHRONOLOGICAL RECORD &bull; 2021 — 2030</span>
              </span>
              <span className="text-xs font-mono text-muted">
                7 Authenticated Chapters
              </span>
            </motion.div>

            {/* Main Editorial Headline */}
            <motion.div variants={staggerItem} className="space-y-3">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif text-ink tracking-tight font-normal leading-[1.05]">
                The Journey <br />
                <span className="italic font-normal bg-gradient-to-r from-cobalt via-violet to-mint bg-clip-text text-transparent">
                  So Far.
                </span>
              </h1>
              <p className="text-lg sm:text-xl font-serif text-ink/90 italic leading-relaxed max-w-2xl">
                &ldquo;Every experiment, challenge, and opportunity has shaped the builder I am becoming.&rdquo;
              </p>
            </motion.div>

            {/* Supporting Context Paragraph */}
            <motion.p variants={staggerItem} className="text-muted text-sm sm:text-base leading-relaxed max-w-2xl">
              An unembellished personal chronology tracing early science experiments and two-term student head boy governance in Mumbai, through foundational calculus and daily procedural C discipline, to national competitive hackathons at ADCET and the long-term DevSecOps horizon.
            </motion.p>

            {/* Key Fact Badges Grid */}
            <motion.div variants={staggerItem} className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {[
                { value: 'B.Tech CSE', label: 'ADCET Ashta (2026–30)' },
                { value: '2nd Place', label: 'PixelCraft National' },
                { value: 'Head Boy', label: 'Padua High School (2 Yrs)' },
                { value: 'BARC Trombay', label: '2 National Delegations' }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-2xl bg-card border border-border-hairline shadow-2xs space-y-1"
                >
                  <span className="text-xs sm:text-sm font-mono font-bold text-ink block truncate">
                    {item.value}
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-mono text-muted block truncate">
                    {item.label}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Scroll CTA Cue */}
            <motion.div variants={staggerItem} className="pt-2 flex items-center gap-4">
              <button
                type="button"
                onClick={scrollToTimeline}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-ink text-paper font-semibold text-xs font-mono uppercase tracking-wider hover:opacity-90 transition-all cursor-pointer shadow-sm group"
              >
                <span>Traverse Chronology</span>
                <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
              </button>

              <span className="text-xs font-mono text-muted hidden sm:inline">
                Scroll to explore chapters
              </span>
            </motion.div>

          </motion.div>

          {/* Right Column (5 Cols): Interactive 3D Spatial Timeline Sculpture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col items-center justify-center relative"
          >
            {/* Ambient Backdrop Glow for Sculpture */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cobalt/20 via-violet/15 to-mint/10 rounded-full blur-3xl pointer-events-none -z-10" />
            
            {/* 3D Sculpture Object */}
            <div className="w-full max-w-md p-4 rounded-3xl bg-card/60 backdrop-blur-md border border-border-hairline shadow-xl tech-card relative overflow-hidden">
              <div className="flex items-center justify-between pb-2 border-b border-border-hairline text-[11px] font-mono text-muted">
                <span className="flex items-center gap-1.5 text-cobalt font-semibold">
                  <span className="w-2 h-2 rounded-full bg-cobalt animate-pulse" />
                  SPATIAL CHRONOMETER
                </span>
                <span>DRAG / HOVER 3D</span>
              </div>

              <Journey3DSculpture className="py-2" />

              <div className="pt-3 border-t border-border-hairline flex items-center justify-between text-[10px] font-mono text-muted">
                <span>NCSC &bull; BARC &bull; PADUA</span>
                <span className="text-cobalt font-semibold">ADCET &bull; 2030</span>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* SECTION 2: CHRONOLOGY NAVIGATION & FILTER BAR */}
      <section className="sticky top-16 z-30 bg-paper/85 dark:bg-paper/80 backdrop-blur-md border-y border-border-hairline py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          <div className="flex items-center gap-2 text-xs font-mono text-muted shrink-0">
            <Layers className="w-4 h-4 text-cobalt" />
            <span className="font-semibold text-ink uppercase tracking-wider">Timeline Filter:</span>
          </div>

          {/* Filter Chips */}
          <div className="flex flex-wrap items-center gap-2 overflow-x-auto max-w-full pb-1 sm:pb-0 scrollbar-none">
            {journeyCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                  selectedCategory === cat.id
                    ? 'bg-ink text-paper font-semibold shadow-xs'
                    : 'bg-card text-muted border border-border-hairline hover:border-border-medium hover:text-ink'
                }`}
              >
                <span>{cat.label}</span>
                {cat.id !== 'all' && (
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    selectedCategory === cat.id ? 'bg-white/20 text-paper' : 'bg-subtle text-muted'
                  }`}>
                    {verifiedJourneyMilestones.filter((m) => m.category === cat.id).length}
                  </span>
                )}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 3: THE INTERACTIVE CHRONOLOGY TIMELINE */}
      <section
        ref={timelineRef}
        id="chronology"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 relative"
      >
        {/* Continuous Central Timeline Spine Line */}
        {/* On Desktop: Centered at 50% | On Mobile/Tablet: Left aligned at 27px */}
        <div className="absolute top-0 bottom-0 left-[27px] lg:left-1/2 -translate-x-1/2 w-0.5 bg-border-hairline -z-0">
          {/* Animated Scroll Progress Gradient Beam */}
          <motion.div
            style={{ scaleY: smoothProgress, transformOrigin: 'top' }}
            className="w-full h-full bg-gradient-to-b from-cobalt via-violet to-mint shadow-[0_0_12px_rgba(120,166,255,0.6)]"
          />
        </div>

        {/* Milestone Cards Stream */}
        <div className="space-y-16 sm:space-y-24 relative z-10">
          {filteredMilestones.map((milestone, idx) => {
            const isLeft = idx % 2 === 0;

            return (
              <motion.div
                key={milestone.id}
                initial={{ opacity: 0, y: 28, x: isLeft ? -16 : 16 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={defaultViewport}
                transition={{ duration: 0.65, delay: 0.05 }}
                className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
              >
                {/* Central Spine Node Pill */}
                {/* Desktop: Centered on spine at 50% | Mobile: Left aligned at 27px */}
                <div
                  className="absolute left-[27px] lg:left-1/2 -translate-x-1/2 top-6 sm:top-8 w-11 h-11 rounded-full bg-card border-2 border-border-hairline shadow-md flex items-center justify-center z-20 transition-transform group-hover:scale-110"
                  style={{
                    borderColor: milestone.accent.nodeBg,
                    boxShadow: `0 0 16px ${milestone.accent.nodeBg}40`
                  }}
                >
                  <div
                    className="w-4 h-4 rounded-full flex items-center justify-center shadow-xs"
                    style={{ backgroundColor: milestone.accent.nodeBg }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white dark:bg-slate-950" />
                  </div>
                </div>

                {/* Mobile Connector Beam */}
                <div
                  className="lg:hidden absolute left-[47px] top-[45px] w-2.5 sm:w-3.5 h-[2px]"
                  style={{ backgroundColor: milestone.accent.nodeBg, opacity: 0.7 }}
                />

                {/* Left Side Slot (Desktop: occupies column 1 if isLeft; otherwise empty spacer) */}
                <div
                  className={`pl-14 sm:pl-16 lg:pl-0 relative ${
                    isLeft
                      ? 'lg:col-start-1 lg:col-end-2 lg:pr-8'
                      : 'lg:col-start-1 lg:col-end-2 hidden lg:block'
                  }`}
                >
                  {isLeft ? (
                    <>
                      {/* Desktop Connector to Center Node */}
                      <div
                        className="hidden lg:block absolute right-0 top-[53px] w-8 h-[2px]"
                        style={{ backgroundColor: milestone.accent.nodeBg, opacity: 0.7 }}
                      />
                      <JourneyTiltCard milestone={milestone} isLeftAligned={true}>
                        <MilestoneCardContent milestone={milestone} getCategoryIcon={getCategoryIcon} />
                      </JourneyTiltCard>
                    </>
                  ) : (
                    /* Subtle Year Watermark / Chapter Marker for Right-aligned card on desktop */
                    <div className="text-right pr-12 space-y-1 hidden lg:block select-none">
                      <span className="text-xs font-mono uppercase tracking-widest text-muted font-bold block">
                        {milestone.chapter}
                      </span>
                      <span className="text-3xl font-serif text-ink/30 font-normal block">
                        {milestone.year}
                      </span>
                    </div>
                  )}
                </div>

                {/* Right Side Slot (Desktop: occupies column 2 if !isLeft; otherwise empty spacer) */}
                <div
                  className={`pl-14 sm:pl-16 lg:pl-0 relative ${
                    !isLeft
                      ? 'lg:col-start-2 lg:col-end-3 lg:pl-8'
                      : 'lg:col-start-2 lg:col-end-3 hidden lg:block'
                  }`}
                >
                  {!isLeft ? (
                    <>
                      {/* Desktop Connector from Center Node */}
                      <div
                        className="hidden lg:block absolute left-0 top-[53px] w-8 h-[2px]"
                        style={{ backgroundColor: milestone.accent.nodeBg, opacity: 0.7 }}
                      />
                      <JourneyTiltCard milestone={milestone} isLeftAligned={false}>
                        <MilestoneCardContent milestone={milestone} getCategoryIcon={getCategoryIcon} />
                      </JourneyTiltCard>
                    </>
                  ) : (
                    /* Subtle Year Watermark / Chapter Marker for Left-aligned card on desktop */
                    <div className="text-left pl-12 space-y-1 hidden lg:block select-none">
                      <span className="text-xs font-mono uppercase tracking-widest text-muted font-bold block">
                        {milestone.chapter}
                      </span>
                      <span className="text-3xl font-serif text-ink/30 font-normal block">
                        {milestone.year}
                      </span>
                    </div>
                  )}
                </div>

              </motion.div>
            );
          })}
        </div>
      </section>

      {/* SECTION 4: THE JOURNEY CONTINUES — POLISHED ROADMAP CONCLUSION */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center space-y-8 relative">
        
        {/* Terminal Pulsing Continuation Node */}
        <div className="w-14 h-14 rounded-full bg-card border-2 border-violet shadow-lg shadow-violet/20 mx-auto flex items-center justify-center">
          <span className="w-4 h-4 rounded-full bg-violet animate-ping" />
        </div>

        <div className="space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-mono uppercase tracking-widest text-violet font-bold block">
            THE CHRONOLOGY EXPANDS
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-ink tracking-tight">
            The Journey Continues.
          </h2>
          <p className="text-muted text-sm sm:text-base leading-relaxed">
            &ldquo;Still learning. Still experimenting. Still building what comes next.&rdquo;
          </p>
        </div>

        {/* Contextual Directional Action Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-left">
          
          <Link
            to="/projects"
            className="p-6 rounded-2xl bg-card border border-border-hairline hover:border-cobalt/40 transition-all space-y-2 shadow-xs group tech-card"
          >
            <div className="w-8 h-8 rounded-lg bg-cobalt/10 text-cobalt flex items-center justify-center group-hover:scale-110 transition-transform">
              <Cpu className="w-4 h-4" />
            </div>
            <h3 className="font-serif text-lg font-bold text-ink group-hover:text-cobalt transition-colors flex items-center justify-between">
              <span>Selected Projects</span>
              <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </h3>
            <p className="text-xs text-muted leading-relaxed">
              Examine live case studies including FALCON-404, Arogya AI, and Campus Copilot.
            </p>
          </Link>

          <Link
            to="/education"
            className="p-6 rounded-2xl bg-card border border-border-hairline hover:border-mint/40 transition-all space-y-2 shadow-xs group tech-card"
          >
            <div className="w-8 h-8 rounded-lg bg-mint/10 text-mint flex items-center justify-center group-hover:scale-110 transition-transform">
              <BookOpen className="w-4 h-4" />
            </div>
            <h3 className="font-serif text-lg font-bold text-ink group-hover:text-mint transition-colors flex items-center justify-between">
              <span>Education Ledger</span>
              <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </h3>
            <p className="text-xs text-muted leading-relaxed">
              Trace academic programs at ADCET Ashta, SWJC, and foundational schooling.
            </p>
          </Link>

          <Link
            to="/career-roadmap"
            className="p-6 rounded-2xl bg-card border border-border-hairline hover:border-violet/40 transition-all space-y-2 shadow-xs group tech-card"
          >
            <div className="w-8 h-8 rounded-lg bg-violet/10 text-violet flex items-center justify-center group-hover:scale-110 transition-transform">
              <Shield className="w-4 h-4" />
            </div>
            <h3 className="font-serif text-lg font-bold text-ink group-hover:text-violet transition-colors flex items-center justify-between">
              <span>2030 Career Vision</span>
              <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </h3>
            <p className="text-xs text-muted leading-relaxed">
              Inspect the four-year engineering roadmap targeting DevSecOps architecture.
            </p>
          </Link>

        </div>

      </section>

    </div>
  );
};

interface MilestoneCardContentProps {
  milestone: JourneyMilestone;
  getCategoryIcon: (cat: JourneyMilestone['category']) => React.ReactNode;
}

const MilestoneCardContent: React.FC<MilestoneCardContentProps> = ({
  milestone,
  getCategoryIcon
}) => {
  return (
    <>
      {/* Top Metadata Header */}
      <div className="flex flex-wrap items-center justify-between gap-2.5 pb-2 border-b border-border-hairline">
        <div className="flex items-center gap-2">
          <span className="p-1 rounded-md bg-subtle">
            {getCategoryIcon(milestone.category)}
          </span>
          <span className="text-[11px] font-mono uppercase tracking-widest text-muted font-bold">
            {milestone.chapter}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {milestone.statMetric && (
            <span className="px-2 py-0.5 rounded-md bg-subtle text-ink text-[11px] font-mono font-bold border border-border-hairline">
              {milestone.statMetric.value}
            </span>
          )}
          <span className={`text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full border font-semibold ${milestone.accent.badgeClass}`}>
            {milestone.badge}
          </span>
        </div>
      </div>

      {/* Date & Period Badge */}
      <div className="flex items-center gap-2 text-xs font-mono text-muted">
        <Calendar className="w-3.5 h-3.5 text-cobalt" />
        <span className="font-semibold text-ink">{milestone.year}</span>
        <span>&bull;</span>
        <span className="truncate">{milestone.chapterTitle}</span>
      </div>

      {/* Title */}
      <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ink tracking-tight leading-tight group-hover:text-cobalt transition-colors">
        {milestone.title}
      </h3>

      {/* Institution & Location */}
      <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-muted">
        <span className="text-ink font-semibold">{milestone.institution}</span>
        <span>&bull;</span>
        <span className="flex items-center gap-1">
          <MapPin className="w-3 h-3 text-coral" />
          <span>{milestone.location}</span>
        </span>
      </div>

      {/* Narrative Description */}
      <p className="text-xs sm:text-sm text-muted leading-relaxed font-sans">
        {milestone.description}
      </p>

      {/* Verified Highlights Bullet List */}
      <div className="space-y-2 pt-2">
        <span className="text-[10px] font-mono uppercase tracking-wider text-muted font-semibold block">
          Key Milestones &amp; Evidence:
        </span>
        <div className="space-y-1.5">
          {milestone.highlights.map((h, i) => (
            <div key={i} className="flex items-start gap-2 text-xs text-muted leading-relaxed">
              <CheckCircle2 className="w-3.5 h-3.5 text-mint shrink-0 mt-0.5" />
              <span>{h}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Skills / Technology Tags */}
      {milestone.skills && milestone.skills.length > 0 && (
        <div className="pt-2 flex flex-wrap gap-1.5">
          {milestone.skills.map((skill, sIdx) => (
            <span
              key={sIdx}
              className="text-[10px] font-mono px-2 py-0.5 rounded bg-subtle text-muted border border-border-hairline"
            >
              {skill}
            </span>
          ))}
        </div>
      )}

      {/* Associated Links */}
      {milestone.associatedLinks.length > 0 && (
        <div className="pt-3 border-t border-border-hairline flex flex-wrap items-center gap-2.5">
          {milestone.associatedLinks.map((link, lIdx) => (
            <Link
              key={lIdx}
              to={link.url}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-subtle hover:bg-black/[0.04] dark:hover:bg-white/[0.06] border border-border-hairline text-cobalt hover:underline text-xs font-mono font-semibold transition-all group/link"
            >
              <span>{link.label}</span>
              <ArrowUpRight className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
            </Link>
          ))}
        </div>
      )}
    </>
  );
};
