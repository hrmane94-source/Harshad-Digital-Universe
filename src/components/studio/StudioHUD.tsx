import React, { useEffect, useState } from 'react';

interface StudioSection {
  id: string;
  num: string;
  label: string;
}

const SECTIONS: StudioSection[] = [
  { id: 'chapter-00', num: '01', label: 'INTRODUCTION' },
  { id: 'chapter-01', num: '02', label: 'PHILOSOPHY' },
  { id: 'chapter-02', num: '03', label: 'SELECTED WORK' },
  { id: 'chapter-03', num: '04', label: 'CHRONOLOGY' },
  { id: 'chapter-04', num: '05', label: 'VISUAL ESSAY' },
  { id: 'chapter-05', num: '06', label: 'ARCHIVE' },
  { id: 'chapter-06', num: '07', label: 'CURIO AI' },
  { id: 'chapter-07', num: '08', label: 'DISPATCH' },
];

export const StudioHUD: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight * 0.35;
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTIONS[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveIndex(i);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const jumpTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const current = SECTIONS[activeIndex] || SECTIONS[0];

  return (
    <aside 
      className="hidden xl:flex fixed left-8 bottom-8 z-30 flex-col gap-2 pointer-events-auto select-none"
      aria-label="Studio Section Navigator"
    >
      {/* Current Active Section Badge */}
      <div className="px-3.5 py-2 rounded-xl bg-surface/90 dark:bg-card/90 backdrop-blur-md border border-border-hairline shadow-xl flex items-center gap-2.5 text-[11px] font-mono">
        <span className="w-2 h-2 rounded-full bg-cobalt animate-pulse shadow-[0_0_8px_rgba(49,94,235,0.7)]" />
        <span className="font-bold text-ink">SEC {current.num}</span>
        <span className="text-muted/40">//</span>
        <span className="text-muted tracking-wide font-medium">{current.label}</span>
      </div>

      {/* Mini Segment Progress Dots */}
      <div className="p-1.5 rounded-lg bg-surface/80 dark:bg-card/80 backdrop-blur-md border border-border-hairline flex items-center gap-1.5 w-fit shadow-xs">
        {SECTIONS.map((sec, idx) => (
          <button
            key={sec.id}
            type="button"
            onClick={() => jumpTo(sec.id)}
            title={`Jump to ${sec.num} — ${sec.label}`}
            aria-label={`Jump to ${sec.num} — ${sec.label}`}
            className={`transition-all cursor-pointer rounded-full ${
              activeIndex === idx
                ? 'w-5 h-2 bg-cobalt shadow-[0_0_6px_rgba(49,94,235,0.6)]'
                : 'w-2 h-2 bg-subtle hover:bg-cobalt/40'
            }`}
          />
        ))}
      </div>
    </aside>
  );
};
