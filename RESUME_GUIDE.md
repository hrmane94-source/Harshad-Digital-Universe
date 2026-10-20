# Harshad Mane — Résumé Architecture & ATS PDF Guide

This document explains how the interactive online résumé and the downloadable ATS-friendly PDF résumé operate in perfect synchronization.

---

## 🎯 1. Single Source of Truth

Both the interactive online résumé on `/resume` and the downloadable PDF file derive from **one centralized data source**:

```text
src/data/resume.ts
```

When you update an entry in `src/data/resume.ts`:
- The `/resume` webpage reflects your update immediately.
- The **"Download Official PDF Résumé"** button outputs a freshly compiled PDF with your latest information.
- No discrepancy can ever occur between the website and the downloadable document.

---

## 🤖 2. ATS (Applicant Tracking System) Compliance

Many online portfolio templates use HTML-to-image or canvas screenshot rendering to create PDFs. This produces blurry images where text cannot be selected or parsed by recruiters' automated tracking systems.

This portfolio uses a pure vector text generator (`jspdf`):
- **Real Selectable Text:** Recruiters and ATS scanners can highlight, copy, and parse every word.
- **Clean Helvetica Typography:** Standard, universally supported system fonts prevent rendering bugs across different operating systems.
- **Accurate Margins & Flow:** Standard A4 dimensions with automated page break calculations.
- **Standard Resume Headings:** Uses standard industry sections:
  - Professional Summary
  - Education
  - Technical Projects & Screening Systems
  - Verified Competition Honors & Achievements
  - Leadership & Institutional Governance
  - Technical Skills & Proficiency Matrix

---

## 📝 3. How to Update Your Résumé

1. Open `src/data/resume.ts`.
2. Locate the section you wish to modify:
   - To update your headline or summary: edit `basics.title` or `basics.summary`.
   - To add a project: add an object to the `projects` array with `title`, `role`, `period`, `technologies`, and `bullets`.
   - To update education or CGPA: edit the `education` array.
   - To update technical skills: edit the `skills` object.
3. Save the file.
4. Visit `/resume` and click **Download Official PDF Résumé** to obtain the new PDF instantly.
