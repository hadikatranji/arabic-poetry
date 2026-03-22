-- مسامرات شعرية — Initial Database Schema
-- Run: psql poetry_nights < 001_initial_schema.sql

-- Poets (الشعراء)
CREATE TABLE IF NOT EXISTS poets (
    id              SERIAL PRIMARY KEY,
    name_ar         TEXT NOT NULL,
    name_en         TEXT,
    era             TEXT NOT NULL,        -- جاهلي، أموي، عباسي، حديث
    birth_year      INTEGER,
    death_year      INTEGER,
    date_system     TEXT DEFAULT 'hijri', -- hijri or gregorian
    biography_ar    TEXT,
    style_notes     TEXT,
    image_url       TEXT,
    created_at      TIMESTAMPTZ DEFAULT NOW()
);

-- Poems (القصائد)
CREATE TABLE IF NOT EXISTS poems (
    id              SERIAL PRIMARY KEY,
    poet_id         INTEGER NOT NULL REFERENCES poets(id) ON DELETE CASCADE,
    title_ar        TEXT,
    meter           TEXT,                 -- البحر: طويل، بسيط، كامل، وافر...
    rhyme_letter    CHAR(1),              -- حرف القافية
    theme           TEXT,                 -- الغرض: غزل، مدح، رثاء، فخر، حكمة
    source_url      TEXT,
    created_at      TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_poems_poet ON poems(poet_id);
CREATE INDEX idx_poems_meter ON poems(meter);
CREATE INDEX idx_poems_theme ON poems(theme);

-- Verses (الأبيات)
CREATE TABLE IF NOT EXISTS verses (
    id                SERIAL PRIMARY KEY,
    poem_id           INTEGER NOT NULL REFERENCES poems(id) ON DELETE CASCADE,
    verse_order       INTEGER NOT NULL,
    first_hemistich   TEXT NOT NULL,       -- صدر البيت
    second_hemistich  TEXT NOT NULL,       -- عجز البيت
    full_verse        TEXT GENERATED ALWAYS AS
                      (first_hemistich || ' ۞ ' || second_hemistich) STORED,
    first_letter      CHAR(1),            -- أول حرف (normalized)
    last_letter       CHAR(1),            -- آخر حرف (normalized)
    tts_audio_url     TEXT,
    created_at        TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_verses_poem ON verses(poem_id);
CREATE INDEX idx_verses_first_letter ON verses(first_letter);
CREATE INDEX idx_verses_last_letter ON verses(last_letter);

-- Rhetorical analysis (البلاغة)
CREATE TABLE IF NOT EXISTS verse_analysis (
    id                SERIAL PRIMARY KEY,
    verse_id          INTEGER NOT NULL REFERENCES verses(id) ON DELETE CASCADE,
    device_type       TEXT NOT NULL,       -- تشبيه، استعارة، كناية، طباق، جناس
    explanation_ar    TEXT NOT NULL,
    highlighted_words TEXT,
    created_at        TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_analysis_verse ON verse_analysis(verse_id);

-- Game sessions (جلسات المساجلة)
CREATE TABLE IF NOT EXISTS game_sessions (
    id              SERIAL PRIMARY KEY,
    user_id         TEXT,
    started_at      TIMESTAMPTZ DEFAULT NOW(),
    ended_at        TIMESTAMPTZ,
    turns           JSONB DEFAULT '[]',
    score           INTEGER DEFAULT 0,
    difficulty      TEXT DEFAULT 'normal'  -- easy, normal, hard
);

-- Memorization progress
CREATE TABLE IF NOT EXISTS user_memorization (
    id              SERIAL PRIMARY KEY,
    user_id         TEXT NOT NULL,
    poem_id         INTEGER NOT NULL REFERENCES poems(id) ON DELETE CASCADE,
    verses_mastered INTEGER[] DEFAULT '{}',
    current_verse   INTEGER DEFAULT 1,
    score           INTEGER DEFAULT 0,
    last_practiced  TIMESTAMPTZ,
    created_at      TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(user_id, poem_id)
);
