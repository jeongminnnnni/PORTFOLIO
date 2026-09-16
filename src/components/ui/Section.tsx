import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  index: string;
  label: string;
  children: ReactNode;
  aside?: ReactNode;
};

/**
 * Asymmetric 4:8 grid section.
 * Left column holds the mono index label (sticky on desktop),
 * right column holds the content.
 */
export function Section({ id, index, label, children, aside }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-line">
      <div className="mx-auto max-w-5xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-4">
            <div className="md:sticky md:top-24">
              <p className="text-label text-ink-muted">
                <span className="text-accent">{index}.</span> {label}
              </p>
              {aside ? <div className="mt-4">{aside}</div> : null}
            </div>
          </div>
          <div className="md:col-span-8">{children}</div>
        </div>
      </div>
    </section>
  );
}
