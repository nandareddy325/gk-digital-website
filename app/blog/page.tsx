import Link from "next/link";
import { ArrowUpRight, Sparkles, Clock } from "lucide-react";
import Reveal from "@/components/Reveal";
import { blogPosts } from "@/components/data/blog";

export const metadata = {
  title: "Blog | Digital Marketing Tips & Insights | GK Digital Solutions",
  description:
    "SEO, paid ads, WhatsApp marketing and lead generation guides from GK Digital Solutions — practical, no-jargon advice for growing your business online.",
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function BlogPage() {
  return (
    <main className="pt-32">
      <section className="relative overflow-hidden border-b border-line py-20">
        <div
          className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-signal/10 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-3xl px-6">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-paper/50">
              <Sparkles className="h-3 w-3" strokeWidth={2} />
              Blog
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight text-paper md:text-5xl">
              Digital marketing tips that actually work.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-5 text-lg leading-relaxed text-paper/60">
              No-jargon guides on SEO, ads, lead generation and WhatsApp
              marketing — written from what actually moves the needle for
              our clients.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 60}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-line bg-ink-panel/30 p-7 transition-all hover:-translate-y-1 hover:border-signal/40 hover:bg-ink-panel"
                >
                  <span
                    className="w-fit rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-white"
                    style={{
                      background:
                        "linear-gradient(90deg, var(--signal), var(--teal))",
                    }}
                  >
                    {post.category}
                  </span>
                  <h2 className="mt-4 font-display text-lg font-semibold leading-snug text-paper">
                    {post.title}
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-paper/60">
                    {post.excerpt}
                  </p>
                  <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
                    <div className="flex items-center gap-3 text-[11px] text-paper/40">
                      <span>{formatDate(post.date)}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" strokeWidth={2} />
                        {post.readTime}
                      </span>
                    </div>
                    <ArrowUpRight
                      className="h-4 w-4 text-paper/30 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-signal"
                      strokeWidth={2}
                    />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-line bg-ink-panel p-10 md:flex-row md:items-center">
              <h2 className="font-display text-2xl font-semibold text-paper md:text-3xl">
                Want a strategy built for your business, not a blog post?
              </h2>
              <Link
                href="/contact"
                className="group flex shrink-0 items-center gap-2 rounded-full bg-signal px-6 py-3 font-mono text-[13px] uppercase tracking-wider text-ink transition-transform hover:scale-[1.03]"
              >
                Get a free consultation
                <ArrowUpRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={2}
                />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}