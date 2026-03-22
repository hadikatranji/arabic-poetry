<div align="center">

# مسامرات شعرية

### Poetry Nights

**تعلّم الشعر العربي وتحدَّ نفسك في المساجلة الشعرية**

Learn Arabic poetry through interactive duels, memorization, and exploration.

[![Next.js](https://img.shields.io/badge/Next.js_14-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)](LICENSE)

---

على قدر أهل العزم تأتي العزائمُ ✶ وتأتي على قدر الكرام المكارمُ

*— المتنبي*

</div>

---

## What is this?

**مسامرات شعرية** (Poetry Nights) is a web app for learning and enjoying Arabic poetry. It features:

### المساجلة الشعرية — Poetry Duel
Say a verse, and the app responds with a verse that starts with the **last letter** of yours. A classic Arabic literary game, digitized.

### الشعراء — Poets
Explore 20 poets across 4 eras — from pre-Islamic (*الجاهلية*) to modern (*العصر الحديث*). Read their biographies, styles, and famous verses.

### الحفظ — Memorization
Practice memorizing poems with three modes:
- **Reveal** — progressive hemistich reveal
- **Fill-in-the-blank** — complete the second hemistich
- **Full test** — recall the entire verse

### الأبيات — Browse & Search
Search through 120+ verses, filter by poet, and explore the beauty of Arabic poetry.

---

## Poets Included

| العصر | الشعراء |
|-------|---------|
| الجاهلي | امرؤ القيس · عنترة بن شداد · زهير بن أبي سلمى · طرفة بن العبد · لبيد بن ربيعة · النابغة الذبياني |
| الأموي | مجنون ليلى · جرير · الفرزدق |
| العباسي | المتنبي · أبو نواس · أبو العلاء المعري · أبو فراس الحمداني · أبو تمام · البحتري |
| الحديث | أحمد شوقي · حافظ إبراهيم · نزار قباني · محمود درويش · إيليا أبو ماضي |

---

## Features

- **RTL-first** — built for Arabic from the ground up
- **Dark / Light / Auto** theme — warm parchment light mode, deep ink dark mode
- **Calligraphic fonts** — Aref Ruqaa for UI, Amiri for poetry verses
- **Diacritics-tolerant** — memorization accepts answers with or without tashkeel
- **Smart letter matching** — normalizes alef variants (أ إ آ → ا) and taa marbuta (ة → ه)
- **SEO optimized** — Open Graph, structured data, sitemap, per-page metadata
- **No database required** — runs fully client-side for local development

---

## Quick Start

```bash
# Clone
git clone https://github.com/hadikatranji/arabic-poetry.git
cd arabic-poetry

# Install
npm install

# Run
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Fonts | Aref Ruqaa + Amiri (Google Fonts) |
| Database | PostgreSQL (schema ready, runs without DB locally) |
| ORM | Drizzle ORM |

---

## Project Structure

```
src/
├── app/
│   ├── page.tsx              # Landing page
│   ├── musajalah/            # Poetry duel game
│   ├── poets/                # Poet listings & detail pages
│   ├── poems/                # Browse & search verses
│   ├── memorize/             # Memorization exercises
│   └── api/musajalah/        # Game API endpoints
├── components/
│   ├── ThemeProvider.tsx      # Dark/light/auto mode
│   ├── ThemeToggle.tsx        # Theme switcher
│   └── PoetAvatar.tsx         # Era-colored poet initials
└── lib/
    ├── arabic.ts             # Letter normalization & diacritics
    ├── sample-poets.ts       # 20 poets with bios
    └── sample-verses.ts      # 120+ verses with metadata
```

---

## How المساجلة Works

1. You say a verse (e.g., ending with م)
2. The app finds a verse starting with م
3. That verse ends with (e.g., ل)
4. You must respond with a verse starting with ل
5. If the app can't find a verse → you win

The app normalizes Arabic letters:
- Strips diacritics (tashkeel)
- آ أ إ → ا
- ة → ه

---

## Roadmap

- [ ] Scrape 10,000+ verses from public poetry databases
- [ ] Human-recorded audio recitations
- [ ] Multiplayer musajalah (play with friends)
- [ ] Poetry analysis (بلاغة) — rhetorical devices, meter, rhyme
- [ ] User accounts & progress tracking
- [ ] Mobile app (React Native)

---

## Contributing

Contributions welcome! Whether it's adding more poets, fixing translations, or improving the UI.

1. Fork the repo
2. Create a branch (`git checkout -b feature/new-poet`)
3. Commit changes
4. Push and open a PR

---

## License

MIT — see [LICENSE](LICENSE) for details.

---

<div align="center">

**Built with love for Arabic poetry**

سيذكرني قومي إذا جدّ جدّهم ✶ وفي الليلة الظلماء يُفتقد البدرُ

*— عنترة بن شداد*

</div>
