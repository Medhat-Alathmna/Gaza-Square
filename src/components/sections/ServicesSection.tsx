import type { ComponentType } from "react";
import { ArrowIcon, type IconProps } from "@/components/icons";

export type Service = {
  title: string;
  description: string;
  Icon: ComponentType<IconProps>;
};

type ServicesSectionProps = {
  services: Service[];
};

export function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section id="services" className="space-y-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-[#17ffdc]">Services</p>
          <h2 className="font-display text-3xl text-white sm:text-4xl">Built for bold transformations</h2>
        </div>
        <p className="max-w-xl text-white/70">
          Senior product strategists and engineers build modules that respect the nitty-gritty of your business, from
          finance approvals to last-mile fulfillment.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <article
            key={service.title}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#080911] to-[#050505] p-6"
          >
            <div className="pointer-events-none absolute inset-0 opacity-40" aria-hidden>
              <div className="halftone-mask h-full w-full" />
            </div>
            <div className="relative flex flex-col gap-4">
              <div className="flex items-center gap-3 text-[#17ffdc]">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                  <service.Icon className="h-6 w-6" />
                </div>
                <span className="text-sm uppercase tracking-widest text-white/60">Focus</span>
              </div>
              <h3 className="font-display text-2xl text-white">{service.title}</h3>
              <p className="text-white/70">{service.description}</p>
              <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-[#17ffdc]">
                Explore capability
                <ArrowIcon className="h-4 w-4" />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
