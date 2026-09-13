import { motion, useReducedMotion } from "framer-motion";
import { site } from "../../content/site";
import { buildWhatsAppUrl } from "../../config/whatsapp";
import { useLanguage } from "../../i18n/LanguageProvider";
import { softEase, softIn } from "../../lib/motion";
import { WhatsAppButton } from "../cta/WhatsAppButton";

const INSTAGRAM_URL = "https://www.instagram.com/havenclinicoficial/";
const TIKTOK_URL = "https://www.tiktok.com/@havenclinicoficial";

const HERO_IN = {
  media: { delay: 0, duration: 1.35 },
  line1: 0.14,
  line2: 0.24,
  line3: 0.34,
  subhead: 0.44,
  actions: 0.54,
  tagline: 0.62,
  facts: [
    { value: 0.7, label: 0.76 },
    { value: 0.74, label: 0.8 },
    { value: 0.78, label: 0.84 },
  ],
  highlight: 0.68,
  quote: 0.74,
  social: 0.9,
} as const;

export function Hero() {
  const reduce = useReducedMotion();
  const { t } = useLanguage();
  const { hero } = site;
  const copy = t.hero;

  return (
    <section className="hero" id="topo" aria-labelledby="hero-title">
      <div className="hero__media" aria-hidden="true">
        <motion.div
          className="hero__frame"
          initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 1.035 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: reduce ? 0.4 : HERO_IN.media.duration,
            ease: softEase,
            delay: reduce ? 0 : HERO_IN.media.delay,
          }}
        >
          <picture>
            <source
              media="(min-width: 1024px)"
              srcSet={hero.imageDesktop.src}
              width={hero.imageDesktop.width}
              height={hero.imageDesktop.height}
            />
            <img
              src={hero.image.src}
              alt=""
              width={hero.image.width}
              height={hero.image.height}
              fetchPriority="high"
            />
          </picture>
        </motion.div>
        <div className="hero__veil" />
      </div>

      <span className="visually-hidden">{copy.imageAlt}</span>

      <div className="hero__content">
        <div className="hero__intro">
          <h1 id="hero-title" className="hero__title">
            <motion.span
              className="hero__title-line hero__title-line--1"
              {...softIn(reduce, HERO_IN.line1, { y: 12, duration: 1.05 })}
            >
              {copy.headlineLine1}
            </motion.span>
            <motion.span
              className="hero__title-line hero__title-line--2"
              {...softIn(reduce, HERO_IN.line2, { y: 12, duration: 1.05 })}
            >
              {copy.headlineLine2}
            </motion.span>
            <motion.span
              className="hero__title-line hero__title-line--3"
              {...softIn(reduce, HERO_IN.line3, { y: 12, duration: 1.1 })}
            >
              {copy.headlineLine3}
            </motion.span>
          </h1>

          <motion.p
            className="hero__subhead"
            {...softIn(reduce, HERO_IN.subhead, { y: 8, duration: 1 })}
          >
            {copy.subhead}
          </motion.p>

          <motion.div
            className="hero__actions"
            {...softIn(reduce, HERO_IN.actions, { y: 10, duration: 1 })}
          >
            <WhatsAppButton
              className="hero__cta"
              variant="solid"
              label={t.cta.evaluation}
            />
          </motion.div>

          <motion.p
            className="hero__tagline"
            {...softIn(reduce, HERO_IN.tagline, { y: 6, duration: 0.9 })}
          >
            {copy.tagline}
          </motion.p>
        </div>

        <div className="hero__lower">
          <motion.p
            className="hero__quote"
            {...softIn(reduce, HERO_IN.quote, { y: 8, duration: 1 })}
          >
            <span className="hero__quote-line">
              <span className="hero__quote-bracket" aria-hidden="true">
                [
              </span>
              <span>{copy.quoteLead}</span>
            </span>
            <span className="hero__quote-line">
              <span>{copy.quoteTrail}</span>
              <span className="hero__quote-bracket" aria-hidden="true">
                ]
              </span>
            </span>
          </motion.p>

          <ul className="hero__facts">
            {copy.facts.map((fact, index) => {
              const timing = HERO_IN.facts[index] ?? HERO_IN.facts[0];

              return (
                <li key={`${fact.value}-${fact.label}`} className="hero__fact">
                  <motion.p
                    className="hero__fact-value"
                    {...softIn(reduce, timing.value, { y: 8, duration: 0.95 })}
                  >
                    {fact.value}
                  </motion.p>
                  <motion.p
                    className="hero__fact-label"
                    {...softIn(reduce, timing.label, { y: 6, duration: 0.9 })}
                  >
                    {fact.label}
                  </motion.p>
                  {"body" in fact && fact.body ? (
                    <motion.p
                      className="hero__fact-body"
                      {...softIn(reduce, timing.label, { y: 6, duration: 0.9 })}
                    >
                      {fact.body}
                    </motion.p>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </div>

        <motion.div
          className="hero__social"
          aria-label={t.contact.social}
          {...softIn(reduce, HERO_IN.social, { y: 8, duration: 0.9 })}
        >
          <a
            className="hero__social-link"
            href={buildWhatsAppUrl(t.whatsapp.message)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <WhatsAppIcon />
          </a>
          <a
            className="hero__social-link"
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <InstagramIcon />
          </a>
          <a
            className="hero__social-link"
            href={TIKTOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
          >
            <TikTokIcon />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12.04 2C6.58 2 2.15 6.4 2.15 11.83c0 1.74.46 3.43 1.33 4.93L2 22l5.4-1.42a10 10 0 0 0 4.64 1.18h.01c5.46 0 9.89-4.4 9.89-9.83C21.94 6.4 17.5 2 12.04 2Zm5.75 13.94c-.24.67-1.18 1.23-1.93 1.4-.52.11-1.2.2-3.49-.75-2.93-1.2-4.82-4.14-4.97-4.33-.14-.2-1.18-1.57-1.18-3 0-1.42.75-2.12 1.01-2.4.27-.28.58-.35.77-.35h.56c.18 0 .42-.07.66.5.24.58.82 2 .89 2.15.07.14.12.31.02.5-.1.2-.14.31-.28.48-.14.16-.3.37-.42.5-.14.14-.28.29-.12.56.16.28.7 1.16 1.5 1.88 1.04.93 1.9 1.22 2.17 1.36.28.14.44.12.6-.07.16-.2.7-.81.88-1.09.18-.28.37-.23.62-.14.26.1 1.63.77 1.91.91.28.14.47.21.54.32.07.12.07.67-.17 1.34Z"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        ry="5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle
        cx="12"
        cy="12"
        r="4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M14.2 3c.4 2.5 1.9 4.2 4.3 4.5v2.3c-1.5 0-2.8-.4-4-1.2v6.2c0 3.5-2.8 6.2-6.3 6.2S1.9 18.3 1.9 14.8 4.7 8.6 8.2 8.6c.3 0 .7 0 1 .1v2.5c-.3-.1-.6-.2-1-.2-2.1 0-3.8 1.7-3.8 3.8s1.7 3.8 3.8 3.8 3.8-1.7 3.8-3.8V3h2.2Z"
      />
    </svg>
  );
}
