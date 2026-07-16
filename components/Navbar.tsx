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
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Hyderabad", href: "/locations/hyderabad" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false); // mobile menu
  const [moreOpen, setMoreOpen] = useState(false); // desktop "More" dropdown
  const [mobileMoreOpen, setMobileMoreOpen] = useState(false); // mobile "More" accordion
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLLIElement>(null);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  }

  const isMoreActive = moreLinks.some((link) => isActive(link.href));

  // Close desktop dropdown on outside click
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

  // Close dropdown on route change
  useEffect(() => {
    setMoreOpen(false);
    setOpen(false);
    setMobileMoreOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md shadow-[0_1px_0_rgba(15,23,42,0.04)]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-1.5 sm:px-6 lg:grid lg:grid-cols-[auto_auto_1fr_auto] lg:gap-0 lg:py-2">
        {/* Logo */}
        <Link
          href="/"
          className="flex shrink-0 items-center"
          onClick={() => setOpen(false)}
        >
          <div className="relative h-11 w-[140px] sm:h-11 sm:w-[155px] lg:h-13 lg:w-[180px] xl:h-15 xl:w-[200px]">
            <Image
              src="/GK_Digital_Logo.png"
              alt="GK Digital Solutions"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Hairline divider */}
        <div className="mx-4 hidden h-6 w-px bg-slate-200 lg:mx-6 xl:mx-8 lg:block" />

        {/* Center nav links */}
        <ul className="hidden items-center justify-center gap-0.5 lg:flex xl:gap-1">
          {primaryLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <li key={link.href} className="shrink-0">
                <Link
                  href={link.href}
                  className={`whitespace-nowrap rounded-full px-2.5 py-1.5 font-mono text-[13px] uppercase tracking-[0.1em] transition-colors xl:px-3.5 xl:text-[14px] xl:tracking-[0.12em] ${
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

          {/* More dropdown — last item */}
          <li ref={dropdownRef} className="relative shrink-0">
            <button
              type="button"
              onClick={() => setMoreOpen((prev) => !prev)}
              aria-expanded={moreOpen}
              className={`flex items-center gap-1 whitespace-nowrap rounded-full px-2.5 py-1.5 font-mono text-[13px] uppercase tracking-[0.1em] transition-colors xl:px-3.5 xl:text-[14px] xl:tracking-[0.12em] ${
                isMoreActive
                  ? "bg-slate-900 text-white"
                  : "text-slate-500 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              More
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform ${
                  moreOpen ? "rotate-180" : ""
                }`}
                strokeWidth={2}
              />
            </button>

            {moreOpen && (
              <div className="absolute right-0 top-full mt-2 w-48 overflow-hidden rounded-xl border border-slate-200 bg-white py-1.5 shadow-lg">
                {moreLinks.map((link) => {
                  const active = isActive(link.href);
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMoreOpen(false)}
                      className={`block px-4 py-2.5 font-mono text-[12px] uppercase tracking-[0.1em] transition-colors ${
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

        {/* Right: divider + CTA + mobile toggle */}
        <div className="flex shrink-0 items-center justify-end gap-3">
          <div className="mx-1 hidden h-6 w-px bg-slate-200 lg:mx-2 lg:block" />
          <Link
            href="/get-audit"
            className="hidden shrink-0 whitespace-nowrap rounded-full bg-slate-900 px-4 py-2 font-mono text-[13px] font-medium uppercase tracking-[0.1em] text-white transition-colors hover:bg-[#4C8F2A] lg:block xl:px-5 xl:text-[14px] xl:tracking-[0.12em]"
          >
            Get audit
          </Link>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-700 lg:hidden"
          >
            {open ? (
              <X className="h-4 w-4" strokeWidth={1.75} />
            ) : (
              <Menu className="h-4 w-4" strokeWidth={1.75} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile / tablet menu (below lg) */}
      {open && (
        <div className="max-h-[calc(100vh-56px)] overflow-y-auto border-t border-slate-200 bg-white px-4 py-5 sm:px-6 lg:hidden">
          <ul className="flex flex-col gap-1">
            {primaryLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-lg px-3 py-2.5 font-mono text-[13px] uppercase tracking-[0.12em] transition-colors ${
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

            {/* More accordion — last item */}
            <li>
              <button
                type="button"
                onClick={() => setMobileMoreOpen((prev) => !prev)}
                aria-expanded={mobileMoreOpen}
                className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 font-mono text-[13px] uppercase tracking-[0.12em] transition-colors ${
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
                </ul>
              )}
            </li>
          </ul>

          <Link
            href="/get-audit"
            onClick={() => setOpen(false)}
            className="mt-6 block rounded-full bg-slate-900 px-4 py-2.5 text-center font-mono text-[12px] font-medium uppercase tracking-[0.12em] text-white"
          >
            Get audit
          </Link>
        </div>
      )}
    </header>
  );
}