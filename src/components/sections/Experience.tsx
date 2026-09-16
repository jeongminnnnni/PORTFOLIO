import { experience } from "@/content/portfolio";
import { Section } from "@/components/ui/Section";
import { Pill } from "@/components/ui/Pill";

export function Experience() {
  return (
    <Section id="experience" index="03" label="Experience">
      <ul className="flex flex-col">
        {experience.map((item) => (
          <li key={item.org + item.period} className="border-b border-line/60 py-6 first:pt-0">
            <div className="flex flex-col justify-between gap-2 md:flex-row md:items-baseline">
              <div>
                <p className="text-h2 text-ink">{item.role}</p>
                <p className="text-body mt-1 text-ink-secondary">{item.org}</p>
              </div>
              <div className="flex items-center gap-3 font-mono text-xs text-ink-muted">
                <span>{item.period}</span>
                {item.ongoing ? <Pill tone="accent">재직 중</Pill> : null}
              </div>
            </div>
            <ul className="mt-4 flex flex-col gap-2">
              {item.bullets.map((bullet) => (
                <li key={bullet} className="text-body flex gap-3 text-ink-secondary">
                  <span aria-hidden className="mt-[0.75em] h-px w-3 shrink-0 bg-line" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  );
}
