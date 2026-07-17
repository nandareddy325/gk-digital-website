"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Clock,
  ShieldCheck,
  Sparkles,
  Target,
  Search,
  MessageCircle,
  Palette,
  TrendingUp,
  Mail,
  Star,
  Building2,
  Home as HomeIcon,
  ShoppingCart,
  UtensilsCrossed,
  CheckCircle2,
  Layout,
  BarChart3,
  X,
  Check,
  Plus,
  Minus,
  Lock,
  Users,
  FileText,
  ChevronDown,
  Scissors,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";

const WHATSAPP_LINK =
  "https://wa.me/917569622606?text=Hi!%20I%27d%20like%20to%20know%20more%20about%20GK%20Digital%20Solutions%27%20services.";

/* =========================================================================
   FLUID TYPE SCALE — clamp() based, no breakpoint jank between mobile/tablet/desktop.
   Every major heading scales continuously with viewport width instead of
   jumping at fixed points. This is the backbone of the mobile fix.
   ========================================================================= */
const fluid = {
  hero: "text-[clamp(1.7rem,6.4vw,4rem)] leading-[1.15]",
  h2: "text-[clamp(1.4rem,4.4vw,2.5rem)] leading-[1.18]",
  h3: "text-[clamp(1.05rem,2.6vw,1.25rem)] leading-snug",
  lead: "text-[clamp(0.9rem,1.9vw,1.125rem)] leading-relaxed",
  body: "text-[clamp(0.8125rem,1.5vw,0.9375rem)] leading-relaxed",
  eyebrow: "text-[clamp(0.625rem,1.3vw,0.75rem)] tracking-[0.18em]",
  stat: "text-[clamp(1.375rem,4.2vw,1.875rem)]",
  bigStat: "text-[clamp(1.875rem,5vw,2.5rem)]",
};

// ---------- Global page-level flourishes ----------
function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? (scrolled / max) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed left-0 top-0 z-[60] h-[2px] w-full bg-transparent" aria-hidden="true">
      <div
        className="h-full transition-[width] duration-150 ease-out"
        style={{
          width: `${progress}%`,
          background: "linear-gradient(90deg, var(--signal), var(--teal))",
        }}
      />
    </div>
  );
}

function GrainOverlay() {
  return (
    <svg
      className="pointer-events-none fixed inset-0 z-[55] h-full w-full opacity-[0.035] mix-blend-overlay"
      aria-hidden="true"
    >
      <filter id="grain-filter">
        <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#grain-filter)" />
    </svg>
  );
}

function ChevronDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`relative flex justify-center ${className}`} aria-hidden="true">
      <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-line" />
      <svg width="40" height="20" viewBox="0 0 44 22" className="chevron-divider relative bg-ink px-2">
        <defs>
          <linearGradient id="chev-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--signal)" />
            <stop offset="100%" stopColor="var(--teal)" />
          </linearGradient>
        </defs>
        <path d="M4 3 L22 19 L40 3" stroke="url(#chev-grad)" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

// ---------- PulseLine ----------
function PulseLine({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 1200 160" fill="none" className={className} preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id="pulse-fade" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--signal)" stopOpacity="0" />
          <stop offset="10%" stopColor="var(--signal)" stopOpacity="1" />
          <stop offset="55%" stopColor="var(--teal)" stopOpacity="1" />
          <stop offset="90%" stopColor="var(--teal)" stopOpacity="1" />
          <stop offset="100%" stopColor="var(--teal)" stopOpacity="0" />
        </linearGradient>
        <filter id="pulse-glow" x="-20%" y="-100%" width="140%" height="300%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <path
        d="M0,120 L90,120 L120,60 L150,140 L180,40 L210,120 L260,120 L290,90 L320,120 L420,120 L450,70 L480,130 L510,50 L540,120 L620,120 L650,95 L680,120 L780,120 L810,55 L840,135 L870,30 L900,120 L980,120 L1010,85 L1040,120 L1200,120"
        stroke="var(--line)"
        strokeWidth="1"
        opacity="0.5"
      />
      <path
        d="M0,120 L90,120 L120,60 L150,140 L180,40 L210,120 L260,120 L290,90 L320,120 L420,120 L450,70 L480,130 L510,50 L540,120 L620,120 L650,95 L680,120 L780,120 L810,55 L840,135 L870,30 L900,120 L980,120 L1010,85 L1040,120 L1200,120"
        stroke="url(#pulse-fade)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="pulse-path"
        filter="url(#pulse-glow)"
        opacity="0.9"
      />
      <circle cx="1040" cy="120" r="8" fill="var(--teal)" opacity="0.25" className="blink-dot" />
      <circle cx="1040" cy="120" r="4" fill="var(--teal)" className="blink-dot" />
    </svg>
  );
}

// ---------- Hero image mockup ----------
function DashboardMockup() {
  const wrapRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = wrapRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 6;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -6;
    el.style.setProperty("--tilt-x", `${y}deg`);
    el.style.setProperty("--tilt-y", `${x}deg`);
  };

  const handleLeave = () => {
    const el = wrapRef.current;
    if (!el) return;
    el.style.setProperty("--tilt-x", "0deg");
    el.style.setProperty("--tilt-y", "0deg");
  };

  return (
    <div className="relative block max-w-full">
      <style>{`
        @keyframes badge-float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(-2deg); }
        }
        @keyframes image-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-14px); }
        }
        .mockup-image {
          animation: image-float 7s ease-in-out infinite;
          transform: perspective(1400px) rotateX(var(--tilt-x, 0deg)) rotateY(var(--tilt-y, 0deg));
          transition: transform 0.25s ease-out;
        }
        .mockup-badge { animation: badge-float 5s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .mockup-image, .mockup-badge { animation: none !important; transform: none !important; }
        }
      `}</style>

      <div
        ref={wrapRef}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className="mockup-image relative"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div
          className="pointer-events-none absolute -inset-4 -z-10 rounded-[2rem] opacity-30 blur-2xl sm:-inset-6"
          style={{ background: "linear-gradient(135deg, var(--signal), var(--teal))" }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-60"
          style={{
            background: "linear-gradient(135deg, var(--signal), transparent 40%, var(--teal))",
            padding: "1px",
            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
          aria-hidden="true"
        />
        <Image
          src="/hero-dashboard.png"
          alt="GK Digital Solutions analytics dashboard"
          width={1100}
          height={733}
          priority
          className="h-auto w-full rounded-2xl ring-1 ring-line/60 shadow-2xl"
        />

        {/* Compact badges — scaled down and repositioned so they never clip
            off-screen or cause horizontal overflow on narrow viewports */}
        <div
          className="mockup-badge absolute -left-1 top-4 flex scale-[0.75] items-center gap-1.5 rounded-lg border border-line bg-ink-panel/95 px-2.5 py-2 shadow-xl backdrop-blur-md origin-top-left sm:-left-4 sm:top-6 sm:scale-90 md:-left-6 md:top-8 md:scale-100 md:gap-2 md:rounded-xl md:px-4 md:py-3"
          style={{ animationDelay: "1s" }}
        >
          <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-teal md:h-4 md:w-4" strokeWidth={2} />
          <div>
            <div className="text-[11px] font-semibold text-paper md:text-xs">New lead</div>
            <div className="text-[9px] text-paper/40 md:text-[10px]">synced to CRM · 2s ago</div>
          </div>
        </div>

        <div
          className="mockup-badge absolute -bottom-3 -right-1 flex scale-[0.75] items-center gap-1.5 rounded-lg border border-line bg-ink-panel/95 px-2.5 py-2 shadow-xl backdrop-blur-md origin-bottom-right sm:-bottom-4 sm:-right-3 sm:scale-90 md:-bottom-4 md:-right-4 md:scale-100 md:gap-2 md:rounded-xl md:px-4 md:py-3"
          style={{ animationDelay: "2.2s" }}
        >
          <TrendingUp className="h-3.5 w-3.5 shrink-0 text-signal md:h-4 md:w-4" strokeWidth={2} />
          <div>
            <div className="text-[11px] font-semibold text-paper md:text-xs">
              <CountUp end={18} /> brands
            </div>
            <div className="text-[9px] text-paper/40 md:text-[10px]">live right now</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------- Magnetic CTA button ----------
function MagneticLink({
  href,
  children,
  className = "",
  style,
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  external?: boolean;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.12}px, ${y * 0.25}px)`;
  };

  const handleLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = "translate(0px, 0px)";
  };

  const props = external ? { target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <Link
      href={href}
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`magnetic-btn transition-transform duration-200 ease-out ${className}`}
      style={style}
      {...props}
    >
      {children}
    </Link>
  );
}

// ---------- Hero ----------
function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-14 sm:pt-32 md:pt-40 md:pb-20">
      <style>{`
        @keyframes mesh-drift {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-4%, 3%) scale(1.08); }
        }
        .mesh-blob { animation: mesh-drift 14s ease-in-out infinite; }
        .mesh-blob-2 { animation: mesh-drift 18s ease-in-out infinite reverse; }
        .hero-gradient-text { background-size: 200% auto; animation: shine 6s linear infinite; }
        @keyframes shine { to { background-position: 200% center; } }
        @keyframes grid-fade { 0%, 100% { opacity: 0.05; } 50% { opacity: 0.1; } }
        .hero-grid { animation: grid-fade 8s ease-in-out infinite; background-size: 40px 40px; }
        @media (min-width: 768px) { .hero-grid { background-size: 56px 56px; } }
        @keyframes scroll-hint {
          0% { transform: translateY(0); opacity: 0; }
          30% { opacity: 1; }
          70% { opacity: 1; }
          100% { transform: translateY(10px); opacity: 0; }
        }
        .scroll-hint-dot { animation: scroll-hint 1.8s ease-in-out infinite; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        @media (prefers-reduced-motion: reduce) {
          .mesh-blob, .mesh-blob-2, .hero-gradient-text, .hero-grid, .scroll-hint-dot { animation: none !important; }
        }
      `}</style>

      <div
        className="hero-grid pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)",
          maskImage: "radial-gradient(ellipse 60% 50% at 50% 0%, black, transparent)",
        }}
        aria-hidden="true"
      />

      <div
        className="mesh-blob pointer-events-none absolute -right-24 top-0 h-64 w-64 rounded-full opacity-20 blur-3xl sm:-right-40 sm:h-96 sm:w-96"
        style={{ background: "linear-gradient(135deg, var(--signal), var(--teal))" }}
        aria-hidden="true"
      />
      <div
        className="mesh-blob-2 pointer-events-none absolute -left-20 bottom-0 h-48 w-48 rounded-full opacity-10 blur-3xl sm:-left-32 sm:h-72 sm:w-72"
        style={{ background: "linear-gradient(135deg, var(--teal), var(--signal))" }}
        aria-hidden="true"
      />

      {/* min-w-0 on the grid + text column is the key overflow fix: without it,
          flex/grid children default to min-width:auto and can push wider than
          the viewport on small phones, causing horizontal scroll. */}
      <div className="relative mx-auto grid max-w-6xl min-w-0 gap-8 px-5 sm:px-6 md:grid-cols-[1.1fr_0.9fr] md:items-center md:gap-12">
        <div className="min-w-0">
          <Reveal>
            <div className={`flex items-center gap-2 font-mono uppercase text-teal ${fluid.eyebrow}`}>
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-teal blink-dot" />
              <span>Live across 40+ campaigns · Hyderabad</span>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h1 className={`mt-4 break-words font-display font-semibold tracking-tight text-paper sm:mt-6 ${fluid.hero}`}>
              Your ad spend, tracked like a pipeline —{" "}
              <span
                className="hero-gradient-text bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(90deg, var(--signal), var(--teal), var(--signal))" }}
              >
                not a vanity metric.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className={`mt-4 max-w-xl text-paper/70 sm:mt-6 ${fluid.lead}`}>
              GK Digital Solutions is a Hyderabad-based digital marketing agency
              running Meta, Google and WhatsApp campaigns for interior design,
              real estate, hospitality and skin &amp; hair clinics — wiring
              every lead straight into your CRM, so you see what closes, not
              just what clicks.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-7 flex flex-wrap items-center gap-3 sm:mt-9 sm:gap-4">
              <MagneticLink
                href="/contact"
                className="flex min-h-[46px] items-center rounded-full px-5 font-mono text-[12px] uppercase tracking-wider text-white shadow-lg sm:px-6 sm:text-[13px]"
                style={{
                  background: "linear-gradient(90deg, var(--signal), var(--teal))",
                  boxShadow: "0 10px 30px -8px rgba(27,84,199,0.45)",
                }}
              >
                Book a free audit
              </MagneticLink>
              <MagneticLink
                href="#results"
                className="flex min-h-[46px] items-center rounded-full border border-line px-5 font-mono text-[12px] uppercase tracking-wider text-paper/80 hover:border-signal/50 hover:text-signal sm:px-6 sm:text-[13px]"
              >
                See results
              </MagneticLink>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto border-t border-line pt-6 max-w-xl sm:mt-14 sm:gap-6 md:grid md:grid-cols-3 md:overflow-visible md:pt-8">
              <div className="min-w-[122px] shrink-0 snap-start md:min-w-0">
                <div className={`font-display font-semibold text-paper ${fluid.stat}`}>
                  <CountUp end={40} suffix="+" />
                </div>
                <div className="mt-1 text-[11px] leading-snug text-paper/50 sm:text-xs">Active campaigns</div>
              </div>
              <div className="min-w-[122px] shrink-0 snap-start md:min-w-0">
                <div className={`font-display font-semibold text-paper ${fluid.stat}`}>
                  <CountUp end={3.2} decimals={1} suffix="×" />
                </div>
                <div className="mt-1 text-[11px] leading-snug text-paper/50 sm:text-xs">Avg. lead-to-close lift</div>
              </div>
              <div className="min-w-[122px] shrink-0 snap-start md:min-w-0">
                <div className={`font-display font-semibold text-paper ${fluid.stat}`}>
                  ₹<CountUp end={2.4} decimals={1} suffix="Cr+" />
                </div>
                <div className="mt-1 text-[11px] leading-snug text-paper/50 sm:text-xs">Ad spend managed</div>
              </div>
            </div>
          </Reveal>

          {/* Mobile-only scroll cue */}
          <div className="mt-8 flex justify-center sm:mt-10 md:hidden">
            <div className="scroll-hint-dot flex flex-col items-center gap-1">
              <span className="font-mono text-[9px] uppercase tracking-wider text-paper/40">Scroll</span>
              <ChevronDown className="h-3.5 w-3.5 text-teal" strokeWidth={2} />
            </div>
          </div>
        </div>

        <Reveal delay={200}>
          <div className="mx-auto min-w-0 max-w-[420px] md:max-w-none">
            <DashboardMockup />
          </div>
        </Reveal>
      </div>

      <div className="mt-10 sm:mt-14 md:mt-20">
        <PulseLine className="h-16 w-full sm:h-24 md:h-40" />
      </div>
    </section>
  );
}

// ---------- Industries strip (seamless marquee) ----------
// Skin & Hair added per client request — represents beauty/wellness clinics,
// a growing vertical alongside interior design and real estate.
const industryChips = [
  { icon: HomeIcon, label: "Interior Design" },
  { icon: Building2, label: "Real Estate" },
  { icon: UtensilsCrossed, label: "Hospitality" },
  { icon: Scissors, label: "Skin & Hair" },
  { icon: ShoppingCart, label: "E-Commerce" },
];

function IndustryStrip() {
  const chips = [...industryChips, ...industryChips];

  return (
    <section className="relative border-b border-line py-7 sm:py-10">
      <style>{`
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .marquee-track { animation: marquee 26s linear infinite; }
        .marquee-wrap:hover .marquee-track { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) { .marquee-track { animation: none !important; } }
      `}</style>
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal>
          <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between md:gap-5">
            <span className="shrink-0 font-mono text-[10px] uppercase tracking-wider text-paper/40 sm:text-[11px]">
              Trusted across
            </span>
            <div className="marquee-wrap relative w-full min-w-0 overflow-hidden md:w-auto">
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-ink to-transparent sm:w-12" aria-hidden="true" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-ink to-transparent sm:w-12" aria-hidden="true" />
              <div className="marquee-track flex w-max items-center gap-2.5 sm:gap-3">
                {chips.map((c, i) => (
                  <span
                    key={`${c.label}-${i}`}
                    className="flex shrink-0 items-center gap-1.5 rounded-full border border-line px-3 py-1.5 text-[11px] text-paper/60 sm:gap-2 sm:px-4 sm:py-2 sm:text-xs"
                  >
                    <c.icon className="h-3.5 w-3.5 text-signal" strokeWidth={1.75} />
                    {c.label}
                  </span>
                ))}
              </div>
            </div>
            <Link
              href="/industries"
              className="flex shrink-0 items-center gap-1 rounded-full px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-teal hover:underline sm:text-[11px]"
            >
              +10 more
              <ArrowUpRight className="h-3 w-3" strokeWidth={2} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ---------- Services: bento-style grid, one wide highlighted card ----------
const services = [
  { icon: Target, title: "Meta & Google Ads", desc: "Full-funnel campaigns built around your actual sales stages, not just impressions — tuned weekly against real close rates.", metric: "3.2x", metricLabel: "avg. ROAS" },
  { icon: Search, title: "Local SEO", desc: "Google Business Profile, local landing pages and review systems that put you at the top when Hyderabad searches for what you sell.", metric: "1–3", metricLabel: "map pack rank" },
  { icon: MessageCircle, title: "WhatsApp & CRM Automation", desc: "Every lead auto-tagged, followed up and dropped into your pipeline within minutes of coming in.", metric: "<5min", metricLabel: "response time" },
  { icon: Palette, title: "Creative & Content", desc: "Reels, carousels and ad creative shot and edited for categories that actually convert, not just look good.", metric: "12+", metricLabel: "assets / month" },
  { icon: Layout, title: "Website & Landing Pages", desc: "Fast, conversion-focused pages built to match the offer in your ad, so the click doesn't die on arrival.", metric: "<2s", metricLabel: "avg. load time" },
  { icon: Mail, title: "Email & Retargeting", desc: "Automated sequences that bring back the visitors who didn't convert on the first visit, at a fraction of new-lead cost.", metric: "4x", metricLabel: "cheaper than cold ads" },
  { icon: ShieldCheck, title: "Brand & Review Management", desc: "We monitor and respond to reviews across Google, Meta and Justdial so a bad week never becomes a bad reputation.", metric: "4.8★", metricLabel: "avg. client rating" },
  { icon: BarChart3, title: "100% CRM-Tracked Leads", desc: "Every single lead — from every channel — lands in one pipeline. No spreadsheet reconciliation, no lost enquiries, ever.", metric: "100%", metricLabel: "leads tracked", highlighted: true, wide: true },
];

function ServiceCard({ s }: { s: (typeof services)[number] }) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty("--x", `${x}%`);
    el.style.setProperty("--y", `${y}%`);
    const rx = ((y - 50) / 50) * -3.5;
    const ry = ((x - 50) / 50) * 3.5;
    el.style.setProperty("--rx", `${rx}deg`);
    el.style.setProperty("--ry", `${ry}deg`);
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`spotlight-card group relative flex h-full flex-col gap-3 overflow-hidden rounded-2xl border p-4 backdrop-blur-sm transition-[transform,border-color,box-shadow] duration-300 ease-out will-change-transform sm:gap-4 sm:p-5 md:p-6 ${
        s.wide ? "sm:col-span-2" : ""
      } ${
        s.highlighted
          ? "highlight-card border-transparent bg-ink-panel/60 shadow-2xl"
          : "border-line bg-ink-panel/40 hover:border-signal/40 hover:shadow-xl"
      }`}
      style={{ transform: "perspective(900px) rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg)) translateY(0)" }}
    >
      <div className="shine-sweep pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true" />

      {s.highlighted && (
        <div
          className="pointer-events-none absolute inset-0 -z-10 rounded-2xl"
          style={{
            background: "linear-gradient(135deg, var(--signal), var(--teal))",
            padding: "1.5px",
            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
          aria-hidden="true"
        />
      )}

      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: "radial-gradient(220px circle at var(--x, 50%) var(--y, 50%), rgba(122,193,66,0.14), transparent 65%)" }}
        aria-hidden="true"
      />

      {s.highlighted && (
        <div
          className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-25 blur-2xl"
          style={{ background: "linear-gradient(135deg, var(--signal), var(--teal))" }}
          aria-hidden="true"
        />
      )}

      <div className="relative flex items-start justify-between">
        <div
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 ease-out group-hover:scale-110 group-hover:-rotate-6 sm:h-10 sm:w-10"
          style={{
            background: s.highlighted
              ? "linear-gradient(135deg, var(--signal), var(--teal))"
              : "linear-gradient(135deg, rgba(27,84,199,0.15), rgba(122,193,66,0.15))",
          }}
        >
          <s.icon className={`h-4 w-4 ${s.highlighted ? "text-white" : "text-signal"}`} strokeWidth={1.75} />
        </div>

        <div className="text-right">
          <div
            className="bg-clip-text font-mono text-base text-transparent sm:text-lg"
            style={{ backgroundImage: "linear-gradient(90deg, var(--signal), var(--teal))" }}
          >
            {s.metric}
          </div>
          <div className="font-mono text-[8px] uppercase tracking-wider text-paper/40 sm:text-[9px]">{s.metricLabel}</div>
        </div>
      </div>

      {s.highlighted && (
        <span className="relative inline-flex w-fit items-center gap-1.5 rounded-full border border-teal/30 bg-teal/10 px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-teal">
          <span className="h-1.5 w-1.5 rounded-full bg-teal blink-dot" />
          Our guarantee
        </span>
      )}

      <div className="relative flex-1">
        <h3 className="font-display text-[14.5px] font-semibold leading-snug text-paper sm:text-base">{s.title}</h3>
        <p className="mt-1.5 text-[12px] leading-relaxed text-paper/60 sm:mt-2 sm:text-[13px]">{s.desc}</p>
      </div>

      <div className="relative flex items-center justify-between pt-1">
        <div className="h-px w-0 transition-all duration-300 group-hover:w-10" style={{ background: "linear-gradient(90deg, var(--signal), var(--teal))" }} />
        <ArrowUpRight className="h-4 w-4 -translate-x-1 text-paper/0 transition-all duration-300 group-hover:translate-x-0 group-hover:text-teal group-hover:opacity-100" strokeWidth={2} style={{ opacity: 0 }} />
      </div>
    </div>
  );
}

function Services() {
  return (
    <section id="services" className="relative py-14 sm:py-16 md:py-24">
      <style>{`
        @keyframes highlight-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(122,193,66,0.0), 0 20px 60px -20px rgba(27,84,199,0.35); }
          50% { box-shadow: 0 0 0 6px rgba(122,193,66,0.06), 0 20px 60px -20px rgba(122,193,66,0.35); }
        }
        .highlight-card { animation: highlight-pulse 3.5s ease-in-out infinite; }
        .spotlight-card { transform-style: preserve-3d; }
        .shine-sweep {
          background: linear-gradient(115deg, transparent 20%, rgba(255,255,255,0.06) 35%, rgba(122,193,66,0.10) 45%, transparent 60%);
          background-size: 250% 250%;
          background-position: 100% 0%;
          transition: background-position 0.7s ease;
        }
        .group:hover .shine-sweep { background-position: 0% 100%; }
        @media (prefers-reduced-motion: reduce) {
          .highlight-card { animation: none !important; }
          .shine-sweep { transition: none !important; }
        }
      `}</style>
      <ChevronDivider className="absolute -top-[11px] left-1/2 -translate-x-1/2" />
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal>
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <span className={`font-mono uppercase text-teal ${fluid.eyebrow}`}>What we run</span>
              <h2 className={`mt-2 font-display font-semibold tracking-tight text-paper sm:mt-3 ${fluid.h2}`}>
                Eight systems.
                <br />
                One pipeline.
              </h2>
            </div>
            <p className={`max-w-sm text-paper/60 ${fluid.body}`}>
              We don&apos;t sell services in isolation — each one feeds the
              same CRM, so nothing you pay for disappears into a report
              nobody reads.
            </p>
          </div>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-3.5 sm:mt-10 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 md:mt-14 md:gap-5">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 60}>
              <ServiceCard s={s} />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-8 text-center sm:mt-10">
            <Link href="/services" className="inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-wider text-teal hover:underline sm:text-[12px]">
              View all 11 services
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ---------- Process ----------
const steps = [
  { n: "01", title: "Audit", desc: "We pull your last 90 days of ad and lead data and show you exactly where budget is leaking before we touch a single campaign." },
  { n: "02", title: "Build", desc: "Campaigns, landing pages and CRM pipeline stages get built together — so every lead has somewhere to go the moment it comes in." },
  { n: "03", title: "Launch", desc: "We go live with a tracked baseline, so from day one you can see cost-per-lead and cost-per-close side by side." },
  { n: "04", title: "Optimize", desc: "Weekly review against pipeline data, not platform dashboards — we cut what doesn't close, and scale what does." },
];

function Process() {
  return (
    <section id="process" className="relative py-14 sm:py-16 md:py-24">
      <ChevronDivider className="absolute -top-[11px] left-1/2 -translate-x-1/2" />
      <style>{`
        @keyframes draw-line { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        .process-line { animation: draw-line 1.4s ease-out forwards; transform-origin: left; }
        @media (prefers-reduced-motion: reduce) { .process-line { animation: none !important; transform: scaleX(1); } }
      `}</style>
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal>
          <div className="max-w-2xl">
            <h2 className={`font-display font-semibold tracking-tight text-paper ${fluid.h2}`}>How we work</h2>
            <p className={`mt-3 text-paper/60 ${fluid.body}`}>
              No black-box retainers. Four stages, each one handed off with
              data you can check yourself.
            </p>
          </div>
        </Reveal>

        <div className="relative mt-10 sm:mt-12 md:mt-16">
          <div
            className="absolute left-4 top-1 bottom-1 w-px sm:hidden"
            style={{ background: "linear-gradient(180deg, var(--signal), var(--teal))" }}
            aria-hidden="true"
          />
          <div className="relative hidden sm:block">
            <div
              className="process-line absolute left-0 right-0 top-[calc(0.9rem)] h-px"
              style={{ background: "linear-gradient(90deg, var(--signal), var(--teal))" }}
            />
          </div>
          <div className="grid gap-7 sm:grid-cols-2 sm:gap-8 md:grid-cols-4">
            {steps.map((step, i) => (
              <Reveal key={step.n} delay={i * 90}>
                <div className="group relative flex gap-4 sm:block sm:gap-0">
                  <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line bg-ink font-mono text-xs text-signal-dim transition-colors group-hover:border-signal/60 group-hover:text-signal">
                    {step.n}
                  </div>
                  <div className="sm:mt-4">
                    <h3 className="font-display text-base font-semibold text-paper sm:text-lg">{step.title}</h3>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-paper/60 sm:mt-2 sm:text-sm">{step.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Why Choose Us teaser ----------
const whyPoints = [
  "Strategy before execution, always",
  "Full-service under one roof",
  "Transparent, jargon-free reporting",
  "Real team, not a ticket number",
];

function WhyChooseTeaser() {
  return (
    <section className="relative bg-ink-panel/40 py-14 sm:py-16 md:py-24">
      <ChevronDivider className="absolute -top-[11px] left-1/2 -translate-x-1/2" />
      <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:px-6 md:grid-cols-2 md:items-center md:gap-12">
        <Reveal>
          <span className={`font-mono uppercase text-teal ${fluid.eyebrow}`}>Why us</span>
          <h2 className={`mt-2 font-display font-semibold tracking-tight text-paper sm:mt-3 ${fluid.h2}`}>
            We don&apos;t just run campaigns — we build growth systems.
          </h2>
          <p className={`mt-3 text-paper/60 sm:mt-4 ${fluid.body}`}>
            Every engagement starts with an honest audit, not a sales
            pitch. If we don&apos;t think we can move the needle for you,
            we&apos;ll tell you that too.
          </p>
          <Link href="/why-choose-us" className="mt-5 inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-wider text-signal hover:underline sm:mt-6 sm:text-[12px]">
            See the full difference
            <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} />
          </Link>
        </Reveal>

        <Reveal delay={100}>
          <div className="space-y-2.5 sm:space-y-3">
            {whyPoints.map((p, i) => (
              <div
                key={p}
                className="flex items-center gap-3 rounded-xl border border-line bg-ink/80 p-3.5 backdrop-blur-sm transition-transform duration-200 hover:-translate-y-0.5 hover:border-signal/30 sm:p-4"
              >
                <CheckCircle2 className="h-4 w-4 shrink-0" strokeWidth={2} style={{ color: i % 2 === 0 ? "var(--signal)" : "var(--teal)" }} />
                <span className="text-[13px] text-paper/70 sm:text-sm">{p}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ---------- Comparison — us vs a typical agency ----------
const comparisonRows: { label: string; typical: string; us: string }[] = [
  { label: "Lead attribution", typical: "Platform dashboards only", us: "Tracked end-to-end in your CRM" },
  { label: "Reporting", typical: "Monthly PDF, after the fact", us: "Live pipeline, checked weekly together" },
  { label: "Follow-up speed", typical: "Whenever someone gets to it", us: "Auto-tagged and routed in minutes" },
  { label: "Contracts", typical: "12-month lock-in", us: "Month-to-month, earn the renewal" },
  { label: "Creative", typical: "Recycled templates", us: "Shot for your category, refreshed monthly" },
  { label: "Who you talk to", typical: "A rotating account exec", us: "The same strategist, every time" },
];

function ComparisonSection() {
  return (
    <section id="comparison" className="relative py-14 sm:py-16 md:py-24">
      <ChevronDivider className="absolute -top-[11px] left-1/2 -translate-x-1/2" />
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal>
          <span className={`font-mono uppercase text-teal ${fluid.eyebrow}`}>The difference, side by side</span>
          <h2 className={`mt-2 max-w-xl font-display font-semibold tracking-tight text-paper sm:mt-3 ${fluid.h2}`}>
            What changes when your ad spend has a pipeline behind it
          </h2>
        </Reveal>

        {/* MOBILE (< sm): stacked "vs" cards, no horizontal scroll needed at all.
            DESKTOP (>= sm): original 3-column table. */}
        <Reveal delay={80}>
          <div className="mt-8 space-y-3 sm:hidden">
            {comparisonRows.map((row) => (
              <div key={row.label} className="rounded-xl border border-line bg-ink-panel/30 p-4">
                <div className="text-[13px] font-semibold text-paper">{row.label}</div>
                <div className="mt-3 grid grid-cols-2 gap-3">
                  <div className="flex items-start gap-1.5 min-w-0">
                    <X className="mt-0.5 h-3.5 w-3.5 shrink-0 text-paper/30" strokeWidth={2} />
                    <span className="text-[12px] leading-snug text-paper/50">{row.typical}</span>
                  </div>
                  <div
                    className="flex min-w-0 items-start gap-1.5 rounded-lg p-2 -m-2"
                    style={{ background: "linear-gradient(180deg, rgba(27,84,199,0.08), rgba(122,193,66,0.05))" }}
                  >
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-teal" strokeWidth={2.5} />
                    <span className="text-[12px] leading-snug text-paper">{row.us}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 hidden overflow-hidden rounded-2xl border border-line sm:block">
            <div className="grid grid-cols-[1.1fr_1fr_1fr] bg-ink-panel/60 backdrop-blur-sm">
              <div className="p-5 font-mono text-[11px] uppercase tracking-wider text-paper/40">&nbsp;</div>
              <div className="border-l border-line p-5">
                <span className="font-mono text-[11px] uppercase tracking-wider text-paper/40">Typical agency</span>
              </div>
              <div
                className="relative border-l border-line p-5"
                style={{ background: "linear-gradient(180deg, rgba(27,84,199,0.10), rgba(122,193,66,0.06))" }}
              >
                <span className="font-mono text-[11px] uppercase tracking-wider text-teal">GK Digital Solutions</span>
              </div>
            </div>

            {comparisonRows.map((row, i) => (
              <div key={row.label} className={`grid grid-cols-[1.1fr_1fr_1fr] ${i % 2 === 0 ? "bg-ink" : "bg-ink-panel/20"}`}>
                <div className="flex items-center p-5 text-sm font-medium text-paper/80">{row.label}</div>
                <div className="flex items-center gap-2 border-l border-line p-5 text-sm text-paper/50">
                  <X className="h-3.5 w-3.5 shrink-0 text-paper/30" strokeWidth={2} />
                  {row.typical}
                </div>
                <div className="flex items-center gap-2 border-l border-line p-5 text-sm text-paper">
                  <Check className="h-3.5 w-3.5 shrink-0 text-teal" strokeWidth={2.5} />
                  {row.us}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ---------- Trust / guarantee strip ----------
const trustPoints = [
  { icon: Lock, title: "You own the data", desc: "Ad accounts, CRM and creative assets stay in your name, always." },
  { icon: FileText, title: "No lock-in contracts", desc: "Month-to-month by default — we keep the work because it performs." },
  { icon: Users, title: "One dedicated strategist", desc: "The person who audits your account is the one who runs it." },
  { icon: ShieldCheck, title: "Weekly, plain-language reports", desc: "Cost-per-lead and cost-per-close, no jargon to translate." },
];

function TrustStrip() {
  return (
    <section className="relative border-y border-line bg-ink-panel/30 py-10 sm:py-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
          {trustPoints.map((t, i) => (
            <Reveal key={t.title} delay={i * 70}>
              <div className="flex min-w-0 gap-2.5 sm:gap-3">
                <div
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg sm:h-9 sm:w-9"
                  style={{ background: "linear-gradient(135deg, rgba(27,84,199,0.15), rgba(122,193,66,0.15))" }}
                >
                  <t.icon className="h-3.5 w-3.5 text-signal sm:h-4 sm:w-4" strokeWidth={1.75} />
                </div>
                <div className="min-w-0">
                  <h3 className="font-display text-[12.5px] font-semibold leading-snug text-paper sm:text-sm">{t.title}</h3>
                  <p className="mt-1 hidden text-xs leading-relaxed text-paper/55 sm:block">{t.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Results ----------
const resultStats = [
  { end: 42, prefix: "₹", suffix: "L+", label: "pipeline value tracked / month" },
  { end: 3.2, decimals: 1, suffix: "x", label: "average return on ad spend" },
  { end: 68, suffix: "%", label: "leads auto-qualified before handoff" },
  { end: 18, suffix: "", label: "Hyderabad brands live right now" },
];

function Results() {
  return (
    <section id="results" className="relative py-14 sm:py-16 md:py-24">
      <ChevronDivider className="absolute -top-[11px] left-1/2 -translate-x-1/2" />
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal>
          <div className={`flex items-center gap-2 font-mono uppercase text-teal ${fluid.eyebrow}`}>
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-teal blink-dot" />
            <span>Numbers, not testimonials</span>
          </div>
          <h2 className={`mt-3 max-w-xl font-display font-semibold tracking-tight text-paper sm:mt-4 ${fluid.h2}`}>
            What&apos;s actually in the pipeline right now
          </h2>
        </Reveal>

        <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-4 sm:mt-14">
          {resultStats.map((s, i) => (
            <Reveal key={s.label} delay={i * 70}>
              <div className="group relative h-full min-w-0 bg-ink-panel/30 p-4 backdrop-blur-sm transition-colors hover:bg-ink-panel sm:p-8">
                <TrendingUp
                  className="h-3.5 w-3.5 transition-colors sm:h-4 sm:w-4"
                  strokeWidth={1.75}
                  style={{ color: i % 2 === 0 ? "var(--signal)" : "var(--teal)", opacity: 0.5 }}
                />
                <div
                  className={`mt-2.5 bg-clip-text font-mono text-transparent sm:mt-4 ${fluid.bigStat}`}
                  style={{ backgroundImage: "linear-gradient(90deg, var(--signal), var(--teal))" }}
                >
                  <CountUp end={s.end} decimals={s.decimals ?? 0} prefix={s.prefix ?? ""} suffix={s.suffix} />
                </div>
                <div className="mt-2 text-[12px] leading-snug text-paper/60 sm:mt-3 sm:text-sm">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-5 text-xs text-paper/40 sm:mt-6">
            Figures reflect active client campaigns and update as new brands come on board.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

// ---------- Portfolio teaser ----------
// Added a Skin & Hair example alongside the existing three, so the
// portfolio strip reflects the new industry vertical.
const portfolioTeasers = [
  { tag: "Local SEO & Lead Generation", title: "Real Estate Brand" },
  { tag: "Google Ads & Meta Ads ROI", title: "E-Commerce Store" },
  { tag: "Website Redesign & Local SEO", title: "Healthcare Clinic" },
  { tag: "Meta Ads & WhatsApp Booking", title: "Skin & Hair Clinic" },
];

function PortfolioTeaser() {
  return (
    <section className="relative py-14 sm:py-16 md:py-24">
      <ChevronDivider className="absolute -top-[11px] left-1/2 -translate-x-1/2" />
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal>
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <h2 className={`font-display font-semibold tracking-tight text-paper ${fluid.h2}`}>Real work. Real growth.</h2>
            <Link href="/portfolio" className="flex items-center gap-1 font-mono text-[11px] uppercase tracking-wider text-teal hover:underline sm:text-[12px]">
              View full portfolio
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} />
            </Link>
          </div>
        </Reveal>

        <div className="mt-7 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {portfolioTeasers.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <Link
                href="/portfolio"
                className="group block h-full rounded-2xl border border-dashed border-line bg-ink-panel/30 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-signal/40 hover:bg-ink-panel/60 sm:p-6"
              >
                <span className="font-mono text-[9px] uppercase tracking-wider text-paper/40 sm:text-[10px]">{p.tag}</span>
                <h3 className="mt-2.5 font-display text-base font-semibold text-paper sm:mt-3 sm:text-lg">{p.title}</h3>
                <ArrowUpRight className="mt-3 h-4 w-4 text-paper/30 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-teal sm:mt-4" strokeWidth={2} />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Testimonial teaser ----------
function TestimonialTeaser() {
  return (
    <section className="relative bg-ink-panel/40 py-14 sm:py-20">
      <ChevronDivider className="absolute -top-[11px] left-1/2 -translate-x-1/2" />
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-6">
        <Reveal>
          <div className="flex justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={0} style={{ fill: i % 2 === 0 ? "var(--signal)" : "var(--teal)" }} />
            ))}
          </div>
          <p className={`mt-4 font-display leading-relaxed text-paper sm:mt-5 ${fluid.h2}`}>
            &ldquo;They didn&apos;t just run ads — they understood our
            business and built a strategy around it. The results speak for
            themselves.&rdquo;
          </p>
          <p className="mt-3 font-mono text-[11px] uppercase tracking-wider text-paper/40 sm:mt-4 sm:text-[12px]">— Client, Hyderabad</p>
          <Link href="/testimonials" className="mt-5 inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-wider text-signal hover:underline sm:mt-6 sm:text-[12px]">
            Read more stories
            <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

// ---------- FAQ ----------
// Added a Skin & Hair specific question so prospective clinic clients see
// their category addressed directly, alongside the existing questions.
const faqs = [
  { q: "What's the minimum ad spend to work with you?", a: "Most Hyderabad clients start between ₹30,000–₹60,000/month in ad spend across Meta and Google. We'll tell you upfront in the audit if your budget is too thin to get a reliable read." },
  { q: "How long is the contract?", a: "Month-to-month. We don't hold clients in with a 12-month term — if the pipeline numbers aren't moving, you can walk away with 30 days' notice." },
  { q: "Do you only work with interior design and real estate brands?", a: "Those are where we have the deepest playbooks, but we also run campaigns for hospitality, skin & hair clinics, and e-commerce brands. The audit will tell you if your category is a fit." },
  { q: "Do you work with skin and hair clinics specifically?", a: "Yes — we run Meta and Google campaigns built around appointment bookings rather than just page likes, with WhatsApp follow-up so enquiries turn into consultations instead of going cold." },
  { q: "How does the CRM integration actually work?", a: "Every lead — from a Meta form, a Google call extension, or a WhatsApp message — gets written into your CRM pipeline automatically, tagged with source and campaign, within minutes of coming in." },
  { q: "What do I need to have ready before the audit?", a: "Just read-access to your last 90 days of ad accounts and whatever lead records you currently keep, even if that's a spreadsheet. We'll handle the rest." },
];

function FAQItem({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-line">
      <button onClick={onToggle} className="flex min-h-[52px] w-full items-center justify-between gap-4 py-4 text-left sm:py-6" aria-expanded={isOpen}>
        <span className="font-display text-[14.5px] font-medium text-paper sm:text-base md:text-lg">{q}</span>
        <span
          className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-line transition-colors sm:h-7 sm:w-7"
          style={isOpen ? { borderColor: "var(--teal)" } : undefined}
        >
          {isOpen ? <Minus className="h-3.5 w-3.5 text-teal" strokeWidth={2} /> : <Plus className="h-3.5 w-3.5 text-paper/50" strokeWidth={2} />}
        </span>
      </button>
      <div className="grid overflow-hidden transition-all duration-300 ease-out" style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}>
        <div className="overflow-hidden">
          <p className="pb-4 text-[13px] leading-relaxed text-paper/60 sm:pb-6 sm:text-sm md:max-w-2xl">{a}</p>
        </div>
      </div>
    </div>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-14 sm:py-16 md:py-24">
      <ChevronDivider className="absolute -top-[11px] left-1/2 -translate-x-1/2" />
      <div className="mx-auto max-w-4xl px-5 sm:px-6">
        <Reveal>
          <span className={`font-mono uppercase text-teal ${fluid.eyebrow}`}>Questions</span>
          <h2 className={`mt-2 font-display font-semibold tracking-tight text-paper sm:mt-3 ${fluid.h2}`}>Before you book the audit</h2>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-6 sm:mt-10">
            {faqs.map((f, i) => (
              <FAQItem key={f.q} q={f.q} a={f.a} isOpen={openIndex === i} onToggle={() => setOpenIndex(openIndex === i ? null : i)} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ---------- CTA ----------
const miniStats = [
  { value: "24h", label: "Avg. response time" },
  { value: "40+", label: "Audits sent so far" },
  { value: "18+", label: "Brands trust us" },
];

const avatarInitials = ["RK", "MS", "AP", "JD"];

function CTA() {
  return (
    <section id="contact" className="relative py-16 sm:py-20 md:py-28">
      <ChevronDivider className="absolute -top-[11px] left-1/2 -translate-x-1/2" />
      <style>{`
        @keyframes border-glow { 0%, 100% { opacity: 0.5; } 50% { opacity: 1; } }
        .cta-border-glow { animation: border-glow 4s ease-in-out infinite; }
        @keyframes shimmer-sweep {
          0% { transform: translateX(-120%) skewX(-15deg); }
          100% { transform: translateX(220%) skewX(-15deg); }
        }
        .shimmer-btn::after {
          content: "";
          position: absolute;
          top: 0; left: 0;
          width: 30%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent);
          animation: shimmer-sweep 3.2s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .cta-border-glow, .shimmer-btn::after { animation: none !important; }
        }
      `}</style>
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Reveal>
          <div
            className="cta-border-glow relative overflow-hidden rounded-2xl border p-5 backdrop-blur-sm sm:p-10 md:p-14"
            style={{ borderImage: "linear-gradient(135deg, var(--signal), var(--teal)) 1", background: "var(--ink-panel)" }}
          >
            <div
              className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full opacity-20 blur-3xl"
              style={{ background: "linear-gradient(135deg, var(--signal), var(--teal))" }}
              aria-hidden="true"
            />
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full opacity-10 blur-3xl" style={{ background: "var(--teal)" }} aria-hidden="true" />

            <div className="relative flex flex-col items-start justify-between gap-7 md:flex-row md:items-end md:gap-10">
              <div className="max-w-lg min-w-0">
                <span
                  className="inline-flex items-center gap-2 rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-white sm:text-[11px]"
                  style={{ background: "linear-gradient(90deg, var(--signal), var(--teal))" }}
                >
                  <Sparkles className="h-3 w-3" strokeWidth={2} />
                  Free 15-min audit
                </span>

                <h2 className={`mt-4 font-display font-semibold tracking-tight text-paper sm:mt-5 ${fluid.h2}`}>
                  Let&apos;s see where your budget is actually going.
                </h2>

                <p className={`mt-3 text-paper/60 sm:mt-4 ${fluid.body}`}>
                  Send us your last month of ad spend and lead numbers.
                  We&apos;ll map it against your close rate and tell you,
                  free, whether the problem is targeting, follow-up, or
                  something else entirely.
                </p>

                <div className="mt-5 flex items-center gap-3 sm:mt-6">
                  <div className="flex -space-x-2">
                    {avatarInitials.map((initials, i) => (
                      <div
                        key={initials}
                        className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-ink-panel text-[9px] font-semibold text-white sm:h-8 sm:w-8 sm:text-[10px]"
                        style={{
                          background: i % 2 === 0 ? "linear-gradient(135deg, var(--signal), var(--teal))" : "linear-gradient(135deg, var(--teal), var(--signal))",
                        }}
                      >
                        {initials}
                      </div>
                    ))}
                  </div>
                  <span className="text-[11px] text-paper/50 sm:text-xs">Joined by 18+ Hyderabad brands this year</span>
                </div>

                <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2.5 text-[11px] text-paper/50 sm:mt-6 sm:text-xs">
                  <div className="flex items-center gap-2">
                    <Clock className="h-3.5 w-3.5 text-signal" strokeWidth={2} />
                    Reply within 24 hours
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-3.5 w-3.5 text-teal" strokeWidth={2} />
                    No spam, no obligation
                  </div>
                </div>

                <div className="mt-7 grid grid-cols-3 gap-3 border-t border-line pt-5 sm:mt-8 sm:gap-4 sm:pt-6">
                  {miniStats.map((s) => (
                    <div key={s.label}>
                      <div className="font-display text-base font-semibold text-paper sm:text-xl">{s.value}</div>
                      <div className="mt-0.5 text-[9.5px] leading-snug text-paper/45 sm:text-[11px]">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex w-full min-w-0 flex-col gap-3 md:w-auto md:min-w-[280px]">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shimmer-btn group relative flex min-h-[48px] items-center justify-between gap-4 overflow-hidden rounded-full px-5 font-mono text-[12px] uppercase tracking-wider text-white shadow-lg transition-transform hover:scale-[1.02] sm:px-6 sm:text-[13px]"
                  style={{ background: "linear-gradient(90deg, var(--signal), var(--teal))" }}
                >
                  <span className="relative flex items-center gap-2">
                    <MessageCircle className="h-4 w-4" strokeWidth={2} />
                    WhatsApp us
                  </span>
                  <ArrowUpRight className="relative h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2} />
                </a>

                <a
                  href="mailto:hello@gkdigitalsolutions.in"
                  className="group flex min-h-[48px] items-center justify-between gap-4 rounded-full border border-line px-5 font-mono text-[12px] uppercase tracking-wider text-paper/80 transition-colors hover:border-teal/50 hover:text-teal sm:px-6 sm:text-[13px]"
                >
                  <span className="flex items-center gap-2">
                    <Mail className="h-4 w-4" strokeWidth={2} />
                    Email us
                  </span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2} />
                </a>

                <p className="pt-1 text-center font-mono text-[9px] uppercase tracking-wider text-paper/30 sm:text-[10px] md:text-left">
                  Takes 2 minutes &middot; Sent 40+ audits so far
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ---------- Home Page ----------
export default function Home() {
  // overflow-x-hidden on <main> is the page-level safety net: even if a
  // nested element ever pushes wider than the viewport, it clips here
  // instead of creating horizontal scroll on mobile.
  return (
    <main className="relative overflow-x-hidden">
      <ScrollProgress />
      <GrainOverlay />
      <Hero />
      <IndustryStrip />
      <Services />
      <Process />
      <WhyChooseTeaser />
      <ComparisonSection />
      <TrustStrip />
      <Results />
      <PortfolioTeaser />
      <TestimonialTeaser />
      <FAQSection />
      <CTA />
    </main>
  );
}