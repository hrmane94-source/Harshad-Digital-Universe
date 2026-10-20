import React, { useState, useEffect } from 'react';
import { 
  Lock, 
  LogOut, 
  CheckCircle2, 
  AlertCircle, 
  Plus, 
  BookOpen, 
  CheckSquare, 
  Eye, 
  EyeOff, 
  Trash2, 
  Database, 
  ArrowRight
} from 'lucide-react';
import { supabase, isSupabaseConfigured, getSupabaseStatus } from '../lib/supabase';
import { portfolioSeedData } from '../data/portfolioSeed';
import type { 
  ProjectItem, 
  OwnerTask, 
  LearningItem, 
  PersonalGoal, 
  PersonalReflection, 
  PublicationStatus 
} from '../types/portfolio';

export const OwnerWorkspacePage: React.FC = () => {
  const statusInfo = getSupabaseStatus();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [userEmail, setUserEmail] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [authError, setAuthError] = useState<string>('');
  
  // Sign-in Form State
  const [emailInput] = useState<string>('hrmane94@gmail.com');
  const [passwordInput, setPasswordInput] = useState<string>('');
  const [isSigningIn, setIsSigningIn] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'projects' | 'tasks' | 'learning' | 'goals' | 'reflections' | 'system'>('overview');

  // Local state initialized with verified seed data
  const [projects, setProjects] = useState<ProjectItem[]>(portfolioSeedData.projects);
  const [tasks, setTasks] = useState<OwnerTask[]>(portfolioSeedData.tasks);
  const [learningItems] = useState<LearningItem[]>(portfolioSeedData.learningItems);
  const [goals] = useState<PersonalGoal[]>(portfolioSeedData.goals);
  const [reflections, setReflections] = useState<PersonalReflection[]>(portfolioSeedData.reflections);

  // Modal / Editor State for New Project Draft
  const [showNewProjectModal, setShowNewProjectModal] = useState<boolean>(false);
  const [newProjectTitle, setNewProjectTitle] = useState<string>('');
  const [newProjectTagline, setNewProjectTagline] = useState<string>('');
  const [newProjectDomain, setNewProjectDomain] = useState<string>('Cybersecurity');
  const [newProjectRole, setNewProjectRole] = useState<string>('Project Lead & Developer');
  const [newProjectProblem, setNewProjectProblem] = useState<string>('');
  const [newProjectSolution, setNewProjectSolution] = useState<string>('');

  // New Task Form
  const [newTaskTitle, setNewTaskTitle] = useState<string>('');
  const [newTaskPriority, setNewTaskPriority] = useState<'low' | 'medium' | 'high' | 'urgent'>('medium');

  // New Reflection Form
  const [newReflectionTitle, setNewReflectionTitle] = useState<string>('');
  const [newReflectionContent, setNewReflectionContent] = useState<string>('');
  const [newReflectionMood, setNewReflectionMood] = useState<string>('Focused');

  // Check Supabase session on mount
  useEffect(() => {
    const checkSession = async () => {
      if (isSupabaseConfigured() && supabase) {
        try {
          const { data: { session } } = await supabase.auth.getSession();
          if (session?.user?.email === 'hrmane94@gmail.com') {
            setIsAuthenticated(true);
            setUserEmail(session.user.email);
          }
        } catch (err: any) {
          console.error("Session check error:", err);
        }
      }
      setLoading(false);
    };

    checkSession();
  }, []);

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError('');
    setIsSigningIn(true);

    if (!isSupabaseConfigured() || !supabase) {
      setAuthError('Supabase is not configured yet. Please configure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in .env.');
      setIsSigningIn(false);
      return;
    }

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: emailInput,
        password: passwordInput,
      });

      if (error) {
        setAuthError(error.message);
      } else if (data.user) {
        if (data.user.email === 'hrmane94@gmail.com') {
          setIsAuthenticated(true);
          setUserEmail(data.user.email);
        } else {
          setAuthError('Unauthorized account. Only the verified owner (hrmane94@gmail.com) can access this workspace.');
          await supabase.auth.signOut();
        }
      }
    } catch (err: any) {
      setAuthError(err.message || 'Authentication failed');
    } finally {
      setIsSigningIn(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setAuthError('');
    if (!isSupabaseConfigured() || !supabase) {
      setAuthError('Supabase Google OAuth requires configuration in Supabase dashboard and .env.');
      return;
    }

    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: window.location.origin + '/owner'
        }
      });
      if (error) setAuthError(error.message);
    } catch (err: any) {
      setAuthError(err.message || 'Google OAuth failed');
    }
  };

  const handleSignOut = async () => {
    if (supabase) {
      await supabase.auth.signOut();
    }
    setIsAuthenticated(false);
    setUserEmail('');
  };

  // Toggle Publication status (Section 18)
  const togglePublication = (projectId: string) => {
    setProjects(prev => prev.map(p => {
      if (p.id === projectId) {
        const nextStatus: PublicationStatus = p.publicationStatus === 'published' ? 'draft' : 'published';
        return {
          ...p,
          publicationStatus: nextStatus,
          updatedAt: new Date().toISOString().split('T')[0]
        };
      }
      return p;
    }));
  };

  // Create Project Draft
  const handleCreateProjectDraft = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProjectTitle.trim()) return;

    const slug = newProjectTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const newProj: ProjectItem = {
      id: `proj-${Date.now()}`,
      slug: slug || `proj-${Date.now()}`,
      title: newProjectTitle,
      displayTitle: newProjectTitle,
      tagline: newProjectTagline || 'In-development engineering initiative',
      domain: newProjectDomain,
      importance: 'standard',
      role: newProjectRole,
      status: 'in-progress',
      publicationStatus: 'draft', // Private by default per Rule 18
      summary: newProjectProblem || 'Working draft summary.',
      problem: newProjectProblem || 'Problem definition in progress.',
      solution: newProjectSolution || 'Solution architecture in development.',
      features: ['Core architecture prototype'],
      technologies: ['TypeScript', 'React'],
      aiAssisted: true,
      limitations: ['Work in progress. Internal development draft.'],
      lessonsLearned: [],
      futureWork: [],
      coverArtwork: {
        type: 'cyber',
        accentColor: '#00f0ff',
        iconName: 'Sparkles'
      },
      assets: {
        cover: '',
        screenshots: [],
        architectureDiagram: '',
        demoVideo: '',
        certificate: ''
      },
      links: {
        repositoryUrl: '',
        liveDemoUrl: '',
        websiteUrl: '',
        documentationUrl: '',
        demoVideoUrl: '',
        presentationUrl: '',
        competitionUrl: ''
      },
      createdAt: new Date().toISOString().split('T')[0],
      updatedAt: new Date().toISOString().split('T')[0]
    };

    setProjects([newProj, ...projects]);
    setShowNewProjectModal(false);
    setNewProjectTitle('');
    setNewProjectTagline('');
    setNewProjectProblem('');
    setNewProjectSolution('');
  };

  // Add Task
  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;

    const task: OwnerTask = {
      id: `task-${Date.now()}`,
      title: newTaskTitle,
      priority: newTaskPriority,
      status: 'todo'
    };

    setTasks([task, ...tasks]);
    setNewTaskTitle('');
  };

  const toggleTaskStatus = (taskId: string) => {
    setTasks(prev => prev.map(t => {
      if (t.id === taskId) {
        const next = t.status === 'done' ? 'todo' : 'done';
        return { ...t, status: next };
      }
      return t;
    }));
  };

  const deleteTask = (taskId: string) => {
    setTasks(prev => prev.filter(t => t.id !== taskId));
  };

  // Add Reflection
  const handleAddReflection = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReflectionTitle.trim() || !newReflectionContent.trim()) return;

    const refl: PersonalReflection = {
      id: `refl-${Date.now()}`,
      title: newReflectionTitle,
      content: newReflectionContent,
      date: new Date().toISOString().split('T')[0],
      mood: newReflectionMood,
      isPrivate: true
    };

    setReflections([refl, ...reflections]);
    setNewReflectionTitle('');
    setNewReflectionContent('');
  };

  // If loading session
  if (loading) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span>Verifying security credentials...</span>
        </div>
      </div>
    );
  }

  // Unauthenticated Sign-in View (Rule 16 & 17)
  if (!isAuthenticated) {
    return (
      <div className="max-w-md mx-auto px-4 py-20 space-y-8">
        
        {/* Brand Lock Header */}
        <div className="text-center space-y-3">
          <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center text-cyan-400 mx-auto shadow-xl">
            <Lock className="w-8 h-8" />
          </div>
          <h1 className="text-2xl font-heading font-extrabold text-white">
            Private Personal Operating System
          </h1>
          <p className="text-xs text-slate-400 font-mono">
            Restricted exclusively to owner: <span className="text-cyan-300 font-semibold">{statusInfo.ownerEmail}</span>
          </p>
        </div>

        {/* Diagnostic Status Box */}
        <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2 text-xs">
          <div className="flex items-center justify-between font-mono">
            <span className="text-slate-400">Database Connection:</span>
            <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${statusInfo.isConfigured ? 'bg-emerald-950 text-emerald-300 border border-emerald-800' : 'bg-amber-950 text-amber-300 border border-amber-800'}`}>
              {statusInfo.isConfigured ? 'CONNECTED' : 'UNCONFIGURED (.env)'}
            </span>
          </div>
          {!statusInfo.isConfigured && (
            <p className="text-[11px] text-slate-400 leading-relaxed border-t border-slate-800/80 pt-2">
              To activate cloud authentication and database syncing, copy <code className="text-cyan-400 font-mono">.env.example</code> to <code className="text-cyan-400 font-mono">.env</code> and provide your Supabase credentials.
            </p>
          )}
        </div>

        {/* Authentication Form */}
        <form onSubmit={handleEmailSignIn} className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-5 shadow-2xl">
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-mono text-slate-300 mb-1">Owner Email</label>
              <input
                type="email"
                required
                disabled
                value={emailInput}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-400 text-xs font-mono"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-300 mb-1">Master Password</label>
              <input
                type="password"
                required
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                placeholder="Enter Supabase account password"
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs font-mono focus:border-cyan-400 focus:outline-none"
              />
            </div>
          </div>

          {authError && (
            <div className="p-3 rounded-xl bg-rose-950/80 border border-rose-800 text-rose-300 text-xs flex items-start gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{authError}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={isSigningIn}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all hover:scale-[1.02] cursor-pointer disabled:opacity-50"
          >
            {isSigningIn ? 'Authenticating...' : 'Sign In as Owner'}
          </button>

          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-xs font-medium transition-colors cursor-pointer"
          >
            Sign in with Google OAuth
          </button>
        </form>

      </div>
    );
  }

  // --- Authenticated Workspace View ---
  const publishedProjectsCount = projects.filter(p => p.publicationStatus === 'published').length;
  const draftProjectsCount = projects.filter(p => p.publicationStatus === 'draft' || p.publicationStatus === 'in-progress').length;
  const pendingTasksCount = tasks.filter(t => t.status !== 'done').length;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      
      {/* Top Banner */}
      <header className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-2xl">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <h1 className="text-xl sm:text-2xl font-heading font-extrabold text-white">
              Harshad&apos;s Personal Operating System
            </h1>
          </div>
          <p className="text-xs font-mono text-cyan-400">
            Authenticated Session: {userEmail || statusInfo.ownerEmail}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setShowNewProjectModal(true)}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-cyan-500 text-slate-950 text-xs font-bold hover:bg-cyan-400 transition-colors cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>New Project Draft</span>
          </button>

          <button
            type="button"
            onClick={handleSignOut}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-medium hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign Out</span>
          </button>
        </div>
      </header>

      {/* Workspace Tabs Navigation */}
      <div className="flex flex-wrap gap-2 border-b border-slate-800 pb-3">
        {[
          { id: 'overview', label: 'Overview & Metrics' },
          { id: 'projects', label: `Project Laboratory (${projects.length})` },
          { id: 'tasks', label: `Task Management (${pendingTasksCount})` },
          { id: 'learning', label: `Learning Tracker (${learningItems.length})` },
          { id: 'goals', label: `Personal Goals (${goals.length})` },
          { id: 'reflections', label: `Private Reflections (${reflections.length})` },
          { id: 'system', label: 'Backend & Storage Status' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer ${
              activeTab === tab.id
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700 hover:text-white'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* --- Tab 1: Overview & Metrics --- */}
      {activeTab === 'overview' && (
        <div className="space-y-8 animate-in fade-in duration-150">
          
          {/* Key Metric Tiles (Factual only, Rule 15: No fake visitor stats) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-1">
              <span className="text-xs font-mono text-slate-400">Published to Portfolio</span>
              <p className="text-3xl font-heading font-extrabold text-cyan-400">{publishedProjectsCount}</p>
              <span className="text-[11px] text-slate-400 font-mono">Live Case Studies</span>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-1">
              <span className="text-xs font-mono text-slate-400">Private Laboratory Drafts</span>
              <p className="text-3xl font-heading font-extrabold text-purple-400">{draftProjectsCount}</p>
              <span className="text-[11px] text-slate-400 font-mono">Unpublished Drafts</span>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-1">
              <span className="text-xs font-mono text-slate-400">Active Tasks Pending</span>
              <p className="text-3xl font-heading font-extrabold text-amber-400">{pendingTasksCount}</p>
              <span className="text-[11px] text-slate-400 font-mono">Personal Action Items</span>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-1">
              <span className="text-xs font-mono text-slate-400">Active Learning Tracks</span>
              <p className="text-3xl font-heading font-extrabold text-emerald-400">{learningItems.length}</p>
              <span className="text-[11px] text-slate-400 font-mono">Current Disciplines</span>
            </div>
          </div>

          {/* Quick Action Matrix */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Urgent Tasks Preview */}
            <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-heading font-bold text-white flex items-center gap-2">
                  <CheckSquare className="w-4 h-4 text-cyan-400" />
                  <span>Immediate Action Tasks</span>
                </h3>
                <button
                  type="button"
                  onClick={() => setActiveTab('tasks')}
                  className="text-xs font-mono text-cyan-400 hover:underline"
                >
                  Manage All →
                </button>
              </div>

              <div className="space-y-2">
                {tasks.slice(0, 4).map((task) => (
                  <div
                    key={task.id}
                    onClick={() => toggleTaskStatus(task.id)}
                    className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-center justify-between gap-3 cursor-pointer hover:border-slate-700"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className={`w-3.5 h-3.5 rounded border flex items-center justify-center ${task.status === 'done' ? 'bg-cyan-500 border-cyan-400 text-slate-950' : 'border-slate-600'}`}>
                        {task.status === 'done' && <CheckCircle2 className="w-3 h-3" />}
                      </span>
                      <span className={`text-xs ${task.status === 'done' ? 'line-through text-slate-400' : 'text-slate-200'}`}>
                        {task.title}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400 capitalize">
                      {task.priority}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Active Learning Summary */}
            <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-heading font-bold text-white flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-purple-400" />
                  <span>Active Learning Focus</span>
                </h3>
                <button
                  type="button"
                  onClick={() => setActiveTab('learning')}
                  className="text-xs font-mono text-purple-400 hover:underline"
                >
                  View Details →
                </button>
              </div>

              <div className="space-y-3">
                {learningItems.map((item) => (
                  <div key={item.id} className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-white">{item.title}</span>
                      <span className="text-[10px] font-mono text-cyan-400 capitalize">{item.status}</span>
                    </div>
                    <p className="text-[11px] text-slate-400 font-mono">Next: {item.nextAction}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      )}

      {/* --- Tab 2: Project Laboratory --- */}
      {activeTab === 'projects' && (
        <div className="space-y-6 animate-in fade-in duration-150">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-heading font-bold text-white">Project Laboratory &amp; Publication Controls</h2>
              <p className="text-xs text-slate-400">Manage case studies, attach media, maintain private notes, and toggle public visibility.</p>
            </div>
            <button
              type="button"
              onClick={() => setShowNewProjectModal(true)}
              className="px-4 py-2 rounded-xl bg-cyan-500 text-slate-950 text-xs font-bold hover:bg-cyan-400 transition-colors"
            >
              + Create Draft
            </button>
          </div>

          <div className="space-y-4">
            {projects.map((proj) => (
              <div
                key={proj.id}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-white text-base">{proj.displayTitle}</span>
                    <span className="text-xs font-mono text-cyan-400">/{proj.slug}</span>
                    <span className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded font-bold ${
                      proj.publicationStatus === 'published' 
                        ? 'bg-emerald-950 text-emerald-300 border border-emerald-700' 
                        : 'bg-amber-950 text-amber-300 border border-amber-700'
                    }`}>
                      {proj.publicationStatus}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 line-clamp-1">{proj.tagline}</p>
                  <div className="text-[11px] font-mono text-slate-400">
                    Domain: {proj.domain} • Role: {proj.role}
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <button
                    type="button"
                    onClick={() => togglePublication(proj.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-mono font-semibold border transition-colors cursor-pointer flex items-center gap-1.5 ${
                      proj.publicationStatus === 'published'
                        ? 'bg-slate-800 text-slate-300 border-slate-700 hover:text-white'
                        : 'bg-emerald-600 text-white border-emerald-500 hover:bg-emerald-500'
                    }`}
                  >
                    {proj.publicationStatus === 'published' ? (
                      <>
                        <EyeOff className="w-3.5 h-3.5" />
                        <span>Unpublish</span>
                      </>
                    ) : (
                      <>
                        <Eye className="w-3.5 h-3.5" />
                        <span>Publish to Portfolio</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`/projects/${proj.slug}`}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 hover:text-white text-xs"
                    title="Preview Case Study"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* --- Tab 3: Tasks --- */}
      {activeTab === 'tasks' && (
        <div className="space-y-6 animate-in fade-in duration-150">
          <form onSubmit={handleAddTask} className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col sm:flex-row items-center gap-3">
            <input
              type="text"
              required
              value={newTaskTitle}
              onChange={(e) => setNewTaskTitle(e.target.value)}
              placeholder="What needs to be done next? (e.g. Study Linux network sockets)"
              className="w-full px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs font-mono focus:border-cyan-400 focus:outline-none"
            />
            <select
              value={newTaskPriority}
              onChange={(e) => setNewTaskPriority(e.target.value as any)}
              className="px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 text-xs font-mono"
            >
              <option value="low">Low Priority</option>
              <option value="medium">Medium Priority</option>
              <option value="high">High Priority</option>
              <option value="urgent">Urgent</option>
            </select>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-cyan-500 text-slate-950 text-xs font-bold shrink-0 hover:bg-cyan-400 cursor-pointer"
            >
              Add Task
            </button>
          </form>

          <div className="space-y-2">
            {tasks.map((task) => (
              <div
                key={task.id}
                className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between gap-3"
              >
                <div 
                  onClick={() => toggleTaskStatus(task.id)}
                  className="flex items-center gap-3 cursor-pointer flex-1"
                >
                  <span className={`w-4 h-4 rounded border flex items-center justify-center ${task.status === 'done' ? 'bg-cyan-500 border-cyan-400 text-slate-950' : 'border-slate-600'}`}>
                    {task.status === 'done' && <CheckCircle2 className="w-3.5 h-3.5" />}
                  </span>
                  <div>
                    <span className={`text-xs ${task.status === 'done' ? 'line-through text-slate-400' : 'text-slate-200'}`}>
                      {task.title}
                    </span>
                    {task.notes && <p className="text-[11px] text-slate-400">{task.notes}</p>}
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-400 capitalize">
                    {task.priority}
                  </span>
                  <button
                    type="button"
                    onClick={() => deleteTask(task.id)}
                    className="p-1.5 text-slate-400 hover:text-rose-400"
                    title="Delete Task"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* --- Tab 4: Learning Tracker --- */}
      {activeTab === 'learning' && (
        <div className="space-y-6 animate-in fade-in duration-150">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {learningItems.map((item) => (
              <div key={item.id} className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-purple-400 uppercase font-semibold">{item.category}</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 text-cyan-300 border border-slate-800 capitalize">
                    {item.status}
                  </span>
                </div>
                <h3 className="text-base font-heading font-bold text-white">{item.title}</h3>
                <p className="text-xs text-slate-300">{item.notes}</p>
                <div className="pt-2 border-t border-slate-800/80 text-[11px] font-mono text-slate-400 space-y-1">
                  <div><strong>Resources:</strong> {item.resources}</div>
                  <div><strong>Next Action:</strong> {item.nextAction}</div>
                  <div><strong>Target:</strong> {item.flexibleWeeklyTarget}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* --- Tab 5: Personal Goals --- */}
      {activeTab === 'goals' && (
        <div className="space-y-6 animate-in fade-in duration-150">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {goals.map((g) => (
              <div key={g.id} className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-cyan-400">
                  <span className="uppercase">{g.category}</span>
                  <span>{g.targetDate}</span>
                </div>
                <h3 className="text-sm font-heading font-bold text-white">{g.title}</h3>
                <p className="text-xs text-slate-300">{g.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* --- Tab 6: Private Reflections (Strictly private) --- */}
      {activeTab === 'reflections' && (
        <div className="space-y-6 animate-in fade-in duration-150">
          <div className="p-4 rounded-xl bg-purple-950/30 border border-purple-800/40 text-xs text-purple-200">
            🔒 <strong>Strictly Private:</strong> Personal reflections are never exposed to public visitors or published routes.
          </div>

          <form onSubmit={handleAddReflection} className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
            <h3 className="text-sm font-heading font-bold text-white">Record Private Journal Entry</h3>
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <input
                type="text"
                required
                value={newReflectionTitle}
                onChange={(e) => setNewReflectionTitle(e.target.value)}
                placeholder="Title of reflection"
                className="w-full sm:flex-1 px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs font-mono focus:border-cyan-400 focus:outline-none"
              />
              <select
                value={newReflectionMood}
                onChange={(e) => setNewReflectionMood(e.target.value)}
                className="w-full sm:w-auto px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-xs font-mono"
              >
                <option value="Focused">Focused</option>
                <option value="Optimistic">Optimistic</option>
                <option value="Challenged">Challenged</option>
                <option value="Determined">Determined</option>
                <option value="Reflective">Reflective</option>
              </select>
            </div>
            <textarea
              required
              rows={3}
              value={newReflectionContent}
              onChange={(e) => setNewReflectionContent(e.target.value)}
              placeholder="Record your thoughts, lessons, or honest reflections..."
              className="w-full px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs font-mono focus:border-cyan-400 focus:outline-none resize-none"
            />
            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-purple-600 text-white text-xs font-bold hover:bg-purple-500 cursor-pointer"
            >
              Save Private Reflection
            </button>
          </form>

          <div className="space-y-4">
            {reflections.map((refl) => (
              <div key={refl.id} className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="text-purple-300">{refl.date}</span>
                  <span>Mood: {refl.mood}</span>
                </div>
                <h4 className="text-sm font-bold text-white">{refl.title}</h4>
                <p className="text-xs text-slate-300 leading-relaxed whitespace-pre-wrap">{refl.content}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* --- Tab 7: System & Storage Status --- */}
      {activeTab === 'system' && (
        <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-6">
          <h2 className="text-xl font-heading font-bold text-white flex items-center gap-2">
            <Database className="w-5 h-5 text-cyan-400" />
            <span>Database Architecture &amp; RLS Policies</span>
          </h2>

          <div className="space-y-3 text-xs font-mono">
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
              <span className="text-cyan-400 font-bold block">Target Supabase PostgreSQL Schema</span>
              <p className="text-slate-400">Schema file ready at <code className="text-white">supabase/schema.sql</code></p>
              <ul className="text-slate-300 space-y-0.5 pt-2">
                <li>• <strong className="text-white">portfolio_entries:</strong> Public read published only; owner full CRUD</li>
                <li>• <strong className="text-white">owner_tasks:</strong> Strictly owner restricted</li>
                <li>• <strong className="text-white">learning_items:</strong> Strictly owner restricted</li>
                <li>• <strong className="text-white">reflections:</strong> Strictly owner restricted (no public policy)</li>
                <li>• <strong className="text-white">media_assets:</strong> Public read published only</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
              <span className="text-purple-400 font-bold block">Asset Directories (Local &amp; Bucket)</span>
              <p className="text-slate-400">Local asset directories populated with <code className="text-white">.gitkeep</code> in <code className="text-white">public/assets/</code></p>
            </div>
          </div>
        </div>
      )}

      {/* Modal: New Project Draft */}
      {showNewProjectModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="max-w-xl w-full bg-slate-900 border border-slate-700 rounded-3xl p-6 sm:p-8 space-y-5 shadow-2xl">
            <h3 className="text-xl font-heading font-bold text-white">Create New Project Draft</h3>
            
            <form onSubmit={handleCreateProjectDraft} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">Project Title *</label>
                <input
                  type="text"
                  required
                  value={newProjectTitle}
                  onChange={(e) => setNewProjectTitle(e.target.value)}
                  placeholder="e.g. SentriGate"
                  className="w-full px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs font-mono focus:border-cyan-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">Tagline</label>
                <input
                  type="text"
                  value={newProjectTagline}
                  onChange={(e) => setNewProjectTagline(e.target.value)}
                  placeholder="e.g. Automated CI/CD Secret Scanning Utility"
                  className="w-full px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs font-mono focus:border-cyan-400 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">Domain</label>
                  <input
                    type="text"
                    value={newProjectDomain}
                    onChange={(e) => setNewProjectDomain(e.target.value)}
                    className="w-full px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs font-mono focus:border-cyan-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">Role</label>
                  <input
                    type="text"
                    value={newProjectRole}
                    onChange={(e) => setNewProjectRole(e.target.value)}
                    className="w-full px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs font-mono focus:border-cyan-400 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">Problem Stated</label>
                <textarea
                  rows={2}
                  value={newProjectProblem}
                  onChange={(e) => setNewProjectProblem(e.target.value)}
                  placeholder="What friction does this project address?"
                  className="w-full px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs font-mono focus:border-cyan-400 focus:outline-none resize-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">Solution Description</label>
                <textarea
                  rows={2}
                  value={newProjectSolution}
                  onChange={(e) => setNewProjectSolution(e.target.value)}
                  placeholder="How does your application solve it?"
                  className="w-full px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs font-mono focus:border-cyan-400 focus:outline-none resize-none"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setShowNewProjectModal(false)}
                  className="px-4 py-2 rounded-xl text-xs font-mono text-slate-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-cyan-500 text-slate-950 text-xs font-bold hover:bg-cyan-400 cursor-pointer"
                >
                  Save as Private Draft
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
