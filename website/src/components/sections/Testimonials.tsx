import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { site } from "../../content/site";
import { useLanguage } from "../../i18n/LanguageProvider";
import { ease } from "../../lib/motion";
import { RevealItem, SectionReveal } from "../motion/SectionReveal";
import { ReviewConversation, reviewDisplayName } from "./ReviewConversation";

const GOOGLE_REVIEW_URL = "https://share.google/PzCsjfkHdW52BNDLy";
const EXIT_MS = 0.18;
const ENTER_DELAY_MS = 0.44;
const ENTER_MS = 0.38;
const ENTER_FADE_MS = 0.3;
const HEIGHT_MS = 0.42;
const TYPING_MS = 360;

function slideVariants(reduce: boolean) {
  return {
    enter: (direction: number) => ({
      x: reduce ? 0 : direction > 0 ? 18 : -18,
      opacity: reduce ? 1 : 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: reduce
        ? { duration: 0.01 }
        : {
            x: { duration: ENTER_MS, delay: ENTER_DELAY_MS, ease },
            opacity: { duration: ENTER_FADE_MS, delay: ENTER_DELAY_MS, ease },
          },
    },
    exit: (direction: number) => ({
      x: reduce ? 0 : direction > 0 ? -16 : 16,
      opacity: 0,
      transition: { duration: reduce ? 0.01 : EXIT_MS, ease },
    }),
  };
}

export function Testimonials() {
  const { t } = useLanguage();
  const reduce = useReducedMotion() === true;
  const copy = t.testimonials;
  const items = copy.items;
  const total = items.length;
  const [[page, direction], setPage] = useState<[number, -1 | 1]>([0, 1]);
  const [presenceKey, setPresenceKey] = useState(0);
  const [typing, setTyping] = useState(false);
  const index = ((page % total) + total) % total;
  const review = items[index];
  const contentRef = useRef<HTMLDivElement>(null);
  const pageRef = useRef(0);
  const tokenRef = useRef(0);
  const timerRef = useRef<number | null>(null);
  const [height, setHeight] = useState<number | "auto">("auto");
  const [animateHeight, setAnimateHeight] = useState(false);

  useEffect(
    () => () => {
      if (timerRef.current !== null) window.clearTimeout(timerRef.current);
    },
    [],
  );

  useLayoutEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    const measure = () => {
      const next = Math.ceil(el.getBoundingClientRect().height);
      if (next <= 0) return;
      setHeight((current) => (current === next ? current : next));
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, [page, review.text, copy.source]);

  const go = (nextDirection: -1 | 1) => {
    const next = pageRef.current + nextDirection;
    pageRef.current = next;
    const token = ++tokenRef.current;
    setAnimateHeight(true);
    setPresenceKey((current) => current + 1);
    setPage([next, nextDirection]);

    if (timerRef.current !== null) window.clearTimeout(timerRef.current);

    if (reduce) {
      setTyping(false);
      return;
    }

    setTyping(true);
    timerRef.current = window.setTimeout(() => {
      if (tokenRef.current !== token) return;
      setTyping(false);
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
          <motion.div
            className="quotes__thread"
            initial={false}
            animate={{ height }}
            transition={{
              height: {
                duration: reduce || !animateHeight ? 0.01 : HEIGHT_MS,
                ease,
              },
            }}
          >
            <p className="visually-hidden" aria-live="polite" aria-atomic="true">
              {typing
                ? copy.typing
                : `${reviewDisplayName(review.author)}. ${copy.source}. ${review.text}. ${copy.starsLabel}`}
            </p>
            <div ref={contentRef} aria-hidden="true">
              <AnimatePresence mode="popLayout" initial={false} custom={direction}>
                <motion.div
                  key={presenceKey}
                  className="quotes__slide"
                  custom={direction}
                  variants={slideVariants(reduce)}
                  initial="enter"
                  animate="center"
                  exit="exit"
                >
                  <ReviewConversation
                    review={review}
                    source={copy.source}
                    starsLabel={copy.starsLabel}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
            <AnimatePresence>
              {typing ? <TypingIndicator key="typing" /> : null}
            </AnimatePresence>
          </motion.div>
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

function TypingIndicator() {
  return (
    <motion.div
      className="quotes__typing"
      aria-hidden="true"
      initial="hidden"
      animate="show"
      exit="hidden"
      variants={{
        hidden: { opacity: 0, y: 4, transition: { duration: 0.14, ease } },
        show: { opacity: 1, y: 0, transition: { duration: 0.16, delay: 0.16, ease } },
      }}
    >
      <span className="quotes__typing-bubble">
        <span className="quotes__dot" />
        <span className="quotes__dot" />
        <span className="quotes__dot" />
      </span>
    </motion.div>
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
