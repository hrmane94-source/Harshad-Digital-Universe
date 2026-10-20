import type { ProjectItem } from '../types/portfolio';
import { assetConfig } from './assets';
import { projectLinksConfig } from './projectLinks';

export const verifiedProjects: ProjectItem[] = [
  {
    id: "proj-falcon-404",
    slug: "falcon-404",
    title: "FALCON-404",
    displayTitle: "FALCON-404",
    tagline: "AI-Based Fake Identity & Document Screening System",
    domain: "Cybersecurity, Identity Document Screening, OCR & Computer Vision",
    importance: "flagship",
    role: "Project Lead & Sole Application Developer",
    teamContext: "Team Falcon (Team ID: ISIH26106) — Harshad leads the project and is the sole developer of its application and screening system.",
    status: "active",
    publicationStatus: "published",
    summary: "An explainable identity screening system built to analyze identity documents through client-side OCR, digital image forensics, and structural layout heuristics.",
    problem: "Manual verification of identity documents at scale is slow, prone to human fatigue, and vulnerable to amateur digital tampering, spliced text, and synthetic replacements. High-volume environments require automated, privacy-first screening pipelines that flag anomalies without transmitting raw identity images to untrusted servers.",
    solution: "A multi-stage, explainable screening workflow that performs client-side OCR with Tesseract.js, extracts candidate fields, inspects image metadata and container signatures, runs Error Level Analysis (ELA) to detect resaved regions, checks bounding alignment, and compiles a transparent screening report with privacy-preserving field masking.",
    features: [
      "Intuitive cybersecurity dashboard with live screening workflows",
      "Client-side document file validation and integrity checks",
      "Browser-local OCR powered by Tesseract.js for sensitive text extraction",
      "Automated candidate field extraction (name, ID numbers, date patterns)",
      "Error Level Analysis (ELA) visualization for compression discrepancy detection",
      "Image container metadata inspection and header anomaly flagging",
      "Document boundary and layout alignment heuristics",
      "Privacy-first field masking and browser-local case persistence",
      "Transparent, explainable risk indicators rather than black-box decisions",
      "Structured screening report generator"
    ],
    technologies: [
      "TypeScript",
      "React",
      "Tesseract.js (Client-side OCR)",
      "HTML5 Canvas API (Forensics & ELA)",
      "Tailwind CSS",
      "Browser Local Storage & IndexedDB"
    ],
    aiAssisted: true,
    competition: {
      name: "Smart India Hackathon 2026",
      institution: "Government of India / AICTE",
      problemStatementId: "26188",
      problemStatement: "AI-Based Fake Identity & Document Screening System",
      theme: "Blockchain & Cybersecurity",
      category: "Software",
      teamName: "Falcon",
      teamId: "ISIH26106",
      submissionDate: "September 2026",
      status: "Online selection process pending as of 20 October 2026",
      notes: "Also presented with a working demonstration at the Seva First Innovation Challenge. Active engineering development continues."
    },
    limitations: [
      "This system performs document screening, not definitive proof of fraud or official authenticity verification.",
      "OCR represents text extraction; it does not independently verify whether an identity credential exists in official records.",
      "Image quality artifacts and compression anomalies can produce false positives; ELA is a heuristic, not mathematical proof of tampering.",
      "No proprietary trained neural network tampering model is currently claimed or deployed.",
      "No live government registry or official database integration is currently connected."
    ],
    lessonsLearned: [
      "Client-side OCR in JavaScript requires careful memory management and image preprocessing to maintain browser responsiveness.",
      "Cybersecurity tools must prioritize explainability; operators need to see why an anomaly was flagged rather than trusting an opaque score.",
      "Privacy regulations necessitate on-device masking of personally identifiable information (PII) before any telemetry or logs are stored."
    ],
    futureWork: [
      "Benchmarking specialized lightweight ML models for localized seam carving and copy-move forgery detection.",
      "Integrating cryptographic signature verification for barcode and QR code payloads.",
      "Architecting secure backend microservices for automated document batch processing."
    ],
    coverArtwork: {
      type: "cyber",
      accentColor: "#00f0ff",
      iconName: "ShieldAlert"
    },
    assets: assetConfig.projects.falcon404,
    links: projectLinksConfig.falcon404,
    createdAt: "2026-09-01",
    updatedAt: "2026-10-20"
  },
  {
    id: "proj-arogya-ai",
    slug: "arogya-ai",
    title: "Arogya AI",
    displayTitle: "Arogya AI",
    tagline: "Predictive Hospital Bed Demand & Patient Flow Platform",
    domain: "Healthcare Technology, Predictive Analytics, and Hospital Bed Management",
    importance: "featured",
    role: "Primary Technical Contributor",
    teamContext: "Hackathon Team at AARAMBH 2026 — Teammate developed initial website & UI/UX foundation; Harshad implemented feature logic, backend connection, database models, and system integration.",
    status: "demonstration",
    publicationStatus: "published",
    summary: "A healthcare operations prototype developed to forecast hospital bed occupancy, anticipate patient admission/discharge patterns, and coordinate clinical queues.",
    problem: "Hospitals frequently face sudden bed crunches, misallocated emergency resources, and chaotic OPD queuing due to disconnected tracking systems and lack of predictive visibility into impending discharge trends.",
    solution: "An integrated hospital operations prototype that merges real-time bed tracking, machine-learning admission/discharge forecasts, patient digital queues, and role-based interfaces for doctors, staff, and patients.",
    features: [
      "Comprehensive patient bed-management dashboard with real-time occupancy status",
      "Admission and discharge pattern forecasting using regression models",
      "Future bed-demand and shortage alerts powered by sample hospital dataset",
      "Supabase PostgreSQL data integration for persistent records",
      "Role-specific interfaces: Patient portal, Staff console, and Doctor workspace",
      "Digital OPD token queues and live consultation status tracking",
      "Multi-lingual interface support and AI voice assistance flow",
      "Integrated prototype online payment checkout demonstration"
    ],
    technologies: [
      "React",
      "TypeScript",
      "Express API",
      "Supabase PostgreSQL",
      "Python",
      "XGBoost",
      "Tailwind CSS"
    ],
    aiAssisted: true,
    competition: {
      name: "AARAMBH — WCE Hackathon 2026",
      institution: "Walchand College of Engineering, Sangli, Maharashtra",
      submissionDate: "8–9 October 2026",
      status: "Participated",
      notes: "Functional prototype demonstrated with demonstration dataset. No award or placement confirmed."
    },
    limitations: [
      "The application was demonstrated using a synthetic demonstration dataset; forecasts were not validated against operational hospital records.",
      "This is not a clinically validated platform and has not been deployed in live hospital operations.",
      "The online payment mechanism was functional in prototype demonstration mode; no real-money banking settlement took place.",
      "Healthcare startup commercialization is an exploratory vision, not an established business."
    ],
    lessonsLearned: [
      "Role-based authorization and data isolation are critical when coordinating multi-stakeholder healthcare workflows.",
      "Connecting machine-learning inference endpoints with web dashboards requires resilient fallback states when models latency spikes.",
      "Hospital operations require seamless synchronization between emergency admissions and scheduled ward discharges."
    ],
    futureWork: [
      "Exploring pilot partnerships with regional clinics to validate scheduling algorithms with sanitized real-world historical data.",
      "Implementing HIPAA/ABDM-compliant encryption for all electronic health record (EHR) schemas."
    ],
    coverArtwork: {
      type: "health",
      accentColor: "#06b6d4",
      iconName: "Activity"
    },
    assets: assetConfig.projects.arogyaAI,
    links: projectLinksConfig.arogyaAI,
    createdAt: "2026-10-08",
    updatedAt: "2026-10-10"
  },
  {
    id: "proj-campus-copilot",
    slug: "campus-copilot",
    title: "Campus Copilot",
    displayTitle: "Campus Copilot",
    tagline: "Grounded AI Chatbot for Instant Campus Information",
    domain: "AI Application Development and Education Technology",
    importance: "featured",
    role: "Lead Technical Developer",
    teamContext: "Team Error 404 (Team ID: SH16) at Tantraparv — Teammate contributed UI/UX concepts and Canva designs; Harshad built the website, AI chatbot integration, live demonstration, and presentation.",
    status: "demonstration",
    publicationStatus: "published",
    summary: "A working conversational assistant designed to answer student inquiries by referencing collected institutional website information.",
    problem: "College websites often have deep navigation hierarchies, outdated PDF notices, and fragmented schedules, making it tedious for students to find fee deadlines, exam timetables, and campus facilities quickly.",
    solution: "A focused campus copilot interface that processes natural-language student questions and returns grounded answers using structured institutional knowledge collected directly from the college website.",
    features: [
      "Natural language inquiry interface tailored for college students",
      "Institutional knowledge grounding based on official college information",
      "Instant query answers regarding departments, academic calendar, and facilities",
      "Interactive conversational web interface with suggested prompt chips",
      "Clean, modern responsive UI designed for mobile and desktop student use"
    ],
    technologies: [
      "React",
      "TypeScript",
      "Google AI Studio / Gemini API",
      "Tailwind CSS",
      "Vite"
    ],
    aiAssisted: true,
    competition: {
      name: "Tantraparv",
      institution: "Sharad Institute of Technology College of Engineering, Yadrav, Ichalkaranji",
      problemStatement: "Making Campus Information Fast and Accessible by Making a Campus Copilot",
      teamName: "Error 404",
      teamId: "SH16",
      submissionDate: "October 2026 (Approx. 6 October)",
      status: "Demonstrated",
      result: "Demonstration successfully conducted; no award confirmed."
    },
    limitations: [
      "At the time of competition, the team possessed limited experience with advanced backend database persistence and production vector databases.",
      "The prototype relied on curated website knowledge extracts rather than a live multi-tenant indexing crawler.",
      "No independent custom vector retrieval model or complex database architecture was deployed."
    ],
    lessonsLearned: [
      "Fast response latency and natural conversation flows make a massive difference in student usability.",
      "Robust backend data persistence and session history are essential for competitive hackathon evaluation.",
      "Clearly articulating what is grounded versus generative helps avoid hallucinations in educational domains."
    ],
    futureWork: [
      "Integrating multi-turn context tracking with a PostgreSQL vector extension (pgvector).",
      "Adding voice input and multi-lingual regional language support for rural campus access."
    ],
    coverArtwork: {
      type: "chat",
      accentColor: "#3b82f6",
      iconName: "Bot"
    },
    assets: assetConfig.projects.campusCopilot,
    links: projectLinksConfig.campusCopilot,
    createdAt: "2026-10-06",
    updatedAt: "2026-10-07"
  },
  {
    id: "proj-neuroverse-2k26-website",
    slug: "neuroverse-2k26-website",
    title: "Neuroverse 2K26 Website",
    displayTitle: "Neuroverse 2K26 Website",
    tagline: "PixelCraft Runner-Up Event Branding & Showcase Platform",
    domain: "Creative Web Design, Event Branding & Front-End Engineering",
    importance: "featured",
    role: "Front-End Developer & Creative Designer",
    teamContext: "Two-member hackathon team at ADCET Ashta — Collaborative development across two competition rounds.",
    status: "completed",
    publicationStatus: "published",
    summary: "Event platform created for Round 2 of PixelCraft during the national-level Neuroverse 2K26 symposium, winning 2nd Place / Runner-up.",
    problem: "Technical symposiums require high-energy, memorable digital identities that clearly convey competitive tracks, event rules, schedules, and registration paths across mobile and desktop devices.",
    solution: "A dynamic, cyber-themed event website capturing the futuristic atmosphere of Neuroverse 2K26, complete with responsive event schedules, speaker highlights, track overviews, and interactive components.",
    features: [
      "Futuristic, high-contrast visual branding tailored for a national technology symposium",
      "Dynamic event schedule breakdown across multiple competition tracks",
      "Interactive track cards with rules, criteria, and coordinator information",
      "Responsive navigation optimized for mobile participants and desktop evaluators",
      "Smooth micro-interactions and cohesive modern typography"
    ],
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "Framer Motion"
    ],
    aiAssisted: true,
    competition: {
      name: "PixelCraft (Sub-event of Neuroverse 2K26)",
      institution: "Annasaheb Dange College of Engineering and Technology (ADCET), Ashta",
      status: "Runner-up — Second Place",
      result: "Second Place / Runner-Up Award (National-level competition)",
      notes: "Competition comprised two web-building rounds: Round 1 (GADA ELECTRONICS) and Round 2 (Neuroverse 2K26 event website). The runner-up award honors the overall performance across both rounds."
    },
    limitations: [
      "Designed as a competitive sprint website; does not include live real-time participant registration payment processing.",
      "Specific judging point breakdowns and prize figures were not officially published."
    ],
    lessonsLearned: [
      "Speed of iteration and cohesive aesthetic direction under strict hackathon time constraints.",
      "The value of component reusability when translating branding guidelines into rapid interactive layouts."
    ],
    futureWork: [
      "Expanding the event platform architecture to support automated live leaderboard synchronization for future college symposiums."
    ],
    coverArtwork: {
      type: "abstract",
      accentColor: "#8b5cf6",
      iconName: "Sparkles"
    },
    assets: assetConfig.projects.neuroverseWebsite,
    links: projectLinksConfig.neuroverseWebsite,
    createdAt: "2026-09-20",
    updatedAt: "2026-10-01"
  },
  {
    id: "proj-gada-electronics",
    slug: "gada-electronics",
    title: "GADA ELECTRONICS",
    displayTitle: "GADA ELECTRONICS",
    tagline: "TV, Appliances & More — Cyber-Inspired Electronics Concept",
    domain: "E-Commerce Concept & Modern Web Development",
    importance: "standard",
    role: "Front-End Developer",
    teamContext: "Created for Round 1 of the PixelCraft web development competition.",
    status: "completed",
    publicationStatus: "published",
    summary: "A premium, cyber-inspired digital storefront concept built for a fictional Indian consumer electronics brand.",
    problem: "Demonstrating modern e-commerce visual design, category filtering, and product card composition within the timed environment of a design competition.",
    solution: "A dark, futuristic storefront featuring interactive product grids, category switches, glowing hover states, and modern appliance showcases built with AI assistance.",
    features: [
      "Dark futuristic cyber-aesthetic with vibrant neon accent highlights",
      "Category filtering for televisions, smart appliances, audio, and personal gadgets",
      "Responsive product cards with price badges, ratings, and specification highlights",
      "Interactive cart preview and clean promo banner compositions",
      "Lightweight, fast-loading architecture built with Vite and Tailwind"
    ],
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Google AI Studio & Lovable (AI-Assisted Development)"
    ],
    aiAssisted: true,
    competition: {
      name: "PixelCraft — Round 1",
      institution: "ADCET, Ashta",
      status: "Advanced to Round 2",
      notes: "Round 1 entry that enabled the team to advance to Round 2 and subsequently secure Runner-Up."
    },
    limitations: [
      "Fictional concept store created purely for competitive evaluation.",
      "No actual commercial transactions, real inventory, customer data, or live merchant accounts exist."
    ],
    lessonsLearned: [
      "AI-assisted prototyping enables rapid layout generation, but manual refinement is necessary to ensure consistent token spacing and typography hierarchy."
    ],
    futureWork: [
      "Can serve as a modular UI kit foundation for local retail business web solutions."
    ],
    coverArtwork: {
      type: "abstract",
      accentColor: "#00f0ff",
      iconName: "Cpu"
    },
    assets: assetConfig.projects.gadaElectronics,
    links: projectLinksConfig.gadaElectronics,
    createdAt: "2026-09-15",
    updatedAt: "2026-09-20"
  },
  {
    id: "proj-artbook-ai",
    slug: "artbook-ai",
    title: "ArtBook AI",
    displayTitle: "ArtBook AI",
    tagline: "Artist Discovery and Creative Service Booking Marketplace Prototype",
    domain: "Creative Tech & Marketplace Prototype",
    importance: "standard",
    role: "Prototype & Application Developer",
    teamContext: "Original concept originated by Harshad's friend; Harshad developed the website, prototype application, and presentation.",
    status: "prototype",
    publicationStatus: "published",
    summary: "An interactive prototype connecting creative artists (photographers, cinematographers, mehendi artists, sketch artists) with clients seeking talent.",
    problem: "Independent creative artists struggle with fragmented social media portfolios and lack a dedicated platform where prospective clients can discover them by service and location.",
    solution: "A visual discovery marketplace where artists can maintain verified portfolios, display video reels, and receive client booking inquiries directly.",
    features: [
      "Demonstration artist profile pages with portfolio image grids and video reel embeds",
      "Service categorization: Wedding Photography, Cinematography, Mehendi Art, Live Sketching",
      "Location-aware discovery concept to recommend nearby creative talent",
      "Interactive booking inquiry form with service requirement selectors",
      "Artist rating, ranking, and testimonial display structure"
    ],
    technologies: [
      "React",
      "TypeScript",
      "Google AI Studio",
      "Tailwind CSS",
      "Vite"
    ],
    aiAssisted: true,
    competition: {
      name: "Founder's Expo",
      institution: "E-Cell, Annasaheb Dange College of Engineering and Technology (ADCET)",
      submissionDate: "7 October 2026",
      status: "Demonstrated",
      notes: "Presented at Founder's Expo as an entrepreneurial software concept."
    },
    limitations: [
      "Interactive prototype populated with demonstration artist profiles and sample services.",
      "Not a live production marketplace; no registered commercial artists or live booking payments.",
      "Geographic artist recommendation is a planned product concept, not a live production engine."
    ],
    lessonsLearned: [
      "Creative professionals require high visual fidelity and reel-friendly media formats to showcase their authentic craft.",
      "Translating an entrepreneurial concept into a clickable interactive prototype substantially improves pitching clarity."
    ],
    futureWork: [
      "Conducting customer discovery interviews with regional wedding cinematographers to refine fee commission models.",
      "Implementing geolocation search queries via Supabase PostGIS."
    ],
    coverArtwork: {
      type: "marketplace",
      accentColor: "#f97316",
      iconName: "Palette"
    },
    assets: assetConfig.projects.artbookAI,
    links: projectLinksConfig.artbookAI,
    createdAt: "2026-10-05",
    updatedAt: "2026-10-07"
  },
  {
    id: "proj-eco-friendly-planting",
    slug: "eco-friendly-planting-system",
    title: "Eco-Friendly Planting System",
    displayTitle: "Eco-Friendly Planting System",
    tagline: "Sustainable Agriculture Science Innovation (NCSC District Level)",
    domain: "Environmental Science, Sustainability & Early Innovation",
    importance: "early",
    role: "Student Team Researcher & Presenter",
    teamContext: "Class 8 school science team at Padua High School, Mankhurd.",
    status: "completed",
    publicationStatus: "published",
    summary: "An early foundational school science project exploring sustainable, bio-friendly planting systems that reached the district level.",
    problem: "Conventional small-scale planting often relies on single-use plastic containers and inefficient water distribution.",
    solution: "A prototype planting system utilizing eco-friendly, biodegradable containers and water-conserving soil blends for urban and community spaces.",
    features: [
      "Biodegradable potting vessel experimentation",
      "Water retention and soil aeration comparative observations",
      "School-level scientific presentation and district-level project defense"
    ],
    technologies: [
      "Scientific Method",
      "Empirical Observation",
      "Experimental Prototyping"
    ],
    aiAssisted: false,
    competition: {
      name: "National Children's Science Congress (NCSC)",
      institution: "Padua High School (District Level)",
      status: "District Level Participant",
      notes: "Class 8 school science project. Reached the district level. Year left unset as exact calendar year is unconfirmed."
    },
    limitations: [
      "Early middle-school scientific research project, not a software engineering system.",
      "Represented as educational scientific exposure; no district or state award claimed."
    ],
    lessonsLearned: [
      "Early hands-on experience formulating a problem, building physical prototypes, and presenting findings before external evaluators."
    ],
    futureWork: [
      "Serves as the root origin of Harshad's curiosity in practical hands-on problem solving."
    ],
    coverArtwork: {
      type: "eco",
      accentColor: "#10b981",
      iconName: "Leaf"
    },
    assets: assetConfig.projects.ecoFriendlyPlanting,
    links: projectLinksConfig.ecoFriendlyPlanting,
    createdAt: "2022-01-01",
    updatedAt: "2022-01-01"
  }
];
