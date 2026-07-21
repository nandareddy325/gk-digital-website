"use client";

import { Search, X } from "lucide-react";
import { useEffect, useState } from "react";

// Filters any element carrying the .industry-card class by its own text
// content — works across both the featured (image) grid and the icon
// grid without needing the industry data passed in as a prop.
export default function IndustrySearchBar() {
  const [value, setValue] = useState("");
  const [matchCount, setMatchCount] = useState<number | null>(null);

  useEffect(() => {
    const term = value.trim().toLowerCase();
    const cards = document.querySelectorAll<HTMLElement>(".industry-card");
    let visible = 0;

    cards.forEach((el) => {
      const text = el.textContent?.toLowerCase() ?? "";
      const match = term === "" || text.includes(term);
      el.classList.toggle("hidden", !match);
      if (match) visible += 1;
    });

    setMatchCount(term === "" ? null : visible);
  }, [value]);

  return (
    <div className="mx-auto mt-6 max-w-md sm:mt-7">
      <div className="relative">
        <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-paper/30" strokeWidth={2} />
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search your industry…"
          className="w-full rounded-full border border-line bg-ink-panel/40 py-2.5 pl-11 pr-9 text-[13px] text-paper placeholder:text-paper/30 outline-none transition-colors focus:border-signal/50"
        />
        {value && (
          <button
            onClick={() => setValue("")}
            aria-label="Clear search"
            className="absolute right-3.5 top-1/2 flex h-5 w-5 -translate-y-1/2 items-center justify-center rounded-full text-paper/40 hover:text-signal"
          >
            <X className="h-3.5 w-3.5" strokeWidth={2} />
          </button>
        )}
      </div>
      {matchCount !== null && (
        <p className="mt-2 text-center text-[11px] text-paper/40">
          {matchCount > 0
            ? `${matchCount} ${matchCount === 1 ? "industry matches" : "industries match"} "${value}"`
            : `No industries match "${value}" — we likely still work with you. Talk to us below.`}
        </p>
      )}
    </div>
  );
}