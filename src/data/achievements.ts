import type { AchievementItem } from '../types/portfolio';
import { assetConfig } from './assets';

export const verifiedAchievements: AchievementItem[] = [
  {
    id: "ach-pixelcraft",
    title: "Runner-Up — Second Place (PixelCraft)",
    eventOrContext: "Neuroverse 2K26 National Symposium",
    institution: "Annasaheb Dange College of Engineering and Technology (ADCET), Ashta",
    category: "Competition",
    result: "Runner-Up (2nd Place)",
    date: "2026",
    description: "Secured 2nd place in PixelCraft, a national-level web design and development competition consisting of two competitive rounds: Round 1 building GADA ELECTRONICS and Round 2 creating the official Neuroverse 2K26 event website.",
    associatedProjects: ["proj-neuroverse-2k26-website", "proj-gada-electronics"],
    certificateAsset: assetConfig.certificates.pixelCraftRunnerUp
  },
  {
    id: "ach-ssc-topper",
    title: "Subject Topper in Mathematics, Hindi & Marathi",
    eventOrContext: "Secondary School Certificate (SSC) Board Examination",
    institution: "Padua High School / Maharashtra State Board",
    category: "Academic",
    result: "Subject Highest Marks",
    date: "2024",
    description: "Achieved highest subject scores in Mathematics, Hindi, and Marathi during the Class 10 board examinations at Padua High School. (Subject-specific academic achievement).",
    certificateAsset: assetConfig.certificates.subjectAchievements
  },
  {
    id: "ach-head-boy",
    title: "School Head Boy (Two Consecutive Years)",
    eventOrContext: "Student Leadership & School Governance",
    institution: "Padua High School, Mankhurd",
    category: "Leadership",
    result: "Elected Head Boy (Classes 9 and 10)",
    date: "2022 – 2024",
    description: "Selected to serve as Head Boy for two consecutive academic years, representing the student body, leading morning assemblies, upholding school discipline, and managing overall coordination for the annual day celebrations on two occasions.",
    certificateAsset: assetConfig.certificates.headBoyLetter
  }
];

export const verifiedLeadershipExperience = [
  {
    id: "lead-annual-day",
    title: "Annual Day Overall Event Coordination",
    institution: "Padua High School",
    timesManaged: 2,
    description: "Entrusted with end-to-end event management and student coordination for Padua High School's flagship Annual Day cultural event across two editions, overseeing stage flow, student discipline, and scheduling."
  },
  {
    id: "lead-barc-visits",
    title: "BARC National Science Day Delegations",
    institution: "Bhabha Atomic Research Centre (BARC), Trombay",
    frequency: "Twice (Class 9 and Class 10)",
    description: "Selected for educational visits to the Bhabha Atomic Research Centre in Trombay in connection with National Science Day educational activities, gaining direct exposure to India's premier nuclear and scientific research infrastructure."
  },
  {
    id: "lead-ncsc-district",
    title: "NCSC District-Level Science Project",
    institution: "National Children's Science Congress",
    level: "District Level Participant",
    description: "Researched and presented an eco-friendly planting system in Class 8, successfully advancing through school evaluations to defend the project at the district level."
  }
];
