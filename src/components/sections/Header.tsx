"use client";

import { useEffect, useState } from "react";
import { nav, profile } from "@/content/portfolio";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b bg-canvas/85 backdrop-blur transition-colors duration-200 ease-out ${
        scrolled ? "border-line" : "border-transparent"
      }`}
    >
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-6 px-5 md:px-8">
        <a
          href="#top"
          className="flex shrink-0 items-baseline gap-2 whitespace-nowrap text-sm font-medium text-ink transition-colors duration-200 hover:text-accent"
        >
          <span>{profile.name}</span>
          <span className="hidden font-mono text-xs text-ink-muted sm:inline">
            {profile.nameEn}
          </span>
        </a>

        <nav aria-label="섹션 이동" className="min-w-0">
          <ul className="flex items-center gap-3.5 overflow-x-auto pr-1 font-mono text-[11px] text-ink-muted md:gap-6 md:text-xs [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {nav.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="whitespace-nowrap transition-colors duration-200 ease-out hover:text-accent"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
