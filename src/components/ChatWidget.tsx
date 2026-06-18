import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, MessageCircle } from 'lucide-react';

interface ChatMessage {
  sender: 'ai' | 'user';
  text: string;
  time: string;
}

const QUICK_PROMPTS = [
  { text: '📞 What is your contact phone?', action: 'phone' },
  { text: '💻 Tell me about AI & Cloud services', action: 'services' },
  { text: '👥 How do we start consultation?', action: 'consult' },
  { text: '🛡️ Is your code SLA-backed?', action: 'sla' },
];

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      sender: 'ai',
      text: "Hello! I am the Kasturag Tech digital assistance agent. How can we help you scale your enterprise systems today?",
      time: 'Just now'
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const formatTime = () => {
    const d = new Date();
    return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const getSystemResponse = (cleanedText: string): string => {
    if (cleanedText.includes('phone') || cleanedText.includes('number') || cleanedText.includes('contact') || cleanedText.includes('call') || cleanedText.includes('mobile')) {
      return "You can reach Kasturag Tech technical coordinators directly at our primary line: 📞 +91 96992 14019. Alternatively, email kasturagtech@gmail.com.";
    }
    if (cleanedText.includes('ai') || cleanedText.includes('llm') || cleanedText.includes('model') || cleanedText.includes('cloud') || cleanedText.includes('devops') || cleanedText.includes('services')) {
      return "Kasturag Tech specializes in high-performance AI integration (fine-tuning, structured model fine-tuning, RAG data grids), AWS/GCP declarative cloud setups using Kubernetes, and robust DevOps CI/CD pipeline automation.";
    }
    if (cleanedText.includes('consult') || cleanedText.includes('start') || cleanedText.includes('schedule') || cleanedText.includes('meeting')) {
      return "To schedule a dedicated architecture consultation session, please populate our 'Inquiry Form' on the contact page, or call our line directly at +91 96992 14019. We will establish a secure slot within 2 hours!";
    }
    if (cleanedText.includes('sla') || cleanedText.includes('uptime') || cleanedText.includes('guarantee') || cleanedText.includes('security')) {
      return "Absolutely. All enterprise pipelines shipped by Kasturag Tech are backed by strict SLA agreements guaranteeing 99.9% system uptime, container isolated boundaries, and comprehensive ISO 27001/SOC2 compliance.";
    }
    if (cleanedText.includes('hello') || cleanedText.includes('hi') || cleanedText.includes('hey')) {
      return "Hello! How can our enterprise architecture team assist you? Choose one of our popular quick prompts or type any questions regarding your cloud, container, or AI workloads.";
    }
    return "Thank you for reaching out to Kasturag Tech. Our lead engineer coordinators would love to talk about this directly. Call us at +91 96992 14019 or submit an inquiry using the contact form, and we will establish a secure slot for you immediately.";
  };

  const handleSendMessage = (textToSend: string) => {
    if (!textToSend.trim()) return;

    // Add user message
    const userMsg: ChatMessage = {
      sender: 'user',
      text: textToSend,
      time: formatTime()
    };
    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    const cleaned = textToSend.toLowerCase();

    // Simulate thinking delay
    setTimeout(() => {
      const responseText = getSystemResponse(cleaned);
      const aiMsg: ChatMessage = {
        sender: 'ai',
        text: responseText,
        time: formatTime()
      };
      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
    }, 1000);
  };

  const executeQuickPrompt = (promptText: string) => {
    handleSendMessage(promptText);
  };

  // Scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end shrink-0" id="chat-assistance-container">
      {/* Expanded chat panel */}
      {isOpen && (
        <div className="mb-4 w-80 sm:w-96 rounded-2xl bg-white border border-slate-200/80 shadow-2xl overflow-hidden flex flex-col h-[500px] animate-fade-in">
          {/* Header */}
          <div className="bg-slate-950 p-4 flex items-center justify-between text-white flex-row">
            <div className="flex items-center gap-2.5">
              <span className="block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-display text-sm font-bold tracking-tight">Kasturag Tech Support</span>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white p-1 hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages viewport */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-50/50">
            {messages.map((m, idx) => (
              <div 
                key={idx}
                className={`flex flex-col max-w-[85%] ${
                  m.sender === 'user' ? 'ml-auto items-end' : 'mr-auto items-start'
                }`}
              >
                <div className={`p-3 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                  m.sender === 'user' 
                    ? 'bg-blue-600 text-white rounded-tr-none' 
                    : 'bg-white text-slate-800 border border-slate-100 rounded-tl-none shadow-sm'
                }`}>
                  {m.text}
                </div>
                <span className="text-[10px] text-slate-405 mt-1 block px-1">{m.time}</span>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-1 bg-white border border-slate-100 px-3.5 py-2 rounded-2xl rounded-tl-none max-w-[30%] shrink-0">
                <span className="h-2 w-2 rounded-full bg-slate-400 animate-bounce" />
                <span className="h-2 w-2 rounded-full bg-slate-400 animate-bounce [animation-delay:0.2s]" />
                <span className="h-2 w-2 rounded-full bg-slate-400 animate-bounce [animation-delay:0.4s]" />
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts list when list is idle */}
          {!isTyping && (
            <div className="p-3 bg-white border-t border-slate-100 flex flex-wrap gap-2 gap-y-1.5 shrink-0 max-h-[140px] overflow-y-auto">
              {QUICK_PROMPTS.map((prompt, i) => (
                <button
                  key={i}
                  onClick={() => executeQuickPrompt(prompt.text.replace(/📞 |💻 |👥 |🛡️ /, ''))}
                  className="bg-slate-50 hover:bg-blue-50 border border-slate-100 hover:border-blue-200 text-slate-700 hover:text-blue-600 rounded-lg text-[11px] font-semibold py-1.5 px-2.5 transition-all text-left cursor-pointer"
                >
                  {prompt.text}
                </button>
              ))}
            </div>
          )}

          {/* Chat text input and send action */}
          <div className="p-3.5 bg-white border-t border-slate-100 flex gap-2 shrink-0">
            <input 
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage(inputText)}
              placeholder="Type your inquiry regarding custom software..."
              className="flex-1 px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-blue-600 transition-all font-sans"
            />
            <button
              onClick={() => handleSendMessage(inputText)}
              className="h-10 w-10 rounded-xl bg-slate-950 text-white flex items-center justify-center shrink-0 hover:bg-slate-850 active:scale-95 transition-all cursor-pointer"
            >
              <Send size={16} />
            </button>
          </div>

          {/* Direct WhatsApp link */}
          <div className="bg-emerald-50 py-2 px-4 border-t border-emerald-100 flex justify-between items-center text-[10px] sm:text-xs">
            <span className="text-emerald-700 font-semibold flex items-center gap-1 shrink-0">
              <MessageCircle size={14} /> Prefer direct message?
            </span>
            <a 
              href="https://wa.me/919699214019" 
              target="_blank" 
              rel="noreferrer"
              className="text-white bg-[#25D366] hover:brightness-105 rounded px-2.5 py-1 font-bold tracking-tight transition-all text-center uppercase"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      )}

      {/* Launcher Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2.5 rounded-full bg-slate-950 px-6 py-4 shadow-2xl hover:bg-slate-850 hover:scale-[1.03] active:scale-95 text-white transition-all duration-300 border border-slate-900 cursor-pointer"
        id="widget-launcher-btn"
      >
        <span className="font-display font-bold text-sm tracking-wide hidden sm:block">
          {isOpen ? 'Close Live Consultant' : 'Chat with an Expert'}
        </span>
        <MessageSquare size={18} className="text-blue-400 rotate-y-180 animate-pulse" />
      </button>
    </div>
  );
}
