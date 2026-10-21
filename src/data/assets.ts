/**
 * Central Asset Configuration & Registry
 * 
 * ALL personal photographs, screenshots, certificates, and media paths
 * are mapped here. To add an asset:
 * 1. Place the asset file in the corresponding folder in /public/assets/...
 * 2. Update the path in this configuration file (e.g., "/assets/identity/harshad-portrait.jpg").
 * 3. Empty strings ("") automatically render refined editorial empty states or procedural covers.
 */

export interface AssetRegistry {
  identity: {
    portrait: string;
    portraitAlt: string;
  };
  brand: {
    logo: string;
    socialPreview: string;
    favicon: string;
  };
  projects: {
    falcon404: {
      cover: string;
      screenshots: string[];
      architectureDiagram: string;
      demoVideo: string;
      certificate: string;
    };
    arogyaAI: {
      cover: string;
      screenshots: string[];
      architectureDiagram: string;
      demoVideo: string;
      certificate: string;
    };
    campusCopilot: {
      cover: string;
      screenshots: string[];
      demoVideo: string;
      certificate: string;
    };
    neuroverseWebsite: {
      cover: string;
      screenshots: string[];
      eventPhotographs: string[];
      runnerUpCertificate: string;
    };
    gadaElectronics: {
      cover: string;
      screenshots: string[];
      demoVideo: string;
    };
    artbookAI: {
      cover: string;
      screenshots: string[];
      demoVideo: string;
    };
    ecoFriendlyPlanting: {
      cover: string;
      screenshots: string[];
    };
  };
  certificates: {
    pixelCraftRunnerUp: string;
    subjectAchievements: string;
    headBoyLetter: string;
    ncscDistrict: string;
    barcVisitPass: string;
  };
  explorations: {
    indiaRideMapConcept: string;
    bikeConcept: string;
  };
}

export const assetConfig: AssetRegistry = {
  identity: {
    portrait: "/assets/identity/portrait.png", // Real portrait image location in /public/assets/identity/portrait.png (also available as portrait.jpg and 1000109865.png)
    portraitAlt: "Harshad Mane — Computer Science Engineering Student & Creative Builder",
  },
  brand: {
    logo: "/assets/brand/logo.svg",
    socialPreview: "/assets/brand/social-preview.jpg",
    favicon: "/favicon.svg",
  },
  projects: {
    falcon404: {
      cover: "",
      screenshots: [],
      architectureDiagram: "",
      demoVideo: "",
      certificate: "",
    },
    arogyaAI: {
      cover: "",
      screenshots: [],
      architectureDiagram: "",
      demoVideo: "",
      certificate: "",
    },
    campusCopilot: {
      cover: "",
      screenshots: [],
      demoVideo: "",
      certificate: "",
    },
    neuroverseWebsite: {
      cover: "",
      screenshots: [],
      eventPhotographs: [],
      runnerUpCertificate: "",
    },
    gadaElectronics: {
      cover: "",
      screenshots: [],
      demoVideo: "",
    },
    artbookAI: {
      cover: "",
      screenshots: [],
      demoVideo: "",
    },
    ecoFriendlyPlanting: {
      cover: "",
      screenshots: [],
    },
  },
  certificates: {
    pixelCraftRunnerUp: "",
    subjectAchievements: "",
    headBoyLetter: "",
    ncscDistrict: "",
    barcVisitPass: "",
  },
  explorations: {
    indiaRideMapConcept: "",
    bikeConcept: "",
  },
};
