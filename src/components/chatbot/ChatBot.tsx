"use client";

import { useChat } from "@ai-sdk/react";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { messages, sendMessage, status } = useChat();

  const isLoading = status === "streaming" || status === "submitted";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    const text = input;
    setInput("");
    await sendMessage({ text });
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[var(--color-primary)] text-white rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_4px_30px_rgba(0,0,0,0.25)] hover:scale-105 transition-all duration-300 flex items-center justify-center"
        aria-label="チャットを開く"
      >
        {isOpen ? (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0, 1] }}
            className="fixed bottom-24 right-4 z-50 w-[calc(100vw-32px)] sm:w-[380px] bg-white rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.12)] border border-[var(--color-border)]/30 flex flex-col overflow-hidden"
            style={{ height: "min(520px, calc(100dvh - 120px))" }}
          >
            <div className="px-5 py-4 flex items-center gap-3 border-b border-[var(--color-border)]/30">
              <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-[var(--color-primary)]">AIアシスタント</p>
                <p className="text-[10px] text-[var(--color-text-light)]">お気軽にご質問ください</p>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.length === 0 && (
                <div className="bg-[var(--color-bg-gray)] rounded-2xl p-3.5 text-sm text-[var(--color-text-light)] max-w-[85%] leading-relaxed">
                  こんにちは！スクールサポートAI事業や安全運転講習など、お気軽にご質問ください。
                </div>
              )}
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`rounded-2xl p-3.5 text-sm max-w-[85%] ${msg.role === "user" ? "bg-[var(--color-primary)] text-white" : "bg-[var(--color-bg-gray)] text-[var(--color-primary)]"}`}>
                    <p className="whitespace-pre-wrap leading-relaxed">
                      {msg.parts?.filter((part) => part.type === "text").map((part) => part.text).join("") || ""}
                    </p>
                  </div>
                </div>
              ))}
              {isLoading && messages[messages.length - 1]?.role === "user" && (
                <div className="flex justify-start">
                  <div className="bg-[var(--color-bg-gray)] rounded-2xl p-3.5 text-sm text-[var(--color-text-light)]">
                    <span className="inline-flex gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-text-light)] animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-text-light)] animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-text-light)] animate-bounce" style={{ animationDelay: "300ms" }} />
                    </span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSubmit} className="border-t border-[var(--color-border)]/30 p-3 flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="メッセージを入力..."
                className="flex-1 px-4 py-2.5 text-sm bg-[var(--color-bg-gray)] text-[var(--color-primary)] rounded-full focus:ring-2 focus:ring-[var(--color-accent)]/30 focus:border-transparent outline-none placeholder:text-[var(--color-text-light)]"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="w-9 h-9 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center hover:bg-[var(--color-primary-light)] transition-all duration-200 disabled:opacity-20"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
