import Image from "next/image";
import Link from "next/link";
import type { ComponentType, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

type Service = {
  title: string;
  description: string;
  Icon: ComponentType<IconProps>;
};

type PortfolioProject = {
  title: string;
  description: string;
  image: string;
  tag: string;
};

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const services: Service[] = [
  {
    title: "Custom ERP Development",
    description:
      "Purpose-built ERP cores tailored to retail, manufacturing, and service workflows with obsessive attention to permissions, automation, and analytics.",
    Icon: CircuitIcon,
  },
  {
    title: "Web Application Development",
    description:
      "Angular, React, and Django teams crafting rapid-response portals, partner dashboards, and customer-facing layers that plug directly into your ERP.",
    Icon: LayersIcon,
  },
  {
    title: "Mobile App Development",
    description:
      "Ionic + Capacitor powered field apps, digital checklists, and executive copilots that work offline and sync intelligently when devices reconnect.",
    Icon: MobileIcon,
  },
  {
    title: "API Integration & AI Solutions",
    description:
      "Secure APIs, RPA, and AI copilots that connect CRMs, POS, and data lakes. We pair business logic with AI-assisted predictions you can trust.",
    Icon: SparkIcon,
  },
];

const erpFeatures = [
  "Sales & POS Management",
  "Inventory & Stock Intelligence",
  "HR & Attendance Automation",
  "Purchases & Vendor Control",
  "Smart Reporting & Dashboards",
  "AI-assisted Planning & Forecasts",
];

const reasonsToChooseUs = [
  "Hands-on launches across retail, clinics, F&B, and logistics.",
  "Flexible modules and API-first design to bend with your process.",
  "Short delivery sprints backed by 24/7 regional support.",
  "Pricing that respects small-business realities.",
  "Modern stack: Next.js, NestJS, PostgreSQL, and secure DevOps.",
];

const portfolioProjects: PortfolioProject[] = [
  {
    title: "CityStay Booking Platform",
    description:
      "Self-serve booking & invoicing portal with automated room assignment and WhatsApp guest updates.",
    image: "/portfolio-booking.svg",
    tag: "Booking System",
  },
  {
    title: "SwiftRoute Delivery OS",
    description:
      "Dispatch, courier tracking, and proof-of-delivery suite syncing with marketplaces and POS.",
    image: "/portfolio-delivery.svg",
    tag: "Delivery / Order",
  },
  {
    title: "Helix ERP Suite",
    description:
      "Full ERP deployment for a multi-brand retailer: finance, POS, HR, and vendor procurement.",
    image: "/portfolio-erp-suite.svg",
    tag: "Full ERP",
  },
  {
    title: "ShelfSense Inventory Hub",
    description:
      "Real-time store + warehouse inventory with barcode audits, supplier scoring, and AI restock nudges.",
    image: "/portfolio-store.svg",
    tag: "Store Management",
  },
];

const testimonials = [
  {
    quote:
      "Gaza Square delivered our ERP in 14 weeks. They understood the chaos of our retail floors and turned it into dashboards our teams actually use.",
    author: "Samar Al-Atrash",
    role: "COO, Nook Retail",
  },
  {
    quote:
      "The support team feels in-house. Anytime our HR team needs a tweak, they jump in with a solution and automated tests the same day.",
    author: "Omar Kh. Suleiman",
    role: "Head of People, VeloLogistics",
  },
  {
    quote:
      "Their AI-assisted reporting helped us trim inventory waste by 18%. It is rare to work with a partner that codes and advises with equal weight.",
    author: "Dima Abu Shaaban",
    role: "Managing Director, Coastline Foods",
  },
];

const stats = [
  { label: "ERP verticals shipped", value: "12+" },
  { label: "Automation savings unlocked", value: "$4.8M" },
  { label: "Dedicated engineers", value: "18" },
];

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/gaza-square" },
  { label: "Behance", href: "https://www.behance.net" },
  { label: "GitHub", href: "https://github.com" },
];

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#030303] text-white">
      <div className="grid-overlay pointer-events-none absolute inset-0 opacity-60" aria-hidden />
      <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-[#17ffdc33] blur-[160px]" aria-hidden />
      <div className="pointer-events-none absolute left-8 bottom-8 h-48 w-48 rounded-full bg-[#ff9f4033] blur-[120px]" aria-hidden />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col gap-20 px-6 pb-24 pt-10 sm:px-10 lg:px-12">
        <Header />
        <Hero />
        <Services />
        <ERPHighlights />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

function Header() {
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

      <nav className="flex flex-wrap items-center gap-4 text-sm text-white/70">
        {navLinks.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="transition-colors hover:text-[#17ffdc]"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <Link
        href="#contact"
        className="inline-flex items-center justify-center rounded-full bg-[#17ffdc] px-5 py-2 text-sm font-semibold tracking-wide text-[#02221b] transition hover:shadow-[0_0_25px_rgba(23,255,220,0.4)]"
      >
        Book a Free Consultation
      </Link>
    </header>
  );
}

function Hero() {
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
            Software, robotics, and{" "}
            <span className="text-[#17ffdc]">AI-driven ERP systems</span> for bold operators.
          </h1>
          <p className="max-w-xl text-lg text-white/70">
            We help small and medium businesses automate their operations with powerful, easy-to-use, and
            scalable ERP solutions. Every screen blends modern flat UI with retro halftone depth to keep data
            legible in the most demanding war rooms.
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
              IoT sensors, POS events, and HR signals stream into one nerve center. AI copilots triage the
              noise so your team can respond faster.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
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

function ERPHighlights() {
  return (
    <section id="about" className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="space-y-6 rounded-3xl border border-white/10 bg-[#07070d] p-8">
        <p className="text-xs uppercase tracking-[0.4em] text-[#17ffdc]">ERP Features</p>
        <h2 className="font-display text-3xl text-white">
          Everything your team needs to run lean, fast, and transparent.
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {erpFeatures.map((feature) => (
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
          {reasonsToChooseUs.map((reason) => (
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

function Portfolio() {
  return (
    <section id="projects" className="space-y-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-[#17ffdc]">Portfolio / Case Studies</p>
          <h2 className="font-display text-3xl text-white sm:text-4xl">Proof in production</h2>
        </div>
        <p className="max-w-2xl text-white/70">
          A sampling of the operating systems, booking tools, and ERP suites we have launched in Gaza, the Gulf, and
          Europe. Every engagement integrates tightly with legacy hardware and modern cloud.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {portfolioProjects.map((project) => (
          <article key={project.title} className="group flex flex-col gap-5 rounded-3xl border border-white/10 bg-[#080911] p-6">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/40">
              <Image
                src={project.image}
                alt={project.title}
                width={420}
                height={260}
                className="h-auto w-full transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#ff9f40]">
              <span>{project.tag}</span>
              <div className="h-px flex-1 bg-white/20" />
            </div>
            <h3 className="font-display text-2xl text-white">{project.title}</h3>
            <p className="text-white/70">{project.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="space-y-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-[#17ffdc]">Testimonials</p>
          <h2 className="font-display text-3xl text-white">People who trusted us</h2>
        </div>
        <p className="max-w-2xl text-white/70">
          Operators, founders, and support teams across the region count on our team to keep their data reliable and
          their automations safe.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <figure key={testimonial.author} className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-[#06060c] p-6">
            <p className="text-lg text-white/90">&ldquo;{testimonial.quote}&rdquo;</p>
            <figcaption>
              <p className="font-display text-white">{testimonial.author}</p>
              <p className="text-sm text-white/60">{testimonial.role}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="space-y-6 rounded-3xl border border-white/10 bg-[#07070d] p-8">
        <p className="text-xs uppercase tracking-[0.4em] text-[#17ffdc]">Contact</p>
        <h2 className="font-display text-3xl text-white">Let&apos;s architect your ERP.</h2>

        <form className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Name" type="text" name="name" placeholder="Amal Hasan" />
            <Field label="Email" type="email" name="email" placeholder="you@company.com" />
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Phone" type="tel" name="phone" placeholder="+970 599 123 456" />
            <Field label="Company" type="text" name="company" placeholder="Gaza Mart" />
          </div>
          <Field
            label="Message"
            as="textarea"
            name="message"
            placeholder="Tell us about the workflows you need to automate..."
          />
          <button
            type="submit"
            className="w-full rounded-2xl bg-[#17ffdc] py-3 text-base font-semibold text-[#05130f] transition hover:bg-[#12e3c4]"
          >
            Send Request
          </button>
        </form>
      </div>

      <div className="space-y-6 rounded-3xl border border-white/10 bg-[#05050a] p-8">
        <h3 className="font-display text-2xl text-white">Fast ways to reach us</h3>
        <div className="space-y-4 text-white/80">
          <p>
            WhatsApp us directly:{" "}
            <Link href="https://wa.me/970599000111" className="text-[#17ffdc] underline">
              +970 599 000 111
            </Link>
          </p>
          <p>
            Support email:{" "}
            <Link href="mailto:support@gazasquare.studio" className="text-[#17ffdc] underline">
              support@gazasquare.studio
            </Link>
          </p>
          <p>Office hours: Sunday &ndash; Friday · 9:00 &ndash; 18:00 (GMT+2)</p>
        </div>
        <div className="overflow-hidden rounded-2xl border border-white/10">
          <iframe
            title="Gaza Square HQ"
            src="https://maps.google.com/maps?q=Gaza&t=&z=12&ie=UTF8&iwloc=&output=embed"
            className="h-64 w-full"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="rounded-3xl border border-white/10 bg-black/50 px-6 py-8 text-sm text-white/70 sm:px-10">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-lg text-white">Gaza Square</p>
          <p className="text-white/50">Smart software. Human touch.</p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          {socialLinks.map((link) => (
            <Link key={link.label} href={link.href} className="transition hover:text-[#17ffdc]">
              {link.label}
            </Link>
          ))}
        </div>
        <p>&copy; {new Date().getFullYear()} Gaza Square. All rights reserved.</p>
      </div>
    </footer>
  );
}

function Field({
  label,
  type = "text",
  as,
  name,
  placeholder,
}: {
  label: string;
  type?: string;
  as?: "textarea";
  name: string;
  placeholder?: string;
}) {
  const sharedClasses =
    "w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-[#17ffdc] focus:outline-none";
  if (as === "textarea") {
    return (
      <label className="block text-sm text-white/80">
        <span className="mb-2 block text-xs uppercase tracking-[0.3em] text-white/50">{label}</span>
        <textarea name={name} placeholder={placeholder} rows={5} className={sharedClasses} />
      </label>
    );
  }

  return (
    <label className="block text-sm text-white/80">
      <span className="mb-2 block text-xs uppercase tracking-[0.3em] text-white/50">{label}</span>
      <input type={type} name={name} placeholder={placeholder} className={sharedClasses} />
    </label>
  );
}

function CircuitIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path d="M7 7h10v10H7z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 2v5M12 17v5M2 12h5M17 12h5" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="12" cy="7" r="1.5" fill="currentColor" />
      <circle cx="12" cy="17" r="1.5" fill="currentColor" />
      <circle cx="7" cy="12" r="1.5" fill="currentColor" />
      <circle cx="17" cy="12" r="1.5" fill="currentColor" />
    </svg>
  );
}

function LayersIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path
        d="M4 8.5 12 4l8 4.5-8 4.5-8-4.5Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m4 15.5 8 4.5 8-4.5M4 12l8 4.5 8-4.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.7"
      />
    </svg>
  );
}

function MobileIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <rect x="7" y="2" width="10" height="20" rx="3" strokeWidth="1.5" />
      <circle cx="12" cy="18" r="1" fill="currentColor" />
      <path d="M9 6h6" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function SparkIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path
        d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="12" cy="12" r="3.5" strokeWidth="1.5" />
    </svg>
  );
}

function CheckIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" {...props}>
      <path d="M5 10.5 8.5 14 15 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" {...props}>
      <path d="M2 8h12M10 4l4 4-4 4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
