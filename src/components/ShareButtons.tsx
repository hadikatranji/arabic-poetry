"use client";

import { useState } from "react";

const PLATFORMS = [
  {
    name: "𝕏",
    color: "#000000",
    darkColor: "#ffffff",
    url: (u: string, t: string) =>
      `https://twitter.com/intent/tweet?text=${t}&url=${u}`,
  },
  {
    name: "فيسبوك",
    color: "#1877F2",
    darkColor: "#4599FF",
    url: (u: string) =>
      `https://www.facebook.com/sharer/sharer.php?u=${u}`,
  },
  {
    name: "واتساب",
    color: "#25D366",
    darkColor: "#25D366",
    url: (u: string, t: string) =>
      `https://wa.me/?text=${t}%20${u}`,
  },
  {
    name: "تلغرام",
    color: "#0088cc",
    darkColor: "#29B6F6",
    url: (u: string, t: string) =>
      `https://t.me/share/url?url=${u}&text=${t}`,
  },
  {
    name: "لينكدإن",
    color: "#0A66C2",
    darkColor: "#5BA3E6",
    url: (u: string) =>
      `https://www.linkedin.com/sharing/share-offsite/?url=${u}`,
  },
];

export default function ShareButtons({
  url,
  title,
  text,
}: {
  url: string;
  title: string;
  text?: string;
}) {
  const [copied, setCopied] = useState(false);
  const encodedUrl = encodeURIComponent(url);
  const encodedText = encodeURIComponent(text || title);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  }

  return (
    <div className="flex items-center gap-3 flex-wrap">
      <span className="text-sm text-[var(--muted)]">شارك</span>
      {PLATFORMS.map((p) => (
        <a
          key={p.name}
          href={p.url(encodedUrl, encodedText)}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1.5 rounded-full text-xs font-bold text-white transition-transform hover:scale-110 active:scale-95"
          style={{ backgroundColor: p.color }}
          title={p.name}
        >
          {p.name}
        </a>
      ))}
      <button
        onClick={handleCopy}
        className="px-3 py-1.5 rounded-full text-xs border border-[var(--border)] text-[var(--muted)] hover:text-[var(--fg)] hover:border-[var(--accent)] transition-all"
      >
        {copied ? "تم النسخ" : "نسخ الرابط"}
      </button>
    </div>
  );
}
