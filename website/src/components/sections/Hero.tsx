import { motion, useReducedMotion } from "framer-motion";
import { site } from "../../content/site";
import { useLanguage } from "../../i18n/LanguageProvider";
import { softEase, softIn } from "../../lib/motion";
import { WhatsAppButton } from "../cta/WhatsAppButton";
import { ScrollDrift } from "../motion/ScrollDrift";

export function Hero() {
  const reduce = useReducedMotion();
  const { t } = useLanguage();
  const { hero } = site;

  return (
    <section className="hero" id="topo" aria-labelledby="hero-title">
      <div className="hero__media" aria-hidden="true">
        <motion.div
          className="hero__frame"
          initial={reduce ? { opacity: 1 } : { opacity: 0.86 }}
          animate={{ opacity: 1 }}
          transition={{ duration: reduce ? 0.01 : 1.25, ease: softEase }}
        >
          <ScrollDrift className="hero__drift" yRange={[10, -12]} scaleRange={[1.06, 1.03]}>
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
          </ScrollDrift>
        </motion.div>
        <div className="hero__veil" />
      </div>

      <span className="visually-hidden">{t.hero.imageAlt}</span>

      <div className="hero__content">
        <div className="hero__copy">
          <motion.p
            className="hero__eyebrow"
            {...softIn(reduce, 0.12, { y: 8, duration: 1.05 })}
          >
            {t.hero.eyebrow}
          </motion.p>
          <h1 id="hero-title" className="hero__title">
            <motion.span {...softIn(reduce, 0.18, { y: 12 })}>
              {t.hero.headlineLine1}
            </motion.span>
            <motion.span
              className="hero__title-strong"
              {...softIn(reduce, 0.26, { y: 12 })}
            >
              {t.hero.headlineLine2}
            </motion.span>
            <motion.span
              className="hero__title-accent"
              {...softIn(reduce, 0.34, { y: 12 })}
            >
              {t.hero.headlineLine3}
            </motion.span>
          </h1>

          <motion.p
            className="hero__subhead"
            {...softIn(reduce, 0.43, { y: 8, duration: 1.1 })}
          >
            {t.hero.subhead}
          </motion.p>

          <motion.div
            className="hero__actions"
            {...softIn(reduce, 0.52, { y: 8, duration: 1.1 })}
          >
            <WhatsAppButton variant="hero" label={t.cta.evaluation} />
            <a className="hero__secondary" href="#tratamentos">
              {t.cta.treatments}
              <span aria-hidden="true">↓</span>
            </a>
          </motion.div>
        </div>

        <motion.p
          className="hero__caption"
          {...softIn(reduce, 0.65, { y: 6, duration: 1 })}
        >
          {t.hero.caption}
        </motion.p>
      </div>
    </section>
  );
}
