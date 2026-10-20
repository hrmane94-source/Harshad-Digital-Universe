import type { CareerMilestone } from '../types/portfolio';

export interface LearningStage {
  id: string;
  order: number;
  title: string;
  focus: string;
  status: 'not-started' | 'learning' | 'practising' | 'building' | 'proficient' | 'completed';
  description: string;
  topics: string[];
  plannedPhase: string;
  targetResources: string[];
}

export const careerRoadmapVision = {
  primaryDirection: "Cybersecurity / DevSecOps",
  secondaryInterests: [
    "Cloud Computing & Infrastructure as Code",
    "Data Analytics & Machine Learning",
    "Modern Software Engineering"
  ],
  vision2030: "Graduate in 2030 with substantial practical engineering experience, multiple high-impact internships, hands-on security auditing and DevSecOps capabilities, demonstrated open-source contributions, freelancing experience, and a balanced, resilient mindset ready for competitive engineering roles.",
  currentAcademicPhase: "B.Tech CSE First Year (2026 – 2030) at ADCET Ashta",
  plannedStructuredStudy: "Beginning structured self-directed certifications and courses following the November 2026 mid-semester examinations."
};

export const learningPriorityStages: LearningStage[] = [
  {
    id: "stage-1-programming",
    order: 1,
    title: "1. Core Programming & Computer Science Foundations",
    focus: "C, Data Structures, Algorithms, Computational Logic",
    status: "learning",
    description: "Building unshakeable computational problem-solving foundations through C and foundational algorithmic principles in the college syllabus.",
    topics: [
      "Procedural Programming & Memory Mechanics in C",
      "Pointers, Dynamic Memory Allocation & Arrays",
      "Core Data Structures (Linked Lists, Stacks, Queues, Trees)",
      "Time & Space Complexity Analysis (Big-O)"
    ],
    plannedPhase: "Year 1 (2026 – 2027)",
    targetResources: [
      "College B.Tech CSE Coursework",
      "Harvard CS50x / Foundational C References",
      "Algorithmic Problem-Solving Practice"
    ]
  },
  {
    id: "stage-2-data-ml",
    order: 2,
    title: "2. Data Analytics & Machine Learning",
    focus: "Python, Tabular Analytics, Classical ML, Feature Engineering",
    status: "learning",
    description: "Transitioning from heuristic scripting to disciplined data exploration, statistical modeling, and integrating predictive ML endpoints into web services.",
    topics: [
      "Python for Scientific Computing (NumPy, Pandas, Matplotlib)",
      "Exploratory Data Analysis & Feature Scaling",
      "Supervised Learning (Regression, Classification, Decision Trees, XGBoost)",
      "Model Evaluation Metrics & Precision-Recall Tradeoffs"
    ],
    plannedPhase: "Year 1 – Year 2 (2026 – 2028)",
    targetResources: [
      "Scikit-learn Documentation & Tutorials",
      "Hands-on ML by Aurélien Géron",
      "Kaggle Beginner Datasets"
    ]
  },
  {
    id: "stage-3-cybersecurity",
    order: 3,
    title: "3. Cybersecurity & Defensive Engineering",
    focus: "Network Security, Linux Administration, Web Security, Threat Modeling",
    status: "practising",
    description: "Deepening theoretical and practical security knowledge: understanding vulnerabilities from first principles to build defensive controls and screening tools.",
    topics: [
      "Linux System Administration & Shell Scripting",
      "Network Protocols (TCP/IP, TLS/SSL, DNS, Routing)",
      "OWASP Top 10 Web Vulnerabilities & Secure Coding",
      "Digital Document Forensics & Tamper Detection",
      "Identity & Access Management (IAM) Basics"
    ],
    plannedPhase: "Year 2 – Year 3 (2027 – 2029)",
    targetResources: [
      "OverTheWire Bandit (Linux Foundations)",
      "TryHackMe / PortSwigger Web Security Academy",
      "SIH Falcon-404 Continued Research"
    ]
  },
  {
    id: "stage-4-cloud-devsecops",
    order: 4,
    title: "4. Cloud Infrastructure & DevSecOps",
    focus: "CI/CD Security, Containers, Kubernetes, Cloud Architecture",
    status: "not-started",
    description: "Bridging the gap between software delivery and proactive security: automating vulnerability scanning, secret management, and resilient cloud deployments.",
    topics: [
      "Docker Containerization & Multi-stage Builds",
      "CI/CD Pipelines (GitHub Actions with automated security linters)",
      "Cloud Fundamentals (AWS / Azure / GCP)",
      "Static Application Security Testing (SAST) & Dependency Auditing",
      "Infrastructure as Code (Terraform) & Zero-Trust Principles"
    ],
    plannedPhase: "Year 3 – Year 4 (2028 – 2030)",
    targetResources: [
      "Cloud Practitioner Certification Material",
      "DevSecOps Best Practice Guides & CNCF Tooling"
    ]
  }
];

export const careerMilestones: CareerMilestone[] = [
  {
    year: "2026",
    title: "Foundations & Competitive Hackathons",
    phase: "First Year Engineering",
    description: "Entered ADCET CSE, established AI-assisted development workflow, built Falcon-404 for SIH 2026, secured Runner-Up at PixelCraft (Neuroverse 2K26).",
    focusAreas: ["C Foundations", "Hackathon Prototyping", "UI & Web Engineering"],
    status: "in-progress"
  },
  {
    year: "2027",
    title: "Core CS Discipline & Campus Leadership",
    phase: "Second Year Engineering",
    description: "Master Data Structures in C/Python, begin formal cybersecurity lab practice, step into college technical event coordination.",
    focusAreas: ["Data Structures & Algorithms", "Linux & Networking", "Event Management"],
    status: "planned"
  },
  {
    year: "2028",
    title: "First Engineering Internships & Security Certifications",
    phase: "Third Year Engineering",
    description: "Pursue software/security internship opportunities, contribute to open-source security utilities, achieve foundational cybersecurity certification.",
    focusAreas: ["Practical Internships", "Security Auditing", "Cloud Deployments"],
    status: "planned"
  },
  {
    year: "2029 – 2030",
    title: "DevSecOps Specialization & Capstone Implementation",
    phase: "Final Year & Placement",
    description: "Execute high-impact capstone security project, undertake pre-placement internship, prepare for roles in DevSecOps, Application Security, or Software Engineering.",
    focusAreas: ["DevSecOps Automation", "Production System Security", "Career Placement"],
    status: "planned"
  }
];
