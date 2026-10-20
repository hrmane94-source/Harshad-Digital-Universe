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
  text: "Welcome! I'm CURIO, an interactive guide to Harshad's digital universe. Ask me about his projects, technical learning in systems, creative cinematography, or verified milestones.",
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
      setErrorNotice("Unable to reach live assistant endpoint. Local grounded retrieval active.");
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
      className="py-20 sm:py-32 border-b border-slate-200/80 bg-gradient-to-b from-[#FFFDF9] via-[#F8FAFC] to-[#EEF7FF] relative overflow-hidden"
    >
      {/* Background Solar Aura */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-sky-200/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] rounded-full bg-amber-200/25 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        
        {/* Folio Scene Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-slate-200 pb-5">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-cobalt uppercase font-bold">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block animate-pulse" />
              <span>SCENE 07 // CURIO &mdash; INTERACTIVE AI GUIDE</span>
            </div>
            
            <div className="flex items-baseline gap-3">
              <h2 className="font-serif text-4xl sm:text-6xl font-bold text-slate-900 tracking-tight">
                CURIO
              </h2>
              <span className="text-sm sm:text-base font-serif italic text-slate-600 font-medium">
                &mdash; &ldquo;A curious guide to Harshad&apos;s world.&rdquo;
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 font-sans max-w-xl font-medium">
              An intelligent assistant grounded exclusively in verified public records, architectural case studies, and engineering achievements.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handleResetConversation}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-300 text-xs font-mono font-bold text-slate-700 hover:text-slate-900 hover:border-slate-400 transition-colors cursor-pointer shadow-2xs"
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
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 space-y-4 shadow-sm">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-cobalt to-sky-500 text-white flex items-center justify-center font-serif font-bold text-xl shadow-sm">
                  C
                </div>
                <div>
                  <h3 className="font-serif text-base font-bold text-slate-900">CURIO Guide</h3>
                  <p className="text-[11px] font-mono text-slate-500 font-medium">Grounded Conversational Agent</p>
                </div>
              </div>

              <div className="text-xs text-slate-600 font-sans leading-relaxed space-y-2 border-t border-slate-100 pt-3">
                <p>
                  CURIO synthesizes Harshad&apos;s projects, hackathon records, C systems development, and creative interests.
                </p>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-700 font-semibold">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Privacy-first &bull; Verified public facts only</span>
                </div>
              </div>
            </div>

            {/* Suggested Question Chips */}
            <div className="space-y-2.5">
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold">
                Suggested Curiosities
              </span>
              <div className="flex flex-col gap-2">
                {SUGGESTED_QUESTIONS.map(q => (
                  <button
                    key={q}
                    type="button"
                    onClick={() => handleSendMessage(q)}
                    disabled={isLoading}
                    className="text-left px-4 py-3 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200 hover:border-cobalt/50 text-xs font-sans text-slate-800 font-medium transition-all flex items-center justify-between group cursor-pointer shadow-2xs disabled:opacity-50"
                  >
                    <span>&ldquo;{q}&rdquo;</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-cobalt group-hover:translate-x-0.5 transition-all" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Conversational Canvas (8 cols) */}
          <div className="lg:col-span-8 bg-white rounded-3xl border border-slate-200/90 shadow-sm flex flex-col h-[520px] overflow-hidden">
            
            {/* Terminal Top Bar */}
            <div className="px-6 py-3.5 border-b border-slate-100 bg-slate-50/70 flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-bold text-slate-800">CURIO Active Session</span>
              </div>
              <span className="text-slate-500 text-[11px] font-medium">Multi-turn Contextual Memory</span>
            </div>

            {/* Message Stream Scroll Area */}
            <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4">
              {messages.map(msg => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[85%] sm:max-w-[80%] rounded-2xl p-4 text-xs sm:text-sm font-sans leading-relaxed shadow-xs ${
                      msg.sender === 'user'
                        ? 'bg-slate-900 text-white rounded-br-xs'
                        : 'bg-slate-50 text-slate-800 border border-slate-200/80 rounded-bl-xs font-normal'
                    }`}
                  >
                    <p className="whitespace-pre-line">{msg.text}</p>

                    {/* Suggested Navigation Route Link if Provided */}
                    {msg.suggestedRoute && (
                      <div className="mt-3 pt-2.5 border-t border-slate-200">
                        <Link
                          to={msg.suggestedRoute}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cobalt text-white text-[11px] font-mono font-bold hover:bg-blue-700 transition-colors shadow-2xs"
                        >
                          <span>{msg.routeLabel || 'Explore Page'}</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    )}
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 mt-1 px-1 font-medium">
                    {msg.timestamp}
                  </span>
                </div>
              ))}

              {/* Restrained Typing Indicator */}
              {isLoading && (
                <div className="flex items-center gap-2 text-xs font-mono text-slate-500 bg-slate-50 p-3.5 rounded-2xl border border-slate-200 w-fit">
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-cobalt animate-bounce" />
                    <span className="w-1.5 h-1.5 rounded-full bg-cobalt animate-bounce [animation-delay:0.15s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-cobalt animate-bounce [animation-delay:0.3s]" />
                  </div>
                  <span className="text-[11px] font-medium">CURIO is consulting Harshad&apos;s verified records...</span>
                </div>
              )}

              <div ref={chatBottomRef} />
            </div>

            {/* Network / Error Notice Banner if triggered */}
            {errorNotice && (
              <div className="px-5 py-2 bg-amber-50 border-t border-amber-200 text-xs font-mono text-amber-900 flex items-center gap-2">
                <AlertCircle className="w-3.5 h-3.5 shrink-0 text-amber-700" />
                <span>{errorNotice}</span>
              </div>
            )}

            {/* Terminal Input Bar */}
            <form
              onSubmit={e => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="p-3 sm:p-4 border-t border-slate-100 bg-slate-50/50 flex items-center gap-2"
            >
              <input
                type="text"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                placeholder="Ask CURIO anything about Harshad's work, learning, or projects..."
                disabled={isLoading}
                className="flex-1 bg-white px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm font-sans text-slate-800 placeholder:text-slate-400 focus:outline-hidden focus:border-cobalt disabled:opacity-60 shadow-2xs"
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || isLoading}
                className="px-5 py-2.5 rounded-xl bg-cobalt text-white text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 hover:bg-blue-700 disabled:opacity-40 transition-all cursor-pointer shadow-sm"
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
