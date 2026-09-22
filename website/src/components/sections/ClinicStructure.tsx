import { motion, useReducedMotion } from "framer-motion";
import { site } from "../../content/site";
import { useLanguage } from "../../i18n/LanguageProvider";
import { ease } from "../../lib/motion";

export function ClinicStructure() {
  const { t } = useLanguage();
  const reduce = useReducedMotion();

  return (
    <motion.section
      className="section structure"
      initial={reduce ? { opacity: 1 } : { opacity: 0.78, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{
        duration: reduce ? 0.01 : 1.15,
        ease,
      }}
    >
      <div className="structure__intro">
        <div>
          <p className="eyebrow">{t.structure.eyebrow}</p>
          <h2 className="section-title">{t.structure.title}</h2>
        </div>
        <p className="section-body">{t.structure.body}</p>
      </div>

      <div className="structure__gallery">
        <div className="structure__image structure__image--wide structure__image--reception">
          <img
            src={site.structure.images[0].src}
            alt={t.structure.imageAlts[0]}
            width={site.structure.images[0].width}
            height={site.structure.images[0].height}
            loading="lazy"
          />
        </div>
        <div className="structure__image structure__image--tall structure__image--operatory">
          <img
            src={site.structure.images[1].src}
            alt={t.structure.imageAlts[1]}
            width={site.structure.images[1].width}
            height={site.structure.images[1].height}
            loading="lazy"
          />
        </div>
        <div className="structure__principles">
          <ol>
            {t.structure.principles.map((item, index) => (
              <li key={item.title}>
                <span>0{index + 1}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </motion.section>
  );
}
