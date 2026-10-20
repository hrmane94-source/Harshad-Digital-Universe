import type { SkillItem } from '../types/portfolio';

export const verifiedSkills: SkillItem[] = [
  // Foundations
  {
    id: "sk-html",
    name: "HTML5",
    category: "Foundations",
    proficiencyLevel: "Proficient",
    description: "Semantic document structuring, accessible forms, meta tagging, and modern web markup fundamentals.",
    projectsReferenced: ["FALCON-404", "Neuroverse 2K26 Website", "GADA ELECTRONICS"]
  },
  {
    id: "sk-css",
    name: "CSS3 / Modern Styling",
    category: "Foundations",
    proficiencyLevel: "Proficient",
    description: "Flexbox, CSS Grid, responsive design layouts, keyframe transitions, and visual styling systems.",
    projectsReferenced: ["GADA ELECTRONICS", "Neuroverse 2K26 Website"]
  },
  {
    id: "sk-git",
    name: "Git & GitHub",
    category: "Foundations",
    proficiencyLevel: "Fundamentals Known",
    description: "Version control workflows, commit discipline, branch management, pull requests, and repository tracking.",
    projectsReferenced: ["FALCON-404", "Arogya AI"]
  },

  // Currently Learning
  {
    id: "sk-c-lang",
    name: "C Programming",
    category: "Currently Learning",
    proficiencyLevel: "Learning",
    description: "Studying core computational logic, memory addressing, pointers, and data structures through the B.Tech CSE syllabus.",
    projectsReferenced: []
  },
  {
    id: "sk-ml",
    name: "Machine Learning Concepts",
    category: "Currently Learning",
    proficiencyLevel: "Learning",
    description: "Learning fundamental algorithms, regression models, decision trees, and exploratory data analysis pipelines.",
    projectsReferenced: ["Arogya AI"]
  },

  // Cybersecurity Foundations
  {
    id: "sk-linux",
    name: "Linux Operating System",
    category: "Cybersecurity Foundations",
    proficiencyLevel: "Fundamentals Known",
    description: "Basic shell navigation, permissions, file system hierarchy, process inspection, and command-line utilities.",
    projectsReferenced: ["FALCON-404"]
  },
  {
    id: "sk-networking",
    name: "Networking Fundamentals",
    category: "Cybersecurity Foundations",
    proficiencyLevel: "Fundamentals Known",
    description: "Foundational understanding of IP addressing, TCP/UDP protocols, DNS resolution, and HTTP/HTTPS request lifecycles.",
    projectsReferenced: ["FALCON-404"]
  },
  {
    id: "sk-doc-screening",
    name: "Document Forensics & Image Heuristics",
    category: "Cybersecurity Foundations",
    proficiencyLevel: "Demonstrated in Project",
    description: "Practical implementation of Error Level Analysis (ELA), metadata container inspection, and OCR verification heuristics.",
    projectsReferenced: ["FALCON-404"]
  },

  // AI-Assisted Application Development & Prompting
  {
    id: "sk-ai-assisted-dev",
    name: "AI-Assisted App Development (Vibe Coding)",
    category: "AI-Assisted Development Tools",
    proficiencyLevel: "Proficient",
    description: "Highly skilled at translating product visions into working full-stack applications using modern AI orchestration tools.",
    projectsReferenced: ["FALCON-404", "Arogya AI", "Campus Copilot", "ArtBook AI", "GADA ELECTRONICS"]
  },
  {
    id: "sk-prompt-eng",
    name: "Prompt Engineering & Grounding",
    category: "AI-Assisted Development Tools",
    proficiencyLevel: "Proficient",
    description: "Structured prompt crafting, role conditioning, context injection, and grounding models against specific knowledge bases (partially completed IIT Madras online study).",
    projectsReferenced: ["Campus Copilot", "FALCON-404"]
  },
  {
    id: "sk-ai-tools-ecosystem",
    name: "AI Developer Tooling Suite",
    category: "AI-Assisted Development Tools",
    proficiencyLevel: "Proficient",
    description: "Hands-on project experience with Google AI Studio, Antigravity, Gemini, ChatGPT, Claude, Lovable, Replit, and GitHub Copilot.",
    projectsReferenced: ["All Projects"]
  },
  {
    id: "sk-design-tools",
    name: "Design & Prototyping (Figma & Canva)",
    category: "AI-Assisted Development Tools",
    proficiencyLevel: "Fundamentals Known",
    description: "Wireframing, UI composition, slide deck creation, and visual asset preparation for presentations.",
    projectsReferenced: ["Neuroverse 2K26 Website", "Campus Copilot"]
  },

  // Languages & Frameworks Explored via AI Assistance
  {
    id: "sk-react-ts",
    name: "React & TypeScript",
    category: "Languages & Frameworks Explored",
    proficiencyLevel: "Used via AI-Assisted Dev",
    description: "Built modular web applications with React state, component lifecycles, and typed interfaces using AI development workflows.",
    projectsReferenced: ["FALCON-404", "Arogya AI", "Neuroverse 2K26 Website", "GADA ELECTRONICS"]
  },
  {
    id: "sk-tailwind",
    name: "Tailwind CSS",
    category: "Languages & Frameworks Explored",
    proficiencyLevel: "Used via AI-Assisted Dev",
    description: "Rapid responsive styling with utility tokens, flex layouts, grids, and glassmorphic micro-interactions.",
    projectsReferenced: ["FALCON-404", "GADA ELECTRONICS", "Arogya AI"]
  },
  {
    id: "sk-backend-supabase",
    name: "Express API & Supabase PostgreSQL",
    category: "Languages & Frameworks Explored",
    proficiencyLevel: "Used via AI-Assisted Dev",
    description: "Connected REST endpoints, configured database tables, and executed basic relational queries in hackathon prototypes.",
    projectsReferenced: ["Arogya AI"]
  },
  {
    id: "sk-python-xgboost",
    name: "Python & XGBoost Integration",
    category: "Languages & Frameworks Explored",
    proficiencyLevel: "Used via AI-Assisted Dev",
    description: "Explored predictive model outputs and integrated tabular regression results into dashboard views.",
    projectsReferenced: ["Arogya AI"]
  }
];

export const toolsUsedList = [
  "Google AI Studio",
  "Antigravity",
  "ChatGPT",
  "Google Gemini",
  "Claude",
  "Figma",
  "Canva",
  "GitHub Copilot",
  "Visual Studio Code",
  "Replit",
  "Lovable",
  "Vercel",
  "Supabase",
  "Firebase",
  "Gamma AI"
];
