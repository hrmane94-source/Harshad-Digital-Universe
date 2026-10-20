import { verifiedProjects } from './projects';
import { verifiedEducation } from './education';
import { verifiedAchievements, verifiedLeadershipExperience } from './achievements';
import { verifiedEvents } from './events';
import { verifiedSkills, toolsUsedList } from './skills';
import { careerRoadmapVision, learningPriorityStages, careerMilestones } from './careerRoadmap';
import { creativeGalleryItems, creativeCategoriesList } from './gallery';
import { motorcycleExpeditionVision, plannedRouteHighlights, expeditionReadiness } from './explorations';
import { verifiedGoals } from './goals';
import { resumeData } from './resume';
import { contactConfig } from './contact';
import { assetConfig } from './assets';
import { projectLinksConfig } from './projectLinks';
import type { OwnerTask, LearningItem, PersonalReflection } from '../types/portfolio';

export const initialOwnerTasks: OwnerTask[] = [
  {
    id: "task-1",
    title: "Prepare for November 2026 First-Year Mid-Semester Examinations",
    priority: "urgent",
    status: "in-progress",
    notes: "Review C programming pointers, engineering physics, and mathematics syllabi."
  },
  {
    id: "task-2",
    title: "Monitor SIH 2026 Online Selection Status for Falcon-404",
    priority: "high",
    status: "in-progress",
    relatedProject: "proj-falcon-404",
    notes: "Review portal notifications for Problem Statement 26188."
  },
  {
    id: "task-3",
    title: "Collect and place high-resolution certificates in /public/assets/certificates/",
    priority: "medium",
    status: "todo",
    notes: "Add PixelCraft Runner-Up, SSC Marksheet/Subject Topper certificates, and Head Boy appointment records."
  },
  {
    id: "task-4",
    title: "Curate landscape and motorcycle travel photography for gallery when ready",
    priority: "medium",
    status: "todo",
    notes: "Export WebP/JPEG landscape and vertical reels to /public/assets/gallery/."
  }
];

export const initialLearningItems: LearningItem[] = [
  {
    id: "learn-c",
    title: "C Computational Logic & Dynamic Memory",
    category: "Programming",
    status: "learning",
    resources: "B.Tech College Lecture Notes, Standard C Manuals",
    notes: "Currently practicing memory allocation with malloc/free and struct pointers.",
    nextAction: "Implement linked list manipulation exercises without helper libraries.",
    flexibleWeeklyTarget: "3 practical coding sessions around exam schedule",
    updatedAt: "2026-10-20"
  },
  {
    id: "learn-linux",
    title: "Linux Command Line & Shell Fundamentals",
    category: "Cybersecurity",
    status: "practising",
    resources: "OverTheWire Bandit, Linux CLI Documentation",
    notes: "Practicing file permissions (chmod/chown), grep/sed text streams, and process monitoring.",
    nextAction: "Complete next 5 levels of Bandit challenge.",
    flexibleWeeklyTarget: "1-2 weekend lab hours",
    updatedAt: "2026-10-20"
  },
  {
    id: "learn-ml-basics",
    title: "Classical Machine Learning Foundations",
    category: "Machine Learning",
    status: "learning",
    resources: "Scikit-Learn documentation and XGBoost overview",
    notes: "Studying tabular regression and decision trees following Arogya AI hackathon experience.",
    nextAction: "Review evaluation metrics: Precision, Recall, ROC-AUC.",
    flexibleWeeklyTarget: "Weekend exploratory reading",
    updatedAt: "2026-10-20"
  }
];

export const initialReflections: PersonalReflection[] = [
  {
    id: "refl-1",
    title: "Pressure is a Privilege: Reflections on Starting Engineering",
    content: "Transitioning into B.Tech CSE at ADCET has pushed me out of my comfort zone. Competing in SIH and PixelCraft in the first few months showed me that initiative matters far more than waiting for someone to teach you. Pressure simply means you have an opportunity to make something meaningful. Keep learning without limits, stay humble, and stand beside teammates.",
    date: "2026-10-15",
    mood: "Focused & Optimistic",
    tags: ["Engineering", "Mindset", "Growth"],
    isPrivate: true
  }
];

export const portfolioSeedData = {
  projects: verifiedProjects,
  education: verifiedEducation,
  achievements: verifiedAchievements,
  leadership: verifiedLeadershipExperience,
  events: verifiedEvents,
  skills: verifiedSkills,
  tools: toolsUsedList,
  careerRoadmap: {
    vision: careerRoadmapVision,
    stages: learningPriorityStages,
    milestones: careerMilestones
  },
  gallery: {
    items: creativeGalleryItems,
    categories: creativeCategoriesList
  },
  explorations: {
    vision: motorcycleExpeditionVision,
    routes: plannedRouteHighlights,
    readiness: expeditionReadiness
  },
  goals: verifiedGoals,
  resume: resumeData,
  contact: contactConfig,
  assets: assetConfig,
  projectLinks: projectLinksConfig,
  tasks: initialOwnerTasks,
  learningItems: initialLearningItems,
  reflections: initialReflections
};
