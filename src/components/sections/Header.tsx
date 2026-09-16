"use client";

import { useEffect, useState } from "react";
import { nav, profile } from "@/content/portfolio";

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="h-[18px] w-[18px] fill-current">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="h-[18px] w-[18px] fill-current">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className="h-[18px] w-[18px] fill-none stroke-current"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

const iconFor: Record<string, () => React.JSX.Element> = {
  GitHub: GitHubIcon,
  LinkedIn: LinkedInIcon,
};

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll spy: whichever section crosses the middle of the viewport
  // activates the nav item that owns it.
  useEffect(() => {
    const owner = new Map<string, string>();
    nav.forEach((item) => item.sections.forEach((s) => owner.set(s, item.id)));

    const targets = Array.from(owner.keys())
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(owner.get(entry.target.id) ?? null);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );
    targets.forEach((el) => observer.observe(el));

    const hero = document.getElementById("top");
    const heroObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) setActive(null);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );
    if (hero) heroObserver.observe(hero);

    return () => {
      observer.disconnect();
      heroObserver.disconnect();
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b bg-canvas/85 backdrop-blur-md transition-colors duration-300 ease-out ${
        scrolled ? "border-line" : "border-transparent"
      }`}
    >
      <div className="mx-auto grid h-16 max-w-6xl grid-cols-[1fr_auto_1fr] items-center px-5 md:px-8">
        <a
          href="#top"
          className="flex items-center gap-2 justify-self-start text-[15px] font-extrabold tracking-tight text-ink transition-colors duration-200 hover:text-accent"
        >
          <span aria-hidden className="h-2.5 w-2.5 rounded-[3px] bg-accent" />
          {profile.name}
        </a>

        <nav aria-label="섹션 이동">
          <ul className="flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.1em] md:gap-8 md:text-xs md:tracking-[0.14em]">
            {nav.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={isActive ? "true" : undefined}
                    className={`transition-colors duration-200 ease-out hover:text-ink ${
                      isActive ? "text-ink" : "text-ink-muted"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <ul className="flex items-center gap-3 justify-self-end text-ink md:gap-4">
          {profile.links.map((link) => {
            const Icon = iconFor[link.label];
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="block transition-colors duration-200 ease-out hover:text-accent"
                >
                  {Icon ? <Icon /> : link.label}
                </a>
              </li>
            );
          })}
          <li className="hidden sm:block">
            <a
              href={`mailto:${profile.email}`}
              aria-label="이메일"
              className="block transition-colors duration-200 ease-out hover:text-accent"
            >
              <MailIcon />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
