import { supabase, isSupabaseConfigured } from './supabase';
import type { 
  ProjectItem, 
  OwnerTask, 
  LearningItem, 
  PersonalGoal, 
  PersonalReflection, 
  PublicationStatus 
} from '../types/portfolio';

// ============================================================
// DATA MAPPERS (Database snake_case <-> Application camelCase)
// ============================================================

export const fromDbTask = (row: any): OwnerTask => ({
  id: row.id,
  title: row.title,
  priority: row.priority || 'medium',
  dueDate: row.due_date || undefined,
  relatedProject: row.related_project || undefined,
  status: row.status || 'todo',
  completionDate: row.completion_date || undefined,
  notes: row.notes || undefined,
});

export const toDbTask = (task: Partial<OwnerTask>) => ({
  title: task.title,
  priority: task.priority || 'medium',
  due_date: task.dueDate || null,
  related_project: task.relatedProject || null,
  status: task.status || 'todo',
  completion_date: task.completionDate || null,
  notes: task.notes || null,
  updated_at: new Date().toISOString(),
});

export const fromDbReflection = (row: any): PersonalReflection => ({
  id: row.id,
  title: row.title,
  content: row.content,
  date: row.date || new Date().toISOString().split('T')[0],
  mood: row.mood || undefined,
  tags: row.tags || undefined,
  isPrivate: row.is_private ?? true,
});

export const toDbReflection = (refl: Partial<PersonalReflection>) => ({
  title: refl.title,
  content: refl.content,
  date: refl.date || new Date().toISOString().split('T')[0],
  mood: refl.mood || null,
  tags: refl.tags || null,
  is_private: true,
});

export const fromDbProject = (row: any): ProjectItem => ({
  id: row.id,
  slug: row.slug,
  title: row.title,
  displayTitle: row.display_title || row.title,
  tagline: row.tagline || '',
  domain: row.domain || 'Engineering',
  importance: row.importance || 'standard',
  role: row.role || 'Developer',
  teamContext: row.team_context || undefined,
  status: row.status || 'in-progress',
  publicationStatus: row.publication_status || 'draft',
  summary: row.summary || '',
  problem: row.problem || '',
  solution: row.solution || '',
  features: Array.isArray(row.features) ? row.features : [],
  technologies: Array.isArray(row.technologies) ? row.technologies : [],
  aiAssisted: Boolean(row.ai_assisted),
  competition: row.competition || undefined,
  limitations: Array.isArray(row.limitations) ? row.limitations : [],
  lessonsLearned: Array.isArray(row.lessons_learned) ? row.lessons_learned : [],
  futureWork: Array.isArray(row.future_work) ? row.future_work : [],
  coverArtwork: row.cover_artwork || { type: 'abstract', accentColor: '#00f0ff', iconName: 'Sparkles' },
  assets: row.assets || { cover: '', screenshots: [] },
  links: row.links || { repositoryUrl: '', liveDemoUrl: '', websiteUrl: '', documentationUrl: '', demoVideoUrl: '', presentationUrl: '', competitionUrl: '' },
  privateNotes: row.private_notes || undefined,
  createdAt: row.created_at || new Date().toISOString().split('T')[0],
  updatedAt: row.updated_at || new Date().toISOString().split('T')[0],
});

export const toDbProject = (proj: Partial<ProjectItem>) => ({
  slug: proj.slug,
  title: proj.title,
  display_title: proj.displayTitle || proj.title,
  tagline: proj.tagline || '',
  domain: proj.domain || 'Engineering',
  importance: proj.importance || 'standard',
  role: proj.role || 'Developer',
  team_context: proj.teamContext || null,
  status: proj.status || 'in-progress',
  publication_status: proj.publicationStatus || 'draft',
  summary: proj.summary || '',
  problem: proj.problem || '',
  solution: proj.solution || '',
  features: proj.features || [],
  technologies: proj.technologies || [],
  ai_assisted: Boolean(proj.aiAssisted),
  competition: proj.competition || null,
  limitations: proj.limitations || [],
  lessons_learned: proj.lessonsLearned || [],
  future_work: proj.futureWork || [],
  cover_artwork: proj.coverArtwork || {},
  assets: proj.assets || {},
  links: proj.links || {},
  private_notes: proj.privateNotes || null,
  updated_at: new Date().toISOString(),
});

export const fromDbLearning = (row: any): LearningItem => ({
  id: row.id,
  title: row.title,
  category: row.category,
  status: row.status,
  resources: row.resources || '',
  notes: row.notes || '',
  nextAction: row.next_action || '',
  flexibleWeeklyTarget: row.flexible_weekly_target || '',
  updatedAt: row.updated_at || new Date().toISOString().split('T')[0],
});

export const fromDbGoal = (row: any): PersonalGoal => ({
  id: row.id,
  category: row.category,
  title: row.title,
  description: row.description,
  targetDate: row.target_date || undefined,
  status: row.status,
});

// ============================================================
// DATA ACCESS & PERSISTENCE SERVICES
// ============================================================

/**
 * Fetch all owner tasks from Supabase
 */
export const fetchOwnerTasks = async (): Promise<{ data: OwnerTask[] | null; error: string | null }> => {
  if (!isSupabaseConfigured() || !supabase) {
    return { data: null, error: 'Supabase unconfigured' };
  }

  try {
    const { data, error } = await supabase
      .from('owner_tasks')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      return { data: null, error: error.message };
    }

    return { data: (data || []).map(fromDbTask), error: null };
  } catch (err: any) {
    return { data: null, error: err.message || 'Failed to fetch tasks' };
  }
};

/**
 * Insert a new task into Supabase
 */
export const createOwnerTask = async (task: Omit<OwnerTask, 'id'>): Promise<{ data: OwnerTask | null; error: string | null }> => {
  if (!isSupabaseConfigured() || !supabase) {
    return { data: null, error: 'Supabase unconfigured' };
  }

  try {
    const dbPayload = toDbTask(task);
    const { data, error } = await supabase
      .from('owner_tasks')
      .insert([dbPayload])
      .select()
      .single();

    if (error) {
      return { data: null, error: error.message };
    }

    return { data: fromDbTask(data), error: null };
  } catch (err: any) {
    return { data: null, error: err.message || 'Failed to insert task' };
  }
};

/**
 * Update an existing task in Supabase
 */
export const updateOwnerTask = async (id: string, updates: Partial<OwnerTask>): Promise<{ success: boolean; error: string | null }> => {
  if (!isSupabaseConfigured() || !supabase) {
    return { success: false, error: 'Supabase unconfigured' };
  }

  try {
    const dbPayload = toDbTask(updates);
    const { error } = await supabase
      .from('owner_tasks')
      .update(dbPayload)
      .eq('id', id);

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true, error: null };
  } catch (err: any) {
    return { success: false, error: err.message || 'Failed to update task' };
  }
};

/**
 * Delete a task from Supabase
 */
export const deleteOwnerTask = async (id: string): Promise<{ success: boolean; error: string | null }> => {
  if (!isSupabaseConfigured() || !supabase) {
    return { success: false, error: 'Supabase unconfigured' };
  }

  try {
    const { error } = await supabase
      .from('owner_tasks')
      .delete()
      .eq('id', id);

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true, error: null };
  } catch (err: any) {
    return { success: false, error: err.message || 'Failed to delete task' };
  }
};

/**
 * Fetch reflections from Supabase
 */
export const fetchReflections = async (): Promise<{ data: PersonalReflection[] | null; error: string | null }> => {
  if (!isSupabaseConfigured() || !supabase) {
    return { data: null, error: 'Supabase unconfigured' };
  }

  try {
    const { data, error } = await supabase
      .from('reflections')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      return { data: null, error: error.message };
    }

    return { data: (data || []).map(fromDbReflection), error: null };
  } catch (err: any) {
    return { data: null, error: err.message || 'Failed to fetch reflections' };
  }
};

/**
 * Insert a reflection into Supabase
 */
export const createReflection = async (refl: Omit<PersonalReflection, 'id'>): Promise<{ data: PersonalReflection | null; error: string | null }> => {
  if (!isSupabaseConfigured() || !supabase) {
    return { data: null, error: 'Supabase unconfigured' };
  }

  try {
    const dbPayload = toDbReflection(refl);
    const { data, error } = await supabase
      .from('reflections')
      .insert([dbPayload])
      .select()
      .single();

    if (error) {
      return { data: null, error: error.message };
    }

    return { data: fromDbReflection(data), error: null };
  } catch (err: any) {
    return { data: null, error: err.message || 'Failed to save reflection' };
  }
};

/**
 * Fetch portfolio projects from Supabase
 */
export const fetchPortfolioProjects = async (): Promise<{ data: ProjectItem[] | null; error: string | null }> => {
  if (!isSupabaseConfigured() || !supabase) {
    return { data: null, error: 'Supabase unconfigured' };
  }

  try {
    const { data, error } = await supabase
      .from('portfolio_entries')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      return { data: null, error: error.message };
    }

    return { data: (data || []).map(fromDbProject), error: null };
  } catch (err: any) {
    return { data: null, error: err.message || 'Failed to fetch projects' };
  }
};

/**
 * Toggle or update publication status of a project in Supabase
 */
export const updateProjectPublicationStatus = async (
  projectIdOrSlug: string, 
  newStatus: PublicationStatus
): Promise<{ success: boolean; error: string | null }> => {
  if (!isSupabaseConfigured() || !supabase) {
    return { success: false, error: 'Supabase unconfigured' };
  }

  try {
    const { error } = await supabase
      .from('portfolio_entries')
      .update({ publication_status: newStatus, updated_at: new Date().toISOString() })
      .or(`id.eq.${projectIdOrSlug},slug.eq.${projectIdOrSlug}`);

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true, error: null };
  } catch (err: any) {
    return { success: false, error: err.message || 'Failed to update publication status' };
  }
};

/**
 * Create a new project draft in Supabase
 */
export const createProjectDraft = async (proj: Partial<ProjectItem>): Promise<{ data: ProjectItem | null; error: string | null }> => {
  if (!isSupabaseConfigured() || !supabase) {
    return { data: null, error: 'Supabase unconfigured' };
  }

  try {
    const dbPayload = toDbProject(proj);
    const { data, error } = await supabase
      .from('portfolio_entries')
      .insert([dbPayload])
      .select()
      .single();

    if (error) {
      return { data: null, error: error.message };
    }

    return { data: fromDbProject(data), error: null };
  } catch (err: any) {
    return { data: null, error: err.message || 'Failed to create project draft' };
  }
};

/**
 * Seed initial verified items to Supabase if database is empty
 */
export const seedInitialDatabase = async (initialData: {
  projects: ProjectItem[];
  tasks: OwnerTask[];
  learningItems: LearningItem[];
  goals: PersonalGoal[];
  reflections: PersonalReflection[];
}): Promise<{ success: boolean; message: string }> => {
  if (!isSupabaseConfigured() || !supabase) {
    return { success: false, message: 'Supabase is not configured' };
  }

  try {
    // 1. Seed tasks
    const { data: existingTasks } = await supabase.from('owner_tasks').select('id').limit(1);
    if (!existingTasks || existingTasks.length === 0) {
      const taskPayloads = initialData.tasks.map(t => ({
        id: t.id,
        title: t.title,
        priority: t.priority,
        status: t.status,
        notes: t.notes || null,
        due_date: t.dueDate || null,
        related_project: t.relatedProject || null,
      }));
      await supabase.from('owner_tasks').insert(taskPayloads);
    }

    // 2. Seed projects
    const { data: existingProjects } = await supabase.from('portfolio_entries').select('id').limit(1);
    if (!existingProjects || existingProjects.length === 0) {
      const projectPayloads = initialData.projects.map(p => ({
        id: p.id,
        slug: p.slug,
        title: p.title,
        display_title: p.displayTitle,
        tagline: p.tagline,
        domain: p.domain,
        importance: p.importance,
        role: p.role,
        team_context: p.teamContext || null,
        status: p.status,
        publication_status: p.publicationStatus,
        summary: p.summary,
        problem: p.problem,
        solution: p.solution,
        features: p.features,
        technologies: p.technologies,
        ai_assisted: p.aiAssisted,
        competition: p.competition || null,
        limitations: p.limitations,
        lessons_learned: p.lessonsLearned,
        future_work: p.futureWork,
        cover_artwork: p.coverArtwork,
        assets: p.assets,
        links: p.links,
        private_notes: p.privateNotes || null,
      }));
      await supabase.from('portfolio_entries').insert(projectPayloads);
    }

    // 3. Seed reflections
    const { data: existingReflections } = await supabase.from('reflections').select('id').limit(1);
    if (!existingReflections || existingReflections.length === 0) {
      const reflectionPayloads = initialData.reflections.map(r => ({
        id: r.id,
        title: r.title,
        content: r.content,
        date: r.date,
        mood: r.mood || null,
        is_private: true,
      }));
      await supabase.from('reflections').insert(reflectionPayloads);
    }

    return { success: true, message: 'Database successfully initialized with verified baseline seed data!' };
  } catch (err: any) {
    return { success: false, message: err.message || 'Seeding failed' };
  }
};
