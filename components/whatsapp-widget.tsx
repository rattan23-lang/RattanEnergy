"use client";

import { useEffect, useRef, useState } from "react";

const PHONE_NUMBER = "919814008335";

function getWhatsAppLink(message: string) {
  return `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
}

function fireConversionTracking() {
  if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
    (window as any).gtag("event", "conversion", {
      send_to: "AW-10941887411/2c-rCPTw_a8cELPnv-Eo",
    });
  }
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden="true">
      <path d="M16.001 3C9.107 3 3.5 8.607 3.5 15.5c0 2.418.69 4.673 1.885 6.59L3 29l7.115-2.34A12.43 12.43 0 0 0 16.001 28C22.894 28 28.5 22.393 28.5 15.5S22.894 3 16.001 3Zm0 22.7c-1.99 0-3.95-.53-5.64-1.53l-.405-.24-4.222 1.39 1.41-4.116-.264-.422A10.16 10.16 0 0 1 5.3 15.5C5.3 9.62 10.12 4.8 16.001 4.8c5.881 0 10.7 4.82 10.7 10.7 0 5.88-4.819 10.7-10.7 10.7Zm5.86-8.012c-.32-.16-1.892-.933-2.184-1.04-.293-.107-.506-.16-.719.16-.213.32-.825 1.04-1.012 1.253-.187.213-.373.24-.692.08-.32-.16-1.348-.497-2.567-1.586-.949-.846-1.59-1.892-1.777-2.211-.187-.32-.02-.493.16-.653.16-.146.36-.38.533-.573.16-.187.213-.32.32-.533.107-.213.053-.4-.04-.56-.094-.16-.853-2.054-1.174-2.815-.293-.706-.587-.61-.8-.62-.213-.011-.453-.013-.693-.013-.24 0-.624.08-.95.4-.32.32-1.227 1.2-1.227 2.92 0 1.72 1.253 3.387 1.428 3.627.176.24 2.43 3.747 5.987 5.107 3.557 1.36 3.557.907 4.196.853.64-.054 1.892-.773 2.158-1.52.267-.747.267-1.387.187-1.52-.08-.133-.293-.213-.613-.373Z" />
    </svg>
  );
}

function SendIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M3.4 20.6 21 12 3.4 3.4 3 10l13 2-13 2z" />
    </svg>
  );
}

const QUICK_REPLIES = [
  { label: "🔌 Generators", message: "Hi, I'm interested in your generators. Can you share more details?" },
  { label: "💰 Get a Quote", message: "Hi, I'd like to get a price quote." },
  { label: "🛠️ Service Support", message: "Hi, I need help with service/support for my generator." },
];

type ChatMessage = {
  from: "bot" | "user";
  text: string;
};

export function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { from: "bot", text: "Hi there! 👋 Welcome to Rattan Energy." },
    { from: "bot", text: "What would you like help with today?" },
  ]);
  const [input, setInput] = useState("");
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("whatsapp-widget-shown")) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
      sessionStorage.setItem("whatsapp-widget-shown", "true");
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  function sendToWhatsApp(message: string) {
    // Open WhatsApp as the very first action in this click handler, otherwise
    // some browsers' popup blockers will block window.open if it runs after
    // a state update.
    window.open(getWhatsAppLink(message), "_blank", "noopener,noreferrer");
    setMessages((prev) => [
      ...prev,
      { from: "user", text: message },
      { from: "bot", text: "Great, connecting you on WhatsApp now…" },
    ]);
    fireConversionTracking();
  }

  function handleSend() {
    const trimmed = input.trim();
    if (!trimmed) return;
    sendToWhatsApp(trimmed);
    setInput("");
  }

  return (
    <div className="fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-3">
      {isOpen && (
        <div className="flex h-[420px] w-80 flex-col overflow-hidden rounded-xl border bg-background shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between bg-[#075E54] px-4 py-3 text-white">
            <div className="flex items-center gap-2">
              <div className="relative">
                <WhatsAppIcon className="h-7 w-7" />
                <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-[#075E54] bg-green-400" />
              </div>
              <div>
                <p className="text-sm font-semibold">Rattan Energy</p>
                <p className="text-xs text-white/80">Online · Typically replies within minutes</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close chat widget"
              className="text-white/80 hover:text-white"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div ref={bodyRef} className="flex-1 space-y-2 overflow-y-auto bg-[#e5ddd5] p-4">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[85%] rounded-lg px-3 py-2 text-sm shadow ${
                  m.from === "bot"
                    ? "rounded-tl-none bg-white text-gray-800"
                    : "ml-auto rounded-tr-none bg-[#d9fdd3] text-gray-800"
                }`}
              >
                {m.text}
              </div>
            ))}

            {/* Quick replies */}
            <div className="flex flex-wrap gap-2 pt-1">
              {QUICK_REPLIES.map((q) => (
                <button
                  key={q.label}
                  onClick={() => sendToWhatsApp(q.message)}
                  className="rounded-full border border-[#25D366] bg-white px-3 py-1.5 text-xs font-medium text-[#075E54] hover:bg-[#25D366] hover:text-white"
                >
                  {q.label}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="flex items-center gap-2 border-t bg-background p-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type a message..."
              className="flex-1 rounded-full border bg-white px-3 py-2 text-sm text-gray-800 outline-none focus:border-[#25D366]"
            />
            <button
              onClick={handleSend}
              aria-label="Send message"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white hover:bg-[#1ebe5b]"
            >
              <SendIcon className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Open WhatsApp chat"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105"
      >
        <WhatsAppIcon className="h-8 w-8" />
      </button>
    </div>
  );
}
