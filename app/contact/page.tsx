import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import LiveStatusBadge from "@/components/LiveStatusBadge";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ScrollProgress from "@/components/ScrollProgress";
import {
  Mail,
  MapPin,
  Phone,
  Clock,
  MessageCircle,
  Zap,
  ShieldCheck,
  Search,
  ClipboardList,
  Rocket,
} from "lucide-react";

function WhatsappIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2Zm5.8 14.07c-.24.68-1.4 1.32-1.94 1.4-.5.08-1.12.11-1.8-.11-.42-.13-.95-.31-1.64-.6-2.88-1.24-4.76-4.14-4.9-4.33-.14-.19-1.18-1.57-1.18-3 0-1.42.75-2.12 1.02-2.41.27-.29.58-.36.78-.36l.55.01c.18 0 .41-.07.64.49.24.58.81 2 .88 2.15.07.15.12.32.02.51-.09.19-.14.31-.28.48-.14.17-.29.37-.42.5-.14.14-.28.29-.12.57.16.28.72 1.19 1.55 1.93 1.06.95 1.96 1.24 2.24 1.38.28.14.44.12.61-.07.17-.19.71-.83.9-1.11.19-.28.38-.24.63-.14.26.09 1.65.78 1.93.92.28.14.47.21.54.33.07.12.07.68-.17 1.36Z" />
    </svg>
  );
}

export const metadata = {
  title: "Contact GK Digital Solutions | Get a Free Consultation",
  description:
    "Get in touch with GK Digital Solutions for a free digital marketing consultation. Let's discuss SEO, ads, branding, and web design for your business.",
};

/* Fluid type scale — continuous clamp() scaling, matches the rest of the site */
const fluid = {
  hero: "text-[clamp(1.85rem,5.6vw,3.25rem)] leading-[1.18]",
  h2: "text-[clamp(1.4rem,4vw,2.25rem)] leading-[1.2]",
  lead: "text-[clamp(0.95rem,1.8vw,1.125rem)] leading-relaxed",
  eyebrow: "text-[clamp(0.625rem,1.3vw,0.75rem)] tracking-[0.18em]",
};

const WHATSAPP_LINK =
  "https://wa.me/917569622606?text=Hi!%20I%27d%20like%20to%20know%20more%20about%20GK%20Digital%20Solutions%27%20services.";

const trustPoints = [
  { icon: Zap, label: "Reply within 24 hours" },
  { icon: ShieldCheck, label: "No spam, no obligation" },
  { icon: MessageCircle, label: "Free 15-min strategy call" },
];

const contactChannels = [
  {
    icon: Phone,
    label: "Call us",
    value: "+91 7569622606",
    href: "tel:+917569622606",
  },
  {
    icon: Mail,
    label: "Email us",
    value: "hello@gkdigitalsolutions.in",
    href: "mailto:hello@gkdigitalsolutions.in",
  },
  {
    icon: WhatsappIcon,
    label: "WhatsApp",
    value: "Chat instantly",
    href: WHATSAPP_LINK,
  },
  {
    icon: MapPin,
    label: "Visit us",
    value: "Alluri Trade Centre, Bhagya Nagar Colony, Hyderabad",
    href: "#map",
  },
];

const nextSteps = [
  {
    icon: Search,
    n: "01",
    title: "We review your submission",
    desc: "Within a few hours, our team looks at your business, website and current marketing setup.",
  },
  {
    icon: ClipboardList,
    n: "02",
    title: "We prep a short audit",
    desc: "A quick, honest look at what's working, what isn't, and where the opportunity is.",
  },
  {
    icon: Rocket,
    n: "03",
    title: "We call you",
    desc: "A free 15-minute call to walk through the audit and answer your questions — no pressure, no pitch deck.",
  },
];

const miniFaqs = [
  {
    q: "How fast will I hear back?",
    a: "Within 24 hours on business days — often sooner.",
  },
  {
    q: "Is the initial audit really free?",
    a: "Yes, no cost and no obligation to sign up afterward.",
  },
  {
    q: "Can I just message on WhatsApp instead?",
    a: "Of course — the WhatsApp button below connects you directly to our team.",
  },
];

export default function ContactPage() {
  return (
    <main className="overflow-x-hidden pt-24 sm:pt-28 md:pt-32">
      <ScrollProgress />
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
        @keyframes draw-line { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        .step-line { animation: draw-line 1.4s ease-out forwards; transform-origin: left; }
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
          .mesh-blob, .eyebrow-underline::after, .icon-float, .step-line, .shimmer-btn::after {
            animation: none !important;
          }
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
              <MessageCircle className="icon-float h-3 w-3" strokeWidth={2} />
              Contact
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className={`mt-4 break-words font-display font-semibold tracking-tight text-paper ${fluid.hero}`}>
              Let&apos;s start growing your business today.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className={`mt-4 text-paper/60 sm:mt-5 ${fluid.lead}`}>
              Fill out the form below or reach out directly — our team
              typically responds within 24 hours.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 sm:mt-8 sm:gap-x-8">
              {trustPoints.map((t) => (
                <div
                  key={t.label}
                  className="flex items-center gap-2 text-[11px] text-paper/50 sm:text-xs"
                >
                  <t.icon className="h-3.5 w-3.5 shrink-0 text-signal" strokeWidth={2} />
                  {t.label}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-5">
              <LiveStatusBadge />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Contact channel cards */}
      <section className="border-b border-line py-10 sm:py-14">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
            {contactChannels.map((c, i) => (
              <Reveal key={c.label} delay={i * 70}>
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex h-full min-w-0 flex-col gap-3 rounded-2xl border border-line bg-ink-panel/30 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-signal/40 sm:p-6"
                >
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: "linear-gradient(135deg, var(--signal), var(--teal))",
                    }}
                  >
                    <c.icon className="h-4.5 w-4.5 text-white" strokeWidth={1.75} />
                  </div>
                  <div className="min-w-0">
                    <div className="font-mono text-[9px] uppercase tracking-wider text-paper/40 sm:text-[10px]">
                      {c.label}
                    </div>
                    <div className="mt-1 truncate text-[13px] font-medium text-paper sm:text-sm">
                      {c.value}
                    </div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Form + sidebar */}
      <section className="border-b border-line py-14 sm:py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl min-w-0 gap-8 px-5 sm:px-6 md:grid-cols-[1.3fr_1fr] md:gap-12">
          <Reveal>
            <div className="min-w-0">
              <ContactForm />
            </div>
          </Reveal>

          <div className="min-w-0 space-y-5 sm:space-y-6">
            <Reveal delay={80}>
              <div className="rounded-2xl border border-line bg-ink-panel/40 p-6 sm:p-8">
                <h3 className="font-mono text-[10px] uppercase tracking-wider text-paper/40 sm:text-[11px]">
                  Contact details
                </h3>
                <ul className="mt-4 space-y-3.5 sm:mt-5 sm:space-y-4">
                  <li className="flex items-start gap-3 text-[13px] text-paper/70 sm:text-sm">
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-signal" strokeWidth={1.75} />
                    <a href="tel:+917569622606" className="hover:text-paper">
                      +91 7569622606
                    </a>
                  </li>
                  <li className="flex items-start gap-3 text-[13px] text-paper/70 sm:text-sm">
                    <Mail className="mt-0.5 h-4 w-4 shrink-0 text-signal" strokeWidth={1.75} />
                    <a href="mailto:hello@gkdigitalsolutions.in" className="break-all hover:text-paper">
                      hello@gkdigitalsolutions.in
                    </a>
                  </li>
                  <li className="flex items-start gap-3 text-[13px] text-paper/70 sm:text-sm">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-signal" strokeWidth={1.75} />
                    Alluri Trade Centre, Bhagya Nagar Colony Rd,
                    Bhagya Nagar Colony, Venkat Nagar Colony,
                    Hyderabad, Telangana 500072
                  </li>
                  <li className="flex items-start gap-3 text-[13px] text-paper/70 sm:text-sm">
                    <Clock className="mt-0.5 h-4 w-4 shrink-0 text-signal" strokeWidth={1.75} />
                    Monday–Saturday, 9:30 AM – 6:30 PM
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="shimmer-btn group relative flex min-h-[48px] items-center justify-center gap-2 overflow-hidden rounded-full px-6 font-mono text-[12px] uppercase tracking-wider text-white transition-transform hover:scale-[1.02] sm:text-[13px]"
                style={{
                  background: "linear-gradient(90deg, var(--signal), var(--teal))",
                }}
              >
                <WhatsappIcon className="relative h-4 w-4" />
                <span className="relative">Chat on WhatsApp</span>
              </a>
            </Reveal>

            <Reveal delay={200}>
              <div className="rounded-2xl border border-dashed border-line p-5 text-center sm:p-6">
                <p className="text-[11px] text-paper/40 sm:text-xs">
                  Prefer a quick call? Book a free 15-minute strategy
                  session — no pressure, no jargon.
                </p>
                <Link
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block font-mono text-[11px] uppercase tracking-wider text-signal hover:underline sm:text-[12px]"
                >
                  Book a call →
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What happens next */}
      <section className="border-b border-line py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl min-w-0 px-5 sm:px-6">
          <Reveal>
            <span className={`eyebrow-underline font-mono uppercase text-teal ${fluid.eyebrow}`}>The process</span>
            <h2 className={`mt-2 font-display font-semibold text-paper ${fluid.h2}`}>
              What happens after you reach out
            </h2>
          </Reveal>

          <div className="relative mt-10 sm:mt-14">
            <div className="absolute left-4 top-1 bottom-1 w-px bg-line sm:hidden" aria-hidden="true" />
            <div
              className="step-line absolute left-0 right-0 top-[calc(1.4rem)] hidden h-px md:block"
              style={{ background: "linear-gradient(90deg, var(--signal), var(--teal))" }}
              aria-hidden="true"
            />
            <div className="grid gap-8 sm:gap-10 md:grid-cols-3 md:gap-8">
              {nextSteps.map((step, i) => (
                <Reveal key={step.n} delay={i * 90}>
                  <div className="group relative flex gap-4 sm:block sm:gap-0">
                    <div
                      className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110 sm:h-11 sm:w-11"
                      style={{
                        background: "linear-gradient(135deg, var(--signal), var(--teal))",
                      }}
                    >
                      <step.icon className="h-4.5 w-4.5 text-white sm:h-5 sm:w-5" strokeWidth={1.75} />
                    </div>
                    <div className="min-w-0 sm:mt-4">
                      <div className="font-mono text-[10px] uppercase tracking-wider text-paper/40 sm:text-[11px]">
                        Step {step.n}
                      </div>
                      <h3 className="mt-1 font-display text-base font-semibold text-paper sm:text-lg">
                        {step.title}
                      </h3>
                      <p className="mt-1.5 text-[13px] leading-relaxed text-paper/60 sm:mt-2 sm:text-sm">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section id="map" className="border-b border-line py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl min-w-0 px-5 sm:px-6">
          <Reveal>
            <span className={`eyebrow-underline font-mono uppercase text-teal ${fluid.eyebrow}`}>Find us</span>
            <h2 className={`mt-2 font-display font-semibold text-paper ${fluid.h2}`}>
              Our office address
            </h2>
            <p className="mt-3 max-w-2xl text-[13px] text-paper/60 sm:text-base">
              We&apos;re local to Hyderabad but work with clients remotely
              across regions — regular calls and reports keep
              communication seamless either way.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <div className="relative mt-6 overflow-hidden rounded-2xl border border-line sm:mt-8">
              <div
                className="absolute right-3 top-3 z-10 flex items-center gap-1.5 rounded-full px-3 py-1.5 font-mono text-[9px] uppercase tracking-wider text-white shadow-lg sm:right-4 sm:top-4 sm:gap-2 sm:px-4 sm:py-2 sm:text-[11px]"
                style={{
                  background: "linear-gradient(90deg, var(--signal), var(--teal))",
                }}
              >
                <MapPin className="h-3 w-3 shrink-0 sm:h-3.5 sm:w-3.5" strokeWidth={2} />
                <span className="hidden sm:inline">Office Address</span>
                <span className="sm:hidden">Office</span>
              </div>
              <iframe
                title="GK Digital Solutions — Alluri Trade Centre, Hyderabad"
                src="https://maps.google.com/maps?q=Alluri%20Trade%20Centre%2C%20Bhagya%20Nagar%20Colony%20Rd%2C%20Bhagya%20Nagar%20Colony%2C%20Venkat%20Nagar%20Colony%2C%20Hyderabad%2C%20Telangana%20500072&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="300"
                className="sm:h-[360px]"
                style={{ border: 0, filter: "grayscale(0.3) contrast(1.05)" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mini FAQ */}
      <section className="py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-4xl min-w-0 px-5 sm:px-6">
          <Reveal>
            <h2 className={`text-center font-display font-semibold text-paper ${fluid.h2}`}>
              Quick questions
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-3 sm:gap-6">
            {miniFaqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 90}>
                <div className="h-full min-w-0 rounded-2xl border border-line bg-ink-panel/30 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-signal/30 sm:p-6">
                  <h3 className="font-display text-[13.5px] font-semibold text-paper sm:text-sm">
                    {f.q}
                  </h3>
                  <p className="mt-2 text-[12.5px] leading-relaxed text-paper/60 sm:text-sm">
                    {f.a}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FloatingWhatsApp />
    </main>
  );
}