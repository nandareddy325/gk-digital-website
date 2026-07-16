"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Modal from "@/components/Modal";
import ContactForm from "@/components/ContactForm";

export default function TalkToTeamButton({
  label = "Talk to our team",
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={
          className ||
          "group flex shrink-0 items-center gap-2 rounded-full bg-signal px-6 py-3 font-mono text-[13px] uppercase tracking-wider text-ink transition-transform hover:scale-[1.03]"
        }
      >
        {label}
        <ArrowUpRight
          className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          strokeWidth={2}
        />
      </button>

      <Modal open={open} onClose={() => setOpen(false)}>
        <h3 className="font-display text-xl font-semibold text-paper">
          Let&apos;s talk about your growth.
        </h3>
        <p className="mt-2 text-sm text-paper/60">
          Fill this out and our team will get back to you within 24
          hours.
        </p>
        <div className="mt-6">
          <ContactForm />
        </div>
      </Modal>
    </>
  );
}