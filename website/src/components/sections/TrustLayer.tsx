import { useLanguage } from "../../i18n/LanguageProvider";
import { RevealItem, SectionReveal } from "../motion/SectionReveal";

export function TrustLayer() {
  const { t } = useLanguage();

  return (
    <SectionReveal as="section" className="trust-layer">
      <h2 className="visually-hidden">{t.trust.label}</h2>
      <div className="trust-layer__inner">
        {t.trust.items.map((item, index) => (
          <RevealItem className="trust-item" key={index}>
            <span className="trust-item__index" aria-hidden="true">
              0{index + 1}
            </span>
            <div>
              <strong>{item.title}</strong>
              <span>{item.body}</span>
            </div>
          </RevealItem>
        ))}
      </div>
    </SectionReveal>
  );
}
