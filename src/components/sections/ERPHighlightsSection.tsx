import { CheckIcon } from "@/components/icons";

export type Feature = string;
export type Reason = string;

type ERPHighlightsSectionProps = {
  features: Feature[];
  reasons: Reason[];
};

export function ERPHighlightsSection({ features, reasons }: ERPHighlightsSectionProps) {
  return (
    <section id="about" className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="space-y-6 rounded-3xl border border-white/10 bg-[#07070d] p-8">
        <p className="text-xs uppercase tracking-[0.4em] text-[#17ffdc]">ERP Features</p>
        <h2 className="font-display text-3xl text-white">
          Everything your team needs to run lean, fast, and transparent.
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {features.map((feature) => (
            <div key={feature} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/30 px-4 py-3">
              <CheckIcon className="h-5 w-5 text-[#17ffdc]" />
              <span className="text-sm text-white/90">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6 rounded-3xl border border-white/10 bg-gradient-to-br from-[#070b13] to-[#0b0f1d] p-8">
        <p className="text-xs uppercase tracking-[0.4em] text-[#17ffdc]">Why choose us?</p>
        <h3 className="font-display text-2xl text-white">We pair rigorous engineering with human-first service.</h3>
        <ul className="space-y-4 text-white/80">
          {reasons.map((reason) => (
            <li key={reason} className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full border border-white/20 text-xs text-[#17ffdc]">
                •
              </span>
              <p>{reason}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
