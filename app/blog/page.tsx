import Link from "next/link";
import { ArrowUpRight, Sparkles, Clock } from "lucide-react";
import Reveal from "@/components/Reveal";
import ScrollProgress from "@/components/ScrollProgress";
import BlogFilterBar from "@/components/BlogFilterBar";
import PostThumbnail from "@/components/PostThumbnail";
import { ServicesCursorAura, ServicesStickyCTA } from "@/components/ServicesPageInteractive";
import { blogPosts } from "@/components/data/blog";

export const metadata = {
  title: "Blog | Digital Marketing Tips & Insights | GK Digital Solutions",
  description:
    "SEO, paid ads, WhatsApp marketing and lead generation guides from GK Digital Solutions — practical, no-jargon advice for growing your business online.",
};

const fluid = {
  hero: "text-[clamp(1.85rem,5.6vw,3.25rem)] leading-[1.18]",
  h2: "text-[clamp(1.4rem,4vw,2.25rem)] leading-[1.2]",
  lead: "text-[clamp(0.95rem,1.8vw,1.125rem)] leading-relaxed",
  eyebrow: "text-[clamp(0.625rem,1.3vw,0.75rem)] tracking-[0.18em]",
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

const categories = [...new Set(blogPosts.map((p) => p.category))];

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <main className="relative overflow-x-hidden">
      <ScrollProgress />
      <ServicesCursorAura />
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <section className="relative overflow-hidden border-b border-line pt-28 sm:pt-32 md:pt-40 pb-20">
        <div
          className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-signal/10 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-3xl px-6">
          <Reveal>
            <span className={`inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 font-mono uppercase text-paper/50 ${fluid.eyebrow}`}>
              <Sparkles className="h-3 w-3" strokeWidth={2} />
              Blog
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className={`mt-5 font-display font-semibold tracking-tight text-paper ${fluid.hero}`}>
              Digital marketing tips that actually work.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className={`mt-5 text-paper/60 ${fluid.lead}`}>
              No-jargon guides on SEO, ads, lead generation and WhatsApp
              marketing — written from what actually moves the needle for
              our clients.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Category filter */}
      <section className="border-b border-line py-6 sm:py-8">
        <div className="mx-auto max-w-6xl px-6">
          <BlogFilterBar categories={categories} />
        </div>
      </section>

      {/* Featured post — the most recent article, given more visual weight
          than the grid below since it's the one a first-time visitor should
          read first. */}
      {featured && (
        <section className="border-b border-line py-14 sm:py-16">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <Link
                href={`/blog/${featured.slug}`}
                data-category={featured.category}
                className="blog-card group grid gap-0 overflow-hidden rounded-2xl border border-line bg-ink-panel/30 transition-all hover:border-signal/40 hover:bg-ink-panel md:grid-cols-[1.1fr_1fr]"
              >
                <div className="relative h-52 w-full overflow-hidden bg-ink-panel sm:h-64 md:h-full">
                  <PostThumbnail post={featured} className="transition-transform duration-500 group-hover:scale-105" />
                  <span
                    className="absolute left-4 top-4 rounded-full px-3 py-1 font-mono text-[9px] uppercase tracking-wider text-white sm:text-[10px]"
                    style={{ background: "linear-gradient(90deg, var(--signal), var(--teal))" }}
                  >
                    Latest
                  </span>
                </div>
                <div className="flex flex-col justify-center p-6 sm:p-8 md:p-10">
                  <span className="w-fit font-mono text-[10px] uppercase tracking-wider text-teal">
                    {featured.category}
                  </span>
                  <h2 className="mt-3 font-display text-xl font-semibold leading-snug text-paper sm:text-2xl">
                    {featured.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-paper/60 sm:text-base">
                    {featured.excerpt}
                  </p>
                  <div className="mt-5 flex items-center gap-3 text-[11px] text-paper/40 sm:text-xs">
                    <span>{formatDate(featured.date)}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" strokeWidth={2} />
                      {featured.readTime}
                    </span>
                  </div>
                  <span className="mt-5 inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-wider text-signal">
                    Read the guide
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2} />
                  </span>
                </div>
              </Link>
            </Reveal>
          </div>
        </section>
      )}

      {/* Remaining posts grid */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post, i) => (
              <Reveal key={post.slug} delay={i * 60}>
                <Link
                  href={`/blog/${post.slug}`}
                  data-category={post.category}
                  className="blog-card group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-ink-panel/30 transition-all hover:-translate-y-1 hover:border-signal/40 hover:bg-ink-panel"
                >
                  <div className="relative h-44 w-full overflow-hidden bg-ink-panel">
                    <PostThumbnail post={post} className="transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
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
              <h2 className={`font-display font-semibold text-paper ${fluid.h2}`}>
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

      <ServicesStickyCTA label="Want this tailored to your business?" linkText="Get a quote" />
    </main>
  );
}