import { about } from "@/content/portfolio";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  return (
    <Section id="about" index="01" label="About">
      <Reveal>
        <p className="text-h2 text-ink">{about.lead}</p>
        {about.body.map((paragraph) => (
          <p key={paragraph} className="text-body mt-5 text-ink-secondary">
            {paragraph}
          </p>
        ))}
      </Reveal>

      <Reveal delay={0.05}>
        <div className="mt-10 border-l-2 border-accent pl-5">
          <p className="text-label text-ink-muted">{about.philosophyLabel}</p>
          <p className="text-body mt-3 text-ink">{about.philosophy}</p>
        </div>
      </Reveal>
    </Section>
  );
}
