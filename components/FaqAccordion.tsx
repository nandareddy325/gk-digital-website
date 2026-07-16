"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FaqAccordion({
  items,
}: {
  items: { q: string; a: string }[];
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item, i) => (
        <div key={item.q}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between gap-4 py-5 text-left"
          >
            <span className="font-display text-base font-medium text-paper">
              {item.q}
            </span>
            <ChevronDown
              className={`h-4 w-4 shrink-0 text-paper/40 transition-transform ${
                open === i ? "rotate-180" : ""
              }`}
              strokeWidth={2}
            />
          </button>
          {open === i && (
            <p className="pb-5 pr-8 text-sm leading-relaxed text-paper/60">
              {item.a}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}