import { profile } from "@/content/portfolio";
import { RollingText } from "@/components/ui/RollingText";
import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-5 pb-20 pt-36 md:px-8 md:pb-28 md:pt-48">
      <Reveal>
        <p className="text-label text-ink-muted">
          <span className="text-accent">00.</span> Positioning
        </p>
      </Reveal>

      <Reveal delay={0.05}>
        <h1 className="text-display mt-6 max-w-3xl text-ink">
          {profile.headline}
        </h1>
      </Reveal>

      <Reveal delay={0.1}>
        <p className="text-h2 mt-6 max-w-3xl text-ink-secondary">
          {profile.tagline}{" "}
          <RollingText words={profile.rolling} className="font-medium" />
        </p>
      </Reveal>

      <Reveal delay={0.15}>
        <ul className="mt-10 flex flex-col gap-1 border-t border-line pt-5 font-mono text-xs text-ink-muted md:flex-row md:flex-wrap md:gap-x-6">
          {profile.status.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
