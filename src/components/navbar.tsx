"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "About", href: "/" },
  { label: "Resume", href: "/resume" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav
      className="fixed bottom-0 left-0 w-full bg-card/80 backdrop-blur-md border-t border-border rounded-t-[12px] shadow-lg z-50
      sm:rounded-t-[20px]
      lg:static lg:w-auto lg:rounded-none lg:rounded-r-[20px] lg:border lg:border-border lg:bg-card lg:backdrop-blur-none lg:shadow-none lg:ml-auto"
    >
      <ul className="flex flex-wrap justify-center items-center gap-0 px-[10px] sm:gap-[20px] lg:gap-[30px] lg:px-5">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`block py-5 px-[7px] text-[12px] sm:text-[14px] font-medium transition-colors ${
                isActive(item.href)
                  ? "text-secondary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
