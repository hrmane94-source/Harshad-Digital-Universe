import React, { useEffect, useState } from 'react';

interface Chapter {
  id: string;
  number: string;
  title: string;
}

const CHAPTERS: Chapter[] = [
  { id: 'chapter-00', number: '00', title: 'PROLOGUE' },
  { id: 'chapter-01', number: '01', title: 'MANIFESTO' },
  { id: 'chapter-02', number: '02', title: 'PROJECT EXHIBITION' },
  { id: 'chapter-03', number: '03', title: 'JOURNEY' },
  { id: 'chapter-04', number: '04', title: 'CREATIVE WORLD' },
  { id: 'chapter-05', number: '05', title: 'ARCHIVE' },
  { id: 'chapter-06', number: '06', title: 'CURIO' },
  { id: 'chapter-07', number: '07', title: 'FINALE' },
];

export const ExhibitionHUD: React.FC = () => {
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight * 0.35;
      for (let i = CHAPTERS.length - 1; i >= 0; i--) {
        const el = document.getElementById(CHAPTERS[i].id);
        if (el && el.offsetTop <= scrollY) {
          setActiveChapterIndex(i);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToChapter = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const current = CHAPTERS[activeChapterIndex] || CHAPTERS[0];

  return (
    <aside 
      className="hidden xl:flex fixed left-8 bottom-8 z-30 flex-col gap-2 pointer-events-auto select-none"
      aria-label="Exhibition Chapter Navigator"
    >
      {/* Current Chapter Pill */}
      <div className="px-3.5 py-2 rounded-2xl bg-surface/90 backdrop-blur-md border border-black/[0.08] dark:border-white/[0.12] shadow-lg flex items-center gap-2.5 text-[11px] font-mono">
        <span className="w-2 h-2 rounded-full bg-cobalt animate-pulse" />
        <span className="font-bold text-ink">CHAPTER {current.number}</span>
        <span className="text-muted tracking-widest">//</span>
        <span className="text-muted tracking-wider">{current.title}</span>
      </div>

      {/* Mini Chapter Dot Jumper */}
      <div className="p-1.5 rounded-xl bg-surface/80 backdrop-blur-md border border-black/[0.06] dark:border-white/[0.08] flex items-center gap-1.5 w-fit shadow-xs">
        {CHAPTERS.map((chap, idx) => (
          <button
            key={chap.id}
            type="button"
            onClick={() => scrollToChapter(chap.id)}
            title={`Jump to Chapter ${chap.number}: ${chap.title}`}
            aria-label={`Jump to Chapter ${chap.number}: ${chap.title}`}
            className={`transition-all cursor-pointer rounded-full ${
              activeChapterIndex === idx
                ? 'w-5 h-2 bg-cobalt'
                : 'w-2 h-2 bg-black/20 dark:bg-white/20 hover:bg-black/40 dark:hover:bg-white/40'
            }`}
          />
        ))}
      </div>
    </aside>
  );
};
