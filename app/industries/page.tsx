import Link from "next/link";
import {
  ArrowUpRight,
  Building2,
  Stethoscope,
  ShoppingCart,
  GraduationCap,
  UtensilsCrossed,
  Shirt,
  Wrench,
  Briefcase,
  Dumbbell,
  Sparkles,
  HeartPulse,
  Home,
  Flower2,
  Car,
  Plane,
  PartyPopper,
} from "lucide-react";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Industries We Serve | GK Digital Solutions",
  description:
    "GK Digital Solutions serves real estate, healthcare, hospitals, interior design, spas, e-commerce, education, hospitality, and more with tailored digital marketing strategies.",
};

// Industries with a `slug` have a dedicated detail page at /industries/[slug]
// (see components/data/industries.ts). Industries without a slug render as
// a plain card until a detail page is built for them.
const industries = [
  {
    icon: Building2,
    title: "Real Estate",
    desc: "Lead generation and local SEO to fill your property pipeline.",
    metric: "Local SEO + Ads",
    slug: "real-estate",
  },
  {
    icon: Home,
    title: "Interior Design",
    desc: "Portfolio-driven websites, lead capture and CRM pipelines built for consultation-to-project sales cycles.",
    metric: "Leads → Consultations",
    slug: "interior-design",
  },
  {
    icon: Stethoscope,
    title: "Healthcare & Clinics",
    desc: "Trust-building content and local visibility for patient acquisition.",
    metric: "Patient Acquisition",
    slug: "healthcare",
  },
  {
    icon: HeartPulse,
    title: "Hospitals",
    desc: "Reputation management, local SEO and department-wise landing pages that build trust before the first visit.",
    metric: "Trust & Local Visibility",
  },
  {
    icon: Flower2,
    title: "Spa & Wellness Centers",
    desc: "Instagram-first content, booking funnels and local search visibility for walk-in and appointment growth.",
    metric: "Bookings + Local",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce & Retail",
    desc: "Performance ads and SEO built for online sales.",
    metric: "Performance Ads",
  },
  {
    icon: GraduationCap,
    title: "Education & Coaching",
    desc: "Enrollment-focused campaigns and content marketing.",
    metric: "Enrollment Funnels",
  },
  {
    icon: UtensilsCrossed,
    title: "Hospitality & Restaurants",
    desc: "Local SEO, social media, and reputation management.",
    metric: "Reputation & Local",
  },
  {
    icon: Shirt,
    title: "Fashion & Lifestyle Brands",
    desc: "Branding, influencer-style content, and social ads.",
    metric: "Brand + Social",
  },
  {
    icon: Wrench,
    title: "Home Services",
    desc: "Local lead generation and Google Business optimization.",
    metric: "Local Leads",
  },
  {
    icon: Car,
    title: "Automotive",
    desc: "Showroom footfall and service-booking campaigns backed by local search and social proof.",
    metric: "Footfall + Bookings",
  },
  {
    icon: Plane,
    title: "Travel & Tourism",
    desc: "Destination-focused content, seasonal campaigns and booking-funnel optimization.",
    metric: "Bookings + Content",
  },
  {
    icon: PartyPopper,
    title: "Weddings & Events",
    desc: "Portfolio-led social growth and inquiry funnels built around visual storytelling.",
    metric: "Inquiries + Portfolio",
  },
  {
    icon: Briefcase,
    title: "B2B & SaaS",
    desc: "LinkedIn strategy, content marketing, and lead nurturing funnels.",
    metric: "LinkedIn + Content",
  },
  {
    icon: Dumbbell,
    title: "Fitness & Wellness",
    desc: "Membership-driven social campaigns and local SEO.",
    metric: "Membership Growth",
  },
];

export default function IndustriesPage() {
  return (
    <main className="pt-32">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line py-20">
        <div
          className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-signal/10 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-3xl px-6">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-paper/50">
              <Sparkles className="h-3 w-3" strokeWidth={2} />
              Industries
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight text-paper md:text-5xl">
              Tailored digital marketing strategies for every industry.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-5 text-lg leading-relaxed text-paper/60">
              Every industry has different customers, buying cycles, and
              platforms that work best. That&apos;s why we don&apos;t
              apply generic templates — we build strategies shaped around
              how your specific industry actually buys.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Industries grid */}
      <section className="border-b border-line py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind, i) => {
              const cardContent = (
                <>
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-xl transition-transform group-hover:scale-110"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--signal), var(--teal))",
                    }}
                  >
                    <ind.icon className="h-5 w-5 text-white" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-paper">
                    {ind.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-paper/60">
                    {ind.desc}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-signal">
                      {ind.metric}
                    </span>
                    {ind.slug && (
                      <ArrowUpRight
                        className="h-4 w-4 text-paper/40 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-signal"
                        strokeWidth={2}
                      />
                    )}
                  </div>
                </>
              );

              const cardClass =
                "group h-full rounded-2xl border border-line bg-ink-panel/30 p-7 transition-all hover:-translate-y-1 hover:border-signal/40 hover:bg-ink-panel";

              return (
                <Reveal key={ind.title} delay={(i % 6) * 60}>
                  {ind.slug ? (
                    <Link href={`/industries/${ind.slug}`} className={cardClass}>
                      {cardContent}
                    </Link>
                  ) : (
                    <div className={cardClass}>{cardContent}</div>
                  )}
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl border border-line bg-ink-panel p-10 md:p-14">
              <div
                className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-signal/10 blur-3xl"
                aria-hidden="true"
              />
              <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                <div>
                  <h2 className="font-display text-2xl font-semibold text-paper md:text-3xl">
                    Don&apos;t see your industry listed?
                  </h2>
                  <p className="mt-2 text-paper/60">
                    We work with businesses across dozens of sectors.
                    Let&apos;s talk about your specific market.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="group flex shrink-0 items-center gap-2 rounded-full bg-signal px-6 py-3 font-mono text-[13px] uppercase tracking-wider text-ink transition-transform hover:scale-[1.03]"
                >
                  Discuss your industry
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    strokeWidth={2}
                  />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}