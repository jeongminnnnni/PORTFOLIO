"use client";

import {
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useEffect, useRef } from "react";
import { profile } from "@/content/portfolio";

const ease = [0.16, 1, 0.3, 1] as const;

/** Scroll-progress window in which each boxed word rolls up into view. */
const BOX_RANGES: [number, number][] = [
  [0, 0.2],
  [0.2, 0.42],
  [0.4, 0.62],
];

/** How far the intro auto-plays before the user has scrolled (reveals box 1). */
const INTRO_PROGRESS = 0.2;

/** Hero copy with each boxed piece numbered in reading order (static, computed once). */
const HERO_LINES = (() => {
  let n = 0;
  return profile.heroLines.map((line) =>
    line.map((piece) => ({ ...piece, boxIndex: piece.box ? n++ : -1 })),
  );
})();

type BoxWordProps = {
  progress: MotionValue<number>;
  range: [number, number];
  accent?: boolean;
  children: string;
};

function BoxWord({ progress, range, accent, children }: BoxWordProps) {
  const y = useTransform(progress, range, ["112%", "0%"]);

  return (
    <span
      className={`mx-[0.08em] inline-flex overflow-hidden rounded-[0.2em] px-[0.28em] ${
        accent ? "bg-accent" : "bg-ink"
      }`}
    >
      <motion.span
        style={{ y }}
        className="inline-block py-[0.1em] leading-[1.1] text-canvas"
      >
        {children}
      </motion.span>
    </span>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const intro = useMotionValue(0);
  useEffect(() => {
    if (reduce) {
      intro.set(1);
      return;
    }
    const controls = animate(intro, INTRO_PROGRESS, {
      duration: 1.1,
      delay: 0.25,
      ease,
    });
    return () => controls.stop();
  }, [intro, reduce]);

  // Boxes reveal from either the intro auto-play or the user's scroll,
  // whichever has gone further.
  const progress = useTransform(() =>
    Math.max(intro.get(), scrollYProgress.get()),
  );

  const exitOpacity = useTransform(scrollYProgress, [0.78, 1], [1, 0]);
  const exitY = useTransform(scrollYProgress, [0.78, 1], [0, -48]);
  const hintOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const hintDisplay = useTransform(scrollYProgress, (v) =>
    v > 0.1 ? "none" : "block",
  );

  return (
    <section ref={ref} id="top" className="relative h-[190vh]">
      <div className="sticky top-0 flex h-screen flex-col items-center justify-center px-5">
        <motion.div
          style={reduce ? undefined : { opacity: exitOpacity, y: exitY }}
          className="flex flex-col items-center text-center"
        >
          <h1 className="text-display text-ink">
            {HERO_LINES.map((line, li) => (
              <span key={li} className="block">
                {line.map((piece, pi) =>
                  piece.boxIndex < 0 ? (
                    <span key={pi}>{piece.text}</span>
                  ) : (
                    <BoxWord
                      key={pi}
                      progress={progress}
                      range={BOX_RANGES[piece.boxIndex] ?? [0, 0.2]}
                      accent={piece.accent}
                    >
                      {piece.text}
                    </BoxWord>
                  ),
                )}
              </span>
            ))}
          </h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease }}
            className="mt-10 max-w-xl text-base font-semibold text-ink-secondary md:text-lg"
          >
            {profile.tagline}
          </motion.p>

          <motion.p
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2, ease }}
            className="mt-4 font-mono text-xs text-ink-muted"
          >
            {profile.status.join(" · ")}
          </motion.p>
        </motion.div>

        <motion.a
          href="#about"
          aria-label="아래로 스크롤"
          style={reduce ? undefined : { opacity: hintOpacity, display: hintDisplay }}
          className="absolute bottom-8 text-accent"
        >
          <motion.svg
            viewBox="0 0 24 24"
            className="h-6 w-6 fill-none stroke-current"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            animate={reduce ? undefined : { y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <path d="m6 5 6 6 6-6" />
            <path d="m6 12 6 6 6-6" />
          </motion.svg>
        </motion.a>
      </div>
    </section>
  );
}
