import type { ProjectLinks } from '../types/portfolio';

export interface ProjectLinksRegistry {
  falcon404: ProjectLinks;
  arogyaAI: ProjectLinks;
  campusCopilot: ProjectLinks;
  neuroverseWebsite: ProjectLinks;
  gadaElectronics: ProjectLinks;
  artbookAI: ProjectLinks;
  ecoFriendlyPlanting: ProjectLinks;
}

/**
 * Central Project Links Configuration
 * Initially empty strings as strictly required by prompt rules.
 * When real URLs are available, enter them here or via the Owner Workspace.
 */
export const projectLinksConfig: ProjectLinksRegistry = {
  falcon404: {
    repositoryUrl: "",
    liveDemoUrl: "",
    websiteUrl: "",
    documentationUrl: "",
    demoVideoUrl: "",
    presentationUrl: "",
    competitionUrl: "",
  },
  arogyaAI: {
    repositoryUrl: "",
    liveDemoUrl: "",
    websiteUrl: "",
    documentationUrl: "",
    demoVideoUrl: "",
    presentationUrl: "",
    competitionUrl: "",
  },
  campusCopilot: {
    repositoryUrl: "",
    liveDemoUrl: "",
    websiteUrl: "",
    documentationUrl: "",
    demoVideoUrl: "",
    presentationUrl: "",
    competitionUrl: "",
  },
  neuroverseWebsite: {
    repositoryUrl: "",
    liveDemoUrl: "",
    websiteUrl: "",
    documentationUrl: "",
    demoVideoUrl: "",
    presentationUrl: "",
    competitionUrl: "",
  },
  gadaElectronics: {
    repositoryUrl: "",
    liveDemoUrl: "",
    websiteUrl: "",
    documentationUrl: "",
    demoVideoUrl: "",
    presentationUrl: "",
    competitionUrl: "",
  },
  artbookAI: {
    repositoryUrl: "",
    liveDemoUrl: "",
    websiteUrl: "",
    documentationUrl: "",
    demoVideoUrl: "",
    presentationUrl: "",
    competitionUrl: "",
  },
  ecoFriendlyPlanting: {
    repositoryUrl: "",
    liveDemoUrl: "",
    websiteUrl: "",
    documentationUrl: "",
    demoVideoUrl: "",
    presentationUrl: "",
    competitionUrl: "",
  },
};
