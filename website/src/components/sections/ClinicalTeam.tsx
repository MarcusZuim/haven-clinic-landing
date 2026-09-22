import { site } from "../../content/site";
import { useLanguage } from "../../i18n/LanguageProvider";
import { RevealItem, SectionReveal } from "../motion/SectionReveal";

export function ClinicalTeam() {
  const { t } = useLanguage();
  const copy = t.team;

  return (
    <SectionReveal as="section" className="section team">
      <RevealItem className="team__intro">
        <div>
          <p className="eyebrow">{copy.eyebrow}</p>
          <h2 id="corpo-clinico-title" className="section-title">
            {copy.title}
          </h2>
        </div>
        <p className="section-body">{copy.body}</p>
      </RevealItem>

      <ol className="team__directory">
        {site.team.map((member, index) => (
          <li className="team__person" key={member.name}>
            <span className="team__index" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3>{member.name}</h3>
            {"cro" in member ? (
              <p className="team__cro">
                {copy.credential} {member.cro}
              </p>
            ) : null}
          </li>
        ))}
      </ol>
    </SectionReveal>
  );
}
