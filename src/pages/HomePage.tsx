import React from 'react';
import { ExhibitionHUD } from '../components/exhibition/ExhibitionHUD';
import { IntroChapter } from '../components/exhibition/IntroChapter';
import { ManifestoChapter } from '../components/exhibition/ManifestoChapter';
import { ProjectExhibitionChapter } from '../components/exhibition/ProjectExhibitionChapter';
import { JourneyChapter } from '../components/exhibition/JourneyChapter';
import { CreativeChapter } from '../components/exhibition/CreativeChapter';
import { AchievementArchiveChapter } from '../components/exhibition/AchievementArchiveChapter';
import { CurioChapter } from '../components/exhibition/CurioChapter';
import { ClosingSceneChapter } from '../components/exhibition/ClosingSceneChapter';

export const HomePage: React.FC = () => {
  return (
    <div className="relative selection:bg-cobalt/20 selection:text-cobalt">
      {/* Chapter 00-07 Floating Exhibition Navigator */}
      <ExhibitionHUD />

      {/* Chapter 00: Opening Scene / Prologue */}
      <IntroChapter />

      {/* Chapter 01: The Manifesto */}
      <ManifestoChapter />

      {/* Chapter 02: The Project Exhibition */}
      <ProjectExhibitionChapter />

      {/* Chapter 03: The Technical Journey */}
      <JourneyChapter />

      {/* Chapter 04: The Creative World */}
      <CreativeChapter />

      {/* Chapter 05: Archive of Milestones */}
      <AchievementArchiveChapter />

      {/* Chapter 06: CURIO, The Portfolio Guide */}
      <CurioChapter />

      {/* Chapter 07: The Closing Scene */}
      <ClosingSceneChapter />
    </div>
  );
};

export default HomePage;
