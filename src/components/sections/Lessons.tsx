import { lessons } from "@/content/portfolio";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Pill } from "@/components/ui/Pill";

export function Lessons() {
  return (
    <Section
      id="lessons"
      index="06"
      label="Lessons"
      aside={
        <p className="text-sm text-ink-muted">
          성과가 아닌 판단의 기록. 분석적 정직성에 대한 섹션입니다.
        </p>
      }
    >
      <Reveal>
        <div className="flex flex-col justify-between gap-2 md:flex-row md:items-baseline">
          <h3 className="text-h2 text-ink">{lessons.title}</h3>
          <Pill>{lessons.status}</Pill>
        </div>
      </Reveal>

      <Reveal delay={0.05}>
        <blockquote className="mt-8 border-l-2 border-accent pl-5">
          <p className="text-body text-ink">{lessons.quote}</p>
        </blockquote>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-8 flex flex-col gap-4">
          {lessons.body.map((paragraph) => (
            <p key={paragraph} className="text-body text-ink-secondary">
              {paragraph}
            </p>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
