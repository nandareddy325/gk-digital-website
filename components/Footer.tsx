"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Clock,
  ArrowUp,
  ArrowUpRight,
  ShieldCheck,
  Zap,
  Award,
  Lock,
  Send,
  Users,
} from "lucide-react";

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function WhatsappIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2Zm5.8 14.07c-.24.68-1.4 1.32-1.94 1.4-.5.08-1.12.11-1.8-.11-.42-.13-.95-.31-1.64-.6-2.88-1.24-4.76-4.14-4.9-4.33-.14-.19-1.18-1.57-1.18-3 0-1.42.75-2.12 1.02-2.41.27-.29.58-.36.78-.36l.55.01c.18 0 .41-.07.64.49.24.58.81 2 .88 2.15.07.15.12.32.02.51-.09.19-.14.31-.28.48-.14.17-.29.37-.42.5-.14.14-.28.29-.12.57.16.28.72 1.19 1.55 1.93 1.06.95 1.96 1.24 2.24 1.38.28.14.44.12.61-.07.17-.19.71-.83.9-1.11.19-.28.38-.24.63-.14.26.09 1.65.78 1.93.92.28.14.47.21.54.33.07.12.07.68-.17 1.36Z" />
    </svg>
  );
}

function PlatformBadge({ label, href }: { label: string; href: string }) {
  return (
    <Link
      href={href}
      className="flex shrink-0 items-center gap-2 rounded-full border border-line px-4 py-2 text-sm text-paper/70 transition-colors hover:border-signal/50 hover:text-signal"
    >
      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-teal blink-dot" />
      {label}
    </Link>
  );
}

const linkGroups = [
  {
    title: "Services",
    links: [
      { label: "SEO", href: "/services/seo" },
      { label: "Google Ads", href: "/services/google-ads" },
      { label: "Meta Ads", href: "/services/meta-ads" },
      { label: "Website Design", href: "/services/website-design" },
      { label: "Lead Generation", href: "/services/lead-generation" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Why Choose Us", href: "/why-choose-us" },
      { label: "Process", href: "/process" },
      { label: "Industries", href: "/industries" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Blog", href: "/blog" },
      { label: "Pricing", href: "/pricing" },
      { label: "FAQ", href: "/faq" },
      { label: "Testimonials", href: "/testimonials" },
    ],
  },
];

const trustBadges = [
  { icon: ShieldCheck, label: "Transparent reporting" },
  { icon: Zap, label: "24-hr response time" },
  { icon: Award, label: "Results-first strategy" },
  { icon: Lock, label: "Secure payments via Razorpay" },
];

const platforms = [
  { label: "Google Ads", href: "/services/google-ads" },
  { label: "Meta Ads", href: "/services/meta-ads" },
  { label: "WhatsApp Business", href: "/services/whatsapp-marketing" },
  { label: "Google Business Profile", href: "/services/local-seo" },
];

/* Quick stats — added content, echoes the counters used on Home/About so
   the footer isn't just a list of links. */
const quickStats = [
  { value: "40+", label: "Campaigns managed" },
  { value: "18+", label: "Brands served" },
  { value: "24h", label: "Avg. reply time" },
];

// Business hours: Mon–Sat, 9:30 AM – 6:30 PM IST
function useIsOpenNow() {
  const [isOpen, setIsOpen] = useState<boolean | null>(null);

  useEffect(() => {
    const check = () => {
      const now = new Date();
      const day = now.getDay(); // 0 = Sunday
      const hours = now.getHours() + now.getMinutes() / 60;
      const open = day !== 0 && hours >= 9.5 && hours < 18.5;
      setIsOpen(open);
    };
    check();
    const id = setInterval(check, 60_000);
    return () => clearInterval(id);
  }, []);

  return isOpen;
}

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const isOpen = useIsOpenNow();

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    // TODO: wire this up to your email list / API when ready
    setSubscribed(true);
    setEmail("");
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer className="relative overflow-hidden border-t border-line">
      <style>{`
        @keyframes footer-glow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        .footer-line-glow { animation: footer-glow 4s ease-in-out infinite; }
        @keyframes mesh-drift {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-4%, 3%) scale(1.1); }
        }
        .footer-blob { animation: mesh-drift 16s ease-in-out infinite; }
        .footer-blob-2 { animation: mesh-drift 20s ease-in-out infinite reverse; }
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
          animation: shimmer-sweep 3.4s ease-in-out infinite;
        }
        @keyframes underline-draw { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        .footer-underline { position: relative; display: inline-flex; }
        .footer-underline::after {
          content: "";
          position: absolute;
          left: 0; bottom: -4px;
          height: 1.5px;
          width: 100%;
          background: linear-gradient(90deg, var(--signal), var(--teal));
          transform: scaleX(0);
          transform-origin: left;
          animation: underline-draw 0.8s ease-out 0.2s forwards;
        }
        @keyframes footer-marquee { from { transform: translateX(0); } to { transform: translateX(-33.333%); } }
        .footer-marquee-track {
          animation: footer-marquee 24s linear infinite;
          will-change: transform;
          flex-wrap: nowrap;
        }
        .footer-marquee-wrap:hover .footer-marquee-track { animation-play-state: paused; }
        .footer-no-scrollbar::-webkit-scrollbar { display: none; }
        .footer-no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        @keyframes pulse-dot {
          0%, 100% { box-shadow: 0 0 0 0 rgba(122,193,66,0.4); }
          50% { box-shadow: 0 0 0 6px rgba(122,193,66,0); }
        }
        .live-dot { animation: pulse-dot 2s ease-in-out infinite; }
        @keyframes icon-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        .icon-float { animation: icon-float 3.4s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .footer-line-glow, .footer-blob, .footer-blob-2, .shimmer-btn::after,
          .footer-underline::after, .footer-marquee-track, .live-dot, .icon-float {
            animation: none !important;
          }
        }
      `}</style>

      <div
        className="footer-line-glow absolute top-0 left-10 right-10 h-[1px] sm:left-40 sm:right-40"
        style={{
          background: "linear-gradient(90deg, var(--signal), var(--teal))",
        }}
      />
      <div
        className="footer-blob pointer-events-none absolute -bottom-32 -left-32 h-72 w-72 rounded-full opacity-10 blur-3xl"
        style={{
          background: "linear-gradient(135deg, var(--signal), var(--teal))",
        }}
        aria-hidden="true"
      />
      <div
        className="footer-blob-2 pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full opacity-[0.08] blur-3xl"
        style={{
          background: "linear-gradient(135deg, var(--teal), var(--signal))",
        }}
        aria-hidden="true"
      />

      {/* Newsletter — premium glass card */}
      <div className="relative border-b border-line py-10 sm:py-12">
        <div className="mx-auto max-w-6xl min-w-0 px-4 sm:px-6">
          <div className="relative overflow-hidden rounded-2xl border border-line bg-ink-panel/40 p-6 backdrop-blur-sm sm:p-8">
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-20 blur-3xl"
              style={{ background: "linear-gradient(135deg, var(--signal), var(--teal))" }}
              aria-hidden="true"
            />
            <div className="relative flex flex-col items-center gap-6 text-center md:flex-row md:items-center md:justify-between md:text-left">
              <div className="flex max-w-md min-w-0 items-start gap-3">
                <div
                  className="icon-float hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl sm:flex"
                  style={{ background: "linear-gradient(135deg, var(--signal), var(--teal))" }}
                >
                  <Send className="h-5 w-5 text-white" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-paper sm:text-2xl">
                    Get digital marketing tips straight to your inbox.
                  </h3>
                  <p className="mt-1.5 text-sm text-paper/70">
                    One useful email a month — no spam, unsubscribe anytime.
                  </p>
                </div>
              </div>

              {subscribed ? (
                <div className="flex items-center gap-2 rounded-full border border-teal/40 bg-teal/10 px-5 py-3 text-sm text-teal">
                  <ShieldCheck className="h-4 w-4 shrink-0" strokeWidth={2} />
                  Thanks — you&apos;re on the list!
                </div>
              ) : (
                <form
                  onSubmit={handleSubscribe}
                  className="mx-auto flex w-full max-w-sm min-w-0 flex-col gap-2.5 sm:flex-row md:mx-0"
                >
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@business.com"
                    className="w-full min-w-0 rounded-full border border-line bg-ink/60 px-5 py-3 text-sm text-paper outline-none transition-colors focus:border-signal/60"
                  />
                  <button
                    type="submit"
                    className="shimmer-btn relative flex min-h-[48px] shrink-0 items-center justify-center gap-1.5 overflow-hidden rounded-full px-6 font-mono text-xs uppercase tracking-wider text-white transition-transform hover:scale-[1.03]"
                    style={{
                      background:
                        "linear-gradient(90deg, var(--signal), var(--teal))",
                    }}
                  >
                    <span className="relative">Subscribe</span>
                    <ArrowUpRight className="relative h-4 w-4" strokeWidth={2} />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Quick stats — added content */}
          <div className="mt-6 grid grid-cols-3 gap-3 sm:mt-8 sm:gap-4">
            {quickStats.map((s) => (
              <div key={s.label} className="rounded-xl border border-line bg-ink-panel/20 py-3 text-center sm:py-4">
                <div
                  className="bg-clip-text font-display text-xl font-semibold text-transparent sm:text-2xl"
                  style={{ backgroundImage: "linear-gradient(90deg, var(--signal), var(--teal))" }}
                >
                  {s.value}
                </div>
                <div className="mt-0.5 text-[11px] text-paper/50 sm:text-xs">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Trust badges */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 border-t border-line pt-6 sm:mt-8 sm:gap-x-8 sm:pt-8">
            {trustBadges.map((b) => (
              <div
                key={b.label}
                className="flex items-center gap-2 text-sm text-paper/70"
              >
                <b.icon className="h-4 w-4 shrink-0 text-signal" strokeWidth={2} />
                {b.label}
              </div>
            ))}
          </div>

          {/* Platform marquee */}
          <div className="footer-marquee-wrap footer-no-scrollbar relative mt-5 w-full min-w-0 overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-ink to-transparent sm:w-12" aria-hidden="true" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-ink to-transparent sm:w-12" aria-hidden="true" />
            <div className="footer-marquee-track flex w-max items-center gap-2.5">
              {[...platforms, ...platforms, ...platforms].map((p, i) => (
                <PlatformBadge key={`${p.label}-${i}`} label={p.label} href={p.href} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="relative py-10 sm:py-12">
        <div className="mx-auto max-w-6xl min-w-0 px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-10 text-center sm:grid-cols-2 sm:gap-8 md:grid-cols-[1.1fr_0.8fr_0.9fr_1fr] md:text-left">
            <div className="mx-auto min-w-0 max-w-xs md:mx-0">
              <div className="relative mx-auto h-16 w-40 sm:h-[70px] sm:w-44 md:mx-0">
                <Image
                  src="/GK_Digital_Logo.jpg"
                  alt="GK Digital Solutions"
                  fill
                  sizes="176px"
                  className="object-contain object-center md:object-left"
                />
              </div>
              <p className="mt-3 text-sm leading-relaxed text-paper/70">
                Performance marketing and CRM systems for interior design,
                real estate, hospitality, skin &amp; hair and service
                businesses that want to know exactly where every rupee of
                ad spend goes.
              </p>

              <div className="mt-4 flex items-center justify-center gap-2 md:justify-start">
                <div className="flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5 text-xs text-paper/60">
                  <Users className="h-3.5 w-3.5 text-signal" strokeWidth={1.75} />
                  A GKA1 Enterprises company
                </div>
              </div>
            </div>

            {linkGroups.map((group) => (
              <div key={group.title} className="min-w-0">
                <h4 className="footer-underline mx-auto flex w-fit font-mono text-xs uppercase tracking-wider text-paper/60 md:mx-0">
                  {group.title}
                </h4>
                <ul className="mt-4 space-y-2.5">
                  {group.links.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="text-sm text-paper/80 transition-colors hover:text-signal"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="min-w-0">
              <h4 className="footer-underline mx-auto flex w-fit font-mono text-xs uppercase tracking-wider text-paper/60 md:mx-0">
                Contact
              </h4>

              {isOpen !== null && (
                <div className="mt-4 flex items-center justify-center gap-2 md:justify-start">
                  <span
                    className={`live-dot h-2 w-2 shrink-0 rounded-full ${isOpen ? "bg-teal" : "bg-paper/30"}`}
                  />
                  <span className="text-xs text-paper/60">
                    {isOpen ? "Open now — reach us on WhatsApp" : "Currently closed — we'll reply next business day"}
                  </span>
                </div>
              )}

              <ul className="mt-4 space-y-2.5">
                <li>
                  <a
                    href="mailto:hello@gkdigitalsolutions.in"
                    className="flex items-center justify-center gap-2 text-sm text-paper/80 transition-colors hover:text-signal md:justify-start"
                  >
                    <Mail className="h-4 w-4 shrink-0" strokeWidth={1.75} />
                    <span className="break-all">hello@gkdigitalsolutions.in</span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+917569622606"
                    className="flex items-center justify-center gap-2 text-sm text-paper/80 transition-colors hover:text-signal md:justify-start"
                  >
                    <Phone className="h-4 w-4 shrink-0" strokeWidth={1.75} />
                    +91 75696 22606
                  </a>
                </li>
                <li className="flex items-center justify-center gap-2 text-sm text-paper/80 md:items-start md:justify-start">
                  <MapPin className="h-4 w-4 shrink-0 md:mt-0.5" strokeWidth={1.75} />
                  Hyderabad, Telangana
                </li>
                <li className="flex items-center justify-center gap-2 text-sm text-paper/80 md:items-start md:justify-start">
                  <Clock className="h-4 w-4 shrink-0 md:mt-0.5" strokeWidth={1.75} />
                  Mon–Sat, 9:30 AM – 6:30 PM
                </li>
              </ul>

              <div className="mt-5 flex items-center justify-center gap-3 md:justify-start">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-paper/70 transition-all hover:scale-110 hover:border-signal/60 hover:text-signal"
                >
                  <InstagramIcon className="h-4 w-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-paper/70 transition-all hover:scale-110 hover:border-signal/60 hover:text-signal"
                >
                  <LinkedinIcon className="h-4 w-4" />
                </a>
                <a
                  href="https://wa.me/917569622606?text=Hi!%20I%27d%20like%20to%20know%20more%20about%20GK%20Digital%20Solutions%27%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-paper/70 transition-all hover:scale-110 hover:border-signal/60 hover:text-signal"
                >
                  <WhatsappIcon className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 border-t border-line pt-5 text-center text-xs text-paper/60 sm:mt-10 sm:pt-6 md:flex-row md:gap-6">
            <span>
              © {new Date().getFullYear()} GK Digital Solutions. All rights
              reserved.
            </span>
            <span className="hidden text-paper/30 md:inline">·</span>
            <span>A GKA1 Enterprises company</span>
            <span className="hidden text-paper/30 md:inline">·</span>
            <div className="flex items-center gap-4">
              <Link href="/privacy-policy" className="transition-colors hover:text-signal">
                Privacy Policy
              </Link>
              <span className="text-paper/30">·</span>
              <Link href="/terms-of-service" className="transition-colors hover:text-signal">
                Terms of Service
              </Link>
            </div>
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line text-paper/70 transition-all hover:-translate-y-0.5 hover:border-signal/60 hover:text-signal"
            >
              <ArrowUp className="h-3.5 w-3.5" strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}