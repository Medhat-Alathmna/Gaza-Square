import { ContactSection } from "@/components/sections/ContactSection";
import { ERPHighlightsSection } from "@/components/sections/ERPHighlightsSection";
import type { Feature, Reason } from "@/components/sections/ERPHighlightsSection";
import { HeroSection } from "@/components/sections/HeroSection";
import type { HeroStat } from "@/components/sections/HeroSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import type { PortfolioProject } from "@/components/sections/PortfolioSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import type { Service } from "@/components/sections/ServicesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import type { Testimonial } from "@/components/sections/TestimonialsSection";
import { Footer } from "@/layouts/Footer";
import type { SocialLink } from "@/layouts/Footer";
import { FloatingHeader } from "@/layouts/FloatingHeader";
import type { NavLink } from "@/layouts/Navbar";

const navLinks: NavLink[] = [
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const stats: HeroStat[] = [
  { label: "ERP verticals shipped", value: "12+" },
  { label: "Automation savings unlocked", value: "$4.8M" },
  { label: "Dedicated engineers", value: "18" },
];

const services: Service[] = [
  {
    title: "Custom ERP Development",
    description:
      "Purpose-built ERP cores tailored to retail, manufacturing, and service workflows with obsessive attention to permissions, automation, and analytics.",
    icon: "circuit",
  },
  {
    title: "Web Application Development",
    description:
      "Angular, React, and Django teams crafting rapid-response portals, partner dashboards, and customer-facing layers that plug directly into your ERP.",
    icon: "layers",
  },
  {
    title: "Mobile App Development",
    description:
      "Ionic + Capacitor powered field apps, digital checklists, and executive copilots that work offline and sync intelligently when devices reconnect.",
    icon: "mobile",
  },
  {
    title: "API Integration & AI Solutions",
    description:
      "Secure APIs, RPA, and AI copilots that connect CRMs, POS, and data lakes. We pair business logic with AI-assisted predictions you can trust.",
    icon: "spark",
  },
];

const erpFeatures: Feature[] = [
  "Sales & POS Management",
  "Inventory & Stock Intelligence",
  "HR & Attendance Automation",
  "Purchases & Vendor Control",
  "Smart Reporting & Dashboards",
  "AI-assisted Planning & Forecasts",
];

const reasonsToChooseUs: Reason[] = [
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

const testimonials: Testimonial[] = [
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

const socialLinks: SocialLink[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/gaza-square" },
  { label: "Behance", href: "https://www.behance.net" },
  { label: "GitHub", href: "https://github.com" },
];

const CTA = {
  label: "Book a Free Consultation",
  href: "#contact",
};

const CONTACT_DETAILS = {
  whatsappUrl: "https://wa.me/970599000111",
  supportEmail: "support@gazasquare.studio",
};

const FOOTER_TAGLINE = "Smart software. Human touch.";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#030303] text-white">
      <FloatingHeader links={navLinks} ctaLabel={CTA.label} ctaHref={CTA.href} />
      <div className="grid-overlay pointer-events-none absolute inset-0 opacity-60" aria-hidden />
      <div className="pointer-events-none absolute left-0 top-0 h-72 w-72 rounded-full bg-[#17ffdc33] blur-[160px]" aria-hidden />
      <div className="pointer-events-none absolute left-8 bottom-8 h-48 w-48 rounded-full bg-[#ff9f4033] blur-[120px]" aria-hidden />

      <div className="relative z-10 flex flex-col gap-16 pb-24">
        <HeroSection stats={stats} />

        <div className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 sm:px-10 lg:px-12">
          <ServicesSection services={services} />
          <ERPHighlightsSection features={erpFeatures} reasons={reasonsToChooseUs} />
          <PortfolioSection projects={portfolioProjects} />
          <TestimonialsSection testimonials={testimonials} />
          <ContactSection
            whatsappUrl={CONTACT_DETAILS.whatsappUrl}
            supportEmail={CONTACT_DETAILS.supportEmail}
          />
          <Footer socialLinks={socialLinks} tagline={FOOTER_TAGLINE} />
        </div>
      </div>
    </div>
  );
}
