"use client";

import Image from "next/image";

/**
 * Maps poet IDs to their image files in /public/poets/
 * Poets without images get a styled initial avatar.
 */
const POET_IMAGES: Record<number, string> = {
  1: "/poets/imru-al-qais.png",     // امرؤ القيس
  2: "/poets/antara.jpg",            // عنترة بن شداد
  10: "/poets/mutanabbi.png",        // المتنبي
  11: "/poets/abu-nuwas.jpg",        // أبو نواس
  12: "/poets/al-maarri.png",        // أبو العلاء المعري
  16: "/poets/ahmad-shawqi.jpg",     // أحمد شوقي
  17: "/poets/hafiz-ibrahim.jpg",    // حافظ إبراهيم
  18: "/poets/nizar-qabbani.jpg",    // نزار قباني
  19: "/poets/mahmoud-darwish.jpg",  // محمود درويش
};

const ERA_COLORS: Record<string, { bg: string; fg: string }> = {
  "جاهلي": { bg: "#8b6914", fg: "#f5e6c8" },
  "إسلامي": { bg: "#4a6741", fg: "#e8f5e2" },
  "أموي": { bg: "#2d6a4f", fg: "#d8f3dc" },
  "عباسي": { bg: "#7b2d26", fg: "#f4d4d0" },
  "حديث": { bg: "#1d3557", fg: "#a8dadc" },
};

export default function PoetAvatar({
  name,
  era,
  poetId,
  size = "md",
}: {
  name: string;
  era: string;
  poetId?: number;
  size?: "sm" | "md" | "lg";
}) {
  const imagePath = poetId ? POET_IMAGES[poetId] : undefined;
  const px = size === "sm" ? 40 : size === "lg" ? 80 : 56;
  const dims = size === "sm" ? "w-10 h-10" : size === "lg" ? "w-20 h-20" : "w-14 h-14";

  if (imagePath) {
    return (
      <div className={`${dims} rounded-full overflow-hidden shrink-0 border border-[var(--border)]`}>
        <Image
          src={imagePath}
          alt={name}
          width={px}
          height={px}
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  // Fallback: styled initial
  const colors = ERA_COLORS[era] || { bg: "#555", fg: "#eee" };
  const initial = name.charAt(0);
  const textSize = size === "sm" ? "text-lg" : size === "lg" ? "text-3xl" : "text-2xl";

  return (
    <div
      className={`${dims} rounded-full flex items-center justify-center shrink-0`}
      style={{ backgroundColor: colors.bg }}
    >
      <span className={`${textSize} font-amiri`} style={{ color: colors.fg }}>
        {initial}
      </span>
    </div>
  );
}
