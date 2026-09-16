"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  index: string;
  label: string;
  children: ReactNode;
  aside?: ReactNode;
};

const ease = [0.16, 1, 0.3, 1] as const;

/**
 * Asymmetric 4:8 grid section.
 * The whole section eases in as it enters the viewport; the label column
 * arrives slightly ahead of the content so the transition reads as a sequence
 * rather than a page flip.
 */
export function Section({ id, index, label, children, aside }: SectionProps) {
  const reduce = useReducedMotion();
  const hidden = reduce ? {} : { opacity: 0, y: 48 };
  const shown = { opacity: 1, y: 0 };

  return (
    <section id={id} className="scroll-mt-20">
      <div className="mx-auto max-w-5xl px-5 py-24 md:px-8 md:py-36">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-12">
          <motion.div
            className="md:col-span-4"
            initial={hidden}
            whileInView={shown}
            viewport={{ once: true, amount: "some", margin: "0px 0px -12% 0px" }}
            transition={{ duration: 0.7, ease }}
          >
            <div className="md:sticky md:top-28">
              <p className="text-label text-ink-muted">
                <span className="text-accent">{index}.</span> {label}
              </p>
              {aside ? <div className="mt-4">{aside}</div> : null}
            </div>
          </motion.div>
          <motion.div
            className="md:col-span-8"
            initial={hidden}
            whileInView={shown}
            viewport={{ once: true, amount: "some", margin: "0px 0px -12% 0px" }}
            transition={{ duration: 0.8, ease, delay: 0.1 }}
          >
            {children}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
