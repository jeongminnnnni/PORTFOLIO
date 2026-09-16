import { skills } from "@/content/portfolio";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function Skills() {
  return (
    <Section
      id="skills"
      index="02"
      label="Skills"
      aside={
        <p className="text-sm text-ink-muted">
          비중이 아니라 무엇을 할 수 있는지로 정리했습니다.
        </p>
      }
    >
      <div className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2">
        {skills.map((group, i) => (
          <Reveal key={group.title} delay={i * 0.05}>
            <h3 className="border-b border-line pb-3 text-sm font-medium text-ink">
              {group.title}
            </h3>
            <ul className="mt-3 flex flex-col gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="text-body flex gap-3 text-ink-secondary"
                >
                  <span aria-hidden className="mt-[0.7em] h-px w-3 shrink-0 bg-line" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
