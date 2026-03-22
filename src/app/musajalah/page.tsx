"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import Disclaimer from "@/components/Disclaimer";

interface Turn {
  type: "user" | "app" | "system";
  text: string;
  poetName?: string;
}

export default function MusajalahPage() {
  const [turns, setTurns] = useState<Turn[]>([
    {
      type: "system",
      text: "قُل بيتاً من الشعر، وسأردّ ببيت يبدأ بآخر حرف من بيتك.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [nextLetter, setNextLetter] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [turns]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim() || loading || gameOver) return;

    const userVerse = input.trim();
    setInput("");
    setLoading(true);

    setTurns((prev) => [...prev, { type: "user", text: userVerse }]);

    try {
      const res = await fetch("/api/musajalah/turn", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userVerse, requiredFirstLetter: nextLetter }),
      });
      const data = await res.json();

      if (data.type === "error") {
        setTurns((prev) => [
          ...prev.slice(0, -1),
          { type: "system", text: data.message },
        ]);
      } else if (data.type === "concede") {
        setTurns((prev) => [...prev, { type: "system", text: data.message }]);
        setScore((s) => s + 1);
        setGameOver(true);
      } else if (data.type === "verse") {
        setTurns((prev) => [
          ...prev,
          { type: "app", text: data.turn.appVerse, poetName: data.turn.poetName },
        ]);
        setNextLetter(data.turn.nextLetter);
        setScore((s) => s + 1);
      }
    } catch {
      setTurns((prev) => [...prev, { type: "system", text: "حدث خطأ" }]);
    } finally {
      setLoading(false);
    }
  }

  async function resetGame() {
    // Reset server session
    await fetch("/api/musajalah/turn", {
      method: "DELETE",
    }).catch(() => {});
    setTurns([{ type: "system", text: "جولة جديدة. قُل بيتاً." }]);
    setNextLetter(null);
    setScore(0);
    setGameOver(false);
    setInput("");
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b border-[var(--border)] sticky top-0 z-10 bg-[var(--bg)]">
        <div className="max-w-2xl mx-auto px-6 py-3 flex items-center justify-between">
          <Link href="/" className="text-[var(--muted)] hover:text-[var(--fg)] text-sm">
            العودة
          </Link>
          <h1 className="text-xl">المساجلة</h1>
          <div className="flex items-center gap-3">
            <span className="text-sm text-[var(--muted)]">{score}</span>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Chat */}
      <div className="flex-1 overflow-y-auto max-w-2xl w-full mx-auto px-6 py-8">
        <div className="space-y-6">
          {turns.map((turn, i) => (
            <ChatBubble key={i} turn={turn} />
          ))}
          {loading && <p className="text-[var(--muted)] text-sm">...</p>}
          <div ref={chatEndRef} />
        </div>
      </div>

      {/* Input */}
      <div className="border-t border-[var(--border)] bg-[var(--bg)] sticky bottom-0">
        <div className="max-w-2xl mx-auto px-6 py-4">
          {nextLetter && !gameOver && (
            <p className="text-center text-sm text-[var(--muted)] mb-3">
              ابدأ بحرف <span className="text-lg font-bold text-[var(--accent)]">{nextLetter}</span>
            </p>
          )}
          {gameOver ? (
            <div className="text-center">
              <button
                onClick={resetGame}
                className="text-[var(--accent)] border border-[var(--accent)] px-6 py-2 rounded text-sm hover:bg-[var(--accent)] hover:text-[var(--bg)] transition-colors"
              >
                جولة جديدة
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="اكتب بيتاً..."
                className="flex-1 bg-[var(--surface)] border border-[var(--border)] rounded-md px-4 py-3 text-base focus:outline-none focus:border-[var(--accent)] placeholder:text-[var(--muted)]"
                dir="rtl"
                disabled={loading}
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="bg-[var(--fg)] text-[var(--bg)] px-5 py-3 rounded-md text-sm hover:opacity-80 transition-opacity disabled:opacity-30"
              >
                أرسل
              </button>
            </form>
          )}
        </div>
      </div>
      <div className="max-w-2xl w-full mx-auto px-6 pb-4">
        <Disclaimer />
      </div>
    </div>
  );
}

function ChatBubble({ turn }: { turn: Turn }) {
  if (turn.type === "system") {
    return <p className="text-center text-sm text-[var(--muted)] py-2">{turn.text}</p>;
  }

  const isUser = turn.type === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-md px-5 py-4 rounded-xl ${
          isUser
            ? "bg-[var(--fg)] text-[var(--bg)] rounded-bl-sm"
            : "bg-[var(--surface)] border border-[var(--border)] rounded-br-sm"
        }`}
      >
        <p className="verse-text text-base leading-relaxed">{turn.text}</p>
        {turn.poetName && (
          <p className="text-xs mt-2 text-[var(--muted)]">— {turn.poetName}</p>
        )}
      </div>
    </div>
  );
}
