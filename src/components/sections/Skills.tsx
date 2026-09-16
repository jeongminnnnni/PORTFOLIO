import { skills } from "@/content/portfolio";
import { Section } from "@/components/ui/Section";

export function Skills() {
  return (
    <Section id="skills" index="02" label="Skills">
      <div className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2">
        {skills.map((group) => (
          <div key={group.title}>
            <h3 className="border-b border-line pb-3 text-sm font-bold text-ink">
              {group.title}
            </h3>
            <ul className="mt-3 flex flex-col gap-2">
              {group.items.map((item) => (
                <li key={item} className="text-body flex gap-3 text-ink-secondary">
                  <span aria-hidden className="mt-[0.75em] h-px w-3 shrink-0 bg-line" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
