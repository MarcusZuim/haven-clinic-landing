import { useLanguage } from "../../i18n/LanguageProvider";
import { assetUrl } from "../../lib/assets";
import { BrandLogo } from "../brand/BrandLogo";
import { WhatsAppButton } from "../cta/WhatsAppButton";
import { RevealItem, SectionReveal } from "../motion/SectionReveal";

export function PediatricFeature() {
  const { t } = useLanguage();

  return (
    <SectionReveal as="section" className="section pediatric">
      <div className="pediatric__layout">
        <RevealItem className="pediatric__visual">
          <img
            className="pediatric__image"
            src={assetUrl("images/brand/kid.png")}
            alt="Criança sorrindo durante atendimento odontopediátrico"
            loading="lazy"
            decoding="async"
          />
          <p>{t.pediatric.visualNote}</p>
        </RevealItem>

        <BrandLogo variant="isotipo" decorative className="pediatric__brand" />

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
