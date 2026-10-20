import { jsPDF } from 'jspdf';
import { resumeData } from '../data/resume';

/**
 * Generates a clean, ATS-compliant PDF résumé with genuine selectable text.
 * Strictly avoids non-standard canvas rasterization so text remains machine-parseable.
 */
export const generateResumePdf = () => {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 14;
  const contentWidth = pageWidth - margin * 2;
  let y = 14;

  const checkPageBreak = (neededHeight: number) => {
    if (y + neededHeight > pageHeight - 12) {
      doc.addPage();
      y = 14;
    }
  };

  // --- Header ---
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(18);
  doc.setTextColor(15, 23, 42); // slate-900
  doc.text(resumeData.basics.name.toUpperCase(), margin, y);
  y += 6;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(71, 85, 105); // slate-600
  doc.text(resumeData.basics.title, margin, y);
  y += 5;

  // Contact line
  const contactText = `Email: ${resumeData.basics.email}  |  Location: ${resumeData.basics.location}  |  GitHub: github.com/hrmane94-source  |  LinkedIn: linkedin.com/in/shivpremi1630`;
  doc.setFontSize(8);
  doc.setTextColor(100, 116, 139);
  doc.text(contactText, margin, y);
  y += 5;

  // Horizontal divider
  doc.setDrawColor(203, 213, 225);
  doc.setLineWidth(0.4);
  doc.line(margin, y, pageWidth - margin, y);
  y += 5;

  // Helper for section headings
  const addSectionHeader = (title: string) => {
    checkPageBreak(10);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10.5);
    doc.setTextColor(15, 23, 42);
    doc.text(title.toUpperCase(), margin, y);
    y += 1.5;
    doc.setDrawColor(148, 163, 184);
    doc.setLineWidth(0.3);
    doc.line(margin, y, pageWidth - margin, y);
    y += 4;
  };

  // --- Professional Summary ---
  addSectionHeader('Professional Summary');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(51, 65, 85);
  const summaryLines = doc.splitTextToSize(resumeData.basics.summary, contentWidth);
  doc.text(summaryLines, margin, y);
  y += summaryLines.length * 4 + 3;

  // --- Education ---
  addSectionHeader('Education');
  resumeData.education.forEach((edu) => {
    checkPageBreak(16);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(15, 23, 42);
    doc.text(edu.institution, margin, y);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(100, 116, 139);
    doc.text(edu.period, pageWidth - margin, y, { align: 'right' });
    y += 4;

    doc.setFont('helvetica', 'italic');
    doc.setFontSize(8.5);
    doc.setTextColor(51, 65, 85);
    const degreeText = edu.branch ? `${edu.degree} (${edu.branch})` : edu.degree;
    doc.text(degreeText, margin, y);
    y += 3.5;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(71, 85, 105);
    edu.details.forEach((detail) => {
      checkPageBreak(6);
      const detailLines = doc.splitTextToSize(`• ${detail}`, contentWidth - 4);
      doc.text(detailLines, margin + 2, y);
      y += detailLines.length * 3.5;
    });
    y += 2;
  });

  // --- Technical Projects ---
  addSectionHeader('Technical Projects & Screening Systems');
  resumeData.projects.forEach((proj) => {
    checkPageBreak(20);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(15, 23, 42);
    doc.text(proj.title, margin, y);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(100, 116, 139);
    doc.text(proj.period, pageWidth - margin, y, { align: 'right' });
    y += 3.8;

    doc.setFont('helvetica', 'italic');
    doc.setFontSize(8);
    doc.setTextColor(37, 99, 235); // Accent blue
    doc.text(`Role: ${proj.role}  |  Stack: ${proj.technologies.slice(0, 4).join(', ')}`, margin, y);
    y += 3.5;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(51, 65, 85);
    proj.bullets.forEach((bullet) => {
      checkPageBreak(6);
      const bulletLines = doc.splitTextToSize(`• ${bullet}`, contentWidth - 4);
      doc.text(bulletLines, margin + 2, y);
      y += bulletLines.length * 3.5;
    });
    y += 2.5;
  });

  // --- Verified Honors & Achievements ---
  addSectionHeader('Verified Competition Honors & Achievements');
  resumeData.achievements.forEach((ach) => {
    checkPageBreak(12);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(15, 23, 42);
    doc.text(ach.title, margin, y);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(100, 116, 139);
    doc.text(ach.year, pageWidth - margin, y, { align: 'right' });
    y += 3.5;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(71, 85, 105);
    const descLines = doc.splitTextToSize(`• ${ach.description}`, contentWidth - 4);
    doc.text(descLines, margin + 2, y);
    y += descLines.length * 3.5 + 1.5;
  });

  // --- Leadership Experience ---
  addSectionHeader('Leadership & Institutional Coordination');
  resumeData.leadership.forEach((lead) => {
    checkPageBreak(12);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(15, 23, 42);
    doc.text(`${lead.role} — ${lead.organization}`, margin, y);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(100, 116, 139);
    doc.text(lead.period, pageWidth - margin, y, { align: 'right' });
    y += 3.5;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(71, 85, 105);
    lead.contributions.forEach((c) => {
      checkPageBreak(5);
      const cLines = doc.splitTextToSize(`• ${c}`, contentWidth - 4);
      doc.text(cLines, margin + 2, y);
      y += cLines.length * 3.5;
    });
    y += 1.5;
  });

  // --- Technical Skills ---
  addSectionHeader('Technical Skills & Honest Proficiency Matrix');
  checkPageBreak(25);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(15, 23, 42);

  const renderSkillRow = (label: string, items: string[]) => {
    checkPageBreak(10);
    doc.setFont('helvetica', 'bold');
    doc.text(`${label}: `, margin, y);
    const labelWidth = doc.getTextWidth(`${label}: `);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(71, 85, 105);
    const lineText = items.join(', ');
    const wrapped = doc.splitTextToSize(lineText, contentWidth - labelWidth);
    doc.text(wrapped, margin + labelWidth, y);
    y += wrapped.length * 3.6 + 1.5;
    doc.setTextColor(15, 23, 42);
  };

  renderSkillRow('Foundations', resumeData.skills.foundations);
  renderSkillRow('Currently Learning', resumeData.skills.currentlyLearning);
  renderSkillRow('Cybersecurity Foundations', resumeData.skills.cybersecurityFoundations);
  renderSkillRow('AI Tooling & Vibe Coding', resumeData.skills.aiAssistedTooling);
  renderSkillRow('Frameworks Explored via AI', resumeData.skills.frameworksExplored);

  // Save the PDF if in browser
  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    doc.save('Harshad_Mane_Resume.pdf');
  }
  return doc;
};
