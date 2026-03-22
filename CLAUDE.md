# مسامرات شعرية — Development Guide

## Project
- **Domain**: shi3r.com
- **Hosting**: Vercel (free tier)
- **Repo**: github.com/hadikatranji/arabic-poetry
- **Stack**: Next.js 14 (App Router), TypeScript, Tailwind CSS
- **Fonts**: Aref Ruqaa (UI calligraphy), Amiri (poetry verses)

## SEO Requirements — MANDATORY for every new page

Every new page MUST include:

### 1. Page Metadata
```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "عنوان الصفحة",  // Uses template: "%s | مسامرات شعرية"
  description: "وصف بالعربية والإنجليزية — 150-160 chars",
  openGraph: {
    title: "عنوان الصفحة | مسامرات شعرية",
    description: "وصف مختصر",
  },
};
```

For client components ("use client"), put metadata in a `layout.tsx` file in the same directory.

### 2. JSON-LD Structured Data (where applicable)
```tsx
const jsonLd = { "@context": "https://schema.org", "@type": "...", ... };
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
```

### 3. Add to Sitemap
Update `src/app/sitemap.ts` to include the new page URL.

### 4. Social Sharing
Add `<ShareButtons>` component on content pages:
```tsx
import ShareButtons from "@/components/ShareButtons";
<ShareButtons url="https://shi3r.com/page" title="عنوان" text="نص المشاركة" />
```

## Theming

All pages MUST support dark/light mode. Use CSS variables, not hardcoded colors:
- `var(--bg)` — background
- `var(--fg)` — foreground text
- `var(--muted)` — secondary text
- `var(--border)` — borders
- `var(--surface)` — card/input backgrounds
- `var(--accent)` — accent color
- `var(--gold)` — ornamental gold

Never use Tailwind color classes like `text-gray-500`. Always use `text-[var(--muted)]`.

## Fonts
- UI text: `font-aref` (Aref Ruqaa calligraphy) — applied globally
- Poetry verses: `verse-text` class (uses Amiri font)
- All text is RTL (`dir="rtl"` on html element)

## Poet Images
- Stored in `public/poets/`
- Mapped in `src/components/PoetAvatar.tsx` (POET_IMAGES record)
- Poets without images get era-colored initial avatars
- Era colors: gold=جاهلي, green=أموي, red=عباسي, blue=حديث

## Poetry Data
- Poets: `src/lib/sample-poets.ts` — each has unique `id`
- Verses: `src/lib/sample-verses.ts` — each has `poetId` linking to poet
- Arabic utils: `src/lib/arabic.ts` — letter normalization, diacritics stripping

## Deployment
```bash
cd /Users/hadikatranji/Projects/arabic-poetry
npx vercel --prod --yes
```

After every code change, run `npx next build` to verify, then deploy.

## Blog
Blog posts are in `src/app/blog/posts/`. Each post is a directory with a `page.tsx`.
Add new posts to the blog index in `src/app/blog/page.tsx` and to the sitemap.
