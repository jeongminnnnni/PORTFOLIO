import { profile } from "@/content/portfolio";
import { Section } from "@/components/ui/Section";
import { InlineLink } from "@/components/ui/InlineLink";

export function Footer() {
  return (
    <footer>
      <Section id="contact" index="07" label="Contact">
        <p className="text-h2 text-ink">
          구조로 문제를 푸는 이야기라면 언제든 환영합니다.
        </p>
        <ul className="mt-8 flex flex-col gap-3 text-[15px] font-semibold">
          <li>
            <InlineLink href={`mailto:${profile.email}`}>{profile.email}</InlineLink>
          </li>
          {profile.links.map((link) => (
            <li key={link.href}>
              <InlineLink href={link.href}>{link.label}</InlineLink>
            </li>
          ))}
        </ul>
      </Section>

      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <div className="flex flex-col justify-between gap-2 border-t border-line py-6 font-mono text-xs text-ink-muted md:flex-row">
          <span>
            © {new Date().getFullYear()} {profile.name}
          </span>
          <span>Next.js · Tailwind CSS · Framer Motion</span>
        </div>
      </div>
    </footer>
  );
}
