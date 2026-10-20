import React, { useState } from 'react';
import {
  Mail,
  Send,
  CheckCircle2,
  ArrowUpRight
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

      {/* Editorial Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-subtle border border-black/[0.08] dark:border-white/[0.08] text-muted text-[11px] font-mono tracking-widest uppercase font-semibold">
          <Mail className="w-3.5 h-3.5 text-cobalt" />
          <span>DIRECT COMMUNICATION &amp; VERIFIED CHANNELS</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-serif text-ink tracking-tight font-normal leading-[1.08]">
          Let&apos;s Connect &amp; Collaborate
        </h1>
        <p className="text-muted text-sm sm:text-base leading-relaxed">
          Open for technical discussions on cybersecurity screening, AI-assisted engineering, hackathon collaborations, or cinematography.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

        {/* Left Column: Direct Email & Profiles */}
        <div className="lg:col-span-5 space-y-6">

          {/* Primary Email Card */}
          <div className="p-8 rounded-3xl bg-surface border border-black/[0.08] dark:border-white/[0.1] space-y-4 shadow-xs">
            <span className="text-[11px] font-mono uppercase text-cobalt tracking-widest font-bold block">
              Primary Direct Contact
            </span>
            <h2 className="text-2xl font-serif font-bold text-ink tracking-tight">
              Direct Mailbox
            </h2>
            <p className="text-xs text-muted leading-relaxed">
              Clicking below initiates a pre-addressed email message directly to Harshad&apos;s verified personal inbox.
            </p>
            <a
              href={`mailto:${contactConfig.email}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-ink text-paper font-semibold text-xs uppercase tracking-wider transition-opacity hover:opacity-90 w-full justify-center shadow-xs"
            >
              <Mail className="w-4 h-4" />
              <span>{contactConfig.email}</span>
            </a>
          </div>

          {/* Social Profiles Grid */}
          <div className="p-8 rounded-3xl bg-surface border border-black/[0.08] dark:border-white/[0.1] space-y-4 shadow-xs">
            <span className="text-[11px] font-mono uppercase text-muted tracking-widest font-bold block">
              Verified Profiles
            </span>

            <div className="space-y-3">
              <a
                href={contactConfig.profiles.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-subtle border border-black/[0.04] dark:border-white/[0.06] hover:border-black/[0.2] transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <GithubIcon className="w-4 h-4 text-ink" />
                  <div>
                    <span className="text-xs font-semibold text-ink block">GitHub</span>
                    <span className="text-[11px] font-mono text-muted">@hrmane94-source</span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-ink transition-colors" />
              </a>

              <a
                href={contactConfig.profiles.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-subtle border border-black/[0.04] dark:border-white/[0.06] hover:border-black/[0.2] transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <LinkedinIcon className="w-4 h-4 text-cobalt" />
                  <div>
                    <span className="text-xs font-semibold text-ink block">LinkedIn</span>
                    <span className="text-[11px] font-mono text-muted">Professional Network</span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-ink transition-colors" />
              </a>

              <a
                href={contactConfig.profiles.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-subtle border border-black/[0.04] dark:border-white/[0.06] hover:border-black/[0.2] transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <InstagramIcon className="w-4 h-4 text-coral" />
                  <div>
                    <span className="text-xs font-semibold text-ink block">Instagram</span>
                    <span className="text-[11px] font-mono text-muted">@shiv.premi_1630</span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-ink transition-colors" />
              </a>

              <a
                href={contactConfig.profiles.behance}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-subtle border border-black/[0.04] dark:border-white/[0.06] hover:border-black/[0.2] transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <span className="w-4 h-4 flex items-center justify-center font-bold text-xs text-ink">Bē</span>
                  <div>
                    <span className="text-xs font-semibold text-ink block">Behance</span>
                    <span className="text-[11px] font-mono text-muted">@harshadmane11</span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-ink transition-colors" />
              </a>
            </div>
          </div>

        </div>

        {/* Right Column: Direct Message Composer */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="p-8 sm:p-10 rounded-3xl bg-surface border border-black/[0.08] dark:border-white/[0.1] space-y-6 shadow-xs"
          >
            <div className="space-y-1">
              <h2 className="text-2xl font-serif font-bold text-ink tracking-tight">
                Send a Structured Message
              </h2>
              <p className="text-xs text-muted">
                Pre-fills your device&apos;s default email client. No third-party data tracking.
              </p>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-mono uppercase tracking-wider text-muted">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Sharma"
                    className="w-full px-4 py-3 rounded-xl bg-subtle border border-black/[0.08] dark:border-white/[0.1] text-ink text-xs font-mono focus:border-cobalt focus:outline-none transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-mono uppercase tracking-wider text-muted">Your Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. alex@university.edu"
                    className="w-full px-4 py-3 rounded-xl bg-subtle border border-black/[0.08] dark:border-white/[0.1] text-ink text-xs font-mono focus:border-cobalt focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-mono uppercase tracking-wider text-muted">Subject / Topic</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Hackathon Team Collaboration / DevSecOps Query"
                  className="w-full px-4 py-3 rounded-xl bg-subtle border border-black/[0.08] dark:border-white/[0.1] text-ink text-xs font-mono focus:border-cobalt focus:outline-none transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-mono uppercase tracking-wider text-muted">Your Message *</label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Write your note, feedback, or collaboration proposal..."
                  className="w-full px-4 py-3 rounded-xl bg-subtle border border-black/[0.08] dark:border-white/[0.1] text-ink text-xs font-mono focus:border-cobalt focus:outline-none resize-none transition-colors"
                />
              </div>
            </div>

            {submitted && (
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-800 dark:text-emerald-300 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Email client opened! If your composer did not launch, feel free to write directly to {contactConfig.email}.</span>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-ink text-paper font-semibold text-xs uppercase tracking-wider hover:opacity-90 transition-opacity flex items-center justify-center gap-2 cursor-pointer shadow-xs"
            >
              <Send className="w-4 h-4" />
              <span>Compose Email Note</span>
            </button>
          </form>
        </div>

      </div>

    </div>
  );
};
