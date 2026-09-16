import { projects, type Project } from "@/content/portfolio";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Pill } from "@/components/ui/Pill";

function ProjectItem({ project, order }: { project: Project; order: number }) {
  return (
    <article
      id={project.id}
      className="scroll-mt-24 border-b border-line py-14 first:pt-0 last:border-b-0 last:pb-0"
    >
      <Reveal>
        <p className="font-mono text-xs font-semibold text-ink-muted">
          {String(order).padStart(2, "0")} &nbsp;/&nbsp; {project.meta}
        </p>
        <h3 className="text-h2 mt-3 text-ink">{project.title}</h3>
        <p className="text-body mt-4 text-ink-secondary">{project.summary}</p>

        <dl className="mt-8 grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-[7rem_1fr]">
          <dt className="text-label pt-1 text-ink-muted">역할</dt>
          <dd className="text-body text-ink-secondary">{project.role}</dd>

          {project.blocks.map((block) => (
            <div key={block.label} className="contents">
              <dt className="text-label pt-1 text-ink-muted">{block.label}</dt>
              <dd>
                <ul className="flex flex-col gap-2.5">
                  {block.body.map((line) => (
                    <li key={line} className="text-body flex gap-3 text-ink-secondary">
                      <span aria-hidden className="mt-[0.75em] h-px w-3 shrink-0 bg-line" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}

          <dt className="text-label pt-1.5 text-ink-muted">Stack</dt>
          <dd className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <Pill key={tech}>{tech}</Pill>
            ))}
          </dd>
        </dl>
      </Reveal>
    </article>
  );
}

export function Projects() {
  return (
    <Section
      id="projects"
      index="05"
      label="Work"
      aside={
        <ol className="flex flex-col gap-1.5 font-mono text-xs text-ink-muted">
          {projects.map((p, i) => (
            <li key={p.id}>
              <a
                href={`#${p.id}`}
                className="transition-colors duration-200 ease-out hover:text-accent"
              >
                {String(i + 1).padStart(2, "0")}&nbsp;&nbsp;{p.title.split(" — ")[0]}
              </a>
            </li>
          ))}
        </ol>
      }
    >
      <div className="flex flex-col">
        {projects.map((project, i) => (
          <ProjectItem key={project.id} project={project} order={i + 1} />
        ))}
      </div>
    </Section>
  );
}
