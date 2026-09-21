import { useLanguage } from "../../i18n/LanguageProvider";
import { BrandLogo } from "../brand/BrandLogo";
import { WhatsAppButton } from "../cta/WhatsAppButton";
import { RevealItem, SectionReveal } from "../motion/SectionReveal";

export function PediatricFeature() {
  const { t } = useLanguage();

  return (
    <SectionReveal as="section" className="section pediatric">
      <div className="pediatric__layout">
        <RevealItem className="pediatric__visual">
          <span className="pediatric__orbit pediatric__orbit--one" />
          <span className="pediatric__orbit pediatric__orbit--two" />
          <BrandLogo variant="isotipo" decorative />
          <p>{t.pediatric.visualNote}</p>
        </RevealItem>

        <RevealItem className="pediatric__copy">
          <p className="eyebrow">{t.pediatric.eyebrow}</p>
          <h2 className="section-title">{t.pediatric.title}</h2>
          <p className="section-body">{t.pediatric.body}</p>
          <WhatsAppButton
            variant="solid"
            label={t.pediatric.cta}
            topic={t.pediatric.topic}
          />
        </RevealItem>
      </div>
    </SectionReveal>
  );
}
