export type PublicationStatus = 'draft' | 'in-progress' | 'ready' | 'published' | 'archived';

export interface ProjectLinks {
  repositoryUrl: string;
  liveDemoUrl: string;
  websiteUrl: string;
  documentationUrl: string;
  demoVideoUrl: string;
  presentationUrl: string;
  competitionUrl: string;
}

export interface ProjectAssets {
  cover: string;
  screenshots: string[];
  architectureDiagram?: string;
  demoVideo?: string;
  certificate?: string;
  eventPhotographs?: string[];
  runnerUpCertificate?: string;
}

export interface ProjectCoverArtwork {
  type: 'cyber' | 'health' | 'chat' | 'marketplace' | 'eco' | 'abstract';
  accentColor: string;
  iconName: string;
}

export interface CompetitionContext {
  name: string;
  institution?: string;
  problemStatementId?: string;
  problemStatement?: string;
  theme?: string;
  category?: string;
  teamName?: string;
  teamId?: string;
  submissionDate?: string;
  status: string;
  result?: string;
  notes?: string;
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  displayTitle: string;
  tagline: string;
  domain: string;
  importance: 'flagship' | 'featured' | 'standard' | 'early';
  role: string;
  teamContext?: string;
  status: 'active' | 'completed' | 'prototype' | 'in-progress' | 'demonstration';
  publicationStatus: PublicationStatus;
  summary: string;
  problem: string;
  solution: string;
  features: string[];
  technologies: string[];
  aiAssisted: boolean;
  competition?: CompetitionContext;
  limitations: string[];
  lessonsLearned: string[];
  futureWork: string[];
  coverArtwork: ProjectCoverArtwork;
  assets: ProjectAssets;
  links: ProjectLinks;
  privateNotes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  location: string;
  level: string;
  degreeOrCertificate: string;
  branch?: string;
  board?: string;
  period: string;
  completionYear?: number;
  currentStatus?: string;
  achievements?: string[];
  leadership?: string[];
  cgpaRecord?: {
    isPublished: boolean;
    value: string;
    notes?: string;
  };
}

export interface AchievementItem {
  id: string;
  title: string;
  eventOrContext: string;
  institution: string;
  category: 'Competition' | 'Academic' | 'Leadership' | 'Scientific';
  result: string;
  date?: string;
  description: string;
  associatedProjects?: string[];
  certificateAsset?: string;
}

export interface EventItem {
  id: string;
  name: string;
  hostInstitution: string;
  dates?: string;
  role: string;
  projectPresented?: string;
  status: 'Runner-up' | 'Participated' | 'Demonstrated' | 'Online selection pending' | 'Prototype' | 'In progress';
  description: string;
  highlights?: string[];
  eventPhotoAsset?: string;
}

export type SkillProficiency = 
  | 'Proficient'
  | 'Learning'
  | 'Fundamentals Known'
  | 'Used via AI-Assisted Dev'
  | 'Demonstrated in Project';

export interface SkillItem {
  id: string;
  name: string;
  category: 
    | 'Foundations'
    | 'Currently Learning'
    | 'AI-Assisted Development Tools'
    | 'Cybersecurity Foundations'
    | 'Languages & Frameworks Explored';
  proficiencyLevel: SkillProficiency;
  description: string;
  projectsReferenced?: string[];
}

export type CreativeCategory =
  | 'photography'
  | 'cinematography'
  | 'reels'
  | 'nature'
  | 'travel'
  | 'behind-the-scenes'
  | 'personal-moments';

export interface CreativeMediaItem {
  id: string;
  title: string;
  category: CreativeCategory;
  mediaType: 'image' | 'video';
  source: string;
  thumbnail?: string;
  poster?: string;
  alt: string;
  caption?: string;
  location?: string;
  date?: string;
  featured?: boolean;
  published: boolean;
  isVertical?: boolean;
}

export interface OwnerTask {
  id: string;
  title: string;
  priority: 'low' | 'medium' | 'high' | 'urgent';
  dueDate?: string;
  relatedProject?: string;
  status: 'todo' | 'in-progress' | 'done';
  completionDate?: string;
  notes?: string;
}

export interface LearningItem {
  id: string;
  title: string;
  category: 'Programming' | 'Machine Learning' | 'Cybersecurity' | 'Cloud & DevOps' | 'Other';
  status: 'not-started' | 'learning' | 'practising' | 'building' | 'proficient' | 'completed';
  resources: string;
  notes: string;
  nextAction: string;
  flexibleWeeklyTarget: string;
  updatedAt: string;
}

export interface PersonalGoal {
  id: string;
  category:
    | 'programming'
    | 'data-ml'
    | 'cybersecurity'
    | 'cloud-devops'
    | 'devsecops'
    | 'entrepreneurship'
    | 'event-management'
    | 'creative'
    | 'motorcycle-travel';
  title: string;
  description: string;
  targetDate?: string;
  status: 'active' | 'achieved' | 'paused';
}

export interface PersonalReflection {
  id: string;
  title: string;
  content: string;
  date: string;
  mood?: string;
  tags?: string[];
  isPrivate: true;
}

export interface CareerMilestone {
  year: string;
  title: string;
  phase: string;
  description: string;
  focusAreas: string[];
  status: 'completed' | 'in-progress' | 'planned';
}
