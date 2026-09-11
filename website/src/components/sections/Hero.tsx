import { motion, useReducedMotion } from "framer-motion";
import { site } from "../../content/site";
import { useLanguage } from "../../i18n/LanguageProvider";
import { fadeUp, ease } from "../../lib/motion";
import { WhatsAppButton } from "../cta/WhatsAppButton";

export function Hero() {
  const reduce = useReducedMotion();
  const { t } = useLanguage();
  const { hero, team } = site;
  const copy = t.hero;

  return (
    <section className="hero" id="topo" aria-labelledby="hero-title">
      <div className="hero__media" aria-hidden="true">
        <motion.div
          className="hero__frame"
          initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: reduce ? 0.4 : 0.9, ease }}
        >
          <picture>
            <source
              media="(min-width: 768px)"
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
        <div className="hero__stack">
          <div className="hero__copy">
            <h1 id="hero-title" className="hero__title">
              <motion.span
                className="hero__title-line"
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease, delay: 0.12 }}
              >
                {copy.headlineLead}
                <em className="accent-script">{copy.headlineAccent}</em>
              </motion.span>
            </h1>
          </div>

          <motion.p
            className="hero__subhead"
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.28 }}
          >
            {copy.subhead}
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.38 }}
          >
            <WhatsAppButton variant="hero" label={t.cta.personalized} />
          </motion.div>

          <motion.p
            className="hero__tagline"
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease, delay: 0.46 }}
          >
            {copy.tagline}
          </motion.p>
        </div>

        <div className="hero__meta">
          <ul className="hero__facts">
            {copy.facts.map((fact, index) => {
              const valueDelay = 0.5 + index * 0.22;
              const labelDelay = valueDelay + 0.14;

              return (
                <li key={fact.label}>
                  <motion.p
                    className="hero__fact-value"
                    {...fadeUp(reduce, valueDelay, 18, 0.6)}
                  >
                    {fact.value}
                  </motion.p>
                  <motion.p
                    className="hero__fact-label"
                    {...fadeUp(reduce, labelDelay, 10, 0.5)}
                  >
                    {fact.label}
                  </motion.p>
                </li>
              );
            })}
          </ul>
        </div>

        <motion.aside
          className="hero__doctor"
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease, delay: reduce ? 0 : 1.18 }}
        >
          <img
            src={team.featured.image.src}
            alt={t.team.imageAlt}
            width={88}
            height={88}
          />
          <div>
            <p className="hero__doctor-name">{team.featured.name}</p>
            <p className="hero__doctor-role">{t.team.role}</p>
            <p className="hero__doctor-note">{copy.featuredNote}</p>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
