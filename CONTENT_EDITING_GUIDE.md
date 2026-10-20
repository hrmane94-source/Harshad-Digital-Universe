# Harshad Mane — Content Editing Guide

This guide explains how to update your information, project links, skills, education, and career milestones without rewriting UI components.

---

## 🗂️ Central Data Architecture Map

All factual content is structured cleanly in `src/data/`:

| File | What It Controls |
|---|---|
| `src/data/contact.ts` | Email, public display name, creative identity, motto, social profile URLs |
| `src/data/projectLinks.ts` | GitHub repos, live demo URLs, video links for all 7 projects |
| `src/data/projects.ts` | Detailed project case studies, features, limitations, competition details |
| `src/data/skills.ts` | Technical skills, honest proficiency levels, tools used |
| `src/data/education.ts` | Schools, colleges, degrees, future CGPA records |
| `src/data/achievements.ts` | Verified awards (PixelCraft, SSC subject topper, Head Boy) |
| `src/data/events.ts` | Hackathons (SIH 2026, Tantraparv, Aarambh, Founder's Expo) |
| `src/data/careerRoadmap.ts` | Priority learning stages, 2030 vision, yearly milestones |
| `src/data/gallery.ts` | Creative photography, cinematography, and vertical reels |
| `src/data/goals.ts` | Long-term personal, cybersecurity, and creative goals |
| `src/data/resume.ts` | Single source of truth for online résumé & downloadable ATS PDF |

---

## 🔗 1. How to Add or Update Project URLs

Open `src/data/projectLinks.ts`. Every project has empty fields ready for your links:

```typescript
export const projectLinksConfig = {
  falcon404: {
    repositoryUrl: "https://github.com/hrmane94-source/falcon-404",
    liveDemoUrl: "https://falcon404.demo",
    websiteUrl: "",
    documentationUrl: "",
    demoVideoUrl: "",
    presentationUrl: "",
    competitionUrl: "https://www.sih.gov.in"
  },
  // ...
};
```
> **Rule:** If a link field is left as an empty string `""`, the corresponding button is automatically hidden. No dead buttons will ever appear!

---

## 🎓 2. How to Update Your Undergraduate CGPA

When your semester results are published by the university:

1. Open `src/data/education.ts`.
2. Locate the `edu-adcet` entry and update `cgpaRecord`:
   ```typescript
   cgpaRecord: {
     isPublished: true,
     value: "8.75 CGPA", // Your verified score
     notes: "First-Year B.Tech Semester Examination Score"
   }
   ```
3. Save the file. Your verified CGPA will immediately display on `/education`.

---

## 💼 3. Updating Résumé & Synchronizing Outputs

The interactive résumé (`/resume`) and downloadable PDF share **one central file**: `src/data/resume.ts`.

When you add a new project, skill, or achievement to `src/data/resume.ts`:
- The website interactive résumé updates automatically.
- The **"Download Official PDF Résumé"** button generates an updated, ATS-compliant PDF on the fly!

---

## 🛠️ 4. Adding a New Technical Skill

Open `src/data/skills.ts` and add an item to `verifiedSkills`:

```typescript
{
  id: "sk-docker",
  name: "Docker & Container Basics",
  category: "Currently Learning",
  proficiencyLevel: "Learning", // 'Proficient' | 'Learning' | 'Fundamentals Known' | 'Used via AI-Assisted Dev' | 'Demonstrated in Project'
  description: "Creating containerized microservices and Dockerfiles for security screening tools.",
  projectsReferenced: ["FALCON-404"]
}
```

---

## 🔐 5. Modifying Contact & Social Profile Links

Open `src/data/contact.ts` to update any handle or email:

```typescript
export const contactConfig = {
  email: "hrmane94@gmail.com",
  creativeIdentity: "shiv.premi_1630",
  profiles: {
    github: "https://github.com/hrmane94-source",
    linkedin: "https://www.linkedin.com/in/shivpremi1630/?isSelfProfile=true",
    instagram: "https://www.instagram.com/shiv.premi_1630?cplk=Y3lhemlkZXM2MWhr",
    behance: "https://www.behance.net/harshadmane11"
  }
};
```
All headers, footers, and contact forms read from this single file!
