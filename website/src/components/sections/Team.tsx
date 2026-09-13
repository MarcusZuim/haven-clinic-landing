import { useState } from "react";
import { site } from "../../content/site";
import { useLanguage } from "../../i18n/LanguageProvider";
import { WhatsAppButton } from "../cta/WhatsAppButton";
import { RevealItem, SectionReveal } from "../motion/SectionReveal";

export function Team() {
  const { team } = site;
  const { t } = useLanguage();
  const copy = t.team;
  const members = copy.members;
  const [active, setActive] = useState(0);
  const member = members[active] ?? members[0];
  const canNavigate = members.length > 1;

  const goPrev = () => {
    if (!canNavigate) return;
    setActive((value) => (value === 0 ? members.length - 1 : value - 1));
  };

  const goNext = () => {
    if (!canNavigate) return;
    setActive((value) => (value === members.length - 1 ? 0 : value + 1));
  };

  return (
    <SectionReveal as="section" id={team.id} className="section team">
      <RevealItem className="team__header">
        <h2 className="team__title">
          {copy.titleLead}
          <span className="weight-semibold">{copy.titleAccent}</span>
        </h2>
        <div className="team__intro">
          <p className="team__kicker">{copy.kicker}</p>
          <p className="team__intro-body">{copy.intro}</p>
        </div>
      </RevealItem>

      <RevealItem className="team-panel">
        <div className="team-panel__copy">
          <p className="team-panel__role">{member.role}</p>
          <h3 className="team-panel__name">{team.featured.name}</h3>
          <p className="team-panel__meta">
            <span>{member.specialty}</span>
            <span>{member.experience}</span>
          </p>
          <p className="team-panel__quote">
            <span className="team-panel__bracket" aria-hidden="true">
              [{"\u00A0"}
            </span>
            <span className="team-panel__quote-text">{member.quote}</span>
            <span className="team-panel__bracket" aria-hidden="true">
              ]
            </span>
          </p>
          <WhatsAppButton
            className="team-panel__cta"
            variant="solid"
            label={t.cta.evaluation}
          />
        </div>

        <div className="team-panel__media">
          <img
            src={team.featured.image.src}
            alt={member.imageAlt}
            width={team.featured.image.width}
            height={team.featured.image.height}
            loading="lazy"
          />

          <ul className="team-panel__tags" aria-label={copy.tagsLabel}>
            {member.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>

          {canNavigate ? (
            <div className="team-panel__controls">
              <button
                type="button"
                className="team-panel__arrow"
                onClick={goPrev}
                aria-label={copy.prev}
              >
                <ArrowIcon direction="prev" />
              </button>
              <button
                type="button"
                className="team-panel__arrow"
                onClick={goNext}
                aria-label={copy.next}
              >
                <ArrowIcon direction="next" />
              </button>
            </div>
          ) : null}
        </div>
      </RevealItem>
    </SectionReveal>
  );
}

function ArrowIcon({ direction }: { direction: "prev" | "next" }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {direction === "prev" ? (
        <path
          d="M14.5 6.5 9 12l5.5 5.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ) : (
        <path
          d="M9.5 6.5 15 12l-5.5 5.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
    </svg>
  );
}
