'use client';
import Link from "next/link";
import type { CSSProperties } from "react";

import { ArrowIcon } from "@/components/icons";
import { useSectionInView } from "@/hooks/useSectionInView";

export type HeroStat = {
  label: string;
  value: string;
};

export type HeroCopy = {
  badgeTitle: string;
  badgeSubtitle: string;
  headline: string;
  subheadline: string;
  paragraph: string;
  primaryCta: string;
  secondaryCta: string;
};

type HeroSectionProps = {
  stats: HeroStat[];
  copy: HeroCopy;
};

export function HeroSection({ stats, copy }: HeroSectionProps) {
  const { ref, isVisible } = useSectionInView({ threshold: 0.55, rootMargin: "-5% 0px -10% 0px" });

  return (
    <section
      id="command-bridge"
      ref={ref} style={{'backgroundColor':"transparent"}}
      data-section-visible={isVisible ? "true" : "false"}
      className="relative isolate w-full overflow-hidden bg-black px-6 py-12 sm:px-10 lg:px-16"
    >
      <div className="relative grid min-h-[calc(100vh-160px)] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-8">
          <div className="reveal-item flex items-center gap-4" data-anim="left">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-[0.65rem] font-semibold tracking-[0.35em] text-white">
              GS
            </div>
            <div>
              <p className="text-[0.6rem] uppercase tracking-[0.5em] text-white/50">{copy.badgeTitle}</p>
              <p className="text-xs text-white/40">{copy.badgeSubtitle}</p>
            </div>
          </div>
          <h1
            className="reveal-item font-display text-3xl leading-snug text-white sm:text-4xl lg:text-5xl"
            data-anim="up"
            style={{ "--stagger": "80ms" } as CSSProperties}
          >
            {copy.headline}
            <span className="mt-3 block text-xl font-normal text-white/60 sm:text-2xl">{copy.subheadline}</span>
          </h1>

          <p
            className="reveal-item max-w-2xl text-base text-white/70 sm:text-lg"
            data-anim="up"
            style={{ "--stagger": "140ms" } as CSSProperties}
          >
            {copy.paragraph}
          </p>

          <div
            className="reveal-item flex flex-col gap-4 sm:flex-row"
            data-anim="up"
            style={{ "--stagger": "200ms" } as CSSProperties}
          >
            <Link
              href="#contact"
              className="inline-flex flex-1 items-center justify-center rounded-2xl bg-[#17ffdc] px-8 py-4 text-base font-semibold text-[#041511] shadow-[0_0_45px_rgba(23,255,220,0.5)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#12e3c4] hover:text-[#010504]"
            >
              {copy.primaryCta}
            </Link>
            <Link
              href="#services"
              className="inline-flex flex-1 items-center justify-center rounded-2xl border border-[#17ffdc4d] px-8 py-4 text-base font-semibold text-[#17ffdc] transition duration-300 hover:-translate-y-0.5 hover:border-[#17ffdc] hover:text-[#9fffee]"
            >
              {copy.secondaryCta}
            </Link>
          </div>

          {stats.length > 0 && (
            <dl
              className="reveal-item grid gap-3 sm:grid-cols-3"
              data-anim="up"
              style={{ "--stagger": "260ms" } as CSSProperties}
            >
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="reveal-item rounded-2xl border border-white/10 bg-white/5 p-3 text-center"
                  data-anim="up"
                  style={{ "--stagger": `${300 + index * 70}ms` } as CSSProperties}
                >
                  <dt className="text-[0.65rem] uppercase tracking-[0.4em] text-white/50">{stat.label}</dt>
                  <dd className="font-display text-xl text-[#17ffdc]">{stat.value}</dd>
                </div>
              ))}
            </dl>
          )}

        </div>

        <figure className="reveal-item" data-anim="right">
          <div
            className="relative"
            style={{ width: '40rem', height: '40rem', marginInlineStart: '11rem' } as CSSProperties}
          >
            <video
              src="https://framerusercontent.com/assets/dy1rKyw1PqF0DTRkVd1bT1zKMrE.mp4"
              autoPlay
              loop
              muted
              playsInline
              aria-label="Rotating AI planet visualization"
              className="relative z-10 object-cover w-full h-full"
            />
          </div>
        </figure>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center">
        <div
          className="reveal-item flex items-center gap-3 text-[0.65rem] uppercase tracking-[0.6em] text-white/60"
          data-anim="down"
          style={{ "--stagger": "480ms" } as CSSProperties}
        >
          <span>Scroll</span>
          <span className="h-8 w-px bg-white/25" />
          <ArrowIcon className="h-4 w-4 rotate-90 text-[#17ffdc]" aria-hidden />
        </div>
      </div>
    </section>
  );
}
