import type { ReactNode } from "react";

type PillProps = {
  children: ReactNode;
  tone?: "default" | "accent";
};

export function Pill({ children, tone = "default" }: PillProps) {
  const toneClass =
    tone === "accent"
      ? "border-accent/20 bg-accent-subtle text-accent-hover"
      : "border-line bg-canvas text-ink";

  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 font-mono text-xs font-medium ${toneClass}`}
    >
      {children}
    </span>
  );
}
