import { education } from "@/content/portfolio";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function Education() {
  return (
    <Section id="education" index="07" label="Education & Certification">
      <Reveal>
        <ul className="flex flex-col">
          <li className="flex flex-col justify-between gap-1 border-b border-line/60 py-4 first:pt-0 md:flex-row md:items-baseline">
            <span className="text-sm font-medium text-ink">{education.school}</span>
            <span className="font-mono text-xs text-ink-muted">{education.detail}</span>
          </li>
          {education.certifications.map((cert) => (
            <li
              key={cert.name}
              className="flex flex-col justify-between gap-1 border-b border-line/60 py-4 md:flex-row md:items-baseline"
            >
              <span className="text-sm font-medium text-ink">{cert.name}</span>
              <span className="font-mono text-xs text-ink-muted">{cert.issuer}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 font-mono text-xs text-ink-muted">{education.footnote}</p>
      </Reveal>
    </Section>
  );
}
