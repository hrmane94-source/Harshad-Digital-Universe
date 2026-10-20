import React from 'react';
import { StudioHUD } from '../components/studio/StudioHUD';
import { StudioHero } from '../components/studio/StudioHero';
import { StudioThesis } from '../components/studio/StudioThesis';
import { StudioProjects } from '../components/studio/StudioProjects';
import { StudioJourney } from '../components/studio/StudioJourney';
import { StudioCreative } from '../components/studio/StudioCreative';
import { StudioArchive } from '../components/studio/StudioArchive';
import { StudioCurio } from '../components/studio/StudioCurio';
import { StudioFooter } from '../components/studio/StudioFooter';

export const HomePage: React.FC = () => {
  return (
    <div className="relative selection:bg-cobalt/20 selection:text-cobalt">
      {/* Chapter 01-08 Floating Studio HUD Navigator */}
      <StudioHUD />

      {/* Index 01: Studio Hero & Identity */}
      <StudioHero />

      {/* Index 02: Core Thesis & Philosophy */}
      <StudioThesis />

      {/* Index 03: Flagship & Selected Projects */}
      <StudioProjects />

      {/* Index 04: The Technical Journey */}
      <StudioJourney />

      {/* Index 05: Visual Essay & Cinematography */}
      <StudioCreative />

      {/* Index 06: Archive of Verified Milestones */}
      <StudioArchive />

      {/* Index 07: CURIO AI Guide Terminal */}
      <StudioCurio />

      {/* Index 08: Dispatch & Closing Canvas */}
      <StudioFooter />
    </div>
  );
};

export default HomePage;
