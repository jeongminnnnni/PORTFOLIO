import { education } from "@/content/portfolio";
import { Section } from "@/components/ui/Section";

export function Education() {
  return (
    <Section id="education" index="04" label="Education & Certification">
      <ul className="flex flex-col">
        {education.map((row) => (
          <li
            key={row.title}
            className="flex flex-col justify-between gap-1 border-b border-line/60 py-4 first:pt-0 md:flex-row md:items-baseline"
          >
            <span className="text-[15px] font-bold text-ink">{row.title}</span>
            <span className="font-mono text-xs text-ink-muted">{row.detail}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
