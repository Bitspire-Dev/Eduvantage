import Link from "next/link";
import Image from "next/image";
import { PhoneCall } from "../ui/icons";
import { MobileMenu } from "../ui/mobile-menu";

function Logo({ size = 40, className }: { size?: number; className?: string }) {
  return (
    <Image
      src="/favicon.svg"
      alt="EduVantage"
      width={size}
      height={size}
      className={className}
    />
  );
}

export const navItems: [string, string][] = [
  ["Dlaczego my", "#why"],
  ["O nas", "#about"],
  ["Zakres", "#subjects"],
  ["Jak pracujemy", "#work"],
  ["Cennik", "#pricing"],
  ["FAQ", "#faq"],
  ["Kontakt", "#contact"],
];

export function Header() {
  return (
    <header className="site-header">
      <div className="container flex items-center justify-between gap-4 header-inner">
        <div className="flex items-center gap-6">
          <Link href="/" className="brand flex items-center gap-3" aria-label="Strona główna">
            <Logo size={94} />
            <div className="flex flex-col leading-tight">
              <span className="brand-name font-semibold text-[1.25rem] tracking-tight -mb-0.5">EduVantage</span>
              <span className="brand-tagline text-[10px] uppercase tracking-[.18em] font-medium text-(--color-text-soft) site-tagline">Korepetycje</span>
            </div>
          </Link>
        </div>
        <nav aria-label="Główne" className="hidden md:block">
          <ul className="flex gap-1 m-0 p-0 list-none rounded-xl nav-cluster">
            {navItems.map(([label, href]) => {
              return (
                <li key={href}>
                  <a href={href} className="nav-link px-3 py-2 rounded-lg font-medium tracking-tight">
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="hidden md:flex">
          <a
            href="tel:+48780926993"
            className="btn btn-primary btn-call text-sm inline-flex items-center gap-2"
            aria-label="Zadzwoń do EduVantage"
          >
            <PhoneCall className="w-4 h-4" />
            <span className="phone-number">780 926 993</span>
          </a>
        </div>
        <MobileMenu navItems={navItems} />
      </div>
    </header>
  );
}
