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
          const triggerId = `${baseId}-trigger-${groupIndex}`;
          const panelId = `${baseId}-panel-${groupIndex}`;

          return (
            <div className="treatment-group" key={group.title}>
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
                  <span className="treatment-group__title">{group.title}</span>
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
                    className="treatment-group__panel"
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
                      className="treatment-group__list"
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
                          <li key={item.label}>
                            <TreatmentRow label={item.label} />
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
}: {
  label: string;
  nested?: boolean;
}) {
  return (
    <div className={`treatment-row${nested ? " treatment-row--nested" : ""}`}>
      <WhatsAppButton variant="card" label={label} topic={label} />
      <span aria-hidden="true">↗</span>
    </div>
  );
}
