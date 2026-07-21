"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

const primaryLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

const moreLinks = [
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Process", href: "/process" },
  { label: "Why Choose Us", href: "/why-choose-us" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "FAQ", href: "/faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [mobileMoreOpen, setMobileMoreOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLLIElement>(null);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  }

  const isMoreActive = moreLinks.some((link) => isActive(link.href));

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setMoreOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setMoreOpen(false);
    setOpen(false);
    setMobileMoreOpen(false);
  }, [pathname]);

  // Scroll-shrink — the bar starts at its normal (already reduced) size and
  // compacts slightly further once the page has scrolled, a common premium
  // pattern that keeps more content visible without the nav ever feeling
  // like it jumped. Threshold is small since the bar is already compact.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200 bg-white/95 shadow-[0_2px_10px_rgba(15,23,42,0.06)]"
          : "border-b border-transparent bg-white/0 shadow-none"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 transition-[padding] duration-300 sm:px-6 lg:grid lg:grid-cols-[auto_auto_1fr_auto] lg:gap-0 ${
          scrolled ? "py-1 lg:py-1" : "py-1.5 lg:py-2"
        }`}
      >
        <Link
          href="/"
          className="flex shrink-0 items-center"
          onClick={() => setOpen(false)}
        >
          <div
            className={`relative transition-all duration-300 ${
              scrolled
                ? "h-8 w-[105px] sm:h-8 sm:w-[115px] lg:h-9 lg:w-[130px] xl:h-10 xl:w-[145px]"
                : "h-9 w-[115px] sm:h-9 sm:w-[125px] lg:h-10 lg:w-[140px] xl:h-11 xl:w-[155px]"
            }`}
          >
            <Image
              src="/GK_Digital_Logo.jpg"
              alt="GK Digital Solutions"
              fill
              sizes="(max-width: 1024px) 125px, 155px"
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        <div className="mx-4 hidden h-5 w-px bg-slate-200 lg:mx-5 xl:mx-6 lg:block" />

        <ul className="hidden items-center justify-center gap-0.5 lg:flex xl:gap-1">
          {primaryLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <li key={link.href} className="shrink-0">
                <Link
                  href={link.href}
                  className={`whitespace-nowrap rounded-full px-2 py-1.5 font-mono text-[12px] uppercase tracking-[0.1em] transition-colors xl:px-3 xl:text-[13px] xl:tracking-[0.11em] ${
                    active
                      ? "bg-slate-900 text-white"
                      : "text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}

          <li ref={dropdownRef} className="relative shrink-0">
            <button
              type="button"
              onClick={() => setMoreOpen((prev) => !prev)}
              aria-expanded={moreOpen}
              className={`flex items-center gap-1 whitespace-nowrap rounded-full px-2 py-1.5 font-mono text-[12px] uppercase tracking-[0.1em] transition-colors xl:px-3 xl:text-[13px] xl:tracking-[0.11em] ${
                isMoreActive
                  ? "bg-slate-900 text-white"
                  : "text-slate-500 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              More
              <ChevronDown
                className={`h-3 w-3 transition-transform ${
                  moreOpen ? "rotate-180" : ""
                }`}
                strokeWidth={2}
              />
            </button>

            {moreOpen && (
              <div className="absolute right-0 top-full mt-2 w-44 overflow-hidden rounded-xl border border-slate-200 bg-white py-1.5 shadow-lg">
                {moreLinks.map((link) => {
                  const active = isActive(link.href);
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMoreOpen(false)}
                      className={`block px-3.5 py-2 font-mono text-[11px] uppercase tracking-[0.1em] transition-colors ${
                        active
                          ? "bg-slate-900 text-white"
                          : "text-slate-600 hover:bg-slate-100"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            )}
          </li>
        </ul>

        <div className="flex shrink-0 items-center justify-end gap-2.5">
          <div className="mx-1 hidden h-5 w-px bg-slate-200 lg:mx-1.5 lg:block" />
          <Link
            href="/contact"
            className="hidden shrink-0 whitespace-nowrap rounded-full bg-slate-900 px-3.5 py-1.5 font-mono text-[12px] font-medium uppercase tracking-[0.1em] text-white transition-colors hover:bg-[#4C8F2A] lg:block xl:px-4 xl:text-[13px] xl:tracking-[0.11em]"
          >
            Get audit
          </Link>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-700 lg:hidden"
          >
            {open ? (
              <X className="h-3.5 w-3.5" strokeWidth={1.75} />
            ) : (
              <Menu className="h-3.5 w-3.5" strokeWidth={1.75} />
            )}
          </button>
        </div>
      </nav>

      {open && (
        <div className="max-h-[calc(100vh-56px)] overflow-y-auto border-t border-slate-200 bg-white px-4 py-4 sm:px-6 lg:hidden">
          <ul className="flex flex-col gap-1">
            {primaryLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-lg px-3 py-2 font-mono text-[12px] uppercase tracking-[0.12em] transition-colors ${
                      active
                        ? "bg-slate-900 text-white"
                        : "text-slate-500 hover:bg-slate-100"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}

            <li>
              <button
                type="button"
                onClick={() => setMobileMoreOpen((prev) => !prev)}
                aria-expanded={mobileMoreOpen}
                className={`flex w-full items-center justify-between rounded-lg px-3 py-2 font-mono text-[12px] uppercase tracking-[0.12em] transition-colors ${
                  isMoreActive
                    ? "bg-slate-900 text-white"
                    : "text-slate-500 hover:bg-slate-100"
                }`}
              >
                More
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform ${
                    mobileMoreOpen ? "rotate-180" : ""
                  }`}
                  strokeWidth={2}
                />
              </button>

              {mobileMoreOpen && (
                <ul className="mt-1 flex flex-col gap-1 pl-3">
                  {moreLinks.map((link) => {
                    const active = isActive(link.href);
                    return (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          onClick={() => setOpen(false)}
                          className={`block rounded-lg px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] transition-colors ${
                            active
                              ? "bg-slate-900 text-white"
                              : "text-slate-500 hover:bg-slate-100"
                          }`}
                        >
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          </ul>

          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-5 block rounded-full bg-slate-900 px-4 py-2 text-center font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-white"
          >
            Get audit
          </Link>
        </div>
      )}
    </header>
  );
}