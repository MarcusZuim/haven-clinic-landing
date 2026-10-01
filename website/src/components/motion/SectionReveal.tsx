import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
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
  const Tag = as === "section" ? motion.section : motion.div;

  return (
    <Tag
      id={id}
      className={className}
      aria-labelledby={ariaLabelledBy}
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
  const [state, setState] = useState<"hidden" | "visible">("visible");
  const revealed = useRef(false);
  const element = useRef<HTMLDivElement | HTMLLIElement>(null);
  const Tag = as === "li" ? motion.li : motion.div;
  const setElement = (node: HTMLDivElement | HTMLLIElement | null) => {
    element.current = node;
  };

  useEffect(() => {
    const node = element.current;
    if (!node || reduce) return;

    const reveal = () => {
      if (revealed.current) return;

      const rect = node.getBoundingClientRect();
      if (rect.top > window.innerHeight * 0.9 || rect.bottom < 0) return;

      revealed.current = true;
      setState("visible");
    };

    // Never hide content that is already in view (including anchor navigation).
    const rect = node.getBoundingClientRect();
    if (rect.top <= window.innerHeight * 0.9 && rect.bottom >= 0) {
      revealed.current = true;
      return;
    }

    setState("hidden");
    const observer = new IntersectionObserver(reveal, { threshold: 0, rootMargin: "0px 0px -10% 0px" });
    observer.observe(node);
    window.addEventListener("scroll", reveal, { passive: true });
    window.addEventListener("resize", reveal);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", reveal);
      window.removeEventListener("resize", reveal);
    };
  }, [reduce]);

  return (
    <Tag
      ref={setElement}
      className={className}
      animate={reduce ? "visible" : state}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: reduce ? 0.01 : 0.72, ease },
        },
      }}
    >
      {children}
    </Tag>
  );
}
