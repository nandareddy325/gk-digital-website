"use client";

import { useState } from "react";

// Simple chip-based filter — better fit than a search box for a small,
// fixed set of cards. Filters by matching each chip's `filterValue`
// against a `data-tag` attribute on each .portfolio-card element.
export default function PortfolioFilterBar({
  tags,
}: {
  tags: string[];
}) {
  const [active, setActive] = useState<string>("All");

  const handleClick = (tag: string) => {
    setActive(tag);
    const cards = document.querySelectorAll<HTMLElement>(".portfolio-card");
    cards.forEach((el) => {
      const cardTag = el.dataset.tag ?? "";
      const match = tag === "All" || cardTag === tag;
      el.classList.toggle("hidden", !match);
    });
  };

  const allTags = ["All", ...tags];

  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      {allTags.map((tag) => (
        <button
          key={tag}
          onClick={() => handleClick(tag)}
          className={`rounded-full border px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-wider transition-colors sm:text-xs ${
            active === tag ? "border-transparent text-white" : "border-line text-paper/60 hover:border-signal/40 hover:text-signal"
          }`}
          style={
            active === tag
              ? { background: "linear-gradient(90deg, var(--signal), var(--teal))" }
              : undefined
          }
        >
          {tag}
        </button>
      ))}
    </div>
  );
}