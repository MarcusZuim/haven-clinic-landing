import { site } from "../../content/site";
import { useLanguage } from "../../i18n/LanguageProvider";
import { WhatsAppButton } from "../cta/WhatsAppButton";
import { RevealItem, SectionReveal } from "../motion/SectionReveal";

export function WhyHaven() {
  const { why, team } = site;
  const { t } = useLanguage();
  const copy = t.why;

  return (
    <SectionReveal as="section" id={why.id} className="section why">
      <div className="why__layout">
        <RevealItem className="why__copy">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h2 className="section-title">
            {copy.titleLead}
            <span className="weight-semibold">{copy.titleAccent}</span>
          </h2>
          <p className="section-body">{copy.body}</p>

          <ul className="why__pillars">
            {copy.pillars.map((pillar, index) => (
              <li key={pillar.title} className="pillar">
                <span className="pillar__index">0{index + 1}</span>
                <h3>{pillar.title}</h3>
                <p>{pillar.body}</p>
              </li>
            ))}
          </ul>
        </RevealItem>

        <RevealItem className="why__media">
          <img
            src={why.image.src}
            alt={copy.imageAlt}
            width={why.image.width}
            height={why.image.height}
            loading="lazy"
          />
        </RevealItem>

        <RevealItem className="why__aside">
          <div className="why__care">
            <h3>{copy.aside.title}</h3>
            <p>{copy.aside.body}</p>
            <WhatsAppButton variant="solid" label={t.cta.howItWorks} />
          </div>
          <img
            className="why__portrait"
            src={team.featured.image.src}
            alt={t.team.imageAlt}
            width={team.featured.image.width}
            height={team.featured.image.height}
            loading="lazy"
          />
        </RevealItem>
      </div>
    </SectionReveal>
  );
}
