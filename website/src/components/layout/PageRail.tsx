import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { softEase } from "../../lib/motion";

const SECTIONS = [
  { id: "topo", label: "01" },
  { id: "clinica", label: "02" },
  { id: "equipe", label: "03" },
] as const;

export function PageRail() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    const syncVisible = () => setVisible(media.matches);
    syncVisible();
    media.addEventListener("change", syncVisible);
    return () => media.removeEventListener("change", syncVisible);
  }, []);

  useEffect(() => {
    if (!visible) return;

    const nodes = SECTIONS.map((section) =>
      document.getElementById(section.id),
    ).filter((node): node is HTMLElement => Boolean(node));

    if (!nodes.length) return;

    const update = () => {
      const marker = window.innerHeight * 0.35;
      let current = 0;

      nodes.forEach((node, index) => {
        if (node.getBoundingClientRect().top <= marker) current = index;
      });

      setActive(current);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <nav className="page-rail" aria-label="Seções">
      {SECTIONS.map((section, index) => {
        const isActive = index === active;

        return (
          <a
            key={section.id}
            className={`page-rail__item ${isActive ? "is-active" : ""}`}
            href={`#${section.id}`}
            aria-current={isActive ? "true" : undefined}
          >
            <motion.span
              className="page-rail__label"
              animate={{
                opacity: isActive ? 1 : 0.38,
                scale: isActive ? 1.08 : 1,
                y: reduce ? 0 : isActive ? 0 : 1,
              }}
              transition={{ duration: reduce ? 0.15 : 0.4, ease: softEase }}
            >
              {section.label}
            </motion.span>

            {index < SECTIONS.length - 1 ? (
              <span className="page-rail__rule" aria-hidden="true">
                <motion.span
                  className="page-rail__rule-fill"
                  animate={{ scaleY: active >= index ? 1 : 0 }}
                  transition={{ duration: reduce ? 0.15 : 0.45, ease: softEase }}
                  style={{ originY: 0 }}
                />
              </span>
            ) : null}
          </a>
        );
      })}
    </nav>
  );
}
