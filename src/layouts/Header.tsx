import Link from "next/link";
import type { NavLink } from "./Navbar";
import { Navbar } from "./Navbar";

type HeaderProps = {
  links: NavLink[];
  ctaLabel: string;
  ctaHref: string;
};

export function Header({ links, ctaLabel, ctaHref }: HeaderProps) {
  return (
    <header className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-black/50 px-6 py-5 backdrop-blur md:flex-row md:items-center md:justify-between">
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
  );
}
