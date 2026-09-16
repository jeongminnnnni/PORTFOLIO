import { sideProjects } from "@/content/portfolio";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function SideProjects() {
  return (
    <Section id="side-projects" index="06" label="Side Projects">
      <ul className="flex flex-col">
        {sideProjects.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.05}>
            <li className="border-b border-line/60 py-5 first:pt-0">
              <div className="flex flex-col justify-between gap-1 md:flex-row md:items-baseline">
                <p className="text-[15px] font-bold text-ink">{item.title}</p>
                <p className="font-mono text-xs text-ink-muted">{item.meta}</p>
              </div>
              <p className="text-body mt-2 text-ink-secondary">{item.body}</p>
            </li>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
