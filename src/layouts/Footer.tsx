import Link from "next/link";

export type SocialLink = {
  label: string;
  href: string;
};

type FooterProps = {
  socialLinks: SocialLink[];
  tagline: string;
};

export function Footer({ socialLinks, tagline }: FooterProps) {
  return (
    <footer className="rounded-3xl border border-white/10 bg-black/50 px-6 py-8 text-sm text-white/70 sm:px-10">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-lg text-white">Gaza Square</p>
          <p className="text-white/50">{tagline}</p>
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
