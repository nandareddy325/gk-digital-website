"use client";

import { useState } from "react";

export default function BlogFilterBar({ categories }: { categories: string[] }) {
  const [active, setActive] = useState<string>("All");

  const handleClick = (cat: string) => {
    setActive(cat);
    const cards = document.querySelectorAll<HTMLElement>(".blog-card");
    cards.forEach((el) => {
      const cardCat = el.dataset.category ?? "";
      const match = cat === "All" || cardCat === cat;
      el.classList.toggle("hidden", !match);
    });
  };

  const allCats = ["All", ...categories];

  return (
    <div className="no-scrollbar flex snap-x gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:justify-center sm:overflow-visible">
      {allCats.map((cat) => (
        <button
          key={cat}
          onClick={() => handleClick(cat)}
          className={`shrink-0 snap-start rounded-full border px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-wider transition-colors sm:text-xs ${
            active === cat ? "border-transparent text-white" : "border-line text-paper/60 hover:border-signal/40 hover:text-signal"
          }`}
          style={active === cat ? { background: "linear-gradient(90deg, var(--signal), var(--teal))" } : undefined}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}