import type { CreativeMediaItem } from '../types/portfolio';

/**
 * Creative Portfolio & Visual Journal Registry
 * 
 * Brand Identity: shiv.premi_1630
 * 
 * To add photography, cinematography, or reels:
 * 1. Add your media file to /public/assets/gallery/<category>/filename.jpg or .mp4
 * 2. Add an entry below with published: true.
 * 
 * Empty state: When no items are published, the gallery displays a
 * tailored, cinematic editorial placeholder welcoming future media.
 */
export const creativeGalleryItems: CreativeMediaItem[] = [
  // Examples configured for owner to easily populate with real files:
  {
    id: "media-entry-1",
    title: "Nature & Hidden Horizon",
    category: "nature",
    mediaType: "image",
    source: "", // e.g. "/assets/gallery/nature/landscape-dawn.jpg"
    thumbnail: "",
    poster: "",
    alt: "Documenting natural landscapes and outdoor scenery",
    caption: "Quiet dawn landscape concept. Documenting nature and outdoor scenery.",
    location: "Maharashtra, India",
    date: "2026",
    featured: true,
    published: false,
    isVertical: false
  },
  {
    id: "media-entry-2",
    title: "Cinematic Journey Reel",
    category: "reels",
    mediaType: "video",
    source: "", // e.g. "/assets/gallery/reels/monsoon-ride.mp4"
    thumbnail: "",
    poster: "",
    alt: "Vertical cinematic reel capturing highway motorcycle journeys",
    caption: "The rhythm of the road. Finding peace in movement.",
    location: "Maharashtra Highways",
    date: "2026",
    featured: true,
    published: false,
    isVertical: true
  },
  {
    id: "media-entry-3",
    title: "Behind The Scenes: Hackathon Sprint",
    category: "behind-the-scenes",
    mediaType: "image",
    source: "", // e.g. "/assets/gallery/behind-the-scenes/hackathon-desk.jpg"
    thumbnail: "",
    poster: "",
    alt: "Behind the scenes during late night software prototyping",
    caption: "3:00 AM problem solving during SIH 2026 sprint.",
    location: "Campus Innovation Lab",
    date: "2026",
    featured: false,
    published: false,
    isVertical: false
  }
];

export const creativeCategoriesList = [
  { id: 'all', label: 'All Creative Works' },
  { id: 'photography', label: 'Photography' },
  { id: 'cinematography', label: 'Cinematography' },
  { id: 'reels', label: 'Reels & Vertical Video' },
  { id: 'nature', label: 'Nature & Hidden Spots' },
  { id: 'travel', label: 'Travel & Expeditions' },
  { id: 'behind-the-scenes', label: 'Behind The Scenes' },
  { id: 'personal-moments', label: 'Life Moments' }
] as const;
