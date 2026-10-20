# Harshad Mane — Asset Setup & Media Management Guide

This guide explains step-by-step how to add personal photographs, project screenshots, certificates, and video reels to your portfolio.

---

## 📁 1. Directory Structure

All public assets reside inside the `public/assets/` directory:

```text
public/assets/
├── brand/
│   ├── logo.svg                       # Master SVG logo & monogram
│   └── social-preview.jpg             # OpenGraph social share image
├── identity/
│   └── portrait.jpg                   # Your official portrait photo
├── certificates/
│   ├── pixelcraft-runner-up.jpg       # PixelCraft 2nd place certificate
│   ├── ssc-subject-topper.jpg         # Class 10 subject marksheet / certificate
│   └── head-boy-letter.jpg            # School Head Boy appointment record
├── projects/
│   ├── falcon-404/                    # Screenshots, architecture diagram, cover
│   ├── arogya-ai/
│   ├── campus-copilot/
│   ├── neuroverse-2k26/
│   ├── gada-electronics/
│   ├── artbook-ai/
│   └── eco-friendly-planting/
├── events/
│   ├── smart-india-hackathon/
│   ├── seva-first/
│   ├── tantraparv/
│   ├── neuroverse-2k26/
│   └── aarambh-wce/
├── gallery/
│   ├── photography/                   # Landscape / general photography
│   ├── cinematography/                # Widescreen cinematic stills & video
│   ├── reels/                         # Vertical video reels (9:16)
│   ├── nature/                        # Western Ghats & outdoor scenes
│   ├── travel/                        # Highway & road trip media
│   └── behind-the-scenes/             # Hackathon desks, setup shots
└── explorations/
    └── india-ride/                    # Motorcycle route concepts & gear
```

---

## 👤 2. How to Add Your Official Portrait

1. Prepare your photograph in high resolution (`.jpg` or `.webp`, recommended aspect ratio `4:5` or `1:1`).
2. Save the file to:
   ```text
   public/assets/identity/portrait.jpg
   ```
3. Open `src/data/assets.ts` and set:
   ```typescript
   export const assetConfig = {
     identity: {
       portrait: "/assets/identity/portrait.jpg",
       portraitAlt: "Harshad Mane — Computer Science Engineering Student & Creative Builder",
     },
     // ...
   };
   ```
4. Save the file. Your portrait will instantly appear on the `/about` page and identity cards!

---

## 📸 3. How to Add Project Screenshots & Covers

To add screenshots for a project (e.g. **FALCON-404**):

1. Save your screenshots into:
   ```text
   public/assets/projects/falcon-404/screenshot-1.jpg
   public/assets/projects/falcon-404/architecture.png
   public/assets/projects/falcon-404/cover.jpg
   ```
2. Open `src/data/assets.ts` and update the `falcon404` object:
   ```typescript
   falcon404: {
     cover: "/assets/projects/falcon-404/cover.jpg",
     screenshots: [
       "/assets/projects/falcon-404/screenshot-1.jpg"
     ],
     architectureDiagram: "/assets/projects/falcon-404/architecture.png",
     demoVideo: "",
     certificate: ""
   }
   ```
3. If `cover` is left empty `""`, the system automatically renders an abstract graphic cover with domain styling!

---

## 🏆 4. How to Attach Certificates to Achievements

1. Save your certificate scan to:
   ```text
   public/assets/certificates/pixelcraft-runner-up.jpg
   ```
2. Open `src/data/assets.ts`:
   ```typescript
   certificates: {
     pixelCraftRunnerUp: "/assets/certificates/pixelcraft-runner-up.jpg",
     subjectAchievements: "/assets/certificates/ssc-subject-topper.jpg",
     headBoyLetter: "/assets/certificates/head-boy-letter.jpg",
     ncscDistrict: "",
     barcVisitPass: ""
   }
   ```
3. A **"View Verified Certificate"** button will automatically appear on `/achievements`.

---

## 🎬 5. How to Add a New Creative Gallery Item (Photos, Videos, Reels)

1. Save your media file into the matching category folder:
   - Horizontal video: `public/assets/gallery/cinematography/highway-ride.mp4`
   - Vertical video reel: `public/assets/gallery/reels/night-ride.mp4`
   - Photography: `public/assets/gallery/nature/landscape-dawn.jpg`
2. Open `src/data/gallery.ts` and add an entry:
   ```typescript
   {
     id: "morning-landscape",
     title: "Morning Landscape Study",
     category: "nature",
     mediaType: "image",
     source: "/assets/gallery/nature/landscape-dawn.jpg",
     alt: "Sun rising over misty hills",
     caption: "Early morning light breaking through the dawn canopy.",
     location: "Maharashtra, India",
     date: "2026",
     featured: true,
     published: true, // Set to true when you want it visible to visitors!
     isVertical: false
   }
   ```
3. **Important:** Setting `published: false` keeps the entry strictly inside your private workspace without showing it on `/creative`.

---

## 📱 6. Vertical Video Reels Specifications

- **Format:** MP4 (H.264 video, AAC audio)
- **Aspect Ratio:** `9:16` (1080x1920)
- **Attribute:** Set `isVertical: true` in `src/data/gallery.ts`
- **Poster Image (Optional):** Provide a `poster: "/assets/gallery/reels/poster.jpg"` so the video displays a cover before playback.
- **Audio:** Videos are muted by default to preserve a calm browsing experience.

---

## 🛡️ 7. Preventing Accidental Publication of Private Media

- Only files placed in `public/assets/` and explicitly referenced in your data with `published: true` are visible on the website.
- If you have unfinished drafts or personal photos, keep `published: false` in `src/data/gallery.ts` or create drafts in the Owner Workspace (`/owner`).
