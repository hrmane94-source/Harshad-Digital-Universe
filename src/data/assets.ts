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
      cover: "/assets/projects/falcon-404/falcon 404.png",
      screenshots: [
        "/assets/projects/falcon-404/falcon 404.png",
        "/assets/events/smart-india-hackathon/falcon 404.png"
      ],
      architectureDiagram: "",
      demoVideo: "",
      certificate: "",
    },
    arogyaAI: {
      cover: "/assets/projects/arogya-ai/Arogya AI Hospital Operations Dashboard.png",
      screenshots: [
        "/assets/projects/arogya-ai/Arogya AI Hospital Operations Dashboard.png",
        "/assets/events/aarambh-wce/Arogya AI Hospital Operations Dashboard.png"
      ],
      architectureDiagram: "",
      demoVideo: "",
      certificate: "",
    },
    campusCopilot: {
      cover: "/assets/projects/campus-copilot/Campus Copilot College Dashboard.png",
      screenshots: [
        "/assets/projects/campus-copilot/Campus Copilot College Dashboard.png",
        "/assets/events/tantraparv/Campus Copilot College Dashboard.png"
      ],
      demoVideo: "",
      certificate: "",
    },
    neuroverseWebsite: {
      cover: "/assets/projects/neuroverse-2k26/Neon Neuroverse 2K26 Event Homepage.png",
      screenshots: [
        "/assets/projects/neuroverse-2k26/Neon Neuroverse 2K26 Event Homepage.png",
        "/assets/events/neuroverse-2k26/Neon Neuroverse 2K26 Event Homepage.png"
      ],
      eventPhotographs: [],
      runnerUpCertificate: "",
    },
    gadaElectronics: {
      cover: "/assets/projects/gada-electronics/GADA Electronics Futuristic Storefront.png",
      screenshots: [
        "/assets/projects/gada-electronics/GADA Electronics Futuristic Storefront.png",
        "/assets/events/neuroverse-2k26/GADA Electronics Futuristic Storefront.png"
      ],
      demoVideo: "",
    },
    artbookAI: {
      cover: "/assets/projects/artbook-ai/ArtBook AI Artist Booking Dashboard.png",
      screenshots: [
        "/assets/projects/artbook-ai/ArtBook AI Artist Booking Dashboard.png",
        "/assets/events/founders-expo/ArtBook AI Artist Booking Dashboard.png"
      ],
      demoVideo: "",
    },
    ecoFriendlyPlanting: {
      cover: "/assets/projects/eco-friendly-planting/EcoPlant Sustainable Planting Dashboard.png",
      screenshots: [
        "/assets/projects/eco-friendly-planting/EcoPlant Sustainable Planting Dashboard.png",
        "/assets/events/school-events/EcoPlant Sustainable Planting Dashboard.png"
      ],
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
