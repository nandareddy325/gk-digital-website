"use client";

import { useRef } from "react";

/* Spotlight card: cursor-tracked radial glow on hover, reused pattern from
   the homepage's ServiceCard. Isolated as a client component so the parent
   page can stay a server component and keep its metadata export. */
export default function SpotlightCard({
  children,
  className = "",
  highlighted = false,
}: {
  children: React.ReactNode;
  className?: string;
  highlighted?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty("--x", `${x}%`);
    el.style.setProperty("--y", `${y}%`);
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--x", "50%");
    el.style.setProperty("--y", "50%");
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`spotlight-card group relative h-full min-w-0 overflow-hidden transition-colors duration-300 ${
        highlighted ? "highlight-card" : ""
      } ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(220px circle at var(--x, 50%) var(--y, 50%), rgba(122,193,66,0.14), transparent 65%)",
        }}
        aria-hidden="true"
      />
      {highlighted && (
        <div
          className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-25 blur-2xl"
          style={{ background: "linear-gradient(135deg, var(--signal), var(--teal))" }}
          aria-hidden="true"
        />
      )}
      <div className="relative">{children}</div>
    </div>
  );
}