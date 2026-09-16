import { about } from "@/content/portfolio";
import { Section } from "@/components/ui/Section";

export function About() {
  return (
    <Section id="about" index="01" label="About">
      <p className="text-h2 text-ink">{about.lead}</p>
      {about.body.map((paragraph) => (
        <p key={paragraph} className="text-body mt-5 text-ink-secondary">
          {paragraph}
        </p>
      ))}

      <div className="mt-10 border-l-2 border-accent pl-5">
        <p className="text-label text-ink-muted">{about.philosophyLabel}</p>
        <p className="text-body mt-3 font-semibold text-ink">{about.philosophy}</p>
      </div>
    </Section>
  );
}
