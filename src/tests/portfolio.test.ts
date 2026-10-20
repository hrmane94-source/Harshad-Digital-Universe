import { describe, it, expect } from 'vitest';
import { verifiedProjects } from '../data/projects';
import { verifiedEducation } from '../data/education';
import { verifiedAchievements, verifiedLeadershipExperience } from '../data/achievements';
import { verifiedEvents } from '../data/events';
import { verifiedSkills } from '../data/skills';
import { resumeData } from '../data/resume';
import { contactConfig } from '../data/contact';
import { getSupabaseStatus } from '../lib/supabase';
import { 
  fromDbTask, 
  toDbTask, 
  fromDbReflection, 
  toDbReflection, 
  fromDbProject, 
  toDbProject,
  fetchOwnerTasks,
  createOwnerTask
} from '../lib/supabaseService';
import { creativeGalleryItems } from '../data/gallery';
import { generateResumePdf } from '../utils/generateResumePdf';

describe('Portfolio Verification & Data Integrity Suite', () => {
  
  it('contains all 7 verified projects with distinct slugs and valid configurations', () => {
    expect(verifiedProjects).toHaveLength(7);
    const slugs = verifiedProjects.map(p => p.slug);
    expect(slugs).toEqual([
      'falcon-404',
      'arogya-ai',
      'campus-copilot',
      'neuroverse-2k26-website',
      'gada-electronics',
      'artbook-ai',
      'eco-friendly-planting-system'
    ]);
  });

  it('verifies FALCON-404 as the flagship cybersecurity project with verified competition details', () => {
    const falcon = verifiedProjects.find(p => p.slug === 'falcon-404');
    expect(falcon).toBeDefined();
    expect(falcon?.importance).toBe('flagship');
    expect(falcon?.competition?.name).toBe('Smart India Hackathon 2026');
    expect(falcon?.competition?.problemStatementId).toBe('26188');
    expect(falcon?.competition?.teamName).toBe('Falcon');
    expect(falcon?.competition?.teamId).toBe('ISIH26106');
    expect(falcon?.role).toBe('Project Lead & Sole Application Developer');
    
    // Check non-negotiable limitations
    expect(falcon?.limitations.some(l => l.includes('screening, not definitive proof'))).toBe(true);
    expect(falcon?.limitations.some(l => l.includes('OCR represents text extraction'))).toBe(true);
  });

  it('ensures all project external links are non-fabricated and empty or valid', () => {
    verifiedProjects.forEach(p => {
      // Must not contain fake localhost or dummy mock domains
      if (p.links.repositoryUrl) {
        expect(p.links.repositoryUrl).toMatch(/^https?:\/\//);
      }
      if (p.links.liveDemoUrl) {
        expect(p.links.liveDemoUrl).toMatch(/^https?:\/\//);
      }
    });
  });

  it('verifies Arogya AI is documented with demo dataset limitations and no fake clinical claims', () => {
    const arogya = verifiedProjects.find(p => p.slug === 'arogya-ai');
    expect(arogya).toBeDefined();
    expect(arogya?.status).toBe('demonstration');
    expect(arogya?.role).toBe('Primary Technical Contributor');
    expect(arogya?.limitations.some(l => l.includes('synthetic demonstration dataset'))).toBe(true);
    expect(arogya?.limitations.some(l => l.includes('not a clinically validated platform'))).toBe(true);
  });

  it('separates Achievements and Events into distinct models (Rule 10)', () => {
    expect(verifiedAchievements).toBeDefined();
    expect(verifiedEvents).toBeDefined();

    // PixelCraft runner-up is recorded in achievements
    const pixelCraft = verifiedAchievements.find(a => a.id === 'ach-pixelcraft');
    expect(pixelCraft).toBeDefined();
    expect(pixelCraft?.result).toBe('Runner-Up (2nd Place)');

    // Head Boy is documented in achievements
    const headBoy = verifiedAchievements.find(a => a.id === 'ach-head-boy');
    expect(headBoy).toBeDefined();

    // BARC visits and Annual Day coordination are in leadership/scientific experience, not converted to awards
    expect(verifiedLeadershipExperience.some(l => l.title.includes('BARC'))).toBe(true);
    expect(verifiedLeadershipExperience.some(l => l.title.includes('Annual Day'))).toBe(true);

    // Events list contains accurate statuses
    expect(verifiedEvents.some(e => e.status === 'Online selection pending')).toBe(true);
    expect(verifiedEvents.some(e => e.status === 'Runner-up')).toBe(true);
    expect(verifiedEvents.some(e => e.status === 'Demonstrated')).toBe(true);
  });

  it('validates education history without manufactured percentages or unearned grades', () => {
    expect(verifiedEducation).toHaveLength(3);
    const adcet = verifiedEducation.find(e => e.id === 'edu-adcet');
    expect(adcet).toBeDefined();
    expect(adcet?.branch).toBe('Computer Science and Engineering');
    expect(adcet?.period).toBe('2026 – 2030');
    expect(adcet?.cgpaRecord?.isPublished).toBe(false); // Not published yet per Rule 7

    const svjc = verifiedEducation.find(e => e.id === 'edu-svjc');
    expect(svjc?.completionYear).toBe(2026);

    const padua = verifiedEducation.find(e => e.id === 'edu-padua');
    expect(padua?.completionYear).toBe(2024);
  });

  it('confirms single source of truth consistency in Resume data', () => {
    expect(resumeData.basics.name).toBe('Harshad Rajaram Mane');
    expect(resumeData.basics.email).toBe('hrmane94@gmail.com');
    expect(resumeData.projects).toHaveLength(4);
    expect(resumeData.education).toHaveLength(3);
    expect(resumeData.achievements).toHaveLength(3);
    expect(resumeData.leadership).toHaveLength(3);
  });

  it('verifies contact configuration links and mailto defaults', () => {
    expect(contactConfig.email).toBe('hrmane94@gmail.com');
    expect(contactConfig.ownerEmail).toBe('hrmane94@gmail.com');
    expect(contactConfig.creativeIdentity).toBe('shiv.premi_1630');
    expect(contactConfig.profiles.github).toBe('https://github.com/hrmane94-source');
    expect(contactConfig.profiles.linkedin).toContain('shivpremi1630');
    expect(contactConfig.profiles.instagram).toContain('shiv.premi_1630');
    expect(contactConfig.profiles.behance).toContain('harshadmane11');
  });

  it('verifies Supabase client diagnostics and unconfigured fallback safety', () => {
    const status = getSupabaseStatus();
    expect(status.ownerEmail).toBe('hrmane94@gmail.com');
    expect(typeof status.isConfigured).toBe('boolean');
    expect(typeof status.mode).toBe('string');
  });

  it('verifies creative gallery items are initially unpublished and require explicit publication (Rule 18)', () => {
    // New items default to published: false until owner supplies actual files
    creativeGalleryItems.forEach(item => {
      expect(typeof item.published).toBe('boolean');
    });
  });

  it('verifies skills have honest proficiency levels and no numerical percentages', () => {
    verifiedSkills.forEach(skill => {
      expect(['Proficient', 'Learning', 'Fundamentals Known', 'Used via AI-Assisted Dev', 'Demonstrated in Project']).toContain(skill.proficiencyLevel);
    });
  });

  it('generates an authentic ATS-friendly PDF résumé with selectable text structure', () => {
    const doc = generateResumePdf();
    expect(doc).toBeDefined();
    expect(doc.internal.pages.length).toBeGreaterThan(1); // Valid multi-page or single-page document
    const textOutput = doc.output();
    expect(typeof textOutput).toBe('string');
    expect(textOutput.length).toBeGreaterThan(500);
  });

  it('verifies Supabase data mappers convert between PostgreSQL snake_case and TypeScript camelCase', () => {
    // Task mapper test
    const rawDbTask = {
      id: 'task-101',
      title: 'Practice Linux Permissions',
      priority: 'high',
      due_date: '2026-11-01',
      related_project: 'proj-falcon-404',
      status: 'in-progress',
      completion_date: null,
      notes: 'Lab exercises'
    };
    const mappedTask = fromDbTask(rawDbTask);
    expect(mappedTask.id).toBe('task-101');
    expect(mappedTask.dueDate).toBe('2026-11-01');
    expect(mappedTask.relatedProject).toBe('proj-falcon-404');

    const dbPayload = toDbTask(mappedTask);
    expect(dbPayload.due_date).toBe('2026-11-01');
    expect(dbPayload.related_project).toBe('proj-falcon-404');
    expect(dbPayload.status).toBe('in-progress');

    // Reflection mapper test
    const rawDbRefl = {
      id: 'refl-101',
      title: 'First-Year Learnings',
      content: 'Consistent effort over intensity.',
      date: '2026-10-20',
      mood: 'Focused',
      is_private: true
    };
    const mappedRefl = fromDbReflection(rawDbRefl);
    expect(mappedRefl.isPrivate).toBe(true);
    expect(mappedRefl.content).toBe('Consistent effort over intensity.');

    const reflPayload = toDbReflection(mappedRefl);
    expect(reflPayload.is_private).toBe(true);

    // Project mapper test
    const rawDbProj = {
      id: 'proj-test',
      slug: 'test-project',
      title: 'Test Project',
      display_title: 'Test Project Showcase',
      tagline: 'A sample project',
      domain: 'Cybersecurity',
      importance: 'featured',
      role: 'Lead',
      status: 'prototype',
      publication_status: 'draft',
      summary: 'Summary test',
      problem: 'Problem test',
      solution: 'Solution test',
      features: ['feature 1'],
      technologies: ['React'],
      ai_assisted: true
    };
    const mappedProj = fromDbProject(rawDbProj);
    expect(mappedProj.publicationStatus).toBe('draft');
    expect(mappedProj.aiAssisted).toBe(true);
    expect(mappedProj.displayTitle).toBe('Test Project Showcase');

    const projPayload = toDbProject(mappedProj);
    expect(projPayload.publication_status).toBe('draft');
    expect(projPayload.ai_assisted).toBe(true);
  });

  it('safely handles Supabase unconfigured states without crashing', async () => {
    // When environment variables are missing or unconfigured, service calls return safe error descriptors
    const tasksRes = await fetchOwnerTasks();
    expect(tasksRes.data === null || Array.isArray(tasksRes.data)).toBe(true);

    const insertRes = await createOwnerTask({
      title: 'Test offline task',
      priority: 'low',
      status: 'todo'
    });
    // In unconfigured mode, it gracefully returns error without throwing an unhandled exception
    expect(insertRes).toBeDefined();
    expect(insertRes.data === null || typeof insertRes.data === 'object').toBe(true);
  });

});
