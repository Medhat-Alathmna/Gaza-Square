'use client';

import type { CSSProperties } from "react";
import { ArrowIcon, CircuitIcon, LayersIcon, MobileIcon, SparkIcon } from "@/components/icons";
import { useSectionInView } from "@/hooks/useSectionInView";

const iconMap = {
  circuit: CircuitIcon,
  layers: LayersIcon,
  mobile: MobileIcon,
  spark: SparkIcon,
} as const;

type IconName = keyof typeof iconMap;

export type Service = {
  title: string;
  description: string;
  icon: IconName;
};

export type ServicesCopy = {
  eyebrow: string;
  title: string;
  description: string;
  focusLabel: string;
  cardCtaLabel: string;
};

type ServicesSectionProps = {
  services: Service[];
} & ServicesCopy;

export function ServicesSection({
  services,
  eyebrow,
  title,
  description,
  focusLabel,
  cardCtaLabel,
}: ServicesSectionProps) {
  const { ref, isVisible } = useSectionInView({ threshold: 0.25 });

  return (
    <section
      id="services"
      ref={ref}
      data-section-visible={isVisible ? "true" : "false"}
      className="space-y-8"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div className="reveal-item" data-anim="left">
          <p className="text-xs uppercase tracking-[0.4em] text-[#17ffdc]">{eyebrow}</p>
          <h2 className="font-display text-3xl text-white sm:text-4xl">{title}</h2>
        </div>
        <p className="reveal-item max-w-xl text-white/70" data-anim="right">
          {description}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {services.map((service, index) => {
          const Icon = iconMap[service.icon];
          return (
            <article
              key={service.title}
              className="reveal-item relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#080911] to-[#050505] p-6"
              data-anim="zoom-in"
              style={{ "--stagger": `${index * 90}ms` } as CSSProperties}
            >
              <div className="pointer-events-none absolute inset-0 opacity-40" aria-hidden>
                <div className="halftone-mask h-full w-full" />
              </div>
              <div className="relative flex flex-col gap-4">
                <div className="flex items-center gap-3 text-[#17ffdc]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-sm uppercase tracking-widest text-white/60">{focusLabel}</span>
                </div>
                <h3 className="font-display text-2xl text-white">{service.title}</h3>
                <p className="text-white/70">{service.description}</p>
                <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-[#17ffdc]">
                  {cardCtaLabel}
                  <ArrowIcon className="h-4 w-4" />
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
