"use client";

import { useEffect, useRef } from "react";

// Same quiet mouse-follow glow used on the homepage, extracted as its own
// client component so the About page itself can stay a server component
// (it needs to, for the `metadata` export at the top of about-page.tsx).
export default function AboutCursorAura() {
  const auraRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const isCoarse = window.matchMedia("(pointer: coarse)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isCoarse || reduce) return;

    const onMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", onMove, { passive: true });

    const tick = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.08;
      pos.current.y += (target.current.y - pos.current.y) * 0.08;
      const el = auraRef.current;
      if (el) {
        el.style.transform = `translate3d(${pos.current.x - 260}px, ${pos.current.y - 260}px, 0)`;
      }
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <div
      ref={auraRef}
      className="pointer-events-none fixed left-0 top-0 z-[1] hidden h-[520px] w-[520px] rounded-full opacity-[0.06] blur-[110px] md:block"
      style={{ background: "radial-gradient(circle, var(--signal), var(--teal) 60%, transparent 75%)" }}
      aria-hidden="true"
    />
  );
}