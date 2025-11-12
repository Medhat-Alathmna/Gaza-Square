'use client';

import type { CSSProperties } from "react";

import { CheckIcon } from "@/components/icons";
import { useSectionInView } from "@/hooks/useSectionInView";

export type Feature = string;
export type Reason = string;

export type ERPHighlightsCopy = {
  featuresEyebrow: string;
  featuresTitle: string;
  reasonsEyebrow: string;
  reasonsTitle: string;
  reasonsDescription: string;
};

type ERPHighlightsSectionProps = {
  features: Feature[];
  reasons: Reason[];
  copy: ERPHighlightsCopy;
};

export function ERPHighlightsSection({ features, reasons, copy }: ERPHighlightsSectionProps) {
  const { ref, isVisible } = useSectionInView({ threshold: 0.3 });

  return (
    <section
      id="about"
      ref={ref}
      data-section-visible={isVisible ? "true" : "false"}
      className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]"
    >
      <div className="reveal-item glow-panel space-y-6 rounded-3xl border border-white/10 bg-[#07070d] p-8" data-anim="left">
        <p className="text-xs uppercase tracking-[0.4em] text-[#17ffdc]">{copy.featuresEyebrow}</p>
        <h2 className="font-display text-3xl text-white">{copy.featuresTitle}</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {features.map((feature, index) => (
            <div
              key={feature}
              className="reveal-item flex items-center gap-3 rounded-2xl border border-white/10 bg-black/30 px-4 py-3"
              data-anim="up"
              style={{ "--stagger": `${index * 70}ms` } as CSSProperties}
            >
              <CheckIcon className="h-5 w-5 text-[#17ffdc]" />
              <span className="text-sm text-white/90">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      <div
        className="reveal-item glow-panel space-y-6 rounded-3xl border border-white/10 bg-gradient-to-br from-[#070b13] to-[#0b0f1d] p-8"
        data-anim="right"
      >
        <p className="text-xs uppercase tracking-[0.4em] text-[#17ffdc]">{copy.reasonsEyebrow}</p>
        <h3 className="font-display text-2xl text-white">{copy.reasonsTitle}</h3>
        <p className="text-white/80">{copy.reasonsDescription}</p>
        <ul className="space-y-4 text-white/80">
          {reasons.map((reason, index) => (
            <li
              key={reason}
              className="reveal-item flex items-start gap-3"
              data-anim="up"
              style={{ "--stagger": `${index * 80}ms` } as CSSProperties}
            >
              <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full border border-white/20 text-xs text-[#17ffdc]">
                &bull;
              </span>
              <p>{reason}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
