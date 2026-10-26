export type JourneyCategory = 
  | 'all' 
  | 'engineering' 
  | 'academic' 
  | 'leadership' 
  | 'scientific' 
  | 'systems' 
  | 'horizon';

export interface JourneyMilestone {
  id: string;
  chapter: string;
  chapterTitle: string;
  year: string;
  category: 'engineering' | 'academic' | 'leadership' | 'scientific' | 'systems' | 'horizon';
  badge: string;
  title: string;
  institution: string;
  location: string;
  description: string;
  highlights: string[];
  skills?: string[];
  associatedLinks: {
    label: string;
    url: string;
    isExternal?: boolean;
  }[];
  accent: {
    color: string; // 'cobalt' | 'violet' | 'coral' | 'mint' | 'sunny'
    glowClass: string;
    borderClass: string;
    badgeClass: string;
    textClass: string;
    nodeBg: string;
  };
  statMetric?: {
    value: string;
    label: string;
  };
}

export const journeyCategories: { id: JourneyCategory; label: string; count?: number }[] = [
  { id: 'all', label: 'Complete Chronology' },
  { id: 'engineering', label: 'Engineering & Hackathons' },
  { id: 'academic', label: 'Academic Milestones' },
  { id: 'leadership', label: 'Student Governance' },
  { id: 'scientific', label: 'Scientific Delegations' },
  { id: 'systems', label: 'Systems & C Practice' },
  { id: 'horizon', label: 'Future Horizon (2030)' },
];

export const verifiedJourneyMilestones: JourneyMilestone[] = [
  {
    id: 'milestone-horizon-2030',
    chapter: 'CHAPTER 07',
    chapterTitle: 'The 2030 Engineering Horizon',
    year: '2027 – 2030+',
    category: 'horizon',
    badge: 'Strategic Vision',
    title: 'Specialized DevSecOps Architecture & Expedition Ambition',
    institution: 'Undergraduate Progression & Independent Engineering',
    location: 'ADCET Ashta / Maharashtra, India',
    description: 'Projected evolution through second, third, and fourth years of computer science engineering. Focused on automated CI/CD security scanning, cloud infrastructure orchestration, defensive security tooling, and preparation for an ambitious long-term All-India motorcycle circuit expedition.',
    highlights: [
      'Targeting comprehensive specialization in DevSecOps pipeline automation and secure cloud delivery',
      'Architecting open-source security utilities and campus technical workshops',
      'Progressively training endurance riding discipline across Maharashtra corridors for the All-India motorcycle circuit'
    ],
    skills: ['DevSecOps', 'Cloud Architecture', 'Container Security', 'CI/CD Automation', 'Endurance Riding'],
    associatedLinks: [
      { label: 'View 2030 Career Roadmap', url: '/career-roadmap' },
      { label: 'Explore Motorcycle Ambitions', url: '/explorations' }
    ],
    accent: {
      color: 'violet',
      glowClass: 'from-violet/20 via-cobalt/10 to-transparent',
      borderClass: 'border-violet/30 hover:border-violet/60',
      badgeClass: 'bg-violet/15 text-violet border-violet/30',
      textClass: 'text-violet',
      nodeBg: '#B39AFF'
    },
    statMetric: {
      value: '2030',
      label: 'Vision Target'
    }
  },
  {
    id: 'milestone-engineering-adcet',
    chapter: 'CHAPTER 06',
    chapterTitle: 'Engineering & Hackathon Momentum',
    year: '2026 — Present',
    category: 'engineering',
    badge: 'Current Academic Phase',
    title: 'First-Year B.Tech CSE & Competitive Technical Builds',
    institution: 'Annasaheb Dange College of Engineering and Technology (ADCET)',
    location: 'Ashta, Sangli, Maharashtra',
    description: 'Enrolled in Computer Science and Engineering, establishing deep fundamentals while aggressively testing capability in national competitions. Built FALCON-404 for SIH 2026 as team lead and sole developer, achieved 2nd Place Runner-Up at PixelCraft (Neuroverse 2K26), and showcased Campus Copilot and ArtBook AI.',
    highlights: [
      'Team Lead & Sole Developer for FALCON-404 (Smart India Hackathon 2026 submission, Problem Statement ID: 26188)',
      'Runner-Up (2nd Place) at National PixelCraft Competition across 2 rounds: GADA Electronics & Neuroverse 2K26 Portal',
      'Live demonstration of Campus Copilot at Tantraparv (Sharad Institute) and ArtBook AI at Founder\'s Expo',
      'Participated in WCE Sangli AARAMBH Hackathon with Arogya AI healthcare bed analytics'
    ],
    skills: ['TypeScript', 'React', 'OCR Forensics', 'Error Level Analysis', 'Procedural C', 'Tailwind CSS'],
    associatedLinks: [
      { label: 'FALCON-404 Case Study', url: '/projects/falcon-404' },
      { label: 'PixelCraft Runner-Up Record', url: '/achievements' },
      { label: 'View All Projects', url: '/projects' }
    ],
    accent: {
      color: 'cobalt',
      glowClass: 'from-cobalt/20 via-sky-500/10 to-transparent',
      borderClass: 'border-cobalt/30 hover:border-cobalt/60',
      badgeClass: 'bg-cobalt/15 text-cobalt border-cobalt/30',
      textClass: 'text-cobalt',
      nodeBg: '#78A6FF'
    },
    statMetric: {
      value: '2nd Place',
      label: 'PixelCraft National'
    }
  },
  {
    id: 'milestone-systems-c',
    chapter: 'CHAPTER 05',
    chapterTitle: 'Low-Level Foundations',
    year: '2026 (Daily Discipline)',
    category: 'systems',
    badge: 'Systems Focus',
    title: 'Procedural C Programming & Memory Mechanics',
    institution: 'Independent Academic Engineering Discipline',
    location: 'ADCET Ashta, Sangli',
    description: 'Committed to rigorous procedural C programming exercises alongside engineering coursework. Focusing on manual memory allocation, pointer manipulation, cache coherence, stack versus heap dynamics, and writing fundamental data structures from scratch without high-level abstractions.',
    highlights: [
      'Implemented manual linked lists, queues, dynamic arrays, and custom hash maps in C',
      'Benchmarking memory footprints and tracing pointer safety in computational structures',
      'Bridging low-level systems comprehension with modern web frontend application performance'
    ],
    skills: ['Procedural C', 'Pointer Mechanics', 'Memory Allocation', 'Data Structures', 'POSIX Concepts'],
    associatedLinks: [
      { label: 'Inspect Technical Skills', url: '/skills' },
      { label: 'Undergraduate Program', url: '/education' }
    ],
    accent: {
      color: 'mint',
      glowClass: 'from-mint/20 via-emerald-500/10 to-transparent',
      borderClass: 'border-mint/30 hover:border-mint/60',
      badgeClass: 'bg-mint/15 text-mint border-mint/30',
      textClass: 'text-mint',
      nodeBg: '#78E2C0'
    },
    statMetric: {
      value: 'Daily',
      label: 'Deep Work Discipline'
    }
  },
  {
    id: 'milestone-junior-college',
    chapter: 'CHAPTER 04',
    chapterTitle: 'Scientific Analytical Foundations',
    year: '2024 – 2026',
    category: 'academic',
    badge: 'Completed HSC',
    title: 'Higher Secondary Science & Algorithmic Discovery',
    institution: 'Swami Vivekanand Junior College of Science (SWJC)',
    location: 'Koparkhairane, Navi Mumbai, Maharashtra',
    description: 'Completed higher secondary coursework under the Maharashtra State Board, emphasizing Physics, Chemistry, and Mathematics (Calculus & Vectors). During this period, began independent self-study into algorithmic reasoning, computer architectures, and early web scripting.',
    highlights: [
      'Mastered foundational calculus, electromagnetic physics, and chemical mechanics',
      'Developed mathematical rigor that underpins cryptographic algorithms and computer logic',
      'Prepared systematically for entrance examinations and transition to undergraduate engineering'
    ],
    skills: ['Calculus', 'Analytical Physics', 'Algorithmic Problem-Solving', 'Mathematics'],
    associatedLinks: [
      { label: 'Education Ledger', url: '/education' }
    ],
    accent: {
      color: 'cobalt',
      glowClass: 'from-sky-500/20 via-cobalt/10 to-transparent',
      borderClass: 'border-cobalt/25 hover:border-cobalt/50',
      badgeClass: 'bg-subtle text-ink border-border-hairline',
      textClass: 'text-cobalt',
      nodeBg: '#78A6FF'
    },
    statMetric: {
      value: 'HSC',
      label: 'State Board Completed'
    }
  },
  {
    id: 'milestone-head-boy',
    chapter: 'CHAPTER 03',
    chapterTitle: 'Student Leadership & Academic Topper',
    year: '2022 – 2024',
    category: 'leadership',
    badge: 'Elected Head Boy',
    title: 'School Head Boy & Board Examination Subject Topper',
    institution: 'Padua High School',
    location: 'Mankhurd, Mumbai, Maharashtra',
    description: 'Elected School Head Boy across two consecutive academic years (Classes 9 and 10), representing the student body, conducting morning assemblies, and enforcing campus discipline. Entrusted with end-to-end event management for the school\'s flagship Annual Day cultural gathering twice. Graduated as Subject Topper in Mathematics, Hindi, and Marathi in Class 10 SSC board examinations.',
    highlights: [
      'Elected Head Boy for two consecutive years (Class 9 & Class 10), leading the prefectural council',
      'Overall Student Coordinator managing 2 flagship editions of the School Annual Day',
      'Subject Topper in Class 10 (SSC): Highest marks in Mathematics, Hindi, and Marathi (89.20% overall)'
    ],
    skills: ['Student Governance', 'Public Speaking', 'Event Operations', 'Mathematics Discipline'],
    associatedLinks: [
      { label: 'Verified Leadership Letters', url: '/achievements' },
      { label: 'Academic Topper Certificates', url: '/education' }
    ],
    accent: {
      color: 'coral',
      glowClass: 'from-coral/20 via-sunny/10 to-transparent',
      borderClass: 'border-coral/30 hover:border-coral/60',
      badgeClass: 'bg-coral/15 text-coral border-coral/30',
      textClass: 'text-coral',
      nodeBg: '#FF8E82'
    },
    statMetric: {
      value: '89.20%',
      label: 'Class 10 SSC & Topper'
    }
  },
  {
    id: 'milestone-barc-delegation',
    chapter: 'CHAPTER 02',
    chapterTitle: 'National Scientific Facilities',
    year: 'Classes 9 & 10 (2022–2024)',
    category: 'scientific',
    badge: 'Scientific Delegation',
    title: 'Bhabha Atomic Research Centre (BARC) National Science Day Delegations',
    institution: 'Bhabha Atomic Research Centre (BARC)',
    location: 'Trombay, Mumbai, Maharashtra',
    description: 'Selected for two competitive educational delegations to India\'s premier nuclear and computational research institute in Trombay, held in connection with National Science Day activities. Gained firsthand exposure to supercomputing clusters, advanced reactor engineering, radioisotope labs, and national scientific methodologies.',
    highlights: [
      'Two consecutive guided delegations to BARC Trombay (Class 9 and Class 10)',
      'Direct observation of high-performance scientific computational research and robotics',
      'Engaged with government scientists on scientific careers, computational simulation, and physics'
    ],
    skills: ['Scientific Observation', 'Research Methodology', 'Nuclear Science Exposure'],
    associatedLinks: [
      { label: 'Leadership & Delegations Record', url: '/achievements' }
    ],
    accent: {
      color: 'mint',
      glowClass: 'from-mint/20 via-sky-500/10 to-transparent',
      borderClass: 'border-mint/30 hover:border-mint/60',
      badgeClass: 'bg-mint/15 text-mint border-mint/30',
      textClass: 'text-mint',
      nodeBg: '#78E2C0'
    },
    statMetric: {
      value: '2 Visits',
      label: 'BARC Trombay Facility'
    }
  },
  {
    id: 'milestone-ncsc-district',
    chapter: 'CHAPTER 01',
    chapterTitle: 'Curiosity & Early Engineering',
    year: 'Class 8 (2021–2022)',
    category: 'scientific',
    badge: 'District Participant',
    title: 'National Children\'s Science Congress: Eco-Friendly Planting System',
    institution: 'National Children\'s Science Congress (NCSC) / Padua High School',
    location: 'Mumbai District Level, Maharashtra',
    description: 'Designed, built, and defended an eco-friendly planting systems innovation project in collaboration with school peers for the National Children\'s Science Congress (NCSC). Successfully cleared school-wide evaluation to represent Padua High School at the district level.',
    highlights: [
      'Constructed working prototype demonstrating sustainable plant hydration and natural materials',
      'Defended technical hypothesis and ecological efficiency in front of district jury evaluators',
      'Catalyzed lifelong enthusiasm for systematic empirical experimentation and building physical/digital systems'
    ],
    skills: ['Hypothesis Testing', 'Eco-System Design', 'Project Defense', 'Team Collaboration'],
    associatedLinks: [
      { label: 'Eco-Friendly Planting System Details', url: '/projects/eco-friendly-planting-system' }
    ],
    accent: {
      color: 'sunny',
      glowClass: 'from-sunny/20 via-amber-500/10 to-transparent',
      borderClass: 'border-sunny/30 hover:border-sunny/60',
      badgeClass: 'bg-sunny/15 text-sunny border-sunny/30',
      textClass: 'text-sunny',
      nodeBg: '#F4CF72'
    },
    statMetric: {
      value: 'District',
      label: 'NCSC Presentation'
    }
  }
];
