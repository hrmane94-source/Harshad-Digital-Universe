import type { EducationItem } from '../types/portfolio';

export const verifiedEducation: EducationItem[] = [
  {
    id: "edu-adcet",
    institution: "Annasaheb Dange College of Engineering and Technology (ADCET)",
    location: "Ashta, Sangli, Maharashtra, India",
    level: "Undergraduate Engineering",
    degreeOrCertificate: "Bachelor of Technology (B.Tech)",
    branch: "Computer Science and Engineering",
    period: "2026 – 2030",
    currentStatus: "First Year Student",
    achievements: [
      "National-level PixelCraft web development competition Runner-up (Neuroverse 2K26)",
      "Smart India Hackathon 2026 team lead and sole developer for Falcon-404 screening system",
      "Founder's Expo software concept presentation (ArtBook AI)",
      "WCE Sangli Hackathon (AARAMBH) participant (Arogya AI healthcare bed analytics)",
      "Active participant in technical symposiums, hackathons, and campus innovation initiatives"
    ],
    leadership: [
      "Aspiring to step into college-level event management and coordination from second year onward"
    ],
    cgpaRecord: {
      isPublished: false,
      value: "",
      notes: "First-year engineering CGPA will be recorded and published here upon official university semester result release."
    }
  },
  {
    id: "edu-svjc",
    institution: "Swami Vivekanand Junior College of Science",
    location: "Koparkhairane, Thane, Maharashtra, India",
    level: "Higher Secondary (Junior College)",
    degreeOrCertificate: "Higher Secondary Certificate (HSC)",
    board: "Maharashtra State Board of Secondary and Higher Secondary Education (MSBSHSE)",
    period: "2024 – 2026",
    completionYear: 2026,
    currentStatus: "Completed",
    achievements: [
      "Completed rigorous science curriculum covering Physics, Chemistry, and Mathematics",
      "Developed foundational interest in algorithmic problem-solving and software systems"
    ]
  },
  {
    id: "edu-padua",
    institution: "Padua High School",
    location: "Mankhurd, Mumbai / Maharashtra, India",
    level: "Secondary School (Class 1 to 10)",
    degreeOrCertificate: "Secondary School Certificate (SSC)",
    board: "Maharashtra State Board of Secondary and Higher Secondary Education (MSBSHSE)",
    period: "2014 – 2024",
    completionYear: 2024,
    currentStatus: "Completed",
    achievements: [
      "Subject Topper in Class 10 (SSC): Mathematics, Hindi, and Marathi",
      "Participated in National Children's Science Congress (NCSC) in Class 8, reaching the District Level with an eco-friendly planting project",
      "Selected for two educational visits to Bhabha Atomic Research Centre (BARC), Trombay, for National Science Day activities (Classes 9 and 10)"
    ],
    leadership: [
      "Head Boy across two consecutive academic years (Classes 9 and 10)",
      "Overall coordinator and manager for the school's Annual Day event on two separate occasions"
    ]
  }
];
