import { site } from "../../content/site";
import { useLanguage } from "../../i18n/LanguageProvider";
import { RevealItem, SectionReveal } from "../motion/SectionReveal";
import { ScrollDrift } from "../motion/ScrollDrift";

export function CompleteClinic() {
  const { t } = useLanguage();

  return (
    <SectionReveal as="section" className="complete-clinic">
      <ScrollDrift className="complete-clinic__media" yRange={[8, -12]} scaleRange={[1.06, 1.03]}>
        <img
          src={site.complete.image.src}
          alt=""
          width={site.complete.image.width}
          height={site.complete.image.height}
          loading="lazy"
        />
      </ScrollDrift>
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
