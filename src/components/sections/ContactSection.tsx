'use client';

import Link from "next/link";
import type { CSSProperties } from "react";

import { useSectionInView } from "@/hooks/useSectionInView";

type ContactSectionProps = {
  whatsappUrl: string;
  supportEmail: string;
};

export function ContactSection({ whatsappUrl, supportEmail }: ContactSectionProps) {
  const { ref, isVisible } = useSectionInView({ threshold: 0.2 });

  return (
    <section
      id="contact"
      ref={ref}
      data-section-visible={isVisible ? "true" : "false"}
      className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]"
    >
      <div className="reveal-item space-y-6 rounded-3xl border border-white/10 bg-[#07070d] p-8" data-anim="left">
        <p className="text-xs uppercase tracking-[0.4em] text-[#17ffdc]">Contact</p>
        <h2 className="font-display text-3xl text-white">Let&apos;s architect your ERP.</h2>

        <form className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field
              label="Name"
              type="text"
              name="name"
              placeholder="Amal Hasan"
              style={{ "--stagger": "60ms" } as CSSProperties}
            />
            <Field
              label="Email"
              type="email"
              name="email"
              placeholder="you@company.com"
              style={{ "--stagger": "110ms" } as CSSProperties}
            />
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field
              label="Phone"
              type="tel"
              name="phone"
              placeholder="+970 599 123 456"
              style={{ "--stagger": "160ms" } as CSSProperties}
            />
            <Field
              label="Company"
              type="text"
              name="company"
              placeholder="Gaza Mart"
              style={{ "--stagger": "210ms" } as CSSProperties}
            />
          </div>
          <Field
            label="Message"
            as="textarea"
            name="message"
            placeholder="Tell us about the workflows you need to automate..."
            style={{ "--stagger": "260ms" } as CSSProperties}
          />
          <button
            type="submit"
            className="reveal-item w-full rounded-2xl bg-[#17ffdc] py-3 text-base font-semibold text-[#05130f] transition hover:bg-[#12e3c4]"
            data-anim="up"
            style={{ "--stagger": "320ms" } as CSSProperties}
          >
            Send Request
          </button>
        </form>
      </div>

      <div className="reveal-item space-y-6 rounded-3xl border border-white/10 bg-[#05050a] p-8" data-anim="right">
        <h3 className="font-display text-2xl text-white">Fast ways to reach us</h3>
        <div className="space-y-4 text-white/80">
          <p className="reveal-item" data-anim="up" style={{ "--stagger": "80ms" } as CSSProperties}>
            WhatsApp us directly:{" "}
            <Link href={whatsappUrl} className="text-[#17ffdc] underline">
              +970 599 000 111
            </Link>
          </p>
          <p className="reveal-item" data-anim="up" style={{ "--stagger": "120ms" } as CSSProperties}>
            Support email:{" "}
            <Link href={`mailto:${supportEmail}`} className="text-[#17ffdc] underline">
              {supportEmail}
            </Link>
          </p>
          <p className="reveal-item" data-anim="up" style={{ "--stagger": "160ms" } as CSSProperties}>
            Office hours: Sunday &ndash; Friday, 9:00 &ndash; 18:00 (GMT+2)
          </p>
        </div>
        <div className="reveal-item overflow-hidden rounded-2xl border border-white/10" data-anim="up" style={{ "--stagger": "220ms" } as CSSProperties}>
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

type FieldProps = {
  label: string;
  type?: string;
  as?: "textarea";
  name: string;
  placeholder?: string;
  style?: CSSProperties;
};

function Field({ label, type = "text", as, name, placeholder, style }: FieldProps) {
  const sharedClasses =
    "w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-[#17ffdc] focus:outline-none";

  const wrapperClass = "reveal-item block text-sm text-white/80";

  if (as === "textarea") {
    return (
      <label className={wrapperClass} data-anim="up" style={style}>
        <span className="mb-2 block text-xs uppercase tracking-[0.3em] text-white/50">{label}</span>
        <textarea name={name} placeholder={placeholder} rows={5} className={sharedClasses} />
      </label>
    );
  }

  return (
    <label className={wrapperClass} data-anim="up" style={style}>
      <span className="mb-2 block text-xs uppercase tracking-[0.3em] text-white/50">{label}</span>
      <input type={type} name={name} placeholder={placeholder} className={sharedClasses} />
    </label>
  );
}

