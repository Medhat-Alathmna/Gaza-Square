'use client';

import Link from "next/link";
import { useScrollGate } from "@/hooks/useScrollGate";
import type { NavLink } from "./Navbar";
import { Navbar } from "./Navbar";

type FloatingHeaderProps = {
  links: NavLink[];
  ctaLabel: string;
  ctaHref: string;
};

export function FloatingHeader({ links, ctaLabel, ctaHref }: FloatingHeaderProps) {
  const isPastHero = useScrollGate("command-bridge");

  return (
    <div
      className={`pointer-events-none fixed inset-x-0 top-6 z-40 flex justify-center transition-opacity duration-500 ${
        isPastHero ? "opacity-100" : "opacity-0"
      }`}
    >
      <header className="pointer-events-auto flex w-[min(1100px,92vw)] flex-col gap-4 rounded-3xl border border-white/10 bg-black/80 px-6 py-4 backdrop-blur md:flex-row md:items-center md:justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#17ffdc] to-[#0b9682] text-black font-semibold tracking-tight">
            GS
          </div>
          <div>
            <p className="font-display text-lg leading-tight">Gaza Square</p>
            <p className="text-xs uppercase text-white/60">ERP & Intelligent Systems</p>
          </div>
        </Link>

        <Navbar links={links} />

        <Link
          href={ctaHref}
          className="inline-flex items-center justify-center rounded-full bg-[#17ffdc] px-5 py-2 text-sm font-semibold tracking-wide text-[#02221b] transition hover:shadow-[0_0_25px_rgba(23,255,220,0.4)]"
        >
          {ctaLabel}
        </Link>
      </header>
    </div>
  );
}

