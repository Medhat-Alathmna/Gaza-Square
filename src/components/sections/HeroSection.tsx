import Image from "next/image";
import Link from "next/link";

export type HeroStat = {
  label: string;
  value: string;
};

type HeroSectionProps = {
  stats: HeroStat[];
};

export function HeroSection({ stats }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-[#040404] via-[#06070f] to-[#0b0b16] px-8 py-16 shadow-[0_0_60px_rgba(17,255,220,0.08)]"
    >
      <div className="halftone-mask pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-8">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#17ffdc]">
            ERP Automation Studio
          </p>
          <h1 className="font-display text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
            Software, robotics, and <span className="text-[#17ffdc]">AI-driven ERP systems</span> for bold
            operators.
          </h1>
          <p className="max-w-xl text-lg text-white/70">
            We help small and medium businesses automate their operations with powerful, easy-to-use, and scalable ERP
            solutions. Every screen blends modern flat UI with retro halftone depth to keep data legible in the most
            demanding war rooms.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-2xl bg-[#17ffdc] px-6 py-3 font-semibold text-[#041812] transition hover:translate-y-0.5 hover:bg-[#12e3c4]"
            >
              Request a Demo
            </Link>
            <Link
              href="#projects"
              className="inline-flex items-center justify-center rounded-2xl border border-white/20 px-6 py-3 font-semibold text-white transition hover:border-white/50"
            >
              See Work in Action
            </Link>
          </div>
          <dl className="grid gap-6 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center">
                <dt className="text-xs uppercase tracking-widest text-white/60">{stat.label}</dt>
                <dd className="font-display text-2xl text-[#17ffdc]">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="absolute -top-6 -right-4 h-32 w-32 rounded-full bg-[#17ffdc33] blur-[90px]" aria-hidden />
          <div className="rounded-[28px] border border-white/10 bg-black/50 p-4 backdrop-blur">
            <Image
              src="/hero-illustration.svg"
              alt="Gaza Square dashboard illustration"
              width={560}
              height={480}
              className="h-auto w-full"
              priority
            />
          </div>
          <div className="mt-6 grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/80">
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">Live telemetry</p>
            <p className="font-display text-2xl text-white">
              Robotics-grade accuracy with human-friendly interfaces.
            </p>
            <p>
              IoT sensors, POS events, and HR signals stream into one nerve center. AI copilots triage the noise so your
              team can respond faster.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
