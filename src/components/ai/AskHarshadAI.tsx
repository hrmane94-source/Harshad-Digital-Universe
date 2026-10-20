import React, { useState, useRef, useEffect } from 'react';
import {
  Sparkles,
  X,
  Send,
  RotateCcw,
  ArrowUpRight,
  Compass,
  ShieldCheck,
  Bot
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { BrandMonogram } from '../ui/BrandMonogram';
import { sendChatMessage, type ChatMessage } from '../../lib/aiService';

const SUGGESTED_QUESTIONS = [
  "Who is Harshad Mane?",
  "Tell me about FALCON-404",
  "What skills is he learning?",
  "Compare FALCON-404 & Arogya AI",
  "What achievements does he have?",
  "How can I contact him?"
];

export const AskHarshadAI: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const triggerButtonRef = useRef<HTMLButtonElement>(null);

  // Auto-scroll conversation to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      // Focus input when modal opens
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen, messages, isLoading]);

  // Handle keyboard events (Escape to close)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
        triggerButtonRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputMessage).trim();
    if (!text || isLoading) return;

    setErrorMessage(null);
    setInputMessage('');

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: text,
      timestamp: Date.now()
    };

    const newHistory = [...messages, userMsg];
    setMessages(newHistory);
    setIsLoading(true);

    try {
      const response = await sendChatMessage(text, messages);

      const assistantMsg: ChatMessage = {
        id: `assistant-${Date.now()}`,
        role: 'assistant',
        content: response.reply,
        suggestedRoute: response.suggestedRoute,
        routeLabel: response.routeLabel,
        isLiveModel: response.isLiveModel,
        timestamp: Date.now()
      };

      setMessages([...newHistory, assistantMsg]);
    } catch (err: any) {
      console.error('Chat error:', err);
      setErrorMessage(err.message || 'Unable to receive response. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDownInput = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleResetChat = () => {
    setMessages([]);
    setErrorMessage(null);
    setInputMessage('');
    inputRef.current?.focus();
  };

  // Format markdown links inside message content
  const renderFormattedText = (content: string) => {
    // Regex matches markdown links: [label](url)
    const parts = content.split(/(\[[^\]]+\]\([^)]+\))/g);

    return parts.map((part, idx) => {
      const linkMatch = part.match(/\[([^\]]+)\]\(([^)]+)\)/);
      if (linkMatch) {
        const [, label, url] = linkMatch;
        const isInternal = url.startsWith('/');
        if (isInternal) {
          return (
            <Link
              key={idx}
              to={url}
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center gap-0.5 text-cobalt font-semibold hover:underline"
            >
              <span>{label}</span>
              <ArrowUpRight className="w-3 h-3 inline-block" />
            </Link>
          );
        }
        return (
          <a
            key={idx}
            href={url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-0.5 text-cobalt font-semibold hover:underline"
          >
            <span>{label}</span>
            <ArrowUpRight className="w-3 h-3 inline-block" />
          </a>
        );
      }

      // Handle bold formatting **text**
      const boldParts = part.split(/(\*\*[^*]+\*\*)/g);
      return (
        <span key={idx}>
          {boldParts.map((bPart, bIdx) => {
            const bMatch = bPart.match(/\*\*([^*]+)\*\*/);
            if (bMatch) {
              return <strong key={bIdx} className="font-semibold text-ink">{bMatch[1]}</strong>;
            }
            return <span key={bIdx}>{bPart}</span>;
          })}
        </span>
      );
    });
  };

  return (
    <>
      {/* Floating Entry Trigger Button */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
          {/* Subtle Invitation Pill */}
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-full bg-surface text-ink border border-black/[0.1] dark:border-white/[0.15] text-xs font-mono font-medium shadow-md hover:border-cobalt transition-all cursor-pointer group"
          >
            <span className="w-2 h-2 rounded-full bg-cobalt animate-pulse" />
            <span>Ask Harshad AI</span>
            <span className="text-[10px] text-muted group-hover:text-ink">→</span>
          </button>

          {/* Icon Badge Button */}
          <button
            ref={triggerButtonRef}
            type="button"
            onClick={() => setIsOpen(true)}
            aria-label="Open Ask Harshad AI assistant"
            className="w-13 h-13 rounded-2xl bg-ink text-paper border border-black/[0.12] dark:border-white/[0.2] flex items-center justify-center shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer relative group"
          >
            <div className="relative">
              <BrandMonogram size={24} className="text-paper transition-transform group-hover:scale-105" />
              <Sparkles className="w-3.5 h-3.5 text-coral absolute -top-1 -right-1 animate-spin duration-3000" />
            </div>
            {/* Live Indicator Dot */}
            <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-cobalt border-2 border-paper" />
          </button>
        </div>
      )}

      {/* Floating Dialog / Drawer */}
      {isOpen && (
        <div
          className="fixed inset-0 sm:inset-auto sm:bottom-6 sm:right-6 sm:w-[440px] sm:h-[620px] sm:max-h-[85vh] z-50 flex flex-col bg-surface border border-black/[0.12] dark:border-white/[0.15] sm:rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
          role="dialog"
          aria-modal="true"
          aria-labelledby="ai-chat-title"
        >
          {/* Chat Header */}
          <header className="p-4 sm:p-5 border-b border-black/[0.08] dark:border-white/[0.1] bg-subtle/50 flex items-center justify-between gap-3 shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-surface border border-black/[0.1] dark:border-white/[0.12] flex items-center justify-center shadow-xs">
                <BrandMonogram size={22} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 id="ai-chat-title" className="text-sm font-serif font-bold text-ink">
                    Ask Harshad AI
                  </h2>
                  <span className="px-1.5 py-0.5 rounded text-[9px] font-mono font-bold uppercase tracking-wider bg-cobalt/10 text-cobalt border border-cobalt/20">
                    PORTFOLIO GUIDE
                  </span>
                </div>
                <p className="text-[11px] text-muted font-mono">
                  Grounded in verified public portfolio records
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={handleResetChat}
                title="Restart Conversation"
                className="p-2 rounded-lg text-muted hover:text-ink hover:bg-black/[0.05] dark:hover:bg-white/[0.05] transition-colors cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  triggerButtonRef.current?.focus();
                }}
                title="Close Assistant (Esc)"
                className="p-2 rounded-lg text-muted hover:text-ink hover:bg-black/[0.05] dark:hover:bg-white/[0.05] transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </header>

          {/* Conversation Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 text-xs">

            {/* Initial Welcome Screen when conversation is empty */}
            {messages.length === 0 && (
              <div className="space-y-4 py-2">
                <div className="p-4 rounded-2xl bg-subtle/60 border border-black/[0.06] dark:border-white/[0.08] space-y-2">
                  <div className="flex items-center gap-2 text-ink font-semibold">
                    <Bot className="w-4 h-4 text-cobalt" />
                    <span>Welcome to Harshad&apos;s Portfolio</span>
                  </div>
                  <p className="text-muted leading-relaxed">
                    I am the interactive AI guide to Harshad Mane&apos;s digital universe. Ask me natural questions about his cybersecurity prototypes, engineering study at ADCET, verified hackathons, or creative visual work.
                  </p>
                  <div className="pt-2 border-t border-black/[0.06] dark:border-white/[0.08] flex items-center gap-2 text-[10px] font-mono text-faint">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>100% Grounded in verified facts &bull; No halluncinated claims</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-muted block font-semibold">
                    Suggested Questions
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {SUGGESTED_QUESTIONS.map((q, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => handleSendMessage(q)}
                        className="px-3 py-1.5 rounded-xl bg-surface border border-black/[0.08] dark:border-white/[0.1] text-ink hover:border-cobalt hover:text-cobalt text-[11px] text-left transition-all cursor-pointer font-mono shadow-2xs"
                      >
                        {q} →
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Conversation Flow */}
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'} space-y-1.5`}
              >
                <div
                  className={`max-w-[88%] p-3.5 rounded-2xl leading-relaxed whitespace-pre-wrap ${
                    msg.role === 'user'
                      ? 'bg-ink text-paper rounded-tr-xs shadow-xs font-sans'
                      : 'bg-subtle/80 text-ink border border-black/[0.06] dark:border-white/[0.08] rounded-tl-xs shadow-2xs'
                  }`}
                >
                  {renderFormattedText(msg.content)}
                </div>

                {/* Source Verification Pill */}
                {msg.suggestedRoute && msg.role === 'assistant' && (
                  <Link
                    to={msg.suggestedRoute}
                    onClick={() => setIsOpen(false)}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-surface border border-black/[0.08] dark:border-white/[0.1] text-cobalt hover:underline text-[11px] font-mono font-semibold transition-colors"
                  >
                    <Compass className="w-3 h-3" />
                    <span>{msg.routeLabel || `Explore ${msg.suggestedRoute}`}</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </Link>
                )}
              </div>
            ))}

            {/* Loading Indicator */}
            {isLoading && (
              <div className="flex items-center gap-2 p-3.5 rounded-2xl bg-subtle/80 border border-black/[0.06] dark:border-white/[0.08] text-muted w-fit">
                <span className="w-2 h-2 rounded-full bg-cobalt animate-ping" />
                <span className="font-mono text-[11px]">Consulting portfolio knowledge...</span>
              </div>
            )}

            {/* Error Message */}
            {errorMessage && (
              <div className="p-3.5 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-400 text-xs flex flex-col gap-2 font-mono">
                <span>{errorMessage}</span>
                <button
                  type="button"
                  onClick={() => handleSendMessage()}
                  className="w-fit underline text-[11px] font-bold cursor-pointer"
                >
                  Retry question ↺
                </button>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Chat Input Footer */}
          <footer className="p-3 sm:p-4 border-t border-black/[0.08] dark:border-white/[0.1] bg-surface">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-end gap-2"
            >
              <textarea
                ref={inputRef}
                rows={1}
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={handleKeyDownInput}
                placeholder="Ask about projects, skills, SIH 2026..."
                className="flex-1 max-h-32 px-3.5 py-2.5 rounded-xl bg-subtle/50 border border-black/[0.1] dark:border-white/[0.12] text-ink text-xs focus:border-cobalt focus:outline-none resize-none transition-colors font-sans"
              />
              <button
                type="submit"
                disabled={!inputMessage.trim() || isLoading}
                aria-label="Send question"
                className="p-2.5 rounded-xl bg-ink text-paper hover:opacity-90 active:scale-95 transition-all cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
            <div className="flex items-center justify-between text-[10px] font-mono text-faint mt-2 px-1">
              <span>Press Enter to send &bull; Shift+Enter for new line</span>
              <span>Ask Harshad AI v4.0</span>
            </div>
          </footer>
        </div>
      )}
    </>
  );
};
