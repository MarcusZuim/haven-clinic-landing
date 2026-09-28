import { useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "../../i18n/LanguageProvider";
import { ease } from "../../lib/motion";
import { WhatsAppButton } from "../cta/WhatsAppButton";
import { RevealItem, SectionReveal } from "../motion/SectionReveal";

const PANEL_EASE = ease;

export function Treatments() {
  const { t } = useLanguage();
  const reduce = useReducedMotion();
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <SectionReveal
      as="section"
      id="tratamentos"
      className="section treatments"
    >
      <RevealItem className="treatments__intro">
        <div>
          <p className="eyebrow">{t.treatments.eyebrow}</p>
          <h2 className="section-title">{t.treatments.title}</h2>
        </div>
        <p className="section-body">{t.treatments.body}</p>
      </RevealItem>

      <div className="treatments__directory">
        {t.treatments.groups.map((group, groupIndex) => {
          const isOpen = openIndex === groupIndex;
          const pediatricGroup =
            "pediatric" in group && group.pediatric ? group : undefined;
          const isPediatric = Boolean(pediatricGroup);
          const triggerId = `${baseId}-trigger-${groupIndex}`;
          const panelId = `${baseId}-panel-${groupIndex}`;

          return (
            <div
              className={`treatment-group${isPediatric ? " treatment-group--pediatric" : ""}`}
              key={group.title}
            >
              {isPediatric ? <PediatricDecorations /> : null}
              <h3 className="treatment-group__heading">
                <button
                  type="button"
                  id={triggerId}
                  className={`treatment-group__trigger${isOpen ? " is-open" : ""}`}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() =>
                    setOpenIndex((current) =>
                      current === groupIndex ? -1 : groupIndex,
                    )
                  }
                >
                  <span className="treatment-group__number" aria-hidden="true">
                    0{groupIndex + 1}
                  </span>
                  <span className="treatment-group__label">
                    {pediatricGroup ? (
                      <span className="treatment-group__identifier">{pediatricGroup.identifier}</span>
                    ) : null}
                    <span className="treatment-group__title">{group.title}</span>
                    {pediatricGroup ? (
                      <span className="treatment-group__preview">{pediatricGroup.preview}</span>
                    ) : null}
                  </span>
                  <span
                    className="treatment-group__toggle"
                    aria-hidden="true"
                  />
                </button>
              </h3>

              <AnimatePresence initial={false}>
                {isOpen ? (
                  <motion.div
                    key={panelId}
                    id={panelId}
                    role="region"
                    aria-labelledby={triggerId}
                    className={`treatment-group__panel${isPediatric ? " treatment-group__panel--pediatric" : ""}`}
                    initial={
                      reduce ? { opacity: 0 } : { height: 0, opacity: 0 }
                    }
                    animate={{ height: "auto", opacity: 1 }}
                    exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                    transition={{
                      height: { duration: reduce ? 0.01 : 0.36, ease: PANEL_EASE },
                      opacity: { duration: reduce ? 0.01 : 0.28, ease: PANEL_EASE },
                    }}
                  >
                    <motion.ul
                      className={`treatment-group__list${isPediatric ? " treatment-group__list--pediatric" : ""}`}
                      initial={reduce ? false : { y: 8 }}
                      animate={{ y: 0 }}
                      exit={reduce ? undefined : { y: 4 }}
                      transition={{
                        duration: reduce ? 0.01 : 0.36,
                        ease: PANEL_EASE,
                      }}
                    >
                      {group.items.map((item) => {
                        const children =
                          "children" in item ? item.children : undefined;

                        if (children && children.length > 0) {
                          return (
                            <li className="treatment-family" key={item.label}>
                              <TreatmentRow label={item.label} />
                              <ul className="treatment-family__list">
                                {children.map((child) => (
                                  <li key={child.label}>
                                    <TreatmentRow label={child.label} nested />
                                  </li>
                                ))}
                              </ul>
                            </li>
                          );
                        }

                        return (
                          <li
                            className={isPediatric ? "treatment-service" : undefined}
                            key={item.label}
                          >
                            <TreatmentRow
                              label={item.label}
                              description={"description" in item ? item.description : undefined}
                              topic={pediatricGroup ? `${group.title} — ${item.label}` : undefined}
                            />
                          </li>
                        );
                      })}
                    </motion.ul>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      <RevealItem className="treatments__foot">
        <p>{t.treatments.note}</p>
        <WhatsAppButton
          variant="ghost"
          label={t.treatments.cta}
          topic={t.treatments.topic}
        />
      </RevealItem>
    </SectionReveal>
  );
}

function TreatmentRow({
  label,
  nested = false,
  description,
  topic,
}: {
  label: string;
  nested?: boolean;
  description?: string;
  topic?: string;
}) {
  return (
    <div className={`treatment-row${nested ? " treatment-row--nested" : ""}`}>
      <div className="treatment-row__copy">
        <WhatsAppButton variant="card" label={label} topic={topic ?? label} />
        {description ? <p className="treatment-row__description">{description}</p> : null}
      </div>
      <span aria-hidden="true">↗</span>
    </div>
  );
}

function PediatricDecorations() {
  return (
    <div className="pediatric-decorations" aria-hidden="true">
      <span className="pediatric-decoration pediatric-decoration--rocket">🚀</span>
      <span className="pediatric-decoration pediatric-decoration--planet-one">🪐</span>
      <span className="pediatric-decoration pediatric-decoration--planet-two">🌎</span>
      <span className="pediatric-decoration pediatric-decoration--star-one">✦</span>
      <span className="pediatric-decoration pediatric-decoration--star-two">✧</span>
      <span className="pediatric-decoration pediatric-decoration--cloud">☁️</span>
      <span className="pediatric-decoration pediatric-decoration--rainbow">🌈</span>
    </div>
  );
}
