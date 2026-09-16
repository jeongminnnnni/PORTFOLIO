import { profile } from "@/content/portfolio";
import { InlineLink } from "@/components/ui/InlineLink";

export function Footer() {
  return (
    <footer id="contact" className="scroll-mt-20 border-t border-line">
      <div className="mx-auto max-w-5xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-4">
            <p className="text-label text-ink-muted">
              <span className="text-accent">08.</span> Contact
            </p>
          </div>
          <div className="md:col-span-8">
            <p className="text-h2 text-ink">
              구조로 문제를 푸는 이야기라면 언제든 환영합니다.
            </p>
            <ul className="mt-8 flex flex-col gap-3 text-sm">
              <li>
                <InlineLink href={`mailto:${profile.email}`}>
                  {profile.email}
                </InlineLink>
              </li>
              {profile.links.map((link) => (
                <li key={link.href}>
                  <InlineLink href={link.href}>{link.label}</InlineLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col justify-between gap-2 border-t border-line pt-6 font-mono text-xs text-ink-muted md:flex-row">
          <span>
            © {new Date().getFullYear()} {profile.name}
          </span>
          <span>Next.js · Tailwind CSS · Framer Motion</span>
        </div>
      </div>
    </footer>
  );
}
