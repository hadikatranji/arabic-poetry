"use client";

import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const next = () => {
    const order = ["light", "dark", "auto"] as const;
    const i = order.indexOf(theme);
    setTheme(order[(i + 1) % 3]);
  };

  const icon = theme === "light" ? "☀" : theme === "dark" ? "☽" : "◐";

  return (
    <button
      onClick={next}
      className="text-sm text-[var(--muted)] hover:text-[var(--fg)] transition-colors"
      title={theme === "light" ? "فاتح" : theme === "dark" ? "داكن" : "تلقائي"}
    >
      {icon}
    </button>
  );
}
