/**
 * Verified Public Knowledge Source for Harshad Mane's Portfolio
 * Strictly curated from verified public data across the application.
 *
 * Rules:
 * - NO private owner data, reflections, tasks, or credentials.
 * - Accurate limitations: FALCON-404 is an identity screening prototype (not proof of fraud).
 * - Arogya AI uses synthetic demo data (not clinically validated, no real payments).
 * - PixelCraft is 2nd Place / Runner-up at Neuroverse 2K26.
 * - First-year B.Tech CSE student (2026-2030) at ADCET Ashta.
 */

export interface KnowledgeProject {
  slug: string;
  route: string;
  title: string;
  importance: 'flagship' | 'major' | 'prototype' | 'academic';
  category: string;
  domain: string;
  role: string;
  period: string;
  status: string;
  tagline: string;
  problem: string;
  solution: string;
  harshadContribution: string;
  technologies: string[];
  limitations: string[];
  competition?: {
    name: string;
    teamName: string;
    problemStatementId?: string;
    result?: string;
  };
  keyFeatures: string[];
}

export interface ProfileKnowledge {
  identity: {
    fullName: string;
    preferredName: string;
    creativeHandle: string;
    headline: string;
    motto: string;
    currentEducation: string;
    institution: string;
    academicPeriod: string;
    location: string;
    publicBio: string;
    personalStatement: string;
  };
  contact: {
    email: string;
    github: string;
    linkedin: string;
    behance: string;
    instagram: string;
  };
  focusAreas: {
    primaryDirection: string;
    secondaryInterests: string[];
    technicalPhilosophy: string;
    buildingApproach: string;
  };
  skillEcosystem: {
    foundations: string[];
    currentlyLearning: string[];
    cybersecurityFoundations: string[];
    aiAssistedTooling: string[];
    frameworksExplored: string[];
    honestyClarification: string;
  };
  projects: KnowledgeProject[];
  achievements: Array<{
    title: string;
    eventOrContext: string;
    institution: string;
    result: string;
    year: string;
    description: string;
    route: string;
  }>;
  leadership: Array<{
    title: string;
    role: string;
    institution: string;
    period: string;
    highlights: string[];
    route: string;
  }>;
  creativePursuits: {
    brand: string;
    focus: string;
    description: string;
    disciplines: string[];
    motorcyclingVision: string;
    route: string;
  };
  careerRoadmap: {
    phase: string;
    targetYear: string;
    vision: string;
    route: string;
  };
}

export const profileKnowledge: ProfileKnowledge = {
  identity: {
    fullName: "Harshad Rajaram Mane",
    preferredName: "Harshad Mane",
    creativeHandle: "shiv.premi_1630",
    headline: "Curious enough to explore. Driven enough to build.",
    motto: "Pressure is a privilege.",
    currentEducation: "B.Tech in Computer Science and Engineering (First Year, 2026–2030)",
    institution: "Annasaheb Dange College of Engineering and Technology (ADCET), Ashta, Sangli",
    academicPeriod: "2026 – 2030",
    location: "Maharashtra, India",
    publicBio: "First-year Computer Science Engineering undergraduate, enthusiastic builder, and aspiring cybersecurity & DevSecOps specialist. Passionate about rapid AI-assisted software engineering, client-side security screening prototypes, and unshakeable computational foundations in C and algorithmic logic.",
    personalStatement: "I believe that curiosity is meaningless without the grit to build. I leverage state-of-the-art AI development tools to design and ship full-stack prototypes rapidly, while concurrently dedicating rigorous academic focus to low-level computational foundations, data structures, and computer science theory."
  },

  contact: {
    email: "hrmane94@gmail.com",
    github: "https://github.com/hrmane94-source",
    linkedin: "https://www.linkedin.com/in/shivpremi1630/?isSelfProfile=true",
    behance: "https://www.behance.net/harshadmane11",
    instagram: "https://www.instagram.com/shiv.premi_1630?cplk=Y3lhemlkZXM2MWhr"
  },

  focusAreas: {
    primaryDirection: "Cybersecurity & DevSecOps Engineering",
    secondaryInterests: [
      "AI-Assisted Software Prototyping",
      "Cloud Infrastructure & CI/CD Pipelines",
      "Data Analytics & Machine Learning Foundations",
      "Creative Photography & Motovlogging"
    ],
    technicalPhilosophy: "Disciplined engineering transparency: distinguish working client-side prototypes from production systems; distinguish AI-assisted acceleration from independent algorithmic mastery.",
    buildingApproach: "Rapid execution using modern TypeScript/React, Supabase, and AI accelerators to test solutions against real-world friction, paired with ground-up understanding of foundational systems."
  },

  skillEcosystem: {
    foundations: ["C Programming", "Computational Logic", "Data Structures", "Engineering Mathematics", "HTML5 & Modern CSS"],
    currentlyLearning: ["Linux Systems & Shell Scripting", "Python for Data Analysis", "Network Protocols (TCP/IP, DNS)", "Object-Oriented Design in C++"],
    cybersecurityFoundations: ["Client-Side Security Screening", "Document Metadata Forensics", "Vulnerability Research Principles", "Identity Tampering Indicators"],
    aiAssistedTooling: ["Google Gemini API", "Claude / ChatGPT / Copilot", "Cursor IDE & AI Accelerators", "Prompt Engineering & Evaluation"],
    frameworksExplored: ["React 19", "TypeScript", "Tailwind CSS v4", "Vite", "Supabase PostgreSQL & Auth"],
    honestyClarification: "Harshad transparently distinguishes between frameworks and prototypes built with modern AI assistance versus core programming languages (such as C) being independently mastered through daily undergraduate coursework."
  },

  projects: [
    {
      slug: "falcon-404",
      route: "/projects/falcon-404",
      title: "FALCON-404",
      importance: "flagship",
      category: "Cybersecurity & AI Forensic Screening",
      domain: "Client-Side Document Verification & Forensic Signal Detection",
      role: "Project Lead & Sole Application Developer",
      period: "2026",
      status: "Competition Prototype & Demonstration System",
      tagline: "Client-side document forensic screening utility with multi-signal tampering detection.",
      problem: "Traditional manual document screening in high-volume public workflows is slow, inconsistent, and often misses subtle digital image modifications, structural anomalies, and metadata discrepancies.",
      solution: "Engineered an AI-augmented document verification utility that ingests uploaded government ID cards (such as Aadhaar, PAN) and runs client-side optical character recognition (OCR), metadata parsing, and image manipulation screening.",
      harshadContribution: "Designed the entire application architecture, implemented the OCR parsing and confidence scoring pipelines, built the visual tamper-detection heatmaps, and authored the SIH 2026 technical presentation as Team Falcon Lead.",
      technologies: ["React 19", "TypeScript", "Tesseract.js OCR", "Tailwind CSS", "Canvas Image Forensics", "Lucide Icons"],
      limitations: [
        "Provides screening signals and anomaly scores, NOT definitive legal proof of fraud.",
        "Does NOT connect to live government databases (e.g. UIDAI, Income Tax Dept) without authorized API access.",
        "OCR represents probabilistic client-side text extraction; lighting and resolution affect accuracy."
      ],
      competition: {
        name: "Smart India Hackathon (SIH) 2026",
        teamName: "Team Falcon",
        problemStatementId: "SIH Problem ID: 26188",
        result: "Institutional Nomination & Submission"
      },
      keyFeatures: [
        "Zero-server client-side document processing for privacy",
        "Multi-zone OCR text extraction with field confidence scoring",
        "Visual anomaly highlighting for font mismatches and border tampering",
        "PDF forensic report export with verifiable audit metrics"
      ]
    },
    {
      slug: "arogya-ai",
      route: "/projects/arogya-ai",
      title: "Arogya AI",
      importance: "major",
      category: "Healthcare Technology & Resource Allocation",
      domain: "Hospital Bed Availability & Predictive Admissions Prototype",
      role: "Primary Technical Contributor",
      period: "2026",
      status: "Demonstration Prototype",
      tagline: "Predictive hospital bed-demand forecasting and emergency admissions management prototype.",
      problem: "Emergency rooms and district hospitals suffer from chaotic bed allocation during seasonal spikes and critical patient surges due to lack of real-time visibility.",
      solution: "Created an interactive dashboard forecasting bed occupancy trends, routing emergency cases based on department capacity, and tracking vital resource thresholds.",
      harshadContribution: "Built the front-end interactive ward monitoring interface, department occupancy state logic, and synthetic forecasting simulations.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Synthetic Time-Series Simulations"],
      limitations: [
        "Tested on synthetic demonstration datasets; NOT a clinically validated medical system.",
        "No real clinical integration or live hospital database connectivity.",
        "Financial and billing flows are demonstrative prototypes without payment gateway integration."
      ],
      keyFeatures: [
        "Ward-by-ward live bed occupancy visualization",
        "Predictive admissions simulation based on historical surges",
        "Emergency triage priority categorization",
        "Resource scarcity threshold alerts for ICU & oxygen beds"
      ]
    },
    {
      slug: "campus-copilot",
      route: "/projects/campus-copilot",
      title: "Campus Copilot",
      importance: "major",
      category: "Conversational AI & EdTech",
      domain: "Academic Information Retrieval & Student Assistance",
      role: "Sole Developer & Prompt Engineer",
      period: "2026",
      status: "Functional Interactive Prototype",
      tagline: "Context-aware conversational assistant navigating college syllabi, exam schedules, and campus FAQs.",
      problem: "Undergraduate freshmen struggle to locate syllabus documents, mid-sem calendars, faculty office hours, and administrative procedures scattered across PDF circulars.",
      solution: "Developed a campus query chatbot with intent recognition, indexed academic guides, and quick navigation shortcuts tailored for college students.",
      harshadContribution: "Developed the conversational interface, structured the college knowledge JSON dictionary, and integrated contextual prompt responses.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Conversational State Manager", "Framer Motion"],
      limitations: [
        "Prototype running on curated mock college circular data.",
        "Does not query real student records or live college ERP databases.",
        "Demonstration model without authenticated student login."
      ],
      keyFeatures: [
        "Fast contextual keyword parsing for exam timetables and syllabus topics",
        "One-click recommendation chips for common campus inquiries",
        "Mobile-optimized chat drawer with instant response feedback"
      ]
    },
    {
      slug: "neuroverse-2k26-website",
      route: "/projects/neuroverse-2k26-website",
      title: "Neuroverse 2K26 Website",
      importance: "major",
      category: "Event Web Architecture",
      domain: "National Technical Symposium Portal",
      role: "Front-End Developer & Competition Contestant",
      period: "2026",
      status: "Award-Winning Competition Project (Runner-Up)",
      tagline: "Official technical symposium event website created during the national PixelCraft competition.",
      problem: "Design and implement a responsive, high-performance event website within strict competition time limits, featuring event registration, schedule timelines, and speaker showcases.",
      solution: "Engineered a responsive single-page symposium site with fluid layout transitions, interactive timeline tabs, and accessible schedule cards.",
      harshadContribution: "Sole developer during Round 2 of the PixelCraft competition; created the layout, responsive schedule, and interactive event cards under competition time limits.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      limitations: [
        "Built under tight hackathon time constraints.",
        "Registration triggers interactive client-side feedback without a payment backend."
      ],
      competition: {
        name: "PixelCraft — Neuroverse 2K26",
        teamName: "Harshad Mane (Individual)",
        result: "Runner-Up (2nd Place National)"
      },
      keyFeatures: [
        "Event registration and schedule grid with category filtering",
        "Interactive speaker cards and venue logistics details",
        "Responsive across all modern mobile and desktop viewport sizes"
      ]
    },
    {
      slug: "gada-electronics",
      route: "/projects/gada-electronics",
      title: "GADA ELECTRONICS",
      importance: "prototype",
      category: "Creative E-Commerce Prototype",
      domain: "Pop-Culture Themed Retail Showcase",
      role: "Front-End Developer",
      period: "2026",
      status: "Completed Competition Round 1 Project",
      tagline: "Playful e-commerce retail portal built for Round 1 of the PixelCraft national competition.",
      problem: "Rapidly create an engaging, character-rich consumer retail experience under strict timed competition evaluation.",
      solution: "Developed an interactive storefront combining pop-culture branding with product filtering, cart drawer simulations, and promotional banners.",
      harshadContribution: "Designed the typography, product matrix, category navigation, and interactive cart mechanics.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      limitations: [
        "Fictional retail simulation created for competition evaluation.",
        "No real credit card processing or live order fulfillment."
      ],
      keyFeatures: [
        "Dynamic cart drawer with running subtotals",
        "Humorous pop-culture marketing callouts and product tiers",
        "Instant responsive search filtering across product inventory"
      ]
    },
    {
      slug: "artbook-ai",
      route: "/projects/artbook-ai",
      title: "ArtBook AI",
      importance: "prototype",
      category: "Creative Economy & Portfolio Tech",
      domain: "Visual Artist Showcase & Booking Platform",
      role: "Concept Designer & Developer",
      period: "2025 – 2026",
      status: "Design Prototype",
      tagline: "Digital portfolio and commission booking portal connecting indie creators with art collectors.",
      problem: "Independent digital artists struggle to showcase their work cleanly while managing commission inquiry requests without high commission fees.",
      solution: "Crafted a minimalist portfolio platform showcasing artwork galleries, creative biographies, commission slot availability, and quote inquiry forms.",
      harshadContribution: "Architected the minimalist visual layout, responsive masonry gallery view, and commission quote generator.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Unsplash Visual Curation"],
      limitations: [
        "Front-end portfolio prototype with mock commission records.",
        "Payment escrow is not integrated."
      ],
      keyFeatures: [
        "Masonry art portfolio with lightbox modal previews",
        "Interactive commission budget calculator",
        "Direct inquiry form connecting clients with artists"
      ]
    },
    {
      slug: "eco-friendly-planting-system",
      route: "/projects/eco-friendly-planting-system",
      title: "Eco-Friendly Planting System",
      importance: "academic",
      category: "Environmental Science & Sustainable Tech",
      domain: "Automated Micro-Irrigation & Seed Germination",
      role: "Student Team Lead",
      period: "2023 – 2024",
      status: "Completed District-Level Science Exhibition",
      tagline: "Sustainable moisture-conserving micro-irrigation system for urban seed cultivation.",
      problem: "Urban domestic gardens and seedling nurseries waste significant water through uncalibrated surface flooding and evaporation.",
      solution: "Constructed an automated drip-irrigation apparatus using recycled materials and basic soil-moisture feedback to deliver metered water directly to root zones.",
      harshadContribution: "Led the school team, designed the mechanical drip distribution network, and presented the project to district science judges.",
      technologies: ["Physical Mechanics", "Soil Moisture Sensors", "Recycled Materials", "Scientific Presentation"],
      limitations: [
        "School-level physical science fair project; not an industrial agricultural product.",
        "Operates mechanically on low-voltage battery power."
      ],
      competition: {
        name: "National Children's Science Congress (NCSC)",
        teamName: "Padua High School Delegation",
        result: "District-Level Recognition"
      },
      keyFeatures: [
        "Gravity-assisted metered drip emitter tubing",
        "Moisture-responsive passive flow regulators",
        "Zero-plastic upcycled seedling growth pods"
      ]
    }
  ],

  achievements: [
    {
      title: "Runner-Up (2nd Place) — PixelCraft Web Design & Development",
      eventOrContext: "Neuroverse 2K26 National Technical Symposium",
      institution: "Annasaheb Dange College of Engineering and Technology (ADCET), Ashta",
      result: "2nd Place Nationally",
      year: "2026",
      description: "Secured 2nd place in PixelCraft, a two-round national coding and web design competition. Round 1 built GADA ELECTRONICS; Round 2 built the Neuroverse 2K26 event website.",
      route: "/achievements"
    },
    {
      title: "Subject Topper in Mathematics, Hindi & Marathi",
      eventOrContext: "Secondary School Certificate (SSC) Maharashtra Board Examination",
      institution: "Padua High School / Maharashtra State Board",
      result: "Highest Subject Marks",
      year: "2024",
      description: "Earned the school's highest marks in Mathematics, Hindi, and Marathi in Class 10 board examinations.",
      route: "/achievements"
    },
    {
      title: "Elected School Head Boy (Two Consecutive Academic Years)",
      eventOrContext: "Student Council Governance & Student Body Representation",
      institution: "Padua High School, Mankhurd, Mumbai",
      result: "Elected Head Boy (Classes 9 & 10)",
      year: "2022 – 2024",
      description: "Elected to lead the student body for two continuous academic terms, leading morning assemblies, representing students to faculty, and orchestrating two editions of the school Annual Day celebrations.",
      route: "/achievements"
    }
  ],

  leadership: [
    {
      title: "Head Boy & Student Council Leadership",
      role: "Head Boy (Elected 2 Consecutive Years)",
      institution: "Padua High School",
      period: "2022 – 2024",
      highlights: [
        "Represented over 800+ students across school governance meetings",
        "Orchestrated end-to-end stage scheduling and crowd discipline for Annual Day celebrations twice",
        "Mentored junior prefects in discipline and daily assembly management"
      ],
      route: "/achievements"
    },
    {
      title: "BARC National Science Day Delegations",
      role: "Selected Student Delegate (Twice)",
      institution: "Bhabha Atomic Research Centre (BARC), Trombay",
      period: "2022 – 2024",
      highlights: [
        "Selected twice to visit premier Indian scientific laboratories at BARC on National Science Day",
        "Attended lectures and demonstrations on nuclear research, robotics, and scientific instrumentation"
      ],
      route: "/achievements"
    },
    {
      title: "SIH 2026 Team Falcon Lead",
      role: "Team Lead & Application Architect",
      institution: "Smart India Hackathon 2026 / ADCET Ashta",
      period: "2026",
      highlights: [
        "Led team of 6 engineers addressing Problem ID 26188",
        "Sole developer of the working FALCON-404 verification application prototype"
      ],
      route: "/events"
    }
  ],

  creativePursuits: {
    brand: "shiv.premi_1630",
    focus: "Visual Storytelling, Photography, Cinematography & Motovlogging",
    description: "Beyond the terminal, Harshad collects moments and atmospheric perspectives through photography, motovlogging, and visual editing under the identity shiv.premi_1630.",
    disciplines: [
      "Travel & Landscape Photography",
      "Street & Candid Heritage Moments",
      "Cinematography & Short-Form Video Editing",
      "Motorcycle Touring Visual Journals"
    ],
    motorcyclingVision: "A long-term aspiration to circumnavigate India on an endurance motorcycle circuit, methodically conditioning physical endurance and technical field repair capabilities throughout college.",
    route: "/creative"
  },

  careerRoadmap: {
    phase: "Undergraduate First Year (2026) -> Graduating 2030",
    targetYear: "2030",
    vision: "To graduate in 2030 with deep practical DevSecOps and security auditing capabilities, multiple production software contributions, demonstrated open-source involvement, and a resilient, disciplined engineering mindset.",
    route: "/roadmap"
  }
};
