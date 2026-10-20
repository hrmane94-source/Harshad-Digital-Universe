export interface ResumeData {
  basics: {
    name: string;
    publicName: string;
    title: string;
    email: string;
    location: string;
    summary: string;
    profiles: {
      github: string;
      linkedin: string;
      portfolio: string;
      behance: string;
    };
  };
  education: Array<{
    institution: string;
    degree: string;
    branch?: string;
    location: string;
    period: string;
    details: string[];
  }>;
  achievements: Array<{
    title: string;
    context: string;
    result: string;
    year: string;
    description: string;
  }>;
  leadership: Array<{
    role: string;
    organization: string;
    period: string;
    contributions: string[];
  }>;
  projects: Array<{
    title: string;
    role: string;
    period: string;
    technologies: string[];
    bullets: string[];
  }>;
  skills: {
    foundations: string[];
    currentlyLearning: string[];
    cybersecurityFoundations: string[];
    aiAssistedTooling: string[];
    frameworksExplored: string[];
  };
  eventParticipation: string[];
}

export const resumeData: ResumeData = {
  basics: {
    name: "Harshad Rajaram Mane",
    publicName: "Harshad Mane",
    title: "Computer Science Engineering Student | Aspiring Cybersecurity & DevSecOps",
    email: "hrmane94@gmail.com",
    location: "Maharashtra, India",
    summary: "First-year Computer Science Engineering student at ADCET Ashta with a strong drive for cybersecurity, AI-assisted software development, and rapid prototyping. Demonstrated ability to lead technical teams, build functional hackathon solutions, and implement client-side document forensics (FALCON-404). Committed to disciplined engineering foundations, lifelong learning, and principled collaboration.",
    profiles: {
      github: "https://github.com/hrmane94-source",
      linkedin: "https://www.linkedin.com/in/shivpremi1630/?isSelfProfile=true",
      portfolio: "harshadmane.dev", // Central placeholder
      behance: "https://www.behance.net/harshadmane11"
    }
  },
  education: [
    {
      institution: "Annasaheb Dange College of Engineering and Technology (ADCET)",
      degree: "Bachelor of Technology (B.Tech)",
      branch: "Computer Science and Engineering",
      location: "Ashta, Sangli, Maharashtra",
      period: "2026 – 2030 (First Year)",
      details: [
        "Core study in C programming, computational logic, and engineering mathematics",
        "Runner-Up at National PixelCraft Web Development Competition (Neuroverse 2K26)",
        "SIH 2026 Team Falcon Lead & Sole Application Developer (Problem ID: 26188)"
      ]
    },
    {
      institution: "Swami Vivekanand Junior College of Science",
      degree: "Higher Secondary Certificate (HSC) — Science Stream",
      location: "Koparkhairane, Thane, Maharashtra",
      period: "Completed 2026",
      details: [
        "Curriculum: Physics, Chemistry, Mathematics (Maharashtra State Board)",
        "Developed foundational analytical and scientific problem-solving methods"
      ]
    },
    {
      institution: "Padua High School",
      degree: "Secondary School Certificate (SSC)",
      location: "Mankhurd, Mumbai, Maharashtra",
      period: "Completed 2024",
      details: [
        "Subject Topper in Class 10 (SSC) in Mathematics, Hindi, and Marathi",
        "Elected School Head Boy for two consecutive academic years (Classes 9 and 10)",
        "Managed overall school Annual Day coordination on two editions"
      ]
    }
  ],
  achievements: [
    {
      title: "Runner-Up — Second Place (PixelCraft)",
      context: "Neuroverse 2K26 National Technical Symposium, ADCET Ashta",
      result: "Second Place Award",
      year: "2026",
      description: "Secured 2nd place in national-level two-round web development contest (Round 1: Gada Electronics, Round 2: Neuroverse 2K26 portal)."
    },
    {
      title: "Class 10 Subject Topper (Math, Hindi, Marathi)",
      context: "Maharashtra SSC State Board Examinations, Padua High School",
      result: "Subject Highest Marks",
      year: "2024",
      description: "Achieved the highest marks in Padua High School across three subjects: Mathematics, Hindi, and Marathi."
    },
    {
      title: "School Head Boy",
      context: "Padua High School Student Council",
      result: "Elected Head Boy for 2 Years",
      year: "2022 – 2024",
      description: "Served as Head Boy across Classes 9 and 10, directing student leadership and school assemblies."
    }
  ],
  leadership: [
    {
      role: "Head Boy & Student Council Leader",
      organization: "Padua High School, Mankhurd",
      period: "2022 – 2024",
      contributions: [
        "Represented student body before school administration and teachers across two years",
        "Coordinated student discipline, daily assembly schedules, and internal delegations"
      ]
    },
    {
      role: "Overall Event Coordinator (Annual Day)",
      organization: "Padua High School",
      period: "2022 & 2023",
      contributions: [
        "Managed stage scheduling, backstage operations, and student flow for major cultural events",
        "Collaborated with faculty committees to ensure seamless execution on two occasions"
      ]
    },
    {
      role: "BARC National Science Day Delegation",
      organization: "Bhabha Atomic Research Centre, Trombay",
      period: "2023 & 2024",
      contributions: [
        "Selected for two scientific educational visits during Classes 9 & 10 to study nuclear research facilities"
      ]
    }
  ],
  projects: [
    {
      title: "FALCON-404 — AI-Based Identity & Document Screening System",
      role: "Project Lead & Sole Application Developer (Team Falcon)",
      period: "September 2026 – Present",
      technologies: ["React", "TypeScript", "Tesseract.js (Client-side OCR)", "Canvas Forensics (ELA)", "Tailwind CSS"],
      bullets: [
        "Engineered browser-local identity document screening pipeline for Smart India Hackathon 2026 (Problem ID: 26188).",
        "Implemented client-side OCR text extraction, candidate field parsing, and privacy-preserving field masking.",
        "Built image container metadata inspection and Error Level Analysis (ELA) to highlight compression discrepancies.",
        "Demonstrated working prototype at Seva First Innovation Challenge; active development continues."
      ]
    },
    {
      title: "Arogya AI — Hospital Bed Occupancy & Flow Management",
      role: "Primary Technical Contributor (Backend & System Integration)",
      period: "October 2026",
      technologies: ["React", "TypeScript", "Express API", "Supabase PostgreSQL", "Python", "XGBoost"],
      bullets: [
        "Collaborated at AARAMBH 2026 Hackathon (WCE Sangli) to build a predictive bed occupancy dashboard.",
        "Integrated Express REST endpoints and Supabase database models for patient records, wards, and token queues.",
        "Demonstrated admission/discharge forecasting and prototype online payment workflows using demonstration datasets."
      ]
    },
    {
      title: "Campus Copilot — Grounded College Information AI Assistant",
      role: "Lead Technical Developer (Team Error 404)",
      period: "October 2026",
      technologies: ["React", "TypeScript", "Google AI Studio", "Tailwind CSS"],
      bullets: [
        "Built a responsive student chatbot demonstrated at Tantraparv (Sharad Institute of Technology).",
        "Grounded conversational responses in official college website content to answer student queries accurately."
      ]
    },
    {
      title: "Neuroverse 2K26 Event Platform & Gada Electronics",
      role: "Front-End Developer & UI Designer",
      period: "September 2026",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Framer Motion"],
      bullets: [
        "Built cyber-themed event website and electronics e-commerce concept across two competitive rounds.",
        "Awarded Runner-Up (2nd Place) in national-level PixelCraft web development competition at ADCET Ashta."
      ]
    }
  ],
  skills: {
    foundations: ["HTML5", "CSS3", "Git & GitHub", "Responsive Design", "Semantic Markup"],
    currentlyLearning: ["C Programming (B.Tech Syllabus)", "Data Structures", "Machine Learning Fundamentals"],
    cybersecurityFoundations: ["Linux Command Line", "Networking (TCP/IP, DNS, HTTP)", "Image Forensics (ELA)", "Document Screening Pipelines"],
    aiAssistedTooling: ["Google AI Studio", "Antigravity", "GitHub Copilot", "Gemini & ChatGPT", "Prompt Engineering", "Figma & Canva"],
    frameworksExplored: ["React & TypeScript (via AI-Assisted Dev)", "Tailwind CSS", "Supabase PostgreSQL", "Express APIs"]
  },
  eventParticipation: [
    "Smart India Hackathon 2026 (Online selection pending)",
    "Seva First Innovation Challenge (Live demonstration presented)",
    "PixelCraft — Neuroverse 2K26 (Runner-up 2nd Place)",
    "Tantraparv (Campus Copilot demonstration)",
    "Founder's Expo — E-Cell ADCET (ArtBook AI prototype presentation)",
    "AARAMBH Hackathon — WCE Sangli (Arogya AI prototype)",
    "National Children's Science Congress (District Level in Class 8)"
  ]
};
