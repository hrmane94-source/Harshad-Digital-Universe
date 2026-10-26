import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Send, 
  ArrowRight, 
  RotateCcw, 
  ShieldCheck,
  Bot,
  User,
  AlertCircle,
  MessageSquare
} from 'lucide-react';
import { sendChatMessage, type ChatMessage as ServiceChatMessage } from '../../lib/aiService';

interface ChatMessage {
  id: string;
  sender: 'curio' | 'user';
  text: string;
  timestamp: string;
  suggestedRoute?: string | null;
  routeLabel?: string | null;
}

const INITIAL_MESSAGE: ChatMessage = {
  id: 'msg-initial',
  sender: 'curio',
  text: "Welcome! I'm CURIO, an interactive AI guide to Harshad's digital universe. Ask me about his projects, technical learning in systems, creative cinematography, or verified milestones.",
  timestamp: 'Just now'
};

const SUGGESTED_QUESTIONS = [
  "Who is Harshad?",
  "Explore FALCON-404",
  "What is he learning?",
  "Compare his projects",
  "How can I contact him?"
];

export const StudioCurio: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_MESSAGE]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorNotice, setErrorNotice] = useState<string | null>(null);

  const chatContainerRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  // ONLY scroll the inner chat container when messages change, NEVER on initial mount or window scroll
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages, isLoading]);

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputValue).trim();
    if (!text || isLoading) return;

    setErrorNotice(null);
    const userMsg: ChatMessage = {
      id: `usr-${Date.now()}`,
      sender: 'user',
      text,
      timestamp: 'Just now'
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    try {
      const historyForApi: ServiceChatMessage[] = messages
        .filter(m => m.id !== 'msg-initial')
        .map((m, idx) => ({
          id: m.id,
          role: m.sender === 'curio' ? 'assistant' : 'user',
          content: m.text,
          timestamp: Date.now() - (messages.length - idx) * 1000
        }));

      const response = await sendChatMessage(text, historyForApi);

      const curioMsg: ChatMessage = {
        id: `curio-${Date.now()}`,
        sender: 'curio',
        text: response.reply,
        timestamp: 'Just now',
        suggestedRoute: response.suggestedRoute,
        routeLabel: response.routeLabel
      };

      setMessages(prev => [...prev, curioMsg]);
    } catch {
      setErrorNotice("Unable to reach CURIO at this moment. You can browse the portfolio sections directly.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleReset = () => {
    setMessages([INITIAL_MESSAGE]);
    setErrorNotice(null);
  };

  return (
    <section 
      id="chapter-06" 
      className="py-20 sm:py-32 border-b border-border-hairline bg-gradient-to-b from-paper via-secondary/20 to-surface/80 text-ink relative overflow-hidden transition-colors duration-250"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 right-1/4 w-[550px] h-[550px] rounded-full bg-cobalt/10 dark:bg-cobalt/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-border-hairline pb-5">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-cobalt uppercase font-bold">
              <span className="w-2.5 h-2.5 rounded-full bg-cobalt inline-block animate-pulse shadow-[0_0_8px_rgba(49,94,235,0.6)]" />
              <span className="text-ink">SECTION 07</span>
              <span className="text-muted/40">//</span>
              <span>CURIO &bull; THE PORTFOLIO SALON</span>
            </div>
            
            <div className="flex items-baseline gap-3">
              <h2 className="font-serif text-4xl sm:text-6xl font-normal text-ink tracking-tight">
                CURIO
              </h2>
              <span className="text-sm sm:text-base font-serif italic text-muted font-medium">
                &mdash; &ldquo;A curious guide to Harshad&apos;s world.&rdquo;
              </span>
            </div>

            <p className="text-xs sm:text-sm text-muted font-sans max-w-xl font-medium">
              An intelligent assistant grounded exclusively in verified public records, architectural case studies, and engineering achievements. Optional &amp; polite.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-surface dark:bg-card border border-border-hairline text-xs font-mono font-bold text-ink hover:text-cobalt hover:border-cobalt/40 transition-colors cursor-pointer shadow-2xs active:scale-95"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Chat</span>
            </button>
          </div>
        </div>

        {/* Studio Salon Terminal Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Context & Prompts (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Grounding Info Card */}
            <div className="p-6 rounded-2xl bg-surface dark:bg-card border border-border-hairline space-y-4 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-700 dark:text-emerald-400 font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>VERIFIED GROUNDING PROTOCOL</span>
              </div>
              <p className="text-xs text-muted leading-relaxed font-sans">
                CURIO answers only with documented facts. It will not fabricate accomplishments, grades, awards, or fake employment claims.
              </p>
              <div className="text-[11px] font-mono text-muted space-y-1 border-t border-border-hairline pt-3">
                <div className="flex items-center justify-between">
                  <span>Backend Engine:</span>
                  <span className="font-bold text-ink">Grounded AI Service</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Context Scope:</span>
                  <span className="font-bold text-ink">Harshad Mane Dossier</span>
                </div>
              </div>
            </div>

            {/* Quick Prompts */}
            <div className="space-y-2.5">
              <span className="text-xs font-mono uppercase tracking-wider text-muted font-bold block">
                SUGGESTED INQUIRIES
              </span>
              <div className="flex flex-col gap-2">
                {SUGGESTED_QUESTIONS.map((q) => (
                  <button
                    key={q}
                    type="button"
                    onClick={() => handleSendMessage(q)}
                    disabled={isLoading}
                    className="w-full text-left p-3 rounded-xl bg-surface dark:bg-card hover:bg-subtle border border-border-hairline text-xs font-mono text-ink transition-all hover:border-cobalt/40 flex items-center justify-between group cursor-pointer disabled:opacity-50 shadow-2xs"
                  >
                    <span>{q}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-muted group-hover:text-cobalt transition-colors" />
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Chat Terminal (8 cols) */}
          <div className="lg:col-span-8 p-6 sm:p-7 rounded-2xl bg-surface dark:bg-card border border-border-hairline shadow-xs flex flex-col h-[520px]">
            
            {/* Terminal Header */}
            <div className="flex items-center justify-between border-b border-border-hairline pb-3 text-xs font-mono text-muted">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-bold text-ink">SESSION ACTIVE</span>
              </div>
              <span className="flex items-center gap-1.5 text-cobalt font-bold">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>AI ASSISTANT</span>
              </span>
            </div>

            {/* Message Stream with ref to INNER CONTAINER ONLY */}
            <div 
              ref={chatContainerRef} 
              className="flex-1 overflow-y-auto py-4 space-y-4 pr-1 scroll-smooth"
            >
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-3 text-xs font-sans ${
                    msg.sender === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  {msg.sender === 'curio' && (
                    <div className="w-7 h-7 rounded-lg bg-cobalt text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                      <Bot className="w-4 h-4" />
                    </div>
                  )}

                  <div
                    className={`max-w-[85%] sm:max-w-[75%] rounded-2xl p-4 space-y-2 ${
                      msg.sender === 'user'
                        ? 'bg-ink text-paper rounded-tr-none shadow-xs'
                        : 'bg-subtle/70 dark:bg-card-elevated border border-border-hairline text-ink rounded-tl-none shadow-2xs'
                    }`}
                  >
                    <p className="leading-relaxed whitespace-pre-wrap">{msg.text}</p>

                    {msg.suggestedRoute && (
                      <div className="pt-2 border-t border-border-hairline">
                        <Link
                          to={msg.suggestedRoute}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface dark:bg-card border border-cobalt/30 text-cobalt font-mono text-xs font-bold hover:bg-cobalt/10 transition-colors"
                        >
                          <span>{msg.routeLabel || 'Explore Page'}</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    )}

                    <div className={`text-[10px] font-mono ${msg.sender === 'user' ? 'text-white/60' : 'text-muted'}`}>
                      {msg.timestamp}
                    </div>
                  </div>

                  {msg.sender === 'user' && (
                    <div className="w-7 h-7 rounded-lg bg-subtle text-ink flex items-center justify-center shrink-0 mt-0.5 shadow-2xs border border-border-hairline">
                      <User className="w-4 h-4" />
                    </div>
                  )}
                </div>
              ))}

              {isLoading && (
                <div className="flex gap-3 text-xs font-sans justify-start">
                  <div className="w-7 h-7 rounded-lg bg-cobalt text-white flex items-center justify-center shrink-0 shadow-2xs">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="p-4 rounded-2xl bg-subtle/70 dark:bg-card-elevated border border-border-hairline text-ink rounded-tl-none flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cobalt animate-ping" />
                    <span className="font-mono text-muted text-xs">CURIO is consulting verified records...</span>
                  </div>
                </div>
              )}

              {errorNotice && (
                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-800 dark:text-amber-300 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-amber-500" />
                  <span>{errorNotice}</span>
                </div>
              )}
            </div>

            {/* Input Bar — No autofocus on mount */}
            <div className="pt-3 border-t border-border-hairline">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask CURIO anything about Harshad's work, learning, or background..."
                  disabled={isLoading}
                  className="flex-1 px-4 py-3 rounded-xl bg-subtle/60 dark:bg-card-elevated border border-border-hairline text-xs font-sans text-ink placeholder:text-muted focus:outline-none focus:border-cobalt transition-colors"
                />
                <button
                  type="button"
                  onClick={() => handleSendMessage()}
                  disabled={isLoading || !inputValue.trim()}
                  className="px-4 py-3 rounded-xl bg-gradient-to-r from-cobalt to-blue-600 text-white hover:opacity-90 disabled:opacity-40 transition-all font-mono text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-xs active:scale-95"
                >
                  <span>Send</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
