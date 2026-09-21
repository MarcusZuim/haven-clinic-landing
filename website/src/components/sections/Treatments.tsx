import { useEffect, useState } from "react";
import { useLanguage } from "../../i18n/LanguageProvider";
import { WhatsAppButton } from "../cta/WhatsAppButton";
import { RevealItem, SectionReveal } from "../motion/SectionReveal";

export function Treatments() {
  const { t } = useLanguage();
  const [desktop, setDesktop] = useState(() =>
    typeof window === "undefined"
      ? false
      : window.matchMedia("(min-width: 1024px)").matches,
  );
  const [openGroups, setOpenGroups] = useState<number[]>([0]);

  useEffect(() => {
    const query = window.matchMedia("(min-width: 1024px)");
    const update = () => setDesktop(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

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
        {t.treatments.groups.map((group, groupIndex) => (
          <RevealItem className="treatment-group" key={group.title}>
            <details
              open={desktop || openGroups.includes(groupIndex)}
              onToggle={(event) => {
                if (desktop) return;
                const isOpen = event.currentTarget.open;
                setOpenGroups((current) =>
                  isOpen
                    ? [...new Set([...current, groupIndex])]
                    : current.filter((value) => value !== groupIndex),
                );
              }}
            >
              <summary>
                <span className="treatment-group__number" aria-hidden="true">
                  0{groupIndex + 1}
                </span>
                <h3>{group.title}</h3>
                <span className="treatment-group__toggle" aria-hidden="true" />
              </summary>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>
                    <WhatsAppButton
                      variant="card"
                      label={item}
                      topic={item}
                    />
                    <span aria-hidden="true">↗</span>
                  </li>
                ))}
              </ul>
            </details>
          </RevealItem>
        ))}
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
