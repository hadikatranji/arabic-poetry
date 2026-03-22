import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import { BLOG_POSTS } from "@/lib/blog-data";

export default function BlogPage() {
  return (
    <main className="min-h-screen max-w-3xl mx-auto px-6 py-8">
      <div className="flex items-center justify-between mb-10">
        <Link href="/" className="text-[var(--muted)] hover:text-[var(--fg)] text-sm">
          العودة
        </Link>
        <h1 className="text-3xl">المدوّنة</h1>
        <ThemeToggle />
      </div>

      <div className="space-y-8">
        {BLOG_POSTS.map((post) => (
          <article key={post.slug}>
            <Link
              href={`/blog/posts/${post.slug}`}
              className="block p-6 bg-[var(--surface)] border border-[var(--border)] rounded-md hover:border-[var(--accent)] transition-all"
            >
              <div className="flex items-center gap-3 text-xs text-[var(--muted)] mb-3">
                <time>{post.date}</time>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="text-xl mb-2">{post.title}</h2>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                {post.description}
              </p>
              <div className="flex gap-2 mt-3">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-[var(--accent)] border border-[var(--border)] px-2 py-0.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
