import { site } from "../../content/site";
import { useLanguage } from "../../i18n/LanguageProvider";
import { RevealItem, SectionReveal } from "../motion/SectionReveal";

export function CompleteClinic() {
  const { t } = useLanguage();

  return (
    <SectionReveal as="section" className="complete-clinic">
      <div className="complete-clinic__media" aria-hidden="true">
        <img
          src={site.complete.image.src}
          alt=""
          width={site.complete.image.width}
          height={site.complete.image.height}
          loading="lazy"
        />
      </div>
      <div className="complete-clinic__veil" />
      <div className="complete-clinic__inner">
        <RevealItem className="complete-clinic__heading">
          <p className="eyebrow">{t.complete.eyebrow}</p>
          <h2>{t.complete.title}</h2>
        </RevealItem>
        <RevealItem className="complete-clinic__statement">
          <p>{t.complete.body}</p>
          <ul>
            {t.complete.areas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </RevealItem>
      </div>
    </SectionReveal>
  );
}
