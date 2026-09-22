import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { site } from "../../content/site";
import { useLanguage } from "../../i18n/LanguageProvider";
import { RevealItem, SectionReveal } from "../motion/SectionReveal";
import { ReviewConversation, ReviewTyping } from "./ReviewConversation";

const GOOGLE_REVIEW_URL = "https://share.google/PzCsjfkHdW52BNDLy";
const settleEase = [0.22, 1, 0.36, 1] as const;
const TYPING_MS = 860;

export function Testimonials() {
  const reduce = useReducedMotion();
  const { t } = useLanguage();
  const copy = t.testimonials;
  const items = copy.items;
  const total = items.length;
  const [index, setIndex] = useState(0);
  const [shown, setShown] = useState(0);
  const [phase, setPhase] = useState<"review" | "typing">("review");
  const [wellHeight, setWellHeight] = useState<number>();
  const indexRef = useRef(0);
  const tokenRef = useRef(0);
  const timeoutRef = useRef<number | null>(null);
  const measureRef = useRef<HTMLDivElement>(null);
  const review = items[shown];

  useLayoutEffect(() => {
    const node = measureRef.current;
    if (!node) return;

    const update = () => {
      const heights = [...node.querySelectorAll<HTMLElement>("[data-review-measure]")].map(
        (item) => item.getBoundingClientRect().height,
      );
      if (heights.length === 0) return;
      const next = Math.ceil(Math.max(...heights));
      setWellHeight((current) => (current === next ? current : next));
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(node);
    return () => observer.disconnect();
  }, [items, copy.source, copy.starsLabel]);

  useEffect(
    () => () => {
      if (timeoutRef.current !== null) window.clearTimeout(timeoutRef.current);
    },
    [],
  );

  const go = (direction: -1 | 1) => {
    const next = (indexRef.current + direction + total) % total;
    indexRef.current = next;
    setIndex(next);

    if (reduce) {
      setShown(next);
      setPhase("review");
      return;
    }

    const token = ++tokenRef.current;
    setPhase("typing");
    if (timeoutRef.current !== null) window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => {
      if (tokenRef.current !== token) return;
      setShown(indexRef.current);
      setPhase("review");
    }, TYPING_MS);
  };

  return (
    <SectionReveal as="section" id={site.testimonials.id} className="section quotes">
      <div className="quotes__header">
        <RevealItem>
          <p className="eyebrow">{copy.eyebrow}</p>
          <h2 className="section-title">{copy.title}</h2>
        </RevealItem>
        <RevealItem className="quotes__source-mark" aria-hidden="true">
          <GoogleMark />
        </RevealItem>
      </div>

      <RevealItem className="quotes__stage">
        <div className="quotes__well">
          <div className="quotes__measure" ref={measureRef} aria-hidden="true">
            {items.map((item) => (
              <div data-review-measure key={item.author}>
                <ReviewConversation
                  review={item}
                  source={copy.source}
                  starsLabel={copy.starsLabel}
                  animate={false}
                />
              </div>
            ))}
          </div>

          <div
            className="quotes__thread"
            style={wellHeight ? { height: wellHeight } : undefined}
            aria-live="polite"
            aria-atomic="true"
          >
            <AnimatePresence mode="wait">
              {phase === "review" ? (
                <motion.div
                  key={review.author}
                  initial={false}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduce ? { opacity: 1 } : { opacity: 0.62, y: -4 }}
                  transition={{ duration: reduce ? 0.01 : 0.4, ease: settleEase }}
                >
                  <ReviewConversation
                    review={review}
                    source={copy.source}
                    starsLabel={copy.starsLabel}
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="typing"
                  initial={reduce ? false : { opacity: 0.75 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0.7 }}
                  transition={{ duration: reduce ? 0.01 : 0.35, ease: settleEase }}
                >
                  <ReviewTyping label={copy.typing} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

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

        <p className="quotes__source">
          {copy.googleNote}{" "}
          <a href={GOOGLE_REVIEW_URL} target="_blank" rel="noopener noreferrer">
            {copy.googleCta}
          </a>
        </p>
      </RevealItem>
    </SectionReveal>
  );
}

function GoogleMark() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path
        fill="#FFC107"
        d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
      />
      <path
        fill="#FF3D00"
        d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
      />
      <path
        fill="#4CAF50"
        d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
      />
      <path
        fill="#1976D2"
        d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
      />
    </svg>
  );
}
