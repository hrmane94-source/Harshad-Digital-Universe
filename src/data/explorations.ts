export interface ExplorationDestination {
  id: string;
  name: string;
  region: string;
  significance: string;
  status: 'dream-destination' | 'planned-circuit' | 'visited';
}

export interface ExplorationPreparationItem {
  category: string;
  title: string;
  description: string;
  status: 'In Planning' | 'Future Milestone' | 'Ongoing Conditioning';
}

export const motorcycleExpeditionVision = {
  title: "The All-India Circuit Expedition",
  subtitle: "A Dream to Journey Across the Expanses of India on Two Wheels",
  ambitionNote: "A long-term aspiration to undertake an ambitious motorcycle journey circumnavigating India, aiming to complete the circuit in record time and explore Guinness World Records qualification. (Future personal ambition — exact categories and guidelines to be researched and verified prior to expedition).",
  motto: "Two wheels, boundless horizons, and memories etched in asphalt.",
  philosophy: "Travelling is not an escape from reality; it is discovering the sheer scale of the world and leaving behind trivial limitations. Seeking out raw mountain passes, coastal corridors, and forgotten backroads with a camera and a positive spirit."
};

export const plannedRouteHighlights: ExplorationDestination[] = [
  {
    id: "dest-western-ghats",
    name: "Western Ghats & Konkan Coastline",
    region: "Maharashtra & Goa",
    significance: "Lush monsoon ridges, hairpin switchbacks, and historical sea forts.",
    status: "planned-circuit"
  },
  {
    id: "dest-ladakh",
    name: "Leh-Ladakh High Mountain Passes",
    region: "Ladakh",
    significance: "Khardung La, Umling La, and cold desert plateau routes testing altitude resilience.",
    status: "dream-destination"
  },
  {
    id: "dest-northeast",
    name: "Spiti Valley & Northeast Frontiers",
    region: "Himachal & Assam / Arunachal",
    significance: "Rugged river crossings, high-altitude monasteries, and untamed green valleys.",
    status: "dream-destination"
  },
  {
    id: "dest-kanyakumari",
    name: "Kanyakumari Southern Tip",
    region: "Tamil Nadu",
    significance: "The confluence of the Indian Ocean, Arabian Sea, and Bay of Bengal.",
    status: "planned-circuit"
  },
  {
    id: "dest-rajasthan",
    name: "Thar Desert Corridors",
    region: "Rajasthan",
    significance: "Golden dunes, highway endurance, and historic fortress horizons.",
    status: "planned-circuit"
  }
];

export const expeditionReadiness: ExplorationPreparationItem[] = [
  {
    category: "Technical & Machine Readiness",
    title: "Adventure Motorcycle Selection & Tool Familiarity",
    description: "Evaluating reliable touring machines, puncture repair, chain maintenance, and emergency field mechanics.",
    status: "In Planning"
  },
  {
    category: "Physical & Endurance",
    title: "Long-Distance Saddle Endurance Conditioning",
    description: "Building cardiovascular stamina and neck/back endurance for sustained 800+ km daily highway segments.",
    status: "Ongoing Conditioning"
  },
  {
    category: "Cinematography & Documentation",
    title: "On-Helmet & Drone Visual Capture Setup",
    description: "Configuring multi-angle 4K action cameras, audio wind-filtering, and solar charging power banks.",
    status: "In Planning"
  },
  {
    category: "Official Verification & Safety",
    title: "Route Logging, GPS Telemetry & GWR Guidelines",
    description: "Studying certified route tracking requirements, police checkpoint logbooks, and verified beacon telemetry protocols.",
    status: "Future Milestone"
  }
];
