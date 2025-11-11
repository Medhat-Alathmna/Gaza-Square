import Link from "next/link";

export type NavLink = {
  label: string;
  href: string;
};

type NavbarProps = {
  links: NavLink[];
};

export function Navbar({ links }: NavbarProps) {
  return (
    <nav className="flex flex-wrap items-center gap-4 text-sm text-white/70">
      {links.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="transition-colors hover:text-[#17ffdc]"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
