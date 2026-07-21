import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  Sparkles,
  ShoppingCart,
  GraduationCap,
  UtensilsCrossed,
  Shirt,
  Wrench,
  Briefcase,
  Dumbbell,
  Car,
  Plane,
  PartyPopper,
  Scissors,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import ScrollProgress from "@/components/ScrollProgress";
import IndustrySearchBar from "@/components/IndustrySearchBar";
import { ServicesCursorAura, ServicesStickyCTA, ServicesTestimonialCarousel } from "@/components/ServicesPageInteractive";

export const metadata = {
  title: "Industries We Serve | GK Digital Solutions",
  description:
    "GK Digital Solutions serves real estate, healthcare, hospitals, interior design, spas, skin & hair clinics, e-commerce, education, hospitality, and more with tailored digital marketing strategies.",
};

/* Fluid type scale — continuous clamp() scaling, matches the rest of the site */
const fluid = {
  hero: "text-[clamp(1.85rem,5.6vw,3.25rem)] leading-[1.18]",
  h2: "text-[clamp(1.4rem,4vw,2.25rem)] leading-[1.2]",
  lead: "text-[clamp(0.95rem,1.8vw,1.125rem)] leading-relaxed",
  body: "text-[clamp(0.85rem,1.6vw,1rem)] leading-relaxed",
  stat: "text-[clamp(1.4rem,4.2vw,2rem)]",
  eyebrow: "text-[clamp(0.625rem,1.3vw,0.75rem)] tracking-[0.18em]",
};

// Industries with real generated cover images — unchanged, data preserved
const featuredIndustries = [
  {
    image: "/industry-interior-design.png",
    title: "Interior Design",
    desc: "Portfolio-driven websites, lead capture and CRM pipelines built for consultation-to-project sales cycles.",
    metric: "Leads → Consultations",
  },
  {
    image: "/industry-real-estate.png",
    title: "Real Estate",
    desc: "Lead generation and local SEO to fill your property pipeline.",
    metric: "Local SEO + Ads",
  },
  {
    image: "/industry-healthcare.png",
    title: "Healthcare & Hospitals",
    desc: "Trust-building content, reputation management and local visibility for patient acquisition.",
    metric: "Trust & Local Visibility",
  },
  {
    image: "/industry-hospitality.png",
    title: "Hospitality & Restaurants",
    desc: "Local SEO, social media, and reputation management.",
    metric: "Reputation & Local",
  },
];

// Remaining industries — icon-based. Skin & Hair added here (no generated
// cover image exists for it yet, so it follows the icon-card pattern like
// the other verticals below rather than being forced into the image grid).
const iconIndustries = [
  { icon: Scissors, title: "Skin & Hair Clinics", desc: "Appointment-focused Meta and Google campaigns with WhatsApp follow-up, so enquiries convert to bookings.", metric: "Bookings + WhatsApp" },
  { icon: ShoppingCart, title: "E-Commerce & Retail", desc: "Performance ads and SEO built for online sales.", metric: "Performance Ads" },
  { icon: GraduationCap, title: "Education & Coaching", desc: "Enrollment-focused campaigns and content marketing.", metric: "Enrollment Funnels" },
  { icon: Shirt, title: "Fashion & Lifestyle Brands", desc: "Branding, influencer-style content, and social ads.", metric: "Brand + Social" },
  { icon: Wrench, title: "Home Services", desc: "Local lead generation and Google Business optimization.", metric: "Local Leads" },
  { icon: Car, title: "Automotive", desc: "Showroom footfall and service-booking campaigns backed by local search and social proof.", metric: "Footfall + Bookings" },
  { icon: Plane, title: "Travel & Tourism", desc: "Destination-focused content, seasonal campaigns and booking-funnel optimization.", metric: "Bookings + Content" },
  { icon: PartyPopper, title: "Weddings & Events", desc: "Portfolio-led social growth and inquiry funnels built around visual storytelling.", metric: "Inquiries + Portfolio" },
  { icon: Briefcase, title: "B2B & SaaS", desc: "LinkedIn strategy, content marketing, and lead nurturing funnels.", metric: "LinkedIn + Content" },
  { icon: Dumbbell, title: "Fitness & Wellness", desc: "Membership-driven social campaigns and local SEO.", metric: "Membership Growth" },
];

const stats = [
  { value: 13, suffix: "+", label: "Industries served" },
  { value: 40, suffix: "+", label: "Active campaigns" },
  { value: 18, suffix: "", label: "Brands live right now" },
];

// Quotes spanning different industries — distinct from the sets used on
// other pages, so a visitor browsing multiple pages doesn't see repeats.
const industryTestimonials = [
  {
    quote: "We're a niche category — clinical aesthetics — and most agencies default to generic beauty-brand tactics. This didn't feel generic.",
    attribution: "Client, Skin & Hair Clinic, Hyderabad",
  },
  {
    quote: "Our buying cycle is 60–90 days, not an impulse purchase. The campaigns were built around that instead of chasing quick clicks.",
    attribution: "Client, Real Estate, Hyderabad",
  },
  {
    quote: "Restaurant marketing lives and dies on reviews. Having someone actually manage that instead of just running ads made the difference.",
    attribution: "Client, Hospitality, Hyderabad",
  },
];

export default function IndustriesPage() {
  return (
    <main className="relative overflow-x-hidden pt-24 sm:pt-28 md:pt-32">
      <ScrollProgress />
      <ServicesCursorAura />
      <style>{`
        @keyframes mesh-drift {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-4%, 3%) scale(1.08); }
        }
        .mesh-blob { animation: mesh-drift 14s ease-in-out infinite; }
        @keyframes underline-draw { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        .eyebrow-underline { position: relative; display: inline-flex; }
        .eyebrow-underline::after {
          content: "";
          position: absolute;
          left: 0; bottom: -4px;
          height: 1.5px;
          width: 100%;
          background: linear-gradient(90deg, var(--signal), var(--teal));
          transform: scaleX(0);
          transform-origin: left;
          animation: underline-draw 0.9s ease-out 0.3s forwards;
        }
        @keyframes icon-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        .icon-float { animation: icon-float 3.4s ease-in-out infinite; }
        @keyframes new-badge-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(122,193,66,0.35); }
          50% { box-shadow: 0 0 0 5px rgba(122,193,66,0); }
        }
        .new-badge { animation: new-badge-pulse 2s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .mesh-blob, .eyebrow-underline::after, .icon-float, .new-badge { animation: none !important; }
        }
      `}</style>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line py-16 sm:py-20">
        <div
          className="mesh-blob pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-20 blur-3xl sm:-right-32 sm:-top-32 sm:h-96 sm:w-96"
          style={{ background: "linear-gradient(135deg, var(--signal), var(--teal))" }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-3xl min-w-0 px-5 sm:px-6">
          <Reveal>
            <span className={`inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 font-mono uppercase text-paper/50 ${fluid.eyebrow}`}>
              <Sparkles className="icon-float h-3 w-3" strokeWidth={2} />
              Industries
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className={`mt-5 break-words font-display font-semibold tracking-tight text-paper ${fluid.hero}`}>
              Tailored digital marketing strategies for every industry.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className={`mt-4 text-paper/60 sm:mt-5 ${fluid.lead}`}>
              Every industry has different customers, buying cycles, and
              platforms that work best. That&apos;s why we don&apos;t
              apply generic templates — we build strategies shaped around
              how your specific industry actually buys.
            </p>
          </Reveal>

          {/* Search bar — interactive, filters both grids below by keyword */}
          <Reveal delay={200}>
            <IndustrySearchBar />
          </Reveal>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-b border-line py-8 sm:py-10">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 70}>
                <div className="min-w-0 rounded-xl border border-line bg-ink-panel/30 p-3.5 text-center sm:p-5">
                  <div
                    className={`bg-clip-text font-mono font-semibold text-transparent ${fluid.stat}`}
                    style={{ backgroundImage: "linear-gradient(90deg, var(--signal), var(--teal))" }}
                  >
                    <CountUp end={s.value} suffix={s.suffix} />
                  </div>
                  <div className="mt-1 text-[10.5px] leading-snug text-paper/50 sm:text-xs">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured industries with images */}
      <section className="border-b border-line py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl min-w-0 px-5 sm:px-6">
          <Reveal>
            <span className={`eyebrow-underline font-mono uppercase text-teal ${fluid.eyebrow}`}>Deepest playbooks</span>
          </Reveal>
          <div className="mt-5 grid gap-5 sm:mt-6 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
            {featuredIndustries.map((ind, i) => (
              <Reveal key={ind.title} delay={i * 70}>
                <div className="industry-card group h-full overflow-hidden rounded-2xl border border-line bg-ink-panel/30 transition-all duration-300 hover:-translate-y-1 hover:border-signal/40 hover:shadow-xl">
                  <div className="relative h-40 w-full overflow-hidden bg-ink-panel sm:h-48 lg:h-40">
                    <Image
                      src={ind.image}
                      alt={ind.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5 sm:p-7">
                    <h3 className="font-display text-base font-semibold text-paper sm:text-lg">
                      {ind.title}
                    </h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-paper/60 sm:text-sm">
                      {ind.desc}
                    </p>
                    <span className="mt-3 inline-block font-mono text-[9px] uppercase tracking-wider text-signal sm:mt-4 sm:text-[10px]">
                      {ind.metric}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Remaining industries — icon grid, Skin & Hair first with a "new" badge */}
      <section className="border-b border-line py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl min-w-0 px-5 sm:px-6">
          <Reveal>
            <span className={`eyebrow-underline font-mono uppercase text-teal ${fluid.eyebrow}`}>Growing fast</span>
            <h2 className={`mt-2 font-display font-semibold text-paper ${fluid.h2}`}>
              More industries we work with
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {iconIndustries.map((ind, i) => (
              <Reveal key={ind.title} delay={(i % 6) * 60}>
                <div className="industry-card group relative h-full rounded-2xl border border-line bg-ink-panel/30 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-signal/40 hover:bg-ink-panel sm:p-7">
                  {i === 0 && (
                    <span className="new-badge absolute right-4 top-4 rounded-full border border-teal/30 bg-teal/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-teal sm:right-5 sm:top-5">
                      New
                    </span>
                  )}
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110 sm:h-11 sm:w-11"
                    style={{ background: "linear-gradient(135deg, var(--signal), var(--teal))" }}
                  >
                    <ind.icon className="h-4.5 w-4.5 text-white sm:h-5 sm:w-5" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-4 font-display text-base font-semibold text-paper sm:mt-5 sm:text-lg">
                    {ind.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-paper/60 sm:text-sm">
                    {ind.desc}
                  </p>
                  <span className="mt-3 inline-block font-mono text-[9px] uppercase tracking-wider text-signal sm:mt-4 sm:text-[10px]">
                    {ind.metric}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial carousel — quotes spanning different industries */}
      <section className="border-b border-line bg-ink-panel/30 py-14 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-6">
          <Reveal>
            <span className={`inline-block font-mono uppercase text-teal ${fluid.eyebrow}`}>Different industries, same rigor</span>
          </Reveal>
          <ServicesTestimonialCarousel quotes={industryTestimonials} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl min-w-0 px-5 sm:px-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl border border-line bg-ink-panel p-6 sm:p-10 md:p-14">
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-signal/10 blur-3xl sm:-right-24 sm:-top-24 sm:h-72 sm:w-72"
                aria-hidden="true"
              />
              <div className="relative flex flex-col items-start justify-between gap-5 md:flex-row md:items-center md:gap-6">
                <div>
                  <h2 className={`font-display font-semibold text-paper ${fluid.h2}`}>
                    Don&apos;t see your industry listed?
                  </h2>
                  <p className={`mt-2 max-w-lg text-paper/60 ${fluid.body}`}>
                    We work with businesses across dozens of sectors.
                    Let&apos;s talk about your specific market.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="group flex min-h-[46px] w-full shrink-0 items-center justify-center gap-2 rounded-full bg-signal px-6 font-mono text-[12px] uppercase tracking-wider text-ink transition-transform hover:scale-[1.03] sm:w-auto sm:text-[13px]"
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

      <ServicesStickyCTA label="Don't see your industry?" linkText="Ask us" />
    </main>
  );
}