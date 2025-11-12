'use client';

import { useState } from "react";

import { ContactSection } from "@/components/sections/ContactSection";
import { ERPHighlightsSection } from "@/components/sections/ERPHighlightsSection";
import type { Feature, Reason } from "@/components/sections/ERPHighlightsSection";
import type { ERPHighlightsCopy } from "@/components/sections/ERPHighlightsSection";
import { HeroSection } from "@/components/sections/HeroSection";
import type { HeroCopy, HeroStat } from "@/components/sections/HeroSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import type { PortfolioCopy, PortfolioProject } from "@/components/sections/PortfolioSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import type { Service, ServicesCopy } from "@/components/sections/ServicesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import type { TestimonialsCopy, Testimonial } from "@/components/sections/TestimonialsSection";
import { Footer } from "@/layouts/Footer";
import type { SocialLink } from "@/layouts/Footer";
import { FloatingHeader } from "@/layouts/FloatingHeader";
import type { NavLink } from "@/layouts/Navbar";
import type { ContactCopy } from "@/components/sections/ContactSection";

const stats: HeroStat[] = [
  { label: "ERP verticals shipped", value: "12+" },
  { label: "Automation savings unlocked", value: "$4.8M" },
  { label: "Dedicated engineers", value: "18" },
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
  href: "#contact",
};

const CONTACT_DETAILS = {
  whatsappUrl: "https://wa.me/970599000111",
  supportEmail: "support@gazasquare.studio",
};

type LocaleKey = "en" | "ar";

const navLinks: Record<LocaleKey, NavLink[]> = {
  en: [
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
  ar: [
    { label: "الخدمات", href: "#services" },
    { label: "المشاريع", href: "#projects" },
    { label: "من نحن", href: "#about" },
    { label: "تواصل", href: "#contact" },
  ],
};

const servicesData: Record<LocaleKey, Service[]> = {
  en: [
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
  ],
  ar: [
    {
      title: "تطوير أنظمة ERP مخصصة",
      description:
        "نصمم أنظمة ERP تلائم قطاعات التجارة والتصنيع والخدمات مع تحكم دقيق في الصلاحيات والأتمتة والتحليلات.",
      icon: "circuit",
    },
    {
      title: "تطوير تطبيقات الويب",
      description:
        "فرق عمل React وDjango تبني بوابات سريعة الاستجابة ولوحات شريك وواجهات عملاء متصلة مباشرة بـ ERP.",
      icon: "layers",
    },
    {
      title: "تطوير تطبيقات الهاتف",
      description:
        "تطبيقات ميدانية تعمل دون اتصال وتزامن ذكي عند عودة الشبكة، مبنية بتقنيات Ionic وCapacitor.",
      icon: "mobile",
    },
    {
      title: "تكامل واجهات البرمجة وحلول الذكاء الاصطناعي",
      description:
        "واجهات API آمنة وروبوتات برمجية ومساعدون بالذكاء الاصطناعي يربطون POS وCRMs ومستودعات البيانات بثقة.",
      icon: "spark",
    },
  ],
};

type LocaleContent = {
  navLinks: NavLink[];
  hero: HeroCopy;
  servicesCopy: ServicesCopy;
  servicesData: Service[];
  erpCopy: ERPHighlightsCopy;
  portfolioCopy: PortfolioCopy;
  testimonialsCopy: TestimonialsCopy;
  contactCopy: ContactCopy;
  footerTagline: string;
  ctaLabel: string;
  languageToggleLabel: string;
};

const localeContent: Record<LocaleKey, LocaleContent> = {
  en: {
    navLinks: navLinks.en,
    hero: {
      badgeTitle: "Command Studio",
      badgeSubtitle: "Futuristic ERP",
      headline: "Gaza Square",
      subheadline: "A command deck for AI-driven operations.",
      paragraph:
        "We orchestrate ERP, automation, and robotics telemetry under one neon-clear interface so Gaza-born teams can deploy faster and stay in control.",
      primaryCta: "Start Your Demo",
      secondaryCta: "Explore Our Services",
    },
    servicesCopy: {
      eyebrow: "Services",
      title: "Built for bold transformations",
      description:
        "Senior product strategists and engineers build modules that respect the nitty-gritty of your business, from finance approvals to last-mile fulfillment.",
      focusLabel: "Focus",
      cardCtaLabel: "Explore capability",
    },
    servicesData: servicesData.en,
    erpCopy: {
      featuresEyebrow: "ERP Features",
      featuresTitle: "Everything your team needs to run lean, fast, and transparent.",
      reasonsEyebrow: "Why choose us?",
      reasonsTitle: "We pair rigorous engineering with human-first service.",
      reasonsDescription:
        "From discovery to hypercare we deploy squads that stay close to your operators, ensuring every workflow lands softly.",
    },
    portfolioCopy: {
      eyebrow: "Portfolio / Case Studies",
      title: "Proof in production",
      description:
        "A sampling of the operating systems, booking tools, and ERP suites we have launched in Gaza, the Gulf, and Europe. Every engagement integrates tightly with legacy hardware and modern cloud.",
    },
    testimonialsCopy: {
      eyebrow: "Testimonials",
      title: "People who trusted us",
      description:
        "Operators, founders, and support teams across the region count on our team to keep their data reliable and their automations safe.",
    },
    contactCopy: {
      eyebrow: "Contact",
      title: "Let's architect your ERP.",
      fastTitle: "Fast ways to reach us",
      whatsappLabel: "WhatsApp us directly:",
      emailLabel: "Support email:",
      officeHours: "Office hours: Sunday – Friday, 9:00 – 18:00 (GMT+2)",
      buttonLabel: "Send Request",
      fields: {
        name: "Name",
        email: "Email",
        phone: "Phone",
        company: "Company",
        message: "Message",
      },
    },
    footerTagline: "Smart software. Human touch.",
    ctaLabel: "Book a Free Consultation",
    languageToggleLabel: "Toggle language",
  },
  ar: {
    navLinks: navLinks.ar,
    hero: {
      badgeTitle: "وحدة التحكم",
      badgeSubtitle: "منصة ERP مستقبلية",
      headline: "غزة سكوير",
      subheadline: "جسر قيادة للعمليات المعززة بالذكاء الاصطناعي.",
      paragraph:
        "نُنسق أنظمة ERP والأتمتة وتيارات الروبوتات ضمن واجهة واحدة واضحة لتتمكن الفرق في غزة من الإطلاق بسرعة والبقاء في السيطرة.",
      primaryCta: "ابدأ العرض التجريبي",
      secondaryCta: "استكشف خدماتنا",
    },
    servicesCopy: {
      eyebrow: "الخدمات",
      title: "حلول مصممة لتحولات جريئة",
      description:
        "خبراؤنا في الاستراتيجية والهندسة يبنون وحدات تحترم تفاصيل أعمالك من الموافقات المالية وحتى التسليم في آخر المراحل.",
      focusLabel: "المحور",
      cardCtaLabel: "اكتشف الإمكانيات",
    },
    servicesData: servicesData.ar,
    erpCopy: {
      featuresEyebrow: "مزايا الـERP",
      featuresTitle: "كل ما يحتاجه فريقك للعمل برشاقة ووضوح.",
      reasonsEyebrow: "لماذا نحن؟",
      reasonsTitle: "نمزج هندسة صارمة مع خدمة تتمحور حول الإنسان.",
      reasonsDescription:
        "من جلسات الاكتشاف وحتى الدعم المستمر نرافق فرق عملك لضمان هبوط كل تدفق عمل بسلاسة.",
    },
    portfolioCopy: {
      eyebrow: "دراسة حالات",
      title: "نتائج مثبتة في الإنتاج",
      description:
        "عينة من أنظمة التشغيل والأدوات التي أطلقناها في غزة والخليج وأوروبا، مع تكامل وثيق مع البنى القديمة والسحابة الحديثة.",
    },
    testimonialsCopy: {
      eyebrow: "آراء العملاء",
      title: "شركاء وثقوا بنا",
      description:
        "المدراء والمشغّلون في المنطقة يعتمدون علينا للحفاظ على موثوقية بياناتهم وسلاسة أتمتتهم.",
    },
    contactCopy: {
      eyebrow: "تواصل",
      title: "فلنصمم نظام الـERP الخاص بك.",
      fastTitle: "طرق تواصل سريعة",
      whatsappLabel: "تحدث معنا عبر واتساب:",
      emailLabel: "بريد الدعم:",
      officeHours: "ساعات العمل: الأحد – الجمعة، 9:00 – 18:00 (GMT+2)",
      buttonLabel: "أرسل الطلب",
      fields: {
        name: "الاسم",
        email: "البريد الإلكتروني",
        phone: "الهاتف",
        company: "الشركة",
        message: "الرسالة",
      },
    },
    footerTagline: "برمجيات ذكية بلمسة بشرية.",
    ctaLabel: "احجز استشارة مجانية",
    languageToggleLabel: "تبديل اللغة",
  },
};

export default function Home() {
  const [locale, setLocale] = useState<LocaleKey>("en");
  const content = localeContent[locale];
  const dir = locale === "ar" ? "rtl" : "ltr";
  const langAttr = locale === "ar" ? "ar" : "en";

  return (
    <div lang={langAttr} dir={dir} className="relative min-h-screen bg-[#030303] text-white">
      <FloatingHeader
        links={content.navLinks}
        ctaLabel={content.ctaLabel}
        ctaHref={CTA.href}
        locale={locale}
        onChangeLocale={(next) => setLocale(next)}
        languageSelectLabel={content.languageToggleLabel}
      />
      <div className="grid-overlay pointer-events-none absolute inset-0 opacity-60" aria-hidden />
      <div className="pointer-events-none absolute left-0 top-0 h-72 w-72 rounded-full bg-[#17ffdc33] blur-[160px]" aria-hidden />
      <div className="pointer-events-none absolute left-8 bottom-8 h-48 w-48 rounded-full bg-[#ff9f4033] blur-[120px]" aria-hidden />

      <div className="relative z-10 flex flex-col gap-16 pb-24">
        <HeroSection stats={stats} copy={content.hero} />

        <div className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 sm:px-10 lg:px-12">
          <ServicesSection
            services={content.servicesData}
            eyebrow={content.servicesCopy.eyebrow}
            title={content.servicesCopy.title}
            description={content.servicesCopy.description}
            focusLabel={content.servicesCopy.focusLabel}
            cardCtaLabel={content.servicesCopy.cardCtaLabel}
          />
          <ERPHighlightsSection features={erpFeatures} reasons={reasonsToChooseUs} copy={content.erpCopy} />
          <PortfolioSection
            projects={portfolioProjects}
            eyebrow={content.portfolioCopy.eyebrow}
            title={content.portfolioCopy.title}
            description={content.portfolioCopy.description}
          />
          <TestimonialsSection testimonials={testimonials} copy={content.testimonialsCopy} />
          <ContactSection
            whatsappUrl={CONTACT_DETAILS.whatsappUrl}
            supportEmail={CONTACT_DETAILS.supportEmail}
            copy={content.contactCopy}
          />
          <Footer socialLinks={socialLinks} tagline={content.footerTagline} />
        </div>
      </div>
    </div>
  );
}
