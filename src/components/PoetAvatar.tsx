"use client";

/**
 * Generates a unique color based on the poet's era.
 * Each era has a distinct warm tone.
 */
const ERA_COLORS: Record<string, { bg: string; fg: string }> = {
  "جاهلي": { bg: "#8b6914", fg: "#f5e6c8" },
  "أموي": { bg: "#2d6a4f", fg: "#d8f3dc" },
  "عباسي": { bg: "#7b2d26", fg: "#f4d4d0" },
  "حديث": { bg: "#1d3557", fg: "#a8dadc" },
};

export default function PoetAvatar({
  name,
  era,
  size = "md",
}: {
  name: string;
  era: string;
  size?: "sm" | "md" | "lg";
}) {
  const colors = ERA_COLORS[era] || { bg: "#555", fg: "#eee" };
  const initial = name.charAt(0);
  const dims = size === "sm" ? "w-10 h-10" : size === "lg" ? "w-20 h-20" : "w-14 h-14";
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
