import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { SHOW_TESTIMONIALS_PROTOTYPE } from "../../config/flags";
import { site } from "../../content/site";
import { useLanguage } from "../../i18n/LanguageProvider";
import { RevealItem, SectionReveal } from "../motion/SectionReveal";

export function Testimonials() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const { t } = useLanguage();
  const copy = t.testimonials;
  const { testimonials } = site;

  if (!SHOW_TESTIMONIALS_PROTOTYPE) return null;

  const quote = copy.items[index];
  const total = copy.items.length;

  const go = (direction: -1 | 1) => {
    setIndex((current) => (current + direction + total) % total);
  };

  return (
    <SectionReveal as="section" id={testimonials.id} className="section quotes">
      <RevealItem className="section-intro">
        <p className="eyebrow">{copy.eyebrow}</p>
        <h2 className="section-title">
          {copy.titleLead}
          <span className="weight-semibold">{copy.titleAccent}</span>
        </h2>
      </RevealItem>

      <RevealItem className="quotes__stage">
        <p className="example-badge">{copy.exampleLabel}</p>

        <AnimatePresence mode="wait">
          <motion.blockquote
            key={quote}
            className="quotes__quote"
            initial={reduce ? { opacity: 0 } : { opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, x: -24 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            {quote}
          </motion.blockquote>
        </AnimatePresence>

        <div className="quotes__nav">
          <button type="button" onClick={() => go(-1)} aria-label={t.a11y.prevQuote}>
            ←
          </button>
          <span>
            {index + 1} / {total}
          </span>
          <button type="button" onClick={() => go(1)} aria-label={t.a11y.nextQuote}>
            →
          </button>
        </div>
      </RevealItem>
    </SectionReveal>
  );
}
