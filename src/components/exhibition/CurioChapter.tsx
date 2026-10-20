import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Send, 
  ArrowRight, 
  RotateCcw, 
  ShieldCheck,
  AlertCircle
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
  text: "Welcome. I'm CURIO, a curious guide to Harshad's world. Ask me about his projects, technical journey, creative work, or achievements.",
  timestamp: 'Just now'
};

const SUGGESTED_QUESTIONS = [
  "Who is Harshad?",
  "Explore FALCON-404",
  "What is he learning?",
  "Compare his projects",
  "How can I contact him?"
];

export const CurioChapter: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_MESSAGE]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorNotice, setErrorNotice] = useState<string | null>(null);
  const chatBottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputValue).trim();
    if (!text || isLoading) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInputValue('');
    setIsLoading(true);
    setErrorNotice(null);

    // Format conversation history for service multi-turn context
    const conversationHistory: ServiceChatMessage[] = messages.map(m => ({
      id: m.id,
      role: m.sender === 'user' ? 'user' : 'assistant',
      content: m.text,
      timestamp: Date.now()
    }));

    try {
      const response = await sendChatMessage(text, conversationHistory);
      const curioMsg: ChatMessage = {
        id: `curio-${Date.now()}`,
        sender: 'curio',
        text: response.reply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        suggestedRoute: response.suggestedRoute,
        routeLabel: response.routeLabel
      };
      setMessages(prev => [...prev, curioMsg]);
    } catch {
      setErrorNotice("Unable to reach the assistant. Grounded fallback is available.");
      const fallbackMsg: ChatMessage = {
        id: `curio-err-${Date.now()}`,
        sender: 'curio',
        text: "I encountered a network issue, but you can explore Harshad's projects, technical journey, and verified credentials using the navigation links above.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, fallbackMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetConversation = () => {
    setMessages([INITIAL_MESSAGE]);
    setInputValue('');
    setErrorNotice(null);
  };

  return (
    <section 
      id="chapter-06" 
      className="py-20 sm:py-32 border-b border-black/[0.08] dark:border-white/[0.08] bg-surface relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Folio Chapter Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-black/[0.08] dark:border-white/[0.08] pb-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-cobalt uppercase font-bold">
              <span className="w-2 h-2 rounded-full bg-cobalt inline-block" />
              <span>CHAPTER 06 // CURIO, THE PORTFOLIO GUIDE</span>
            </div>
            
            <div className="flex items-baseline gap-3">
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-ink tracking-tight">
                CURIO
              </h2>
              <span className="text-sm sm:text-base font-serif italic text-muted">
                &mdash; &ldquo;A curious guide to Harshad&apos;s world.&rdquo;
              </span>
            </div>

            <p className="text-xs sm:text-sm text-muted font-sans max-w-xl">
              An intelligent assistant grounded exclusively in verified public records, architectural case studies, and engineering achievements.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handleResetConversation}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-subtle border border-black/[0.08] dark:border-white/[0.1] text-xs font-mono text-muted hover:text-ink transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Chat</span>
            </button>
          </div>
        </div>

        {/* CURIO Salon Terminal Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Context & Suggested Prompts (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-paper rounded-2xl p-6 border border-black/[0.08] dark:border-white/[0.08] space-y-4 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cobalt text-white flex items-center justify-center font-serif font-bold text-lg shadow-xs">
                  C
                </div>
                <div>
                  <h3 className="font-serif text-base font-bold text-ink">CURIO Guide</h3>
                  <p className="text-[11px] font-mono text-muted">Grounded Conversational Agent</p>
                </div>
              </div>

              <div className="text-xs text-muted font-sans leading-relaxed space-y-2 border-t border-black/[0.06] dark:border-white/[0.06] pt-3">
                <p>
                  CURIO synthesizes Harshad&apos;s projects, hackathon records, C systems development, and creative interests.
                </p>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-600 dark:text-emerald-400">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Privacy-first & verified facts only</span>
                </div>
              </div>
            </div>

            {/* Suggested Question Chips */}
            <div className="space-y-2.5">
              <span className="text-[10px] font-mono uppercase tracking-widest text-faint font-semibold">
                Suggested Curiosities
              </span>
              <div className="flex flex-col gap-2">
                {SUGGESTED_QUESTIONS.map(q => (
                  <button
                    key={q}
                    type="button"
                    onClick={() => handleSendMessage(q)}
                    disabled={isLoading}
                    className="text-left px-4 py-2.5 rounded-xl bg-paper hover:bg-subtle border border-black/[0.08] dark:border-white/[0.08] hover:border-cobalt/40 text-xs font-sans text-ink transition-all flex items-center justify-between group cursor-pointer disabled:opacity-50"
                  >
                    <span>&ldquo;{q}&rdquo;</span>
                    <ArrowRight className="w-3 h-3 text-muted group-hover:text-cobalt group-hover:translate-x-0.5 transition-all" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Conversational Canvas (8 cols) */}
          <div className="lg:col-span-8 bg-paper rounded-2xl border border-black/[0.08] dark:border-white/[0.08] shadow-xs flex flex-col h-[520px] overflow-hidden">
            
            {/* Terminal Top Bar */}
            <div className="px-5 py-3.5 border-b border-black/[0.08] dark:border-white/[0.08] bg-subtle/50 flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-semibold text-ink">CURIO Active Session</span>
              </div>
              <span className="text-muted text-[11px]">Multi-turn Contextual Memory</span>
            </div>

            {/* Message Stream Scroll Area */}
            <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4">
              {messages.map(msg => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[85%] sm:max-w-[78%] rounded-2xl p-4 text-xs sm:text-sm font-sans leading-relaxed shadow-xs ${
                      msg.sender === 'user'
                        ? 'bg-ink text-paper rounded-br-xs'
                        : 'bg-surface text-ink border border-black/[0.08] dark:border-white/[0.08] rounded-bl-xs'
                    }`}
                  >
                    <p className="whitespace-pre-line">{msg.text}</p>

                    {/* Suggested Navigation Route Link if Provided */}
                    {msg.suggestedRoute && (
                      <div className="mt-3 pt-2.5 border-t border-black/[0.08] dark:border-white/[0.08]">
                        <Link
                          to={msg.suggestedRoute}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cobalt text-white text-[11px] font-mono font-semibold hover:bg-cobalt/90 transition-colors shadow-xs"
                        >
                          <span>{msg.routeLabel || 'Explore Page'}</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    )}
                  </div>
                  <span className="text-[10px] font-mono text-faint mt-1 px-1">
                    {msg.timestamp}
                  </span>
                </div>
              ))}

              {/* Restrained Typing Indicator */}
              {isLoading && (
                <div className="flex items-center gap-2 text-xs font-mono text-muted bg-surface p-3.5 rounded-2xl border border-black/[0.08] dark:border-white/[0.08] w-fit">
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-cobalt animate-bounce" />
                    <span className="w-1.5 h-1.5 rounded-full bg-cobalt animate-bounce [animation-delay:0.15s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-cobalt animate-bounce [animation-delay:0.3s]" />
                  </div>
                  <span className="text-[11px]">CURIO is consulting Harshad&apos;s records...</span>
                </div>
              )}

              <div ref={chatBottomRef} />
            </div>

            {/* Network / Error Notice Banner if triggered */}
            {errorNotice && (
              <div className="px-5 py-2 bg-amber-500/10 border-t border-amber-500/20 text-xs font-mono text-amber-700 dark:text-amber-400 flex items-center gap-2">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errorNotice}</span>
              </div>
            )}

            {/* Terminal Input Bar */}
            <form
              onSubmit={e => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="p-3 sm:p-4 border-t border-black/[0.08] dark:border-white/[0.08] bg-surface flex items-center gap-2"
            >
              <input
                type="text"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                placeholder="Ask CURIO anything about Harshad..."
                disabled={isLoading}
                className="flex-1 bg-subtle px-4 py-2.5 rounded-xl border border-black/[0.08] dark:border-white/[0.08] text-xs sm:text-sm font-sans text-ink placeholder:text-muted focus:outline-hidden focus:border-cobalt disabled:opacity-60"
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || isLoading}
                className="px-4 py-2.5 rounded-xl bg-cobalt text-white text-xs font-mono font-semibold flex items-center gap-1.5 hover:bg-cobalt/90 disabled:opacity-40 transition-all cursor-pointer shadow-xs"
              >
                <span>Send</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>

          </div>

        </div>

      </div>
    </section>
  );
};
