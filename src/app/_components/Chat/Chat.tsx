"use client";

import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { FaRobot, FaUser, FaComments } from "react-icons/fa";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Olá, eu sou a IA do Roberto. Como posso ajudar você hoje?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();
      const aiMessage: Message = { role: "assistant", content: data.reply };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "❌ Erro ao conectar com o servidor." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 cursor-pointer right-6 w-14 h-14 rounded-full bg-purple-600 text-white flex items-center justify-center shadow-lg animate-pulse hover:bg-purple-700 transition">
        <FaComments className="text-2xl" />
      </button>
      {open && (
        <div className="fixed bottom-24 right-6 flex flex-col w-[350px] h-[600px] border rounded-lg shadow-lg bg-gray-900 text-gray-100 z-50">
          {/* Header */}
          <div className="p-4 border-b bg-gradient-to-r rounded-t-lg from-purple-700 to-purple-500 text-white font-semibold">
            Chat IA do Roberto 💜
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            <div className="flex flex-col gap-4">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={cn(
                    "flex items-start gap-2",
                    msg.role === "user" ? "justify-end" : "justify-start"
                  )}>
                  {msg.role === "assistant" && (
                    <FaRobot className="text-purple-400 text-xl mt-1" />
                  )}
                  <div
                    className={cn(
                      "rounded-lg px-3 py-2 max-w-xs text-sm shadow",
                      msg.role === "user"
                        ? "bg-purple-600 text-white"
                        : "bg-gray-800 text-gray-100"
                    )}>
                    {msg.content}
                  </div>
                  {msg.role === "user" && (
                    <FaUser className="text-purple-400 text-xl mt-1" />
                  )}
                </div>
              ))}
              {loading && (
                <div className="flex items-center gap-2 text-sm text-purple-300">
                  <FaRobot /> Digitando...
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>

          <div className="p-4 border-t flex gap-2">
            <Input
              placeholder="Digite sua mensagem..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              className="bg-gray-800 text-gray-100 border-gray-700"
            />
            <Button
              onClick={sendMessage}
              className="bg-purple-600 hover:bg-purple-700 text-white">
              Enviar
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
