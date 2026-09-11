import { site } from "../../content/site";
import { useLanguage } from "../../i18n/LanguageProvider";
import { WhatsAppButton } from "../cta/WhatsAppButton";
import { RevealItem, SectionReveal } from "../motion/SectionReveal";

export function Team() {
  const { team } = site;
  const { t } = useLanguage();
  const copy = t.team;

  return (
    <SectionReveal as="section" id={team.id} className="section team">
      <RevealItem className="section-intro">
        <p className="eyebrow">{copy.eyebrow}</p>
        <h2 className="section-title">
          {copy.titleLead}
          <span className="weight-semibold">{copy.titleAccent}</span>
        </h2>
      </RevealItem>

      <div className="team__grid">
        <RevealItem className="team-card team-card--featured">
          <img
            src={team.featured.image.src}
            alt={copy.imageAlt}
            width={team.featured.image.width}
            height={team.featured.image.height}
            loading="lazy"
          />
          <div className="team-card__body">
            <h3>{team.featured.name}</h3>
            <p className="team-card__role">{copy.role}</p>
            <p className="status-note">{copy.note}</p>
          </div>
        </RevealItem>

        <RevealItem className="team-card team-card--pending">
          <div className="team-card__placeholder" aria-hidden="true" />
          <div className="team-card__body">
            <h3>{copy.pendingTitle}</h3>
            <p>{copy.pendingBody}</p>
          </div>
        </RevealItem>
      </div>

      <RevealItem className="team__cta">
        <WhatsAppButton variant="solid" label={t.cta.team} />
      </RevealItem>
    </SectionReveal>
  );
}
