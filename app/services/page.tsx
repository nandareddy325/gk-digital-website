import Link from "next/link";
import {
  Search,
  Target,
  MessageCircle,
  Palette,
  Globe,
  PenTool,
  Mail,
  Users,
  MapPin,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Digital Marketing Services | SEO, Ads, Web Design & Branding",
  description:
    "Explore GK Digital Solutions' full range of services — SEO, Google Ads, social media marketing, website design, branding, content marketing, and lead generation.",
};

const services = [
  { slug: "seo", icon: Search, title: "SEO", desc: "Rank higher on Google and get found by customers actively searching for you." },
  { slug: "google-ads", icon: Target, title: "Google Ads (PPC)", desc: "Instant visibility and high-intent traffic that converts." },
  { slug: "meta-ads", icon: Target, title: "Meta & Instagram Ads", desc: "Reach the right audience with scroll-stopping creative." },
  { slug: "social-media-marketing", icon: Users, title: "Social Media Marketing", desc: "Build a brand people follow, trust, and buy from." },
  { slug: "website-design", icon: Globe, title: "Website Design & Development", desc: "Fast, modern, conversion-optimized websites." },
  { slug: "branding", icon: Palette, title: "Branding & Graphic Design", desc: "A visual identity that makes your business unforgettable." },
  { slug: "content-marketing", icon: PenTool, title: "Content Marketing", desc: "Content that builds authority and drives traffic." },
  { slug: "whatsapp-marketing", icon: MessageCircle, title: "WhatsApp Marketing", desc: "Direct, personal, high-converting communication at scale." },
  { slug: "email-marketing", icon: Mail, title: "Email Marketing", desc: "Turn your email list into a revenue channel." },
  { slug: "lead-generation", icon: Target, title: "Lead Generation", desc: "A predictable pipeline of qualified prospects." },
  { slug: "local-seo", icon: MapPin, title: "Local SEO & GBP Optimization", desc: "Dominate local search and Google Maps results." },
];

export default function ServicesPage() {
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
              Our services
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight text-paper md:text-5xl">
              Complete digital marketing solutions under one roof.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-5 text-lg leading-relaxed text-paper/60">
              From getting found on Google to converting visitors into
              customers, GK Digital Solutions offers everything your
              business needs to grow online.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-line py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 40}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group flex h-full flex-col gap-5 bg-ink p-8 transition-colors hover:bg-ink-panel"
                >
                  <div className="flex items-start justify-between">
                    <s.icon className="h-6 w-6 text-signal" strokeWidth={1.5} />
                    <ArrowUpRight
                      className="h-4 w-4 text-paper/30 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-signal"
                      strokeWidth={2}
                    />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-paper">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-paper/60">
                      {s.desc}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-line bg-ink-panel p-10 md:flex-row md:items-center">
              <div>
                <h2 className="font-display text-2xl font-semibold text-paper md:text-3xl">
                  Not sure which service you need?
                </h2>
                <p className="mt-2 text-paper/60">
                  Let&apos;s talk. We&apos;ll assess your business and
                  recommend the right strategy — no pressure, no jargon.
                </p>
              </div>
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