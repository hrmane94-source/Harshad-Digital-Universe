import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  ExternalLink, 
  CheckCircle2
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from '../components/ui/BrandIcons';
import { contactConfig } from '../data/contact';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Real client-side mailto construction (Rule 15: No fake backend success message)
    const subjectEncoded = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject || 'Connecting with Harshad Mane'}`);
    const bodyEncoded = encodeURIComponent(
      `Hello Harshad,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`
    );

    window.location.href = `mailto:${contactConfig.email}?subject=${subjectEncoded}&body=${bodyEncoded}`;
    setSubmitted(true);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800 text-cyan-300 text-xs font-mono">
          <Mail className="w-3.5 h-3.5" />
          <span>DIRECT COMMUNICATION &amp; VERIFIED CHANNELS</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
          Let&apos;s Connect &amp; Collaborate
        </h1>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
          Open for technical discussions on cybersecurity screening, AI-assisted engineering, hackathon collaborations, or cinematography.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Column: Direct Email & Profiles */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Primary Email Card */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-cyan-950/40 via-slate-900 to-slate-900 border border-cyan-500/30 space-y-4">
            <span className="text-xs font-mono uppercase text-cyan-400 tracking-wider font-semibold block">
              Primary Direct Contact
            </span>
            <h2 className="text-xl font-heading font-bold text-white">
              Direct Mailbox
            </h2>
            <p className="text-xs text-slate-300 leading-relaxed">
              Clicking below initiates a pre-addressed email message directly to Harshad&apos;s verified personal inbox.
            </p>
            <a
              href={`mailto:${contactConfig.email}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition-colors w-full justify-center shadow-lg shadow-cyan-500/20"
            >
              <Mail className="w-4 h-4" />
              <span>{contactConfig.email}</span>
            </a>
          </div>

          {/* Confirmed Profiles List */}
          <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-4">
            <h3 className="text-sm font-heading font-bold text-white uppercase tracking-wider text-slate-300">
              Verified Public Profiles
            </h3>

            <div className="space-y-3">
              <a
                href={contactConfig.profiles.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-slate-700 hover:text-cyan-300 transition-colors group text-xs"
              >
                <div className="flex items-center gap-3">
                  <GithubIcon className="w-4 h-4 text-cyan-400" />
                  <span className="text-white font-medium">GitHub Repository</span>
                </div>
                <span className="font-mono text-slate-400 group-hover:text-cyan-300 flex items-center gap-1">
                  <span>{contactConfig.labels.github}</span>
                  <ExternalLink className="w-3 h-3" />
                </span>
              </a>

              <a
                href={contactConfig.profiles.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-slate-700 hover:text-cyan-300 transition-colors group text-xs"
              >
                <div className="flex items-center gap-3">
                  <LinkedinIcon className="w-4 h-4 text-blue-400" />
                  <span className="text-white font-medium">LinkedIn Profile</span>
                </div>
                <span className="font-mono text-slate-400 group-hover:text-cyan-300 flex items-center gap-1">
                  <span>{contactConfig.labels.linkedin}</span>
                  <ExternalLink className="w-3 h-3" />
                </span>
              </a>

              <a
                href={contactConfig.profiles.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-slate-700 hover:text-purple-300 transition-colors group text-xs"
              >
                <div className="flex items-center gap-3">
                  <InstagramIcon className="w-4 h-4 text-purple-400" />
                  <span className="text-white font-medium">Instagram (Creative)</span>
                </div>
                <span className="font-mono text-slate-400 group-hover:text-purple-300 flex items-center gap-1">
                  <span>{contactConfig.labels.instagram}</span>
                  <ExternalLink className="w-3 h-3" />
                </span>
              </a>

              <a
                href={contactConfig.profiles.behance}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-slate-700 hover:text-cyan-300 transition-colors group text-xs"
              >
                <div className="flex items-center gap-3">
                  <span className="font-bold text-slate-200">Bē</span>
                  <span className="text-white font-medium">Behance Portfolio</span>
                </div>
                <span className="font-mono text-slate-400 group-hover:text-cyan-300 flex items-center gap-1">
                  <span>{contactConfig.labels.behance}</span>
                  <ExternalLink className="w-3 h-3" />
                </span>
              </a>
            </div>
          </div>

        </div>

        {/* Right Column: Honest Direct Email Form */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="p-8 sm:p-10 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-6 shadow-2xl"
          >
            <div className="space-y-1">
              <h3 className="text-xl font-heading font-bold text-white">
                Draft a Direct Message
              </h3>
              <p className="text-xs text-slate-400">
                Submitting opens your standard desktop or mobile email client directly formatted with your inputs.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Alex Morgan"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-cyan-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">
                  Your Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. alex@example.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-cyan-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. SIH 2026 Discussion or Collaboration"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-cyan-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">
                  Message *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Write your note here..."
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-cyan-400 focus:outline-none resize-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all hover:scale-[1.02] cursor-pointer w-full"
            >
              <Send className="w-4 h-4" />
              <span>Launch Email Client &amp; Send</span>
            </button>

            {submitted && (
              <div className="p-3.5 rounded-xl bg-emerald-950/80 border border-emerald-700 text-emerald-300 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Your default email client has been prepared with your inquiry!</span>
              </div>
            )}
          </form>
        </div>

      </div>

    </div>
  );
};
