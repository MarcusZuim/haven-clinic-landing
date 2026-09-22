import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

type ScrollDriftProps = {
  children: ReactNode;
  className?: string;
  yRange?: [number, number];
  scaleRange?: [number, number];
};

function useNarrowScreen() {
  const [narrow, setNarrow] = useState(() =>
    typeof window !== "undefined" ? window.matchMedia("(max-width: 767px)").matches : false,
  );

  useEffect(() => {
    const query = window.matchMedia("(max-width: 767px)");
    const update = () => setNarrow(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return narrow;
}

/** Slow, scroll-locked drift for large media. Disabled on small screens and reduced motion. */
export function ScrollDrift({
  children,
  className,
  yRange = [12, -12],
  scaleRange = [1.03, 1.012],
}: ScrollDriftProps) {
  const reduce = useReducedMotion();
  const narrow = useNarrowScreen();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], yRange);
  const scale = useTransform(scrollYProgress, [0, 1], scaleRange);
  const enabled = !reduce && !narrow;

  return (
    <motion.div ref={ref} className={className} style={enabled ? { y, scale } : undefined}>
      {children}
    </motion.div>
  );
}
