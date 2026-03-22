"use client";

export default function ShareButtons({
  url,
  title,
  text,
}: {
  url: string;
  title: string;
  text?: string;
}) {
  const encodedUrl = encodeURIComponent(url);
  const encodedText = encodeURIComponent(text || title);

  const links = [
    {
      name: "تويتر",
      label: "𝕏",
      href: `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`,
    },
    {
      name: "فيسبوك",
      label: "f",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    },
    {
      name: "واتساب",
      label: "w",
      href: `https://wa.me/?text=${encodedText}%20${encodedUrl}`,
    },
    {
      name: "تلغرام",
      label: "t",
      href: `https://t.me/share/url?url=${encodedUrl}&text=${encodedText}`,
    },
    {
      name: "لينكدإن",
      label: "in",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    },
  ];

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      // fallback
    }
  }

  return (
    <div className="flex items-center gap-2 flex-wrap">
      <span className="text-xs text-[var(--muted)]">شارك:</span>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 rounded-full border border-[var(--border)] flex items-center justify-center text-xs text-[var(--muted)] hover:text-[var(--fg)] hover:border-[var(--accent)] transition-colors"
          title={link.name}
        >
          {link.label}
        </a>
      ))}
      <button
        onClick={handleCopy}
        className="w-8 h-8 rounded-full border border-[var(--border)] flex items-center justify-center text-xs text-[var(--muted)] hover:text-[var(--fg)] hover:border-[var(--accent)] transition-colors"
        title="نسخ الرابط"
      >
        ⎘
      </button>
    </div>
  );
}
