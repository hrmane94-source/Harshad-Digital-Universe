import { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { SiteHeader } from './components/layout/SiteHeader';
import { SiteFooter } from './components/layout/SiteFooter';
import { ScrollProgressBar } from './components/ui/ScrollProgressBar';
import { CurioAssistant } from './components/ai/CurioAssistant';
import { HomePage } from './pages/HomePage';

// Lazy-loaded routes for code-splitting and rapid initial load
const AboutPage = lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage').then(m => ({ default: m.ProjectsPage })));
const ProjectDetailPage = lazy(() => import('./pages/ProjectDetailPage').then(m => ({ default: m.ProjectDetailPage })));
const EducationPage = lazy(() => import('./pages/EducationPage').then(m => ({ default: m.EducationPage })));
const JourneyPage = lazy(() => import('./pages/JourneyPage').then(m => ({ default: m.JourneyPage })));
const AchievementsPage = lazy(() => import('./pages/AchievementsPage').then(m => ({ default: m.AchievementsPage })));
const EventsPage = lazy(() => import('./pages/EventsPage').then(m => ({ default: m.EventsPage })));
const SkillsPage = lazy(() => import('./pages/SkillsPage').then(m => ({ default: m.SkillsPage })));
const CareerRoadmapPage = lazy(() => import('./pages/CareerRoadmapPage').then(m => ({ default: m.CareerRoadmapPage })));
const CreativePage = lazy(() => import('./pages/CreativePage').then(m => ({ default: m.CreativePage })));
const ExplorationsPage = lazy(() => import('./pages/ExplorationsPage').then(m => ({ default: m.ExplorationsPage })));
const GoalsPage = lazy(() => import('./pages/GoalsPage').then(m => ({ default: m.GoalsPage })));
const ResumePage = lazy(() => import('./pages/ResumePage').then(m => ({ default: m.ResumePage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));
const OwnerWorkspacePage = lazy(() => import('./pages/OwnerWorkspacePage').then(m => ({ default: m.OwnerWorkspacePage })));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then(m => ({ default: m.NotFoundPage })));

function RouteFallback() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center">
      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-black/[0.08] dark:border-white/[0.1] text-xs font-mono text-cobalt shadow-xs">
        <span className="w-2 h-2 rounded-full bg-cobalt animate-ping" />
        <span>Loading spatial coordinates...</span>
      </div>
    </div>
  );
}

import { StudioIntroAnimation } from './components/ui/StudioIntroAnimation';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const id = hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, hash]);

  return null;
}

export function App() {
  return (
    <ThemeProvider>
      <StudioIntroAnimation />
      <BrowserRouter>
        <ScrollToTop />
        <ScrollProgressBar />
        <div className="min-h-screen flex flex-col bg-paper text-ink transition-colors duration-200 selection:bg-cobalt/20 selection:text-cobalt relative">
          <SiteHeader />
          <main className="flex-1">
            <Suspense fallback={<RouteFallback />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/education" element={<EducationPage />} />
                <Route path="/journey" element={<JourneyPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/projects/:slug" element={<ProjectDetailPage />} />
                <Route path="/achievements" element={<AchievementsPage />} />
                <Route path="/events" element={<EventsPage />} />
                <Route path="/skills" element={<SkillsPage />} />
                <Route path="/roadmap" element={<CareerRoadmapPage />} />
                <Route path="/career-roadmap" element={<CareerRoadmapPage />} />
                <Route path="/creative" element={<CreativePage />} />
                <Route path="/explorations" element={<ExplorationsPage />} />
                <Route path="/goals" element={<GoalsPage />} />
                <Route path="/resume" element={<ResumePage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/owner" element={<OwnerWorkspacePage />} />
                <Route path="/dashboard" element={<OwnerWorkspacePage />} />
                <Route path="/404" element={<NotFoundPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Suspense>
          </main>
          <SiteFooter />

          {/* Integrated Personal AI Assistant: CURIO */}
          <CurioAssistant />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
