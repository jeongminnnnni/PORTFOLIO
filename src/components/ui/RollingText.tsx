"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

type RollingTextProps = {
  words: string[];
  interval?: number;
  className?: string;
};

/** Vertical rolling word with spring (stiffness 300, damping 30). */
export function RollingText({
  words,
  interval = 2600,
  className = "",
}: RollingTextProps) {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || words.length <= 1) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, interval);
    return () => window.clearInterval(id);
  }, [interval, reduce, words.length]);

  if (reduce) {
    return <span className={className}>{words.join(" / ")}</span>;
  }

  return (
    <span
      className={`relative inline-grid overflow-hidden align-bottom ${className}`}
      aria-live="polite"
    >
      {/* invisible widest word keeps layout width stable */}
      <span className="invisible col-start-1 row-start-1 whitespace-nowrap">
        {words.reduce((a, b) => (a.length >= b.length ? a : b))}
      </span>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={words[index]}
          className="col-start-1 row-start-1 whitespace-nowrap text-accent"
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
