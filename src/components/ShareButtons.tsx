"use client";

import { useState } from "react";

const PLATFORMS = [
  {
    name: "𝕏",
    color: "#000000",
    url: (u: string, t: string) =>
      `https://twitter.com/intent/tweet?text=${t}&url=${u}`,
  },
  {
    name: "فيسبوك",
    color: "#1877F2",
    url: (u: string) =>
      `https://www.facebook.com/sharer/sharer.php?u=${u}`,
  },
  {
    name: "واتساب",
    color: "#25D366",
    url: (u: string, _t: string, wa: string) =>
      `https://wa.me/?text=${wa}`,
  },
  {
    name: "تلغرام",
    color: "#0088cc",
    url: (u: string, t: string) =>
      `https://t.me/share/url?url=${u}&text=${t}`,
  },
  {
    name: "لينكدإن",
    color: "#0A66C2",
    url: (u: string) =>
      `https://www.linkedin.com/sharing/share-offsite/?url=${u}`,
  },
];

export default function ShareButtons({
  url,
  title,
  text,
  verse,
}: {
  url: string;
  title: string;
  text?: string;
  verse?: string;
}) {
  const [copied, setCopied] = useState(false);
  const encodedUrl = encodeURIComponent(url);
  const encodedText = encodeURIComponent(text || title);

  // WhatsApp gets a beautiful formatted message
  const whatsappLines = [
    "٭ *مسامرات شعرية* ٭",
    "",
    title,
  ];
  if (verse) {
    whatsappLines.push("", `_${verse}_`);
  }
  if (text && text !== title) {
    whatsappLines.push("", text);
  }
  whatsappLines.push("", `shi3r.com`, url);
  const whatsappText = encodeURIComponent(whatsappLines.join("\n"));

  async function handleCopy() {
    const copyText = verse
      ? `${title}\n\n${verse}\n\n${url}`
      : `${title}\n${url}`;
    try {
      await navigator.clipboard.writeText(copyText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  }

  return (
    <div className="flex items-center gap-2 flex-wrap">
      <span className="text-sm text-[var(--muted)] ml-1">شارك</span>
      {PLATFORMS.map((p) => (
        <a
          key={p.name}
          href={p.url(encodedUrl, encodedText, whatsappText)}
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
        className={`px-3 py-1.5 rounded-full text-xs border transition-all ${
          copied
            ? "border-green-500 text-green-600 bg-green-50"
            : "border-[var(--border)] text-[var(--muted)] hover:text-[var(--fg)] hover:border-[var(--accent)]"
        }`}
      >
        {copied ? "تم النسخ ✓" : "نسخ"}
      </button>
    </div>
  );
}
