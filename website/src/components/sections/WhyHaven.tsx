import { site } from "../../content/site";
import { useLanguage } from "../../i18n/LanguageProvider";
import { WhatsAppButton } from "../cta/WhatsAppButton";
import { RevealItem, SectionReveal } from "../motion/SectionReveal";

export function WhyHaven() {
  const { t } = useLanguage();

  return (
    <SectionReveal as="section" id={site.why.id} className="section philosophy">
      <div className="philosophy__layout">
        <RevealItem className="philosophy__heading">
          <p className="eyebrow">{t.why.eyebrow}</p>
          <h2 className="section-title">{t.why.title}</h2>
        </RevealItem>

        <RevealItem className="philosophy__body">
          <p>{t.why.body}</p>
          <WhatsAppButton variant="solid" label={t.why.cta} />
        </RevealItem>

        <RevealItem className="philosophy__principles">
          {t.why.principles.map((principle, index) => (
            <article key={principle.title}>
              <span>0{index + 1}</span>
              <h3>{principle.title}</h3>
              <p>{principle.body}</p>
            </article>
          ))}
        </RevealItem>
      </div>
    </SectionReveal>
  );
}
