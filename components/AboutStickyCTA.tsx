"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

// Appears once the hero has scrolled out of view — same pattern as the
// homepage's sticky bar, kept as its own client component for the same
// reason as AboutCursorAura (the page above stays a server component).
export default function AboutStickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.querySelector("main > section");
    if (!hero) return;
    const io = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { rootMargin: "-10% 0px 0px 0px" }
    );
    io.observe(hero);
    return () => io.disconnect();
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-4 z-50 hidden justify-center px-4 transition-all duration-500 ease-out md:flex ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      }`}
      aria-hidden={!visible}
    >
      <div className="flex items-center gap-4 rounded-full border border-line bg-ink-panel/90 py-2 pl-5 pr-2 shadow-2xl backdrop-blur-xl">
        <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-paper/70">
          <span className="h-1.5 w-1.5 rounded-full bg-teal blink-dot" />
          Want the same for your brand?
        </span>
        <Link
          href="/contact"
          className="flex items-center gap-1.5 rounded-full px-4 py-2 font-mono text-[11px] uppercase tracking-wider text-white shadow-md"
          style={{ background: "linear-gradient(90deg, var(--signal), var(--teal))" }}
        >
          Talk to us
          <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
        </Link>
      </div>
    </div>
  );
}