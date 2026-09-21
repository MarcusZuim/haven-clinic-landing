import { site } from "../../content/site";
import { useLanguage } from "../../i18n/LanguageProvider";
import { RevealItem, SectionReveal } from "../motion/SectionReveal";

export function ClinicStructure() {
  const { t } = useLanguage();

  return (
    <SectionReveal as="section" className="section structure">
      <div className="structure__intro">
        <RevealItem>
          <p className="eyebrow">{t.structure.eyebrow}</p>
          <h2 className="section-title">{t.structure.title}</h2>
        </RevealItem>
        <RevealItem>
          <p className="section-body">{t.structure.body}</p>
        </RevealItem>
      </div>

      <div className="structure__gallery">
        <RevealItem className="structure__image structure__image--wide">
          <img
            src={site.structure.images[0].src}
            alt={t.structure.imageAlts[0]}
            width={site.structure.images[0].width}
            height={site.structure.images[0].height}
            loading="lazy"
          />
        </RevealItem>
        <RevealItem className="structure__image structure__image--tall">
          <img
            src={site.structure.images[1].src}
            alt={t.structure.imageAlts[1]}
            width={site.structure.images[1].width}
            height={site.structure.images[1].height}
            loading="lazy"
          />
        </RevealItem>
        <RevealItem className="structure__principles">
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
          <small>{t.structure.imageNote}</small>
        </RevealItem>
      </div>
    </SectionReveal>
  );
}
