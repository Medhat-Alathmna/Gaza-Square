'use client';

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useScrollGate } from "@/hooks/useScrollGate";
import type { NavLink } from "./Navbar";
import { Navbar } from "./Navbar";

type FloatingHeaderProps = {
  links: NavLink[];
  ctaLabel: string;
  ctaHref: string;
  locale: 'en' | 'ar';
  onChangeLocale: (next: 'en' | 'ar') => void;
  languageSelectLabel: string;
};

export function FloatingHeader({ links, ctaLabel, ctaHref, locale, onChangeLocale, languageSelectLabel }: FloatingHeaderProps) {
  const isPastHero = useScrollGate('command-bridge');

  const languages = [
    { code: 'en' as const,  native: 'EN' },
    { code: 'ar' as const,  native: 'AR' },
  ];
  const current = languages.find((l) => l.code === locale) || languages[0];

  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!menuRef.current) return;
      if (!(e.target instanceof Node)) return;
      if (!menuRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('click', onDocClick);
    return () => document.removeEventListener('click', onDocClick);
  }, []);

  return (
    <div
      className={`pointer-events-none fixed inset-x-0 top-6 z-40 flex justify-center transition-opacity duration-500 ${
        isPastHero ? 'opacity-100' : 'opacity-0'
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

        <div className="flex items-center gap-3">
          <div className="relative" ref={menuRef}>
            <label className="sr-only" htmlFor="lang-menu">{languageSelectLabel}</label>
            <button
              id="lang-menu"
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-2 text-xs font-semibold text-white/80 outline-none transition hover:border-[#17ffdc] focus:border-[#17ffdc]"
            >
              <span>{current.native}</span>
              <svg className="h-3 w-3 opacity-70" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 4.5 6 7.5 9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {open && (
              <ul className="absolute right-0 z-50 mt-2 w-44 overflow-hidden rounded-2xl border border-white/15 bg-[#0b0b0f] p-1 shadow-[0_15px_60px_rgba(0,0,0,0.5)]">
                {languages.map((lng) => (
                  <li key={lng.code}>
                    <button
                      type="button"
                      onClick={() => {
                        onChangeLocale(lng.code);
                        setOpen(false);
                      }}
                      className={`flex w-full items-center gap-2 rounded-xl px-1 py-2 text-left text-sm text-white/90 transition hover:bg-white/10 ${
                        locale === lng.code ? 'bg-white/10 ring-1 ring-white/15' : ''
                      }`}
                    >
                      <span>{lng.native}</span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <Link
            href={ctaHref}
            className="inline-flex items-center justify-center rounded-full bg-[#17ffdc] px-5 py-2 text-sm font-semibold tracking-wide text-[#02221b] transition hover:shadow-[0_0_25px_rgba(23,255,220,0.4)]"
          >
            {ctaLabel}
          </Link>
        </div>
      </header>
    </div>
  );
}
