"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import ShareButtons from "./ShareButtons";
import Disclaimer from "./Disclaimer";
import { BLOG_POSTS, BlogPost as BlogPostType } from "@/lib/blog-data";

export default function BlogPostLayout({
  post,
  tableOfContents,
  children,
}: {
  post: BlogPostType;
  tableOfContents?: { id: string; title: string }[];
  children: React.ReactNode;
}) {
  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <main className="min-h-screen max-w-2xl mx-auto px-6 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <Link href="/blog" className="text-[var(--muted)] hover:text-[var(--fg)]">
          العودة للمدوّنة
        </Link>
        <ThemeToggle />
      </div>

      {/* Breadcrumbs */}
      <nav className="text-sm text-[var(--muted)] mb-6 flex items-center gap-1">
        <Link href="/" className="hover:text-[var(--fg)]">الرئيسية</Link>
        <span>/</span>
        <Link href="/blog" className="hover:text-[var(--fg)]">المدوّنة</Link>
        <span>/</span>
        <span className="text-[var(--fg)]">{post.title.slice(0, 30)}...</span>
      </nav>

      <article>
        {/* Meta */}
        <div className="flex items-center gap-3 text-sm text-[var(--muted)] mb-4">
          <time dateTime={post.date}>{post.date}</time>
          <span>·</span>
          <span>{post.readTime}</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl leading-snug mb-4">{post.title}</h1>

        {/* English subtitle */}
        <p className="text-[var(--muted)] mb-6 italic" dir="ltr">
          {post.titleEn}
        </p>

        {/* Tags */}
        <div className="flex gap-2 mb-6">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-sm text-[var(--accent)] border border-[var(--border)] px-3 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Share — top */}
        <div className="mb-8 pb-6 border-b border-[var(--border)]">
          <ShareButtons
            url={`https://www.shi3r.com/blog/posts/${post.slug}`}
            title={post.title}
            text={post.description}
          />
        </div>

        {/* Table of Contents */}
        {tableOfContents && tableOfContents.length > 0 && (
          <nav className="mb-8 p-5 bg-[var(--surface)] border border-[var(--border)] rounded-md">
            <h2 className="font-bold mb-3">محتويات المقال</h2>
            <ol className="space-y-2">
              {tableOfContents.map((item, i) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-[var(--accent)] hover:text-[var(--fg)] transition-colors"
                  >
                    {i + 1}. {item.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        )}

        {/* Content */}
        <div className="space-y-6 leading-[2.2]">
          {children}
        </div>

        {/* Share — bottom */}
        <div className="mt-10 pt-6 border-t border-[var(--border)]">
          <p className="text-[var(--muted)] mb-3">أعجبك المقال؟ شاركه مع أصدقائك</p>
          <ShareButtons
            url={`https://www.shi3r.com/blog/posts/${post.slug}`}
            title={post.title}
            text={post.description}
          />
        </div>

        {/* Author */}
        <div className="mt-8 p-5 bg-[var(--surface)] border border-[var(--border)] rounded-md flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-[var(--accent)] flex items-center justify-center text-[var(--bg)] text-xl shrink-0">
            هـ
          </div>
          <div>
            <p className="font-bold">هادي قطرنجي</p>
            <p className="text-sm text-[var(--muted)]">
              مؤسس مسامرات شعرية — مهتم بالشعر العربي والتقنية
            </p>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="mt-12">
          <h2 className="text-xl text-[var(--accent)] mb-4">مقالات ذات صلة</h2>
          <div className="space-y-3">
            {relatedPosts.map((rp) => (
              <Link
                key={rp.slug}
                href={`/blog/posts/${rp.slug}`}
                className="block p-5 bg-[var(--surface)] border border-[var(--border)] rounded-md hover:border-[var(--accent)] transition-all"
              >
                <h3 className="mb-1">{rp.title}</h3>
                <p className="text-sm text-[var(--muted)]">{rp.readTime}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <div className="mt-10 p-6 bg-[var(--surface)] border border-[var(--border)] rounded-md text-center">
        <p className="text-lg mb-2">جرّب المساجلة الشعرية</p>
        <p className="text-[var(--muted)] mb-4">تحدَّ نفسك في مبارزة الأبيات</p>
        <Link
          href="/musajalah"
          className="inline-block bg-[var(--fg)] text-[var(--bg)] px-8 py-3 rounded hover:opacity-80 transition-opacity"
        >
          ابدأ المساجلة
        </Link>
      </div>

      <Disclaimer />
    </main>
  );
}
