import { profile } from "@/content/portfolio";

export function Footer() {
  return (
    <footer className="mx-auto w-full max-w-5xl px-5 pt-12 md:px-8">
      <div className="flex flex-col justify-between gap-3 border-t border-line py-6 font-mono text-xs text-ink-muted md:flex-row md:items-center">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <ul className="flex flex-wrap items-center gap-x-5 gap-y-1">
          <li>
            <a
              href={`mailto:${profile.email}`}
              className="transition-colors duration-200 ease-out hover:text-accent"
            >
              {profile.email}
            </a>
          </li>
          {profile.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-200 ease-out hover:text-accent"
              >
                {link.label} ↗
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
