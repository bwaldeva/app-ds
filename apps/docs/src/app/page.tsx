import { Navbar, ThemeToggle } from "@app-ds/ui";
import Link from "next/link";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Page(): JSX.Element {
  return (
    <>
      <Navbar
        brand={<span className="font-bold">Application Design System</span>}
        navItems={LINKS.map((link) => (
          <Link href={link.href} key={link.href}>
            {link.label}
          </Link>
        ))}
        toolbar={<ThemeToggle />}
      />
      <div></div>
    </>
  );
}
