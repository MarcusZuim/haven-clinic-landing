import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

type SectionRevealProps = {
  children: ReactNode;
  className?: string;
  as?: "section" | "div";
  id?: string;
  "aria-labelledby"?: string;
};

export function SectionReveal({
  children,
  className,
  as = "div",
  id,
  "aria-labelledby": ariaLabelledBy,
}: SectionRevealProps) {
  const reduce = useReducedMotion();
  const Tag = as === "section" ? motion.section : motion.div;

  return (
    <Tag
      id={id}
      className={className}
      aria-labelledby={ariaLabelledBy}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.05, margin: "0px 0px 18% 0px" }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: reduce ? 0 : 0.05,
            delayChildren: 0,
          },
        },
      }}
    >
      {children}
    </Tag>
  );
}

type RevealItemProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "li";
};

export function RevealItem({
  children,
  className,
  as = "div",
}: RevealItemProps) {
  const reduce = useReducedMotion();
  const Tag = as === "li" ? motion.li : motion.div;

  return (
    <Tag
      className={className}
      variants={{
        hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 12 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: reduce ? 0.2 : 0.32, ease },
        },
      }}
    >
      {children}
    </Tag>
  );
}
